'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';

/**
 * Hiệu ứng Fade In đa hướng khi cuộn tới phần tử
 */
export function FadeIn({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  distance = 20,
  className = '',
  style = {},
  once = true,
  scale = 1,
}) {
  const directions = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
    none: { x: 0, y: 0 },
  };

  const initialOffset = directions[direction] || directions.up;

  return (
    <motion.div
      className={className}
      style={style}
      initial={{
        opacity: 0,
        x: initialOffset.x,
        y: initialOffset.y,
        scale: scale !== 1 ? scale : 1,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
      }}
      viewport={{ once, amount: 0.15 }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1], // Cubic-bezier mượt mà
      }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Hiệu ứng Scale In phóng to nhẹ từ tâm kết hợp Fade In
 */
export function ScaleIn({
  children,
  delay = 0,
  duration = 0.6,
  initialScale = 0.9,
  className = '',
  style = {},
  once = true,
}) {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, scale: initialScale }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once, amount: 0.2 }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Container bao bọc các phần tử con để xuất hiện lần lượt (stagger)
 */
export function StaggerContainer({
  children,
  staggerDelay = 0.15,
  initialDelay = 0,
  className = '',
  style = {},
  once = true,
}) {
  return (
    <motion.div
      className={className}
      style={style}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.15 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: initialDelay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Phần tử con trong StaggerContainer
 */
export function StaggerItem({
  children,
  y = 25,
  duration = 0.5,
  className = '',
  style = {},
}) {
  return (
    <motion.div
      className={className}
      style={style}
      variants={{
        hidden: { opacity: 0, y },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Thanh tiến trình cuộn trang mượt mà bám đỉnh (Top Scroll Progress Bar)
 */
export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 3,
        background: 'linear-gradient(90deg, #1565c0 0%, #00d2ff 100%)',
        transformOrigin: '0%',
        scaleX,
        zIndex: 9999,
        pointerEvents: 'none',
      }}
    />
  );
}

/**
 * Nút đăng ký nổi thông minh - tự ẩn khi cuộn đến vùng Form #dk để không che khuất form
 */
export function SmartFloatingCTA({ targetId = 'dk', text = 'Đăng ký ngay' }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const target = document.getElementById(targetId);
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [targetId]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="dangky"
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{
            opacity: 1,
            y: [0, -5, 0],
            scale: 1,
            transition: {
              y: { repeat: Infinity, duration: 3, ease: 'easeInOut' },
              opacity: { duration: 0.3 },
              scale: { duration: 0.3 },
            },
          }}
          exit={{ opacity: 0, y: 20, scale: 0.9, transition: { duration: 0.25 } }}
        >
          <a href={`#${targetId}`}>{text}</a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
