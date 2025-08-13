import React from "react";
import styles from "./pagina290.module.css";

const Pagina290 = () => (
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
        <span>Advices or Suggestions</span>{" "}
        <span className={styles.sectionLabelPt}>
          &nbsp;/&nbsp;Conselhos ou Sugestões:
        </span>
      </div>
      <div className={styles.tableGroup}>
        <div className={styles.tableRow}>
          <div className={styles.pg413Cell}>You</div>
          <div className={styles.pg413Cell + " " + styles.pg413Red}>should</div>
          <div className={styles.pg413Cell}></div>
          <div className={styles.pg413Cell}>eat</div>
          <div className={styles.pg413Cell + " " + styles.pg413Red}>
            more vegetables
          </div>
        </div>
        <div className={styles.tableRow}>
          <div className={styles.pg413Cell}>Você</div>
          <div className={styles.pg413Cell}>deveria</div>
          <div className={styles.pg413Cell}></div>
          <div className={styles.pg413Cell}>comer</div>
          <div className={styles.pg413Cell}>mais vegetais</div>
        </div>
      </div>
      <div className={styles.sectionLabel}>
        <span>Duty</span>{" "}
        <span className={styles.sectionLabelPt}>&nbsp;/&nbsp;Dever:</span>
      </div>
      <div className={styles.tableGroup}>
        <div className={styles.tableRow}>
          <div className={styles.pg413Cell}>We</div>
          <div className={styles.pg413Cell + " " + styles.pg413Red}>should</div>
          <div className={styles.pg413Cell}></div>
          <div className={styles.pg413Cell + " " + styles.pg413Red}>
            respect
          </div>
          <div className={styles.pg413Cell + " " + styles.pg413Red}>
            our teachers
          </div>
        </div>
        <div className={styles.tableRow}>
          <div className={styles.pg413Cell}>Nós</div>
          <div className={styles.pg413Cell}>deveríamos</div>
          <div className={styles.pg413Cell}></div>
          <div className={styles.pg413Cell}>respeitar</div>
          <div className={styles.pg413Cell}>nossos professores</div>
        </div>
      </div>
    </main>
  </div>
);

export default Pagina290;
