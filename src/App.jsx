import { useState } from 'react';
import './App.css'

function App() {
  let [counter, setCounter] = useState(15);

  const addValue = () => {
    setCounter(prevCounter => {
      if (prevCounter < 20) {
        return prevCounter + 1;
      }
      return prevCounter;
    });
  }

  const removeValue = () => {
    setCounter(prevCounter => {
      if (prevCounter > 0) {
        return prevCounter - 1;
      }
      return prevCounter;
    });
  }

  return (
    <>

    <div className="counter-wrapper">
      <div className="counter-container">
      <h1>Number Counter in React</h1>
        <p>counter value: {counter}</p>
        <div className="counter-btns">
            <button className='btn1' onClick={addValue}>Add value</button>
            <button className='btn2' onClick={removeValue}>Remove value</button>
        </div>
      </div>
    </div>

    </>
  )
}

export default App
