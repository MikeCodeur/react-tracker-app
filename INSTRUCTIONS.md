# Affichage des Trackers
### 💡 Affichage des Trackers dans un tableau

## 📝 Tes notes

Detaille ce que tu as appris ici `INSTRUCTIONS.md`ou sur une page [Notion](https://go.mikecodeur.com/course-notes-template)

## Comprendre

Nous allons afficher les trackers dans un composant `<TrackersTable />` qui est une tableau html classique 

```html
<table>
    <thead>
      <tr>
        <th>Nom du Tracker</th>
        <th>Début</th>
        <th>Fin</th>
        <th>Durée</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td>name</td>
          <td>starttime</td>
          <td>endtime</td>
          <td>duree</td>
        </tr>
    </tbody>
  </table>
```

## Exercice

Dans cet exercice tu vas devoir passer en props la liste de trackers au composant `<TrackersTable />` et ensuite afficher dynamiquement le tableau .

> Pense à éditer `TrackersApp` pour y ajouter `TrackersTable`

## 🐜 Feedback

Remplir le formulaire le [formulaire de FeedBack](https://go.mikecodeur.com/cours-react-avis).