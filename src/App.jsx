import Stopwatch from "./components/Stopwatch";
import "./styles/Stopwatch.css";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <header>
        <h1> Stopwatch</h1>
      </header>
      <main>
        <Stopwatch />
      </main>
      <footer>
        <p> &copy; 2024 Stopwatch App</p>
        <p> Task 1</p>
      </footer>
    </div>
  );
};

export default App;
