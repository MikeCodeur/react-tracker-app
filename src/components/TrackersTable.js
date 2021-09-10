import * as React from 'react'
import './Trackers.css'
import {groupBy} from '../helper'
import {TrackerCategory} from './TrackerCategory'
import {TrackerRow} from './TrackerRow'

const TrackersTable = ({trackers, selectedTracker, onSelectedTracker}) => {
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
      rows.push(
        <TrackerRow
          key={tracker.id}
          tracker={tracker}
          selectedId={selectedTracker?.id}
          onSelected={onSelectedTracker}
        ></TrackerRow>,
      )
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
