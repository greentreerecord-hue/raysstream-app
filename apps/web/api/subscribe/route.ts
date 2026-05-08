import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const email = body.email

    if (!email) {
      return Response.json(
        { error: "Email required" },
        { status: 400 }
      )
    }

    const subscriber = await prisma.subscriber.create({
      data: {
        email,
      },
    })

    return Response.json({
      success: true,
      subscriber,
    })
  } catch (error) {
    return Response.json(
      { error: "Subscriber already exists" },
      { status: 400 }
    )
  }
} 