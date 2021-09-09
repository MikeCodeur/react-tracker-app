/* eslint-disable no-unused-vars */
import * as React from 'react'
import {FilterTrackers} from './FilterTrackers'

import db from '../data'

function TrackersApp() {
  const [allTrackers, setAllTrackers] = React.useState(db)
  const [filterText, setFilterText] = React.useState('')
  const [selectedTracker, setSelectedTracker] = React.useState({})

  const handleTextChange = text => {
    setFilterText(text)
    const filteredTracker = db.filter(
      track => track.name.toLowerCase().indexOf(text) === -1,
    )
    setAllTrackers(filteredTracker)
  }

  return (
    <div>
      <FilterTrackers onTextChange={handleTextChange} />
      il y a {allTrackers.length} trackers
    </div>
  )
}
export {TrackersApp}
