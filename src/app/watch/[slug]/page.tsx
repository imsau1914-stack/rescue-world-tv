"use client";
import { use, useState } from "react";
type ProgramPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const programs = {
  "gods-promises": {
    title: "God's Promises That Never Fail",
    category: "FAITH",
    duration: "28:45",
  },
  "power-in-prayer": {
    title: "Power in Prayer",
    category: "SERMONS",
    duration: "24:12",
  },
  "strong-family": {
    title: "A Strong Family by Design",
    category: "FAMILY",
    duration: "31:09",
  },
  "living-well": {
    title: "Living Well God's Way",
    category: "HEALTH",
    duration: "19:33",
  },
  "the-book-that-marked-history": {
    title: "The Book That Marked History",
    category: "DOCUMENTARIES",
    duration: "4 Epiosodes",
  },
};

export default function ProgramPage({
  params,
}: ProgramPageProps) {
  const { slug } = use (params);
  const [currentVideo, setCurrentVideo] = useState("843550134");

  const program = programs[slug as keyof typeof programs];

  if (!program) {
    return <main>Program not found</main>;
  }

return (
<main className="program-page">
  <section className="program-player">
  {slug === "the-book-that-marked-history" ? (
    <iframe
      src={`https://player.vimeo.com/video/${currentVideo}`}
      width="100%"
      height="100%"
      allow="autoplay; fullscreen; picture-in-picture"
      allowFullScreen
      style={{
        border: 0,
        width: "100%",
        aspectRatio: "16 / 9",
        borderRadius: "12px",
      }}
      title="The Bestseller Throughout the Centuries"
    />
  ) : (
    <div className="video-placeholder">
      <span>▶</span>
    </div>
  )}
</section>

  {slug === "the-book-that-marked-history" && (
  <section className="episode-list">
    <button
  className={currentVideo === "843550134" ? "active-episode" : ""}
  onClick={() => setCurrentVideo("843550134")}
>
      Episode 1 — The Bestseller Throughout the Centuries
    </button>

    <button
  className={currentVideo === "843557898" ? "active-episode" : ""}
  onClick={() => setCurrentVideo("843557898")}
>
      Episode 2 — The Bible Manuscripts
    </button>

    <button
  className={currentVideo === "843613323" ? "active-episode" : ""}
  onClick={() => setCurrentVideo("843613323")}
>
      Episode 3 — The Dead Sea Scrolls
    </button>

    <button
  className={currentVideo === "845567545" ? "active-episode" : ""}
  onClick={() => setCurrentVideo("845567545")}
>
      Episode 4 — Archeological Evidences
    </button>
  </section>
)}
    <section className="program-info">
      <h1>{program.title}</h1>

      <div className="program-meta">
        <span>{program.category}</span>
        <span>{program.duration}</span>
      </div>
    </section>
  </main>
);  
}
