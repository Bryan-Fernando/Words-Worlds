import React from 'react';
import styles from './pagina77.module.css';

const addS = (word, highlightS = true) => {
  const base = word.slice(0, -1);
  const s = word.slice(-1);
  return (
    <span>
      {base}
      {highlightS
        ? <span className={styles["page77__highlight-s"]}>{s}</span>
        : s}
    </span>
  );
};

const cell = (infinitive, third, isRed = false, fullHighlight = false) => (
  <div className={styles["page77__row"]}>
    <span className={isRed ? styles["page77__red-text"] : ""}>{infinitive}</span>
    <span>
      {fullHighlight
        ? <span className={styles["page77__highlight-full"]}>{third}</span>
        : (third.includes(' ') 
            ? <span className={styles["page77__highlight-full"]}>{third}</span>
            : addS(third, !['teaches','tries','watches','studies'].includes(third))
          )}
    </span>
  </div>
);

const pronouns = (
  <div className={styles["page77__pronoun-group"]}>
    <div className={styles["page77__pronoun--left"]}>
      I <br />We - You - They
    </div>
    <div className={styles["page77__pronoun--right"]}>
      <em>He - She - It</em>
    </div>
  </div>
);

export default function Pagina77() {
  return (
    <div className={styles["page77__container"]}>
      <header className={styles["page77__header"]}>
        <h1 className={styles["page77__grammar-title"]}>Grammar:</h1>
        <h2 className={styles["page77__header--en"]}>Common Main Verbs</h2>
        <h3 className={styles["page77__header--pt"]}>Simple Present - Affirmative Form</h3>
      </header>

      <main className={styles["page77__main"]}>

        {/* M N O */}
        <div className={styles["page77__labels"]}>
          <span className={styles["page77__label--leftM"]}>M</span>
          <span className={styles["page77__label--centerN"]}>N</span>
          <span className={styles["page77__label--rightO"]}>O</span>
        </div>
        <section className={styles["page77__block"]}>
          <div className={styles["page77__columns--3"]}>
            <div className={styles["page77__column"]}>
              {pronouns}
              {cell("make", "makes", true)}
              {cell("meet", "meets", true)}
            </div>
            <div className={styles["page77__column"]}>
              {pronouns}
              {cell("need", "needs", true)}
            </div>
            <div className={styles["page77__column"]}>
              {pronouns}
              {cell("open", "opens", true)}
            </div>
          </div>
        </section>

        {/* P R S */}
        <div className={styles["page77__labels"]}>
          <span className={styles["page77__label--leftP"]}>P</span>
          <span className={styles["page77__label--centerR"]}>R</span>
          <span className={styles["page77__label--rightS"]}>S</span>
        </div>
        <section className={styles["page77__block"]}>
          <div className={styles["page77__columns--3"]}>
            <div className={styles["page77__column"]}>
              {pronouns}
              {cell("play", "plays", true)}
            </div>
            <div className={styles["page77__column"]}>
              {pronouns}
              {cell("read", "reads", true)}
              {cell("run", "runs", true)}
            </div>
            <div className={styles["page77__column"]}>
              {pronouns}
              {cell("say", "says", true)}
              {cell("see", "sees", true)}
              {cell("sing", "sings", true)}
              {cell("speak", "speaks", true)}
              {cell("study", "studies", true, true)}
            </div>
          </div>
        </section>

        {/* T U W */}
        <div className={styles["page77__labels"]}>
          <span className={styles["page77__label--leftT"]}>T</span>
          <span className={styles["page77__label--centerU"]}>U</span>
          <span className={styles["page77__label--rightW"]}>W</span>
        </div>
        <section className={styles["page77__block"]}>
          <div className={styles["page77__columns--3"]}>
            <div className={styles["page77__column"]}>
              {pronouns}
              {cell("take", "takes", true)}
              {cell("talk", "talks", true)}
              {cell("teach", "teaches", true, true)}
              {cell("think", "thinks", true)}
              {cell("travel", "travels", true)}
              {cell("try", "tries", true, true)}
            </div>
            <div className={styles["page77__column"]}>
              {pronouns}
              {cell("use", "uses", true)}
            </div>
            <div className={styles["page77__column"]}>
              {pronouns}
              {cell("wait", "waits", true)}
              {cell("walk", "walks", true)}
              {cell("want", "wants", true)}
              {cell("watch", "watches", true, true)}
              {cell("work", "works", true)}
              {cell("write", "writes", true)}
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
