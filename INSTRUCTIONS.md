# Grouper par catégories

### 💡 Grouper par catégories

## 📝 Tes notes

Detaille ce que tu as appris ici
`INSTRUCTIONS.md`ou sur une page [Notion](https://go.mikecodeur.com/course-notes-template)

## Comprendre

Nous allons maintenant regrouper les trackers par catégories pour nous
simplifier la tache nous allons utiliser un `helper` avec une fonction `groupBy`
qui va traiter nos données

```java
const trackersParCategory = groupBy(trackers, 'category')
//va transformer en object groupé par category
{sport:[{t1},{t2}], code:[{t3},{t4}]}

```

Nous avons également découper le le composant table avec 2 autre composants :
`TrackerRow` (nous avons juste deplacer le code dans un composant ) et
`TrackerCategory` qui permettra de séparer par catégorie.

```jsx
const TrackerCategory = ({category}) => {
  return (
    <tr>
      <th className="th-category" colSpan="4">
        {category}
      </th>
    </tr>
  )
}

const TrackerRow = ({tracker}) => {
  return (
    <tr>
      <td>{tracker.name}</td>
      <td>{tracker.starttime}</td>
      <td>{tracker.endtime}</td>
      <td>{tracker.name}</td>
    </tr>
  )
}
```

**Fichiers :**

- `src/components/TrackersTable.js`

## Exercice

Dans cette exercice il va falloir appeler `groupBy` pour grouper les trackers.
et ensuite afficher un tableau grouper par catégorie avec un séparateur.

## Bonus

### 1. 🚀 Calcul de la durée d'une tache

Utilise la fonction `diifTime` qui permet de calculer la durée entre 2 dates

```java
import {groupBy, diffTime} from '../helper'
const duration = diffTime(tracker?.starttime, tracker?.endtime )
```

## 🐜 Feedback

Remplir le formulaire le
[formulaire de FeedBack.](https://go.mikecodeur.com/cours-react-avis?entry.1430994900=React%20Tracker%20App&entry.533578441=05-%20Grouper%20par%20catégories)
