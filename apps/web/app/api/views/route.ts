export async function GET() {
  return new Response(
    JSON.stringify({ views: 1 }),
    {
      headers: { "Content-Type": "application/json" },
    }
  );
} 
