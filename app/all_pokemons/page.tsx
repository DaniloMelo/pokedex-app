import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pokedex App - All Pokemons",
  description: "This is the page where you can see all existing pokemons",
};

export default function AllPokemonsPage() {
  return (
    <main className="max-w-[1366px] mx-auto pt-[100px] p-6">
      <Link href={"/"}>Voltar</Link>
      <div>All Pokemons page</div>
    </main>
  );
}
