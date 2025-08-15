import React from "react";
import Menu from "./components/Menu.jsx";
import "./App.css";

const meny = [
  {
    id: 1,
    tittel: "Spaghetti Bolognese",
    pris: "159 kr",
    ingredienser: "Spaghetti, kjøttsaus, parmesan",
    kategori: "Hovedrett",
    bilde: "/bilder/spaghetti.jpg"
  },
  {
    id: 2,
    tittel: "Kremet Kyllingsuppe",
    pris: "129 kr",
    ingredienser: "Kylling, fløte, gulrøtter, selleri",
    kategori: "Forrett",
    bilde: "/bilder/chickensoup.webp"
  },
  {
    id: 3,
    tittel: "Margarita Pizza",
    pris: "169 kr",
    ingredienser: "Tomatsaus, mozzarella, basilikum",
    kategori: "Hovedrett",
    bilde: "/bilder/pizza.webp"
  },
  {
    id: 4,
    tittel: "Sushi Mix",
    pris: "229 kr",
    ingredienser: "Laks, tunfisk, reker, ris",
    kategori: "Hovedrett",
    bilde: "/bilder/sushi.jpg"
  },
  {
    id: 5,
    tittel: "Cæsarsalat",
    pris: "139 kr",
    ingredienser: "Romanosalat, kylling, parmesan, dressing",
    kategori: "Forrett",
    bilde: "/bilder/cesarsalad.jpg"
  },
  {
    id: 6,
    tittel: "Brownie med Is",
    pris: "89 kr",
    ingredienser: "Brownie, vaniljeis, sjokoladesaus",
    kategori: "Dessert",
    bilde: "/bilder/brownie.jpg"
  },
  {
    id: 7,
    tittel: "Taco Tallerken",
    pris: "199 kr",
    ingredienser: "Kjøttdeig, mais, ost, guacamole",
    kategori: "Hovedrett",
    bilde: "/bilder/taco.jpg"
  },
  {
    id: 8,
    tittel: "Pannekaker med Syltetøy",
    pris: "99 kr",
    ingredienser: "Pannekaker, jordbærsyltetøy, sukker",
    kategori: "Dessert",
    bilde: "/bilder/pancakes.jpg"
  },
  {
    id: 9,
    tittel: "Reker med Sitron",
    pris: "149 kr",
    ingredienser: "Reker, sitron, dill, brød",
    kategori: "Forrett",
    bilde: "/bilder/shrimp.avif"
  },
  {
    id: 10,
    tittel: "Entrecôte med Grønnsaker",
    pris: "289 kr",
    ingredienser: "Entrecôte, grønnsaker, poteter, peppersaus",
    kategori: "Hovedrett",
    bilde: "/bilder/entrecote.jpg"
  },
];

function App() {
  const kategorier = ["Forrett", "Hovedrett", "Dessert"];

  return (
    <div className="App">
      <h1>🗡️ Sverd og Skje 🥄</h1>
      <p className="undertittel">
        Smak som en helt, spis som en kriger
      </p>
      {kategorier.map((kategori) => (
        <section key={kategori}>
          <h2>{kategori}</h2>
          <Menu dishes={meny.filter((dish) => dish.kategori === kategori)} />
        </section>
      ))}
    </div>
  );
}

export default App;
