import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  await prisma.project.create({
    data: {
      author: body.author,
      width: body.width,
      height: body.height,
      url: body.url,
    },
  });

  return NextResponse.json(
    {
      author: body.author,
      width: body.width,
      height: body.height,
      url: body.url,
    },
    {
      status: 200,
    }
  );
}

export async function GET(request: NextRequest) {
  const projects = await prisma.project.findMany();

  return NextResponse.json(projects, {
    status: 200,
  });
}
