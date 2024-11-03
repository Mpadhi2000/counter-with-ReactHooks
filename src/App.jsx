import { useState } from 'react';
import './App.css'

function App() {
let [counter, setCounter] = useState(15);
let addValue_btn1 = document.querySelector('.btn1');
let removeValue_btn2 = document.querySelector('.btn2');
  const addValue = () => {
    counter += 1;
    setCounter(counter);
    if(counter == 20){
      addValue_btn1.disabled = true;
    } else {
      addValue_btn1.disabled = false;
    }
  }

  const removeValue = () => {
    setCounter(counter -= 1);
    if(counter == 0) {
      removeValue_btn2.disabled = true;
    } else {
      removeValue_btn2.disabled = false;
    }
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
