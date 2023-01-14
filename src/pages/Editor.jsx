import IconsBtn from "../components/IconsBtn";
import Textarea from "../components/Textarea";
import styles from "./Editor.module.css";

export default function Editor() {
  return(
    <div className={styles.containerMain}>
      <Textarea/>
      <IconsBtn/>
    </div>
  )
}