import React from 'react';
import styles from './pagina76.module.css';

const addS = (word, highlightS = true) => {
  const base = word.slice(0, -1);
  const s = word.slice(-1);
  return (
    <span>
      {base}
      {highlightS
        ? <span className={styles["page76__highlight-s"]}>{s}</span>
        : s}
    </span>
  );
};

const cell = (infinitive, third, isRed = false, fullHighlight = false) => (
  <div className={styles["page76__row"]}>
    <span className={isRed ? styles["page76__red-text"] : ""}>{infinitive}</span>
    <span>
      {fullHighlight
        ? <span className={styles["page76__highlight-full"]}>{third}</span>
        : (third.includes(' ') 
            ? <span className={styles["page76__highlight-full"]}>{third}</span>
            : addS(third, !['does', 'finishes', 'goes', 'has'].includes(third))
          )}
    </span>
  </div>
);

const pronouns = (
  <div className={styles["page76__pronoun-group"]}>
    <div className={styles["page76__pronoun--left"]}>
      I <br />We - You - They
    </div>
    <div className={styles["page76__pronoun--right"]}>
      <em>He - She - It</em>
    </div>
  </div>
);

export default function Pagina76() {
  return (
    <div className={styles["page76__container"]}>
      <header className={styles["page76__header"]}>
        <h1 className={styles["page76__grammar-title"]}>Grammar:</h1>
        <h2 className={styles["page76__header--en"]}>Common Main Verbs</h2>
        <h3 className={styles["page76__header--pt"]}>Simple Present - Affirmative Form</h3>
      </header>

      <section className={styles["page76__note"]}>
        <div className={styles["page76__note-title"]}>Uso</div>
        <div className={styles["page76__note-content"]}>
          Para falar de ações cotidianas, hábitos, verdades, fatos, características ou descrever ações em geral.
        </div>
      </section>

      <main className={styles["page76__main"]}>
        {/* A B C */}
        <div className={styles["page76__labels"]}>
          <span className={styles["page76__label--leftA"]}>A</span>
          <span className={styles["page76__label--centerB"]}>B</span>
          <span className={styles["page76__label--rightC"]}>C</span>
        </div>
        <section className={styles["page76__block"]}>
          <div className={styles["page76__columns--3"]}>
            <div className={styles["page76__column"]}>
              {pronouns}
              {cell("ask", "asks", true)}
              {cell("answer", "answers", true)}
              {cell("arrive", "arrives", true)}
            </div>
            <div className={styles["page76__column"]}>
              {pronouns}
              {cell("buy", "buys", true)}
              {cell("bring", "brings", true)}
              {cell("begin", "begins", true)}
            </div>
            <div className={styles["page76__column"]}>
              {pronouns}
              {cell("call", "calls", true)}
              {cell("come", "comes", true)}
              {cell("cook", "cooks", true)}
            </div>
          </div>
        </section>

        <div className={styles["page76__labels"]}>
          <span className={styles["page76__label--leftD"]}>D</span>
          <span className={styles["page76__label--centerE"]}>E</span>
          <span className={styles["page76__label--rightF"]}>F</span>
        </div>
        <section className={styles["page76__block"]}>
          <div className={styles["page76__columns--3"]}>
            <div className={styles["page76__column"]}>
              {pronouns}
              {cell("dance", "dances", true)}
              {cell("do", "does", true, true)}
              {cell("drink", "drinks", true)}
            </div>
            <div className={styles["page76__column"]}>
              {pronouns}
              {cell("eat", "eats", true)}
              {cell("enjoy", "enjoys", true)}
            </div>
            <div className={styles["page76__column"]}>
              {pronouns}
              {cell("to find", "finds", true)}
              {cell("to finish", "finishes", true, true)}
            </div>
          </div>
        </section>

        <div className={styles["page76__labels"]}>
          <span className={styles["page76__label--leftG"]}>G</span>
          <span className={styles["page76__label--centerH"]}>H</span>
          <span className={styles["page76__label--rightL"]}>L</span>
        </div>
        <section className={styles["page76__block"]}>
          <div className={styles["page76__columns--3"]}>
            <div className={styles["page76__column"]}>
              {pronouns}
              {cell("go", "goes", true, true)}
              {cell("give", "gives", true)}
              {cell("get", "gets", true)}
            </div>
            <div className={styles["page76__column"]}>
              {pronouns}
              {cell("have", "has", true, true)}
              {cell("help", "helps", true)}
              {cell("hear", "hears", true)}
            </div>
            <div className={styles["page76__column"]}>
              {pronouns}
              {cell("like", "likes", true)}
              {cell("live", "lives", true)}
              {cell("look", "looks", true)}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}