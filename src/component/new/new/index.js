import React, { useState, useEffect, memo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const containerStyle = {
  width: '80%',
  margin: '0 auto',
  overflow: 'hidden',
};
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
  aspectRatio: '16/9',
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

const fallbackArticles = [
  {
    title: { rendered: 'Khám phá thế giới AI & Robotics cho thế hệ tương lai' },
    excerpt: { rendered: 'Chương trình đào tạo giúp học sinh tiếp cận sớm với tư duy lập trình và chế tạo robot thông minh.' },
    date: '2024-05-15',
    link: '#',
    image: '/images/news/news-3.png',
  },
  {
    title: { rendered: 'Ứng dụng Trí tuệ nhân tạo và Tự động hóa trong giáo dục STEM' },
    excerpt: { rendered: 'Phát triển tư duy sáng tạo, kỹ năng giải quyết vấn đề thông qua các dự án robot thực tế.' },
    date: '2024-06-20',
    link: '#',
    image: '/images/news/news-6.png',
  },
  {
    title: { rendered: 'Ngày hội trải nghiệm công nghệ AI Robotic' },
    excerpt: { rendered: 'Sân chơi khoa học công nghệ hấp dẫn với nhiều hoạt động trải nghiệm robot tương tác trực tiếp.' },
    date: '2024-07-10',
    link: '#',
    image: '/images/news/news-1.png',
  },
];

const Article = memo(({ article }) => {
  const imageUrl = article['_embedded']?.['wp:featuredmedia']?.[0]?.['media_details']?.['file']
    ? `https://s4h.edu.vn/wp-content/uploads/${article['_embedded']['wp:featuredmedia'][0]['media_details']['file']}`
    : (article.image || '/images/news/news-3.png');

  const rawTitle = typeof article?.title === 'object' ? (article.title?.rendered || '') : (article?.title || '');
  const cleanTitle = rawTitle.replace(/<[^>]+>/g, '').replaceAll('&#8211;', '-').replaceAll('&amp;', '&');

  const rawExcerpt = typeof article?.excerpt === 'object' ? (article.excerpt?.rendered || '') : (article?.excerpt || '');
  const cleanExcerpt = rawExcerpt.replace(/<[^>]+>/g, '').replaceAll('&#8211;', '-').replaceAll('&amp;', '&');

  const dateStr = article?.date ? new Date(article.date).toLocaleDateString('vi-VN') : '';

  return (
    <div style={{ padding: '10px' }}>
      <div style={articleContainerStyle}>
        {imageUrl && (
          <div
            style={{ ...imageStyle, backgroundImage: `url(${imageUrl})` }}
            role="presentation"
          ></div>
        )}
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
            {cleanTitle}
          </h3>
          {dateStr && (
            <p className="text_4_m" style={{ textAlign: 'start', margin: 10 }}>
              Ngày đăng: {dateStr}
            </p>
          )}
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
            {cleanExcerpt}
          </p>
          <a
            className="text_3_m"
            href={article?.link || '#'}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Xem thêm chi tiết về bài viết ${cleanTitle}`}
          >
            <div style={buttonStyle}>
              Xem thêm
            </div>
          </a>
        </div>
      </div>
    </div>
  );
});

export default function Neww() {
  const [data, setData] = useState(fallbackArticles);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        const response = await fetch('https://s4h.edu.vn/wp-json/wp/v2/posts?_embed', {
          headers: { Accept: 'application/json' },
        });
        if (!response.ok) return;
        const jsonData = await response.json();
        if (isMounted && Array.isArray(jsonData) && jsonData.length > 0) {
          setData(jsonData);
        }
      } catch (error) {
        // Fallback articles are already shown when fetch fails
      }
    };

    fetchData();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div style={containerStyle}>
      <h2 style={{ color: 'var(--main)', padding: '30px 0 10px 10px ' }} className="text_1">
        Các tin tức
      </h2>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={3}
        spaceBetween={20}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          1024: {
            slidesPerView: 3, // Show 3 slides per view on screens 1024px and above
          },
          0: {
            slidesPerView: 1, // Show 1 slide per view on screens below 1024px
          },
        }}
        a11y={{
          enabled: true,
          slideLabelMessage: 'Slide {index} of {total}',
        }}
      >
        {data.map((article, index) => (
          <SwiperSlide key={index}>
            <Article article={article} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
