/* eslint-disable no-unused-vars */
import * as React from 'react'
import db from '../data'

function TrackersApp() {
  const [allTrackers, setAllTrackers] = React.useState(db)
  const [filterText, setFilterText] = React.useState('')
  const [selectedTracker, setSelectedTracker] = React.useState({})

  return (
    <div>
      <h3>il y a {allTrackers.length} trackers </h3>
      {allTrackers.map(tracker => (
        <p>{tracker.name}</p>
      ))}
    </div>
  )
}
export {TrackersApp}
