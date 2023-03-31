import { useState } from "react";
import Dealer from "./components/Dealer";
import Player from "./components/Player";
import classes from "./App.module.css";

export type SlotsMode = "MISS" | "TEASE" | "JACKPOT";

function App() {
  const [balance, setBalance] = useState(1000);
  const [mode, setMode] = useState<SlotsMode>("MISS");

  return (
    <div className={classes.root}>
      <main className={classes.main}>
        <Dealer mode={mode} setMode={setMode} />
        <Player mode={mode} />
      </main>
    </div>
  );
}

export default App;
