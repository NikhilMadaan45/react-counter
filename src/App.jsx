
import { useState } from 'react';
import './App.css'

function App() {

  let [counter, setCounter] = useState(10);

  const addValue = () => {
    if(counter<20) {
      setCounter(counter+1)
    }
  }

  const subtractValue = () => {
    if(counter>0) {
      setCounter(counter-1)
    }
  }

  return (
    <>
      <h3>Counter value: {counter}</h3>

      <button
        onClick={addValue}
      > 
      {counter >= 20 && <span>You reached the max limit</span>}
      {counter < 20 && <span>Add 1</span>}
      </button>
      <br/>
      <button
        onClick={subtractValue}
      > 
      {counter <= 0 && <span>You reached the min limit</span>}
      {counter > 0 && <span>Subtract 1</span>}
      </button>
      
    </>
  )
}

export default App
