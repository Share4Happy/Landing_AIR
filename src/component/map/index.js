'use client';
import { useState, memo } from 'react';
import vam from './index.module.css';
const wrapperStyle = {
  padding: '20px 0',
  background: 'var(--main)',
  borderRadius: 8,
  color: 'white',
  textAlign: 'center',
  cursor: 'pointer',
  margin: '20px 0'
};

const courseListStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  padding: '30px 0',
};

const Course = memo(({ data, ariaLabel }) => (
  <div style={courseListStyle}>
    {data.map((item, index) => (
      <a target="_blank" href={item.link} key={index} aria-label={ariaLabel} rel="noopener noreferrer">
        <div className={vam.img} style={{ backgroundImage: `url(${item.imgSrc})` }}></div>
      </a>
    ))}
  </div>
));

export default function Map() {
  const [activeTab, setActiveTab] = useState('c1');

  return (
    <div style={{ width: '80%', margin: '30px auto' }}>
      <div
        className={vam.wrap}
        style={wrapperStyle}
        onClick={() => setActiveTab('c1')}
      >
        <p className="text_1" style={{color: 'white'}}>Các khóa học dành cho học sinh Tiểu học</p>
      </div>
      {activeTab === 'c1' && <Course data={courseData.c1} ariaLabel="Khóa cấp 1" />}

      <div
        className={vam.wrap}
        style={wrapperStyle}
        onClick={() => setActiveTab('c2')}
      >
        <p className="text_1" style={{color: 'white'}}>Các khóa học dành cho học sinh Trung học</p>
      </div>
      {activeTab === 'c2' && <Course data={courseData.c2} ariaLabel="Khóa cấp 2" />}

      <div
        className={vam.wrap}
        style={wrapperStyle}
        onClick={() => setActiveTab('c3')}
      >
        <p className="text_1" style={{color: 'white'}}>Các khóa học dành cho học sinh Trung học phổ thông</p>
      </div>
      {activeTab === 'c3' && <Course data={courseData.c3} ariaLabel="Khóa cấp 3" />}
    </div>
  );
}
const courseData = {
  c1: [
    { imgSrc: 'https://lh3.googleusercontent.com/d/1gLQ8C7QOEQ5K6KTUM99GHuSk5rvVayxb', link: 'https://s4h.edu.vn/hoc-lap-trinh-cho-hoc-sinh-cap-1/' },
    { imgSrc: 'https://lh3.googleusercontent.com/d/1rW2XZGexqU8aGjhOse8wIgtnThRVhLYC', link: 'https://s4h.edu.vn/hoc-lap-trinh-cho-hoc-sinh-cap-1/' },
    { imgSrc: 'https://lh3.googleusercontent.com/d/1p18Lym3yPUFZM0PAOE9PJM7geTeODwry', link: 'https://s4h.edu.vn/hoc-lap-trinh-cho-hoc-sinh-cap-1/' },
    { imgSrc: 'https://lh3.googleusercontent.com/d/1ldCKpkew2M0NmY3OwLC3RR2Vn8yGpiS8', link: 'https://s4h.edu.vn/hoc-lap-trinh-cho-hoc-sinh-cap-1/' },
    { imgSrc: 'https://lh3.googleusercontent.com/d/179qQL2x4sZae5Amzkfdx6GKIVOyjPwU_', link: 'https://s4h.edu.vn/hoc-lap-trinh-cho-hoc-sinh-cap-1/' }
  ],
  c2: [
    { imgSrc: 'https://lh3.googleusercontent.com/d/1RWbPuSMeevVgxltvEif4YXLQssq-9YOz', link: 'https://s4h.edu.vn/hoc-lap-trinh-cho-hoc-sinh-cap-2/' },
    { imgSrc: 'https://lh3.googleusercontent.com/d/170p12bklzSnLsQQpORxF4wdDxrieMDrB', link: 'https://s4h.edu.vn/hoc-lap-trinh-cho-hoc-sinh-cap-2/' },
    { imgSrc: 'https://lh3.googleusercontent.com/d/1lyZXUWQmMD7i9RNc0am6GMxJBaQQUfG8', link: 'https://s4h.edu.vn/hoc-lap-trinh-cho-hoc-sinh-cap-2/' },
    { imgSrc: 'https://lh3.googleusercontent.com/d/14M_wQ6_fj42rePCZ_H8apwYggHKFVTKV', link: 'https://s4h.edu.vn/hoc-lap-trinh-cho-hoc-sinh-cap-2/' }
  ],
  c3: [
    { imgSrc: 'https://lh3.googleusercontent.com/d/1yap51H3RomM_OaKoGGo0Xe4RfOWVvwYR', link: 'https://s4h.edu.vn/hoc-lap-trinh-cho-hoc-sinh-cap-3/' },
    { imgSrc: 'https://lh3.googleusercontent.com/d/10VjhFwyvTGeEig48_lHRPh7iqyRmb51y', link: 'https://s4h.edu.vn/hoc-lap-trinh-cho-hoc-sinh-cap-3/' },
    { imgSrc: 'https://lh3.googleusercontent.com/d/1iaGSYbjcIWNt8D2Ld94LnJVRnzVVL43D', link: 'https://s4h.edu.vn/hoc-lap-trinh-cho-hoc-sinh-cap-3/' },
    { imgSrc: 'https://lh3.googleusercontent.com/d/11BmYqWHy_E7HAvEkVW10f8ayBwa_Rtp-', link: 'https://s4h.edu.vn/hoc-lap-trinh-cho-hoc-sinh-cap-3/' },
    { imgSrc: 'https://lh3.googleusercontent.com/d/1p3IgW6YGrLcOmqBS0oVtD9CWJG6SUI8E', link: 'https://s4h.edu.vn/hoc-lap-trinh-cho-hoc-sinh-cap-3/' },
    { imgSrc: 'https://lh3.googleusercontent.com/d/10cdabSyfLF8yuTwFuK_oKaLCMp2Tf7Rb', link: 'https://s4h.edu.vn/hoc-lap-trinh-cho-hoc-sinh-cap-3/' }
  ]
}