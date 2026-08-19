export default function WatchPage() {
  return (
    <main className="watch-page">
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
    <a className="active" href="/watch">
      WATCH
    </a>
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
      <section className="watch-hero">
        <span className="watch-label">WATCH</span>

        <h1>Programs that inspire.</h1>

        <p>
          Explore faith, health, family, music, kids programs
          and Bible studies from Rescue World TV.
        </p>
      </section>

      <section className="watch-content">
        <h2>Explore Programs</h2>

        <div className="watch-categories">
          <button className="active">ALL</button>
          <button>SERMONS</button>
          <button>FAITH</button>
          <button>HEALTH</button>
          <button>FAMILY</button>
          <button>KIDS</button>
          <button>MUSIC</button>
          <button>BIBLE STUDY</button>
        </div>

        <div className="watch-grid">

          <article className="program-card">
            <div className="program-image">
              <span>▶</span>
            </div>
            <h3>The Word Alive</h3>
            <p>SERMONS</p>
          </article>

          <article className="program-card">
            <div className="program-image">
              <span>▶</span>
            </div>
            <h3>Hope in Troubled Times</h3>
            <p>FAITH</p>
          </article>

          <article className="program-card">
            <div className="program-image">
              <span>▶</span>
            </div>
            <h3>Healthy Choices Every Day</h3>
            <p>HEALTH</p>
          </article>

          <article className="program-card">
            <div className="program-image">
              <span>▶</span>
            </div>
            <h3>A Strong Family by Design</h3>
            <p>FAMILY</p>
          </article>

          <article className="program-card">
            <div className="program-image">
              <span>▶</span>
            </div>
            <h3>God Loves Me</h3>
            <p>KIDS</p>
          </article>

          <article className="program-card">
            <div className="program-image">
              <span>▶</span>
            </div>
            <h3>Praise & Worship</h3>
            <p>MUSIC</p>
          </article>

        </div>
      </section>
    </main>
  );
}
