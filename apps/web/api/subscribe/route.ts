import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const subscription = await prisma.subscriber.create({
      data: {
        channelId: body.channelId,
        userId: body.userId,
      },
    });

    return NextResponse.json({
      success: true,
      subscription,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
      },
      { status: 500 }
    );
  }
}