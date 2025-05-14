// components/GallerySection.js
'use client';
import Image from 'next/image';

const galleryItems = [
  { id: 1, src: '/placeholder.jpg', alt: 'Custom Tee Design 1', name: 'Abstract Waves Tee' },
  { id: 2, src: '/placeholder.jpg', alt: 'Custom Tee Design 2', name: 'Retro Vibes Tee' },
  { id: 3, src: '/placeholder.jpg', alt: 'Custom Tee Design 3', name: 'Minimalist Lines Tee' },
  // Add more items as needed
];

export default function GallerySection() {
  return (
    <>
      <section id="gallery" className="gallery-section">
        <div className="container">
          <h2>Our Creations</h2>
          <p className="section-subtitle">Get inspired by some of our custom designs.</p>
          <div className="gallery-grid">
            {galleryItems.map((item) => (
              <div key={item.id} className="gallery-item">
                <Image src={item.src} alt={item.alt} width={350} height={350} style={{ objectFit: 'cover', borderRadius: '8px' }} />
                <h3>{item.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <style jsx>{`
        .gallery-section {
          padding: 4rem 2rem;
          background-color: var(--background-light);
          scroll-margin-top: 80px; /* Adjust this value based on your navbar height */
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
        }
        h2 {
          font-size: 2.5rem;
          color: var(--text-dark);
          margin-bottom: 0.5rem;
        }
        .section-subtitle {
          font-size: 1.1rem;
          color: var(--text-light);
          margin-bottom: 3rem;
        }
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        .gallery-item {
          background: #fff;
          border-radius: var(--border-radius);
          box-shadow: var(--card-shadow);
          padding: 1rem;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .gallery-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.15);
        }
        .gallery-item img { /* Next/Image style is applied inline but this can be a fallback or for other img tags */
          max-width: 100%;
          height: auto;
          border-radius: 8px; /* Match image style */
          margin-bottom: 1rem;
        }
        .gallery-item h3 {
          font-size: 1.25rem;
          color: var(--primary-color);
          margin-top: 0.5rem;
        }
      `}</style>
    </>
  );
}