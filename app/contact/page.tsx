import type { Metadata } from "next";
import { AdmissionsForm } from "@/app/components/AdmissionsForm";
import { schoolProfile } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact | Spiritan Academy",
  description: "Contact Spiritan Academy admissions and administration.",
};

export default function ContactPage() {
  return (
    <section className="inner-page">
      <div className="container">
        <div className="page-hero">
          <h2>Contact</h2>
          <p>We are ready to help with admissions, program details, and partnership inquiries.</p>
        </div>

        <div className="two-col">
          <article className="feature-card">
            <h3>School Office</h3>
            <p>{schoolProfile.name}</p>
            <p>{schoolProfile.tagline}</p>
            <p>{schoolProfile.institution}</p>
            <p>{schoolProfile.authority}</p>
            <p>{schoolProfile.campus}</p>
            <p>{schoolProfile.cityCountry}</p>
            <p>{schoolProfile.contactNumber}</p>
            <p>admissions@spiritanacademy.org</p>
            <p>Mon - Fri · 8:00 AM to 4:30 PM</p>
          </article>
          <article className="feature-card">
            <h3>Quick Support Channels</h3>
            <p>Year founded: {schoolProfile.foundedDate}</p>
            <p>Max students per class: {schoolProfile.maxStudentsPerClass}</p>
            <p>Motto: {schoolProfile.motto}</p>
            <p>Admissions: admissions@spiritanacademy.org</p>
            <p>Academics: academics@spiritanacademy.org</p>
            <p>Campus Ministry: ministry@spiritanacademy.org</p>
          </article>
        </div>

        <AdmissionsForm />
      </div>
    </section>
  );
}
