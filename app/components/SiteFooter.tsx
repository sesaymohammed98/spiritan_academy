import Image from "next/image";
import Link from "next/link";
import { schoolProfile } from "@/lib/site-data";

const schoolLogoPath = "/spiritan_logo.jpg";

export function SiteFooter() {
  return (
    <footer>
      <div className="container footer-grid">
        <div className="footer-logo">
          <div className="footer-logo-head">
            <Image src={schoolLogoPath} alt="Spiritan Academy logo" width={34} height={34} />
            <h3>
              Spiritan<span>Academy</span>
            </h3>
          </div>
          <p>{schoolProfile.tagline} · Grade 1 to Grade 12</p>
          <p>{schoolProfile.institution}</p>
          <p>{schoolProfile.authority}</p>
          <p>{schoolProfile.campus}</p>
          <p>{schoolProfile.cityCountry}</p>
        </div>
        <div>
          <h4>Quick links</h4>
          <ul>
            <li>
              <Link href="/events">Calendar</Link>
            </li>
            <li>
              <Link href="/verification">School portal</Link>
            </li>
            <li>
              <Link href="/contact">Support</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4>Faith & service</h4>
          <ul>
            <li>
              <Link href="/student-life">Mass schedule</Link>
            </li>
            <li>
              <Link href="/student-life">Campus ministry</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4>Connect</h4>
          <p>{schoolProfile.contactNumber}</p>
          <Link href="mailto:admissions@spiritanacademy.org">admissions@spiritanacademy.org</Link>
        </div>
      </div>
      <div className="container">
        <div className="footer-motto" role="note" aria-label="School motto">
          <span className="motto-glyph" aria-hidden="true">
            ✦
          </span>
          <span className="motto-label">Motto</span>
          <span className="motto-text">{schoolProfile.motto}</span>
          <span className="motto-glyph" aria-hidden="true">
            ✦
          </span>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} Spiritan Academy — rooted in the Spiritan tradition</p>
      </div>
    </footer>
  );
}
