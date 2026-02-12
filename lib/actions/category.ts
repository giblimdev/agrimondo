//@/lib/actions/category.ts
/*
affiche le nom du fichier en commentaire 

*/
"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { z } from "zod"; // optionnel

// Schéma de validation pour create/update
const CategorySchema = z.object({
  label: z.string().min(1),
  parentId: z.string().optional().nullable(),
});

export async function getAllCategories() {
  try {
    console.log("📦 Fetching all categories...");
    const categories = await prisma.categoriesPost.findMany({
      orderBy: { order: "asc" },
    });
    console.log(`✅ Found ${categories.length} categories`);
    return { success: true, data: categories };
  } catch (error) {
    console.error("❌ Error fetching categories:", error);
    return { success: false, error: "Failed to fetch categories" };
  }
}

export async function getCategoryById(id: string) {
  try {
    console.log(`📦 Fetching category with id: ${id}`);
    const category = await prisma.categoriesPost.findUnique({
      where: { id },
    });
    if (!category) {
      console.log(`❌ Category not found: ${id}`);
      return { success: false, error: "Category not found", status: 404 };
    }
    console.log(`✅ Category found: ${category.label}`);
    return { success: true, data: category };
  } catch (error) {
    console.error("❌ Error fetching category:", error);
    return { success: false, error: "Failed to fetch category" };
  }
}

export async function createCategory(data: {
  label: string;
  parentId?: string;
}) {
  try {
    console.log("📝 Creating category with data:", data);

    // Validation
    const validated = CategorySchema.parse(data);

    // Générer un order (max + 1)
    const lastCategory = await prisma.categoriesPost.findFirst({
      orderBy: { order: "desc" },
    });
    const order = (lastCategory?.order ?? 0) + 1;

    const category = await prisma.categoriesPost.create({
      data: {
        label: validated.label,
        parentId: validated.parentId || null,
        order,
      },
    });

    console.log(`✅ Category created: ${category.id} - ${category.label}`);
    revalidatePath("/blog"); // ou le chemin approprié
    return { success: true, data: category };
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error("❌ Validation error:", error.issues);
      return {
        success: false,
        error: "Invalid data",
        details: error.issues,
        status: 400,
      };
    }
    console.error("❌ Error creating category:", error);
    return { success: false, error: "Failed to create category" };
  }
}

export async function updateCategory(
  id: string,
  data: { label?: string; parentId?: string | null; order?: number },
) {
  try {
    console.log(`📝 Updating category ${id} with data:`, data);

    // Validation partielle
    const validated = CategorySchema.partial().parse(data);

    const category = await prisma.categoriesPost.update({
      where: { id },
      data: validated,
    });

    console.log(`✅ Category updated: ${category.id} - ${category.label}`);
    revalidatePath("/blog");
    return { success: true, data: category };
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error("❌ Validation error:", error.issues);
      return {
        success: false,
        error: "Invalid data",
        details: error.issues,
        status: 400,
      };
    }
    console.error("❌ Error updating category:", error);
    return { success: false, error: "Failed to update category" };
  }
}

export async function deleteCategory(id: string) {
  try {
    console.log(`🗑️ Deleting category with id: ${id}`);

    // Vérifier si la catégorie a des enfants ou des posts associés? Optionnel.
    await prisma.categoriesPost.delete({
      where: { id },
    });

    console.log(`✅ Category deleted: ${id}`);
    revalidatePath("/blog");
    return { success: true };
  } catch (error) {
    console.error("❌ Error deleting category:", error);
    return { success: false, error: "Failed to delete category" };
  }
}
