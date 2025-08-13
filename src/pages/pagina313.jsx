import React from "react";
import styles from "./pagina313.module.css";

// importa as imagens reais
import img1 from "../assets/images/pagina313 imagen1.webp";
import img2 from "../assets/images/pagina313 imagen2.webp";

const Pagina313 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <div className={styles.headerSection}>
          <h1 className={styles.examplesTitle}>Examples</h1>
        </div>

        <div className={styles.contentSection}>
          <div className={styles.sectionHeader}>
            <span className={styles.actionText}>
              <span className={styles.numberText}>3.</span> Planned future
              arrangements (with time or date){" "}
              <span className={styles.numberText}>-</span>
            </span>
            <span className={styles.translationText}>
              Compromissos futuros planejados (com horário ou data)
            </span>
          </div>

          {/* Primeiro exemplo */}
          <div className={styles.exampleRow}>
            <div className={styles.textBlock}>
              <p className={styles.englishSentence}>
                We are meeting them at 5 p.m.
              </p>
              <p className={styles.portugueseSentence}>
                Vamos nos encontrar com eles às 17h.
              </p>
            </div>
            <div className={styles.imageBlock}>
              <img
                src={img1}
                alt="Business meeting"
                className={styles.exampleImage}
              />
            </div>
          </div>

          {/* Segundo exemplo */}
          <div className={styles.exampleRow}>
            <div className={styles.imageBlock}>
              <img
                src={img2}
                alt="Airport departure"
                className={styles.exampleImage}
              />
            </div>
            <div className={styles.textBlock}>
              <p className={styles.englishSentence}>
                They are travelling to London at 7:00 a.m.
              </p>
              <p className={styles.portugueseSentence}>
                Eles vão viajar para Londres às 7 hrs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagina313;