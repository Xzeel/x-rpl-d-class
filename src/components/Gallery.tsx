import { useState } from 'react';
import gallery1Img from '@/assets/gallery1.jpg';
import gallery2Img from '@/assets/gallery2.jpg';
import gallery3Img from '@/assets/gallery3.jpg';
import gallery4Img from '@/assets/gallery4.jpg';
import gallery5Img from '@/assets/gallery5.jpg';
import gallery6Img from '@/assets/gallery6.jpg';
import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    { src: gallery1Img, alt: 'Fotbar bareng guru PPL Agama Islam' },
    { src: gallery2Img, alt: 'Fotbar hari Guru 2025 bareng pak Danang' },
    { src: gallery3Img, alt: 'Fotbar latihan tampil PPTA 2025' },
    { src: gallery4Img, alt: 'Fotbar bareng guru PPL Informatika' },
    { src: gallery5Img, alt: 'Fotbar bareng guru PPL DPGIM' },
    { src: gallery6Img, alt: 'Fotbar bareng guru PPL DPGIM' },
  ];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-lg cursor-pointer aspect-video"
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

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 p-2 rounded-full bg-card hover:bg-accent transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6 text-foreground" />
          </button>
          <img
            src={selectedImage}
            alt="Gallery preview"
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default Gallery;
