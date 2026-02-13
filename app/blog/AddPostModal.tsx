// /app/blog/AddPostModal.tsx
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FormPost } from "./FormPost";
import PostPreview from "./PostPreview";
import { createPost, updatePost } from "@/lib/actions/posts";

// Types pour l'état du formulaire
export type PostFormData = {
  id?: string;
  title: string;
  slug: string;
  description: string;
  img: string;
  order: number;
  status: "DRAFT" | "PUBLISHED";
  isSponsored: boolean;
  isFeatured: boolean;
  metaTitle: string;
  metaDescription: string;
  canonicalUrl: string;
  contents: {
    order?: number;
    content: string;
    format: "MARKDOWN" | "HTML" | "JSON" | "TEXT";
    medias?: { caption?: string; type: string; url: string }[];
  }[];
  categoryIds: string[];
  tagIds: string[];
};

const defaultFormData: PostFormData = {
  title: "",
  slug: "",
  description: "",
  img: "",
  order: 0,
  status: "DRAFT",
  isSponsored: false,
  isFeatured: false,
  metaTitle: "",
  metaDescription: "",
  canonicalUrl: "",
  contents: [{ content: "", format: "MARKDOWN" }],
  categoryIds: [],
  tagIds: [],
};

// Génération de slug
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

interface AddPostModalProps {
  userId: string;
  initialData?: PostFormData; // 👈 changement ici
  onSuccess?: () => void;
  defaultOpen?: boolean; // Ouvre la modale automatiquement au montage
  hideButton?: boolean; // Cache le bouton d'ouverture
}

export default function AddPostModal({
  userId,
  initialData,
  onSuccess,
  defaultOpen = false,
  hideButton = false,
}: AddPostModalProps) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  // ------------------------------------------------------------
  // État du formulaire (contrôlé)
  // ------------------------------------------------------------
  const [formData, setFormData] = useState<PostFormData>(() => {
    if (initialData) {
      return initialData; // directement, car c'est déjà au bon format
    }
    return defaultFormData;
  });

  // Slug automatique
  const [slugManuallyEdited, setSlugManuallyEdited] = useState(
    !!initialData?.slug,
  );

  useEffect(() => {
    if (!slugManuallyEdited && formData.title.trim()) {
      setFormData((prev) => ({ ...prev, slug: generateSlug(prev.title) }));
    }
  }, [formData.title, slugManuallyEdited]);

  // ------------------------------------------------------------
  // Upload d'image → Base64
  // ------------------------------------------------------------
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result as string;
      setFormData((prev) => ({ ...prev, img: base64 }));
    };
    reader.readAsDataURL(file);
  };

  // ------------------------------------------------------------
  // Soumission
  // ------------------------------------------------------------
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    const form = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (key === "contents" || key === "categoryIds" || key === "tagIds") {
        form.append(key, JSON.stringify(value));
      } else if (typeof value === "boolean") {
        form.append(key, value ? "true" : "false");
      } else if (value !== undefined && value !== null) {
        form.append(key, String(value));
      }
    });
    form.append("userId", userId);

    try {
      let result;
      if (initialData?.id) {
        result = await updatePost(form);
      } else {
        result = await createPost(form);
      }

      if (result.success) {
        setSuccess(true);
        onSuccess?.();
        router.refresh();

        if (!initialData) {
          // Réinitialisation
          setFormData(defaultFormData);
          setSlugManuallyEdited(false);
        }

        setTimeout(() => setSuccess(false), 3000);
      } else {
        setError(result.error ?? "Erreur lors de l’enregistrement");
      }
    } catch (err) {
      setError("Une erreur réseau est survenue");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // ------------------------------------------------------------
  // Empêcher le scroll quand la modale est ouverte
  // ------------------------------------------------------------
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Bouton d'ouverture (caché si demandé) */}
      {!hideButton && (
        <button
          id="add-post-button"
          onClick={() => setIsOpen(true)}
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-medium transition shadow-sm hover:shadow-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
          {initialData ? "Modifier l'article" : "Ajouter un article"}
        </button>
      )}

      {/* Modale */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm transition-all"
          onClick={handleClose}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-7xl max-h-[95vh] overflow-hidden animate-in fade-in zoom-in duration-300 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* En-tête */}
            <div className="flex justify-between items-center px-6 py-4 border-b bg-gray-50">
              <h3 className="text-xl font-semibold text-gray-800">
                ✍️ {initialData ? "Modifier l'article" : "Nouvel article"}
              </h3>
              <button
                onClick={handleClose}
                className="text-gray-400 hover:text-gray-600 transition rounded-full p-1 hover:bg-gray-200"
                aria-label="Fermer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Corps – 2 colonnes sur grand écran */}
            <div className="flex flex-1 overflow-hidden">
              {/* Colonne gauche : formulaire */}
              <div className="w-full lg:w-1/2 overflow-y-auto p-6 bg-white">
                <FormPost
                  formData={formData}
                  setFormData={setFormData}
                  slugManuallyEdited={slugManuallyEdited}
                  setSlugManuallyEdited={setSlugManuallyEdited}
                  onImageUpload={handleImageUpload}
                  onSubmit={handleSubmit}
                  loading={loading}
                  error={error}
                  success={success}
                  userId={userId}
                />
              </div>

              {/* Colonne droite : prévisualisation (visible sur lg) */}
              <div className="hidden lg:block lg:w-1/2 bg-gray-50 overflow-y-auto p-6 border-l">
                <PostPreview formData={formData} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
