"use client";

import { FormEvent, useState } from "react";

type FormState = {
  fullName: string;
  email: string;
  gradeLevel: string;
  message: string;
};

const initialState: FormState = {
  fullName: "",
  email: "",
  gradeLevel: "",
  message: "",
};

export function AdmissionsForm() {
  const [formState, setFormState] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setFeedback("");

    try {
      const response = await fetch("/api/admissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      const result = (await response.json()) as { success?: boolean; message?: string; error?: string };

      if (!response.ok) {
        setStatus("error");
        setFeedback(result.error ?? "Unable to submit form.");
        return;
      }

      setStatus("success");
      setFeedback(result.message ?? "Submission received.");
      setFormState(initialState);
    } catch {
      setStatus("error");
      setFeedback("Network error. Please try again shortly.");
    }
  };

  return (
    <form className="admissions-form" onSubmit={handleSubmit}>
      <h3>Request Admissions Information</h3>
      <div className="form-grid">
        <label>
          Full Name
          <input
            required
            value={formState.fullName}
            onChange={(event) =>
              setFormState((prev) => ({ ...prev, fullName: event.target.value }))
            }
            placeholder="Parent or Guardian Name"
          />
        </label>
        <label>
          Email Address
          <input
            required
            type="email"
            value={formState.email}
            onChange={(event) =>
              setFormState((prev) => ({ ...prev, email: event.target.value }))
            }
            placeholder="name@email.com"
          />
        </label>
        <label>
          Interested Grade
          <input
            required
            value={formState.gradeLevel}
            onChange={(event) =>
              setFormState((prev) => ({ ...prev, gradeLevel: event.target.value }))
            }
            placeholder="e.g. Grade 6"
          />
        </label>
      </div>
      <label>
        Message
        <textarea
          required
          rows={4}
          value={formState.message}
          onChange={(event) =>
            setFormState((prev) => ({ ...prev, message: event.target.value }))
          }
          placeholder="Tell us a little about your family and admissions timeline."
        />
      </label>
      <button className="btn-large" disabled={status === "submitting"} type="submit">
        {status === "submitting" ? "Submitting..." : "Submit inquiry"}
      </button>
      {feedback ? (
        <p className={status === "success" ? "form-success" : "form-error"}>{feedback}</p>
      ) : null}
    </form>
  );
}
