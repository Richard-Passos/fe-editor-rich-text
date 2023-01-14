import { useState } from "react";
import IconsBtn from "../components/IconsBtn";
import Textarea from "../components/Textarea";
import styles from "./Editor.module.css";

export default function Editor() {
  const [iframe, setElement] = useState() 
  return (
    <div
      className={styles.containerMain}
      onMouseOver={(e) => setElement(document.querySelector("iframe"))}
    >
      <Textarea/>
      <IconsBtn element={iframe} />
    </div>
  );
}