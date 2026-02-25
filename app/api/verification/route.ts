import { NextResponse } from "next/server";
import { verificationRecords } from "@/lib/site-data";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id")?.trim().toUpperCase();

  if (!id) {
    return NextResponse.json(
      { error: "Please provide a verification ID." },
      { status: 400 },
    );
  }

  const record = verificationRecords.find((item) => item.id.toUpperCase() === id);

  if (!record) {
    return NextResponse.json(
      { error: "No record found for the supplied verification ID." },
      { status: 404 },
    );
  }

  return NextResponse.json({ record });
}
