import React, { useEffect } from "react";
import styles from "./pagina601.module.css";

const Pagina601 = ({ onValidar }) => {
  useEffect(() => { onValidar?.(true); }, [onValidar]);

  return (
    <div className={styles.page601__container}>
      <header className={styles.page601__header}>
        <h1 className={styles.page601__title}>Study Note</h1>
      </header>

      <main className={styles.page601__main}>
        <section className={styles.page601__card}>
          <p className={styles.page601__label}>Example:</p>

          <p className={styles.page601__eq}>C = (5/9) × (F − 32)</p>

          <p className={styles.page601__text}>
            Given that <strong>F = 86°F</strong>, we can substitute it into the formula:
          </p>
          <p className={styles.page601__eq}>C = (5/9) × (86 − 32)</p>

          <p className={styles.page601__text}>Now, let&apos;s compute:</p>
          <p className={styles.page601__eq}>C = (5/9) × (54)</p>
          <p className={styles.page601__eq}>C ≈ (5/9) × 54</p>
          <p className={styles.page601__eq}>C ≈ 30</p>

          <p className={styles.page601__result}>
            So, 86°F is approximately equal to 30°C.
          </p>
        </section>
      </main>
    </div>
  );
};

export default Pagina601;
