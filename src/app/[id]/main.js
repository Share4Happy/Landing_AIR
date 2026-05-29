'use client';

import React, { useState, useMemo, useCallback } from 'react';
import CenterPopup from '@/components/(features)/(popup)/popup_center';
import Title from '@/components/(features)/(popup)/title';
import Loading from '@/components/(ui)/(loading)/loading';
import Noti from '@/components/(features)/(noti)/noti';
import { Svg_Course, Svg_Profile, Svg_Canlendar, Svg_Comment, Svg_Image } from '@/components/(icon)/svg';
import styles from './index.module.css';

// --- Các Component con được tách ra để dễ quản lý ---

const SummaryBox = ({ title, data }) => (
  <div className={styles.summaryBox}>
    <p className={styles.summaryTitle}>{title}</p>
    <div className={styles.summaryContent}>
      {data.map(item => (
        <div key={item.label} className={styles.summaryItem}>
          {/* FIX: Thêm fallback value '0' cho các giá trị thống kê */}
          <span className={styles.summaryValue}>{item.value ?? 0}</span>
          <span className={styles.summaryLabel}>{item.label}</span>
        </div>
      ))}
    </div>
  </div>
);

const LegendBlock = () => (
  <div className={styles.legendContainer}>
    {[
      { label: 'Có mặt', class: styles.legendPresent },
      { label: 'Vắng (K)', class: styles.legendAbsentK },
      { label: 'Có phép', class: styles.legendAbsentP },
    ].map(({ label, class: className }) => (
      <div key={label} className={styles.legendItem}>
        <div className={className} />
        <p className="text_6_400">{label}</p>
      </div>
    ))}
  </div>
);

// --- Component chính ---

