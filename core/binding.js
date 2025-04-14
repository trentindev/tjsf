import { getState, setState, watchState } from "./state.js";

export function bindStateToDOM(root) {
  const elements = root.querySelectorAll("[data-bind]");

  elements.forEach((el) => {
    const prop = el.getAttribute("data-bind");

    const updateElement = (value) => {
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        el.value = value;
      } else {
        el.textContent = value;
      }
    };

    // Écoute du changement utilisateur (input → state)
    if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
      el.addEventListener("input", (e) => {
        setState({ [prop]: e.target.value });
      });
    }

    // Écoute du changement state → DOM
    watchState(prop, updateElement);

    // Affichage initial
    updateElement(getState()[prop] || "");
  });
}
