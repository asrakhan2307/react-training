import "./App.css";

function App() {
  const internalStyle = {
    color: "green",
    fontSize: "18px",
    marginTop: "20px",
  };
  return (
    <>
      <div className="container">
        <h1 className="title">
          Welcome to React app styled using external css
        </h1>
        <h1 style={internalStyle}>This heading is styled using internal css</h1>
      </div>
    </>
  );
}

export default App;
