// import logo from "./logo.svg";
import fnf from "./fnf.webp";
import "./App.css";

function App() {
  const mainStyle = {
    backgroundColor: "gray",
    color: "black",
    padding: "0.5rem",
    fontWeight: "bold",
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1
          style={{
            backgroundColor: "whitesmoke",
            color: "black",
            padding: "0.5rem 1rem",
          }}
        >
          Fast and Furious
        </h1>
        <img src={fnf} className="App-logo" alt="logo" />
      </header>
      <main style={mainStyle}>
        <ul>
          <li
            style={{
              listStyleType: "none",
              fontSize: "2rem",
            }}
          >
            Brian O Conner
          </li>
          <li
            style={{
              listStyleType: "none",
              fontSize: "2rem",
            }}
          >
            Vin Diesel
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
