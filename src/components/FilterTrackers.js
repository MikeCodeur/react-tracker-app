import * as React from 'react'

const FilterTrackers = ({onTextChange}) => {
  const handleChange = e => {
    onTextChange(e.target.value)
  }
  return (
    <div className="component-search-input">
      <h2>Recherche de Trackers</h2>
      <div>
        <input
          type="text"
          placeholder="libéllé du tracker"
          onChange={handleChange}
        ></input>
      </div>
    </div>
  )
}

export {FilterTrackers}
