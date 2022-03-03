import './App.css';
import React, { useState } from 'react';

import Counter from './components/Counter/Counter';
import Timer from './components/Timer/Timer';

function App() {
  const [show, setShow] = useState(true);

  return (
    <div className="App">
      <button onClick={() => setShow(!show)}> {show ? 'Hide' : 'Show'} </button>
      {/* {show && <Counter />} */}
      {show && <Timer />}
    </div>
  );
}

export default App;
