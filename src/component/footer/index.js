'use client'
import vam from './index.module.css'
import Grid from '@mui/material/Grid'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Link from 'next/link';


export default function Footer() {
  return (
    <div className={vam.footer} data-scroll-section>
      <Grid container spacing={1} sx={{ width: '80%', mx: 'auto' }}>
        <Grid item md={3} sm={12} xs={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className={vam.logo}></div>
        </Grid>
        <Grid item md={6} sm={12} sx={{ display: 'flex', alignItems: 'start' }}>
          <div style={{ paddingLeft: 16, paddingBottom: 16 }}>
            <h2 className='text_2_m' style={{ color: 'white', padding: '6px 0' }}>Địa chỉ: Số 10, Huỳnh Văn Nghệ, P Bửu Long, Tp Biên Hòa - Tỉnh Đồng Nai</h2>
            <h2 className='text_2_m' style={{ color: 'white', padding: '6px 0' }}>Số Điện Thoại: 0946734111</h2>
            <h2 className='text_2_m' style={{ color: 'white', padding: '6px 0' }}>Email: nmson@lhu.edu.vn</h2>
            <h2 className='text_2_m' style={{ color: 'white', padding: '6px 0' }}>© 2023 Đại học Lạc Hồng</h2>
          </div>
        </Grid>
        <Grid item md={3} sm={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'start', flexDirection: 'column', width: '100%' }}>
          <h1 className='text_1' style={{ color: 'white', paddingBottom: 32 }}>KẾT NỐI</h1>
          <div className={vam.contact}>
            <Link href="https://www.facebook.com/profile.php?id=100071172378187" aria-label="Visit AI Robotic Facebook channel"><FacebookRoundedIcon sx={{ fontSize: 35 }} /></Link>
            <Link href="https://www.youtube.com/@airobotic2024" aria-label="Visit AI Robotic YouTube channel"><YouTubeIcon sx={{ fontSize: 35 }} /></Link>
            <Link href="https://www.tiktok.com/@ai.robot8" aria-label="Visit AI Robotic Tik Tok channel">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={35} width={35} fill='white'>
                <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z" />
              </svg>
            </Link>
          </div>
        </Grid>
      </Grid>
    </div >
  )
}