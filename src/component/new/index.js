'use client';
import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import Neww from './new';
import { FadeIn } from '@/component/motion';

const containerStyle = { width: '90%', margin: '30px auto' };
const headerStyle = { padding: '20px 0', background: 'var(--main)', borderRadius: 8 };
const sliderContainerStyle = { width: '80%', margin: '0 auto', overflow: 'hidden' };
const articleContainerStyle = {
  border: '1px solid #ddd',
  borderRadius: '8px',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  margin: 10,
};
const imageStyle = {
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '200px',
};
const contentStyle = { padding: '10px', textAlign: 'center' };
const buttonStyle = {
  padding: '8px 15px',
  background: 'var(--main)',
  borderRadius: '5px',
  marginTop: 12,
  width: '100%',
  color: 'white',
  cursor: 'pointer',
};

// Article component
const Article = memo(({ article }) => (
  <div style={{ padding: '10px' }}>
    <motion.div
      style={articleContainerStyle}
      whileHover={{ y: -6, boxShadow: '0 12px 24px rgba(0, 0, 0, 0.12)' }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        style={{ ...imageStyle, backgroundImage: `url(${article.imgSrc})` }}
        role="presentation"
      ></div>

      <div style={contentStyle}>
        <h3
          className="text_3"
          style={{
            display: '-webkit-box',
            WebkitLineClamp: 1,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            margin: '10px',
            textAlign: 'start',
          }}
        >
          {article.title}
        </h3>

        <p className="text_4_m" style={{ textAlign: 'start', margin: 10 }}>
          Nguồn: {article.description}
        </p>

        <p
          className="text_3_m"
          style={{
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            margin: '10px',
            textAlign: 'start',
          }}
        >
          {article.text}
        </p>

        <a
          className="text_3_m"
          href={article.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Xem thêm chi tiết về bài viết ${article.title}`}
        >
          <motion.div
            style={buttonStyle}
            whileHover={{ scale: 1.02, backgroundColor: '#0d47a1' }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            Xem Thêm
          </motion.div>
        </a>
      </div>
    </motion.div>
  </div>
));

// Main component with Swiper
export default function New() {
  return (
    <FadeIn direction="up" duration={0.8} style={containerStyle}>
      <div style={headerStyle}>
        <p className="text_1" style={{ color: 'white', textAlign: 'center' }}>
          TRUYỀN THÔNG NÓI VỀ CHÚNG TÔI
        </p>
      </div>
      <div style={sliderContainerStyle}>
        <h2 style={{ color: 'var(--main)', padding: '30px 0 10px 10px ' }} className="text_1">
          Các bài báo
        </h2>
        <Swiper
          modules={[Autoplay]}
          slidesPerView={3}
          spaceBetween={20}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            1024: { slidesPerView: 3 },
            0: { slidesPerView: 1 },
          }}
          a11y={{
            enabled: true,
            prevSlideMessage: 'Previous slide',
            nextSlideMessage: 'Next slide',
            slideLabelMessage: 'Slide {index} of {total}',
          }}
          onInit={(swiper) => {
            // Remove aria-hidden from active slides only for accessibility
            swiper.slides.forEach((slide) => {
              slide.setAttribute('aria-hidden', 'true');
            });
            swiper.slides[swiper.activeIndex].setAttribute('aria-hidden', 'false');
          }}
          onSlideChange={(swiper) => {
            // Update aria-hidden attribute based on active slide
            swiper.slides.forEach((slide) => {
              slide.setAttribute('aria-hidden', 'true');
            });
            swiper.slides[swiper.activeIndex].setAttribute('aria-hidden', 'false');
          }}
        >
          {articles.map((article, index) => (
            <SwiperSlide key={index}>
              <Article article={article} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Neww />
    </FadeIn>
  );
}

const articles = [
  {
    imgSrc: '/images/news/news-1.png',
    title: 'Độc đáo robot múa cờ chào mừng lễ Quốc khánh',
    description: 'BÁO THANH NIÊN',
    text: 'Các thành viên thuộc CLB Khoa học và Công nghệ, Trường ĐH Lạc Hồng, đã cho ra mắt “đoàn nghệ thuật robot” biểu diễn tiết mục múa cờ bài Hát mãi khúc quân hành.',
    link: 'https://thanhnien.vn/doc-dao-robot-mua-co-chao-mung-le-quoc-khanh-185230902124655492.htm',
  },
  {
    imgSrc: '/images/news/news-2.png',
    title: '"Thủ thư AI" hướng dẫn từ A-Z',
    description: 'BÁO NGƯỜI LAO ĐỘNG',
    text: 'Chỉ mất chưa đầy 1 phút, sinh viên có thể dễ dàng tìm một cuốn sách giữa hàng ngàn cuốn trong thư viện nhờ sự hỗ trợ của "thủ thư AI".',
    link: 'https://nld.com.vn/viec-lam/thu-thu-ai-huong-dan-tu-a-z-20231111212626825.htm?fbclid=IwAR2uCEzX-QcClGsV3QhuQIBi7ea9eXa7a3tvAEjoVNBDuGDq9OCUF87YDNo',
  },
  {
    imgSrc: '/images/news/news-3.png',
    title: 'Trải nghiệm thú vị với AI Robotics',
    description: 'BÁO ĐỒNG NAI',
    text: 'Mùa hè này, một số học sinh tiểu học, THCS trên địa bàn TP.Biên Hòa có cơ hội làm quen, trải nghiệm với Robotics và AI (trí tuệ nhân tạo) tại CLB Khoa học công nghệ (KH-CN) Trường đại học Lạc Hồng.',
    link: 'https://baodongnai.com.vn/dong-nai-cuoi-tuan/202306/trai-nghiem-thu-vi-voi-ai-robotics-3169739/',
  },
  {
    imgSrc: '/images/news/news-4.png',
    title: 'Đổi mới sáng tạo trong phát triển kinh tế số',
    description: 'BÁO ĐỒNG NAI',
    text: 'Hiện nay, hội nhập quốc tế ngày càng trở nên sâu rộng, công nghệ số, mạng xã hội phát triển ngày càng nhanh, thị hiếu tiêu dùng có nhiều thay đổi… Điều này đòi hỏi các địa phương, doanh nghiệp (DN) nâng cao năng lực cạnh tranh thông qua việc đổi mới sáng tạo (ĐMST) trong thời đại số.',
    link: 'https://baodongnai.com.vn/chuyen-doi-so/202310/doi-moi-sang-tao-trong-phat-trien-kinh-te-so-6f87b52/',
  },
  {
    imgSrc: '/images/news/news-5.png',
    title: 'Ngành học mới “hút” học sinh, sinh viên',
    description: 'BÁO ĐỒNG NAI',
    text: 'Năm học này, nhiều trường đại học, cao đẳng đều mở những ngành học mới như truyền thông đa phương tiện, trí tuệ nhân tạo… Trong đó nhiều ngành học dù mới mở nhưng được đánh giá là có sức hút với học sinh, sinh viên.',
    link: 'https://baodongnai.com.vn/media/202310/nganh-hoc-moi-hut-hoc-sinh-sinh-vien-75e69a5/',
  },
  {
    imgSrc: '/images/news/news-6.png',
    title: 'Sôi động Ngày hội giáo dục STEM PLUS',
    description: 'BÁO ĐỒNG NAI',
    text: 'Chiều 30-3, Trường TH-THCS-THPT Song ngữ Lạc Hồng (phường Bửu Long, thành phố Biên Hòa) đã tổ chức Ngày hội giáo dục STEM PLUS. Đây là hoạt động giáo dục STEM quy mô lớn với gần 40 gian trưng bày các dự án giáo dục STEM được gắn với các môn học và lĩnh vực lập trình robot, công nghệ trí tuệ nhân tạo (AI).',
    link: 'https://baodongnai.com.vn/xa-hoi/202403/chum-anh-soi-dong-ngay-hoi-giao-duc-stem-plus-34f3b6c/',
  },
  {
    imgSrc: '/images/news/news-7.png',
    title: 'Trình diễn robot mừng kỷ niệm 30-4',
    description: 'BÁO ĐỒNG NAI',
    text: 'Nhân kỷ niệm 49 năm Ngày giải phóng hoàn toàn miền Nam, thống nhất đất nước (30-4), sinh viên ngành trí tuệ nhân tạo kết hợp ngành truyền thông đa phương tiện (thuộc khoa Công nghệ thông tin, Trường đại học Lạc Hồng) đã tổ chức chương trình trình diễn robot với chủ đề "Vũ điệu cờ Việt Nam".',
    link: 'https://baodongnai.com.vn/tin-moi/202404/trinh-dien-robot-mung-ky-niem-30-4-f42376b/',
  },
  {
    imgSrc: '/images/news/news-8.png',
    title: 'Robot do sinh viên sáng chế trình diễn Vũ điệu cờ Việt Nam chào mừng lễ 30.4',
    description: 'BÁO THANH NIÊN',
    text: 'Nhân kỷ niệm 49 năm ngày thống nhất đất nước (30.4.1975 - 30.4.2024), nhóm sinh viên ngành trí tuệ nhân tạo kết hợp cùng ngành truyền thông đa phương tiện (Khoa Công nghệ thông tin, Trường ĐH Lạc Hồng) đã tổ chức chương trình trình diễn robot đầy ấn tượng với chủ đề "Vũ điệu cờ Việt Nam".',
    link: 'https://thanhnien.vn/robot-do-sinh-vien-sang-che-trinh-dien-vu-dieu-co-viet-nam-chao-mung-le-304-185240430132559558.htm',
  },
  {
    imgSrc: '/images/news/news-9.png',
    title: 'Robot do sinh viên sáng chế trình diễn "Vũ điệu cờ Việt Nam" chào mừng lễ 30.4',
    description: 'TRUYỀN HÌNH BẮC GIANG',
    text: 'Nhân kỷ niệm 49 năm ngày thống nhất đất nước (30.4.1975 - 30.4.2024), nhóm sinh viên ngành trí tuệ nhân tạo kết hợp cùng ngành truyền thông đa phương tiện (Khoa Công nghệ thông tin, Trường ĐH Lạc Hồng) đã tổ chức chương trình trình diễn robot đầy ấn tượng với chủ đề "Vũ điệu cờ Việt Nam".',
    link: 'https://bacgiangtv.vn/tin-tuc/9/163413/robot-do-sinh-vien-sang-che-trinh-dien-vu-dieu-co-viet-nam-chao-mung-le-30-4',
  },
  {
    imgSrc: '/images/news/news-10.png',
    title: 'Độc đáo Robot do sinh viên huấn luyện múa ‘Hào khí Việt Nam’ mừng ngày thống nhất',
    description: 'BÁO TIÊN PHONG',
    text: 'Một nhóm sinh viên của khoa Công nghệ thông tin - Trường ĐH Lạc Hồng đã lập trình điều khiển, huấn luyện các chú Robot Cruzr, robot Alpha Mini và robot Yanshee thực hiện các động tác múa trong bài hát "Hào khí Việt Nam" nhằm chào mừng Ngày giải phóng miền Nam, thống nhất đất nước (30/4/1975 - 30/4/2024) gây nhiều hứng thú cho người xem.',
    link: 'https://tienphong.vn/doc-dao-robot-do-sinh-vien-huan-luyen-mua-hao-khi-viet-nam-mung-ngay-thong-nhat-post1633120.tpo',
  },
  {
    imgSrc: '/images/news/news-11.png',
    title: 'Xem robot múa của sinh viên chào mừng dịp lễ 30-4',
    description: 'BÁO NGƯỜI LAO ĐỘNG',
    text: 'Nhân dịp lễ 30-4 năm nay, nhóm sinh viên Trường ĐH Lạc Hồng đã lên kế hoạch thực hiện các buổi biểu diễn chào mừng bằng robot. Buổi biểu diễn được tổ chức tại các địa điểm như bảo tàng Đồng Nai, Dinh Độc Lập, Hồ Con Rùa,… Những "nghệ sĩ múa" tham gia gồm robot Yanshee, robot Cruzr và robot Alpha Mini.',
    link: 'https://baomoi.com/xem-robot-mua-cua-sinh-vien-chao-mung-dip-le-30-4-c48967806.epi',
  },
];