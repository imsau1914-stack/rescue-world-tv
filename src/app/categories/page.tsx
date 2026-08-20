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
