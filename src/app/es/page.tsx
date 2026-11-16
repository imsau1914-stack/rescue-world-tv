
import { es } from "../../dictionaries/es";

export default function SpanishHome() {
  return (
    <main className="site">
      <section className="content-section">
        <h1>Rescue World TV</h1>
        <h2>{es.home.featured}</h2>
        <p>{es.benefits.anywhereDescription}</p>
      </section>
    </main>
  );
}
