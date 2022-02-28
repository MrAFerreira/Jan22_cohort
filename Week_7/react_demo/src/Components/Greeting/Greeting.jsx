import React from 'react';

function Greeting(props) {
  console.log(props);
  const message = 'Hello Greg!';
  return (
    <div>
      <u>Hello {props.firstName} </u>
    </div>
  );
}

export default Greeting;
