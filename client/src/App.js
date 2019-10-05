import React from "react";
import PlayerList from "./components/PlayerList";
import "./App.css";
import { useDarkMode } from "./hooks/useDarkMode";

const App = () => {
  const [isDarkMode, setDarkMode] = useDarkMode(false);

  return (
    <div className="App">
      <button onClick={setDarkMode}>Dark Mode Toggle</button>
      <PlayerList />
    </div>
  );
};

export default App;
