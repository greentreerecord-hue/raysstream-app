import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const channelId = body.channelId

    if (!channelId) {
      return NextResponse.json(
        { error: "Missing channelId" },
        { status: 400 }
      )
    }

    const sub = await prisma.subscription.create({
      data: {
        channelId,
      },
    })

    return NextResponse.json({
      success: true,
      sub,
    })
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    )
  }
} 