import type { Metadata } from "next";
import { events } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Events & Activities | Spiritan Academy",
  description: "Upcoming school events, activities, and community gatherings.",
};

function dateLabel(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}

export default function EventsPage() {
  return (
    <section className="inner-page section-offwhite">
      <div className="container">
        <div className="page-hero">
          <h2>Events / Activities</h2>
          <p>Join school worship, academic showcases, and family community events.</p>
        </div>

        <div className="timeline">
          {events.map((event) => (
            <article className="timeline-item" key={event.id}>
              <p className="item-kicker">{event.category}</p>
              <h3>{event.name}</h3>
              <p className="item-meta">{dateLabel(event.date)} · {event.location}</p>
              <p>{event.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
