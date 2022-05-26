import React from 'react';

function NameList (props) {
  var cowsListItem = props.cows.map(cow => {
    return <li key={cow.id} onClick={() => {props.handleNameClick(cow)}}>{cow.name}</li>
  })
  return (
    <ul className="cows-name-list">Cows List
      {cowsListItem}
    </ul>
  )
}

export default NameList;