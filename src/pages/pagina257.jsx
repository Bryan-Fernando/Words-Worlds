import React from "react";
import styles from "./pagina257.module.css";

const Pagina257 = () => (
  <div className={styles.pageContainer}>
    <div className={styles.titleContainer}>
      <span className={styles.grammarText}>Grammar</span>
      <span className={styles.dashText}> - </span>
      <span className={styles.adjectivesText}>Adjectives</span>
    </div>

    <div className={styles.comparativesContainer}>
      <div className={styles.comparativesSection}>
        <div className={styles.comparativeSection}>
          <div className={styles.sectionTitle1}>
            Comparativo (de
            <span className={styles.redText}> superioridade</span>)
          </div>

          <div className={styles.noteBox}>
            <div className={styles.noteTitle}>NOTA</div>
            <div className={styles.noteContent}>
              Acrescente "<span className={styles.noteContenter}>er</span>" ao
              adjetivo.
            </div>
          </div>

          <div className={styles.sectionTitle}>
            <div className={styles.redSquare}></div>
            <span>ADJETIVOS CURTOS</span>
          </div>

          <div className={styles.exampleCard}>
            <div className={styles.exampleItem1}>
              <div className={styles.englishSentence}>
                Matthew is tall<span className={styles.redText}>er than</span> Deborah.
              </div>
              <div className={styles.translationText}>
                Matthew é{" "}
                <span className={styles.redItalicBold}>mais alto do que</span> a Deborah.
              </div>
            </div>

            <div className={styles.exampleItem1}>
              <div className={styles.englishSentence}>
                The yellow car is fast<span className={styles.redText}>er than</span> the blue one.
              </div>
              <div className={styles.translationText}>
                O carro amarelo é{" "}
                <span className={styles.redItalicBold}>mais rápido do que</span> o azul.
              </div>
            </div>
          </div>
        </div>

        <div className={styles.comparativeSection}>
          <div className={styles.sectionTitle1}>
            Comparativo (de
            <span className={styles.redText}> inferioridade</span>)
          </div>

          <div className={styles.noteBox}>
            <div className={styles.noteTitle}>NOTA</div>
            <div className={styles.noteContent}>
              Acrescente "<span className={styles.noteContenter}>er</span>" ao
              adjetivo.
            </div>
          </div>

          <div className={styles.sectionTitle}>
            <div className={styles.redSquare}></div>
            <span>ADJETIVOS CURTOS</span>
          </div>

          <div className={styles.exampleCard}>
            <div className={styles.exampleItem1}>
              <div className={styles.englishSentence}>
                Deborah is short<span className={styles.redText}>er than</span> Matthew.
              </div>
              <div className={styles.translationText}>
                Deborah é{" "}
                <span className={styles.redItalicBold}>mais baixa do que</span> o Matthew.
              </div>
            </div>

            <div className={styles.exampleItem1}>
              <div className={styles.englishSentence}>
                The blue car is slow<span className={styles.redText}>er than</span> the yellow one.
              </div>
              <div className={styles.translationText}>
                O carro azul é{" "}
                <span className={styles.redItalicBold}>mais lento do que</span> o amarelo.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.contextmain}>
        <div className={styles.contextBox}>
          <span className={styles.redItalicBold}>Contexto:</span> Quando ambos
          são altos mas um é um pouco mais alto, podemos usar:
        </div>

        <div className={styles.exampleItem}>
          <div className={styles.englishSentence}>
            "John is a{" "}
            little tall<span className={styles.redText}>er than</span> Pedro."
          </div>
          <div className={styles.translationText}>
            "João é um{" "}
            <span className={styles.redItalicBold}>pouco mais alto do que</span>{" "}
            Pedro."
          </div>
          <div className={styles.noteText}>
            Essa é a forma mais comum, natural e usada no inglês real.
          </div>
        </div>

        <div className={styles.exampleItem}>
          <div className={styles.englishSentence}>
            "Pedro is <span className={styles.redText}>less tall than</span>{" "}
            John."
          </div>
          <div className={styles.translationText}>
            "Pedro é{" "}
            <span className={styles.redItalicBold}>menos alto do que</span>{" "}
            João."
          </div>
          <div className={styles.noteText}>
            Essa é a forma mais comum, natural e usada no inglês real.
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Pagina257;
