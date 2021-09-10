import * as React from 'react'
import {diffTime} from '../helper'

const TrackerRow = ({tracker, selectedId, onSelected}) => {
  const starttime = new Date(tracker?.starttime).toLocaleString()
  const endtime = tracker?.endtime
    ? new Date(tracker?.endtime).toLocaleString()
    : 'en cours ...'

  const [duration, setDuration] = React.useState(
    diffTime(tracker?.starttime, tracker?.endtime),
  )

  React.useEffect(() => {
    console.log(duration)
    const refresh = () => {
      //setDate(new Date())
      setDuration(diffTime(tracker?.starttime, tracker?.endtime))
    }
    const timerID = setTimeout(() => refresh(), 1000)
    return () => {
      clearTimeout(timerID)
    }
  }, [duration, tracker?.endtime, tracker?.starttime])

  const handleClick = e => {
    onSelected(tracker)
  }

  const selected = tracker.id === selectedId ? 'selectedline' : ''
  return (
    <tr className={selected} onClick={handleClick}>
      <td>{tracker.name}</td>
      <td>{starttime}</td>
      <td>{endtime}</td>
      <td>{duration}</td>
    </tr>
  )
}

export {TrackerRow}
