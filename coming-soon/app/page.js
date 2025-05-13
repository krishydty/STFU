// pages/index.js
export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      display: "grid",
      placeItems: "center",
      textAlign: "center",
      fontFamily: "system-ui, sans-serif"
    }}>
      <div>
        <h1 style={{fontSize: "clamp(2.5rem, 8vw, 4rem)", margin: 0}}>
          KEEP&nbsp;CALM
        </h1>
        <p style={{fontSize: "1.25rem", marginTop: "0.5rem"}}>
          🚧 Coming Soon 🚧
        </p>
        <a href="https://instagram.com/yourhandle" target="_blank" rel="noreferrer"
           style={{textDecoration: "none", fontWeight: 600}}>
          Follow us on Instagram →
        </a>
      </div>
    </main>
  );
}
