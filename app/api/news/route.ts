import { NextResponse } from "next/server";
import { campusNews } from "@/lib/site-data";

export async function GET() {
  return NextResponse.json({
    items: campusNews,
    updatedAt: new Date().toISOString(),
  });
}
