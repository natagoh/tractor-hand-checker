import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const CARD_VALUES = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A",
];

enum TrumpSuit {
  Spades = "spades",
  Diamonds = "diamonds",
  Clubs = "clubs",
  Hearts = "hearts",
  None = "none",
}

function App() {
  const [count, setCount] = useState(0);
  const [trumpSuit, setTrumpSuit] = useState(TrumpSuit.None);
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Tractor hand checker</h1>
      <label>
        Trump suit:
        <select
          value={trumpSuit}
          onChange={(e) => setTrumpSuit(e.target.value as TrumpSuit)}
        >
          <option value={TrumpSuit.Spades} key={TrumpSuit.Spades}>
            &spades; Spades
          </option>
          <option value={TrumpSuit.Diamonds} key={TrumpSuit.Diamonds}>
            &diams; Diamonds
          </option>
          <option value={TrumpSuit.Clubs} key={TrumpSuit.Clubs}>
            &clubs; Clubs
          </option>
          <option value={TrumpSuit.Hearts} key={TrumpSuit.Hearts}>
            &hearts; Hearts
          </option>
          <option value={TrumpSuit.None} key={TrumpSuit.None}>
            &#8709; None
          </option>
        </select>
      </label>
      <label>
        Trump number:
        <select name="trump-number">
          {CARD_VALUES.map((num) => (
            <option value={`${num}`} key={`trump-${num}`}>
              {num}
            </option>
          ))}
        </select>
      </label>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
