import Navbar from "../components/Navbar";

export default function AboutPage() {
  return (
    <main className="p-6 space-y-6 min-h-screen">
      <Navbar />
      <AboutContent />
    </main>
  );
}

function AboutContent() {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow">
      <h1 className="text-xl  pixel-font text-black font-bold mb-4">About This Project</h1>

      <p className="mb-4 pixel-font text-black text-xs sm:text-sm">
        This website was created as a performance task for the Web Programming course. Its main goal
        is to demonstrate how to fetch and render API data using <span className="font-semibold">Next.js App Router</span> with Tailwind CSS.
      </p>

      <h2 className="text-xl pixel-font text-black font-semibold mt-6 mb-2">Pokémon Overview</h2>
      <p className="mb-4 pixel-font text-black text-xs sm:text-sm">
        Pokémon (short for Pocket Monsters) is a popular game franchise developed by Nintendo. It
        features fictional creatures that players can collect, train, and battle. Since its debut in
        1996, Pokémon has expanded into trading cards, animation, and media worldwide.
      </p>

      <h2 className="text-xl pixel-font text-black font-semibold  mt-6 mb-2">API Source</h2>
      <p className="mb-4  pixel-font text-black text-xs sm:text-sm">
        All Pokémon information displayed in this application comes from the open REST API:
        <br />
        <a
          href="https://pokeapi.co/"
          target="_blank"
          className="text-blue-600 underline hover:text-blue-800"
        >
          https://pokeapi.co/
        </a>
      </p>

      <h2 className="pixel-font text-xl text-black font-semibold mt-6 mb-2">Important Note</h2>
      <p className="mb-4 pixel-font text-black text-xs sm:text-sm">
        This website is intended solely for educational demonstration. No commercial usage is
        intended, and all Pokémon data & assets belong to their respective copyright owners.
      </p>

      <p className="pixel-font text-gray-500 text-xs sm:text-sm mt-6">
        © {new Date().getFullYear()} Web Programming — Demo Application
      </p>
    </div>
  );
}