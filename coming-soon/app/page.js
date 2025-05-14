// app/page.js
'use client';

import Image from 'next/image';

export default function Home() {
  return (
    <main className="hero">
      {/* Decorative blobs */}
      <div className="blob blob1" />
      <div className="blob blob2" />

      <div className="card">
        {/* Hero product shot */}
        <div className="hero-image">
          <Image
            src="/hero.png"
            alt="Premium customizable tee"
            width={500}
            height={200}
            priority
          />
        </div>

        <h1>STYLE TO FEEL U</h1>
        <p className="subtitle">Premium Quality &amp; Custom Prints</p>
        <p className="description">
          We’re crafting top-tier customizable apparel just for you.<br/>
          Got questions or want to pre-order? Fill out the form below!
        </p>

        <div className="form-wrapper">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdas_tjFKThaaSRjyJGLo_gFK6XF6EYoszxXgL2W3rlyp8H9A/viewform?embedded=true"
            width="100%"
            height="1000"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
          >
            Loading…
          </iframe>
        </div>

        <p className="footer">
          Or follow us on&nbsp;
          <a
            href="https://instagram.com/stfu_theshop"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </p>
      </div>

      <style jsx>{`
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
          padding: 2rem;
          overflow: hidden;
          font-family: 'Poppins', sans-serif;
        }
        .blob {
          position: absolute;
          background: radial-gradient(circle at center, #fff 0%, transparent 70%);
          opacity: 0.3;
          transform: rotate(45deg);
        }
        .blob1 {
          width: 400px;
          height: 400px;
          top: -100px;
          left: -100px;
        }
        .blob2 {
          width: 600px;
          height: 600px;
          bottom: -200px;
          right: -200px;
        }
        .card {
          position: relative;
          background: rgba(255, 255, 255, 0.95);
          border-radius: 24px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          padding: 2rem;
          max-width: 650px;
          width: 100%;
          text-align: center;
          z-index: 1;
        }
        .hero-image {
          margin-bottom: 1.5rem;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }
        h1 {
          margin: 0 0 0.5rem;
          font-size: 3rem;
          color: #333;
          letter-spacing: 2px;
        }
        .subtitle {
          margin: 0 0 1rem;
          font-size: 1.25rem;
          color: #555;
        }
        .description {
          margin: 0 0 1.5rem;
          font-size: 1rem;
          color: #666;
          line-height: 1.6;
        }
        .form-wrapper {
          border: 3px solid #ff6f91;
          border-radius: 16px;
          overflow: hidden;
          margin-bottom: 1.5rem;
        }
        iframe {
          border: none;
        }
        .footer {
          font-size: 0.9rem;
          color: #444;
        }
        .footer a {
          color: #d62828;
          text-decoration: none;
          font-weight: 600;
        }
        .footer a:hover {
          text-decoration: underline;
        }
        @media (max-width: 600px) {
          .hero {
            padding: 1rem;
          }
          h1 {
            font-size: 2.25rem;
          }
        }
      `}</style>
    </main>
  );
}
