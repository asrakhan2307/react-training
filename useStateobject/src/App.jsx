import { useState } from "react";

import "./App.css";

function App() {
  const [person, setPerson] = useState({ name: "John" });
  const changeName = () => {
    setPerson({ name: "Harry" });
  };
  return (
    <>
      <div>
        <p>Name: {person.name}</p>
        <button onClick={changeName}>Change Name</button>
      </div>
    </>
  );
}

export default App;
