import * as React from 'react'

// 🐶 créé 2 props 'filterText' et 'onTextChange'
const FilterTrackers = () => {
  // 🐶 créé une fonction 'handleChange' qui sera appellée par l'événement onChange de l'input
  // Cette fonction appeler ensuite la fonction passée en props 'onTextChange' avec un paramètre, la valeur
  // saisie dans le champs input

  return (
    // 🐶 ajoute la className 'component-search-input' sur cette div
    <div className="component-search-input">
      <h2>Recherche de Trackers</h2>
      <div>
        {/* 🐶 créé un 'input' qui contient la valeur de 'filterText' et qui appelle 'handleChange' sur 'onChange'   */}
      </div>
    </div>
  )
}

export {FilterTrackers}
