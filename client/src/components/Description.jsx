import React from 'react';

var Description = (props) => {
  let p;

  if (!props.description) {
    p = <p></p>;
  } else {
    p = <p>{props.description}</p>
  }
  return (
    <div className="description">
      {p}
    </div>
  )
}

export default Description;