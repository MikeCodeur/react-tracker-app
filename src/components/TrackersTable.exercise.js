import * as React from 'react'
import './Trackers.css'
import {groupBy, diffTime} from '../helper'
import {TrackerCategory} from './TrackerCategory'

// 🐶 créé 2 props 'selectedId' et 'onSelected'
const TrackerRow = ({tracker}) => {
  const duration = diffTime(tracker?.starttime, tracker?.endtime)

  // 🐶 créé une fonction 'handleClick' qui sera déclanchée sur le 'onClick' de <tr>
  // cette fonction appelera ensuite `onSelected` avec le tracker courant

  // 🐶 gère l'affichage de la ligne selectionée en comparant 'selectedId' et 'tracker.id'
  // applique className 'selectedline' sur la ligne selectionné
  return (
    // 🐶 <tr> : n'oublie pas le 'className' et 'onClick'
    <tr>
      <td>{tracker.name}</td>
      <td>{tracker.starttime}</td>
      <td>{tracker.endtime}</td>
      <td>{duration}</td>
    </tr>
  )
}

// 🐶 créé 2 props 'selectedTracker' et 'onSelectedTracker'
const TrackersTable = ({trackers}) => {
  const rows = []
  let lastCategory = ''

  const trackersParCategory = groupBy(trackers, 'category')
  Object.keys(trackersParCategory).forEach(category => {
    trackersParCategory[category].forEach(tracker => {
      if (tracker.category !== lastCategory) {
        rows.push(
          <TrackerCategory
            key={category}
            category={tracker.category}
          ></TrackerCategory>,
        )
      }
      // 🐶 utilise 'selectedTracker' et 'onSelectedTracker' pour passer les bons
      // props à <TrackerRow>
      // va ensuite modifier TrackerApp
      rows.push(<TrackerRow key={tracker.id} tracker={tracker}></TrackerRow>)
      lastCategory = tracker.category
    })
  })

  return (
    <>
      <h2>Liste des trackers</h2>
      <div className="TableContainer">
        <table>
          <thead>
            <tr>
              <th>Nom du Tracker</th>
              <th>Début</th>
              <th>Fin</th>
              <th>Durée</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    </>
  )
}

export {TrackersTable}
