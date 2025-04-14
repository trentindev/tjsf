import { Component } from "../core/component";
import { createElement } from "../core/dom";
import { createState, getState, setState } from "../core/state";

// Composant dynamique avec affichage de l’état
const App = Component(() => {
  const { count } = getState(); // On lit la valeur de l’état

  return createElement(
    "div",
    { class: "app-container" },
    createElement("h1", {}, "Compteur dynamique"),
    createElement("p", {}, `Valeur actuelle : ${count}`),
    createElement(
      "button",
      {
        onClick: () => setState({ count: count + 1 }),
      },
      "Incrémenter"
    )
  );
});

// Fonction qui rend toute l’interface
function renderApp() {
  const root = document.getElementById("app");
  root.innerHTML = ""; // Réinitialise le contenu
  root.appendChild(App.render()); // Re-génère le composant avec le nouvel état
  // Pour monitorer les changements d’état
  console.log("Rendu de l’interface avec l’état actuel :", getState());
}

// Initialisation
document.addEventListener("DOMContentLoaded", () => {
  createState({ count: 0 }, renderApp); // Initialisation de l’état + fonction de rendu
  renderApp(); // Premier affichage
});
