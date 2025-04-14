// Fonction de base pour créer un composant à état neutre
export function Component(setup) {
  return {
    render: setup, // La méthode render est simplement la fonction setup fournie
  };
}