export default function StudentCourseDetail({ apiData }) {
  // FIX: Xử lý trường hợp apiData chưa có hoặc là null ngay từ đầu
  if (!apiData) {
    return <div className={styles.loadingContainer}><Loading /></div>;
  }

  const {
    studentInfo,
    courseInfo,
    officialLessonStats,
    makeupLessonStats,
    lessons
  } = apiData;

  const [commentPop, setCommentPop] = useState({ open: false, comments: [] });
  const [imagePop, setImagePop] = useState({ open: false, images: [] });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ open: false, status: false, mes: '', link: '' });

  const mapCheckinToString = useCallback((checkinValue) => {
    switch (checkinValue) {
      case 1: return 'Có mặt';
      case 2: return 'Vắng (K)';
      case 3: return 'Có phép';
      default: return 'Chưa điểm danh';
    }
  }, []);

  const processedRows = useMemo(() => {
    // FIX: Xử lý nếu lessons không tồn tại thì trả về mảng rỗng
    if (!lessons) return [];

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return lessons.map(les => {
      const lessonDate = new Date(les.Day);
      return {
        ...les,
        statusDisplay: lessonDate <= today ? 'Đã diễn ra' : 'Chưa diễn ra',
        // FIX: Sử dụng optional chaining và nullish coalescing để an toàn hơn
        attendanceDisplay: mapCheckinToString(les.Learn?.Checkin ?? 0),
      };
    });
  }, [lessons, mapCheckinToString]);

  const handleExport = async () => {
    setToast({ open: true, status: false, mes: 'Chức năng đang được cập nhật!', link: '' });
  };

  const columns = [
    { key: 'TopicName', label: 'Tên chủ đề', flex: 2.5, align: 'flex-start' },
    { key: 'statusDisplay', label: 'Trạng thái', flex: 1, align: 'center' },
    { key: 'Teacher', label: 'Giáo viên', flex: 1.5, align: 'flex-start' },
    { key: 'Time', label: 'Thời gian', flex: 1.5, align: 'flex-start' },
    { key: 'attendanceDisplay', label: 'Điểm danh', flex: 1, align: 'center' },
    { key: 'more', label: 'Chi tiết', flex: 0.8, align: 'center' },
  ];

  const getRowClass = (checkin) => {
    switch (checkin) {
      case 1: return styles.rowPresent;
      case 2: return styles.rowAbsentK;
      case 3: return styles.rowAbsentP;
      default: return '';
    }
  };

  return (
    <div className={styles.pageContainer}>
      <h2 className={styles.pageTitle}>Báo cáo học tập: {studentInfo?.Name ?? 'Đang tải...'}</h2>

      <div className={styles.mainContent}>
        <div className={styles.courseInfoSection}>
          <p className={styles.sectionTitle}>Thông tin khóa học</p>
          <div className={styles.infoGrid}>
            <div className={styles.infoItem}><Svg_Course w={16} h={16} c={'var(--primary-color)'} /><p><b>Tên khóa học:</b> {courseInfo?.courseName ?? 'N/A'}</p></div>
            <div className={styles.infoItem}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width={14} height={14} fill='var(--primary-color)'>
              <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z" /></svg><p><b>Chương trình:</b> {courseInfo?.programName ?? 'N/A'}</p></div>
            <div className={styles.infoItem}><Svg_Canlendar w={16} h={16} c={'var(--primary-color)'} /><p><b>Thời gian học:</b> {courseInfo?.studyTime ?? 'N/A'}</p></div>
            <div className={styles.infoItem}><Svg_Profile w={16} h={16} c={'var(--primary-color)'} /><p><b>Chủ nhiệm:</b> {courseInfo?.headTeacher ?? 'N/A'}</p></div>
            {/* <div className={styles.infoItem}><Svg_Profile w={16} h={16} c={'#0374da'}/><p><b>Điện thoại:</b> {courseInfo?.headTeacherPhone ?? 'N/A'}</p></div> */}
          </div>
        </div>

        <div className={styles.summarySection}>
          <SummaryBox title="Buổi học chính thức" data={[{ value: officialLessonStats?.total, label: 'Tổng buổi' }, { value: officialLessonStats?.attended, label: 'Đã học' }, { value: officialLessonStats?.absent_P, label: 'Vắng (P)' }, { value: officialLessonStats?.absent_K, label: 'Vắng (K)' }]} />
          <SummaryBox title="Chủ đề cần bù" data={[{ value: officialLessonStats?.makeupNeeded, label: 'Chủ đề' }]} />
          <SummaryBox title="Thống kê học bù" data={[{ value: makeupLessonStats?.total, label: 'Tổng buổi' }, { value: makeupLessonStats?.attended, label: 'Có mặt' }, { value: makeupLessonStats?.absent, label: 'Vắng' }]} />
        </div>
      </div>

      <div className={styles.tableContainer}>
        <div className={styles.tableHeader}>
          {columns.map(col => (
            <div key={col.key} className={styles.tableCell} style={{ flex: col.flex, justifyContent: col.align }}>
              {col.label}
            </div>
          ))}
        </div>
        <div className={styles.tableBody}>
          {processedRows.map((row) => (
            <div key={row._id} className={`${styles.tableRow} ${getRowClass(row.Learn?.Checkin)}`}>
              {columns.map(col => {
                let content;
                switch (col.key) {
                  case 'TopicName':
                    content = row.TopicName || 'Chưa có tên chủ đề';
                    break;
                  case 'Teacher':
                    // FIX 2: Sửa `Name` thành `name` để khớp với dữ liệu API
                    content = row.Teacher?.name || 'N/A';
                    break;
                  case 'Time':
                    content = `${row.Time} - ${new Date(row.Day).toLocaleDateString('vi-VN')}`;
                    break;
                  case 'statusDisplay':
                    content = <span className={`${styles.chip} ${row.statusDisplay === 'Đã diễn ra' ? styles.chipGreen : styles.chipRed}`}>{row.statusDisplay}</span>;
                    break;
                  case 'attendanceDisplay':
                    content = row.attendanceDisplay;
                    break;
                  case 'more':
                    content = (
                      <div className={styles.actionIcons}>
                        <button onClick={() => setImagePop({ open: true, images: row.ImageStudent ?? [] })} title="Xem hình ảnh">
                          <Svg_Image w={24} h={24} c={'var(--primary-color)'} />
                        </button>
                        <button onClick={() => setCommentPop({ open: true, comments: row.Learn?.Cmt ?? [] })} title="Xem nhận xét">
                          <Svg_Comment w={24} h={24} c={'var(--primary-color)'} />
                        </button>
                      </div>
                    );
                    break;
                  default:
                    content = row[col.key];
                }
                return (
                  <div key={col.key} className={styles.tableCell} style={{ flex: col.flex, justifyContent: col.align }}>
                    {content}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Các popup không thay đổi nhiều, chỉ đảm bảo dữ liệu truyền vào an toàn */}
      <CenterPopup open={commentPop.open} size="lg" onClose={() => setCommentPop({ ...commentPop, open: false })}>
        <Title content={<p>Nhận xét buổi học</p>} click={() => setCommentPop({ ...commentPop, open: false })} />
        <div className={styles.popupContent}>
          {commentPop.comments.length > 0
            ? <ul className={styles.commentList}>{commentPop.comments.map((c, i) => <li key={i}>{c}</li>)}</ul>
            : <p className="text_6_400">Chưa có nhận xét cho buổi học này.</p>
          }
        </div>
      </CenterPopup>

      <CenterPopup open={imagePop.open} size="lg" onClose={() => setImagePop({ ...imagePop, open: false })}>
        <Title content={<p>Hình ảnh buổi học</p>} click={() => setImagePop({ ...imagePop, open: false })} />
        <div className={styles.popupContent}>
          {imagePop.images.length > 0
            ? <div className={styles.imageGrid}>
              {imagePop.images.map((imgId, i) => (
                // FIX: Giả sử `ImageStudent` là một mảng các string ID của ảnh trên Google Drive
                <a key={imgId || i} href={`https://drive.google.com/uc?id=${imgId}`} target="_blank" rel="noopener noreferrer">
                  <img src={`https://drive.google.com/thumbnail?id=${imgId}`} alt={`Hình ảnh ${i + 1}`} className={styles.popupImage} />
                </a>
              ))}
            </div>
            : <p className="text_6_400">Chưa có hình ảnh cho buổi học này.</p>}
        </div>
      </CenterPopup>

      <Noti open={toast.open} status={toast.status} mes={toast.mes} onClose={() => setToast({ ...toast, open: false })} />
    </div>
  );
}