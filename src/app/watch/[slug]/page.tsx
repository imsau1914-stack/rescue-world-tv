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
    <main>
      <h1>{program.title}</h1>
      <p>{program.category}</p>
      <p>{program.duration}</p>
    </main>
  );
}
