import clsx from "clsx";

import { SLOT_ITEMS, SPIN_DURATION_IN_MS } from "./Player";
import classes from "./Slot.module.css";

type SlotProps = {
  index: number;
  number: number;
};

function Slot({ index, number }: SlotProps) {
  const items = SLOT_ITEMS.slice();
  const winningSymbol = items.splice(number, 1)[0];
  const rigged = [...shuffle(items), winningSymbol];

  return (
    <div className={classes.slot}>
      <div
        className={clsx(classes.roll, classes.spin)}
        style={{
          animationDuration: SPIN_DURATION_IN_MS - (4 - index) * 300 + "ms",
        }}
      >
        {rigged.map((s) => (
          <div className={classes.card} key={s}>
            <span>{s}</span>
          </div>
        ))}
        {rigged.map((s) => (
          <div className={classes.card} key={s}>
            <span>{s}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slot;

function shuffle(arr: string[]) {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr;
}
