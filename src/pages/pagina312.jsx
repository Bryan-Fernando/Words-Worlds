import React from "react";
import styles from "./pagina312.module.css";

// imagens
import img1 from "../assets/images/pagina312 imagen1.webp";
import img2 from "../assets/images/pagina312 imagen2.webp";
import img3 from "../assets/images/pagina312 imagen3.webp";

const pagina312 = () => {
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
            <span className={styles.numberText}>2.</span>
            <span className={styles.actionText}>Temporary actions or situations</span>
            <span className={styles.translationText}>
              {" "}
              - Ações ou situações temporárias
            </span>
          </div>

          {/* Primeiro exemplo - I'm staying with my cousin */}
          <div className={styles.exampleRow}>
            <div className={styles.imageBlock}>
              <img
                src={img1}
                alt="People camping"
                className={styles.exampleImage}
              />
            </div>
            <div className={styles.textBlock}>
              <p className={styles.englishSentence}>I'm staying with my cousin this week.</p>
              <p className={styles.portugueseSentence}>
                Estou ficando com meu primo esta semana.
              </p>
            </div>
          </div>

          {/* Segundo exemplo - I'm living in New York */}
          <div className={styles.exampleRow}>
            <div className={styles.textBlock}>
              <p className={styles.englishSentence}>I'm living in New York for now.</p>
              <p className={styles.portugueseSentence}>
                Estou morando em Nova York por enquanto.
              </p>
            </div>
            <div className={styles.imageBlock}>
              <img
                src={img2}
                alt="New York street"
                className={styles.exampleImage}
              />
            </div>
          </div>

          {/* Terceiro exemplo - He is working as a waiter */}
          <div className={styles.exampleRow}>
            <div className={styles.imageBlock}>
              <img
                src={img3}
                alt="Waiter working"
                className={styles.exampleImage}
              />
            </div>
            <div className={styles.textBlock}>
              <p className={styles.englishSentence}>
                He is working as a waiter this summer.
              </p>
              <p className={styles.portugueseSentence}>
                Ele está trabalhando como garçom neste verão.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default pagina312;
