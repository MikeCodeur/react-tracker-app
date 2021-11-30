# Gestion des dates / durées / refresh

### 💡 Gestion des dates / durées / refresh

## 📝 Tes notes

Detaille ce que tu as appris ici
`INSTRUCTIONS.md`ou sur une page [Notion](https://go.mikecodeur.com/course-notes-template)

## Comprendre

Dans notre base de données les dates sont sotckée sous forme de chaine de
caractère au format selon la norme iso8601 au format Date et Time exemple pour
le 01 Novembre 2021 à 16 heures 40 minutes et 1 secondes

```jsx
2021-11-01T16:40:01
```

📑 Lien vers le Wiki [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)

En peut ensuite instancier un objet Date facilement grâce à ce string et ensuite
le manipuler plus facilement

```jsx
const date = new Date('2021-11-01T16:40:01')
date.toLocaleString()
```

## Exercice

Dans cet exercice tu vas devoir afficher les dates au format locale. Quand le
tracker n'a pas de date de fin c'est qu'il est en cours. il faudra afficher un
libellé : 'En cours...'.

Il va ensuite falloir mettre à jour la durée toute les secondes pour voir le
compteur évoluer. pour cela on utilisera `setTimeout` qui appellera une fonction
`refresh`

```jsx
const timerID = setTimeout(() => refresh(), 1000)
```

📑 doc setTimout
[https://www.w3schools.com/jsref/met_win_settimeout.asp](https://www.w3schools.com/jsref/met_win_settimeout.asp)

**Fichiers :**

- `src/components/TrackersRow.js`

## 🐜 Feedback

Remplir le formulaire le
[formulaire de FeedBack.](https://go.mikecodeur.com/cours-react-avis?entry.1430994900=React%20Tracker%20App&entry.533578441=07-gestion%20dates%20/%20durée%20/%20refresh)
