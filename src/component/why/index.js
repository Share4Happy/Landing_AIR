'use client';
import { motion } from 'framer-motion';
import vam from './index.module.css';
import { FadeIn } from '@/component/motion';

export default function Why() {
  return (
    <div style={{ width: '90%', margin: '0 auto' }}>
      <FadeIn direction="down" duration={0.6}>
        <div style={{ padding: '20px 0', background: 'var(--main)', borderRadius: 8 }}>
          <p className="text_1" style={{ color: 'white', textAlign: 'center' }}>VÌ SAO NÊN HỌC AI ROBOTIC</p>
        </div>
        <div style={{ padding: '20px 0  50px 0' }}>
          <p className="text_1" style={{ textAlign: 'center' }}>TẠI TRƯỜNG ĐẠI HỌC LẠC HỒNG</p>
        </div>
      </FadeIn>

      <div className={vam.container}>
        <div className={vam.row}>
          <FadeIn direction="right" duration={0.7} className={vam.imgCol}>
            <motion.div
              className={vam.v1}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            />
          </FadeIn>
          <FadeIn direction="left" duration={0.7} delay={0.1} className={vam.textCol}>
            <div style={{ display: 'inline-block', background: '#ebf8f1', color: '#2f855a', padding: '4px 12px', borderRadius: 20, fontSize: '0.85rem', fontWeight: 600, marginBottom: 8 }}>
              Lý do 01
            </div>
            <h1 className="text_1" style={{ paddingBottom: 12 }}>KHÓA HỌC AI ROBOTIC <br />CÓ TÍNH QUỐC TẾ & TÍNH TOÀN DIỆN</h1>
            <p className="text_3_m" style={{ textAlign: 'justify' }}>Chương trình giáo dục AI – Robotic của UBTECH đã được triển khai ở hơn 3000 trường trên khắp thế giới và đã tiếp cận hơn 1,5 triệu học sinh. UBTECH Education có mối quan hệ hợp tác chặt chẽ với các tổ chức và các trường đại học (khoa học – kỹ thuật – công nghệ và sư phạm), viện nghiên cứu hàng đầu thế giới.</p>
          </FadeIn>
        </div>

        <div className={`${vam.row} ${vam.rowReverse}`}>
          <FadeIn direction="left" duration={0.7} className={vam.imgCol}>
            <motion.div
              className={vam.v2}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            />
          </FadeIn>
          <FadeIn direction="right" duration={0.7} delay={0.1} className={vam.textCol}>
            <div style={{ display: 'inline-block', background: '#ebf8f1', color: '#2f855a', padding: '4px 12px', borderRadius: 20, fontSize: '0.85rem', fontWeight: 600, marginBottom: 8 }}>
              Lý do 02
            </div>
            <h1 className="text_1" style={{ paddingBottom: 12 }}>KHÓA HỌC AI ROBOTIC <br />CÓ TÍNH PHÁT TRIỂN & TÍNH HỆ THỐNG</h1>
            <p className="text_3_m" style={{ textAlign: 'justify' }}>Chương trình được xây dựng và phát triển bởi công ty UBTECH - một trong những công ty đa quốc gia hàng đầu thế về Công nghệ Robot hình người (Humanoid Robotic) và Trí tuệ nhân tạo (AI), có bộ phận nghiên cứu và phát triển (R&D trực tiếp). Chương trình có lộ trình học tập và mục tiêu đầu ra được thiết kế rõ ràng, khoa học, từ Lớp 1 đến Lớp 12 và Đại học.</p>
          </FadeIn>
        </div>

        <div className={vam.row}>
          <FadeIn direction="right" duration={0.7} className={vam.imgCol}>
            <motion.div
              className={vam.v3}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            />
          </FadeIn>
          <FadeIn direction="left" duration={0.7} delay={0.1} className={vam.textCol}>
            <div style={{ display: 'inline-block', background: '#ebf8f1', color: '#2f855a', padding: '4px 12px', borderRadius: 20, fontSize: '0.85rem', fontWeight: 600, marginBottom: 8 }}>
              Lý do 03
            </div>
            <h1 className="text_1" style={{ paddingBottom: 12 }}>KHÓA HỌC AI ROBOTIC <br />CÓ TÍNH KINH TẾ & TÍNH TƯƠNG HỢP</h1>
            <p className="text_3_m" style={{ textAlign: 'justify' }}>Đối với học viên: Có hỗ trợ thiết bị đầy đủ khi tham gia học tại lab mà không cần trang bị gì thêm.
              Đối với các trường học: Chi phí đầu tư ban đầu cho các trang thiết bị (học liệu, học cụ, thiết bị trình chiếu, thiết bị điều khiển, v.v…) đảm bảo tính hợp lý để nhiều trường có thể trang bị được.</p>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
