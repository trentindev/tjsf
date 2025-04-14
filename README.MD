# TJSF – Mini-Framework JavaScript Pédagogique

TJSF (Tiny JavaScript Framework) est un projet pédagogique visant à guider les développeurs en formation dans la création d'un mini-framework JavaScript

Ce TP progressif permet de comprendre les mécanismes fondamentaux des frameworks modernes tels que React, Vue ou Svelte

## 🎯 Objectifs pédagogiques

- Comprendre la manipulation du DOM via JavaScrit
- Structurer une application en composants réutilisables
- Mettre en place un système de routage client-side
- Gérer un état global et local de manière réactive
- Implémenter un système de data-binding bidirectionnelle

## Structure du projet

```
tjsf/
├── index.html
├── app.js
├── style.css
├── core/
│   ├── dom.js         # Création et insertion d’éléments DOM
│   ├── component.js   # Système de composants
│   ├── state.js       # Gestion de l’état global
│   ├── binding.js     # Data-binding réactif
│   └── router.js      # Routage basé sur le hash
├── public/            # Fichiers statiques
└── src/               # Composants et vues spécifiques
```

---

## Démarrage rapide

1. Cloner le dépt :

   ```bash
   git clone https://github.com/trentindev/tjsf.git
   cd tjsf
   ```

2. Ouvrir `index.html` dans votre navigaeur

3. Explorer et modifier les fichiers dans `core/`, `src/` et `appjs`

## Étapes du TP

### 1. Création d’un moteur DOM simplifi

- Fonction `createElement(type, props, ...childen)`
- Gestion des attributs et des événeents
- Imbrication de compoants

### 2. Mise en place d’un système de composant

- Fonction `Component(seup)`
- Composants avec méthode `rendr()`
- Support des props et du rendu conditinnel

### 3. Gestion d’un état global simpl

- Objet `state` centrlisé
- Fonction `setState(newStte)`
- Re-render automatique des compoants

### 4. Implémentation d’un système de routing basiqu

- Utilisation de `window.location.ash`
- Fonction `initRouter(routes, mountPont)`
- Navigation entre vues sans rechargment

### 5. Introduction à la réactivité et au data-bindin

- Fonction `bindStateToDOM(rot)`
- Attributs personnalisés `data-ind`
- Liaison bidirectionnelle entre l’état et l DOM

## Public vsé

- Étudiants en développemnt wb
- Développeurs débutants souhaitant comprendre les bases des frameworks
- Formateurs cherchant un support pédagogique proressif

## Ressources complémentaires

- [MDN Web Docs – Manipulation du DOM](https://developer.mozilla.org/fr/docs/Web/API/Document_Object_Model)
- [MDN Web Docs – Événements en JavaScript](https://developer.mozilla.org/fr/docs/Web/Events)
- [MDN Web Docs – window.location](https://developer.mozilla.org/fr/docs/Web/API/Window/location)

## Licence

Ce projet est sous licnce MIT.

> N'hésitez pas à adapter ce `README.md` selon vos besoins spécifiques et à ajouter des captures d'écran ou des exemples de code pour illustrer les différentes fonctionnalités du famework.
