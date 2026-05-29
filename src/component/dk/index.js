'use client'

import Grid from "@mui/material/Grid";
import vam from './index.module.css'
import { useState } from "react";

export default function Dk() {
  const [NameParen, setNameParen] = useState('')
  const [Phone, setPhone] = useState('')
  const [NameStudent, setNameStudent] = useState('')
  const [Age, setAge] = useState('')
  const [Area, setArea] = useState('Biên Hòa')
  const [Note, setNote] = useState('')
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!NameParen || !Phone || !NameStudent || !Age || !Area ) {
      console.log('Thiếu dữ liệu truyền vào');
    } else {
      setIsLoading(true);
      try {
        const f = await fetch(`https://script.google.com/macros/s/AKfycbxoy3oTFoq1Z64EVy1EeDogsGjx7DfJb2e-0TZ-J7lqKCVsp6sSX62qumgLQhNmkWLB9Q/exec?NameParen=${NameParen}&Phone=${Phone}&NameStudent=${NameStudent}&Age=${Age}&Area=${Area}&Note=${Note}`)
        if (f.ok) alert('Đăng ký thành công')
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className={vam.signup} id="dk" suppressHydrationWarning>
      {isLoading && (
        <div className={vam.loadingOverlay}>
          <div className={vam.spinner}></div>
        </div>
      )}
      <Grid container spacing={1} sx={{ width: '80%', mx: 'auto' }}>
        <Grid item md={6} sm={12} sx={{ display: 'flex', alignItems: 'center' }}>
          <div className={vam.img}></div>
        </Grid>
        <Grid item md={6} sm={12} sx={{ height: '600px', display: 'flex', alignItems: 'center' }}>
          <form className={vam.form} onSubmit={handleSubmit}>
            <div style={{ padding: 16 }}>
              <div className="form-group">
                <label className='text_3_m' htmlFor="nameparen">Họ và tên phụ huynh</label>
                <input className="form-control" type="text" id="nameparen" value={NameParen} onChange={(e) => setNameParen(e.target.value)} />
              </div>
              <div className="form-group">
                <label className='text_3_m' htmlFor="phone">Di động</label>
                <input className="form-control" type="text" id="phone" value={Phone} onChange={(e) => setPhone(e.target.value)} />
              </div>
              <div className="form-group">
                <label className='text_3_m' htmlFor="namestudent">Họ và tên học sinh</label>
                <input className="form-control" type="text" id="namestudent" value={NameStudent} onChange={(e) => setNameStudent(e.target.value)} />
              </div>
              <div className="form-group">
                <label className='text_3_m' htmlFor="age">Độ tuổi</label>
                <input className="form-control" type="number" id="age" value={Age} onChange={(e) => setAge(e.target.value)} />
              </div>
              <div className="form-group">
                <label className='text_3_m' htmlFor="area">Khu vực</label>
                <select className={vam.area} id="area" value={Area} onChange={(e) => setArea(e.target.value)}>
                  <option value="Biên Hòa">Biên Hòa</option>
                  <option value="Long Thành">Long Thành</option>
                  <option value="Long Khánh">Long Khánh</option>
                  <option value="Khác">Khác</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="note">Ghi chú (Nội dung mong đợi, nhiều hơn 1 HS)</label>
                <textarea id="note" className={vam.area} rows="2" value={Note} onChange={(e) => setNote(e.target.value)}></textarea>
              </div>
              <button className={vam.button}>Gửi</button>
            </div>
          </form>
        </Grid>
      </Grid>
    </div>
  )
}
