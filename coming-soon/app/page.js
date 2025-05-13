'use client';

import { useState } from 'react';

export default function Home() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle'|'sending'|'success'|'error'>('idle');

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else throw new Error();
    } catch {
      setStatus('error');
    }
  };

  return (
    <main className="hero">
      <div className="card">
        <h1>STYLE TO FEEL U</h1>
        <p className="subtitle">Premium Quality &amp; Custom Prints</p>
        <p className="description">
          Our custom-print premium garments are launching soon! 🤩<br/>
          Got questions or want to pre-order? Drop us a line below.
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="text" name="name" required placeholder="Your Name"
            value={form.name} onChange={handleChange}
          />
          <input
            type="email" name="email" required placeholder="Your Email"
            value={form.email} onChange={handleChange}
          />
          <textarea
            name="message" required placeholder="Your Message"
            rows={4} value={form.message} onChange={handleChange}
          />
          <button type="submit" disabled={status==='sending'}>
            {status==='sending' ? 'Sending…' : 'Send Query'}
          </button>
        </form>

        {status==='success' && <p className="feedback success">✅ Message sent! We’ll be in touch shortly.</p>}
        {status==='error'   && <p className="feedback error">❌ Oops, something went wrong. Please try again later.</p>}
      </div>

      <style jsx>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%);
          font-family: 'Poppins', sans-serif;
          padding: 1rem;
        }
        .card {
          max-width: 400px;
          width: 100%;
          background: #fff;
          border-radius: 16px;
          padding: 2rem;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          text-align: center;
        }
        h1 {
          margin: 0 0 0.5rem;
          font-size: 2.5rem;
          color: #333;
        }
        .subtitle {
          margin: 0 0 1rem;
          font-size: 1.1rem;
          color: #555;
        }
        .description {
          font-size: 0.95rem;
          color: #666;
          margin-bottom: 1.5rem;
          line-height: 1.4;
        }
        form input,
        form textarea {
          width: 100%;
          padding: 0.75rem;
          margin-bottom: 1rem;
          border: 2px solid #eee;
          border-radius: 8px;
          font-size: 0.9rem;
          transition: border-color 0.2s;
        }
        form input:focus,
        form textarea:focus {
          border-color: #ff6f91;
          outline: none;
        }
        button {
          width: 100%;
          padding: 0.75rem;
          background: #ff6f91;
          color: #fff;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s;
        }
        button:disabled {
          background: #ffadb5;
          cursor: default;
        }
        button:hover:not(:disabled) {
          background: #ff4d6d;
        }
        .feedback {
          margin-top: 1rem;
          font-size: 0.9rem;
        }
        .feedback.success { color: #1a936f; }
        .feedback.error   { color: #d00000; }
      `}</style>
    </main>
  );
}
