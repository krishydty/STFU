// components/Navbar.js
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // inline logo style with elegant gradient
  const logoStyle = {
    fontSize: '2rem',
    fontWeight: 700,
    background: 'linear-gradient(90deg, #654ea3 0%, #eaafc8 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
    letterSpacing: '1px',
    textDecoration: 'none',
  };

  return (
    <>
      <nav className="navbar">
        <div className="container">
          {/* Centered logo */}
          <Link href="/" style={logoStyle}>
            Style To Feel U
          </Link>

          {/* Hamburger for mobile */}
          <button
            className="hamburger"
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </button>

          {/* Nav links on desktop / slide-down on mobile */}
          <ul className={`nav-links${open ? ' open' : ''}`}>
            <li>
              <Link href="#gallery" onClick={() => setOpen(false)}>
                Gallery
              </Link>
            </li>
            <li>
              <Link href="#how-it-works" onClick={() => setOpen(false)}>
                How It Works
              </Link>
            </li>
            <li>
              <Link href="#order" onClick={() => setOpen(false)}>
                Order Now
              </Link>
            </li>
            <li>
              <a
                href="https://instagram.com/stfu_theshop"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <style jsx>{`
        .navbar {
          background: rgba(3, 3, 3, 0.95);
          padding: 1rem 2rem;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: center;   /* center logo on desktop */
          align-items: center;
          position: relative;        /* allow absolutely positioned nav-links */
        }

        /* Desktop nav links: positioned to the right of the logo */
        .nav-links {
          list-style: none;
          display: flex;
          gap: 2rem;
          margin: 0;
          padding: 0;
          position: absolute;
          right: 0rem;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-on-dark)
        }
        .nav-links li a {
          color: var(--text-on-dark);
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s;
        }
        .nav-links li a:hover {
          color: #aaa;
        }

        /* Hamburger icon (hidden on desktop) */
        .hamburger {
          display: none;
          flex-direction: column;
          justify-content: space-between;
          width: 24px;
          height: 18px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
        }
        .bar {
          width: 100%;
          height: 3px;
          background-color: #fff;
          border-radius: 2px;
        }

        /* Mobile styles */
        @media (max-width: 768px) {
          .container {
            justify-content: space-between; /* logo left, hamburger right */
          }
          .hamburger {
            display: flex;
          }
          .nav-links {
            display: none;
          }
          .nav-links.open {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            padding: 1rem 2rem;
            background: rgba(15, 15, 15, 0.95);
            position: absolute;
            top: 313%;
            left: 0;
            right: 0;
            z-index: 1001;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          }
        }
      `}</style>
    </>
  );
}
