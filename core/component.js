export function Component(setup) {
  return function createInstance() {
    let localState = {};
    let element = null;

    // Méthode de mise à jour qui remplace le DOM avec une nouvelle version
    const update = () => {
      const newEl = render();
      if (element) element.replaceWith(newEl);
      element = newEl;
    };

    // Permet de stocker l’état local du composant
    const setState = (newState) => {
      localState = { ...localState, ...newState };
      update();
    };

    // Appelle la fonction setup avec { state, setState }
    const render = () => setup({ state: localState, setState });

    // Génère l’élément DOM initial
    element = render();

    // Retourne une fonction qui renvoie l’élément (à la manière d’un composant React)
    return () => element;
  };
}
