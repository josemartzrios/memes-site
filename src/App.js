
import './App.css';
import React, {useState} from 'react';

function App() {

  const [number, setNumber] = useState(0)


  const masUno = () => {
    setNumber(number + 1);
  }

  const menosUno = () => {
    setNumber(number - 1);
  }

  

  return <>
      <button onClick={masUno}>+1</button>
      <button onClick={menosUno}>-1</button>

      <span>{number}</span>
  
  </>
  
}

export default App;
