/* eslint-disable no-unused-vars */
import * as React from 'react'
// 🐶 importe {FilterTrackers}
import db from '../data'

function TrackersApp() {
  const [allTrackers, setAllTrackers] = React.useState(db)
  const [filterText, setFilterText] = React.useState('')
  const [selectedTracker, setSelectedTracker] = React.useState({})

  // 🐶 fonction qui va recuperer le texte saisie et filtrer notre base de données
  const handleTextChange = text => {
    // 🐶 met à jour le state 'filterText'
    // 🐶 filtre de l'array de trackers (db) en te basant sur le champs name des trackers.
    // 🤖 utilise la méthode 'filter'
    // db.filter((track) => condition)
    // la condition à respecter : il faut que la chaine de caractère 'text' soit trouvé dans 'track.name'
    // on ne prendra pas en conmpte la casse
    // 🤖 track.name.toLowerCase().indexOf(text) === -1
    // 🐶 met à jour le state 'allTrackers' avec ce tableau filtré
  }

  return (
    // 🐶 affiche le composant <FilterTrackers /> et utilise le prop onTextChange
    <div>il y a {allTrackers.length} trackers</div>
  )
}
export {TrackersApp}
