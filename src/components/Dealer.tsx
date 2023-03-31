import { useState } from "react";
import clsx from "clsx";
import type { SlotsMode } from "../App";
import About from "./About";
import classes from "./Dealer.module.css";

type DealerProps = {
  mode: SlotsMode;
  setMode: (mode: SlotsMode) => void;
};

function Dealer({ mode, setMode }: DealerProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className={classes.root}>
      <h1 className={classes.title}>Layar Bandar</h1>
      <div className={classes.setting}>
        <label className={classes.label}>Mode</label>
        <div className={classes.groupedButtons}>
          <button
            className={clsx(classes.button, mode === "MISS" && classes.active)}
            onClick={() => setMode("MISS")}
          >
            <span>Miss</span>
          </button>
          <button
            className={clsx(classes.button, mode === "TEASE" && classes.active)}
            onClick={() => setMode("TEASE")}
          >
            <span>Nyaris</span>
          </button>
          <button
            className={clsx(
              classes.button,
              mode === "JACKPOT" && classes.active
            )}
            onClick={() => setMode("JACKPOT")}
          >
            <span>Gacor</span>
          </button>
        </div>
      </div>
      <button onClick={() => setOpen(true)}>Aplikasi apa ini?</button>
      {open && <About onClose={() => setOpen(false)} />}
    </div>
  );
}

export default Dealer;
