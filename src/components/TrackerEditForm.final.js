import * as React from 'react'
import {v4 as uuidv4} from 'uuid'
import {getDateTimeForPicker} from '../helper'

const newTracker = () => ({
  id: uuidv4(),
  category: 'Défaut',
  starttime: getDateTimeForPicker(),
  endtime: '',
  name: '',
})

const TrackerEditForm = ({
  selectedTracker = {...newTracker(), id: ''},
  onAddTracker,
  onDeleteTracker,
  onUpdateTracker,
}) => {
  const [tracker, setTracker] = React.useState(selectedTracker)

  const handleTrackerName = e => {
    setTracker({...tracker, name: e.target.value})
  }
  const handleTrackerStartTime = e => {
    setTracker({...tracker, starttime: e.target.value})
  }
  const handleTrackerEndTime = e => {
    setTracker({...tracker, endtime: e.target.value})
  }
  const handleTrackerCategory = e => {
    setTracker({...tracker, category: e.target.value})
  }

  React.useEffect(() => {
    if (selectedTracker?.id !== '' && selectedTracker?.id !== tracker.id) {
      setTracker(selectedTracker)
    }
  }, [tracker, selectedTracker])

  const handleOnSubmit = e => {
    e.preventDefault()
    onAddTracker(tracker)
  }

  const handleUpdateTracker = () => {
    onUpdateTracker(tracker)
  }

  const handleDeleteTracker = () => {
    onDeleteTracker(tracker)
  }

  const handleNewTracker = () => {
    setTracker(newTracker())
  }
  const disabled = tracker.id === '' ? true : false
  return (
    <>
      <form className="Form" onSubmit={handleOnSubmit}>
        <fieldset>
          <legend>Gestion des Trackers</legend>
          <label htmlFor="trackerName">Nom du tracker : </label>
          <input
            disabled={disabled}
            type="text"
            id="trackerName"
            placeholder="tracker name..."
            onChange={handleTrackerName}
            value={tracker.name}
          ></input>

          <label htmlFor="trackerDateStart">Date de début : </label>
          <input
            disabled={disabled}
            id="trackerDateStart"
            type="datetime-local"
            placeholder="durée..."
            onChange={handleTrackerStartTime}
            value={tracker.starttime}
            step="2"
          ></input>

          <label htmlFor="trackerDateEnd">Date de fin : </label>

          <input
            disabled={disabled}
            id="trackerDateEnd"
            type="datetime-local"
            placeholder="durée..."
            onChange={handleTrackerEndTime}
            value={tracker.endtime}
            step="2"
          ></input>

          <label>
            Categorie:
            <select disabled={disabled} value={tracker.category} onChange={handleTrackerCategory}>
              <option value="Sport">Sport</option>
              <option value="Code">Code</option>
              <option value="Perso">Perso</option>
              <option value="Défaut">Défaut</option>
            </select>
          </label>

          <label>Actions</label>
          <div className="Action">
            <input
              type="button"
              value="Nouveau Tracker"
              onClick={handleNewTracker}
            ></input>
            <input disabled={disabled} type="submit" value="Ajouter"></input>
            <input
              disabled={disabled}
              type="button"
              value="Supprimer"
              onClick={handleDeleteTracker}
            ></input>
            <input
              disabled={disabled}
              type="button"
              value="Mettre à jour"
              onClick={handleUpdateTracker}
            ></input>
          </div>
        </fieldset>
      </form>
    </>
  )
}

export {TrackerEditForm}