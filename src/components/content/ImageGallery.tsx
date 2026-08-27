interface ImageGalleryProps {
  images: string[];
  alt?: string;
}

export default function ImageGallery({ images, alt = "" }: ImageGalleryProps) {
  if (images.length === 0) return null;

  return (
    <div className="gallery">
      {images.map((src, i) => (
        <figure key={src} className="gallery-item">
          <img src={src} alt={`${alt} ${i + 1}`} loading="lazy" />
        </figure>
      ))}
    </div>
  );
}