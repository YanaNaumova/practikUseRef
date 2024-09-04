import { useRef, useState } from "react";
import styles from "./styles.module.css";

function ToggleText() {
  const textRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);
  // const isVisible = useRef(true);
  const [duration, setDuration] = useState(0.5);

  function handleToggle() {
    const animationDuration = `${duration}s`;
    textRef.current.style.transition = `all ${animationDuration} ease`;
    if (isVisible) {
      textRef.current.style.maxHeight = "0";
      textRef.current.style.opacity = "0";
    } else {
      textRef.current.style.maxHeight = "200px";
      textRef.current.style.opacity = "1";
    }
    setIsVisible(!isVisible);
  }

  function duretionAnimation(event) {
    setDuration(event.target.value);
  }

  return (
    <div className={styles.container}>
      <div className={styles.btnContainer}>
        <button onClick={handleToggle} className={styles.btn}>
          {isVisible ? "Hidden text" : "Show text"}
        </button>
        <input
          className={styles.inputStyles}
          type="number"
          value={duration}
          min="0.1"
          max="0.2"
          style={{ marginLeft: "10px" }}
          onChange={duretionAnimation}
        />
      </div>
      <p ref={textRef} className={styles.textStyle}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit non alias
        adipisci, dignissimos enim perferendis molestias voluptatibus quaerat
        laudantium eaque laborum repudiandae dolorum laboriosam ullam fugit
        harum quae tempore hic? Quod eos doloremque qui. Quo libero laudantium
        fuga, tenetur laborum modi accusamus expedita quisquam possimus
        exercitationem quidem mollitia quasi, accusantium architecto totam
        corrupti. Illum aspernatur perferendis mollitia ad libero nobis. Culpa
        corrupti atque eaque quaerat ea aspernatur magnam a modi fugiat
        veritatis nisi ratione soluta libero facilis sapiente dolor rem ut
        accusantium, molestias alias! Cum, aliquam quidem. Suscipit, fugiat
        nihil. Quos ipsam, minus praesentium eaque voluptate aliquam at
        temporibus. At accusamus culpa amet, esse similique illo, recusandae
        consectetur perferendis totam tempora, optio nobis repudiandae vero ad
        veniam molestiae iusto eaque. Adipisci incidunt magni sed nemo impedit
        sequi quisquam quos quas dignissimos cupiditate illo fuga deserunt
        eveniet molestiae facilis sit, facere voluptatum! Ad obcaecati incidunt
        eum facere fugiat odit exercitationem! Eveniet.
      </p>
    </div>
  );
}
export default ToggleText;
