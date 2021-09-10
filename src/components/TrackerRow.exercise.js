
import * as React from 'react'
import {diffTime} from '../helper'

const TrackerRow = ({tracker, selectedId, onSelected}) => {
  
  // 🐶 créé un variable 'starttime' qui contient un string au format 'toLocaleString'
  // 🐶 créé un variable 'endtime' qui contient un string au format 'toLocaleString'
  // 🐶 utilise une ternaire pour afficher la date de fin ou 'en cours ...'
  // 📑 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

  // 🐶 nous allons maintenant vouloir refraichir automatiquement la durée toutes les secondes
  // pour cela il faut changer 'duration' en state.
  // ⛏️ Remplace duration en state
  const duration = diffTime(tracker?.starttime, tracker?.endtime)

  // 🐶 L'idée et d'appeler une fonction 'refresh' toutes les secondes grace à 'setTimeOut'
  // 📑 https://www.w3schools.com/jsref/met_win_settimeout.asp
  // Utilise useEffect pour declarer la fonction 'refresh' et le 'timer'
  React.useEffect(() => {
    // 🐶 crée une fonction 'refresh' qui met à jour le state 'duration'

    // 🐶 utilise setTimeout pour appler 'refresh' toutes les secondes
    // 🤖 const timerID = setTimeout(() => refresh(), 1000)
    // n'oulie pas le cleanup de useEffect en retournant 'clearTimeout(timerID)'

    // 🐶 pense aux dependances
  }, [])

  const handleClick = e => {
    onSelected(tracker)
  }
  const selected = tracker.id === selectedId ? 'selectedline' : ''
  return (
    <tr className={selected} onClick={handleClick}>
      <td>{tracker.name}</td>
      {/* 🐶 remplace les dates */}
      <td>{tracker.starttime}</td>
      <td>{tracker.endtime}</td>
      <td>{duration}</td>
    </tr>
  )
}

export {TrackerRow}