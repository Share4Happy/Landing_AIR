'use client';
import { motion } from 'framer-motion';
import vam from './index.module.css';
import Link from 'next/link';
import { FadeIn } from '@/component/motion';

export default function Footer() {
  return (
    <div className={vam.footer} data-scroll-section>
      <FadeIn direction="up" duration={0.8} distance={20} className={vam.container}>
        <div className={vam.logoCol}>
          <motion.div
            className={vam.logo}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <div className={vam.infoCol}>
          <div style={{ paddingBottom: 16 }}>
            <h2 className='text_2_m' style={{ color: 'white', padding: '6px 0' }}>Địa chỉ: Số 10, Huỳnh Văn Nghệ, P Bửu Long, Tp Biên Hòa - Tỉnh Đồng Nai</h2>
            <h2 className='text_2_m' style={{ color: 'white', padding: '6px 0' }}>Số Điện Thoại: 0946734111</h2>
            <h2 className='text_2_m' style={{ color: 'white', padding: '6px 0' }}>Email: nmson@lhu.edu.vn</h2>
            <h2 className='text_2_m' style={{ color: 'white', padding: '6px 0' }}>© 2023 Đại học Lạc Hồng</h2>
          </div>
        </div>
        <div className={vam.contactCol}>
          <h1 className='text_1' style={{ color: 'white', paddingBottom: 32 }}>KẾT NỐI</h1>
          <div className={vam.contact}>
            <motion.div whileHover={{ scale: 1.2, y: -3 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 15 }}>
              <Link href="https://www.facebook.com/profile.php?id=100071172378187" aria-label="Visit AI Robotic Facebook channel">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={35} height={35} fill="white">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2, y: -3 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 15 }}>
              <Link href="https://www.youtube.com/@airobotic2024" aria-label="Visit AI Robotic YouTube channel">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={35} height={35} fill="white">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2, y: -3 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 15 }}>
              <Link href="https://www.tiktok.com/@ai.robot8" aria-label="Visit AI Robotic Tik Tok channel">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={35} width={35} fill='white'>
                  <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
