"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="pixel-panel bg-red-600 text-white flex justify-between items-center p-4">
      <h1 className="pixel-heading text-base sm:text-lg">Pokémon Dashboard</h1>
      <div className="flex gap-3 text-sm sm:text-base">
        <Link href="/" className="pixel-badge hover:brightness-110 transition">Home</Link>
        <Link href="/about" className="pixel-badge hover:brightness-110 transition">About</Link>
      </div>
    </nav>
  );
}