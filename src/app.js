import { Component } from "../core/component";
import { createElement } from "../core/dom";

// Composant compteur avec état local
const Counter = Component(({ state, setState }) => {
  const count = state.count || 0;

  return createElement(
    "div",
    { class: "counter" },
    createElement("p", {}, `Valeur locale : ${count}`),
    createElement(
      "button",
      {
        onClick: () => setState({ count: count + 1 }),
      },
      "Incrémenter"
    )
  );
});

// Composant principal App
function App() {
  return createElement(
    "div",
    { class: "app-container" },
    createElement("h1", {}, "Deux compteurs indépendants"),
    createElement("p", {}, "Chaque composant a son propre état."),
    Counter(), // Instance A
    Counter() // Instance B
  );
}

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("app");
  root.appendChild(App());
});
