export async function GET() {
  return Response.json({
    success: true,
    message: "Subscribe API is working",
    subscribers: 129,
  });
}

export async function POST() {
  return Response.json({
    success: true,
    subscribers: 129,
  });
}
