import React from 'react';

function NameList (props) {
  console.log('cows', props.cows);
  // each <li> will be iterate through the data from GET request and render name as the text to the element
  return (
    <ul className="cows-name-list">
      <li>{props.cows[0]}</li>
    </ul>
  )
}

export default NameList;