import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAlignCenter,
  faAlignJustify,
  faAlignLeft,
  faAlignRight,
  faBold,
  faItalic,
  faRotateLeft,
  faRotateRight,
  faStrikethrough,
  faUnderline,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./IconsBtn.module.css";

function IconsBtn({ element }) {
  return (
    <div className={styles.containerBtns}>
      <section className={styles.sectionSelect}>
        <select
          onChange={(ev) => {
            element.contentDocument.execCommand(
              "fontName",
              false,
              ev.target.value
            );
          }}
          className={styles.selectTop}
        >
          <option value="Arial">Arial</option>
          <option value="Comic Sans MS">Comic Sans MS</option>
          <option value="Courier">Courier</option>
          <option value="Georgia">Georgia</option>
          <option value="Tahoma">Tahoma</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Verdana">Verdana</option>
        </select>
      </section>

      <div className={styles.alignPadding}>
        <section className={styles.sectionBtns}>
          <button
            onClick={() => {
              element.contentDocument.execCommand("bold");
            }}
            className={styles.btn}
          >
            <FontAwesomeIcon icon={faBold} />
          </button>

          <button
            onClick={() => {
              element.contentDocument.execCommand("strikethrough");
            }}
            className={styles.btn}
          >
            <FontAwesomeIcon icon={faStrikethrough} />
          </button>

          <button
            onClick={() => {
              element.contentDocument.execCommand("underline");
            }}
            className={styles.btn}
          >
            <FontAwesomeIcon icon={faUnderline} />
          </button>

          <button
            onClick={() => {
              element.contentDocument.execCommand("italic");
            }}
            className={styles.btn}
          >
            <FontAwesomeIcon icon={faItalic} />
          </button>
        </section>

        <section className={styles.sectionBtns}>
          <button
            onClick={() => {
              element.contentDocument.execCommand("justifyLeft");
            }}
            className={styles.btn}
          >
            <FontAwesomeIcon icon={faAlignLeft} />
          </button>

          <button
            onClick={() => {
              element.contentDocument.execCommand("justifyRight");
            }}
            className={styles.btn}
          >
            <FontAwesomeIcon icon={faAlignRight} />
          </button>

          <button
            onClick={() => {
              element.contentDocument.execCommand("justifyCenter");
            }}
            className={styles.btn}
          >
            <FontAwesomeIcon icon={faAlignCenter} />
          </button>

          <button
            onClick={() => {
              element.contentDocument.execCommand("justifyFull");
            }}
            className={styles.btn}
          >
            <FontAwesomeIcon icon={faAlignJustify} />
          </button>
        </section>

        <section className={styles.sectionBtns}>
          <button
            onChange={(ev) => {
              const iframe = document.querySelector("iframe");
              iframe.contentDocument.execCommand(
                "foreColor",
                false,
                ev.target.value
              );
            }}
            className={styles.btn}
          >
            <input type="color" name="fontColor" />
          </button>

          <button
            onChange={(ev) => {
              const iframe = document.querySelector("iframe");
              iframe.contentDocument.execCommand(
                "hiliteColor",
                false,
                ev.target.value
              );
            }}
            className={styles.btn}
          >
            <input type="color" name="backgroundColor" />
          </button>

          <button
            onClick={() => {
              element.contentDocument.execCommand("undo")
            }}
            className={styles.btn}
          >
            <FontAwesomeIcon icon={faRotateLeft} />
          </button>

          <button
            onClick={() => {
              element.contentDocument.execCommand("redo");
            }}
            className={styles.btn}
          >
            <FontAwesomeIcon icon={faRotateRight} />
          </button>
        </section>
      </div>

      <section className={styles.sectionSelects}>
        <select
          onChange={(ev) => {
            element.contentDocument.execCommand(
              "formatBlock",
              false,
              ev.target.value
            );
          }}
          className={styles.selects}
        >
          <option value="H1">H1</option>
          <option value="H2">H2</option>
          <option value="H3">H3</option>
          <option value="H4">H4</option>
          <option value="H5">H5</option>
          <option value="H6">H6</option>
        </select>

        <select
          onChange={(ev) => {
            element.contentDocument.execCommand(
              "fontSize",
              false,
              ev.target.value
            );
          }}
          className={styles.selects}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
        </select>
      </section>
    </div>
  );
}

export default IconsBtn