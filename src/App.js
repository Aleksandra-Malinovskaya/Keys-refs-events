import ThemeContext from "./Context";
import Switch from './Switch';
import ThemeProvider from './Provider';
import List from './List';
import React, { useContext, useState, useRef } from 'react';

const App = React.memo(() =>{
  const {theme} = useContext(ThemeContext);
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
      <ThemeProvider>
      <Switch />
      <div style={{
        background: theme === true ? 'black' : 'white',
        color: theme === false ? 'black' : 'white'
      }}>
      <br/>
      <br/>
      <input ref={inpRef} onKeyDown={handlekeyDown}></input>
      <button onClick={handleClick}>Фокус</button>
      <List mas ={mas} setMas ={setMas}/>
      </div>
      </ThemeProvider>
    </div>
  );
});

export default App;



