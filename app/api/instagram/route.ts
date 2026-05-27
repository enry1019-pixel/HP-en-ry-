import { NextResponse } from "next/server"

export const revalidate = 3600

export async function GET() {
  const feedId = process.env.BEHOLD_FEED_ID

  if (!feedId) {
    return NextResponse.json({ error: "Not configured" }, { status: 500 })
  }

  try {
    const res = await fetch(`https://feeds.behold.so/${feedId}`, {
      next: { revalidate: 3600 },
    })

    if (!res.ok) {
      return NextResponse.json({ error: "Behold API error" }, { status: 502 })
    }

    const data = await res.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error("Failed to fetch Behold feed:", error)
    return NextResponse.json({ error: "Failed to fetch" }, { status: 500 })
  }
}
