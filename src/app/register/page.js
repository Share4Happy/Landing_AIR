"use client";

import { useEffect, useRef, useState } from 'react'; // Bỏ useFormState, useFormStatus và thêm useState
import styles from './index.module.css';

// Trạng thái ban đầu cho form (thay thế INITIAL_ACTION_STATE)
const INITIAL_FORM_STATE = {
    message: null,
    type: null,
};

// Component nút Submit được cập nhật để nhận prop 'pending'
function SubmitButton({ pending }) {
    return (
        <button type="submit" className={styles.button} disabled={pending}>
            {pending ? 'Đang xử lý...' : 'Gửi thông tin'}
        </button>
    );
}

// Cấu hình các trường của form (giữ nguyên)
const formFields = {
    name: {
        id: 'name', name: 'name', label: 'Họ và tên', type: 'text', required: true
    },
    phone: {
        id: 'phone', name: 'phone', label: 'Số điện thoại', type: 'tel', required: true,
        note: 'Vui lòng sử dụng SĐT có đăng ký Zalo để chúng tôi liên hệ.'
    },
    unit: {
        id: 'unit', name: 'unit', label: 'Đơn vị', type: 'text', required: true
    }
};

const fieldsToRender = ['name', 'phone', 'unit'];

export default function RegistrationForm() {
    // Sử dụng useState để quản lý trạng thái và loading, thay thế cho useFormState
    const [state, setState] = useState(INITIAL_FORM_STATE);
    const [pending, setPending] = useState(false);
    const formRef = useRef(null);

    // Logic reset form khi thành công (giữ nguyên, vẫn hoạt động tốt với useState)
    useEffect(() => {
        if (state.type === 'success') {
            formRef.current?.reset();
        }
    }, [state.type]);

    // Hàm xử lý việc gửi form đến API
    const handleSubmit = async (event) => {
        event.preventDefault(); // Ngăn trình duyệt reload trang
        setPending(true); // Bắt đầu trạng thái loading
        setState(INITIAL_FORM_STATE); // Reset thông báo cũ

        const formData = new FormData(event.target);
        const data = {
            name: formData.get('name'),
            phone: formData.get('phone'),
            // API của bạn yêu cầu 'address', nhưng form có 'unit'.
            // Chúng ta sẽ gửi 'unit' dưới tên 'address' để tương thích API.
            // Nếu API của bạn đã được sửa để nhận 'unit', hãy đổi 'address' thành 'unit'.
            address: formData.get('unit'),
        };

        try {
            const response = await fetch('https://sys.airobotic.edu.vn/api/re', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (!response.ok) {
                // Nếu server trả về lỗi (status 4xx, 5xx)
                throw new Error(result.message || 'Có lỗi xảy ra, vui lòng thử lại.');
            }

            // Xử lý khi thành công
            setState({ type: 'success', message: result.message || 'Gửi thông tin thành công!' });

        } catch (error) {
            // Xử lý khi có lỗi mạng hoặc lỗi từ server
            setState({ type: 'error', message: error.message });
        } finally {
            setPending(false); // Kết thúc trạng thái loading
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Form Đăng ký</h1>
            </div>
            {/* Thay thế 'action' bằng 'onSubmit' */}
            <form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
                {fieldsToRender.map(fieldKey => {
                    const field = formFields[fieldKey];
                    if (!field) return null;

                    return (
                        <div key={field.id} className={styles.formGroup}>
                            <label htmlFor={field.id} className={styles.label}>
                                {field.label} {field.required && <span>*</span>}
                            </label>
                            <input
                                type={field.type}
                                id={field.id}
                                name={field.name}
                                className={styles.input}
                                required={field.required}
                                placeholder={`Nhập ${field.label.toLowerCase()}...`}
                            />
                            {field.note && <p className={styles.note}>{field.note}</p>}
                        </div>
                    );
                })}

                {/* Truyền trạng thái pending vào cho nút Submit */}
                <SubmitButton pending={pending} />

                {/* Hiển thị thông báo (giữ nguyên) */}
                {state.message && (
                    <div className={`${styles.message} ${state.type === 'success' ? styles.success : styles.error}`}>
                        {state.message}
                    </div>
                )}
            </form>
        </div>
    );
}