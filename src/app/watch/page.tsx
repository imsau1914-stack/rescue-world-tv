"use client";
import { useState } from "react";
export default function WatchPage() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  return (
    <main className="watch-page">
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
          <button
  className={activeCategory === "ALL" ? "active" : ""}
  onClick={() => setActiveCategory("ALL")}
>
  ALL
</button>
         <button
  className={activeCategory === "SERMONS" ? "active" : ""}
  onClick={() => setActiveCategory("SERMONS")}
>
  SERMONS
</button>

<button
  className={activeCategory === "FAITH" ? "active" : ""}
  onClick={() => setActiveCategory("FAITH")}
>
  FAITH
</button>

<button
  className={activeCategory === "HEALTH" ? "active" : ""}
  onClick={() => setActiveCategory("HEALTH")}
>
  HEALTH
</button>

<button
  className={activeCategory === "FAMILY" ? "active" : ""}
  onClick={() => setActiveCategory("FAMILY")}
>
  FAMILY
</button>

<button
  className={activeCategory === "KIDS" ? "active" : ""}
  onClick={() => setActiveCategory("KIDS")}
>
  KIDS
</button>

<button
  className={activeCategory === "MUSIC" ? "active" : ""}
  onClick={() => setActiveCategory("MUSIC")}
>
  MUSIC
</button>

<button
  className={activeCategory === "BIBLE STUDY" ? "active" : ""}
  onClick={() => setActiveCategory("BIBLE STUDY")}
>
  BIBLE STUDY
</button>

<button
  className={activeCategory === "PROPHECY" ? "active" : ""}
  onClick={() => setActiveCategory("PROPHECY")}
>
  PROPHECY
</button>
          <button
  className={activeCategory === "DOCUMENTARIES" ? "active" : ""}
  onClick={() => setActiveCategory("DOCUMENTARIES")}
>
  DOCUMENTARIES
</button>
        </div>

       <div className="watch-grid">
  {activeCategory === "DOCUMENTARIES" ? (
  <>
    <article
      className="program-card"
      onClick={() =>
        (window.location.href =
          "/watch/the-book-that-marked-history")
      }
      style={{ cursor: "pointer" }}
    >
      <div className="program-image">
        <span>▶</span>
      </div>
      <h3>The Book That Marked History</h3>
      <p>DOCUMENTARIES</p>
    </article>

    <article
      className="program-card"
      onClick={() =>
        (window.location.href =
          "/watch/jerusalem-in-the-footsteps-of-jesus")
      }
      style={{ cursor: "pointer" }}
    >
      <div className="program-image">
        <span>▶</span>
      </div>
      <h3>Jerusalem, In the Footsteps of Jesus</h3>
      <p>DOCUMENTARIES</p>
    </article>
  </>
) : (
    <>
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
    </>
  )}
</div> 

      </section>
    </main>
  );
}
