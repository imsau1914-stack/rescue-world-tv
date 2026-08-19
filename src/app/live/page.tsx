export default function LivePage() {
  return (
    <main className="live-page">
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
          <a className="active" href="/live">
            LIVE
          </a>
          <a href="/#watch">WATCH</a>
          <a href="/#categories">CATEGORIES</a>
          <a href="/#about">ABOUT</a>
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

      <section className="live-page-content">
        <div className="live-page-heading">
          <span className="live-page-badge">● LIVE NOW</span>

          <h1>Rescue World TV</h1>

          <p>
            Inspiring the world with faith, hope, health and family-centered
            programming.
          </p>
        </div>

        <div className="live-layout">
          <section className="live-player-card">
            <div className="live-player">
              <div className="live-player-placeholder">
                <span>▶</span>
                <h2>LIVE STREAM</h2>
                <p>Cloudflare Stream player will appear here.</p>
              </div>
            </div>

            <div className="live-program-info">
              <div>
                <span className="live-small-badge">● LIVE</span>
                <h2>Rescue World TV</h2>
                <p>24/7 Inspiration</p>
              </div>

              <button className="live-share-button">SHARE</button>
            </div>
          </section>

          <aside className="live-sidebar">
            <div className="live-sidebar-card">
              <span className="live-sidebar-label">NOW PLAYING</span>
              <h3>Rescue World TV Live</h3>
              <p>
                Faith-filled programming, inspiring messages and uplifting
                content for the whole family.
              </p>
            </div>

            <div className="live-sidebar-card">
              <span className="live-sidebar-label">UP NEXT</span>

              <div className="live-schedule-item">
                <span>12:30 PM</span>
                <strong>Faith & Hope</strong>
              </div>

              <div className="live-schedule-item">
                <span>1:00 PM</span>
                <strong>Healthy Living</strong>
              </div>

              <div className="live-schedule-item">
                <span>1:30 PM</span>
                <strong>Bible Study</strong>
              </div>

              <div className="live-schedule-item">
                <span>2:00 PM</span>
                <strong>Family & Kids</strong>
              </div>
            </div>
          </aside>
        </div>

        <section className="live-bottom-info">
          <div>
            <strong>WATCH ANYWHERE</strong>
            <p>On any device, anytime.</p>
          </div>

          <div>
            <strong>FAMILY FRIENDLY</strong>
            <p>Safe and uplifting content.</p>
          </div>

          <div>
            <strong>MULTI-LANGUAGE</strong>
            <p>Programs in multiple languages.</p>
          </div>

          <div>
            <strong>24/7 INSPIRATION</strong>
            <p>Hope around the clock.</p>
          </div>
        </section>
      </section>
    </main>
  );
}
