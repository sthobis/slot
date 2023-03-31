import { useState, useRef, useEffect } from "react";

import Slot from "./Slot";
import Button from "./Button";
import type { SlotsMode } from "../App";
import spinAudio from "../assets/spin.mp3";
import winAudio from "../assets/win.mp3";

import classes from "./Player.module.css";

export const SPIN_DURATION_IN_MS = 4500;

export const SLOT_ITEMS = [
  "🍭",
  "❌",
  "⛄️",
  "🦄",
  "🍌",
  "💩",
  "👻",
  "😻",
  "💵",
  "🤡",
  "🦖",
  "🍎",
  "😂",
  "🖕",
];

type PlayerProps = {
  mode: SlotsMode;
};

function Player({ mode }: PlayerProps) {
  const [spinning, setSpinning] = useState(false);
  const [spinCount, setSpinCount] = useState(0);
  const [rigged, setRigged] = useState([9, 9, 9, 9, 9]);

  const spinAudioRef = useRef<HTMLAudioElement>(null);
  const winAudioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (spinAudioRef.current) {
      spinAudioRef.current.volume = 0.2;
    }
    if (winAudioRef.current) {
      winAudioRef.current.volume = 0.4;
    }
  }, [spinAudioRef.current, winAudioRef.current]);

  const spin = () => {
    const winningNumber = getRandomInt(0, SLOT_ITEMS.length);
    if (mode === "JACKPOT") {
      setRigged([
        winningNumber,
        winningNumber,
        winningNumber,
        winningNumber,
        winningNumber,
      ]);
    } else if (mode === "TEASE") {
      setRigged([
        winningNumber,
        winningNumber,
        winningNumber,
        winningNumber,
        winningNumber === SLOT_ITEMS.length - 1
          ? winningNumber - 1
          : winningNumber + 1,
      ]);
    } else {
      setRigged([1, 2, 3, 4, 5]);
    }
    setTimeout(() => {
      spinAudioRef.current?.play();
    }, 200);
    setSpinning(true);
    setSpinCount(spinCount + 1);
    setTimeout(() => {
      if (mode === "JACKPOT" && winAudioRef.current) {
        winAudioRef.current.currentTime = 0;
        winAudioRef.current.play();
      }
      if (spinAudioRef.current) {
        spinAudioRef.current.pause();
        spinAudioRef.current.currentTime = 0;
      }
    }, SPIN_DURATION_IN_MS - 100);
    setTimeout(() => {
      setSpinning(false);
    }, SPIN_DURATION_IN_MS + 1);
  };

  return (
    <div className={classes.root}>
      <h1 className={classes.title}>Layar Pemain</h1>
      <div key={spinCount} className={classes.slots}>
        {rigged.map((number, i) => (
          <Slot key={i} index={i} number={number} />
        ))}
      </div>
      <Button onClick={spin} disabled={spinning}>
        Spin
      </Button>
      <audio ref={spinAudioRef} src={spinAudio} preload="auto" />
      <audio ref={winAudioRef} src={winAudio} preload="auto" />
    </div>
  );
}

export default Player;

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
