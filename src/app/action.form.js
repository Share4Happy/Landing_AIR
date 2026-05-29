'use server';

import { google } from 'googleapis';
import mongoose from 'mongoose'; // Cần import để dùng Types.ObjectId
import Form from '@/data/models/form';
import connectDB from '@/data/conectDB';

// =================================================================
// 1. HÀM HELPER - LẤY DỮ LIỆU TỪ DATABASE
// =================================================================
/**
 * Lấy dữ liệu một form từ MongoDB bằng _id.
 * Đã bao gồm kiểm tra tính hợp lệ của _id để tránh lỗi.
 * @param {string} _id ID của form cần lấy.
 * @returns {Promise<object|boolean>} Trả về document của form nếu tìm thấy, ngược lại trả về false.
 */
export async function dataForm(_id) {
    // Dùng hàm có sẵn của Mongoose để kiểm tra định dạng ID
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return false;
    }
    await connectDB();
    const form = await Form.findById(_id);
    if (!form) {
        return false;
    }
    return JSON.parse(JSON.stringify(form));
}


// =================================================================
// 2. CẤU HÌNH & KẾT NỐI DỊCH VỤ GOOGLE
// =================================================================
const SPREADSHEET_ID = '1ZQsHUyVD3vmafcm6_egWup9ErXfxIg4U-TfVDgDztb8';
const RANGE_DATA = 'Data';
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyeqJBEI-XJsySpuQzcum1fHQwcJjcSZ7fxHoLUqdzuZ5EuznCBz_-qVOm50JoHtrDB2g/exec';

/**
 * Hàm khởi tạo và xác thực quyền truy cập Google Sheets API.
 * @returns {Promise<object>} Một instance của sheets API đã được xác thực.
 */
async function getSheets() {
    const auth = new google.auth.GoogleAuth({
        credentials: {
            client_email: process.env.GOOGLE_CLIENT_EMAIL,
            private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
        },
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });
    return google.sheets({ version: 'v4', auth });
}


export async function addRegistrationToAction(_previousState, formData) {
    // --- BƯỚC 1: LẤY DỮ LIỆU, CHỈ CÓ PHONE LÀ BẮT BUỘC ---
    const rawFormData = {
        name: formData.get('name')?.trim(),
        nameparent: formData.get('nameparent')?.trim(),
        phone: formData.get('phone')?.trim(),
        email: formData.get('email')?.trim(),
        bd: formData.get('bd'), // Lấy giá trị gốc để kiểm tra
        area: formData.get('area')?.trim(),
        source: formData.get('source')?.trim(),
        sourceName: formData.get('sourceName')?.trim(),
    };

    // --- BƯỚC 2: VALIDATE DỮ LIỆU ---

    // Chỉ có SĐT là bắt buộc và phải đúng định dạng
    if (!rawFormData.phone) {
        return { message: 'Vui lòng nhập số điện thoại.', type: 'error' };
    }
    const phoneRegex = /^0\d{9}$/;
    if (!phoneRegex.test(rawFormData.phone)) {
        return { message: 'Số điện thoại không hợp lệ. Vui lòng kiểm tra lại.', type: 'error' };
    }

    // THAY ĐỔI: Chỉ xử lý và validate ngày sinh nếu nó được cung cấp
    let formattedBirthDate = ''; // Mặc định là chuỗi rỗng
    if (rawFormData.bd) {
        const birthDate = new Date(rawFormData.bd);
        if (isNaN(birthDate.getTime())) {
            // Nếu ngày sinh được nhập nhưng không hợp lệ -> báo lỗi
            return { message: 'Ngày sinh không hợp lệ.', type: 'error' };
        }
        formattedBirthDate = birthDate.toLocaleDateString('vi-VN');
    }

    // --- BƯỚC 3: CHUẨN BỊ DỮ LIỆU ĐỂ GỬI ĐI ---

    const createAt = new Date();
    const formattedCreateAt = createAt.toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' });

    // THAY ĐỔI: Thêm `|| ''` để đảm bảo không có giá trị "undefined" trong tin nhắn
    const messageForAppScript = `📅 Đăng ký từ Form ${rawFormData.sourceName || 'Form trực tiếp'}
-----------------------------------
Họ và Tên PH: ${rawFormData.nameparent || 'Không có'}
Liên hệ: ${rawFormData.phone}
Tên HS: ${rawFormData.name || 'Không có'}
Ngày sinh: ${formattedBirthDate || 'Không có'}
Khu vực: ${rawFormData.area || 'Không có'}
Thời gian: ${formattedCreateAt}`;

    // THAY ĐỔI: Giữ nguyên cấu trúc cột cho Google Sheet.
    // Dùng `|| ''` để điền vào các ô trống nếu dữ liệu không có.
    const newRowForSheet = [
        rawFormData.nameparent || '', // Cột 1: Tên PH
        rawFormData.phone,            // Cột 2: SĐT (luôn có)
        rawFormData.name || '',       // Cột 3: Tên HS
        rawFormData.email || '',      // Cột 4: Email
        formattedBirthDate,           // Cột 5: Ngày sinh (đã xử lý ở trên)
        rawFormData.area || '',       // Cột 6: Khu vực
        rawFormData.source || '',     // Cột 7: Nguồn
        formattedCreateAt,            // Cột 8: Thời gian (luôn có)
    ];

    // --- BƯỚC 4: THỰC THI GỬI DỮ LIỆU ---
    try {
        await Promise.all([
            // Gửi tới Google Sheets
            (async () => {
                const sheets = await getSheets();
                await sheets.spreadsheets.values.append({
                    spreadsheetId: SPREADSHEET_ID,
                    range: RANGE_DATA,
                    valueInputOption: 'USER_ENTERED',
                    insertDataOption: 'INSERT_ROWS',
                    requestBody: { values: [newRowForSheet] },
                });
            })(),
            // Gửi thông báo qua Apps Script
            (async () => {
                const encodedMessage = encodeURIComponent(messageForAppScript);
                const url = `${APPS_SCRIPT_URL}?mes=${encodedMessage}`;
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Apps Script request failed with status ${response.status}`);
                }
            })(),
        ]);

        return { message: 'Đăng ký thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất.', type: 'success' };

    } catch (error) {
        console.error("Lỗi khi xử lý đăng ký:", error);
        if (error.code === 11000 && error.keyPattern?.phone) {
            return { message: 'Số điện thoại này đã được đăng ký trước đó.', type: 'error' };
        }
        return { message: 'Lỗi hệ thống, không thể gửi đăng ký. Vui lòng thử lại sau.', type: 'error' };
    }
}