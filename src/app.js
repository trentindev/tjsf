import { bindStateToDOM } from "../core/binding";
import { createElement } from "../core/dom";
import { createState } from "../core/state";

// Composant qui ne dépend que de l’état initial
function App() {
  const root = createElement(
    "div",
    { class: "app-container" },
    createElement("h1", {}, "Formulaire lié au State"),
    createElement("input", {
      type: "text",
      placeholder: "Entrez votre nom",
      "data-bind": "name",
    }),
    createElement(
      "p",
      {},
      "Bonjour, ",
      createElement("span", { "data-bind": "name" })
    )
  );

  // Lier les champs DOM à l’état une seule fois
  bindStateToDOM(root);

  return root;
}

document.addEventListener("DOMContentLoaded", () => {
  // Une seule initialisation de l’état
  createState({ name: "" }, () => {
    // NE FAIT RIEN ici volontairement
    // On ne re-render pas tout, on laisse bindStateToDOM gérer les maj fines
  });

  const root = document.getElementById("app");
  root.appendChild(App());
});
