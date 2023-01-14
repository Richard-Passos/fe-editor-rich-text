import styles from "./Textarea.module.css";

export default function Textarea() {
  return (
      <div id="body" className={styles.container}>
        <button
          className={styles.btnStart}
          onClick={() => {
            const iframe = document.querySelector("iframe");
            iframe.contentDocument.designMode = "on";
          }}
        >
          START
        </button>
        <iframe title="iframeTextarea" className={styles.textarea}></iframe>
      </div>
    );
  }
