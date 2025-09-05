import React, { useRef } from "react";
import styles from "./pagina255.module.css";

import audio1 from "../assets/audios/pg255_audio1e.mp3";
import audio2 from "../assets/audios/pg255_audio2e.mp3";
import audio3 from "../assets/audios/pg255_audio3e.mp3";
import audio4 from "../assets/audios/pg255_audio4e.mp3";
import audio5 from "../assets/audios/pg255_audio5e.mp3";
import audio6 from "../assets/audios/pg255_audio6e.mp3";
import audio7 from "../assets/audios/pg255_audio7e.mp3";
import audio8 from "../assets/audios/pg255_audio8e.mp3";
import audio9 from "../assets/audios/pg255_audio9e.mp3";
import audio10 from "../assets/audios/pg255_audio10e.mp3";
import audio11 from "../assets/audios/pg255_audio11e.mp3";
import audio12 from "../assets/audios/pg255_audio12e.mp3";
import audio13 from "../assets/audios/pg255_audio13e.mp3";
import audio14 from "../assets/audios/pg255_audio14e.mp3";
import audio15 from "../assets/audios/pg255_audio15e.mp3";
import audio16 from "../assets/audios/pg255_audio16e.mp3";
import audio17 from "../assets/audios/pg255_audio17e.mp3";
import audio18 from "../assets/audios/pg255_audio18e.mp3";
import audio19 from "../assets/audios/pg255_audio19e.mp3";
import audio20 from "../assets/audios/pg255_audio20e.mp3";
import audio21 from "../assets/audios/pg255_audio21e.mp3";
import audio22 from "../assets/audios/pg255_audio22e.mp3";
import audio23 from "../assets/audios/pg255_audio23e.mp3";
import audio24 from "../assets/audios/pg255_audio24e.mp3";
import audio25 from "../assets/audios/pg255_audio25e.mp3";
import audio26 from "../assets/audios/pg255_audio26e.mp3";
import audio27 from "../assets/audios/pg255_audio27e.mp3";
import audio28 from "../assets/audios/pg255_audio28e.mp3";
import audio29 from "../assets/audios/pg255_audio29e.mp3";
import audio30 from "../assets/audios/pg255_audio30e.mp3";
import audio31 from "../assets/audios/pg255_audio31e.mp3";
import audio32 from "../assets/audios/pg255_audio32e.mp3";
import audio33 from "../assets/audios/pg255_audio33e.mp3";
import audio34 from "../assets/audios/pg255_audio34e.mp3";
import audio35 from "../assets/audios/pg255_audio35e.mp3";
import audio36 from "../assets/audios/pg255_audio36e.mp3";
import audio37 from "../assets/audios/pg255_audio37e.mp3";
import audio38 from "../assets/audios/pg255_audio38e.mp3";
import audio39 from "../assets/audios/pg255_audio39e.mp3";
import audio40 from "../assets/audios/pg255_audio40e.mp3";

import eng_audio_icon from "../assets/icons/eng_audio_icon.webp";

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
  adjAudio,
  compAudio,
  superAudio,
  exAudio,
  onPlay,
}) => (
  <div className={styles.tableRow}>
    <div className={styles.tableCell}>{type && <TypeLabel>{type}</TypeLabel>}</div>
    <div className={styles.tableCell}>
      <span className={isLong ? styles.englishRed : styles.englishRed}>
        {adj}
        <img
          src={eng_audio_icon}
          alt={`Play ${adj}`}
          className={styles.page255__icon}
          onClick={() => onPlay(adjAudio)}
        />
      </span>
      <span className={styles.portuguese}>{adjPt}</span>
    </div>
    <div className={styles.tableCell}>
      <span className={isLong ? styles.englishRed : styles.englishRed}>
        {comparative}
        <img
          src={eng_audio_icon}
          alt={`Play ${comparative}`}
          className={styles.page255__icon}
          onClick={() => onPlay(compAudio)}
        />
      </span>
      <span className={styles.portuguese}>{comparativePt}</span>
    </div>
    <div className={styles.tableCell}>
      <span className={isLong ? styles.englishRed : styles.englishRed}>
        {superlative}
        <img
          src={eng_audio_icon}
          alt={`Play ${superlative}`}
          className={styles.page255__icon}
          onClick={() => onPlay(superAudio)}
        />
      </span>
      <span className={styles.portuguese}>{superlativePt}</span>
    </div>
    <div className={styles.tableCell}>
      <span className={styles.englishRed}>
        {example}
        <img
          src={eng_audio_icon}
          alt={`Play ${example}`}
          className={styles.page255__icon}
          onClick={() => onPlay(exAudio)}
        />
      </span>
      <span className={styles.portuguese}>{examplePt}</span>
    </div>
  </div>
);

const Pagina255 = () => {
  const audioRef = useRef(null);

  const playAudio = (file) => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    const a = new Audio(file);
    audioRef.current = a;
    a.play();
  };

  return (
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
              adjAudio={audio1}
              compAudio={audio2}
              superAudio={audio3}
              exAudio={audio4}
              onPlay={playAudio}
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
              adjAudio={audio5}
              compAudio={audio6}
              superAudio={audio7}
              exAudio={audio8}
              onPlay={playAudio}
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
              adjAudio={audio9}
              compAudio={audio10}
              superAudio={audio11}
              exAudio={audio12}
              onPlay={playAudio}
            />
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
              adjAudio={audio13}
              compAudio={audio14}
              superAudio={audio15}
              exAudio={audio16}
              onPlay={playAudio}
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
              adjAudio={audio17}
              compAudio={audio18}
              superAudio={audio19}
              exAudio={audio20}
              onPlay={playAudio}
            />
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
              adjAudio={audio21}
              compAudio={audio22}
              superAudio={audio23}
              exAudio={audio24}
              onPlay={playAudio}
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
              adjAudio={audio25}
              compAudio={audio26}
              superAudio={audio27}
              exAudio={audio28}
              onPlay={playAudio}
            />
          </div>

          <div className={styles.longAdjectives}>
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
              adjAudio={audio29}
              compAudio={audio30}
              superAudio={audio31}
              exAudio={audio32}
              onPlay={playAudio}
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
              adjAudio={audio33}
              compAudio={audio34}
              superAudio={audio35}
              exAudio={audio36}
              onPlay={playAudio}
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
              adjAudio={audio37}
              compAudio={audio38}
              superAudio={audio39}
              exAudio={audio40}
              onPlay={playAudio}
            />
          </div>
        </div>

        <div className={styles.noteBox}>
          <div className={styles.noteTitle}>Nota:</div>
          <ul className={styles.noteList}>
            <li>
              Adjetivos curtos: Adicione <span className={styles.redBold}>er / est</span>
            </li>
            <li>
              Se terminar em <span className={styles.redBold}>y</span>, troque <span className={styles.redBold}>y</span> por <span className={styles.redBold}>i</span> e adicione <span className={styles.redBold}>er / est</span>
            </li>
            <li>
              Se terminar em <span className={styles.redBoldItalic}>consoante - vogal - consoante ( cvc )</span>, duplique a consoante final
            </li>
            <li>
              Adjetivos longos: Use <span className={styles.redBoldItalic}>more / the most</span>
            </li>
          </ul>
        </div>

        <div className={styles.footer}>Copyright © 2025 Words & Worlds. All rights reserved.</div>
      </div>
    </div>
  );
};

export default Pagina255;
