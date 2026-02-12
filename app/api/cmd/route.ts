import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const cmds = await prisma.cmd.findMany({
      orderBy: { order: "asc" }, // tri par ordre croissant
    });
    return NextResponse.json(cmds, { status: 200 });
  } catch (error) {
    console.error("Error fetching CMDs:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // Validation basique côté serveur
    if (!data.label || !data.category || !data.content) {
      return NextResponse.json(
        { error: "label, category et content sont requis." },
        { status: 400 },
      );
    }

    const cmd = await prisma.cmd.create({
      data: {
        label: data.label,
        category: data.category,
        content: data.content,
        note: data.note || null,
        order: data.order || 0, // si tu veux gérer l'ordre
      },
    });

    return NextResponse.json(cmd, { status: 201 });
  } catch (error) {
    console.error("Error creating CMD:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
