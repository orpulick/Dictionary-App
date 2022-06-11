import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary />
        </main>
        <footer>
          This project was coded by Olivia Pulick.
          <a href="https://github.com/orpulick/Dictionary-App">
            {" "}
            Open-sourced
          </a>{" "}
          by Github. Hosted by Netilfy.
        </footer>
      </div>
    </div>
  );
}
