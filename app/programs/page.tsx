import type { Metadata } from "next";
import { academics, programTracks } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Programs | Spiritan Academy",
  description: "Academic and formation programs offered at Spiritan Academy.",
};

export default function ProgramsPage() {
  return (
    <section className="inner-page">
      <div className="container">
        <div className="page-hero">
          <h2>Programs</h2>
          <p>Age-appropriate pathways designed for holistic growth in faith and scholarship.</p>
        </div>

        <div className="feature-grid">
          {programTracks.map((program) => (
            <article className="feature-card" key={program.title}>
              <p className="item-kicker">{program.level}</p>
              <h3>{program.title}</h3>
              <p>{program.summary}</p>
            </article>
          ))}
        </div>

        <h3 className="subsection-title">Core Learning Areas</h3>
        <div className="feature-grid compact">
          {academics.map((program) => (
            <article className="feature-card" key={program.title}>
              <h4>{program.title}</h4>
              <p>{program.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
