import { NextResponse } from "next/server";

type AdmissionPayload = {
  fullName?: string;
  email?: string;
  gradeLevel?: string;
  message?: string;
};

const validEmail = (value: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

export async function POST(request: Request) {
  const body = (await request.json()) as AdmissionPayload;

  const fullName = body.fullName?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const gradeLevel = body.gradeLevel?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!fullName || !email || !gradeLevel || !message) {
    return NextResponse.json(
      { error: "All fields are required." },
      { status: 400 },
    );
  }

  if (!validEmail(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 },
    );
  }

  return NextResponse.json(
    {
      success: true,
      message:
        "Thank you for your interest. Admissions will contact you within 2 business days.",
    },
    { status: 201 },
  );
}
