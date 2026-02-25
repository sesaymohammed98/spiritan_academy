import type { Metadata } from "next";
import Link from "next/link";
import { AdmissionsForm } from "@/app/components/AdmissionsForm";

export const metadata: Metadata = {
  title: "Admissions | Spiritan Academy",
  description: "Admissions process, requirements, and inquiry form.",
};

export default function AdmissionsPage() {
  return (
    <section className="inner-page section-offwhite">
      <div className="container">
        <div className="page-hero">
          <h2>Admissions</h2>
          <p>Begin your Spiritan Academy journey with a clear and guided admissions process.</p>
        </div>

        <div className="timeline">
          <article className="timeline-item">
            <p className="item-kicker">Step 1</p>
            <h3>Submit Inquiry</h3>
            <p>Complete the form below and tell us your preferred grade level.</p>
          </article>
          <article className="timeline-item">
            <p className="item-kicker">Step 2</p>
            <h3>Campus Visit</h3>
            <p>Join an open house or schedule a family campus tour.</p>
          </article>
          <article className="timeline-item">
            <p className="item-kicker">Step 3</p>
            <h3>Enrollment Decision</h3>
            <p>Receive admissions feedback and onboarding support from our office.</p>
          </article>
        </div>

        <AdmissionsForm />

        <p className="section-note">
          Looking for upcoming intake dates? <Link href="/events">See events and activities</Link>.
        </p>
      </div>
    </section>
  );
}
