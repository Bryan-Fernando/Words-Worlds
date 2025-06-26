import React from "react";
import styles from "./pagina256.module.css";

const Pagina256 = () => (
  <div className={styles.mainContent}>
    <div className={styles.titleContainer}>
      <span className={styles.grammarText}>Grammar</span>
      <span className={styles.dashText}>-</span>
      <span className={styles.adjectivesText}>Adjectives</span>
    </div>

    <div className={styles.sectionTitle1}>
      <span className={styles.mredText}>Uso</span> - O{" "}
      <span className={styles.redText}>comparativo de igualdade</span> é usado
      para indicar que duas coisas ou pessoas têm o mesmo grau de uma
      característica
    </div>

    <div className={styles.noteBox}>
      <div className={styles.noteContent}>
        <div className={styles.ponto}>
          O primeiro <span className={styles.redText}>"as"</span> significa{" "}
          <span className={styles.redText}>"tão"</span> e vem antes do adjetivo
          (happy)
        </div>
        <div className={styles.ponto}>
          O segundo <span className={styles.redText}>"as"</span> significa{" "}
          <span className={styles.redText}>"quanto"</span> e vem depois do
          adjetivo
        </div>
        <div className={styles.ponto}>
          Juntos, <span className={styles.redText}>as happyas</span> se traduz
          como: "tão feliz quanto"
        </div>
        <div className={styles.noteContentex}>
          <span className={styles.redText}>Ex:</span>
          <span className={styles.redText}>She is as happy as her sister</span>
          Ela é tão feliz quanto a irmã dela
        </div>
      </div>
    </div>

    <div className={styles.contextmain}>
      <div className={styles.contextBox}>
        <span className={styles.redItalicBold}>
          <div className={styles.ponto}>Forma comparativa (de igualdade)</div>
        </span>
      </div>

      <div className={styles.exampleItem}>
        <div className={styles.englishSentence}>
          <div className={styles.ponto}>
            Aplica-se a mesma regra para{" "}
            <span className={styles.redText}>adjetivos curtos e longos</span>
          </div>
        </div>
      </div>
    </div>

    <div className={styles.comparativesContainer}>
      <div className={styles.comparativeSection}>
        <div className={styles.sectionTitle}>
          <div className={styles.redSquare}></div>
          <span>ADJETIVOS CURTOS</span>
        </div>

        <div className={styles.exampleCard}>
          <div className={styles.exampleItem1}>
            <div className={styles.englishSentence}>
              <span className={styles.blackText}>Sherry is</span>{" "}
              <span className={styles.redText}>as</span>{" "}
              <span className={styles.blackTextUnderlined}>happy</span>{" "}
              <span className={styles.redText}>as</span>{" "}
              <span className={styles.blackText}>
                Vinny, because they are getting married next Friday.
              </span>
            </div>
            <div className={styles.translationText}>
              <span className={styles.blackText}>Sherry está</span>{" "}
              <span className={styles.redText}>tão</span>{" "}
              <span className={styles.blackTextUnderlined}>feliz</span>{" "}
              <span className={styles.redText}>quanto</span>{" "}
              <span className={styles.blackText}>
                Vinny, porque eles vão se casar na próxima sexta-feira.
              </span>
            </div>
          </div>

          <div className={styles.exampleItem1}>
            <div className={styles.englishSentence}>
              <span className={styles.blackText}>John is</span>{" "}
              <span className={styles.redText}>as</span>{" "}
              <span className={styles.blackTextUnderlined}>smart</span>{" "}
              <span className={styles.redText}>as</span>{" "}
              <span className={styles.blackText}>Bell.</span>
            </div>
            <div className={styles.translationText}>
              <span className={styles.blackText}>John é</span>{" "}
              <span className={styles.redText}>tão</span>{" "}
              <span className={styles.blackTextUnderlined}>inteligente</span>{" "}
              <span className={styles.redText}>quanto</span>{" "}
              <span className={styles.blackText}>Bell.</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.comparativeSection}>
        <div className={styles.sectionTitle}>
          <div className={styles.redSquare}></div>
          <span>ADJETIVOS LONGOS</span>
        </div>

        <div className={styles.exampleCard}>
          <div className={styles.exampleItem1}>
            <div className={styles.englishSentence}>
              <span className={styles.blackText}>The couch is</span>{" "}
              <span className={styles.redText}>as</span>{" "}
              <span className={styles.blackTextUnderlined}>comfortable</span>{" "}
              <span className={styles.redText}>as</span>{" "}
              <span className={styles.blackText}>the bed.</span>
            </div>
            <div className={styles.translationText}>
              <span className={styles.blackText}>O sofá é</span>{" "}
              <span className={styles.redText}>tão</span>{" "}
              <span className={styles.blackTextUnderlined}>confortável</span>{" "}
              <span className={styles.redText}>quanto</span>{" "}
              <span className={styles.blackText}>a cama.</span>
            </div>
          </div>

          <div className={styles.exampleItem1}>
            <div className={styles.englishSentence}>
              <span className={styles.blackText}>The movie was</span>{" "}
              <span className={styles.redText}>as</span>{" "}
              <span className={styles.blackTextUnderlined}>interesting</span>{" "}
              <span className={styles.redText}>as</span>{" "}
              <span className={styles.blackText}>the book.</span>
            </div>
            <div className={styles.translationText}>
              <span className={styles.blackText}>O filme foi</span>{" "}
              <span className={styles.redText}>tão</span>{" "}
              <span className={styles.blackTextUnderlined}>interessante</span>{" "}
              <span className={styles.redText}>quanto</span>{" "}
              <span className={styles.blackText}>o livro.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Pagina256;
