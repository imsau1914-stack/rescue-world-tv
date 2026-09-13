"use client";

import { useState } from "react";

const episodes = [
  {
    title: "Jesus is my best friend",
    theme: "Theme 1/7",
    vimeoId: "1216238681",
  },
  {
    title: "A Friend Always Loves",
    theme: "Theme 2/7",
    vimeoId: "1217200483",
  },
  {
    title: "Helpful friends",
    theme: "Theme 3/7",
    vimeoId: "1217455746",
  },
  {
    title: "Speak the truth in love",
    theme: "Theme 4/7",
    vimeoId: "1217767722",
  },
  {
    title: "Choose Good Friends",
    theme: "Theme 5/7",
    vimeoId: "1218046546",
  },
  {
    title: "Friends who forgive",
    theme: "Theme 6/7",
    vimeoId: "1218175574",
  },
  {
    title: "Be a Friend to Everyone",
    theme: "Theme 7/7",
    vimeoId: "1218339802",
  },
];

export default function FriendsKidsSeriesPage() {
  const [selectedEpisode, setSelectedEpisode] = useState(0);

  const currentEpisode = episodes[selectedEpisode];

  return (
    <main className="watch-page">
      <section className="watch-hero">
        <span className="watch-eyebrow">KIDS SERIES</span>
        <h1>FRIENDS</h1>
        <p>
          Seven Bible-centered lessons about friendship, love, forgiveness,
          truth and choosing good friends.
        </p>
      </section>

      <section className="watch-content">
        <div
          style={{
            position: "relative",
            width: "100%",
            paddingTop: "56.25%",
            background: "#000",
            borderRadius: "12px",
            overflow: "hidden",
            marginBottom: "24px",
          }}
        >
          <iframe
            src={`https://player.vimeo.com/video/${currentEpisode.vimeoId}`}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: "none",
            }}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        </div>

        <h2>{currentEpisode.title}</h2>
        <p style={{ marginBottom: "32px" }}>{currentEpisode.theme}</p>

        <h2>Episodes</h2>

        <div className="watch-grid">
          {episodes.map((episode, index) => (
            <article
              key={episode.vimeoId}
              className="program-card"
              onClick={() => setSelectedEpisode(index)}
              style={{
                cursor: "pointer",
                opacity: selectedEpisode === index ? 1 : 0.85,
              }}
            >
              <div className="program-image">
                <span>▶</span>
              </div>

              <h3>{episode.title}</h3>
              <p>{episode.theme}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
