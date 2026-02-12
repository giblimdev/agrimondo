"use client";

import { createResponse } from "@/lib/actions/response";
import { useRef, useState, useTransition } from "react";
import { useRouter } from "next/navigation";

export default function FormResponse({
  postId,
  userId,
  parentId = null,
  placeholder = "Écrire une réponse...",
  maxLength = 1000,
}: {
  postId: string;
  userId?: string;
  parentId?: string | null;
  placeholder?: string;
  maxLength?: number;
}) {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const router = useRouter();

  async function handleSubmit(formData: FormData) {
    // Validation côté client
    const content = formData.get("content") as string;
    if (!content || content.trim().length === 0) {
      setError("Le message ne peut pas être vide.");
      return;
    }
    if (content.length > maxLength) {
      setError(`Le message ne doit pas dépasser ${maxLength} caractères.`);
      return;
    }

    setError(null);
    setSuccess(false);

    startTransition(async () => {
      try {
        const result = await createResponse(formData);

        // Si votre Server Action retourne un objet avec `success` et éventuellement `error`
        if (result && !result.success) {
          setError("Une erreur est survenue.");
        } else {
          setSuccess(true);
          formRef.current?.reset();
          // Rafraîchir les données pour afficher la nouvelle réponse
          router.refresh();
          // Optionnel : remettre le focus sur le textarea
          textareaRef.current?.focus();
        }
      } catch (err) {
        setError("Erreur réseau ou serveur. Veuillez réessayer.");
        console.error(err);
      }
    });
  }

  // Gestion du compteur de caractères
  const [charCount, setCharCount] = useState(0);
  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCharCount(e.target.value.length);
  };

  return (
    <form
      ref={formRef}
      action={handleSubmit}
      className="space-y-3"
      aria-label="Formulaire de réponse"
    >
      <div className="relative">
        <textarea
          ref={textareaRef}
          name="content"
          placeholder={placeholder}
          className="w-full border rounded-lg p-3 pr-16 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 transition resize-vertical min-h-25"
          required
          disabled={isPending}
          maxLength={maxLength}
          onChange={handleTextChange}
          aria-label="Votre message"
        />
        <span className="absolute bottom-2 right-3 text-xs text-gray-500">
          {charCount}/{maxLength}
        </span>
      </div>

      {/* Champs cachés */}
      <input type="hidden" name="postId" value={postId} />
      {userId && <input type="hidden" name="userId" value={userId} />}
      {parentId && <input type="hidden" name="parentId" value={parentId} />}

      {/* Messages de feedback */}
      {error && (
        <div className="text-sm text-red-600 bg-red-50 p-2 rounded-md">
          ⚠️ {error}
        </div>
      )}
      {success && (
        <div className="text-sm text-green-600 bg-green-50 p-2 rounded-md">
          ✓ Réponse envoyée !
        </div>
      )}

      {/* Bouton d'envoi */}
      <button
        type="submit"
        disabled={isPending}
        className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isPending ? (
          <>
            <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
            Envoi...
          </>
        ) : (
          "Envoyer"
        )}
      </button>
    </form>
  );
}
