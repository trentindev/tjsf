import { Component } from "../core/component";
import { createElement } from "../core/dom";

function Button() {
  return createElement(
    "button",
    {
      onClick: () => alert("Clique détecté !"),
    },
    "Cliquez ici"
  );
}

// Composant principal défini avec Component()
// Sa méthode render retourne la structure DOM
const App = Component(() => {
  return createElement(
    "div",
    { class: "app-container" },
    createElement("h1", {}, "Bienvenue"),
    createElement("p", {}, "Ceci est notre composant App.")
  );
});

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("app");
  root.appendChild(App.render()); // On appelle explicitement la méthode render
});
