import type { Metadata } from "next";
import { mediaItems } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Media | Spiritan Academy",
  description: "Photo stories, videos, and newsletters from Spiritan Academy.",
};

function dateLabel(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}

export default function MediaPage() {
  return (
    <section className="inner-page section-offwhite">
      <div className="container">
        <div className="page-hero">
          <h2>Media</h2>
          <p>Stories from campus life, ministry, and student achievements.</p>
        </div>

        <div className="media-grid">
          {mediaItems.map((item) => (
            <article className="media-card" key={item.id}>
              <div className="media-thumb" aria-hidden="true" />
              <div className="media-content">
                <p className="item-kicker">{item.type}</p>
                <h3>{item.title}</h3>
                <p>{dateLabel(item.published)}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
