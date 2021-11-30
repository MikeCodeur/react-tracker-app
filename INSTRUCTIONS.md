# Formulaire d'édition

### 💡 Formulaire d'édition de Tracker

## 📝 Tes notes

Detaille ce que tu as appris ici
`INSTRUCTIONS.md`ou sur une page [Notion](https://go.mikecodeur.com/course-notes-template)

## Comprendre

Nous allons utiliser un formulaire HTML classique avec :

- des `input` de type `text`
- un `select` pour la combo box des catégories de trackers
- des `input` de type `datetime-local` pour sélectionner les dates

```jsx
//exemple de input type datetime-local
<input
  disabled={disabled}
  id="trackerDateStart"
  type="datetime-local"
  placeholder="durée..."
  onChange={handleTrackerStartTime}
  value={tracker.starttime}
  step="2"
/>
```

## Exercice

👨‍✈️ Hugo le chef de projet nous demande de créer un formulaire pour pouvoir
éditer les trackers avec des boutons d'action

Dans cet exercice tu va devoir créer le formulaire `TrackerEditForm` qui prend
en `props`.

- `selectedTracker` (le tracker sélectionné à éditer )
- `onAddTracker` (fonction pour ajouter le tracker à notre base de données)
- `onDeleteTracker` (fonction pour supprimer le tracker à notre base de données)
- `onUpdateTracker`(fonction pour mettre à jour le tracker à notre base de
  données)

Il y aura aussi une zone d'action avec 4 boutons

- Nouveau tracker
- Ajouter
- Supprimer
- Mettre à jour

Nous utiliseront `uuid` pour la génération d'id aléatoire

```jsx
import {v4 as uuidv4} from 'uuid'
//id: uuidv4()
```

📑 Doc vers [UUID](https://www.npmjs.com/package/uuid)

Nous utiliseront également la fonction `getDateTimeForPicker` du helper qui
permet d'avoir un format reconnu par le input `datetime-local`, ce qui permet
d'avoir une date setté correctement au démarrage.

```jsx
import {getDateTimeForPicker} from '../helper'
//starttime: getDateTimeForPicker()
```

Dans cet exercice gère le formulaire avec le `selectedTracker` en valeur
initiale. Faire ensuite remonté le tracker modifié au composant parent.

**Fichiers :**

- `src/components/TrackersEditForm.js`
- `src/components/TrackersApp.js`

## Bonus

### 1. 🚀 Validation de données

Pour éviter d'insérer n'importe quoi, vous allons valider les données. (nous
utiliseront un simple `alert()` pour l'exercice)

Dans la fonction `handleAddTracker` et `handleUpdateTracker` vérifie que :

- `id` est présent sinon affiche _'il manque le tracker id'_
- `name` est présent sinon affiche '_veuillez renseigner le nom du tracker'_
- `starttime` est présent sinon affiche 'veuillez renseigner la date de début'
- `category` est présent sinon affiche 'veuillez renseigner la catégori'

Pour `handleDeleteTracker`vérifie que :

- `id` est présent sinon affiche _'il manque le tracker id'_

## 🐜 Feedback

Remplir le formulaire le
[formulaire de FeedBack.](https://go.mikecodeur.com/cours-react-avis?entry.1430994900=React%20Tracker%20App&entry.533578441=08-Forumulaire%20d'édition)
