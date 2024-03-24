import './App.css';
import List from './List';
import React, { useState, useRef } from 'react';

const App = React.memo(() =>{
  const inpRef = useRef(null);
  const [mas, setMas] = useState(["item1 ", "item2 ", "item3 "]);

  const handleClick = () =>{
    inpRef.current.focus();
  }

  const handlekeyDown = (event) =>{
    if(event.key === "Enter"){
      setMas([...mas, event.target.value + ' ']);
    }
  }
  return (
    <div>
      <input ref={inpRef} onKeyDown={handlekeyDown}></input>
      <button onClick={handleClick}>Фокус</button>
      <List mas ={mas} setMas ={setMas}/>
    </div>
  );
});

export default App;



