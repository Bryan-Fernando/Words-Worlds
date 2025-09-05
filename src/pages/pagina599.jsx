import React, { useEffect } from "react";
import styles from "./pagina599.module.css";

const bigItems = [
  { en: "Curtains", pt: "Cortinas" },
  { en: "Coffee machine", pt: "Máquina de café" },
  { en: "Minibar", pt: "Frigobar" },
  { en: "Queen bed / King bed", pt: "Cama Queen / Cama King" },
];

const smallItems = [
  { en: "Hair shampoo and conditioner", pt: "Xampu e condicionador para cabelos" },
  { en: "Lip balm", pt: "Protetor labial" },
  { en: "Shower gel", pt: "Gel de banho" },
  { en: "Bathrobe", pt: "Roupão" },
  { en: "Bath towel", pt: "Toalha de banho" },
  { en: "Blanket", pt: "Cobertor" },
];

const Pagina599 = ({ onValidar }) => {
  useEffect(() => { onValidar?.(true); }, [onValidar]);

  return (
    <div className={styles.page599__container}>
      <header>
        <h1 className={styles.page599__title}>Hotel</h1>
      </header>

      <main className={styles.page599__main}>
        {/* Grid superior (2 colunas) */}
        <section className={styles.page599__grid2}>
          {bigItems.map(({ en, pt }, i) => (
            <article className={styles.page599__card} key={`big-${i}`}>
              <div className={`${styles.page599__img} ${styles.big}`} />
              <div className={styles.page599__text}>
                <h4 className={styles.page599__en}>{en}</h4>
                <span className={styles.page599__pt}>{pt}</span>
              </div>
            </article>
          ))}
        </section>

        {/* Grid inferior (3 colunas) */}
        <section className={styles.page599__grid3}>
          {smallItems.map(({ en, pt }, i) => (
            <article className={styles.page599__card} key={`small-${i}`}>
              <div className={styles.page599__img} />
              <div className={styles.page599__text}>
                <h4 className={styles.page599__en}>{en}</h4>
                <span className={styles.page599__pt}>{pt}</span>
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Pagina599;
