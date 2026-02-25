import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Campus Life | Spiritan Academy",
  description: "Student life, campus ministry, clubs, sports, and wellness at Spiritan Academy.",
};

export default function StudentLifePage() {
  return (
    <section className="inner-page">
      <div className="container">
        <div className="page-hero">
          <h2>Campus Life / Student Life</h2>
          <p>
            Our learners grow through fellowship, worship, athletics, creative expression, and
            service opportunities.
          </p>
        </div>

        <div className="feature-grid">
          <article className="feature-card">
            <h3>Campus Ministry</h3>
            <p>Retreats, choir, liturgical service, and weekly formation circles.</p>
          </article>
          <article className="feature-card">
            <h3>Clubs & Societies</h3>
            <p>Robotics, debate, music, media arts, and mission action groups.</p>
          </article>
          <article className="feature-card">
            <h3>Sports & Wellness</h3>
            <p>Competitive teams, wellness coaching, and values-driven sportsmanship.</p>
          </article>
          <article className="feature-card">
            <h3>Leadership</h3>
            <p>Student council, peer mentoring, and prefect-led community projects.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
