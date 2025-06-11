import React, { useState } from "react";

const categories = [
  "Anschluss - Vorlagen",
  "Verbindungsmittel - Nachweise",
  "Querzug / Queranschluss",
  "Haupt-/Nebenträger - Vorlagen",
  "Kategorie 5",
  "Kategorie 6"
];

const subcategoriesByCategory = {
  "Anschluss - Vorlagen": [
    { id: 0, title: "Wand: L- und T-Verschraubung", image: "/bilder/kategorie1-unter1.png", link: "https://drive.google.com/file/d/1zJoAm0lAJGApdVlvHhR8clEtK0bCDqYo/view" },
    { id: 1, title: "Stexon- Verbinder", image: "/bilder/kategorie2-unter1.png", link: "https://drive.google.com/file/d/16-Z-bDmACqJ2wNZxAVFWrfxORbt5IeBd/view?usp=drive_link" },
    { id: 2, title: "1c: Detail", image: "https://via.placeholder.com/300x150.png", link: "#" },
    { id: 3, title: "1d: Detail", image: "https://via.placeholder.com/300x150.png", link: "#" },
    { id: 4, title: "1e: Detail", image: "https://via.placeholder.com/300x150.png", link: "#" },
    { id: 5, title: "1f: Detail", image: "https://via.placeholder.com/300x150.png", link: "#" },
  ],
  "Verbindungsmittel - Nachweise": [
    { id: 0, title: "Verbindungsmittel auf Abscheren", image: "/bilder/kategorie1-unter2.png", link: "https://drive.google.com/file/d/1zHmCgwzXFmRXCmfA9bvc2gyNAPnGQF8N/view?usp=drive_link" },
    { id: 1, title: "2", image: "/bilder/kategorie2-unter2.png", link: "#" },
    { id: 2, title: "3", image: "https://via.placeholder.com/300x150.png", link: "#" },
    { id: 3, title: "4", image: "https://via.placeholder.com/300x150.png", link: "#" },
    { id: 4, title: "5", image: "https://via.placeholder.com/300x150.png", link: "#" },
    { id: 5, title: "6", image: "https://via.placeholder.com/300x150.png", link: "#" },
  ],
  "Querzug / Queranschluss": [
    { id: 0, title: "1", image: "https://via.placeholder.com/300x150.png", link: "#" },
    { id: 1, title: "2", image: "https://via.placeholder.com/300x150.png", link: "#" },
    { id: 2, title: "3", image: "https://via.placeholder.com/300x150.png", link: "#" },
    { id: 3, title: "4", image: "https://via.placeholder.com/300x150.png", link: "#" },
    { id: 4, title: "5", image: "https://via.placeholder.com/300x150.png", link: "#" },
    { id: 5, title: "6", image: "https://via.placeholder.com/300x150.png", link: "#" },
  ],
  "Haupt-/Nebenträger - Vorlagen": [
    { id: 0, title: "HVP-Pitzl Verbinder", image: "/bilder/kategorie1-unter4.png", link: "https://drive.google.com/file/d/1fnjHRbrAgpBL6WC7cNOZAlfh2mqk9P8P/view?usp=drive_link" },
    { id: 1, title: "Rothoblass lock floor", image: "/bilder/kategorie2-unter4.png", link: "https://drive.google.com/file/d/1jVNrxC-0ff0XAoX84QRZ5DB8EOTpdqd0/view?usp=drive_link" },
    { id: 2, title: "Schwalbenschwanz-Verbindung", image: "/bilder/kategorie3-unter4.png", link: "https://drive.google.com/file/d/1fjTFBHJXUm0uP_iKW2gcS_HY-8hJ0TQn/view?usp=drive_link" },
    { id: 3, title: "4d", image: "https://via.placeholder.com/300x150.png", link: "#" },
    { id: 4, title: "4e", image: "https://via.placeholder.com/300x150.png", link: "#" },
    { id: 5, title: "4f", image: "https://via.placeholder.com/300x150.png", link: "#" },
  ],
  "Kategorie 5": [
    { id: 0, title: "5a", image: "https://via.placeholder.com/300x150.png", link: "#" },
    { id: 1, title: "5b", image: "https://via.placeholder.com/300x150.png", link: "#" },
    { id: 2, title: "5c", image: "https://via.placeholder.com/300x150.png", link: "#" },
    { id: 3, title: "5d", image: "https://via.placeholder.com/300x150.png", link: "#" },
    { id: 4, title: "5e", image: "https://via.placeholder.com/300x150.png", link: "#" },
    { id: 5, title: "5f", image: "https://via.placeholder.com/300x150.png", link: "#" },
  ],
  "Kategorie 6": [
    { id: 0, title: "6a", image: "https://via.placeholder.com/300x150.png", link: "#" },
    { id: 1, title: "6b", image: "https://via.placeholder.com/300x150.png", link: "#" },
    { id: 2, title: "6c", image: "https://via.placeholder.com/300x150.png", link: "#" },
    { id: 3, title: "6d", image: "https://via.placeholder.com/300x150.png", link: "#" },
    { id: 4, title: "6e", image: "https://via.placeholder.com/300x150.png", link: "#" },
    { id: 5, title: "6f", image: "https://via.placeholder.com/300x150.png", link: "#" },
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
