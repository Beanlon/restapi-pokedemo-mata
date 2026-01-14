"use client";

import Link from "next/link";

export default function Nav() {
  return (
    <nav className="w-full pixel-panel bg-red-600 text-white py-3 px-6 flex gap-3 items-center">
      <Link href="/" className="pixel-badge hover:brightness-110 transition">Home</Link>
      <Link href="/about" className="pixel-badge hover:brightness-110 transition">About</Link>
    </nav>
  );
}