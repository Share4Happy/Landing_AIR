'use client';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import vam from './index.module.css';
import { FadeIn } from '@/component/motion';

export default function Dk() {
  const [NameParen, setNameParen] = useState('');
  const [Phone, setPhone] = useState('');
  const [NameStudent, setNameStudent] = useState('');
  const [Age, setAge] = useState('');
  const [Area, setArea] = useState('Biên Hòa');
  const [Note, setNote] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [modalState, setModalState] = useState({ isOpen: false, type: 'success', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!NameParen || !Phone || !NameStudent || !Age || !Area) {
      setModalState({
        isOpen: true,
        type: 'error',
        message: 'Vui lòng điền đầy đủ các thông tin cần thiết.'
      });
      return;
    }

    setIsLoading(true);
    try {
      const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || "https://script.google.com/macros/s/AKfycbxoy3oTFoq1Z64EVy1EeDogsGjx7DfJb2e-0TZ-J7lqKCVsp6sSX62qumgLQhNmkWLB9Q/exec";
      const f = await fetch(`${scriptUrl}?NameParen=${encodeURIComponent(NameParen)}&Phone=${encodeURIComponent(Phone)}&NameStudent=${encodeURIComponent(NameStudent)}&Age=${encodeURIComponent(Age)}&Area=${encodeURIComponent(Area)}&Note=${encodeURIComponent(Note)}`);
      if (f.ok) {
        setModalState({
          isOpen: true,
          type: 'success',
          message: 'Đăng ký thành công! Chúng tôi sẽ liên hệ với phụ huynh trong thời gian sớm nhất.'
        });
        setNameParen('');
        setPhone('');
        setNameStudent('');
        setAge('');
        setArea('Biên Hòa');
        setNote('');
      } else {
        setModalState({
          isOpen: true,
          type: 'error',
          message: 'Có lỗi xảy ra từ máy chủ, vui lòng thử lại sau.'
        });
      }
    } catch (error) {
      console.error(error);
      setModalState({
        isOpen: true,
        type: 'error',
        message: 'Không thể kết nối đến máy chủ. Vui lòng kiểm tra kết nối mạng và thử lại.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={vam.signup} id="dk" suppressHydrationWarning>
      {isLoading && (
        <div className={vam.loadingOverlay}>
          <div className={vam.spinner}></div>
        </div>
      )}

      {/* Modal thông báo trạng thái gửi form */}
      <AnimatePresence>
        {modalState.isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              backdropFilter: 'blur(4px)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 10000,
              padding: '16px',
            }}
            onClick={() => setModalState({ ...modalState, isOpen: false })}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              style={{
                background: '#ffffff',
                borderRadius: 16,
                padding: '32px 24px',
                maxWidth: 420,
                width: '100%',
                textAlign: 'center',
                boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {modalState.type === 'success' ? (
                <div style={{
                  width: 64,
                  height: 64,
                  borderRadius: '50%',
                  background: '#ebf8f1',
                  color: '#2f855a',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                  fontSize: 32
                }}>
                  ✓
                </div>
              ) : (
                <div style={{
                  width: 64,
                  height: 64,
                  borderRadius: '50%',
                  background: '#fff5f5',
                  color: '#c53030',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                  fontSize: 32
                }}>
                  !
                </div>
              )}
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#1a202c', marginBottom: 8 }}>
                {modalState.type === 'success' ? 'Đăng ký thành công!' : 'Thông báo'}
              </h3>
              <p style={{ fontSize: '0.95rem', color: '#4a5568', lineHeight: 1.5, marginBottom: 24 }}>
                {modalState.message}
              </p>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  background: modalState.type === 'success' ? 'var(--main, #1565c0)' : '#4a5568',
                  color: 'white',
                  border: 'none',
                  borderRadius: 8,
                  padding: '10px 24px',
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  width: '100%',
                }}
                onClick={() => setModalState({ ...modalState, isOpen: false })}
              >
                Đóng
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className={vam.container}>
        <FadeIn direction="right" duration={0.8} className={vam.leftCol}>
          <motion.div
            className={vam.img}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          />
        </FadeIn>
        <FadeIn direction="left" duration={0.8} delay={0.15} className={vam.rightCol}>
          <div className={vam.formCard}>
            <form onSubmit={handleSubmit}>
              <div className={vam.formGroup}>
                <label className={vam.label} htmlFor="nameparen">Họ và tên phụ huynh</label>
                <input
                  className={vam.input}
                  type="text"
                  id="nameparen"
                  value={NameParen}
                  onChange={(e) => setNameParen(e.target.value)}
                  required
                />
              </div>

              <div className={vam.formGroup}>
                <label className={vam.label} htmlFor="phone">Di động</label>
                <input
                  className={vam.input}
                  type="tel"
                  id="phone"
                  value={Phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>

              <div className={vam.formGroup}>
                <label className={vam.label} htmlFor="namestudent">Họ và tên học sinh</label>
                <input
                  className={vam.input}
                  type="text"
                  id="namestudent"
                  value={NameStudent}
                  onChange={(e) => setNameStudent(e.target.value)}
                  required
                />
              </div>

              <div className={vam.formGroup}>
                <label className={vam.label} htmlFor="age">Độ tuổi</label>
                <input
                  className={vam.input}
                  type="number"
                  id="age"
                  value={Age}
                  onChange={(e) => setAge(e.target.value)}
                  required
                />
              </div>

              <div className={vam.formGroup}>
                <label className={vam.label} htmlFor="area">Khu vực</label>
                <input
                  className={vam.input}
                  type="text"
                  id="area"
                  value={Area}
                  onChange={(e) => setArea(e.target.value)}
                  required
                />
              </div>

              <div className={vam.formGroup}>
                <label className={vam.label} htmlFor="note">Ghi chú (Nội dung mong đợi, nhiều hơn 1 HS)</label>
                <textarea
                  id="note"
                  className={vam.textarea}
                  rows={3}
                  value={Note}
                  onChange={(e) => setNote(e.target.value)}
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className={vam.button}
                disabled={isLoading}
                whileHover={{ scale: 1.015 }}
                whileTap={{ scale: 0.985 }}
                transition={{ duration: 0.2 }}
              >
                {isLoading ? 'Đang gửi...' : 'Gửi'}
              </motion.button>
            </form>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
