import React from "react";
import styles from "./pagina259.module.css";

const Pagina259 = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.contentArea}>
        <header className={styles.header}>
          <h1>
            <span className={styles.grammar}>Grammar -</span>{" "}
            <span className={styles.adjectives}>Adjectives</span>
          </h1>
        </header>
        <section className={styles.comparativeSection}>
          <div className={styles.comparativeBlock}>
            <h2 className={styles.comparativeTitle}>Comparativa (de superioridade)</h2>

            <div className={styles.noteBox}>
              <div className={styles.noteTitle}>NOTA</div>
              <div className={styles.noteContent}>
                Escreva a palavra{" "}
                "<span className={styles.noteContenter}>more</span>" adjetivo "<span className={styles.noteContenter}>than</span>".
              </div>
            </div>

            <div className={styles.examples}>
              <h2 className={styles.examplesTitle}>ADJETIVOS LONGOS</h2>
              <div className={styles.exampleItem}>
                <p>
                  <span className={styles.normalText}>Olivia</span>{" "}
                  <span className={styles.normalText}>is</span>{" "}
                  <span className={styles.redText}>more</span>{" "}
                  <span className={styles.underlinedText}>beautiful</span>{" "}
                  <span className={styles.redText}>than</span>{" "}
                  <span className={styles.normalText}>Mary Jane</span>.
                </p>
                <p className={styles.translation}>
                  <span className={styles.normalText}>Olívia</span>{" "}
                  <span className={styles.normalText}>é</span>{" "}
                  <span className={styles.redText}>mais</span>{" "}
                  <span className={styles.underlinedText}>bonita</span>{" "}
                  <span className={styles.redText}>do que</span>{" "}
                  <span className={styles.normalText}>Mary Jane</span>.
                </p>
              </div>
              <div className={styles.exampleItem}>
                <p>
                  <span className={styles.normalText}>Math</span>{" "}
                  <span className={styles.normalText}>is</span>{" "}
                  <span className={styles.redText}>more</span>{" "}
                  <span className={styles.underlinedText}>difficult</span>{" "}
                  <span className={styles.redText}>than</span>{" "}
                  <span className={styles.normalText}>Geography</span>.
                </p>
                <p className={styles.translation}>
                  <span className={styles.normalText}>Matemática</span>{" "}
                  <span className={styles.normalText}>é</span>{" "}
                  <span className={styles.redText}>mais</span>{" "}
                  <span className={styles.underlinedText}>difícil</span>{" "}
                  <span className={styles.redText}>do que</span>{" "}
                  <span className={styles.normalText}>Geografia</span>.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.comparativeBlock}>
            <h2 className={styles.comparativeTitle}>Comparativa (de inferioridade)</h2>

            <div className={styles.noteBox}>
              <div className={styles.noteTitle}>NOTA</div>
              <div className={styles.noteContent}>
                Escreva a palavra{" "}
                "<span className={styles.noteContenter}>less</span>" adjetivo "<span className={styles.noteContenter}>than</span>".
              </div>
            </div>

            <div className={styles.examples}>
              <h2 className={styles.examplesTitle}>ADJETIVOS LONGOS</h2>
              <div className={styles.exampleItem}>
                <p>
                  <span className={styles.normalText}>The sofa</span>{" "}
                  <span className={styles.normalText}>is</span>{" "}
                  <span className={styles.redText}>less</span>{" "}
                  <span className={styles.underlinedText}>comfortable</span>{" "}
                  <span className={styles.redText}>than</span>{" "}
                  <span className={styles.normalText}>the bed</span>.
                </p>
                <p className={styles.translation}>
                  <span className={styles.normalText}>O sofá</span>{" "}
                  <span className={styles.normalText}>é</span>{" "}
                  <span className={styles.redText}>menos</span>{" "}
                  <span className={styles.underlinedText}>confortável</span>{" "}
                  <span className={styles.redText}>do que</span>{" "}
                  <span className={styles.normalText}>a cama</span>.
                </p>
              </div>
              <div className={styles.exampleItem}>
                <p>
                  <span className={styles.normalText}>Geography</span>{" "}
                  <span className={styles.normalText}>is</span>{" "}
                  <span className={styles.redText}>less</span>{" "}
                  <span className={styles.underlinedText}>difficult</span>{" "}
                  <span className={styles.redText}>than</span>{" "}
                  <span className={styles.normalText}>Math</span>.
                </p>
                <p className={styles.translation}>
                  <span className={styles.normalText}>Geografia</span>{" "}
                  <span className={styles.normalText}>é</span>{" "}
                  <span className={styles.redText}>menos</span>{" "}
                  <span className={styles.underlinedText}>difícil</span>{" "}
                  <span className={styles.redText}>do que</span>{" "}
                  <span className={styles.normalText}>matemática</span>.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Pagina259;
