'use client'

import Image from 'next/image';
import vam from './index.module.css';
import Grid from '@mui/material/Grid';
import { useMediaQuery } from '@mui/material';

export default function Intro() {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <div className={vam.intro}>
      <Grid container spacing={1} sx={{ width: '80%' }}>
        <Grid item md={6} sm={12}>
          <div style={{ padding: '50px 0' }}>
            <h1 className="text_1" style={{ paddingBottom: '16px', textAlign: isMobile ? 'center' : 'start' }}>
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
        </Grid>
        <Grid item md={6} sm={12} sx={{ width: '100%' }}>
          <div className={vam.img}>
            <Image
              className={vam.intro1}
              src="https://lh3.googleusercontent.com/d/1bM-I0fm2fmkyWkIJbYFVxn2QeEpI4Xfl"
              alt="Hình ảnh intro 1"
              fill
              sizes="100%"
              loading="lazy"
            />
            <Image
              className={vam.intro2}
              src="https://lh3.googleusercontent.com/d/17UTxAtJ0mjmKy1YBma91X17mp_y45xOL"
              alt="Hình ảnh intro 2"
              fill
              sizes="100%"
              loading="lazy"
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
