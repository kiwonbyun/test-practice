import { useState } from 'react';
import './App.css';

export function replaceCamelWithSpace(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

function App() {
  const [color, setColor] = useState('red');
  const [disable, setDisable] = useState(false);
  const newColor = color === 'red' ? 'blue' : 'red';
  const handleClick = () => {
    setColor(newColor);
  };

  const handleClickCheck = (e) => {
    setDisable(e.target.checked);
  };

  return (
    <div>
      <input
        id="disable-controller"
        type="checkbox"
        onChange={handleClickCheck}
      />
      <label htmlFor="disable-controller">Disable button</label>
      <button
        style={{ backgroundColor: disable ? 'gray' : color }}
        onClick={handleClick}
        disabled={disable}
      >
        Change to {newColor}
      </button>
    </div>
  );
}
export default App;
