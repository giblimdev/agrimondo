// UserMenu.tsx
"use client";

import * as Avatar from "@radix-ui/react-avatar";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { signOut, useSession } from "@/lib/auth/auth-client";
import {
  User,
  Settings,
  LogOut,
  Bell,
  HelpCircle,
  LogIn,
} from "lucide-react";
import Link from "next/link";

export default function UserMenu() {
  const { data: sessionData } = useSession();
  const user = sessionData?.user;

  // Si l'utilisateur n'est pas connecté
  if (!user) {
    return (
      <Link
        href="/auth/signin"
        className="inline-flex items-center rounded-md border border-input bg-background px-3 py-1.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
      >
        <LogIn className="mr-2 h-4 w-4" />
        Connexion
      </Link>
    );
  }

  // Si l'utilisateur est connecté
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          type="button"
          className="flex items-center gap-2 rounded-full border border-input bg-background px-2 py-1 text-sm hover:bg-accent hover:text-accent-foreground"
        >
          <Avatar.Root className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white">
            <Avatar.Fallback>
              {user.name?.[0]?.toUpperCase() || "U"}
            </Avatar.Fallback>
          </Avatar.Root>
          <span className="hidden sm:inline-block max-w-[120px] truncate">
            {user.name}
          </span>
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          side="bottom"
          align="end"
          className="z-50 min-w-[220px] rounded-md border bg-popover p-1 text-sm shadow-md"
        >
          {/* Header utilisateur */}
          <div className="flex items-center gap-3 px-2 py-2">
            <Avatar.Root className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white">
              <Avatar.Fallback>
                {user.name?.[0]?.toUpperCase() || "U"}
              </Avatar.Fallback>
            </Avatar.Root>
            <div className="flex flex-col">
              <span className="font-medium">{user.name}</span>
              <span className="text-xs text-muted-foreground">
                {user.email}
              </span>
            </div>
          </div>

          <DropdownMenu.Separator className="my-1 h-px bg-border" />

          {/* Menu Items */}
          <DropdownMenu.Item asChild>
            <Link
              href="/user/profile"
              className="flex cursor-pointer items-center gap-2 rounded-sm px-2 py-1.5 hover:bg-accent hover:text-accent-foreground"
            >
              <User className="h-4 w-4" />
              <span>Profil</span>
            </Link>
          </DropdownMenu.Item>

          <DropdownMenu.Item asChild>
            <Link
              href="/settings"
              className="flex cursor-pointer items-center gap-2 rounded-sm px-2 py-1.5 hover:bg-accent hover:text-accent-foreground"
            >
              <Settings className="h-4 w-4" />
              <span>Paramètres</span>
            </Link>
          </DropdownMenu.Item>

          <DropdownMenu.Item asChild>
            <Link
              href="/notifications"
              className="flex cursor-pointer items-center gap-2 rounded-sm px-2 py-1.5 hover:bg-accent hover:text-accent-foreground"
            >
              <Bell className="h-4 w-4" />
              <span>Notifications</span>
            </Link>
          </DropdownMenu.Item>

          <DropdownMenu.Item asChild>
            <Link
              href="/help"
              className="flex cursor-pointer items-center gap-2 rounded-sm px-2 py-1.5 hover:bg-accent hover:text-accent-foreground"
            >
              <HelpCircle className="h-4 w-4" />
              <span>Aide &amp; Support</span>
            </Link>
          </DropdownMenu.Item>

          <DropdownMenu.Separator className="my-1 h-px bg-border" />

          <DropdownMenu.Item
            onSelect={(e) => {
              e.preventDefault();
              signOut();
            }}
            className="flex cursor-pointer items-center gap-2 rounded-sm px-2 py-1.5 text-red-600 hover:bg-red-50 dark:hover:bg-red-950"
          >
            <LogOut className="h-4 w-4" />
            <span>Déconnexion</span>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
