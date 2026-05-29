import Image from "next/image";
import Grid from '@mui/material/Grid';
import vam from './index.module.css'

export default function Signal() {
  return (
    <div className={vam.signal}>
      <div className={vam.signalbg}>
        <div className={vam.title}>
          <h1 className="text_1" style={{ color: 'white', textAlign: 'center' }}>NHỮNG BIỂU HIỆN CHO THẤY CON PHÙ HỢP ĐỂ HỌC LẬP TRÌNH ROBOTIC</h1>
        </div>
        <Grid container spacing={3} sx={{ width: '80%', mx: 'auto' }}>
          <Grid item md={4} sm={12} className={vam.items}>
            <Image src="https://lh3.googleusercontent.com/d/1c9Y465AgxgIhSS7Bh4X6nmSjOUjLPBfK" width={250} height={250} loading="lazy" alt="Hình ảnh 1" />
            <div className={vam.content}>
              <h1 className="text_1" style={{ color: 'var(--text)', padding: '20px 0' }}>Yêu thích sáng tạo</h1>
              <p className="text_2_m" style={{ color: 'var(--text)', textAlign: 'center' }}>Con có trí tưởng tượng phong phú, con thể hiện sự hào hứng với việc lắp ráp và tìm tòi
                thêm các mô hình Robot mới.</p>
            </div>
          </Grid>
          <Grid item md={4} sm={12} className={vam.items}>
            <Image src="https://lh3.googleusercontent.com/d/1hpRhiF5I3SonWO1ozWwxsrxXXKB3ZK0g" width={250} height={250} loading="lazy" alt="Hình ảnh 2" />
            <div className={vam.content}>
              <h1 className="text_1" style={{ color: 'var(--text)', padding: '20px 0' }}>Nhạy bén với công nghệ</h1>
              <p className="text_2_m" style={{ color: 'var(--text)', textAlign: 'center' }}>Con thường xuyên thể hiện sự tò mò và quan tâm đặc biệt đến công nghệ. Con tự tìm hiểu
                cách sử dụng điện thoại,...</p>
            </div>
          </Grid>
          <Grid item md={4} sm={12} className={vam.items}>
            <Image src="https://lh3.googleusercontent.com/d/16jZDwutMoML3X8b6aHp6u_G64uTuTgc8" width={250} height={250} loading="lazy" alt="Hình ảnh 3" />
            <div className={vam.content}>
              <h1 className="text_1" style={{ color: 'var(--text)', padding: '20px 0' }}>Yêu thích lắp ráp</h1>
              <p className="text_2_m" style={{ color: 'var(--text)', textAlign: 'center' }}>Con thích chơi với các khối gạch, khối lắp ráp,.... con có thể dành hàng giờ liền để chơi
                với chúng mà không chán.</p>
            </div>
          </Grid>
        </Grid>
      </div>
    </div >
  )
}