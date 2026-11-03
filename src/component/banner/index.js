'use client';
import { motion } from 'framer-motion';
import vam from './index.module.css';

export default function Banner() {
  return (
    <div className={vam.banner}>
      <motion.div
        className={vam.wrap}
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
}
