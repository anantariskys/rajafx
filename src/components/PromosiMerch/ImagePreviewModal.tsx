'use client';

import { useImagePreview } from '@/providers/ImagePreviewProvider';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function ImagePreviewModal() {
  const { previewSrc, setPreviewSrc } = useImagePreview();

  if (!previewSrc) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50"
        onClick={() => setPreviewSrc(null)}
      >
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative max-w-3xl w-full px-4" 
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setPreviewSrc(null)}
            className="absolute -top-10 right-2 text-white text-3xl hover:text-gray-300 transition-colors duration-200"
          >
            ×
          </button>
          {/* Gunakan layout intrinsic agar proporsional */}
          <div className="overflow-hidden rounded-lg shadow-2xl">
            <Image
              src={previewSrc}
              alt="Preview"
              width={800}
              height={600}
              className="w-full h-auto hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
