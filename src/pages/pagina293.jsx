import React from "react";
import styles from "./pagina293.module.css";

const Pagina293 = () => (
  <div className={styles.pageContainer}>
    <header className={styles.header}>
      <h2 className={styles.examplesTitle}>Examples</h2>
    </header>
    <main className={styles.mainContent}>
      <section className={styles.grammarSection}>
        <div className={styles.grammarHeaderNegative}>
          <span className={styles.grammarTitle}>Negative Form</span>
        </div>
        <div
          className={
            styles.grammarRowNegative + " " + styles.grammarRowHeader
          }
        >
          <span>Subject</span>
          <span>
            Aux.
            <br />
            Verb
          </span>
          <span> <strong>Not</strong> </span>
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
          <div className={styles.pg413Cell + " " + styles.pg413Red}>They</div>
          <div className={styles.pg413Cell + " " + styles.pg413Red}>shouldn't</div>
          <div className={styles.pg413Cell}></div>
          <div className={styles.pg413Cell + " " + styles.pg413Red}>be</div>
          <div className={styles.pg413Cell + " " + styles.pg413Red}>
            home yet
          </div>
        </div>
        <div className={styles.tableRow}>
          <div className={styles.pg413Cell}>Eles / Elas</div>
          <div className={styles.pg413Cell}>não devem</div>
          <div className={styles.pg413Cell}></div>
          <div className={styles.pg413Cell}>estar</div>
          <div className={styles.pg413Cell}>em casa ainda.</div>
        </div>
      </div>
      <div className={styles.sectionLabel}>
        <span>Criticism or Regret</span>{" "}
        <span className={styles.sectionLabelPt}>&nbsp;/&nbsp;Crítica ou Arrependimento:</span>
      </div>
      <div className={styles.tableGroup}>
        <div className={styles.tableRow}>
          <div className={styles.pg413Cell}>It</div>
          <div className={styles.pg413Cell + " " + styles.pg413Red}>shouldn't</div>
          <div className={styles.pg413Cell}></div>
          <div className={styles.pg413Cell + " " + styles.pg413Red}>be</div>
          <div className={styles.pg413Cell + " " + styles.pg413Red}>
            so difficult
          </div>
        </div>
        <div className={styles.tableRow}>
          <div className={styles.pg413Cell}></div>
          <div className={styles.pg413Cell}>Não deveria</div>
          <div className={styles.pg413Cell}></div>
          <div className={styles.pg413Cell}>ser</div>
          <div className={styles.pg413Cell}>tão difícil</div>
        </div>
      </div>
    </main>
  </div>
);

export default Pagina293;