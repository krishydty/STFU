// components/HowItWorksSection.js
'use client';
export default function HowItWorksSection() {
  const steps = [
    { id: 1, title: 'Choose Your Style', description: 'Browse our premium quality blank tees and pick your favorite color and fit.' },
    { id: 2, title: 'Share Your Vision', description: 'Upload your design, artwork, or describe your idea to us. We can also help you create a design!' },
    { id: 3, title: 'We Create & Ship', description: 'Our team meticulously prints your custom tee and ships it right to your doorstep.' },
  ];

  return (
    <>
      <section id="how-it-works" className="how-it-works-section">
        <div className="container">
          <h2>How It Works</h2>
          <p className="section-subtitle">Creating your unique tee is as easy as 1-2-3!</p>
          <div className="steps-container">
            {steps.map((step) => (
              <div key={step.id} className="step-card">
                <div className="step-number">{step.id}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <style jsx>{`
        .how-it-works-section {
          padding: 4rem 2rem;
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
        .steps-container {
          display: flex;
          justify-content: space-around;
          gap: 2rem;
          flex-wrap: wrap;
        }
        .step-card {
          background: var(--background-light);
          padding: 2rem;
          border-radius: var(--border-radius);
          box-shadow: var(--card-shadow);
          flex-basis: 300px; /* Each card will try to be 300px wide */
          text-align: left;
          position: relative;
        }
        .step-number {
          position: absolute;
          top: -20px;
          left: 20px;
          background-color: var(--primary-color);
          color: white;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: 700;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }
        .step-card h3 {
          margin-top: 2rem; /* Space for the number */
          font-size: 1.5rem;
          color: var(--accent-color);
          margin-bottom: 0.5rem;
        }
        .step-card p {
          font-size: 1rem;
          color: var(--text-light);
          line-height: 1.6;
        }
      `}</style>
    </>
  );
}