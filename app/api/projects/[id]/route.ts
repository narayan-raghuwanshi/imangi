import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import { prisma } from "@/prisma/client";

interface Props {
  params: { id: number };
}

export async function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const project = await prisma.project.findUnique({
    where: {
      id: Number(params.id),
    },
  });
  if (!project)
    return NextResponse.json({ error: "Project not found" }, { status: 404 });

  return NextResponse.json(project);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const project = await prisma.project.findUnique({
    where: {
      id: Number(params.id),
    },
  });

  if (!project)
    return NextResponse.json({ error: "Project not found" }, { status: 404 });

  const updatedProject = await prisma.project.update({
    where: {
      id: project.id,
    },
    data: {
      author: body.author,
      width: body.width,
      height: body.height,
      url: body.url,
    },
  });

  return NextResponse.json(updatedProject);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const project = await prisma.project.findUnique({
    where: {
      id: Number(params.id),
    },
  });
  if (!project)
    return NextResponse.json({ error: "Project not found" }, { status: 404 });

  await prisma.project.delete({
    where: {
      id: project.id,
    },
  });
  return NextResponse.json({});
}
