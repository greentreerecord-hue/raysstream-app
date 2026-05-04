let views: Record<string, number> = {}

export async function POST(req: Request) {
  const { id } = await req.json()

  if (!views[id]) views[id] = 0

  views[id] += 1

  return Response.json({ views: views[id] })
}

export async function GET(req: Request) {
  const url = new URL(req.url)
  const id = url.searchParams.get("id") || "test"

  return Response.json({
    views: views[id] || 0,
  })
}
