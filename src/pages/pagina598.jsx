import React, { useEffect } from "react";
import styles from "./pagina598.module.css";

const items = [
  { en: "Kiosk", pt: "Quiosque" },
  { en: "Clothing Store", pt: "Loja de roupas" },
  { en: "Games Stores", pt: "Loja de Jogos" },

  { en: "Food Court", pt: "Praça de alimentação" },
  { en: "Cell Phone Store", pt: "Loja de Celulares" },
  { en: "Shoe Store", pt: "Loja de sapatos" },

  { en: "Bookstore", pt: "Livraria" },
  { en: "Movie Theater", pt: "Cinema" },
  { en: "Fast Food", pt: "Comida rápida" },

  { en: "Sport Store", pt: "Loja de esporte" },
  { en: "Hair salon", pt: "Cabeleireiro" },
  { en: "Electronics Store", pt: "Loja de eletrônicos" },
];

const Pagina598 = ({ onValidar }) => {
  useEffect(() => { onValidar?.(true); }, [onValidar]);

  return (
    <div className={styles.page598__container}>
      <header className={styles.page598__header}>
        <h1 className={styles.page598__title}>
          Types of Stores and Services at the Mall
        </h1>
      </header>

      <main className={styles.page598__main}>
        <section className={styles.page598__grid}>
          {items.map(({ en, pt }, idx) => (
            <article className={styles.page598__card} key={idx}>
              {/* Placeholder da imagem (sem import) */}
              <div className={styles.page598__img} />
              <div className={styles.page598__text}>
                <h4 className={styles.page598__en}>{en}</h4>
                <span className={styles.page598__pt}>{pt}</span>
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Pagina598;
