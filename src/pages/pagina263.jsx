import React from "react";
import styles from "./pagina263.module.css";

const pagina263 = () => {
  return (
    <div>
      <div className={styles.pg91Container}>
        <header className={styles.pg91Header}>
          <h1>
            <span className={styles.grammar}>Grammar</span>
            <span className={styles.dash}> - </span>
            <span>Adjectives</span>
          </h1>
        </header>
        <main className={styles.pg91Main}>
          <div className={styles.adjectivesContainer}>
            <div className={styles.ingSection}>
              <h2>Que terminam em  <span className={styles.redText}>"ing"</span> </h2>
              <div className={styles.wordList}>
                <div className={styles.englishWords}>
                  <p>amusing</p>
                  <p>annoying</p>
                  <p>boring</p>
                  <p>disappointing</p>
                  <p>exciting</p>
                  <p>interesting</p>
                  <p>frightening</p>
                  <p>tiring</p>
                  <p>shocking</p>
                  <p>surprising</p>
                  <p>worrying</p>
                </div>
                <div className={styles.portugueseWords}>
                  <p>divertido</p>
                  <p>irritante</p>
                  <p>chato</p>
                  <p>decepcionante</p>
                  <p>excitante</p>
                  <p>interessante</p>
                  <p>assustador</p>
                  <p>cansativo</p>
                  <p>chocante</p>
                  <p>surpreendente</p>
                  <p>preocupante</p>
                </div>
              </div>
            </div>
            <div className={styles.edSection}>
              <h2>Que terminam em <span className={styles.redText}>"ed"</span></h2>
              <div className={styles.wordList}>
                <div className={styles.englishWords}>
                  <p>annoyed</p>
                  <p>bored</p>
                  <p>delighted</p>
                  <p>disappointed</p>
                  <p>excited</p>
                  <p>frightened</p>
                  <p>tired</p>
                  <p>worried</p>
                </div>
                <div className={styles.portugueseWords}>
                  <p>aborrecido</p>
                  <p>aborrecido</p>
                  <p>encantado</p>
                  <p>decepcionado</p>
                  <p>excitado</p>
                  <p>assustado</p>
                  <p>cansado</p>
                  <p>preocupado</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default pagina263;
