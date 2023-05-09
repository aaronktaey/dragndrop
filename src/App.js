import Board from "./Board";
import Square from "./Square";
import Knight from "./Knight";

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Square black>
        <Knight/>
      </Square>
    </div>
  );
}

export default App;
