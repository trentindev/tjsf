// On importe la fonction createElement depuis notre moteur DOM personnalisé
// Cette fonction permet de créer des éléments HTML via du code JavaScript
import { createElement } from "../core/dom";

// Définition d'un composant fonctionnel nommé "Button"
// Un composant est une fonction qui retourne un élément DOM prêt à être affiché
function Button() {
  // On utilise createElement pour générer un <button>
  // Le bouton déclenche une alerte lorsqu'on clique dessus (événement onClick)
  return createElement(
    "button",
    {
      onClick: () => alert("Clique détecté !"), // Gère le clic utilisateur
    },
    "Cliquez ici"
  ); // Contenu textuel du bouton
}

// Composant principal de l’application, qui regroupe plusieurs éléments
function App() {
  // On crée une <div> avec la classe "app-container"
  // À l’intérieur de cette div, on insère :
  // - un <h1> pour le titre
  // - un <p> pour un petit texte de présentation
  // - le composant <Button> (appelé ici comme une fonction)
  return createElement(
    "div",
    { class: "app-container" },
    createElement("h1", {}, "Tiny JS Framework"),
    createElement("p", {}, "Bienvenue dans votre premier TP JavaScript."),
    Button() // insertion du composant bouton
  );
}

// Code qui s'exécute lorsque la page a complètement chargé le DOM HTML
document.addEventListener("DOMContentLoaded", () => {
  // Sélectionne la balise <div id="app"> dans le fichier index.html
  const root = document.getElementById("app");

  // On insère le composant principal App() dans cette div
  // App() retourne un élément DOM construit dynamiquement
  root.appendChild(App());
});
