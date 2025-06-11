import React, { useState } from "react";

const categories = [
  "Anschluss - Vorlagen",
  "Verbindungsmittel - Nachweise",
  "Querzug / Queranschluss",
  "Haupt-/Nebenträger - Vorlagen",
  "Sinas Kategeorie",
  "Kategorie 6"
];

const subcategories = Array.from({ length: 6 }, (_, i) => ({
  id: i,
  title: i === 0 ? "Wand: L- und T-Verschraubung" : `Details ${i + 1}`,
  image: i === 0 ? "/bilder/kategorie1-unter1.png" : "https://via.placeholder.com/300x150.png",
  link: i === 0
    ? "https://drive.google.com/file/d/1zJoAm0lAJGApdVlvHhR8clEtK0bCDqYo/view?usp=drive_link"
    : `https://example.com/dokument-${i + 1}`
}));

function Tile({ image, label, onClick }) {
  return (
    <div
      className="bg-[#14541f] text-white flex flex-col justify-center items-center h-56 cursor-pointer hover:opacity-90 transition border border-[#14541f]"
      onClick={onClick}
    >
      <img src={image} alt="Kachelbild" className="h-40 object-contain" />
      <div className="p-2 text-center font-semibold">{label}</div>
    </div>
  );
}

function HomePage({ navigate }) {
  return (
    <div className="bg-white min-h-screen p-8 pt-32">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((cat, i) => (
          <Tile
            key={i}
            image={i === 0 ? "/bilder/kategorie1.png" : "https://via.placeholder.com/300x150.png"}
            label={cat}
            onClick={() => navigate(cat)}
          />
        ))}
      </div>
    </div>
  );
}

function CategoryPage({ category, goBack }) {
  return (
    <div className="bg-white min-h-screen p-8 pt-32">
      <div className="max-w-6xl mx-auto">
        <button
          className="mb-6 px-4 py-2 bg-[#14541f] text-white hover:opacity-90"
          onClick={goBack}
        >
          Zurück zur Startseite
        </button>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {subcategories.map((sub) => (
            <a
              key={sub.id}
              href={sub.link}
              target="_blank"
              className="flex flex-col justify-center items-center bg-[#14541f] text-white text-center hover:opacity-90 transition border border-[#14541f] h-56"
            >
              <img
                src={sub.image}
                alt="Kachelbild"
                className="h-40 object-contain"
              />
              <div className="p-2 font-semibold">{sub.title}</div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function App() {
  const [activeCategory, setActiveCategory] = useState(null);
  return (
    <div className="relative">
      <div className="fixed top-4 left-4 z-50">
        <img src="/logo.png" alt="Logo" className="h-12 w-auto" />
      </div>
      {activeCategory ? (
        <CategoryPage category={activeCategory} goBack={() => setActiveCategory(null)} />
      ) : (
        <HomePage navigate={setActiveCategory} />
      )}
    </div>
  );
}

export default App;
