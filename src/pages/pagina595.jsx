import React, { useEffect } from "react";
import styles from "./pagina595.module.css";

const items = [
  { en: "Refrigerator", pt: "Geladeira" },
  { en: "Stove/Oven", pt: "Fogão/Forno" },
  { en: "Microwave", pt: "Microondas" },
  { en: "Blender", pt: "Liquidificador" },

  { en: "Toaster", pt: "Torradeira" },
  { en: "Coffee Maker", pt: "Cafeteira" },
  { en: "Dishwasher", pt: "Lava-louças" },
  { en: "Kettle", pt: "Chaleira" },

  { en: "Mixer", pt: "Batedeira" },
  { en: "Rice cooker", pt: "Panela elétrica de arroz" },
  { en: "Food processor", pt: "Processador de alimentos" },
  { en: "Electric grill", pt: "Grill elétrico" },

  { en: "Pressure cooker", pt: "Panela de pressão" },
  { en: "Juicer", pt: "Espremedor de frutas" },
  { en: "Waffle maker", pt: "Máquina de waffles" },
  { en: "Can opener", pt: "Abridor de latas" },
];

const Pagina595 = ({ onValidar }) => {
  useEffect(() => { onValidar?.(true); }, [onValidar]);

  return (
    <div className={styles.page595__container}>
      <header className={styles.page595__header}>
        <h1 className={styles.page595__title}>Home appliances</h1>
      </header>

      <main className={styles.page595__main}>
        <section className={styles.page595__grid}>
          {items.map(({ en, pt }, idx) => (
            <article className={styles.page595__card} key={idx}>
              {/* Espaço da imagem (placeholder – sem import) */}
              <div className={styles.page595__img} />
              <div className={styles.page595__text}>
                <h4 className={styles.page595__en}>{en}</h4>
                <span className={styles.page595__pt}>{pt}</span>
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Pagina595;
