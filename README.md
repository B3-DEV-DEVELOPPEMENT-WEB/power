# Notes de Développement Web

## Initialisation de Projet avec Vite
- **Commande** : `npm create vite`
  - Utilisée pour initialiser rapidement un nouveau projet avec Vite, un outil de build moderne pour les applications front-end.

## React.Fragment
- **Syntaxe** : `<> </>`
  - Permet de grouper une liste d'éléments enfants sans ajouter de nœuds supplémentaires au DOM.
  - Alternative à l'ajout de divs inutiles.

## Boucle sur les Tableaux avec .map
- **Méthode** : `.map`
  - Utilisée pour exécuter une fonction sur chaque élément d'un tableau et renvoyer un nouveau tableau.
  - Très utile pour rendre des listes d'éléments en React.

## Gestion d'État avec useState
- **Hook** : `useState`
  - Exemple : `const [count, setCount] = useState(0);`
  - `count` représente la valeur de l'état, et `setCount` est la fonction pour modifier cet état.
  - Permet d'ajouter un état local à des composants fonctionnels en React.

## Utilisation de useEffect dans React
- **Hook** : `useEffect`
  - Exemple : `useEffect(() => { /* code ici */ }, [dependencies]);`
  - Permet d'exécuter du code en réponse à des changements de props ou d'état.
  - Utilisé pour des effets de bord (side effects) comme les requêtes de données, mises à jour du DOM, et timers.