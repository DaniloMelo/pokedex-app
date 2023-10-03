import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pokedex App - Settings",
  description: "This is the Pokedex app settings page",
};

export default function SettingsPage() {
  return (
    <main className="max-w-[1366px] mx-auto pt-[100px] p-6">
      <Link href={"/"}>Voltar</Link>
      <div>Settings page</div>
    </main>
  );
}
