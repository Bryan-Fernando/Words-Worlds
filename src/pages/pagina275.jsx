import React from "react";
import styles from "./pagina275.module.css";

const Pagina275 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.pageContainer}>
        <header className={styles.header}>
          <h1 className={styles.headerTitle}>
            Grammar - <span className={styles.modalHighlight}>Should</span>
          </h1>
        </header>

        <main className={styles.mainContent}>
          <section className={styles.grammarIntro}>
            <div className={styles.explanationBox}>
              <p>
                <span className={styles.english}>
                  Should is a <strong>modal verb</strong> used to give advice,
                  make recommendations, express expectations, or talk about
                  obligations in a polite or softer way.
                </span>
              </p>
            </div>
            <div
              className={`${styles.explanationBox} ${styles.blueExplanation}`}
            >
              <p>
                <strong>Should</strong> é um{" "}
                <strong>verbo auxiliar/modal</strong>. É usado para dar
                conselhos, fazer recomendações, expressar expectativas ou falar
                sobre obrigações de uma maneira educada, cuja tradução pode ser{" "}
                <strong>deve, devia</strong> ( <strong>mais informal</strong> ) ou{" "}
                <strong>deveria</strong> ( <strong>mais educado</strong> ).
              </p>
            </div>
          </section>

          <section className={styles.grammarSection}>
            <div className={styles.grammarHeader}>
              <h2 className={styles.grammarTitle}>Affirmative Form</h2>
            </div>
            <div className={styles.grammarContent}>
              <div className={styles.grammarRow}>
                <span>Subject</span>
                <span>Aux. Verb</span>
                <span>Adv</span>
                <span>Main Verb</span>
                <span>Object <br/> Complement</span>
              </div>
            </div>
          </section>

          {/* Primeira linha: I */}
          <section className={styles.tableContent}>
            <div className={styles.tableGroup}>
              <div className={styles.tableRow}>
                <div className={styles.pg413Cell}>
                  <span className={styles.pg413Red}>I</span>
                  <span className={styles.pg413Black}>Eu</span>
                </div>
                <div className={styles.pg413Cell}>
                  <span className={styles.pg413Red}>should</span>
                  <span className={styles.pg413Black}>devia / deveria</span>
                </div>
                <div className={styles.pg413Cell}></div>
                <div className={styles.pg413Cell}>
                  <span className={styles.pg413Red}>drink</span>
                  <span className={styles.pg413Black}>beber</span>
                </div>
                <div className={styles.pg413Cell}>
                  <span className={styles.pg413Red}>less coffee</span>
                  <span className={styles.pg413Black}>menos café</span>
                </div>
              </div>
            </div>
            {/* He, She, It */}
            <div className={styles.tableGroup}>
              <div className={styles.tableRow}>
                <div className={styles.pg413Cell}>
                  <span className={styles.pg413Red}>He</span>
                  <span className={styles.pg413Black}>Ele</span>
                </div>
                <div className={styles.pg413Cell}>
                  <span className={styles.pg413Red}>should</span>
                  <span className={styles.pg413Black}>deveria</span>
                </div>
                <div className={styles.pg413Cell}></div>
                <div className={styles.pg413Cell}>
                  <span className={styles.pg413Red}>exercise</span>
                  <span className={styles.pg413Black}>se exercitar</span>
                </div>
                <div className={styles.pg413Cell}>
                  <span className={styles.pg413Red}>regularly</span>
                  <span className={styles.pg413Black}>regularmente</span>
                </div>
              </div>
              <div className={styles.tableRow}>
                <div className={styles.pg413Cell}>
                  <span className={styles.pg413Red}>She</span>
                  <span className={styles.pg413Black}>Ela</span>
                </div>
                <div className={styles.pg413Cell}>
                  <span className={styles.pg413Red}>should</span>
                  <span className={styles.pg413Black}>devia / deveria</span>
                </div>
                <div className={styles.pg413Cell}></div>
                <div className={styles.pg413Cell}>
                  <span className={styles.pg413Red}>finish</span>
                  <span className={styles.pg413Black}>terminar</span>
                </div>
                <div className={styles.pg413Cell}>
                  <span className={styles.pg413Red}>
                    her homework before dinner
                  </span>
                  <span className={styles.pg413Black}>
                    a lição de casa antes do jantar
                  </span>
                </div>
              </div>
              <div className={styles.tableRow}>
                <div className={styles.pg413Cell}>
                  <span className={styles.pg413Red}>It</span>
                  <span className={styles.pg413Black}>Deve</span>
                </div>
                <div className={styles.pg413Cell}>
                  <span className={styles.pg413Red}>should</span>
                </div>
                <div className={styles.pg413Cell}></div>
                <div className={styles.pg413Cell}>
                  <span className={styles.pg413Red}>work</span>
                  <span className={styles.pg413Black}>funcionar</span>
                </div>
                <div className={styles.pg413Cell}>
                  <span className={styles.pg413Red}>fine now</span>
                  <span className={styles.pg413Black}>bem agora</span>
                </div>
              </div>
            </div>
            {/* We, You, They */}
            <div className={styles.tableGroup}>
              <div className={styles.tableRow}>
                <div className={styles.pg413Cell}>
                  <span className={styles.pg413Red}>We</span>
                  <span className={styles.pg413Black}>Nós</span>
                </div>
                <div className={styles.pg413Cell}>
                  <span className={styles.pg413Red}>should</span>
                  <span className={styles.pg413Black}>
                    deveríamos / devemos
                  </span>
                </div>
                <div className={styles.pg413Cell}></div>
                <div className={styles.pg413Cell}>
                  <span className={styles.pg413Red}>clean</span>
                  <span className={styles.pg413Black}>limpar</span>
                </div>
                <div className={styles.pg413Cell}>
                  <span className={styles.pg413Red}>the house today</span>
                  <span className={styles.pg413Black}>a casa hoje</span>
                </div>
              </div>
              <div className={styles.tableRow}>
                <div className={styles.pg413Cell}>
                  <span className={styles.pg413Red}>You</span>
                  <span className={styles.pg413Black}>Você</span>
                </div>
                <div className={styles.pg413Cell}>
                  <span className={styles.pg413Red}>
                    should <span className={styles.sgplBlue}>(sg)</span>
                  </span>
                  <span className={styles.pg413Black}>deveria</span>
                </div>
                <div className={styles.pg413Cell}></div>
                <div className={styles.pg413Cell}>
                  <span className={styles.pg413Red}>call</span>
                  <span className={styles.pg413Black}>ligar</span>
                </div>
                <div className={styles.pg413Cell}>
                  <span className={styles.pg413Red}>your mom</span>
                  <span className={styles.pg413Black}>para sua mãe</span>
                </div>
              </div>
              <div className={styles.tableRow}>
                <div className={styles.pg413Cell}>
                  <span className={styles.pg413Red}>You guys</span>
                  <span className={styles.pg413Black}>Vocês</span>
                </div>
                <div className={styles.pg413Cell}>
                  <span className={styles.pg413Red}>
                    should <span className={styles.sgplBlue}>(pl)</span>
                  </span>
                  <span className={styles.pg413Black}>deveriam</span>
                </div>
                <div className={styles.pg413Cell}></div>
                <div className={styles.pg413Cell}>
                  <span className={styles.pg413Red}>visit</span>
                  <span className={styles.pg413Black}>nos visitar</span>
                </div>
                <div className={styles.pg413Cell}>
                  <span className={styles.pg413Red}>us more often</span>
                  <span className={styles.pg413Black}>com mais frequência</span>
                </div>
              </div>
              <div className={styles.tableRow}>
                <div className={styles.pg413Cell}>
                  <span className={styles.pg413Red}>They</span>
                  <span className={styles.pg413Black}>Eles / Elas</span>
                </div>
                <div className={styles.pg413Cell}>
                  <span className={styles.pg413Red}>should</span>
                  <span className={styles.pg413Black}>devem</span>
                </div>
                <div className={styles.pg413Cell}></div>
                <div className={styles.pg413Cell}>
                  <span className={styles.pg413Red}>start</span>
                  <span className={styles.pg413Black}>começar</span>
                </div>
                <div className={styles.pg413Cell}>
                  <span className={styles.pg413Red}>the project on Monday</span>
                  <span className={styles.pg413Black}>
                    o projeto na Segunda
                  </span>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Pagina275;
