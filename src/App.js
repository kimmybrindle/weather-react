import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <Weather />
      </header>
      <footer>
        This code is{" "}
        <a href="https://github.com/kimmybrindle/weather-react">
          open-sourced on Github
        </a>{" "}
        by Kimmy Brindle.
      </footer>
    </div>
  );
}

export default App;
