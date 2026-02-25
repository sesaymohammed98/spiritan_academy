import type { Metadata } from "next";
import { awards } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Awards | Spiritan Academy",
  description: "Recognitions and achievements earned by Spiritan Academy and its students.",
};

export default function AwardsPage() {
  return (
    <section className="inner-page section-offwhite">
      <div className="container">
        <div className="page-hero">
          <h2>Awards & Recognition</h2>
          <p>Celebrating our school community excellence in academics, service, and innovation.</p>
        </div>

        <div className="feature-grid">
          {awards.map((award) => (
            <article className="feature-card" key={award.title}>
              <p className="item-kicker">{award.year}</p>
              <h3>{award.title}</h3>
              <p>{award.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
