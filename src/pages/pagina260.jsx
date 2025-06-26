import styles from "./pagina260.module.css";

const Pagina260 = () => {
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
            <h2 className={styles.comparativeTitle}>Forma superlativa (de superioridade)</h2>

            <div className={styles.noteBox}>
              <div className={styles.noteTitle}>NOTA</div>
              <div className={styles.noteContent}>
                Escreva{" "}
                "<span className={styles.noteContenter}>the</span>" + "<span className={styles.noteContenter}>most</span>" + adjetivo.
              </div>
            </div>

            <div className={styles.examples}>
              <h2 className={styles.examplesTitle}>ADJETIVOS LONGOS</h2>
              <div className={styles.exampleItem}>
                <p>
                  <span className={styles.normalText}>Joshua is</span>{" "}
                  <span className={styles.redText}>the most</span>{" "}
                  <span className={styles.underlinedText}>intelligent</span>{" "}
                  <span className={styles.normalText}>student in the classroom</span>.
                </p>
                <p className={styles.translation}>
                  <span className={styles.normalText}>Joshua é o aluno</span>{" "}
                  <span className={styles.redText}>mais</span>{" "}
                  <span className={styles.underlinedText}>inteligente</span>{" "}
                  <span className={styles.normalText}>da sala de aula</span>.
                </p>
              </div>
              <div className={styles.exampleItem}>
                <p>
                  <span className={styles.normalText}>Marian is</span>{" "}
                  <span className={styles.redText}>the most</span>{" "}
                  <span className={styles.underlinedText}>creative</span>{" "}
                  <span className={styles.normalText}>teacher in school</span>.
                </p>
                <p className={styles.translation}>
                  <span className={styles.normalText}>Marian é a professora</span>{" "}
                  <span className={styles.redText}>mais</span>{" "}
                  <span className={styles.underlinedText}>criativa</span>{" "}
                  <span className={styles.normalText}>da escola</span>.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.comparativeBlock}>
            <h2 className={styles.comparativeTitle}>Forma superlativa (de inferioridade)</h2>

            <div className={styles.noteBox}>
              <div className={styles.noteTitle}>NOTA</div>
              <div className={styles.noteContent}>
                Escreva{" "}
                "<span className={styles.noteContenter}>the</span>" + "<span className={styles.noteContenter}>least</span>" + adjetivo.
              </div>
            </div>

            <div className={styles.examples}>
              <h2 className={styles.examplesTitle}>ADJETIVOS LONGOS</h2>
              <div className={styles.exampleItem}>
                <p>
                  <span className={styles.normalText}>Antony is</span>{" "}
                  <span className={styles.redText}>less</span>{" "}
                  <span className={styles.underlinedText}>friendly</span>{" "}
                  <span className={styles.redText}>than</span>{" "}
                  <span className={styles.normalText}>the other co-workers</span>.
                </p>
                <p className={styles.translation}>
                  <span className={styles.normalText}>Antony é</span>{" "}
                  <span className={styles.redText}>menos</span>{" "}
                  <span className={styles.underlinedText}>amigável</span>{" "}
                  <span className={styles.redText}>do que</span>{" "}
                  <span className={styles.normalText}>os outros colegas</span>.
                </p>
              </div>
              <div className={styles.exampleItem}>
                <p>
                  <span className={styles.normalText}>Daniel is</span>{" "}
                  <span className={styles.redText}>less</span>{" "}
                  <span className={styles.underlinedText}>creative</span>{" "}
                  <span className={styles.redText}>than</span>{" "}
                  <span className={styles.normalText}>the other teachers</span>.
                </p>
                <p className={styles.translation}>
                  <span className={styles.normalText}>Daniel é</span>{" "}
                  <span className={styles.redText}>menos</span>{" "}
                  <span className={styles.underlinedText}>criativo</span>{" "}
                  <span className={styles.redText}>do que</span>{" "}
                  <span className={styles.normalText}>os outros professores</span>.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Pagina260;