"use server";

import prisma from "@/lib/prisma";

// Exemple minimal à adapter à ton modèle "Response"
export async function createResponse(formData: FormData) {
  const postId = formData.get("postId") as string;
  const content = formData.get("content") as string;
  const userId = formData.get("userId") as string | null;

  if (!content || !postId) {
    throw new Error("postId et content sont requis");
  }

  await prisma.response.create({
    data: {
      postId,
      content,
      userId,
      order: 0, // ou calcul dynamique
    },
  });

  return { success: true };
}
