let routes = {}; // Objet de correspondance route → composant
let rootElement = null;

// Initialisation du router
export function initRouter(config, mountPoint) {
  routes = config; // Ex: { '/': Home, '/about': About }
  rootElement = mountPoint;

  window.addEventListener("hashchange", renderRoute); // À chaque changement de hash
  renderRoute(); // Rendu initial
}

// Fonction qui détecte la route actuelle et affiche le composant associé
function renderRoute() {
  const path = window.location.hash.slice(1) || "/"; // Extrait "#/about" → "/about"
  const component = routes[path];

  if (component && typeof component === "function") {
    rootElement.innerHTML = "";
    rootElement.appendChild(component());
  } else {
    rootElement.innerHTML = "<h2>404 - Page non trouvée</h2>"; // Toute route inconnue affiche un 404
  }
}
