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

const Article = memo(({ article }) => {
  const imageUrl = article['_embedded']?.['wp:featuredmedia']?.[0]?.['media_details']?.['file']
    ? `https://s4h.edu.vn/wp-content/uploads/${article['_embedded']['wp:featuredmedia'][0]['media_details']['file']}`
    : '';

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
            {article['title']['rendered'].replaceAll('&#8211;', '-')}
          </h3>
          <p className="text_4_m" style={{ textAlign: 'start', margin: 10 }}>
            Ngày đăng: {new Date(article.date).toLocaleDateString('vi-VN')}
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
            {article['excerpt']['rendered'].slice(3).replaceAll('&#8211;', '-')}
          </p>
          <a
            className="text_3_m"
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Xem thêm chi tiết về bài viết ${article['title']['rendered'].replaceAll('&#8211;', '-')}`}
            
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
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://s4h.edu.vn/wp-json/wp/v2/posts?_embed');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
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
        {data.length > 0 ? (
          data.map((article, index) => (
            <SwiperSlide key={index}>
              <Article article={article} />
            </SwiperSlide>
          ))
        ) : (
          <p>Đang tải dữ liệu...</p>
        )}
      </Swiper>
    </div>
  );
}
