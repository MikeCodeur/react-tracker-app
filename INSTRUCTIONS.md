# Sélection d'un Tracker

### 💡 Sélection d'un Tracker

## 📝 Tes notes

Detaille ce que tu as appris ici
`INSTRUCTIONS.md`ou sur une page [Notion](https://go.mikecodeur.com/course-notes-template)

## Comprendre

Le but ici va être de sélectionner un tracker dans notre tableau. Le tracker
sélectionné doit remonter au composant parent `TrackerApp` dans le but de
pouvoir être manipuler plus tard (mise à jour, suppression etc...). Nous avions
déjà créé le state correspondant.

```jsx
const [selectedTracker, setSelectedTracker] = React.useState({})
```

Il va falloir également appliquer un style particulier pour la ligne
sélectionnée (nous avions créer une classe pour cela précédemment)

> A noter que pour simplifier nous avons déplacé le composant `TrackerCategory`
> dans un fichier js à part. (nous ferons de même par la suite pour
> `TrackerRow`)

## Exercice

Dans cet exercice tu vas devoir faire descendre puis remonter le state
`selectedTracker` qui est un objet contenant le tracker sélectionné. Tu vas
devoir passer à travers `TrackersTable` puis `TrackerRow`.

Grace à cette information (`selectedTracker` ), `TrackerRow` va pouvoir choisir
le style à appliquer sur la ligne : (style sélectionné ou non )

> N'oublie pas de modifier les fichiers `TrackersTable` et ensuite `TrackersApp`

**Fichiers :**

- `src/components/TrackersApp.js`
- `src/components/TrackersTable.js`

## Bonus

## 🐜 Feedback

Remplir le formulaire le
[formulaire de FeedBack.](https://go.mikecodeur.com/cours-react-avis?entry.1430994900=React%20Tracker%20App&entry.533578441=06-Selection%20Tracker)
