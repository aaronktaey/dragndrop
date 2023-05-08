const myContainer = {
  "display": "flex",
  "flex-flow": "row wrap",
  "justify-content": "space-between",
  "width": "500px",
}

const myItem = {
  "color": "red",
  "width": "50px",
}

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div style={myContainer}>
        <div style={myItem}>1</div>
        <div style={myItem}>2</div>
        <div style={myItem}>3</div>
        <div style={myItem}>4</div>
        <div style={myItem}>5</div>
        <div style={myItem}>6</div>
        <div style={myItem}>7</div>
        <div style={myItem}>8</div>
        <div style={myItem}>9</div>
        <div style={myItem}>10</div>
      </div>
    </div>
  );
}

export default App;
