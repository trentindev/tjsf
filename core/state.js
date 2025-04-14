// Déclaration de l’état global de l’application.
// Il contiendra toutes les données dynamiques partagées.
let state = {};

// Fonction de rappel (callback) qui sera utilisée pour re-render l’interface
let renderFn = null;

// Fonction d'initialisation de l’état
// - initialState : objet représentant l’état de départ (ex: { count: 0 })
// - renderer : fonction à appeler à chaque mise à jour de l’état
export function createState(initialState, renderer) {
  state = { ...initialState }; // Copie de l’état initial pour éviter les mutations externes
  renderFn = renderer; // Enregistre la fonction à rappeler lors de setState
}

// Fonction permettant de modifier l’état
// - newState : un objet avec les valeurs à mettre à jour dans l’état global
export function setState(newState) {
  // Fusionne le nouvel état avec l’ancien (remplace uniquement les propriétés fournies)
  state = { ...state, ...newState };

  // Si une fonction de rendu est définie, on la déclenche
  if (typeof renderFn === "function") {
    renderFn(); // Met à jour l’interface en appelant la fonction définie dans createState
  }
}

// Fonction permettant de lire l’état courant
// Retourne une copie de l’état (pour éviter les modifications directes non contrôlées)
export function getState() {
  return { ...state };
}
