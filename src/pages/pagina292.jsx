import React from "react";
import styles from "./pagina292.module.css";

const Pagina292 = () => (
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
          <span><strong>Not</strong></span>
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
           <div className={styles.pg413Cell + " " + styles.pg413Red}>He</div>
          <div className={styles.pg413Cell + " " + styles.pg413Red}>should</div>
          <div className={styles.pg413Cell + " " + styles.pg413Red}>not</div>
           <div className={styles.pg413Cell + " " + styles.pg413Red}>drive</div>
          <div className={styles.pg413Cell + " " + styles.pg413Red}>
            so fast
          </div>
        </div>
        <div className={styles.tableRow}>
          <div className={styles.pg413Cell}>Ele</div>
          <div className={styles.pg413Cell}>não deveria</div>
          <div className={styles.pg413Cell}></div>
          <div className={styles.pg413Cell}>dirigir</div>
          <div className={styles.pg413Cell}>tão rápido</div>
        </div>
      </div>
      <div className={styles.sectionLabel}>
        <span>Duty</span>{" "}
        <span className={styles.sectionLabelPt}>&nbsp;/&nbsp;Dever:</span>
      </div>
      <div className={styles.tableGroup}>
        <div className={styles.tableRow}>
          <div className={styles.pg413Cell + " " + styles.pg413Red}>You guys</div>
          <div className={styles.pg413Cell + " " + styles.pg413Red}>should'nt</div>
          <div className={styles.pg413Cell + " " + styles.pg413Red}></div>
          <div className={styles.pg413Cell + " " + styles.pg413Red}>be</div>
          <div className={styles.pg413Cell + " " + styles.pg413Red}>
            late for class
          </div>
        </div>
        <div className={styles.tableRow}>
          <div className={styles.pg413Cell}>Vocês</div>
          <div className={styles.pg413Cell}>não deveriam</div>
          <div className={styles.pg413Cell}></div>
          <div className={styles.pg413Cell}>se atrasar</div>
          <div className={styles.pg413Cell}>para aula</div>
        </div>
      </div>
    </main>
  </div>
);

export default Pagina292;
