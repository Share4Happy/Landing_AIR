import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const data = await request.json();
        const { name, nameparent, phone, bd } = data;
        if (!name || !nameparent || !phone || !bd) {
            return NextResponse.json(
                { message: 'Vui lòng điền đầy đủ các trường bắt buộc.' },
                { status: 400 } 
            );
        }
        console.log('Dữ liệu nhận được:', data);
        return NextResponse.json(
            { message: `Đăng ký thành công cho học sinh ${name}!` },
            { status: 201 }
        );

    } catch (error) {
        console.error('Lỗi API:', error);
        return NextResponse.json(
            { message: error.message || 'Có lỗi xảy ra phía máy chủ. Vui lòng thử lại.' },
            { status: 500 }
        );
    }
}