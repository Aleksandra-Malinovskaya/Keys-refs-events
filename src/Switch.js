import './App.css';
import React, { useContext } from 'react';
import ThemeContext from './Context';

const Switch = () => {
  const {theme, toggleTheme } = useContext(ThemeContext);
    
  return (
    <div>
        <h3>Dark/Light</h3>
     <label className="switch">
      <input
        type="checkbox"
        checked={theme}
        onChange={toggleTheme}
      />
      <span className="slider round"></span>
    </label>
    </div>
  );
};

export default Switch;