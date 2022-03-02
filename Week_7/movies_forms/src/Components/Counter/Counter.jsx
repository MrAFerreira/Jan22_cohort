import React, { useState } from 'react';

function Counter(props) {
  const [count, setCount] = useState(0);

  return (
    <div className={props.theme}>
      <h2>Counter</h2>
      <p> You clicked {count} times</p>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}> - </button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}> + </button>
    </div>
  );
}

export default Counter;
