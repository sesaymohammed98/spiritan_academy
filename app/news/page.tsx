import type { Metadata } from "next";
import { CalendarDays } from "lucide-react";
import { campusNews } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "News | Spiritan Academy",
  description: "Latest campus news and school updates from Spiritan Academy.",
};

function dateLabel(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}

export default function NewsPage() {
  return (
    <section className="inner-page section-offwhite">
      <div className="container">
        <div className="page-hero">
          <h2>Campus News</h2>
          <p>Updates from classrooms, ministry, and student achievements.</p>
        </div>

        <div className="news-grid">
          {campusNews.map((item) => (
            <article className="news-item" key={item.id}>
              <div className="demo-img" aria-hidden="true" />
              <div className="news-content">
                <span className="news-date">
                  <CalendarDays size={14} /> {dateLabel(item.date)}
                </span>
                <h4>{item.title}</h4>
                <p>{item.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
