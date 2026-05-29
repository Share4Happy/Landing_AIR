import Grid from "@mui/material/Grid"
import vam from './index.module.css'


export default function Why() {

  return (
    <div style={{ width: '90%', margin: '0 auto' }}>
      <div style={{ padding: '20px 0', background: 'var(--main)', borderRadius: 8 }}>
        <p className="text_1" style={{ color: 'white', textAlign: 'center' }}>VÌ SAO NÊN HỌC AI ROBOTIC</p>
      </div>
      <div style={{ padding: '20px 0  50px 0' }}>
        <p className="text_1" style={{ textAlign: 'center' }}>TẠI TRƯỜNG ĐẠI HỌC LẠC HỒNG</p>
      </div>
      <Grid container spacing={1} sx={{ width: '80%', mx: 'auto' }}>
        <Grid item md={6} sm={12} sx={{ display: 'flex', alignItems: 'center', py: 5, justifyContent: 'center', width: '100%' }}>
          <div className={vam.v1}></div>
        </Grid>
        <Grid item md={6} sm={12} style={{ paddingTop: 12 }}>
          <h1 className="text_1" style={{ paddingBottom: 12, width: '90%', margin: '0 auto' }}>KHÓA HỌC AI ROBOTIC <br></br>CÓ TÍNH QUỐC TẾ & TÍNH TOÀN DIỆN</h1>
          <p className="text_3_m" style={{ width: '90%', margin: '0 auto', textAlign: 'justify' }}>Chương trình giáo dục AI – Robotic của UBTECH đã được triển khai ở hơn 3000 trường trên khắp thế giới và đã tiếp cận hơn 1,5 triệu học sinh. UBTECH Education có mối quan hệ hợp tác chặt chẽ với các tổ chức và các trường đại học (khoa học – kỹ thuật – công nghệ và sư phạm), viện nghiên cứu hàng đầu thế giới.</p>
        </Grid>
        <Grid item md={6} sm={12} style={{ paddingTop: 12 }}>
          <h1 className="text_1" style={{ paddingBottom: 12, width: '90%', margin: '0 auto' }}>KHÓA HỌC AI ROBOTIC <br></br>CÓ TÍNH PHÁT TRIỂN & TÍNH HỆ THỐNG</h1>
          <p className="text_3_m" style={{ width: '90%', margin: '0 auto', textAlign: 'justify' }}>Chương trình được xây dựng và phát triển bởi công ty UBTECH - một trong những công ty đa quốc gia hàng đầu thế về Công nghệ Robot hình người (Humanoid Robotic) và Trí tuệ nhân tạo (AI), có bộ phận nghiên cứu và phát triển (R&D trực tiếp). Chương trình có lộ trình học tập và mục tiêu đầu ra được thiết kế rõ ràng, khoa học, từ Lớp 1 đến Lớp 12 và Đại học.</p>
        </Grid>
        <Grid item md={6} sm={12} sx={{ display: 'flex', alignItems: 'center', py: 5, justifyContent: 'center', width: '100%' }}>
          <div className={vam.v2}></div>
        </Grid>

        <Grid item md={6} sm={12} sx={{ display: 'flex', alignItems: 'center', py: 5, justifyContent: 'center', width: '100%' }}>
          <div className={vam.v3}></div>
        </Grid>
        <Grid item md={6} sm={12} style={{ paddingTop: 12 }}>
          <h1 className="text_1" style={{ paddingBottom: 12, width: '90%', margin: '0 auto' }}>KHÓA HỌC AI ROBOTIC <br></br>CÓ TÍNH KINH TẾ & TÍNH TƯƠNG HỢP</h1>
          <p className="text_3_m" style={{ width: '90%', margin: '0 auto', textAlign: 'justify' }}>Đối với học viên: Có hỗ trợ thiết bị đầy đủ khi tham gia học tại lab mà không cần trang bị gì thêm.
            Đối với các trường học: Chi phí đầu tư ban đầu cho các trang thiết bị (học liệu, học cụ, thiết bị trình chiếu, thiết bị điều khiển, v.v…) đảm bảo tính hợp lý để nhiều trường có thể trang bị được.</p>
        </Grid>
      </Grid>
    </div>
  )
}