import React, { useRef, useState } from 'react';
import styles from './pagina269.module.css';
import correctIcon from '../assets/icons/correct_icon.webp';
import wrongIcon from '../assets/icons/wrong_icon.webp';
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import eng1 from '../assets/audios/pg269_audio1e.mp3';
import eng2 from '../assets/audios/pg269_audio2e.mp3';
import eng3 from '../assets/audios/pg269_audio3e.mp3';
import eng4 from '../assets/audios/pg269_audio4e.mp3';
import eng5 from '../assets/audios/pg269_audio5e.mp3';

import pt1 from '../assets/audios/pg269_audio1p.mp3';
import pt2 from '../assets/audios/pg269_audio2p.mp3';
import pt3 from '../assets/audios/pg269_audio3p.mp3';
import pt4 from '../assets/audios/pg269_audio4p.mp3';
import pt5 from '../assets/audios/pg269_audio5p.mp3';

const questions = [
  { scrambled: "a) the / is / fastest / car / this", answer: "this is the fastest car" },
  { scrambled: "b) more / book / interesting / is / this", answer: "this book is more interesting" },
  { scrambled: "c) Mary's / than / her / taller / is / sister", answer: "mary's sister is taller than her" },
  { scrambled: "d) the / comfortable / is / chair / most / this", answer: "this is the most comfortable chair" }
];

const normalize = (str) => str.trim().replace(/\s+/g, ' ').toLowerCase();

const Pagina269 = () => {
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
    const newValues = [...inputValues];
    newValues[index] = value;
    setInputValues(newValues);
  };

  const handleCheckClick = () => {
    const newResults = inputValues.map((input, i) => normalize(input) === normalize(questions[i].answer));
    setResults(newResults);
  };

  const engAudios = [eng1, eng2, eng3, eng4, eng5];
  const ptAudios = [pt1, pt2, pt3, pt4, pt5];

  return (
    <div className={styles.page269__container}>
      <header className={styles.page269__header}>
        <h1><span className={styles.page269__grammarRed}>Grammar</span> - <span className={styles.page269__grammarBold}>Adjectives</span></h1>
      </header>

      <p className={styles.page269__instruction}>
        <strong>2.</strong> Put the words in the correct order:
        <img
          src={eng_audio_icon}
          alt="Play instruction (EN)"
          className={styles.page269__icon}
          onClick={() => playAudio(engAudios[0])}
        />
        <img
          src={ptbr_audio_icon}
          alt="Play instrução (PT)"
          className={styles.page269__icon}
          onClick={() => playAudio(ptAudios[0])}
        />
      </p>

      <div className={styles.page269__questionBox}>
        <main className={styles.page269__main}>
          {questions.map((q, index) => (
            <div key={index} className={styles.page269__question}>
              <div className={styles.page269__sentenceRow}>
                <span>{q.scrambled}</span>
                <input
                  type="text"
                  value={inputValues[index]}
                  onChange={(e) => handleInputChange(e.target.value, index)}
                  className={styles.page269__input}
                />
                {results[index] !== null && (
                  <img
                    src={results[index] ? correctIcon : wrongIcon}
                    alt={results[index] ? "Correct" : "Incorrect"}
                    className={styles.page269__resultIcon}
                  />
                )}
              </div>

              <div className={styles.page269__audioRow}>
                <img
                  src={eng_audio_icon}
                  alt={`Play sentence ${index + 1} (EN)`}
                  className={styles.page269__icon}
                  onClick={() => playAudio(engAudios[index + 1])}
                />
                <img
                  src={ptbr_audio_icon}
                  alt={`Play frase ${index + 1} (PT)`}
                  className={styles.page269__icon}
                  onClick={() => playAudio(ptAudios[index + 1])}
                />
              </div>
            </div>
          ))}
        </main>
      </div>

      <div className={styles.page269__checkContainer}>
        <button className={styles.page269__checkButton} onClick={handleCheckClick}>
          Check
        </button>
      </div>
    </div>
  );
};

export default Pagina269;
