import { useState } from "react";
import clsx from "clsx";
import Dealer from "./components/Dealer";
import Player from "./components/Player";
import classes from "./App.module.css";
import muteImg from "./assets/audio.svg";

export type SlotsMode = "MISS" | "TEASE" | "JACKPOT";

function App() {
  const [mode, setMode] = useState<SlotsMode>("MISS");
  const [muted, setMuted] = useState(false);

  return (
    <div className={classes.root}>
      <main className={classes.main}>
        <Dealer mode={mode} setMode={setMode} />
        <Player mode={mode} muted={muted} />
      </main>
      <button
        className={clsx(classes.muteButton, muted && classes.muted)}
        onClick={() => setMuted(!muted)}
        aria-label="mute"
        aria-pressed={muted ? "true" : "false"}
      >
        <img src={muteImg} alt="audio" />
      </button>
    </div>
  );
}

export default App;
