import styles from "./App.module.css";
import useMousePosition from "./utils/useMousePosition";
import { motion } from "framer-motion";
import { useState } from "react";
function App() {
  const { x, y } = useMousePosition();
  const [isHovered, setIshovered] = useState(false);
  const size = isHovered ? 400 : 40;
  return (
    <main className={styles.main}>
      {/* Mask */}
      <motion.div
        className={styles.mask}
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut" }}
      >
        <p
          onMouseEnter={() => setIshovered(true)}
          onMouseLeave={() => setIshovered(false)}
        >
          A visual designer with skills that haven't been replaced by AI (yet).
          I make good stuff — only if the paycheck is good.
        </p>
      </motion.div>

      {/* Body */}
      <div className={styles.body}>
        <p>
          I'm a <span>selectively skilled</span> product designer with a strong
          focus on producing high-quality & impactful digital experiences.
        </p>
      </div>
    </main>
  );
}

export default App;
