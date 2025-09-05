import React, { useEffect } from "react";
import styles from "./pagina596.module.css";

const items = [
  { en: "Bed", pt: "Cama" },
  { en: "Mattress", pt: "Colchão" },
  { en: "Wardrobe", pt: "Guarda-roupa" },
  { en: "Table", pt: "Mesa" },

  { en: "Chair", pt: "Cadeira" },
  { en: "Lamp", pt: "Luminária" },
  { en: "Rug", pt: "Tapete" },
  { en: "Mirror", pt: "Espelho" },

  { en: "Bookshelf", pt: "Estante de livros" },
  { en: "Television Set", pt: "Televisão" },
  { en: "Sofa", pt: "Sofá" },
  { en: "Coffee table", pt: "Mesa de centro" },

  { en: "Curtains", pt: "Cortinas" },
  { en: "Fan", pt: "Ventilador" },
  { en: "Armchair", pt: "Poltrona" },
  { en: "Heater", pt: "Aquecedor" },
];

const Pagina596 = ({ onValidar }) => {
  useEffect(() => { onValidar?.(true); }, [onValidar]);

  return (
    <div className={styles.page596__container}>
      <header className={styles.page596__header}>
        <h1 className={styles.page596__title}>Home appliances</h1>
      </header>

      <main className={styles.page596__main}>
        <section className={styles.page596__grid}>
          {items.slice(0, 12).map(({ en, pt }, i) => (
            <article className={styles.page596__card} key={`top-${i}`}>
              <div className={styles.page596__img} />
              <div className={styles.page596__text}>
                <h4 className={styles.page596__en}>{en}</h4>
                <span className={styles.page596__pt}>{pt}</span>
              </div>
            </article>
          ))}

          {/* Badge "UNIT 1" ocupando a linha inteira */}
          <div className={styles.page596__badge}>UNIT 1</div>

          {items.slice(12).map(({ en, pt }, i) => (
            <article className={styles.page596__card} key={`bottom-${i}`}>
              <div className={styles.page596__img} />
              <div className={styles.page596__text}>
                <h4 className={styles.page596__en}>{en}</h4>
                <span className={styles.page596__pt}>{pt}</span>
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Pagina596;
