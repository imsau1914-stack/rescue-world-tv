export default function Footer() {
  return (
    <footer className="global-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <img
            src="/rescue-world-tv-lineal.svg"
            alt="Rescue World TV"
            className="footer-logo"
          />
          <p>
            Rescuing lives. Restoring purpose. Revealing hope.
          </p>
        </div>

        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/live">Live</a>
          <a href="/watch">Watch</a>
          <a href="/categories">Categories</a>
          <a href="/about">About</a>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Rescue World TV. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
