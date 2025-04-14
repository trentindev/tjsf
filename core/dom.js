/** Fonction principale qui crée un élément DOM générique
  type : le nom de la balise (ex : 'div', 'button')
  props : les attributs HTML et événements
  children : les éléments enfants à insérer dans ce DOM
 */

export function createElement(type, props = {}, ...children) {
  // Création de l’élément HTML (balise)
  const el = document.createElement(type);

  // Application des attributs et des gestionnaires d’événements
  for (const [key, value] of Object.entries(props)) {
    // Si la clé commence par "on" et que la valeur est une fonction
    // alors il s'agit d'un gestionnaire d’événement (ex: onClick → click)
    if (key.startsWith("on") && typeof value === "function") {
      const eventType = key.slice(2).toLowerCase(); // Retire "on" et met en minuscule
      el.addEventListener(eventType, value); // Ajoute un écouteur d’événement
    } else {
      // Sinon, c'est un attribut HTML classique (id, class, etc.)
      el.setAttribute(key, value);
    }
  }

  // Traitement des enfants : ils peuvent être du texte, des noeuds DOM ou des fonctions (composants)
  children.forEach((child) => {
    // Si l'enfant est un tableau (cas d’enfants multiples via spread ou imbrication)
    if (Array.isArray(child)) {
      child.forEach((nested) => appendChild(el, nested)); // on les ajoute un par un
    } else {
      appendChild(el, child); // sinon, on l’ajoute directement
    }
  });

  // Retourne l’élément DOM complet prêt à être inséré dans le DOM final
  return el;
}

// Fonction utilitaire pour insérer un enfant dans un élément parent
function appendChild(parent, child) {
  // Cas 1 : enfant est une chaîne de texte ou un nombre → on le transforme en nœud texte
  if (typeof child === "string" || typeof child === "number") {
    parent.appendChild(document.createTextNode(child));

    // Cas 2 : enfant est déjà un nœud DOM → on l’insère directement
  } else if (child instanceof Node) {
    parent.appendChild(child);

    // Cas 3 : enfant est une fonction → on suppose qu’il s’agit d’un composant
    // On exécute la fonction et insère son résultat si c’est un élément DOM
  } else if (typeof child === "function") {
    const result = child(); // Appel du composant
    if (result instanceof Node) {
      parent.appendChild(result);
    }
  }
}
