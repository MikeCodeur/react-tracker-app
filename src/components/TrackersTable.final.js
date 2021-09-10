import * as React from 'react'
import './Trackers.css'
import {groupBy, diffTime} from '../helper'
import {TrackerCategory} from './TrackerCategory'

const TrackerRow = ({tracker, selectedId, onSelected}) => {
  const duration = diffTime(tracker?.starttime, tracker?.endtime)

  const handleClick = e => {
    onSelected(tracker)
  }
  const selected = tracker.id === selectedId ? 'selectedline' : ''
  return (
    <tr className={selected} onClick={handleClick}>
      <td>{tracker.name}</td>
      <td>{tracker.starttime}</td>
      <td>{tracker.endtime}</td>
      <td>{duration}</td>
    </tr>
  )
}

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
