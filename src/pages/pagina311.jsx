import React from "react";
import styles from "./pagina311.module.css";

// imagens
import img1 from "../assets/images/pagina311 imagen1.webp";
import img2 from "../assets/images/pagina311 imagen2.webp";
import img3 from "../assets/images/pagina311 imagen3.webp";

const pagina311 = () => {
  return (
    <div className={styles.container}>
      {/* Conteúdo principal */}
      <div className={styles.mainContent}>
        {/* Cabeçalho Examples */}
        <div className={styles.headerSection}>
          <h1 className={styles.examplesTitle}>Examples</h1>
        </div>

        {/* Seção principal com fundo branco */}
        <div className={styles.contentSection}>
          {/* Título da seção */}
          <div className={styles.sectionHeader}>
            <span className={styles.numberText}>1.</span>
            <span className={styles.actionText}>Actions happening now</span>
            <span className={styles.translationText}> - Ações acontecendo agora</span>
          </div>

          {/* Primeiro exemplo - He is fixing the Jeep */}
          <div className={styles.exampleRow}>
            <div className={styles.textBlock}>
              <p className={styles.englishSentence}>He is fixing the Jeep.</p>
              <p className={styles.portugueseSentence}>Ele está consertando o Jeep.</p>
            </div>
            <div className={styles.imageBlock}>
              <img
                src={img1}
                alt="Man fixing a jeep"
                className={styles.exampleImage}
              />
            </div>
          </div>

          {/* Segundo exemplo - They are playing soccer */}
          <div className={styles.exampleRow}>
            <div className={styles.imageBlock}>
              <img
                src={img2}
                alt="People playing soccer"
                className={styles.exampleImage}
              />
            </div>
            <div className={styles.textBlock}>
              <p className={styles.englishSentence}>They are playing soccer.</p>
              <p className={styles.portugueseSentence}>Eles estão jogando futebol.</p>
            </div>
          </div>

          {/* Terceiro exemplo - She is studying */}
          <div className={styles.exampleRow}>
            <div className={styles.textBlock}>
              <p className={styles.englishSentence}>She is studying for her exam.</p>
              <p className={styles.portugueseSentence}>Ela está estudando para a prova.</p>
            </div>
            <div className={styles.imageBlock}>
              <img
                src={img3}
                alt="Woman studying"
                className={styles.exampleImage}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default pagina311;
