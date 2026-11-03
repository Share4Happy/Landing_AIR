'use client';
import Image from "next/image";
import { motion } from "framer-motion";
import vam from './index.module.css';
import { FadeIn, StaggerContainer, StaggerItem } from '@/component/motion';

export default function Signal() {
  return (
    <div className={vam.signal}>
      <div className={vam.signalbg}>
        <FadeIn direction="down" duration={0.6} className={vam.title}>
          <h1 className="text_1" style={{ color: 'white', textAlign: 'center' }}>
            NHỮNG BIỂU HIỆN CHO THẤY CON PHÙ HỢP ĐỂ HỌC LẬP TRÌNH ROBOTIC
          </h1>
        </FadeIn>
      </div>
      <StaggerContainer staggerDelay={0.18} className={vam.grid}>
        <StaggerItem className={vam.items}>
          <motion.div
            className={vam.imgWrapper}
            whileHover={{ y: -8, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Image src="/images/signal/signal-sang-tao.png" width={220} height={220} loading="lazy" alt="Yêu thích sáng tạo" />
          </motion.div>
          <div className={vam.content}>
            <h2 className="text_1" style={{ color: 'var(--text)', padding: '16px 0 8px 0', fontSize: '1.25rem' }}>Yêu thích sáng tạo</h2>
            <p className="text_2_m" style={{ color: 'var(--text)', textAlign: 'center' }}>
              Con có trí tưởng tượng phong phú, con thể hiện sự hào hứng với việc lắp ráp và tìm tòi thêm các mô hình Robot mới.
            </p>
          </div>
        </StaggerItem>

        <StaggerItem className={vam.items}>
          <motion.div
            className={vam.imgWrapper}
            whileHover={{ y: -8, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Image src="/images/signal/signal-cong-nghe.png" width={220} height={220} loading="lazy" alt="Nhạy bén với công nghệ" />
          </motion.div>
          <div className={vam.content}>
            <h2 className="text_1" style={{ color: 'var(--text)', padding: '16px 0 8px 0', fontSize: '1.25rem' }}>Nhạy bén với công nghệ</h2>
            <p className="text_2_m" style={{ color: 'var(--text)', textAlign: 'center' }}>
              Con thường xuyên thể hiện sự tò mò và quan tâm đặc biệt đến công nghệ. Con tự tìm hiểu cách sử dụng điện thoại,...
            </p>
          </div>
        </StaggerItem>

        <StaggerItem className={vam.items}>
          <motion.div
            className={vam.imgWrapper}
            whileHover={{ y: -8, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Image src="/images/signal/signal-lap-rap.png" width={220} height={220} loading="lazy" alt="Yêu thích lắp ráp" />
          </motion.div>
          <div className={vam.content}>
            <h2 className="text_1" style={{ color: 'var(--text)', padding: '16px 0 8px 0', fontSize: '1.25rem' }}>Yêu thích lắp ráp</h2>
            <p className="text_2_m" style={{ color: 'var(--text)', textAlign: 'center' }}>
              Con thích chơi với các khối gạch, khối lắp ráp,.... con có thể dành hàng giờ liền để chơi với chúng mà không chán.
            </p>
          </div>
        </StaggerItem>
      </StaggerContainer>
    </div>
  );
}