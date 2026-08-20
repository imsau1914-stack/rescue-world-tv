export default function Header() {
  return (
    <header className="topbar">
      <a className="brand" href="/">
        <img
          src="/logo rescue tv.svg"
          alt="Rescue World TV"
          className="brand-logo"
        />
      </a>

      <nav className="nav">
        <a href="/">HOME</a>
        <a href="/live">LIVE</a>
        <a href="/watch">WATCH</a>
        <a href="/categories">CATEGORIES</a>
        <a href="/about">ABOUT</a>
      </nav>

      <div className="top-actions">
        <a className="search-button" href="/search" aria-label="Search">
          🔎
        </a>

        <button className="donate-button">
          DONATE <span>♡</span>
        </button>

        <button className="signin-button">♟ &nbsp; SIGN IN</button>
      </div>
    </header>
  );
}
