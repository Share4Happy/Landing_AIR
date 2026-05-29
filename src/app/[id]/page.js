import React from 'react';
import dynamic from 'next/dynamic';

const StudentCourseDetail = dynamic(
    () => import('./main')
        .catch(err => {
            console.error("Failed to load StudentCourseDetail component:", err);
            return () => <div>Không thể tải được component chi tiết. Vui lòng kiểm tra console log.</div>;
        }), 
    { 
        ssr: false, 
        loading: () => (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
                <p>Đang tải dữ liệu chi tiết...</p>
            </div>
        )
    }
);

async function getStudentCourseData(id) {
    try {
        const apiUrl = `https://sys.airobotic.edu.vn/api/studentcourse/${id}`;
        const response = await fetch(apiUrl, { cache: 'no-store' });

        if (!response.ok) {
            console.error(`API call failed with status: ${response.status}`);
            return null;
        }
        const result = await response.json();
        return result.status ? result.data : null;

    } catch (error) {
        console.error('Failed to fetch student course data:', error);
        return null;
    }
}

export default async function StudentDetailPage({ params }) {
    const { id } = params;
    const data = await getStudentCourseData(id);
    
    if (!data) {
        return (
            <main style={{ padding: '40px', textAlign: 'center' }}>
                <h1 style={{ marginBottom: '16px' }}>Lỗi Tải Dữ Liệu</h1>
                <p>Không thể tải được thông tin chi tiết của học sinh và khóa học.</p>
                <p>Vui lòng kiểm tra lại đường dẫn hoặc thử lại sau.</p>
            </main>
        );
    }

    return (
        <main>
            <StudentCourseDetail apiData={data} />
        </main>
    );
}
