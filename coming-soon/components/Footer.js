// components/Footer.js
'use client';
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer">
        <div className="container">
          <p>&copy; {currentYear} Style To Feel U. All Rights Reserved.</p>
          <p>Express Yourself, Your Way.</p>
          <div className="social-links">
            <a href="https://instagram.com/stfu_theshop" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            {/* Add other social links here if you have them */}
          </div>
        </div>
      </footer>
      <style jsx>{`
        .footer {
          background-color: #333;
          color: #f0f2f5;
          padding: 2rem;
          text-align: center;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
        }
        .footer p {
          margin: 0.5rem 0;
        }
        .social-links a {
          color: var(--primary-color); /* Use CSS variable */
          margin: 0 0.5rem;
          text-decoration: none;
          font-weight: 600;
        }
        .social-links a:hover {
          text-decoration: underline;
        }
      `}</style>
    </>
  );
}