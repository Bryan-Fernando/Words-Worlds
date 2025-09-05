import React, { useRef } from "react";
import styles from "./pagina262.module.css";

import audio1 from "../assets/audios/pg262_audio1e.mp3";
import audio2 from "../assets/audios/pg262_audio2e.mp3";
import audio3 from "../assets/audios/pg262_audio3e.mp3";
import audio4 from "../assets/audios/pg262_audio4e.mp3";
import audio5 from "../assets/audios/pg262_audio5e.mp3";
import audio6 from "../assets/audios/pg262_audio6e.mp3";
import audio7 from "../assets/audios/pg262_audio7e.mp3";

import eng_audio_icon from "../assets/icons/eng_audio_icon.webp";

const Pagina262 = () => {
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
      <div className={styles.titleContainer}>
        <span className={styles.grammarText}>Grammar</span>
        <span className={styles.dashText}> - </span>
        <span className={styles.adjectivesText}>Adjectives</span>
      </div>

      <div className={styles.subtitle}>
        <h2>Adjetivos curtos</h2>
        <p>Uma ou duas sílabas ou vogais.</p>
      </div>

      <div className={styles.comparativesContainer}>
        <div className={styles.comparativeSection}>
          <h3 className={styles.sectionTitle}>Comparativo de igualdade</h3>
          <div className={styles.exampleItem}>
            <p className={styles.englishSentence}>
              James is as <span className={styles.redText}>tall</span> as Mary.
              <img
                src={eng_audio_icon}
                alt="Play James is as tall as Mary."
                className={styles.page262__icon}
                onClick={() => playAudio(audio1)}
              />
            </p>
            <p className={styles.translationText}>
              James é tão alto quanto Mary.
            </p>
          </div>
        </div>

        <div className={styles.comparativeSection}>
          <h3 className={styles.sectionTitle}>Comparativo de Superioridade</h3>
          <div className={styles.exampleItem}>
            <p className={styles.englishSentence}>
              Sarah is taller <span className={styles.redText}>than</span> Ana.
              <img
                src={eng_audio_icon}
                alt="Play Sarah is taller than Ana."
                className={styles.page262__icon}
                onClick={() => playAudio(audio2)}
              />
            </p>
            <p className={styles.translationText}>
              Sarah é mais alta do que Ana.
            </p>
          </div>
        </div>

        <div className={styles.comparativeSection}>
          <h3 className={styles.sectionTitle}>Comparativo de inferioridade</h3>
          <div className={styles.exampleItem}>
            <p className={styles.englishSentence}>
              Ana is less tall <span className={styles.redText}>than</span> Sarah.
              <img
                src={eng_audio_icon}
                alt="Play Ana is less tall than Sarah."
                className={styles.page262__icon}
                onClick={() => playAudio(audio3)}
              />
            </p>
            <p className={styles.translationText}>
              Ana é menos alta do que Sarah.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.noteBox}>
        <div className={styles.noteTitle}>Study Notes</div>
        <div className={styles.noteContent}>
          Somente para adjetivos curtos no comparativo de inferioridade podemos
          usar o antônimo (oposto)
          <br />
          <br />
          <strong>Exemplo:</strong>
          <br />
          <span className={styles.translationText1}>
            Diana is shorter than Angelina.
            <img
              src={eng_audio_icon}
              alt="Play Diana is shorter than Angelina."
              className={styles.page262__icon}
              onClick={() => playAudio(audio4)}
            />
          </span>
          <br />
          <span className={styles.translationText}>
            Diana é mais baixa do que Angelina.
          </span>
        </div>
      </div>

      <div className={styles.comparativesContainer}>
        <div className={styles.comparativeSection}>
          <h3 className={styles.sectionTitle}>Superlativo de Superioridade</h3>
          <div className={styles.exampleItem}>
            <p className={styles.englishSentence}>
              Deborah is <span className={styles.redText}>the</span> tallest
              girl in the volleyball team.
              <img
                src={eng_audio_icon}
                alt="Play Deborah is the tallest girl in the volleyball team."
                className={styles.page262__icon}
                onClick={() => playAudio(audio5)}
              />
            </p>
            <p className={styles.translationText}>
              Deborah é a garota mais alta do time de vôlei.
            </p>
          </div>
        </div>

        <div className={styles.comparativeSection}>
          <h3 className={styles.sectionTitle}>Superlativo de inferioridade</h3>
          <div className={styles.exampleItem}>
            <p className={styles.englishSentence}>
              Bia is <span className={styles.redText}>the</span> least tall girl
              in the volleyball team.
              <img
                src={eng_audio_icon}
                alt="Play Bia is the least tall girl in the volleyball team."
                className={styles.page262__icon}
                onClick={() => playAudio(audio6)}
              />
            </p>
            <p className={styles.translationText}>
              Bia é a garota menos alta do time de vôlei.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.noteBox}>
        <div className={styles.noteTitle}>Study Notes</div>
        <div className={styles.noteContent}>
          Somente para adjetivos curtos no superlativo de inferioridade podemos
          usar o antônimo (oposto)
          <br />
          <br />
          <strong>Exemplo:</strong>
          <br />
          Diana is <span className={styles.redText}>the</span> shortest player
          of the team.
          <img
            src={eng_audio_icon}
            alt="Play Diana is the shortest player of the team."
            className={styles.page262__icon}
            onClick={() => playAudio(audio7)}
          />
          <br />
          <span className={styles.translationText}>
            Diana é a jogadora mais baixa do time.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Pagina262;
