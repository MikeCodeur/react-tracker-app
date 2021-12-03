# Formulaire d'édition avancée

### 💡 Formulaire d'édition avancée

## 📝 Tes notes

Detaille ce que tu as appris ici
`INSTRUCTIONS.md`ou sur une page [Notion](https://go.mikecodeur.com/course-notes-template)

## Comprendre

La logique peut vite devenir complexe à gérer lorsque l'on a des états et des
transitions. Exemple de Diagram de transition sur des boutons

imaginons nous souhaitons gérer plus finement les états de nos boutons ,
Nouveau, Ajouter, Supprimer Mettre à jour. On pourrait gérer des Boolean de la
manière suivante.

```jsx
const disabled = tracker.id === '' ? true : false
const disabledButonNew = //logique à implementer
const disabledButonAdd = //logique à implementer
const disabledButonUpdate = //logique à implementer
const disabledButonDelete = //logique à implementer
const disabledLabel = //logique à implementer
//etc..
```

Cette manière fonctionne mais peut vite devenir compliquer à maintenir par la
multiplication des boolean. A la place il est possible d'utiliser un reducer qui
permet de gerer l'état en cours, les données, les états des bouton et des champs
inputs (et tout autre future états a gérer )

```jsx
const reducer = (state, action) => {
  switch (action.type) {
    case 'new':
      return {
        status: 'new',
        tracker: action.payload,
        activeButtons: {btnSave: true, btnUp: false, btnDel: false},
        activeInput: true,
        error: null,
      }
    case 'edit':
    //etc ...
    default:
      throw new Error('Action non supporté')
  }
}
const [state, dispatch] = React.useReducer(reducer, {
  tracker: selectedTracker,
  error: null,
  status: 'idle',
  activeButtons: {btnSave: false, btnUp: false, btnDel: false},
})
```

## Exercice

👨‍✈️ Hugo le chef de projet nous demande d'implémenter la logique suivante :

- Au démarrage, dans l'état initial, tous les champs input sont désactivés
- Au démarrage, dans l'état initial, tous les boutons sont désactivé à
  l'exception de "Nouveau Tracker"

Lors d'un clique sur "Nouveau Tracker"

- Les champs input sont actifs
- Le bouton 'Ajouter' s'active et permet d'ajouter le tracker

Lors d'un clique sur "Ajouter"

- Le tracker est ajouté en base de données et seul le bouton "Nouveau Tracker"
  est actif
- Les champs input sont inactifs

Lors d'un clique sur une des ligne du tableau

- Le bouton "Ajouter" est désactivé
- Le bouton 'Nouveau tracker', 'Supprimer' et 'Mettre à jour' son actifs
- les champs input son actifs

Lors d'un clique sur "Mettre à jour"

- Le tracker est mise a jour en base de données et le bouton "ajouter" est
  inactif
- Les champs input sont actifs

Lors d'un clique sur "Supprimer"

- Le tracker est supprimé en base de données et le seul le bouton "Nouveau
  Tracker" est actif
- Les champs input sont inactifs

Dans cet exercice tu vas devoir implémenter cela avec le `reducer`

**Fichiers :**

- `src/components/TrackersEditForm.js`

## Bonus

### 1. 🚀 Exporter le comportement dans un hook custom

Dans cet exercice tu vas devoir créer une hook personnalisé. L'idée est de
pouvoir réutiliser la logiques d'états / Buttons / Champs.

Créé un hook `useEditTracker` qui retourne toutes ces propriétés :

```jsx
function useEditTracker(defaultTracker) {
  const [state, dispatch] = React.useReducer(reducer, {
    tracker: defaultTracker,
    error: null,
    status: 'idle',
    activeButtons: {btnSave: false, btnUp: false, btnDel: false},
  })
  //todo

  return {
    tracker,
    error,
    status,
    activeButtons,
    activeInput,
    setTracker,
    editTracker,
    saveTracker,
    updateTracker,
    deleteTracker,
    newTracker,
  }
}
```

Creer dans ce hook les fonctions suivantes

- setTracker
- editTracker
- saveTracker
- updateTracker
- deleteTracker
- newTracker

qui font appel au dispatch avec les bonne valeurs.

Utilise le ensuite de la manière suivante dans le composant

```jsx
const {
  tracker,
  activeButtons,
  activeInput,
  setTracker,
  editTracker,
  saveTracker,
  updateTracker,
  deleteTracker,
  newTracker,
} = useEditTracker(selectedTracker)
```

**Fichiers :**

- `src/components/TrackersEditForm.js`

## 🐜 Feedback

Remplir le formulaire le
[formulaire de FeedBack.](https://go.mikecodeur.com/cours-react-avis?entry.1430994900=React%20Tracker%20App&entry.533578441=09-Formulaire%20d'édition%20avancé)
