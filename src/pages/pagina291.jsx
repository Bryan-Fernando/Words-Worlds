import React from "react";
import styles from "./pagina291.module.css";

const Pagina291 = () => (
  <div className={styles.pageContainer}>
    <header className={styles.header}>
      <h2 className={styles.examplesTitle}>Examples</h2>
    </header>
    <main className={styles.mainContent}>
      <section className={styles.grammarSection}>
        <div className={styles.grammarHeaderAffirmative}>
          <span className={styles.grammarTitle}>Affirmative Form</span>
        </div>
        <div
          className={
            styles.grammarRowAffirmative + " " + styles.grammarRowHeader
          }
        >
          <span>Subject</span>
          <span>
            Aux.
            <br />
            Verb
          </span>
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
        <span>Expectations</span>{" "}
        <span className={styles.sectionLabelPt}>
          &nbsp;/&nbsp;Expectativas:
        </span>
      </div>
      <div className={styles.tableGroup}>
        <div className={styles.tableRow}>
          <div className={styles.pg413Cell}>The bus</div>
          <div className={styles.pg413Cell + " " + styles.pg413Red}>should</div>
          <div className={styles.pg413Cell}></div>
          <div className={styles.pg413Cell}>arrive</div>
          <div className={styles.pg413Cell + " " + styles.pg413Red}>
            soon
          </div>
        </div>
        <div className={styles.tableRow}>
          <div className={styles.pg413Cell}>O ônibus</div>
          <div className={styles.pg413Cell}>deve</div>
          <div className={styles.pg413Cell}></div>
          <div className={styles.pg413Cell}>chegar</div>
          <div className={styles.pg413Cell}>em breve</div>
        </div>
      </div>
      <div className={styles.sectionLabel}>
        <span>Criticism or Regret</span>{" "}
        <span className={styles.sectionLabelPt}>&nbsp;/&nbsp;Crítica ou Arrependimento:</span>
      </div>
      <div className={styles.tableGroup}>
        <div className={styles.tableRow}>
          <div className={styles.pg413Cell}>I</div>
          <div className={styles.pg413Cell + " " + styles.pg413Red}>should</div>
          <div className={styles.pg413Cell}></div>
          <div className={styles.pg413Cell + " " + styles.pg413Blue}>
            have studied
          </div>
          <div className={styles.pg413Cell + " " + styles.pg413Red}>
            more for the test
          </div>
        </div>
        <div className={styles.tableRow}>
          <div className={styles.pg413Cell}>Eu</div>
          <div className={styles.pg413Cell}>deveria</div>
          <div className={styles.pg413Cell}></div>
          <div className={styles.pg413Cell}>ter estudado</div>
          <div className={styles.pg413Cell}>mais para o teste / prova</div>
        </div>
      </div>
    </main>
  </div>
);

export default Pagina291;
