# 01-composant-parent
### 💡 Préparer le composant parent

## 📝 Tes notes

Detaille ce que tu as appris ici `INSTRUCTIONS.md`ou sur une page [Notion](https://go.mikecodeur.com/course-notes-template)

## Comprendre

Le but du composant de plus haut niveau `<TrackersApp />` est de contenir tout le fonctionnement de l'application Tracker. (il pourrait y avoir d'autres applications dans notre site). `TrackersApp` sera donc le composant principale qui contiendra les composants enfants. `TrackersApp` contiendra les données (une liste de trackers), un texte de recherche (pour filtrer les tracker) et un `selectedTracker` qui nous permettra de savoir si 'un tracker est sélectionné (pour édition par exemple)

## Exercice

Dans cet exercice tu vas devoir préparer ce composant l'afficher à l'écran dans App.js (le fichier principal de Create React App). Dans un premier temps on va juste afficher le nombre de tracker contenu dans notre base de données virtuelle (qui n'est juste qu'un simple `Array` pour le moment)

```bash
import {TrackersApp} from './components/TrackersApp'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
      </header>
      <TrackersApp />
    </div>
  );
}
```

## Bonus

### 1. 🚀 Afficher le nom de tous les trackers

Affiche tous les noms de trackers en plus de "il y a 6 trackers" en parcourant notre database.

## Aller plus loin

📑 Le lien vers la doc de [Create React App](https://reactjs.org/docs/create-a-new-react-app.html) 

## 🐜 Feedback

Remplir le formulaire le [formulaire de FeedBack](https://go.mikecodeur.com/cours-react-avis).