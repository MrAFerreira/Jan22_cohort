import React, { useState, useEffect } from 'react';

function Timer() {
  const [count, setCount] = useState(0);

  // useEffect(() => {}, [])
  // useEffect(didUpdate, dependencyArray)

  useEffect(
    () => {
      // Code we want to run
      console.log('mounting');
      const id = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);

      //Only runs on the unmounting phase
      return () => {
        console.log('Unmounting phase');
        clearInterval(id);
      };
    },
    // run code only on mounting phase
    []
  );

  useEffect(() => {
    console.log('useEffect - on update');
    document.title = count;
  }, [count]);

  return (
    <div>
      <h2>Timer</h2>
      <p> {count}</p>
    </div>
  );
}

export default Timer;
