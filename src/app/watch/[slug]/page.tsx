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

export default async function ProgramPage({
  params,
}: ProgramPageProps) {
  const { slug } = await params;

  const program = programs[slug as keyof typeof programs];

  if (!program) {
    return <main>Program not found</main>;
  }

return (
<main className="program-page">
  <section className="program-player">
  {slug === "the-book-that-marked-history" ? (
    <iframe
      src="https://player.vimeo.com/video/843550134"
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
