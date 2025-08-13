import React from "react";
import styles from "./pagina296.module.css";

const Pagina296 = () => (
  <div className={styles.pageContainer}>
    <header className={styles.header}>
      <h2 className={styles.examplesTitle}>Examples with Question Words</h2>
    </header>
    <main className={styles.mainContent}>
      <section className={styles.grammarSection}>
        <div className={styles.grammarHeaderQuestionWords}>
          <span className={styles.grammarTitle}>Question Words</span>
        </div>
        <div
          className={
            styles.grammarRowQuestionWords + " " + styles.grammarRowHeader
          }
        >
          <span className={styles.questionWordColumn}>
            Palavras
            <br />
            interrogativas
          </span>
          <span>
            Aux.
            <br />
            Verb
          </span>
          <span>Subject</span>
          <span>Verb(s)</span>
          <span>
            Object
            <br />
            Complement
          </span>
        </div>
      </section>
      <div className={styles.tableGroup}>
        <div className={styles.tableRow}>
          <div className={styles.pg413Cell + " " + styles.pg413Red}>What</div>
          <div className={styles.pg413Cell}>should</div>
          <div className={styles.pg413Cell}>I</div>
          <div className={styles.pg413Cell}>do to improve</div>
          <div className={styles.pg413Cell}>my fluency?</div>
        </div>
        <div className={styles.tableRow}>
          <div className={styles.pg413Cell + " " + styles.pg413Red}>Where</div>
          <div className={styles.pg413Cell}>should</div>
          <div className={styles.pg413Cell}>we</div>
          <div className={styles.pg413Cell}>go</div>
          <div className={styles.pg413Cell}>on the weekend?</div>
        </div>
        <div className={styles.tableRow}>
          <div className={styles.pg413Cell + " " + styles.pg413Red}>When</div>
          <div className={styles.pg413Cell}>should</div>
          <div className={styles.pg413Cell}>she</div>
          <div className={styles.pg413Cell}>send</div>
          <div className={styles.pg413Cell}>the report?</div>
        </div>
        <div className={styles.tableRow}>
          <div className={styles.pg413Cell + " " + styles.pg413Red}>Who</div>
          <div className={styles.pg413Cell}>should</div>
          <div className={styles.pg413Cell}>I</div>
          <div className={styles.pg413Cell}>ask</div>
          <div className={styles.pg413Cell}>for help?</div>
        </div>
        <div className={styles.tableRow}>
          <div className={styles.pg413Cell + " " + styles.pg413Red}>Why</div>
          <div className={styles.pg413Cell}>should</div>
          <div className={styles.pg413Cell}>they</div>
          <div className={styles.pg413Cell}>leave</div>
          <div className={styles.pg413Cell}>early?</div>
        </div>
      </div>
    </main>
  </div>
);

export default Pagina296;
