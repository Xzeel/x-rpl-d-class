import { useState, useEffect } from 'react';
import gallery1Img from '@/assets/gallery1.webp';
import gallery2Img from '@/assets/gallery2.webp';
import gallery3Img from '@/assets/gallery3.webp';
import gallery4Img from '@/assets/gallery4.webp';
import gallery5Img from '@/assets/gallery5.webp';
import gallery6Img from '@/assets/gallery6.webp';
import gallery7Img from '@/assets/gallery7.webp';
import gallery8Img from '@/assets/gallery8.webp';
import gallery9Img from '@/assets/gallery9.webp';
import gallery10Img from '@/assets/gallery10.webp';
import gallery11Img from '@/assets/gallery11.webp';
import gallery12Img from '@/assets/gallery12.webp';
import gallery13Img from '@/assets/gallery13.webp';
import gallery14Img from '@/assets/gallery14.webp';
import gallery15Img from '@/assets/gallery15.webp';
import gallery16Img from '@/assets/gallery16.webp';
import gallery17Img from '@/assets/gallery17.webp';
import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedImage]);


  const galleryImages = [
    { src: gallery1Img, alt: 'Fotbar bareng guru PPL Agama Islam' },
    { src: gallery2Img, alt: 'Fotbar hari Guru 2025 bareng pak Danang' },
    { src: gallery3Img, alt: 'Fotbar latihan tampil PPTA 2025' },
    { src: gallery4Img, alt: 'Fotbar bareng guru PPL Informatika' },
    { src: gallery5Img, alt: 'Fotbar bareng guru PPL DPGIM (All)' },
    { src: gallery6Img, alt: 'Fotbar bareng guru PPL DPGIM (Mirror)' },
    { src: gallery7Img, alt: 'Fotbar bareng guru PPL DPGIM (Girls Only 1)' },
    { src: gallery8Img, alt: 'Fotbar bareng guru PPL DPGIM (Girls Only 2)' },
    { src: gallery9Img, alt: 'Fotbar Peak Day Kokulikuler 2025' },
    { src: gallery10Img, alt: 'Foto Classmeet Lomba Basket Day 1' },
    { src: gallery11Img, alt: 'Foto Classmeet Lomba Basket Day 1' },
    { src: gallery12Img, alt: 'Foto Classmeet Lomba Basket Day 1' },
    { src: gallery13Img, alt: 'Foto Classmeet Lomba Futsal Day 3' },
    { src: gallery14Img, alt: 'Foto Classmeet Lomba Futsal Day 3' },
    { src: gallery15Img, alt: 'Foto Classmeet Lomba Futsal Day 3' },
    { src: gallery16Img, alt: 'Foto Classmeet Lomba Futsal Day 3' },
    { src: gallery17Img, alt: 'Foto Classmeet Lomba Futsal Day 3' },
  ];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-lg cursor-pointer aspect-video card-glow"
            onClick={() => setSelectedImage(image.src)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-300" />
          </div>
        ))}
      </div>

      {/* Lightbox - Fixed overlay that prevents scrolling */}
      {selectedImage && (
        <div
          className="fixed top-0 left-0 w-screen h-screen bg-background/95 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 p-3 rounded-full bg-card hover:bg-accent transition-colors z-[10000]"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8 text-foreground" />
          </button>
          <img
            src={selectedImage}
            alt="Gallery preview"
            className="max-w-[95vw] max-h-[95vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default Gallery;
