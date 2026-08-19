export default function CategoriesPage() {
  const categories = [
    { name: "Sermons", description: "Messages that strengthen faith and hope." },
    { name: "Faith", description: "Programs for spiritual growth and encouragement." },
    { name: "Health", description: "Practical guidance for healthier living." },
    { name: "Family", description: "Content created to strengthen homes and relationships." },
    { name: "Kids", description: "Safe and uplifting programs for children." },
    { name: "Music", description: "Praise, worship and inspirational music." },
    { name: "Bible Study", description: "Study Scripture and discover timeless truth." },
    { name: "Lifestyle", description: "Programs for balanced and purposeful living." },
  ];

  return (
    <main className="categories-page">
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
          <a className="active" href="/categories">
            CATEGORIES
          </a>
          <a href="/about">ABOUT</a>
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

      <section className="categories-content">
        <div className="categories-heading">
          <span>CATEGORIES</span>
          <h1>Find what inspires you.</h1>
          <p>
            Explore Rescue World TV programs by topic and discover content for
            faith, health, family and everyday life.
          </p>
        </div>

        <div className="categories-grid">
          {categories.map((category) => (
            <a
              key={category.name}
              href="/watch"
              className="category-card"
            >
              <div className="category-icon">▶</div>
              <h2>{category.name}</h2>
              <p>{category.description}</p>
              <span className="category-explore">EXPLORE →</span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
