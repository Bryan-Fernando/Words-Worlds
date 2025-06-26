import React from "react";
import styles from "./pagina255.module.css";

const TypeLabel = ({ children }) => (
  <div className={styles.typeLabelBox}>
    <span className={styles.typeLabelText}>{children}</span>
  </div>
);

const AdjectiveRow = ({
  adj,
  adjPt,
  comparative,
  comparativePt,
  superlative,
  superlativePt,
  example,
  examplePt,
  isLong,
  type,
}) => (
  <div className={styles.tableRow}>
    <div className={styles.tableCell}>
      {type && <TypeLabel>{type}</TypeLabel>}
    </div>
    <div className={styles.tableCell}>
      <span className={isLong ? styles.englishRed : styles.englishRed}>
        {adj}
      </span>
      <span className={styles.portuguese}>{adjPt}</span>
    </div>
    <div className={styles.tableCell}>
      <span className={isLong ? styles.englishRed : styles.englishRed}>
        {comparative}
      </span>
      <span className={styles.portuguese}>{comparativePt}</span>
    </div>
    <div className={styles.tableCell}>
      <span className={isLong ? styles.englishRed : styles.englishRed}>
        {superlative}
      </span>
      <span className={styles.portuguese}>{superlativePt}</span>
    </div>
    <div className={styles.tableCell}>
      <span className={styles.englishRed}>{example}</span>
      <span className={styles.portuguese}>{examplePt}</span>
    </div>
  </div>
);

const Pagina255 = () => (
  <div className={styles.pageContainer}>
    <div className={styles.header}>
      <span className={styles.grammar}>Grammar</span>{" "}
      <span className={styles.dash}>-</span>{" "}
      <span className={styles.adjectives}>Adjectives</span>
    </div>

    <div className={styles.tableWrapper}>
      <div className={styles.tablemenu}>
        <div className={styles.tableTitle}>Adjective Comparison Chart</div>
        <div className={styles.grammarContent}>
          <div className={styles.grammarRow}>
            <span>Type</span>
            <span>Adj</span>
            <span>Comparative</span>
            <span>Superlative</span>
            <span>Example Sentence</span>
          </div>
        </div>
      </div>

      <div className={styles.tableGrid}>
        <div className={styles.shortAdjectives}>
          {/* Short (1 or 2 syllables) */}
          <AdjectiveRow
            type={
              <>
                Short <b>( 1 or 2 syllables )</b>
              </>
            }
            adj="tall"
            adjPt="alto"
            comparative="taller"
            comparativePt="mais alto"
            superlative="the tallest"
            superlativePt="o mais alto"
            example="She is taller than her brother"
            examplePt="Ela é mais alta que o irmão dela"
          />
          <AdjectiveRow
            adj="cold"
            adjPt="frio"
            comparative="colder"
            comparativePt="mais frio"
            superlative="the coldest"
            superlativePt="o mais frio"
            example="Today is the coldest day"
            examplePt="Hoje é o dia mais frio"
          />
          <AdjectiveRow
            adj="small"
            adjPt="pequeno"
            comparative="smaller"
            comparativePt="menor"
            superlative="the smallest"
            superlativePt="o menor"
            example="This is the smallest box"
            examplePt="Esta é a menor caixa"
          />
          {/* Short (ending in y...) */}
          <AdjectiveRow
            type={
              <>
                Short <b>( ending in y - 1 or 2 vowels )</b>
              </>
            }
            adj="happy"
            adjPt="feliz"
            comparative="happier"
            comparativePt="mais feliz"
            superlative="the happiest"
            superlativePt="o mais feliz"
            example="He is happier now"
            examplePt="Ele está mais feliz agora"
          />
          <AdjectiveRow
            adj="easy"
            adjPt="fácil"
            comparative="easier"
            comparativePt="mais fácil"
            superlative="the easiest"
            superlativePt="o mais fácil"
            example="This is the easiest question"
            examplePt="Esta é a pergunta mais fácil"
          />
          {/* Short (CVC) */}
          <AdjectiveRow
            type={
              <>
                Short <b>( CVC )</b>
              </>
            }
            adj="big"
            adjPt="grande"
            comparative="bigger"
            comparativePt="maior"
            superlative="the biggest"
            superlativePt="o maior"
            example="My dog is bigger than yours"
            examplePt="Meu cachorro é maior que o seu"
          />
          <AdjectiveRow
            adj="hot"
            adjPt="quente"
            comparative="hotter"
            comparativePt="mais quente"
            superlative="the hottest"
            superlativePt="o mais quente"
            example="This is the hottest place"
            examplePt="Este é o lugar mais quente"
          />
        </div>
        <div className={styles.longAdjectives}>
          {/* Long (2+ syllables) */}
          <AdjectiveRow
            type={
              <>
                Long <b>( 2+ syllables or 2+ vowels )</b>
              </>
            }
            adj="beautiful"
            adjPt="bonito"
            comparative="more beautiful"
            comparativePt="mais bonito"
            superlative="the most beautiful"
            superlativePt="o mais bonito"
            example="She is more beautiful than her sister"
            examplePt="Ela é mais bonita que a irmã dela"
            isLong
          />
          <AdjectiveRow
            adj="expensive"
            adjPt="caro"
            comparative="more expensive"
            comparativePt="mais caro"
            superlative="the most expensive"
            superlativePt="o mais caro"
            example="The car is the most expensive here"
            examplePt="O carro é o mais caro aqui"
            isLong
          />
          <AdjectiveRow
            adj="interesting"
            adjPt="interessante"
            comparative="more interesting"
            comparativePt="mais interessante"
            superlative="the most interesting"
            superlativePt="o mais interessante"
            example="The book is more interesting"
            examplePt="O livro é mais interessante"
            isLong
          />
        </div>
      </div>
      <div className={styles.noteBox}>
        <div className={styles.noteTitle}>Nota:</div>
        <ul className={styles.noteList}>
          <li>
            Adjetivos curtos: Adicione &nbsp;{" "}
            <span className={styles.redBold}>er / est</span>
          </li>
          <li>
            Se terminar em &nbsp;<span className={styles.redBold}>y</span>, troque{" "}&nbsp;
            <span className={styles.redBold}>y</span> &nbsp; por{" "}&nbsp;
            <span className={styles.redBold}>i</span>&nbsp; e adicione &nbsp;{" "}
            <span className={styles.redBold}>er / est</span>
          </li>
          <li>
            Se terminar em &nbsp;{" "}
            <span className={styles.redBoldItalic}>
              consoante - vogal - consoante ( cvc )
            </span>
            , duplique a consoante final
          </li>
          <li>
            Adjetivos longos: Use &nbsp;{" "}
            <span className={styles.redBoldItalic}>more / the most</span>
          </li>
        </ul>
      </div>
      <div className={styles.footer}>
        Copyright © 2025 Words & Worlds. All rights reserved.
      </div>
    </div>
  </div>
);

export default Pagina255;
