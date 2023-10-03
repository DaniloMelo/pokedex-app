import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pokedex App - About",
  description:
    "This is the page where you can see information about the pokedex app",
};

export default function AboutPage() {
  return (
    <main className="max-w-[1366px] mx-auto pt-[100px] p-6">
      <Link href={"/"}>Voltar</Link>
      <h1>About Page</h1>
    </main>
  );
}
