import React from "react";
import styles from "./pagina254.module.css";

const Pagina254 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.pageContainer}>
        <header className={styles.header}>
          <h1 className={styles.headerTitle}>
            <span className={styles.grammarText}>Grammar</span>
            <span className={styles.titleSeparator}> - </span>
            <span className={styles.adjectivesText}>Adjectives</span>
          </h1>
        </header>

        <main className={styles.mainContent}>
          {/* Primeira seção explicativa */}
          <section className={styles.explanationBox}>
            <p>
              <span className={styles.bulletPoint}>•</span>
              <span className={styles.boldText}>
                Adjetivos são palavras que caracterizam os substantivos (seres,
                animais, objetos, etc.)
              </span>
            </p>
            <p className={styles.secondLine}>
              Essa caracterização pode expressar{" "}
              <span className={styles.redText}>
                qualidade, defeito, estado ou condição
              </span>
              .
            </p>
          </section>

          {/* Segunda seção explicativa */}
          <section className={styles.explanationBox}>
            <p>
              <span className={styles.bulletPoint}>•</span>
              Na língua inglesa, os adjetivos são classificados em dois tipos:{" "}
              <span className={styles.redText}>curtos e longos</span>.
            </p>
          </section>

          {/* Seção das tabelas de adjetivos */}
          <section className={styles.adjectivesSection}>
            <div className={styles.adjectivesContainer}>
              {/* Coluna CURTOS */}
              <div className={styles.adjectiveColumn}>
                <div className={styles.columnHeader}>
                  <h3 className={styles.columnTitle}>CURTOS</h3>
                </div>
                <div className={styles.adjectivesList}>
                  <div className={styles.adjectiveRow}>
                    <span className={styles.englishWord}>Happy</span>
                    <span className={styles.portugueseWord}>Feliz</span>
                  </div>
                  <div className={styles.adjectiveRow}>
                    <span className={styles.englishWord}>Sad</span>
                    <span className={styles.portugueseWord}>Triste</span>
                  </div>
                  <div className={styles.adjectiveRow}>
                    <span className={styles.englishWord}>New</span>
                    <span className={styles.portugueseWord}>Novo(a)</span>
                  </div>
                  <div className={styles.adjectiveRow}>
                    <span className={styles.englishWord}>Old</span>
                    <span className={styles.portugueseWord}>Velho(a)</span>
                  </div>
                  <div className={styles.adjectiveRow}>
                    <span className={styles.englishWord}>Tall</span>
                    <span className={styles.portugueseWord}>Alto(a)</span>
                  </div>
                  <div className={styles.adjectiveRow}>
                    <span className={styles.englishWord}>Short</span>
                    <span className={styles.portugueseWord}>Baixo(a)</span>
                  </div>
                  <div className={styles.adjectiveRow}>
                    <span className={styles.englishWord}>Fast</span>
                    <span className={styles.portugueseWord}>Rápido(a)</span>
                  </div>
                  <div className={styles.adjectiveRow}>
                    <span className={styles.englishWord}>Slow</span>
                    <span className={styles.portugueseWord}>Devagar(a)</span>
                  </div>
                  <div className={styles.adjectiveRow}>
                    <span className={styles.englishWord}>Smart</span>
                    <span className={styles.portugueseWord}>Inteligente</span>
                  </div>
                  <div className={styles.adjectiveRow}>
                    <span className={styles.englishWord}>Young</span>
                    <span className={styles.portugueseWord}>Jovem</span>
                  </div>
                </div>
              </div>

              {/* Coluna LONGOS */}
              <div className={styles.adjectiveColumn}>
                <div className={styles.columnHeader}>
                  <h3 className={styles.columnTitle}>LONGOS</h3>
                </div>
                <div className={styles.adjectivesList}>
                  <div className={styles.adjectiveRow}>
                    <span className={styles.englishWord}>Important</span>
                    <span className={styles.portugueseWord}>Importante</span>
                  </div>
                  <div className={styles.adjectiveRow}>
                    <span className={styles.englishWord}>Comfortable</span>
                    <span className={styles.portugueseWord}>Confortável</span>
                  </div>
                  <div className={styles.adjectiveRow}>
                    <span className={styles.englishWord}>Expensive</span>
                    <span className={styles.portugueseWord}>Caro</span>
                  </div>
                  <div className={styles.adjectiveRow}>
                    <span className={styles.englishWord}>Creative</span>
                    <span className={styles.portugueseWord}>Criativo(a)</span>
                  </div>
                  <div className={styles.adjectiveRow}>
                    <span className={styles.englishWord}>Beautiful</span>
                    <span className={styles.portugueseWord}>Bonita</span>
                  </div>
                  <div className={styles.adjectiveRow}>
                    <span className={styles.englishWord}>Difficult</span>
                    <span className={styles.portugueseWord}>Difícil</span>
                  </div>
                  <div className={styles.adjectiveRow}>
                    <span className={styles.englishWord}>Intelligent</span>
                    <span className={styles.portugueseWord}>Inteligente</span>
                  </div>
                  <div className={styles.adjectiveRow}>
                    <span className={styles.englishWord}>Delicious</span>
                    <span className={styles.portugueseWord}>Delicioso(a)</span>
                  </div>
                  <div className={styles.adjectiveRow}>
                    <span className={styles.englishWord}>Generous</span>
                    <span className={styles.portugueseWord}>Generoso(a)</span>
                  </div>
                  <div className={styles.adjectiveRow}>
                    <span className={styles.englishWord}>Interesting</span>
                    <span className={styles.portugueseWord}>Interessante</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Seção NOTA */}
          <div className={styles.noteBox}>
            <div className={styles.noteTitle}>NOTA</div>
            <div className={styles.noteContent}>
              <p>
                São considerados adjetivos curtos palavras de duas sílabas ou
                vogais.
              </p>
              <p>
                São considerados adjetivos longos palavras de mais de duas
                sílabas ou vogais.
              </p>
            </div>
          </div>

          {/* Seção Exceções */}
          <div className={styles.container}>
            <div className={styles.exceptionBox}>
              <div className={styles.title}>
                <em>Exceções:</em> Os seguintes adjetivos têm formas
                irregulares:
              </div>

              <div className={styles.adjectiveRow}>
                <div className={styles.englishGroup}>
                  <span className={styles.firstAdj}>Good</span>
                  <span className={styles.boldAdj}>Better</span>
                  <span className={styles.boldAdj}>Best</span>
                </div>
                <span className={styles.dash}>—</span>
                <span className={styles.translation}>Bom, melhor</span>
              </div>

              <div className={styles.adjectiveRow}>
                <div className={styles.englishGroup}>
                  <span className={styles.firstAdj}>Bad</span>
                  <span className={styles.boldAdj}>Worse</span>
                  <span className={styles.boldAdj}>Worst</span>
                </div>
                <span className={styles.dash}>—</span>
                <span className={styles.translation}>Ruim, pior</span>
              </div>

              <div className={styles.adjectiveRow}>
                <div className={styles.englishGroup}>
                  <span className={styles.firstAdj}>Far</span>
                  <span className={styles.boldAdj}>Farther</span>
                  <span className={styles.boldAdj}>Further</span>
                  <span className={styles.boldAdj}>Furthest</span>
                </div>
                <span className={styles.dash}>—</span>
                <span className={styles.translation}>
                  Longe, mais longe, além, o mais distante
                </span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Pagina254;
