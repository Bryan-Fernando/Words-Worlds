import React from "react";
import styles from "./pagina295.module.css";

const Pagina295 = () => (
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
        <span>Expectations</span>{" "}
        <span className={styles.sectionLabelPt}>
          &nbsp;/&nbsp;Expectativas:
        </span>
      </div>
      <div className={styles.tableGroup}>
        <div className={styles.tableRow}>
          <div className={styles.pg413Cell + " " + styles.pg413Red}>Should</div>
          <div className={styles.pg413Cell + " " + styles.pg413Red}>we</div>
          <div className={styles.pg413Cell}></div>
          <div className={styles.pg413Cell + " " + styles.pg413Red}>be</div>
          <div className={styles.pg413Cell + " " + styles.pg413Red}>
            there earlier?
          </div>
        </div>
        <div className={styles.tableRow}>
          <div className={styles.pg413Cell}></div>
          <div className={styles.pg413Cell}>Nós deveríamos</div>
          <div className={styles.pg413Cell}></div>
          <div className={styles.pg413Cell}>estar</div>
          <div className={styles.pg413Cell}>lá mais cedo?</div>
        </div>
      </div>
      <div className={styles.sectionLabel}>
        <span>Criticism or Regret</span>{" "}
        <span className={styles.sectionLabelPt}>&nbsp;/&nbsp;Crítica ou Arrependimento:</span>
      </div>
      <div className={styles.tableGroup}>
        <div className={styles.tableRow}>
          <div className={styles.pg413Cell + " " + styles.pg413Red}>Should</div>
          <div className={styles.pg413Cell + " " + styles.pg413Red}>I</div>
          <div className={styles.pg413Cell}></div>
          <div className={styles.pg413Cell + " " + styles.pg413Red}>have spoken</div>
          <div className={styles.pg413Cell + " " + styles.pg413Red}>
            more polite?
          </div>
        </div>
        <div className={styles.tableRow}>
          <div className={styles.pg413Cell}></div>
          <div className={styles.pg413Cell}>Eu deveria</div>
          <div className={styles.pg413Cell}></div>
          <div className={styles.pg413Cell}>ter falado</div>
          <div className={styles.pg413Cell}>de forma mais gentil?</div>
        </div>
      </div>
    </main>
  </div>
);

export default Pagina295;