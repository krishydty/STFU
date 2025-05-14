// components/Navbar.js
'use client';

import Link from 'next/link';
import Image from 'next/image'; // Keep for potential future logo image

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <Link href="/" className="logo">
            {/* If you have a logo image, you might want it to be a light version for dark background */}
            {/* <Image src="/logo-light.png" alt="Style To Feel U Logo" width={50} height={50} /> */}
            Style To Feel U
          </Link>
          <ul className="nav-links">
            <li><Link href="#gallery" className="nav-link-item">Gallery</Link></li>
            <li><Link href="#how-it-works" className="nav-link-item">How It Works</Link></li>
            <li><Link href="#order" className="nav-link-item">Order Now</Link></li>
            <li>
              <a 
                href="https://instagram.com/stfu_theshop" 
                target="_blank" 
                rel="noopener noreferrer"
                className="nav-link-item instagram-link"
              >
                {/* Optional: Add an Instagram Icon here */}
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <style jsx>{`
        .navbar {
          background: var(--navbar-background);
          padding: 1rem 2rem; /* Keep padding or adjust (e.g., 1.25rem 2.5rem for more presence) */
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2); /* A slightly stronger shadow for dark bg */
          transition: background 0.3s ease-in-out; /* Smooth transition if bg ever changes */
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          font-size: 1.8rem; /* Slightly larger for more impact */
          font-weight: var(--navbar-logo-font-weight);
          color: var(--navbar-logo-color);
          letter-spacing: 0.5px; /* Adjust spacing for aesthetics */
          text-transform: uppercase; /* Optional: for a bolder look */
        }
        .logo:hover {
          transform: scale(1.03); /* Slightly more subtle scale */
          color: var(--accent-color); /* Change color on hover for more feedback */
          /* Or use a brighter version of the primary color: filter: brightness(1.2); */
        }
        .nav-links {
          list-style: none;
          display: flex;
          gap: 2rem; /* Increased gap for a more spacious feel */
          margin: 0;
          padding: 0;
        }
        .nav-link-item { /* Applied to both Link and <a> tags */
          color: var(--navbar-text-color);
          font-weight: var(--navbar-link-font-weight);
          font-size: 1rem; /* Standard size, can be increased slightly */
          transition: color 0.3s ease, transform 0.2s ease;
          position: relative; /* For creative hover effects */
          padding-bottom: 0.3rem; /* Space for underline effect */
        }
        .nav-link-item::after { /* Creative underline hover effect */
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          background-color: var(--navbar-text-hover-color);
          transition: width 0.3s ease;
        }
        .nav-link-item:hover::after {
          width: 100%;
        }
        .nav-link-item:hover {
          color: var(--navbar-text-hover-color);
          transform: translateY(-2px); /* Slight lift on hover */
        }
        .instagram-link { /* Specific styling for instagram if needed */
          /* For example, if you want it to stand out a bit more */
          /* color: var(--accent-color); */ 
        }
        .instagram-link:hover {
          /* color: var(--primary-color); */
        }

        @media (max-width: 768px) {
          /* Consider a hamburger menu for mobile instead of just hiding */
          .nav-links {
            display: none; 
          }
          .logo {
            font-size: 1.5rem; /* Adjust for smaller screens */
          }
          .container {
            justify-content: center;
          }
        }
      `}</style>
    </>
  );
}