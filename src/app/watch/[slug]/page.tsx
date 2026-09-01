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
  "jerusalem-in-the-footsteps-of-jesus": {
    title: "Jerusalem, In the Footsteps of Jesus",
    category: "DOCUMENTARIES",
    duration: "14 Chapters",
  },
  
};

export default function ProgramPage({
  params,
}: ProgramPageProps) {
  const { slug } = use (params);
  const [currentVideo, setCurrentVideo] = useState(
  slug === "jerusalem-in-the-footsteps-of-jesus"
    ? "309833835"
    : "843550134"
);

  const episodeDescriptions: Record<string, string> = {
  "843550134":
    "Discover how the Bible became one of the most influential and widely distributed books throughout history.",

  "843557898":
    "Explore the ancient manuscripts that preserved the biblical text through generations and helped transmit it across the centuries.",

  "843613323":
    "Examine the discovery and importance of the Dead Sea Scrolls and what they reveal about the preservation of Scripture.",

  "845567545":
    "Discover archaeological findings that provide historical context and evidence related to the people, places, and events of the Bible.",
};
const jerusalemDescriptions: Record<string, string> = {
  "309833835": "Discover Jerusalem, the beloved city of biblical history.",
  "310034570": "Explore the ancient walls of Jerusalem.",
  "310311941": "Discover the City of David and its biblical importance.",
  "310511110": "Visit the Pool of Bethesda and its connection to Jesus.",
  "311173370": "Explore the Mount of Olives and the ministry of Jesus.",
  "311382408": "Discover the Pool of Siloam and its biblical history.",
  "311629716": "Explore Mount Zion and its spiritual significance.",
  "311933075": "Discover the Temple Mount and its historic importance.",
  "312134692": "Explore the Upper Room and the final days of Jesus.",
  "312308789": "Visit Gethsemane and the final hours before Jesus’ arrest.",
  "312405821": "Explore the traditional site of Caiaphas’ palace.",
  "312649313": "Follow the Via Dolorosa through Jerusalem.",
  "313005360": "Explore Golgotha and the crucifixion of Jesus.",
  "313321926": "Discover the Mount of Ascension and its biblical significance.",
};
  const program = programs[slug as keyof typeof programs];

  if (!program) {
    return <main>Program not found</main>;
  }

return (
<main className="program-page">
  <section className="program-player">
  {slug === "the-book-that-marked-history" ||
  slug === "jerusalem-in-the-footsteps-of-jesus" ? (
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

  {slug === "jerusalem-in-the-footsteps-of-jesus" && (
  <section className="episode-list">

    <button
      className={currentVideo === "309833835" ? "active-episode" : ""}
      onClick={() => setCurrentVideo("309833835")}
    >
      Chapter 1 — The Beloved City
    </button>

    <button
      className={currentVideo === "310034570" ? "active-episode" : ""}
      onClick={() => setCurrentVideo("310034570")}
    >
      Chapter 2 — The City Walls
    </button>

    <button
      className={currentVideo === "310311941" ? "active-episode" : ""}
      onClick={() => setCurrentVideo("310311941")}
    >
      Chapter 3 — The City of David
    </button>

    <button
      className={currentVideo === "310511110" ? "active-episode" : ""}
      onClick={() => setCurrentVideo("310511110")}
    >
      Chapter 4 — The Pool of Bethesda
    </button>

    <button
      className={currentVideo === "311173370" ? "active-episode" : ""}
      onClick={() => setCurrentVideo("311173370")}
    >
      Chapter 5 — The Mount of Olives
    </button>

    <button
      className={currentVideo === "311382408" ? "active-episode" : ""}
      onClick={() => setCurrentVideo("311382408")}
    >
      Chapter 6 — The Pool of Siloam
    </button>

    <button
      className={currentVideo === "311629716" ? "active-episode" : ""}
      onClick={() => setCurrentVideo("311629716")}
    >
      Chapter 7 — The Mount Zion
    </button>

    <button
      className={currentVideo === "311933075" ? "active-episode" : ""}
      onClick={() => setCurrentVideo("311933075")}
    >
      Chapter 8 — The Temple Mount
    </button>

    <button
      className={currentVideo === "312134692" ? "active-episode" : ""}
      onClick={() => setCurrentVideo("312134692")}
    >
      Chapter 9 — The Upper Room
    </button>

    <button
      className={currentVideo === "312308789" ? "active-episode" : ""}
      onClick={() => setCurrentVideo("312308789")}
    >
      Chapter 10 — The Garden of Gethsemane
    </button>

    <button
      className={currentVideo === "312405821" ? "active-episode" : ""}
      onClick={() => setCurrentVideo("312405821")}
    >
      Chapter 11 — The Palace of Caiphas
    </button>

    <button
      className={currentVideo === "312649313" ? "active-episode" : ""}
      onClick={() => setCurrentVideo("312649313")}
    >
      Chapter 12 — The Via Dolorosa
    </button>

    <button
      className={currentVideo === "313005360" ? "active-episode" : ""}
      onClick={() => setCurrentVideo("313005360")}
    >
      Chapter 13 — The Golgotha
    </button>

    <button
      className={currentVideo === "313321926" ? "active-episode" : ""}
      onClick={() => setCurrentVideo("313321926")}
    >
      Chapter 14 — The Mount of Ascension
    </button>

  </section>
)}
    <section className="program-info">
      <h1>{program.title}</h1>

      <div className="program-meta">
        <span>{program.category}</span>
        <span>{program.duration}</span>
      </div>
      {slug === "the-book-that-marked-history" && (
<p className="program-description">
  {episodeDescriptions[currentVideo]}
</p>
)}
    {slug === "jerusalem-in-the-footsteps-of-jesus" && (
<p className="program-description">
  {jerusalemDescriptions[currentVideo]}
</p>
)}   
    </section>
  </main>
);  
}
