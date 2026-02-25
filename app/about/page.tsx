import type { Metadata } from "next";
import { schoolProfile } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About | Spiritan Academy",
  description: "Learn about Spiritan Academy, our mission, values, and leadership.",
};

export default function AboutPage() {
  return (
    <section className="inner-page">
      <div className="container">
        <div className="page-hero">
          <h2>About Spiritan Academy</h2>
          <p>
            We are a Catholic demonstration school dedicated to forming students in wisdom,
            character, and faith from Grade 1 to Grade 12.
          </p>
        </div>

        <div className="two-col">
          <article className="feature-card">
            <h3>Our Mission</h3>
            <p>
              To nurture hearts and minds through rigorous academics, pastoral care, and
              service grounded in Spiritan values.
            </p>
          </article>
          <article className="feature-card">
            <h3>Our Vision</h3>
            <p>
              A Christ-centered learning community where students become leaders, innovators,
              and compassionate citizens.
            </p>
          </article>
        </div>

        <div className="feature-grid">
          <article className="feature-card">
            <h3>School Facts</h3>
            <p>Founded: {schoolProfile.foundedDate}</p>
            <p>Students per class: {schoolProfile.maxStudentsPerClass} max</p>
            <p>Motto: {schoolProfile.motto}</p>
            <p>Location: {schoolProfile.campus}</p>
          </article>
          <article className="feature-card">
            <h3>Faith Formation</h3>
            <p>Daily prayer, liturgy, reflection, and campus ministry for all grade levels.</p>
          </article>
          <article className="feature-card">
            <h3>Academic Excellence</h3>
            <p>Qualified faculty, personalized learning, and consistent performance support.</p>
          </article>
          <article className="feature-card">
            <h3>Leadership & Service</h3>
            <p>Student-led initiatives, social outreach, and community partnerships.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
