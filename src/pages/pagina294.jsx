import React from "react";
import styles from "./pagina294.module.css";

const Pagina294 = () => (
  <div className={styles.pageContainer}>
    <header className={styles.header}>
      <h2 className={styles.examplesTitle}>Examples</h2>
    </header>
    <main className={styles.mainContent}>
      <section className={styles.grammarSection}>
        <div className={styles.grammarHeaderInterrogative}>
          <span className={styles.grammarTitle}>Interrogative Form</span>
        </div>
        <div
          className={
            styles.grammarRowInterrogative + " " + styles.grammarRowHeader
          }
        >
          <span>
            Aux.
            <br />
            Verb
          </span>
          <span>Subject</span>
          <span>Adv</span>
          <span>Verb</span>
          <span>
            Object
            <br />
            Complement
          </span>
        </div>
      </section>
      <div className={styles.sectionLabel}>
        <span>Advices or Sugestions</span>{" "}
        <span className={styles.sectionLabelPt}>
          &nbsp;/&nbsp;Conselhos ou Sugestões:
        </span>
      </div>
      <div className={styles.tableGroup}>
        <div className={styles.tableRow}>
          <div className={styles.pg413Cell + " " + styles.pg413Red}>Should</div>
          <div className={styles.pg413Cell + " " + styles.pg413Red}>she</div>
          <div className={styles.pg413Cell}></div>
          <div className={styles.pg413Cell + " " + styles.pg413Red}>study</div>
          <div className={styles.pg413Cell + " " + styles.pg413Red}>
            more for the test?
          </div>
        </div>
        <div className={styles.tableRow}>
          <div className={styles.pg413Cell}></div>
          <div className={styles.pg413Cell}>Ela deveria</div>
          <div className={styles.pg413Cell}></div>
          <div className={styles.pg413Cell}>estudar</div>
          <div className={styles.pg413Cell}>mais para a prova?</div>
        </div>
      </div>
      <div className={styles.sectionLabel}>
        <span>Duty</span>{" "}
        <span className={styles.sectionLabelPt}>&nbsp;/&nbsp;Dever:</span>
      </div>
      <div className={styles.tableGroup}>
        <div className={styles.tableRow}>
          <div className={styles.pg413Cell + " " + styles.pg413Red}>Should</div>
          <div className={styles.pg413Cell + " " + styles.pg413Red}>people</div>
          <div className={styles.pg413Cell}></div>
          <div className={styles.pg413Cell + " " + styles.pg413Red}>recycle</div>
          <div className={styles.pg413Cell + " " + styles.pg413Red}>more?</div>
        </div>
        <div className={styles.tableRow}>
          <div className={styles.pg413Cell}></div>
          <div className={styles.pg413Cell}>As pessoas devem</div>
          <div className={styles.pg413Cell}></div>
          <div className={styles.pg413Cell}>reciclar</div>
          <div className={styles.pg413Cell}>mais?</div>
        </div>
      </div>
    </main>
  </div>
);

export default Pagina294;
