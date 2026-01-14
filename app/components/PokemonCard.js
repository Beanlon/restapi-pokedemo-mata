"use client";
import { useState } from "react";

export default function PokemonCard({ pokemon }) {
  const [showStats, setShowStats] = useState(false);
  const getTypeColor = (type) => {
    switch (type) {
      case "fire":
        return "!bg-orange-500";  
      case "water":
        return "!bg-blue-400"; 
      case "grass":
        return "!bg-lime-400";  
      case "flying":
        return "!bg-sky-200";  
      case "bug":
        return "!bg-lime-500";  
      case "poison":
        return "!bg-purple-500";
      default:
        return "bg-gray-300";
    }
  }

  return (
    <div className="pixel-panel text-black flex flex-col gap-3 items-center p-4">
      <img src={pokemon.sprites.front_default} className="h-24 w-24 pixelated" alt={`${pokemon.name} sprite`} />

      <h3 className="pixel-heading text-sm text-center">
        {pokemon.name}
      </h3>

      <div className="flex flex-wrap justify-center gap-2">
        {pokemon.types.map((t) => (
          <span key={t.type.name} className={`pixel-badge capitalize ${getTypeColor(t.type.name)}`}>
            {t.type.name}
          </span>
        ))}
      </div>

      <button
        onClick={() => setShowStats(!showStats)}
        className="pixel-button pixel-font text-xs sm:text-sm"
      >
        {showStats ? "Hide Stats" : "Show Stats"}
      </button>

      <div
        className={`w-full overflow-hidden transition-all duration-300 ease-in-out ${
          showStats ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="pixel-font text-xs sm:text-sm text-black space-y-1 font-mono">
          {pokemon.stats.map((s) => (
            <li key={s.stat.name} className="flex justify-between">
              <span className="capitalize">{s.stat.name}</span>
              <span>{s.base_stat}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}