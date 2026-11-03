'use client';
import { useState, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import vam from './index.module.css';
import { FadeIn } from '@/component/motion';

const wrapperStyle = {
  padding: '18px 24px',
  background: 'linear-gradient(135deg, #1565c0 0%, #0d47a1 100%)',
  borderRadius: 10,
  color: 'white',
  cursor: 'pointer',
  margin: '18px 0 10px 0',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  userSelect: 'none',
  transition: 'box-shadow 0.3s ease',
};

const courseListStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  padding: '16px 0 24px 0',
};

const Course = memo(({ data, ariaLabel }) => (
  <motion.div
    style={courseListStyle}
    initial="hidden"
    animate="visible"
    exit="exit"
    variants={{
      hidden: { opacity: 0, height: 0 },
      visible: {
        opacity: 1,
        height: 'auto',
        transition: {
          staggerChildren: 0.1,
          duration: 0.4,
          ease: [0.22, 1, 0.36, 1],
        },
      },
      exit: {
        opacity: 0,
        height: 0,
        transition: { duration: 0.25 },
      },
    }}
  >
    {data.map((item, index) => (
      <motion.a
        target="_blank"
        href={item.link}
        key={index}
        aria-label={ariaLabel}
        rel="noopener noreferrer"
        variants={{
          hidden: { opacity: 0, y: 15 },
          visible: { opacity: 1, y: 0 },
        }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.25 }}
        style={{ display: 'block', borderRadius: 10, overflow: 'hidden' }}
      >
        <div className={vam.img} style={{ backgroundImage: `url(${item.imgSrc})` }}></div>
      </motion.a>
    ))}
  </motion.div>
));

export default function Map() {
  const [activeTab, setActiveTab] = useState('c1');

  const tabs = [
    { id: 'c1', title: 'Các khóa học dành cho học sinh Tiểu học', data: courseData.c1, label: 'Khóa cấp 1' },
    { id: 'c2', title: 'Các khóa học dành cho học sinh Trung học', data: courseData.c2, label: 'Khóa cấp 2' },
    { id: 'c3', title: 'Các khóa học dành cho học sinh Trung học phổ thông', data: courseData.c3, label: 'Khóa cấp 3' },
  ];

  return (
    <FadeIn direction="up" duration={0.8} className={vam.container}>
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <div key={tab.id}>
            <motion.div
              className={vam.wrap}
              style={{
                ...wrapperStyle,
                boxShadow: isActive
                  ? '0 8px 24px rgba(21, 101, 192, 0.4)'
                  : '0 2px 8px rgba(0, 0, 0, 0.08)',
              }}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              onClick={() => setActiveTab(isActive ? '' : tab.id)}
            >
              <p className="text_1" style={{ color: 'white', margin: 0, fontSize: 'clamp(0.95rem, 2.8vw, 1.15rem)', lineHeight: 1.35 }}>
                {tab.title}
              </p>
              <motion.span
                animate={{ rotate: isActive ? 180 : 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.9rem',
                  color: 'rgba(255, 255, 255, 0.9)',
                  marginLeft: 12,
                }}
              >
                ▼
              </motion.span>
            </motion.div>
            <AnimatePresence>
              {isActive && <Course data={tab.data} ariaLabel={tab.label} />}
            </AnimatePresence>
          </div>
        );
      })}
    </FadeIn>
  );
}

const courseData = {
  c1: [
    { imgSrc: '/images/courses/course-c1-1.png', link: 'https://s4h.edu.vn/hoc-lap-trinh-cho-hoc-sinh-cap-1/' },
    { imgSrc: '/images/courses/course-c1-2.png', link: 'https://s4h.edu.vn/hoc-lap-trinh-cho-hoc-sinh-cap-1/' },
    { imgSrc: '/images/courses/course-c1-3.png', link: 'https://s4h.edu.vn/hoc-lap-trinh-cho-hoc-sinh-cap-1/' },
    { imgSrc: '/images/courses/course-c1-4.png', link: 'https://s4h.edu.vn/hoc-lap-trinh-cho-hoc-sinh-cap-1/' },
    { imgSrc: '/images/courses/course-c1-5.png', link: 'https://s4h.edu.vn/hoc-lap-trinh-cho-hoc-sinh-cap-1/' }
  ],
  c2: [
    { imgSrc: '/images/courses/course-c2-1.png', link: 'https://s4h.edu.vn/hoc-lap-trinh-cho-hoc-sinh-cap-2/' },
    { imgSrc: '/images/courses/course-c2-2.png', link: 'https://s4h.edu.vn/hoc-lap-trinh-cho-hoc-sinh-cap-2/' },
    { imgSrc: '/images/courses/course-c2-3.png', link: 'https://s4h.edu.vn/hoc-lap-trinh-cho-hoc-sinh-cap-2/' },
    { imgSrc: '/images/courses/course-c2-4.png', link: 'https://s4h.edu.vn/hoc-lap-trinh-cho-hoc-sinh-cap-2/' }
  ],
  c3: [
    { imgSrc: '/images/courses/course-c3-1.png', link: 'https://s4h.edu.vn/hoc-lap-trinh-cho-hoc-sinh-cap-3/' },
    { imgSrc: '/images/courses/course-c3-2.png', link: 'https://s4h.edu.vn/hoc-lap-trinh-cho-hoc-sinh-cap-3/' },
    { imgSrc: '/images/courses/course-c3-3.png', link: 'https://s4h.edu.vn/hoc-lap-trinh-cho-hoc-sinh-cap-3/' },
    { imgSrc: '/images/courses/course-c3-4.png', link: 'https://s4h.edu.vn/hoc-lap-trinh-cho-hoc-sinh-cap-3/' },
    { imgSrc: '/images/courses/course-c3-5.png', link: 'https://s4h.edu.vn/hoc-lap-trinh-cho-hoc-sinh-cap-3/' },
    { imgSrc: '/images/courses/course-c3-6.png', link: 'https://s4h.edu.vn/hoc-lap-trinh-cho-hoc-sinh-cap-3/' }
  ]
};
