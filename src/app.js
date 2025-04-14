import { createElement } from "../core/dom";
import { initRouter } from "../core/router";

// Composants de vue
function Home() {
  return createElement(
    "div",
    {},
    createElement("h2", {}, "Accueil"),
    createElement("p", {}, "Bienvenue sur la page d’accueil.")
  );
}

function About() {
  return createElement(
    "div",
    {},
    createElement("h2", {}, "À propos"),
    createElement("p", {}, "Ceci est une page à propos.")
  );
}

// Composant App avec liens de navigation
function App() {
  return createElement(
    "div",
    { class: "app-container" },
    createElement(
      "nav",
      {},
      createElement("a", { href: "#/" }, "Accueil"),
      " | ",
      createElement("a", { href: "#/about" }, "À propos")
    ),
    createElement("main", { id: "view" }) // Vue dynamique ici
  );
}

// Initialisation
document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("app");
  root.appendChild(App()); // Affiche la structure de base

  // Montre la bonne vue dans <main id="view">
  const view = document.getElementById("view");
  initRouter(
    {
      "/": Home,
      "/about": About,
    },
    view
  );
});
