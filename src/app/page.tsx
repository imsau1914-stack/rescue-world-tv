"use client";
import { useEffect, useState } from "react";
const featured = [
  {
    title: "God's Promises That Never Fail",
    category: "FAITH",
    duration: "28:45",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Power in Prayer",
    category: "SERMONS",
    duration: "24:12",
    image:
      "https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "A Strong Family by Design",
    category: "FAMILY",
    duration: "31:09",
    image:
      "https://images.unsplash.com/photo-1504151932400-72d4384f04b3?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Living Well God's Way",
    category: "HEALTH",
    duration: "19:33",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1200&q=85",
  },
];

const latest = [
  {
    title: "The Word Alive",
    category: "SERMONS",
    duration: "26:14",
    image:
      "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Hope in Troubled Times",
    category: "FAITH",
    duration: "22:47",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "God Loves Me",
    category: "KIDS",
    duration: "15:30",
    image:
      "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Praise & Worship",
    category: "MUSIC",
    duration: "18:26",
    image:
      "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Studying the Scriptures",
    category: "BIBLE STUDY",
    duration: "27:11",
    image:
      "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Healthy Choices Every Day",
    category: "HEALTH",
    duration: "16:50",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=85",
  },
];

function ProgramCard({
  item,
  small = false,
}: {
  item: (typeof featured)[number];
  small?: boolean;
}) {
  return (
    <article className={`program-card ${small ? "program-card-small" : ""}`}>
      <div
        className="program-image"
        style={{ backgroundImage: `url("${item.image}")` }}
      >
        <div className="program-shade" />
        <span className="duration">{item.duration}</span>
      </div>

      <h3>{item.title}</h3>
      <p>{item.category}</p>
    </article>
  );
}

const heroSlides = [
  {
    title1: "Rescuing lives.",
    title2: "Restoring purpose.",
    highlight: "Revealing hope.",
    description1: "Inspiring programs that strengthen your faith,",
    description2: "health and family.",
    image: "/hero-1.webp",
  },
  {
    title1: "Faith for today.",
    title2: "Hope for tomorrow.",
    highlight: "Christ for everyone.",
    description1: "Biblical messages created to inspire,",
    description2: "strengthen and transform lives.",
    image: "/hero-2.webp",
  },
  {
    title1: "Healthy living.",
    title2: "Stronger families.",
    highlight: "A better life.",
    description1: "Practical programs for your health,",
    description2: "family and everyday life.",
    image: "/hero-3.webp",
  },
  {
    title1: "Stories of faith.",
    title2: "Messages of hope.",
    highlight: "Around the world.",
    description1: "Discover inspiring programs and stories",
    description2: "from the Rescue World community.",
    image: "/hero-4.webp",
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
    useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((current) => (current + 1) % heroSlides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="site">
      
    <section
  className="hero"
  id="live"
style={{
  backgroundImage: `url(${heroSlides[currentSlide].image})`,
  backgroundSize: "cover",
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat",
}}
>
        <div className="hero-overlay" />

        <div className="hero-content">
          <div className="hero-copy">
            
            <h1>
            {heroSlides[currentSlide].title1}
            <br />
            {heroSlides[currentSlide].title2}
            <br />
            <span>{heroSlides[currentSlide].highlight}</span>
            </h1>
            
            <p>
              {heroSlides[currentSlide].description1}
              <br />
              {heroSlides[currentSlide].description2}
            </p>

            <div className="hero-buttons">
              <a className="primary-button" href="/live">
                ▶ &nbsp; WATCH LIVE
              </a>

              <a className="secondary-button" href="watch">
                BROWSE PROGRAMS
              </a>
            </div>
          </div>

          <aside className="live-card">
            <span className="live-now">● LIVE NOW</span>

            <h2>Rescue World TV</h2>

            <p className="inspiration">24/7 Inspiration</p>

            <div className="live-divider" />

            <a href="/live" className="watch-live-button">
              ▶ &nbsp; WATCH LIVE
            </a>
          </aside>
        </div>

       <div className="hero-dots">
  {heroSlides.map((_, index) => (
    <span
      key={index}
      className={currentSlide === index ? "selected" : ""}
      onClick={() => setCurrentSlide(index)}
    />
  ))}
</div> 
     
    </section>

      <section className="content-section" id="watch">
        <div className="section-heading">
          <h2>FEATURED</h2>
          <a href="/watch">VIEW ALL &nbsp;›</a>
        </div>

        <div className="featured-grid">
          {featured.map((item) => (
            <ProgramCard key={item.title} item={item} />
          ))}

          <button className="carousel-arrow">›</button>
        </div>
      </section>

      <section className="content-section latest-section">
        <div className="section-heading">
          <h2>LATEST PROGRAMS</h2>
          <a href="/watch">VIEW ALL &nbsp;›</a>
        </div>

        <div className="latest-grid">
          {latest.map((item) => (
            <ProgramCard key={item.title} item={item} small />
          ))}

          <button className="carousel-arrow">›</button>
        </div>
      </section>

      <section className="benefits" id="about">
        <div className="benefit">
          <span className="benefit-icon">▣</span>
          <div>
            <strong>WATCH ANYWHERE</strong>
            <p>On any device, anytime.</p>
          </div>
        </div>

        <div className="benefit">
          <span className="benefit-icon">♡</span>
          <div>
            <strong>FAMILY FRIENDLY</strong>
            <p>Safe and uplifting content.</p>
          </div>
        </div>

        <div className="benefit">
          <span className="benefit-icon">◎</span>
          <div>
            <strong>MULTI-LANGUAGE</strong>
            <p>Programs in multiple languages.</p>
          </div>
        </div>

        <div className="benefit">
          <span className="benefit-icon">♟</span>
          <div>
            <strong>MAKE AN IMPACT</strong>
            <p>Share hope. Change lives.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
