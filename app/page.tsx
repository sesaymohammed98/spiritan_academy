import Link from "next/link";
import {
  Bot,
  CalendarCheck,
  CalendarDays,
  Church,
  FlaskConical,
  HandHelping,
  Palette,
  ScrollText,
  Shield,
} from "lucide-react";
import { AdmissionsForm } from "@/app/components/AdmissionsForm";
import {
  academics,
  campusNews,
  heroStats,
  schoolProfile,
  type CampusNewsItem,
} from "@/lib/site-data";

const iconMap = {
  flask: FlaskConical,
  palette: Palette,
  hands: HandHelping,
  shield: Shield,
  scroll: ScrollText,
  bot: Bot,
  praying: Church,
} as const;

function dateLabel(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}

async function getCampusNews(): Promise<CampusNewsItem[]> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim() || "http://localhost:3000";

  try {
    const response = await fetch(`${siteUrl}/api/news`, {
      next: { revalidate: 900 },
    });
    if (!response.ok) {
      return campusNews;
    }
    const payload = (await response.json()) as { items?: CampusNewsItem[] };
    return payload.items?.length ? payload.items : campusNews;
  } catch {
    return campusNews;
  }
}

export default async function Home() {
  const news = await getCampusNews();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "School",
    name: schoolProfile.name,
    description: `${schoolProfile.tagline} · Grade 1 to Grade 12`,
    foundingDate: schoolProfile.foundedDate,
    address: {
      "@type": "PostalAddress",
      streetAddress: schoolProfile.campus,
      addressLocality: "Monrovia",
      addressCountry: schoolProfile.country,
    },
    telephone: schoolProfile.contactNumber,
  };

  return (
    <>
      <section className="hero" id="about">
        <div className="container hero-grid">
          <div>
            <h2>
              Grow in <span>wisdom</span> & faith
            </h2>
            <p>
              Where academic excellence meets Catholic tradition. Grade 1 to Grade 12 in
              the heart of the community.
            </p>
            <div className="floating-badge" aria-label="School highlights">
              {heroStats.map((stat) => (
                <div className="badge-item" key={stat.label}>
                  <div className="number">{stat.value}</div>
                  <div>{stat.label}</div>
                </div>
              ))}
            </div>
            <div className="hero-actions">
              <Link className="btn-red" href="/admissions">
                Begin Admissions
              </Link>
              <Link className="text-link" href="/about">
                Learn more about Spiritan Academy
              </Link>
            </div>
          </div>
          <div className="hero-right" aria-hidden="true" />
        </div>
      </section>

      <section id="faith">
        <div className="container">
          <div className="faith-row">
            <div className="faith-icon" aria-hidden="true">
              <Church size={42} />
            </div>
            <div className="faith-text">
              <h3>Spiritan heritage · daily witness</h3>
              <p>
                We are a Catholic demonstration school rooted in the Spiritan mission to form
                hearts and minds through worship, service, and academic excellence.
              </p>
            </div>
            <div className="badge-red invert">since {schoolProfile.yearFounded} ✝︎</div>
          </div>
        </div>
      </section>

      <section id="academics" className="section-offwhite">
        <div className="container">
          <h2 className="section-title">Academics & formation</h2>
          <div className="card-grid">
            {academics.map((program) => {
              const Icon = iconMap[program.icon];
              return (
                <article className="academic-card" key={program.title}>
                  <Icon size={38} />
                  <h3>{program.title}</h3>
                  <p>{program.description}</p>
                </article>
              );
            })}
          </div>
          <div className="section-action-row">
            <Link href="/programs" className="text-link">
              Explore all programs →
            </Link>
          </div>
        </div>
      </section>

      <section id="admissions">
        <div className="container">
          <div className="admission-cta">
            <div>
              <h3>
                Open House: <span>All are welcome</span>
              </h3>
              <p>Experience our community. Next gathering: Nov 10th, 9:00 AM.</p>
            </div>
            <Link className="btn-large" href="/events">
              <CalendarCheck size={20} /> Reserve your spot
            </Link>
          </div>
          <AdmissionsForm />
        </div>
      </section>

      <section className="section-white" id="news">
        <div className="container">
          <h2 className="section-title">Campus news</h2>
          <div className="news-grid">
            {news.map((item) => {
              const Icon = iconMap[item.icon];
              return (
                <article className="news-item" key={item.id}>
                  <div className="demo-img" aria-hidden="true">
                    <Icon size={56} />
                  </div>
                  <div className="news-content">
                    <span className="news-date">
                      <CalendarDays size={14} /> {dateLabel(item.date)}
                    </span>
                    <h4>{item.title}</h4>
                    <p>{item.summary}</p>
                  </div>
                </article>
              );
            })}
          </div>
          <div className="section-action-row">
            <Link href="/news" className="text-link">
              View all news →
            </Link>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
}
