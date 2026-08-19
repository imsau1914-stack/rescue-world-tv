"use client";
import { useState } from "react";
export default function SearchPage() {
  const [query, setQuery] = useState("");
  return (
    <main className="search-page">
      <header className="live-topbar">
        <a href="/" className="live-brand">
          <img
            src="/logo rescue tv.svg"
            alt="Rescue World TV"
            className="brand-logo"
          />
        </a>

        <nav className="live-nav">
          <a href="/">HOME</a>
          <a href="/live">LIVE</a>
          <a href="/watch">WATCH</a>
          <a href="/categories">CATEGORIES</a>
          <a href="/about">ABOUT</a>
        </nav>

        <div className="live-top-actions">
         <div className="header-search">
  <span className="header-search-icon">⌕</span>
  <input
    type="search"
    placeholder="Search..."
    aria-label="Search Rescue World TV"
    value={query}
    onChange={(e) => setQuery(e.target.value)}
  />
</div>
          <button className="donate-button">
            DONATE <span>♡</span>
          </button>

          <button className="signin-button">
            ♟ &nbsp; SIGN IN
          </button>
        </div>
      </header>

      <section className="search-content">
        <span className="about-section-label">SEARCH</span>

        <h1>Find what inspires you.</h1>

        <p>
          Search sermons, Bible studies, health programs, family content,
          music and more.
        </p>

        <div className="search-box">
          <input
            type="search"
            placeholder="Search Rescue World TV..."
            aria-label="Search Rescue World TV"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        <button
  type="button"
  onClick={() => alert(`Searching for: ${query}`)}
>
  SEARCH
</button>
        </div>
      </section>
    </main>
  );
}
