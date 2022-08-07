import './App.css';
import { useState } from 'react';
function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <h1>Counter App</h1>
      <div className='counter'>
        <h2>{count}</h2>
        <button value="Increment" onClick={() => setCount(count+1)}>Increment</button>
        <button value="Decrement" onClick={() => setCount(count-1)}>Decrement</button>
        <button value="Reset" onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}

export default App;
