import React, { useState } from "react";

const categories = [
  "Anschluss - Vorlagen",
  "Verbindungsmittel - Nachweise",
  "Querzug / Queranschluss",
  "Haupt-/Nebenträger - Vorlagen",
  "Sinas Kategeorie",
  "Schub und Zug"
];

const subcategoriesByCategory = {
  "Anschluss - Vorlagen": [
    { id: 0, title: "1a: Wand: L- und T-Verschraubung", image: "/bilder/kategorie1-unter1.png", link: "https://drive.google.com/file/d/1zJoAm0lAJGApdVlvHhR8clEtK0bCDqYo/view" },
    { id: 1, title: "1b: Detail", image: "https://via.placeholder.com/300x150.png", link: "#" },
    { id: 2, title: "1c: Detail", image: "https://via.placeholder.com/300x150.png", link: "#" },
    { id: 3, title: "1d: Detail", image: "https://via.placeholder.com/300x150.png", link: "#" },
    { id: 4, title: "1e: Detail", image: "https://via.placeholder.com/300x150.png", link: "#" },
    { id: 5, title: "1f: Detail", image: "https://via.placeholder.com/300x150.png", link: "#" },
  ],
  "Verbindungsmittel - Nachweise": [
    { id: 0, title: "2a: Nachweis A", image: "https://via.placeholder.com/300x150.png", link: "#" },
    { id: 1, title: "2b: Nachweis B", image: "https://via.placeholder.com/300x150.png", link: "#" },
    { id: 2, title: "2c: Nachweis C", image: "https://via.placeholder.com/300x150.png", link: "#" },
    { id: 3, title: "2d: Nachweis D", image: "https://via.placeholder.com/300x150.png", link: "#" },
    { id: 4, title: "2e: Nachweis E", image: "https://via.placeholder.com/300x150.png", link: "#" },
    { id: 5, title: "2f: Nachweis F", image: "https://via.placeholder.com/300x150.png", link: "#" },
  ],
  "Querzug / Queranschluss": [
    { id: 0, title: "3a: Queranschluss A", image: "https://via.placeholder.com/300x150.png", link: "#" },
    { id: 1, title: "3b: Queranschluss B", image: "https://via.placeholder.com/300x150.png", link: "#" },
    { id: 2, title: "3c: Queranschluss C", image: "https://via.placeholder.com/300x150.png", link: "#" },
    { id: 3, title: "3d: Queranschluss D", image: "https://via.placeholder.com/300x150.png", link: "#" },
    { id: 4, title: "3e: Queranschluss E", image: "https://via.placeholder.com/300x150.png", link: "#" },
    { id: 5, title: "3f: Queranschluss F", image: "https://via.placeholder.com/300x150.png", link: "#" },
  ],
  "Haupt-/Nebenträger - Vorlagen": [
    { id: 0, title: "4a: Träger A", image: "https://via.placeholder.com/300x150.png", link: "#" },
    { id: 1, title: "4b: Träger B", image: "https://via.placeholder.com/300x150.png", link: "#" },
    { id: 2, title: "4c: Träger C", image: "https://via.placeholder.com/300x150.png", link: "#" },
    { id: 3, title: "4d: Träger D", image: "https://via.placeholder.com/300x150.png", link: "#" },
    { id: 4, title: "4e: Träger E", image: "https://via.placeholder.com/300x150.png", link: "#" },
    { id: 5, title: "4f: Träger F", image: "https://via.placeholder.com/300x150.png", link: "#" },
  ],
  "Sinas Kategeorie": [
    { id: 0, title: "5a: Thema A", image: "https://via.placeholder.com/300x150.png", link: "#" },
    { id: 1, title: "5b: Thema B", image: "https://via.placeholder.com/300x150.png", link: "#" },
    { id: 2, title: "5c: Thema C", image: "https://via.placeholder.com/300x150.png", link: "#" },
    { id: 3, title: "5d: Thema D", image: "https://via.placeholder.com/300x150.png", link: "#" },
    { id: 4, title: "5e: Thema E", image: "https://via.placeholder.com/300x150.png", link: "#" },
    { id: 5, title: "5f: Thema F", image: "https://via.placeholder.com/300x150.png", link: "#" },
  ],
  "Schub und Zug": [
    { id: 0, title: "6a: Schub A", image: "https://via.placeholder.com/300x150.png", link: "#" },
    { id: 1, title: "6b: Schub B", image: "https://via.placeholder.com/300x150.png", link: "#" },
    { id: 2, title: "6c: Schub C", image: "https://via.placeholder.com/300x150.png", link: "#" },
    { id: 3, title: "6d: Schub D", image: "https://via.placeholder.com/300x150.png", link: "#" },
    { id: 4, title: "6e: Schub E", image: "https://via.placeholder.com/300x150.png", link: "#" },
    { id: 5, title: "6f: Schub F", image: "https://via.placeholder.com/300x150.png", link: "#" },
  ]
};

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
  const subcategories = subcategoriesByCategory[category] || [];

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
