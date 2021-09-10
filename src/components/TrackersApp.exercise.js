/* eslint-disable no-unused-vars */
import * as React from 'react'
import {FilterTrackers} from './FilterTrackers'
import {TrackersTable} from './TrackersTable'
// 🐶 importe TrackerEditForm
import db from '../data'

function TrackersApp() {
  const [allTrackers, setAllTrackers] = React.useState(db)
  const [filterText, setFilterText] = React.useState('')
  const [selectedTracker, setSelectedTracker] = React.useState({})

  const handleTextChange = text => {
    setFilterText(text)
    const filteredTracker = db.filter(
      track => track.name.toLowerCase().indexOf(text) !== -1,
    )
    setAllTrackers(filteredTracker)
  }

  // 🐶 créé une fonctions 'handleAddTracker' qui prend en paramètre un 'tracker'
  // et qui ajoute ce 'tracker' dans 'allTrackers' avec 'setAllTrackers'
  // tu peux utiliser un spread opérator (ou solution équivalente) :
  // 🤖 [...arrayExistant, nouvelElement]

  // 🐶 créé une fonctions 'handleDeleteTracker' qui prend en paramètre un 'tracker'
  // et qui supprime ce 'tracker' de 'allTrackers' en se basant dur l'id
  // utilise 'filter' (ou solution équivalente) :
  // 🤖 arrayExistant.filter((item) => item.id !== elementASupprimer.id)
  
  // 🐶 créé une fonctions 'handleUpdateTracker' qui prend en paramètre un 'tracker'
  // et qui met à jour ce 'tracker' dans 'allTrackers' en se basant dur l'id
  // utilise 'map' (ou solution équivalente):
  // 🤖 updatedArray = arrayExistant.map(item => item.id === elementAMaj.id ? elementAMaj : item)


  return (
    <div>
      <FilterTrackers onTextChange={handleTextChange} />
      {/* 🐶 appelle <TrackerEditForm> avec les 4 props utiles */}
      <TrackersTable
        trackers={allTrackers}
        selectedTracker={selectedTracker}
        onSelectedTracker={setSelectedTracker}
      />
    </div>
  )
}
export {TrackersApp}
