"use client";

import { FormEvent, useState } from "react";

type VerificationResponse = {
  record?: {
    id: string;
    studentName: string;
    credential: string;
    graduationYear: string;
    status: "Verified" | "Pending";
  };
  error?: string;
};

export function VerificationLookup() {
  const [verificationId, setVerificationId] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<VerificationResponse | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setResult(null);

    try {
      const response = await fetch(`/api/verification?id=${encodeURIComponent(verificationId)}`);
      const payload = (await response.json()) as VerificationResponse;
      setResult(payload);
    } catch {
      setResult({ error: "Unable to verify at the moment. Please try again." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="verification-shell">
      <form className="verification-form" onSubmit={handleSubmit}>
        <label htmlFor="verification-id">Verification ID</label>
        <div className="verification-row">
          <input
            id="verification-id"
            required
            placeholder="e.g. SA-2026-0004"
            value={verificationId}
            onChange={(event) => setVerificationId(event.target.value)}
          />
          <button className="btn-large" type="submit" disabled={loading}>
            {loading ? "Checking..." : "Verify"}
          </button>
        </div>
      </form>

      {result?.record ? (
        <article className="verification-result success">
          <h3>Credential Found</h3>
          <p>
            <strong>Student:</strong> {result.record.studentName}
          </p>
          <p>
            <strong>Credential:</strong> {result.record.credential}
          </p>
          <p>
            <strong>Year:</strong> {result.record.graduationYear}
          </p>
          <p>
            <strong>Status:</strong> {result.record.status}
          </p>
        </article>
      ) : null}

      {result?.error ? (
        <article className="verification-result error">
          <h3>Verification Error</h3>
          <p>{result.error}</p>
        </article>
      ) : null}
    </div>
  );
}
