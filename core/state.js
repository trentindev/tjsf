// Déclaration de l’état global de l’application.
// Il contiendra toutes les données dynamiques partagées.
let state = {};
let watchers = {}; // clé → liste de fonctions à appeler quand la clé change

// Fonction d'initialisation du state
export function createState(initialState) {
  state = { ...initialState };
  watchers = {};
}

// Fonction d'abonnement à un changement d'une propriété donnée
export function watchState(prop, callback) {
  if (!watchers[prop]) {
    watchers[prop] = [];
  }
  watchers[prop].push(callback);
}

// Fonction de mise à jour de l’état
export function setState(newState) {
  const changedKeys = Object.keys(newState);
  state = { ...state, ...newState };

  // Pour chaque propriété modifiée, déclencher les watchers associés
  changedKeys.forEach((key) => {
    if (watchers[key]) {
      watchers[key].forEach((fn) => fn(state[key]));
    }
  });
}

// Retourne une copie de l’état actuel
export function getState() {
  return { ...state };
}
