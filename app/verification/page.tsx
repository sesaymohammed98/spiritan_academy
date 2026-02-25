import type { Metadata } from "next";
import { VerificationLookup } from "@/app/components/VerificationLookup";

export const metadata: Metadata = {
  title: "Verification | Spiritan Academy",
  description: "Verify student records and school-issued credentials.",
};

export default function VerificationPage() {
  return (
    <section className="inner-page">
      <div className="container">
        <div className="page-hero">
          <h2>Verification</h2>
          <p>
            Confirm the authenticity of records and credentials issued by Spiritan Academy.
          </p>
        </div>
        <VerificationLookup />
      </div>
    </section>
  );
}
