let views = 0;

export async function GET() {
  views += 1;

  return Response.json({ views });
} 
