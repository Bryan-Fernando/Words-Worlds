import React, { useRef, useState } from 'react';
import styles from './pagina270.module.css';
import correctIcon from '../assets/icons/correct_icon.webp';
import wrongIcon from '../assets/icons/wrong_icon.webp';
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import eng1 from '../assets/audios/pg270_audio1e.mp3';
import eng2 from '../assets/audios/pg270_audio2e.mp3';
import eng3 from '../assets/audios/pg270_audio3e.mp3';
import eng4 from '../assets/audios/pg270_audio4e.mp3';
import eng5 from '../assets/audios/pg270_audio5e.mp3';
import eng6 from '../assets/audios/pg270_audio6e.mp3';

import pt1 from '../assets/audios/pg270_audio1p.mp3';
import pt2 from '../assets/audios/pg270_audio2p.mp3';
import pt3 from '../assets/audios/pg270_audio3p.mp3';
import pt4 from '../assets/audios/pg270_audio4p.mp3';
import pt5 from '../assets/audios/pg270_audio5p.mp3';
import pt6 from '../assets/audios/pg270_audio6p.mp3';

const questions = [
  { sentence: "a) My bike is __________ than yours. Options: faster, fastest, more fast", answer: "faster" },
  { sentence: "b) This book is the __________ of all. Options: interesting, more interesting, most interesting", answer: "most interesting" },
  { sentence: "c) Peter is __________ than David. Options: tall, taller, more tall", answer: "taller" },
  { sentence: "d) That test was __________ than I expected. Options: difficult, more difficult, most difficult", answer: "more difficult" },
  { sentence: "e) This cake is __________. Options: delicious, more delicious, the most delicious", answer: "delicious" }
];

const normalize = (str) => str.trim().replace(/\s+/g, ' ').toLowerCase();

const Pagina270 = () => {
  const [inputValues, setInputValues] = useState(Array(questions.length).fill(''));
  const [results, setResults] = useState(Array(questions.length).fill(null));
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

  const handleInputChange = (value, index) => {
    const updatedValues = [...inputValues];
    updatedValues[index] = value;
    setInputValues(updatedValues);
  };

  const handleCheckClick = () => {
    const evaluatedResults = inputValues.map((input, i) => normalize(input) === normalize(questions[i].answer));
    setResults(evaluatedResults);
  };

  const engAudios = [eng1, eng2, eng3, eng4, eng5, eng6];
  const ptAudios = [pt1, pt2, pt3, pt4, pt5, pt6];

  return (
    <div className={styles.page270__container}>
      <header className={styles.page270__header}>
        <h1><span className={styles.page270__grammarRed}>Grammar</span> - <span className={styles.page270__grammarBold}>Adjectives</span></h1>
      </header>

      <p className={styles.page270__instruction}>
        <strong>3.</strong> Choose the correct option:
        <img
          src={eng_audio_icon}
          alt="Play instruction (EN)"
          className={styles.page270__icon}
          onClick={() => playAudio(engAudios[0])}
        />
        <img
          src={ptbr_audio_icon}
          alt="Play instrução (PT)"
          className={styles.page270__icon}
          onClick={() => playAudio(ptAudios[0])}
        />
      </p>

      <div className={styles.page270__questionBox}>
        <main className={styles.page270__main}>
          {questions.map((q, index) => {
            const [before, after] = q.sentence.split('__________');
            return (
              <div key={index} className={styles.page270__question}>
                <div className={styles.page270__sentenceRow}>
                  <span>{before}</span>
                  <input
                    type="text"
                    value={inputValues[index]}
                    onChange={(e) => handleInputChange(e.target.value, index)}
                    className={styles.page270__input}
                  />
                  <span>{after}</span>
                  {results[index] !== null && (
                    <img
                      src={results[index] ? correctIcon : wrongIcon}
                      alt={results[index] ? "Correct" : "Incorrect"}
                      className={styles.page270__resultIcon}
                    />
                  )}
                </div>
                <div className={styles.page270__audioRow}>
                  <img
                    src={eng_audio_icon}
                    alt={`Play sentence ${index + 1} (EN)`}
                    className={styles.page270__icon}
                    onClick={() => playAudio(engAudios[index + 1])}
                  />
                  <img
                    src={ptbr_audio_icon}
                    alt={`Play frase ${index + 1} (PT)`}
                    className={styles.page270__icon}
                    onClick={() => playAudio(ptAudios[index + 1])}
                  />
                </div>
              </div>
            );
          })}
        </main>
      </div>

      <div className={styles.page270__checkContainer}>
        <button className={styles.page270__checkButton} onClick={handleCheckClick}>
          Check
        </button>
      </div>
    </div>
  );
};

export default Pagina270;
