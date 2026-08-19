export default function AboutPage() {
  return (
    <main className="about-page">
      <header className="live-topbar">
        <a href="/" className="live-brand">
          <div className="live-brand-globe">🌎</div>

          <div className="live-brand-text">
            <strong>RESCUE</strong>
            <span>WORLD TV</span>
          </div>
        </a>

        <nav className="live-nav">
          <a href="/">HOME</a>
          <a href="/live">LIVE</a>
          <a href="/watch">WATCH</a>
          <a href="/categories">CATEGORIES</a>
          <a className="active" href="/about">
            ABOUT
          </a>
        </nav>

        <div className="live-top-actions">
          <button className="search-button" aria-label="Search">
            ⌕
          </button>

          <button className="donate-button">
            DONATE <span>♡</span>
          </button>

          <button className="signin-button">♟ &nbsp; SIGN IN</button>
        </div>
      </header>

      <section className="about-content">
        <div className="about-hero">
          <span className="about-label">ABOUT RESCUE WORLD TV</span>

          <h1>
            Sharing truth.
            <br />
            Restoring hope.
          </h1>

          <p>
            Rescue World TV exists to proclaim the Word of God and share
            messages that strengthen faith, family, health and spiritual life.
          </p>
        </div>

        <section className="about-purpose">
          <span className="about-section-label">OUR PURPOSE</span>

          <h2>
            We are a ministry whose purpose is the preaching of the Word of God,
            the salvation of men, and the speedy restoration of the Kingdom of
            God.
          </h2>
        </section>

        <section className="about-grid">
          <article className="about-card">
            <span>01</span>
            <h3>Preach the Word</h3>
            <p>
              To faithfully proclaim biblical truth and make the message of
              salvation accessible to people around the world.
            </p>
          </article>

          <article className="about-card">
            <span>02</span>
            <h3>Reach Lives</h3>
            <p>
              To use media as a tool to bring hope, encouragement and the
              message of Christ to individuals and families.
            </p>
          </article>

          <article className="about-card">
            <span>03</span>
            <h3>Prepare for the Kingdom</h3>
            <p>
              To inspire spiritual growth, faithful living and readiness for
              the restoration of the Kingdom of God.
            </p>
          </article>
        </section>

        <section className="about-mission">
          <div>
            <span className="about-section-label">OUR MISSION</span>
            <h2>Rescuing lives. Restoring purpose. Revealing hope.</h2>
          </div>

          <p>
            Through television, digital media and worldwide outreach, Rescue
            World TV seeks to provide Christ-centered programming for every
            generation.
          </p>
        </section>
      </section>
    </main>
  );
}
