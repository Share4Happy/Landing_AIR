'use client';
import { motion } from 'framer-motion';
import vam from './index.module.css';
import { FadeIn, ScaleIn } from '@/component/motion';

export default function Kn62cs() {
  return (
    <div className={vam.kn6cs}>
      <div className={vam.wrap}>
        <FadeIn direction="up" duration={0.7}>
          <h1 className='text_1' style={{ textAlign: 'center', color: 'white', paddingBottom: 12 }}>
            TẠI SAO BA MẸ NÊN<br /> CHO CON HỌC AI ROBOTIC NGAY TỪ NHỎ?
          </h1>
          <p className='text_2_m' style={{ textAlign: 'center', color: 'white' }}>
            Trang bị bộ kỹ năng 6Cs là bộ kỹ năng quan trọng giúp con dễ dàng thích nghi và hội nhập trở thành
            công dân số toàn cầu.
          </p>
        </FadeIn>
        <ScaleIn delay={0.2} duration={0.8} initialScale={0.92}>
          <motion.div
            className={vam.bg}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            style={{ borderRadius: 16 }}
          />
        </ScaleIn>
      </div>
    </div>
  );
}
