import * as React from 'react'
import {v4 as uuidv4} from 'uuid'
import {getDateTimeForPicker} from '../helper'

// 🐶 Décommente la fontion "newTracker" qui te crée un objet tracker avec un
// 'id' généré automatiquement et un 'starttime '

// const newTracker = () => ({
//   id: uuidv4(),
//   category: 'Défault',
//   starttime: getDateTimeForPicker(),
//   endtime: '',
//   name: '',
// })

// 🐶 créé les 4 props 'selectedTracker', 'onAddTracker', 'onDeleteTracker' et 'onUpdateTracker'
// initalise par defaut 🤖 `selectedTracker = newTracker()`
const TrackerEditForm = ({}) => {
  // 🐶 créé un state 'tracker' initialisé avec 'selectedTracker'

  // 🐶 les 4 fonctions qui suivent sont appeler sur un changement de valeur dans le formulaire
  // met à jour le state 'tracker' avec les nouvelle valeur du formulaire
  const handleTrackerName = e => {}
  const handleTrackerStartTime = e => {}
  const handleTrackerEndTime = e => {}
  const handleTrackerCategory = e => {}

  // 🐶 créé une fonction 'handleOnSubmit' qui va appeler 'onAddTracker'
  // ps : n'oublie pas le  e.preventDefault()

  // 🐶 créé une fonction 'handleUpdateTracker' qui va appeler 'onUpdateTracker'

  // 🐶 créé une fonction 'handleDeleteTracker' qui va appeler 'onDeleteTracker'

  // 🐶 créé une fonction 'handleNewTracker' qui va mettre à jour le state tracker
  // avec (newTracker()()

  // 🐶 met à jour le state tracker quand 'selectedTracker' change de valeur.
  // ceci ce produit lors d'un clique sur le tableau par exemple, une nouvelle
  // valeur de 'selectedTracker' arrive et il faut mettre à jour le state.
  // 🤖 utilise 'useEffect'
  // conditionne la mise à jour du tracker si les ids sont differents
  // 🤖 selectedTracker?.id !== tracker.id

  return (
    <>
      {/* 🐶 defini 'handleOnSubmit' sur l'event 'onSubmit' du formulaire */}
      <form className="Form">
        <fieldset>
          <legend>Gestion des Trackers</legend>
          {/* 🐶 créé un 'label' et 'input' type 'text' pour le tracker.name */}
          {/* 🐶 créé un 'label' et 'input' type 'datetime-local' pour le tracker.starttime */}
          {/* 🐶 créé un 'label' et 'input' type 'datetime-local' pour le tracker.endtime */}
          {/* 🐶 créé un 'label' et 'select' 'option' pour le tracker.category */}

          <label>Actions</label>
          <div className="Action">
            {/* 🐶 créé button 'Nouveau Tracker' avec 'onClick' = 'handleNewTracker' */}
            {/* 🐶 créé button 'Ajouter' qui permet de soumettre le formulaire */}
            {/* 🤖 utilise input type="submit"  */}
            {/* 🐶 créé button 'Supprimer' avec 'onClick' = 'handleDeleteTracker' */}
            {/* 🐶 créé button 'Mettre à jour' avec 'onClick' = 'handleUpdateTracker' */}
          </div>
        </fieldset>
      </form>
    </>
  )
}

export {TrackerEditForm}
