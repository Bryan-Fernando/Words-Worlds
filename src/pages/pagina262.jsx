import React from "react";
import styles from "./pagina262.module.css";

const pagina262 = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.titleContainer}>
        <span className={styles.grammarText}>Grammar</span>
        <span className={styles.dashText}> - </span>
        <span className={styles.adjectivesText}>Adjectives</span>
      </div>

      <div className={styles.subtitle}>
        <h2>Adjetivos curtos</h2>
        <p>Uma ou duas sílabas ou vogais.</p>
      </div>

      <div className={styles.comparativesContainer}>
        <div className={styles.comparativeSection}>
          <h3 className={styles.sectionTitle}>Comparativo de igualdade</h3>
          <div className={styles.exampleItem}>
            <p className={styles.englishSentence}>
              James is as <span className={styles.redText}>tall</span> as Mary.
            </p>
            <p className={styles.translationText}>
              James é tão alto quanto Mary.
            </p>
          </div>
        </div>

        <div className={styles.comparativeSection}>
          <h3 className={styles.sectionTitle}>Comparativo de Superioridade</h3>
          <div className={styles.exampleItem}>
            <p className={styles.englishSentence}>
              Sarah is taller <span className={styles.redText}>than</span> Ana.
            </p>
            <p className={styles.translationText}>
              Sarah é mais alta do que Ana.
            </p>
          </div>
        </div>

        <div className={styles.comparativeSection}>
          <h3 className={styles.sectionTitle}>Comparativo de inferioridade</h3>
          <div className={styles.exampleItem}>
            <p className={styles.englishSentence}>
              Ana is less tall <span className={styles.redText}>than</span>{" "}
              Sarah.
            </p>
            <p className={styles.translationText}>
              Ana é menos alta do que Sarah.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.noteBox}>
        <div className={styles.noteTitle}>Study Notes</div>
        <div className={styles.noteContent}>
          Somente para adjetivos curtos no comparativo de inferioridade podemos
          usar o antônimo (oposto)
          <br />
          <br />
          <strong>Exemplo:</strong>
          <br />
          <span className={styles.translationText1}>
            Diana is shorter than Angelina.
          </span>
          <br />
          <span className={styles.translationText}>
            Diana é mais baixa do que Angelina.
          </span>
        </div>
      </div>

      <div className={styles.comparativesContainer}>
        <div className={styles.comparativeSection}>
          <h3 className={styles.sectionTitle}>Superlativo de Superioridade</h3>
          <div className={styles.exampleItem}>
            <p className={styles.englishSentence}>
              Deborah is <span className={styles.redText}>the</span>{" "} tallest
              girl in the volleyball team.
            </p>
            <p className={styles.translationText}>
              Deborah é a garota mais alta do time de vôlei.
            </p>
          </div>
        </div>

        <div className={styles.comparativeSection}>
          <h3 className={styles.sectionTitle}>Superlativo de inferioridade</h3>
          <div className={styles.exampleItem}>
            <p className={styles.englishSentence}>
              Bia is <span className={styles.redText}>the</span> least tall girl
              in the volleyball team.
            </p>
            <p className={styles.translationText}>
              Bia é a garota menos alta{" "}
              do time de vôlei.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.noteBox}>
        <div className={styles.noteTitle}>Study Notes</div>
        <div className={styles.noteContent}>
          Somente para adjetivos curtos no superlativo de inferioridade podemos
          usar o antônimo (oposto)
          <br />
          <br />
          <strong>Exemplo:</strong>
          <br />
          Diana is <span className={styles.redText}>the</span> shortest player
          of the team.
          <br />
          <span className={styles.translationText}>
            Diana é a jogadora mais baixa do
            time.
          </span>
        </div>
      </div>
    </div>
  );
};

export default pagina262;
