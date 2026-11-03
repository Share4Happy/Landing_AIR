'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import vam from './index.module.css';
import { FadeIn } from '@/component/motion';

export default function Intro() {
  return (
    <div className={vam.intro}>
      <div className={vam.container}>
        <FadeIn direction="right" duration={0.8} className={vam.textCol}>
          <div style={{ padding: '30px 0' }}>
            <h1 className={`${vam.title} text_1`}>
              BA MẸ ĐÃ BIẾT GÌ <br />
              VỀ NGÀNH ROBOTIC CHƯA?
            </h1>
            <p className="text_2_m" style={{ textAlign: 'justify', paddingBottom: 12 }}>
              Robotic là ngành thuộc lĩnh vực chế tạo robot, nằm trong ngành kỹ thuật điều khiển và tự động
              hóa. Chúng liên quan trực tiếp đến việc nghiên cứu, thiết kế và vận hành các hệ thống hay dây
              chuyền tự động tại các nhà máy.
            </p>
            <p className="text_2_m" style={{ textAlign: 'justify' }}>
              Ngày nay, Robotic được ứng dụng thực tế rất nhiều trong các lĩnh vực của đời sống như: sản xuất,
              vận chuyển, y tế,...
            </p>
          </div>
        </FadeIn>
        <FadeIn direction="left" duration={0.8} delay={0.2} className={vam.imgCol}>
          <motion.div
            className={vam.img}
            whileHover={{ scale: 1.025 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              className={vam.intro1}
              src="/images/intro/intro-robot-1.png"
              alt="Hình ảnh intro 1"
              fill
              sizes="100%"
              loading="lazy"
            />
            <Image
              className={vam.intro2}
              src="/images/intro/intro-robot-2.jpg"
              alt="Hình ảnh intro 2"
              fill
              sizes="100%"
              loading="lazy"
            />
          </motion.div>
        </FadeIn>
      </div>
    </div>
  );
}
