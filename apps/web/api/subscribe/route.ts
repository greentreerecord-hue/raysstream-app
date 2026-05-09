import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const channel = body.channel || "Unknown"

    const existing = await prisma.subscription.findFirst({
      where: {
        channel
      }
    })

    if (existing) {
      return NextResponse.json({
        success: true,
        subscribed: true,
        total: await prisma.subscription.count()
      })
    }

    await prisma.subscription.create({
      data: {
        channel
      }
    })

    const total = await prisma.subscription.count()

    return NextResponse.json({
      success: true,
      subscribed: true,
      total
    })
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      {
        success: false
      },
      { status: 500 }
    )
  }
}