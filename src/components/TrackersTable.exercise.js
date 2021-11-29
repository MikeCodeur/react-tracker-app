import * as React from 'react'
// 🐶 decommente la ligne du dessous pour importer le fichier css
// import './Trackers.exercise.css'

const TrackersTable = ({trackers}) => {
  return (
    <>
      <h2>Liste des trackers</h2>
      {/* 🐶 Ajoute le ClassName 'TableContainer' sur la div du dessous */}
      {/* tu peux ensuite aller suivre les instructions dans 'Trackers.exercise.css' */}
      <div>
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
            {trackers.map(tracker => (
              // 🐶 Ajoute le ClassName 'selectedline' sur <tr> ci dessous
              // Cela nous permettra plus tard d'y appliquer un style sur une ligne
              // selectionné du tableau
              <tr>
                <td>{tracker.name}</td>
                <td>{tracker.starttime}</td>
                <td>{tracker.endtime}</td>
                <td>{tracker.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export {TrackersTable}
