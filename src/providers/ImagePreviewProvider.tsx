'use client';

import { StaticImageData } from 'next/image';
import { createContext, useContext, useState } from 'react';

type ImagePreviewContextType = {
  previewSrc: StaticImageData | null;
  setPreviewSrc: (img: StaticImageData | null) => void;
};

const ImagePreviewContext = createContext<ImagePreviewContextType | undefined>(undefined);

export function ImagePreviewProvider({ children }: { children: React.ReactNode }) {
  const [previewSrc, setPreviewImage] = useState<StaticImageData | null>(null);

  const setPreviewSrc = (img: StaticImageData | null) => {
    setPreviewImage(img);
  };

  return (
    <ImagePreviewContext.Provider value={{ previewSrc, setPreviewSrc }}>
      {children}
    </ImagePreviewContext.Provider>
  );
}

export function useImagePreview() {
  const context = useContext(ImagePreviewContext);
  if (!context) {
    throw new Error('useImagePreview must be used within an ImagePreviewProvider');
  }
  return context;
}
