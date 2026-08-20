"use client";
import { useState } from "react";
export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [searched, setSearched] = useState(false);
  const searchItems = [
  {
    title: "Sermons",
    description: "Inspiration and messages that transform lives.",
    image: "/image sermon.png",
    keywords: "sermon sermons preaching faith hope message",
  },
  {
    title: "Bible Studies",
    description: "Grow deeper in the Word and in your faith.",
    image: "/open bible.png",
    keywords: "bible bible study scripture word faith",
  },
  {
    title: "Health",
    description: "Programs for a better life and total well-being.",
    image: "/health images.png",
    keywords: "health wellness nutrition healthy lifestyle",
  },
  {
    title: "Family",
    description: "Strengthen your home with biblical principles.",
    image: "/family image.png",
    keywords: "family marriage children home relationships",
  },
  {
    title: "Music",
    description: "Worship, praise and music that lifts your soul.",
    image: "/image music.png",
    keywords: "music worship praise songs instruments",
  },
];
  const filteredItems = searchItems.filter((item) => {
  const term = query.toLowerCase().trim();

  return (
    item.title.toLowerCase().includes(term) ||
    item.description.toLowerCase().includes(term) ||
    item.keywords.toLowerCase().includes(term)
  );
});
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
  <div className="search-hero">
    <span className="about-section-label">SEARCH</span>

    <h1>
      Find what
      <br />
      inspires you<span className="search-dot">.</span>
    </h1>

    <p>
      Search sermons, Bible studies, health programs,
      family content, music and more.
    </p>

    <div className="search-main-box">
      <div className="search-main-input">
        <span className="search-main-icon">⌕</span>

        <input
          type="search"
          placeholder="Search Rescue World TV..."
          aria-label="Search Rescue World TV"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <button
        type="button"
        className="search-main-button"
        onClick={() => setSearched(true)}
      >
        SEARCH
      </button>
    </div>

    <div className="popular-searches">
      <span>POPULAR SEARCHES:</span>
      <button type="button">Faith</button>
      <button type="button">Health</button>
      <button type="button">Family</button>
      <button type="button">Music</button>
      <button type="button">Hope</button>
      <button type="button">Bible Study</button>
    </div>
  {searched && (
  <div className="search-results-message">
    <span>SEARCH RESULTS</span>
    <h2>Results for "{query}"</h2>

    <div className="search-results-grid">
      {filteredItems.map((item) => (
        <div className="search-result-card" key={item.title}>
          <img src={item.image} alt={item.title} />
          <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
)}
  </div>
</section>
      <section className="search-categories">
  <div className="search-categories-header">
    <h2>Explore Categories</h2>
  </div>

  <div className="search-category-grid">
    <a href="/categories" className="search-category-card">
      <div 
        className="search-category-image"
        style={{ backgroundImage: "url('/image sermon.png')" }}
        ></div>
      <div className="search-category-body">
        <h3>Sermons</h3>
        <p>Inspiration and messages that transform lives.</p>
      </div>
    </a>

    <a href="/categories" className="search-category-card">
      <div 
        className="search-category-image"
        style={{ backgroundImage: "url('/open bible.png')" }}
        ></div>
      <div className="search-category-body">
        <h3>Bible Studies</h3>
        <p>Grow deeper in the Word and in your faith.</p>
      </div>
    </a>

    <a href="/categories" className="search-category-card">
      <div 
        className="search-category-image" 
        style={{ backgroundImage: "url('/health images.png')" }}
        ></div>
      <div className="search-category-body">
        <h3>Health</h3>
        <p>Programs for a better life and total well-being.</p>
      </div>
    </a>

    <a href="/categories" className="search-category-card">
      <div 
        className="search-category-image"
        style={{ backgroundImage: "url('/family image.png')" }}
        ></div>
      <div className="search-category-body">
        <h3>Family</h3>
        <p>Strengthen your home with biblical principles.</p>
      </div>
    </a>

    <a href="/categories" className="search-category-card">
      <div 
        className="search-category-image" 
        style={{ backgroundImage: "url('/image music.png')" }}
        ></div>
      <div className="search-category-body">
        <h3>Music</h3>
        <p>Worship, praise and music that lifts your soul.</p>
      </div>
    </a>
  </div>

  <div className="search-categories-action">
    <a href="/categories">VIEW ALL CATEGORIES →</a>
  </div>
</section>
    </main>
  );
}
