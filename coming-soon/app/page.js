// app/page.js
'use client';

import Image from 'next/image';
import GallerySection from '../components/GallerySection';
import HowItWorksSection from '../components/HowItWorksSection';

export default function Home() {
  return (
    <>
      <div className="page-container">
        {/* Decorative blobs - kept from original */}
        <div className="blob blob1" />
        <div className="blob blob2" />

        {/* Hero Section */}
        <header className="hero">
          <div className="card">
            <div className="hero-image">
              <Image
                src="/hero.png" // Make sure this image is in your /public folder
                alt="Premium customizable tee"
                width={500}
                height={300} // Adjusted height for better aspect ratio based on common tee images
                priority
                style={{ objectFit: 'contain' }} // Or 'cover', depending on your image
              />
            </div>
            <h1>STYLE TO FEEL U</h1>
            <p className="subtitle">Premium Quality &amp; Custom Prints</p>
            <p className="description">
              We craft top-tier customizable apparel designed to let you express your unique style.
              Your vision, our fabric. Let's create something amazing together.
            </p>
            <a href="#order" className="cta-button">
              Pre-order & Inquire
            </a>
          </div>
        </header>

        {/* How It Works Section */}
        <HowItWorksSection />

        {/* Gallery Section */}
        <GallerySection />

        {/* Order Form Section */}
        <section id="order" className="order-section">
          <div className="container">
            <h2>Ready to Create Your Style?</h2>
            <p className="section-subtitle">
              Fill out the form below with your ideas, questions, or pre-order details. We're excited to hear from you!
            </p>
            <div className="form-wrapper">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSdas_tjFKThaaSRjyJGLo_gFK6XF6EYoszxXgL2W3rlyp8H9A/viewform?embedded=true"
                width="100%"
                height="1000" // Keep height, or adjust as needed
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
              >
                Loading…
              </iframe>
            </div>
             <p className="contact-footer">
               Have more questions? Reach out on&nbsp;
               <a
                 href="https://instagram.com/stfu_theshop"
                 target="_blank"
                 rel="noopener noreferrer"
               >
                 Instagram
               </a>!
             </p>
          </div>
        </section>
      </div>

      <style jsx>{`
        .page-container {
          position: relative; /* For blob positioning */
          overflow-x: hidden; /* Prevent horizontal scroll from blobs */
          padding-top: 80px; /* Height of the fixed navbar */
        }

        .hero {
          position: relative;
          min-height: calc(100vh - 80px); /* Adjusted for navbar */
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%); /* Original gradient */
          padding: 2rem;
          overflow: hidden; /* Keep blobs contained if they are children of hero */
        }

        /* Decorative blobs (from original, ensure they work with new structure) */
        .blob {
          position: absolute;
          background: radial-gradient(circle at center, rgba(255, 255, 255, 0.6) 0%, transparent 70%);
          opacity: 0.4; /* Slightly increased opacity */
          filter: blur(10px); /* Softer blobs */
          z-index: 0; /* Behind card content */
        }
        .blob1 {
          width: 400px;
          height: 400px;
          top: -50px;
          left: -100px;
          animation: float 10s ease-in-out infinite alternate;
        }
        .blob2 {
          width: 600px;
          height: 600px;
          bottom: -100px;
          right: -150px;
          animation: float 12s ease-in-out infinite alternate-reverse;
        }

        @keyframes float {
          0% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          100% { transform: translateY(20px) translateX(-20px) rotate(15deg); }
        }


        .card {
          position: relative;
          background: rgba(255, 255, 255, 0.95); /* Original card bg */
          border-radius: var(--border-radius);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15); /* Enhanced shadow */
          padding: 2.5rem; /* Increased padding */
          max-width: 700px; /* Slightly wider card */
          width: 100%;
          text-align: center;
          z-index: 1; /* Above blobs */
        }

        .hero-image {
          margin-bottom: 1.5rem;
          border-radius: 12px; /* Slightly smaller radius for image container */
          overflow: hidden;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }

        h1 {
          margin: 0 0 0.75rem;
          font-size: 3rem; /* Original size */
          color: var(--text-dark);
          letter-spacing: 1.5px; /* Slightly reduced letter spacing */
          font-weight: 700;
        }

        .subtitle {
          margin: 0 0 1.5rem;
          font-size: 1.3rem; /* Slightly larger */
          color: var(--primary-color);
          font-weight: 600;
        }

        .description {
          margin: 0 0 2rem;
          font-size: 1.05rem; /* Slightly larger for readability */
          color: var(--text-light);
          line-height: 1.7;
        }

        .cta-button {
          display: inline-block;
          background-color: var(--primary-color);
          color: white;
          padding: 0.8rem 2rem;
          border-radius: 50px; /* Pill shape */
          text-decoration: none;
          font-weight: 600;
          font-size: 1.1rem;
          transition: background-color 0.3s ease, transform 0.3s ease;
          box-shadow: 0 4px 15px rgba(255, 111, 145, 0.4); /* Shadow for CTA */
        }

        .cta-button:hover {
          background-color: #e65a7f; /* Darker shade of primary */
          transform: translateY(-3px);
        }

        /* Order Form Section Styles */
         .order-section {
          padding: 4rem 2rem;
          background-color: #f9f9f9;
          text-align: center;
          scroll-margin-top: 80px; /* Adjust this value based on your navbar height */
        }
        .order-section .container {
           max-width: 800px; /* Control width of the form area */
           margin: 0 auto;
        }
        // .order-section h2 {
        //   font-size: 2.5rem;
        //   color: var(--text-dark);
        //   margin-bottom: 0.5rem;
        // }
        .order-section h2 { /* Or target .order-section h2 directly */
          font-size: 2.8rem; /* Slightly larger */
          color: black; /* Use your vibrant pink */
          margin-bottom: 0.75rem; /* Adjusted margin */
          font-weight: 700; /* Ensure it's bold */
          text-shadow: 1px 1px 3px rgba(0,0,0,0.1); /* Subtle shadow for depth */
          line-height: 1.2;
        }
        /* You might want to adjust the subtitle if the title is much larger now */
        .order-section .section-subtitle {
          font-size: 1.1rem;
          color: black;
          margin-bottom: 2.5rem; /* Increased margin if title is bigger */
        }
        .form-wrapper {
          border: 3px solid var(--secondary-color); /* Use theme color */
          border-radius: var(--border-radius);
          overflow: hidden;
          margin-bottom: 1.5rem;
          box-shadow: var(--card-shadow);
        }

        iframe {
          border: none; /* Already there, good */
          display: block; /* Removes any extra space below iframe */
        }

        .contact-footer { /* Changed from .footer to avoid conflict */
          font-size: 1rem;
          color: black;
        }
        .contact-footer a {
          color: var(--primary-color);
          text-decoration: none;
          font-weight: 600;
        }
        .contact-footer a:hover {
          text-decoration: underline;
        }

        @media (max-width: 768px) {
          .hero {
            padding: 1.5rem;
          }
          h1 {
            font-size: 2.5rem;
          }
          .subtitle {
            font-size: 1.1rem;
          }
          .description {
            font-size: 0.95rem;
          }
          .card {
            padding: 1.5rem;
          }
        }
        @media (max-width: 600px) {
           /* From original, still relevant */
          .hero {
            padding: 1rem;
          }
          h1 {
            font-size: 2.25rem;
          }
        }
      `}</style>
    </>
  );
}