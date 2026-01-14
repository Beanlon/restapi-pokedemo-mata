"use client";
import { useState } from "react";

export default function PokemonCard({ pokemon }) {
  const [showStats, setShowStats] = useState(false);

  return (
    <div className="border rounded-xl shadow p-4 bg-white">
      <img src={pokemon.sprites.front_default} className="h-24 mx-auto" />
      
      <h3 className="text-lg text-black font-semibold text-center capitalize">
        {pokemon.name}
      </h3>
      
      <p className="text-center text-black text-sm">
        Type: {pokemon.types.map(t => t.type.name).join(", ")}
      </p>

      <button
        onClick={() => setShowStats(!showStats)}
        className="mt-2 px-3 py-1 bg-blue-600 rounded-md text-white rounded w-full transition-all duration-200 hover:bg-blue-700"
      >
        {showStats ? "Hide Stats" : "Show Stats"}
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          showStats ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="text-sm text-black">
          {pokemon.stats.map((s) => (
            <li key={s.stat.name}>
              {s.stat.name}: {s.base_stat}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}