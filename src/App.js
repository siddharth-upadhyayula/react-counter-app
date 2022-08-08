import './App.css';
import { useState } from 'react';
function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <h1>Counter App</h1>
      <div className='counter'>
        <h2>{count}</h2>
        <button className='button' value="Increment" onClick={() => setCount(count+1)}>Increment</button>
        <button className='button' value="Decrement" onClick={() => setCount(count-1)} disabled={count===0}>Decrement</button>
        <button className='button' value="Reset" onClick={() => setCount(0)} disabled={count===0}>Reset</button>
      </div>
    </div>
  );
}

export default App;
