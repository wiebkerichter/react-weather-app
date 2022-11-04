import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Palma de Mallorca" />
      </div>
      <footer>
        This site was coded by{" "}
        <a href="https://www.linkedin.com/in/wiebkerichter/">Wiebke Richter</a>,
        it´s open-sorced on{" "}
        <a href="https://github.com/wiebkerichter">GitHub</a>
      </footer>
    </div>
  );
}

export default App;
