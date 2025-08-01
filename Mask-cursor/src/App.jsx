import styles from "./App.module.css";
import useMousePosition from "./utils/useMousePosition";
import { motion } from "framer-motion";

function App() {
  const { x, y } = useMousePosition();
  const size = 40;
  return (
    <main className={styles.main}>
      {/* Mask */}
      <motion.div
        className={styles.mask}
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
        }}
        transition={{ type: "tween", ease: "backOut" }}
      >
        <p>
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
