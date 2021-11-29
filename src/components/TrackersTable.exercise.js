import * as React from 'react'
import './Trackers.css'
// 🐶 importe le helper groupBy
// 🤖 import {groupBy} from '../helper'

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
      <td>2j 3h 45min 18 sec </td>
    </tr>
  )
}

const TrackersTable = ({trackers}) => {
  // 🐶 créé un array 'rows' qui contindra nos lignes à afficher
  // 🐶 créé un string 'lastCategory' qui contindra la dernière
  // catégorie traitée :  (sera utile plus tard)

  // 🐶 appelle 'groupBy'
  const trackersParCategory = []
  // 🤖 const trackersParCategory = groupBy(trackers, 'category')

  Object.keys(trackersParCategory).forEach(category => {
    trackersParCategory[category].forEach(tracker => {
      // 🐶 La première fois on ajoute dans 'rows' ligne catégorie 🤖 `rows.push(<TrackerCategory`
      // pour savoir si c'est la première fois que l'on rencontre une catégorie, on se base dur 'lastCategory'
      // 🤖 if (tracker.category !== lastCategory) {
      // 🐶 ajoute le tracker dans rows 🤖 `rows.push(<TrackerRow`
      // n'oublie pas les key sur les composants
      // 🐶 met à jour la variable 'lastCategory' avec  'tracker.category' pour que l'on ajoute
      // pas une deuxieme ligne <TrackerCategory> pour rien
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
          <tbody>
            {/* ⛏️ supprime le `trackers.map...` et remplace par {rows}   */}
            {trackers.map(tracker => (
              <TrackerRow tracker={tracker} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export {TrackersTable}
