/* eslint-disable no-unused-vars */
import * as React from 'react'
import {FilterTrackers} from './FilterTrackers'
import {TrackersTable} from './TrackersTable'
import {TrackerEditForm} from './TrackerEditForm'
import db from '../data'

function TrackersApp() {
  const [allTrackers, setAllTrackers] = React.useState(db)
  const [filterText, setFilterText] = React.useState('')
  const [selectedTracker, setSelectedTracker] = React.useState()

  const handleTextChange = text => {
    setFilterText(text)
    const filteredTracker = db.filter(
      track => track.name.toLowerCase().indexOf(text) !== -1,
    )
    setAllTrackers(filteredTracker)
  }

  const handleAddTracker = tracker => {
    setAllTrackers([...allTrackers, tracker])
  }
  const handleDeleteTracker = tracker => {
    setAllTrackers(allTrackers.filter(item => item.id !== tracker.id))
  }
  const handleUpdateTracker = tracker => {
    let updatedList = allTrackers.map(item =>
      item.id === tracker.id ? tracker : item,
    )
    setAllTrackers(updatedList)
  }

  return (
    <div>
      <FilterTrackers onTextChange={handleTextChange} />
      <TrackerEditForm
        selectedTracker={selectedTracker}
        onAddTracker={handleAddTracker}
        onUpdateTracker={handleUpdateTracker}
        onDeleteTracker={handleDeleteTracker}
      />
      <TrackersTable
        trackers={allTrackers}
        selectedTracker={selectedTracker}
        onSelectedTracker={setSelectedTracker}
      />
    </div>
  )
}
export {TrackersApp}
