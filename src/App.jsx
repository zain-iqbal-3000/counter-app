import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [animation, setAnimation] = useState('');

  useEffect(() => {
    if (animation) {
      const timer = setTimeout(() => setAnimation(''), 300);
      return () => clearTimeout(timer);
    }
  }, [animation]);

  const increment = () => {
    setCount(count + 1);
    setAnimation('increase');
  };
  const decrement = () => {
    if(count > 0){
      setCount(count - 1);
      setAnimation('decrease');
    }
  };
  const reset = () => setCount(0);

  return (
    <div className="App">
        <h1 className={`counter ${animation}`}>{count}</h1>
        <div className="buttons">
          <button onClick={increment} className="button increment">Increment</button>
          <button onClick={decrement} className="button decrement">Decrement</button>
          <button onClick={reset} className="button reset">Reset</button>
        </div>
    </div>
  );
}

export default App;
