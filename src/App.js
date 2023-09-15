import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('red');
  const newColor = color === 'red' ? 'blue' : 'red';
  const handleClick = () => {
    setColor(newColor);
  };

  return (
    <div>
      <button style={{ backgroundColor: color }} onClick={handleClick}>
        Change to {newColor}
      </button>
    </div>
  );
}
export default App;
