import { NextRequest, NextResponse } from "next/server";
import { getPosts } from "@/lib/actions/posts";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const page = Number(searchParams.get("page")) || 1;
  const limit = Number(searchParams.get("limit")) || 10;
  const status = searchParams.get("status") as any;
  const categoryId = searchParams.get("categoryId") || undefined;
  const tagId = searchParams.get("tagId") || undefined;
  const search = searchParams.get("search") || undefined;
  const isFeatured = searchParams.has("isFeatured")
    ? searchParams.get("isFeatured") === "true"
    : undefined;
  const isSponsored = searchParams.has("isSponsored")
    ? searchParams.get("isSponsored") === "true"
    : undefined;

  const result = await getPosts({
    page,
    limit,
    status,
    categoryId,
    tagId,
    search,
    isFeatured,
    isSponsored,
  });
  return NextResponse.json(result);
}
