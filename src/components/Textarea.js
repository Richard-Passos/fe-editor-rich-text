import styles from "./Textarea.module.css";

function Textarea() {
  return (
    <div className={styles.container}>
      <iframe
        onMouseOver={(e) => (e.target.contentDocument.designMode = "on")}
        title="iframeTextarea"
        className={styles.textarea}
      ></iframe>
    </div>
  );
}

export default Textarea;