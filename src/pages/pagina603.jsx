import React, { useEffect } from "react";
import styles from "./pagina603.module.css";

const Pagina603 = ({ onValidar }) => {
  useEffect(() => { onValidar?.(true); }, [onValidar]);

  return (
    <div className={styles.page603__container}>
      <header className={styles.page603__header}>
        <h1 className={styles.page603__title}>Study Note</h1>
      </header>

      <main className={styles.page603__main}>
        <section className={styles.page603__card}>
          <p className={styles.page603__label}>Exemplo:</p>

          <p className={styles.page603__eq}>C = (5/9) × (F − 32)</p>

          <p className={styles.page603__text}>
            Dado que <strong>F = 86°F</strong>, podemos substituí-lo na fórmula:
          </p>
          <p className={styles.page603__eq}>C = (5/9) × (86 − 32)</p>

          <p className={styles.page603__text}>Agora, vamos calcular:</p>
          <p className={styles.page603__eq}>C = (5/9) × (54)</p>
          <p className={styles.page603__eq}>C ≈ (5/9) × 54</p>
          <p className={styles.page603__eq}>C ≈ 30</p>

          <p className={styles.page603__result}>
            Portanto, 86°F é aproximadamente igual a 30°C.
          </p>
        </section>
      </main>
    </div>
  );
};

export default Pagina603;
