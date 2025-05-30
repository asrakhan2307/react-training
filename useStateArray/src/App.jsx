import { useState } from 'react'

import './App.css'

function App() {
  const [fruits, setFruits] = useState(["Apple", "Banana"]);
  const addFruit = () => {
    setFruits([...fruits, "Mango"]);
  };
  return (
    <>
      <h2>Fruits:</h2>
      {fruits.map((fruit, index) => (
        <p key={index}>{fruit}</p>
      ))}
      <button onClick={addFruit}>Add Mango</button>
    </>
  );
}

export default App
