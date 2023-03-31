import classes from "./About.module.css";

type AboutModalProps = {
  onClose: () => void;
};

export default function AboutModal({ onClose }: AboutModalProps) {
  return (
    <div>
      <p>
        Demo untuk menunjukkan betapa bodohnya aktivitas slot online (sistem
        sudah diatur secara sepihak).
        <br />
      </p>
      <p className={classes.externalLink}>
        <a href="https://www.freepik.com/free-vector/gradient-colorful-technology-background_19250287.htm#query=slot%20background&position=0&from_view=keyword&track=ais">
          Image by pikisuperstar
        </a>{" "}
        on Freepik
        <br />
        Sound Effect from{" "}
        <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=music&amp;utm_content=102137">
          Pixabay
        </a>
      </p>
      <button onClick={onClose}>Tutup</button>
    </div>
  );
}
