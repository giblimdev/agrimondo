"use server";

import prisma from "@/lib/prisma";

export async function getAllTags() {
  return prisma.tagBlog.findMany({
    orderBy: { order: "asc" },
  });
}

export async function createTag(data: { name: string }) {
  const count = await prisma.tagBlog.count();
  return prisma.tagBlog.create({
    data: {
      name: data.name,
      order: count + 1,
    },
  });
}
