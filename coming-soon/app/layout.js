// app/layout.js
import './globals.css'; // Import global styles
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Style To Feel U - Customizable Tee Shirts',
  description: 'Premium quality customizable tee shirts. Express yourself with unique designs.',
  // Add more metadata like keywords, open graph tags etc.
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}