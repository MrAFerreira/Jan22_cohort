import React from 'react';

function Button(props) {
  return (
    <a href={props.link}>
      <button>{props.text}</button>
    </a>
  );
}

export default Button;
