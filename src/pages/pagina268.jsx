import React, { useRef, useState } from 'react';
import styles from './pagina268.module.css';
import correctIcon from '../assets/icons/correct_icon.webp';
import wrongIcon from '../assets/icons/wrong_icon.webp';
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import eng1 from '../assets/audios/pg268_audio1e.mp3';
import eng2 from '../assets/audios/pg268_audio2e.mp3';
import eng3 from '../assets/audios/pg268_audio3e.mp3';
import eng4 from '../assets/audios/pg268_audio4e.mp3';
import eng5 from '../assets/audios/pg268_audio5e.mp3';
import eng6 from '../assets/audios/pg268_audio6e.mp3';
import eng7 from '../assets/audios/pg268_audio7e.mp3';

import pt1 from '../assets/audios/pg268_audio1p.mp3';
import pt2 from '../assets/audios/pg268_audio2p.mp3';
import pt3 from '../assets/audios/pg268_audio3p.mp3';
import pt4 from '../assets/audios/pg268_audio4p.mp3';
import pt5 from '../assets/audios/pg268_audio5p.mp3';
import pt6 from '../assets/audios/pg268_audio6p.mp3';
import pt7 from '../assets/audios/pg268_audio7p.mp3';

const questions = [
  { sentence: "a) John is __________ than Mike. (tall)", answer: "taller than" },
  { sentence: "b) This sofa is __________ than the old one. (comfortable)", answer: "more comfortable than" },
  { sentence: "c) My cat is __________ than yours. (small)", answer: "smaller than" },
  { sentence: "d) She is the __________ student in the class. (intelligent)", answer: "most intelligent" },
  { sentence: "e) That was the __________ movie I've ever seen. (funny)", answer: "funniest" },
  { sentence: "f) This exam is __________ than the last one. (difficult)", answer: "more difficult than" }
];

const normalize = (str) => str.trim().replace(/\s+/g, ' ').toLowerCase();

const Pagina268 = () => {
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
    const evaluatedResults = inputValues.map((input, i) => {
      const userInput = normalize(input);
      const correctAnswer = normalize(questions[i].answer);
      return userInput === correctAnswer;
    });
    setResults(evaluatedResults);
  };

  const engAudios = [eng1, eng2, eng3, eng4, eng5, eng6, eng7];
  const ptAudios = [pt1, pt2, pt3, pt4, pt5, pt6, pt7];

  return (
    <div className={styles.page268__container}>
      <header className={styles.page268__header}>
        <h1>
          <span className={styles.page268__grammarRed}>Grammar</span> - <span className={styles.page268__grammarBold}>Adjectives</span>
        </h1>
      </header>

      <p className={styles.page268__instruction}>
        <strong>1.</strong> Fill in the blanks with the correct form of the adjective:
        <img
          src={eng_audio_icon}
          alt="Play instruction (EN)"
          className={styles.page268__icon}
          onClick={() => playAudio(engAudios[0])}
        />
        <img
          src={ptbr_audio_icon}
          alt="Play instrução (PT)"
          className={styles.page268__icon}
          onClick={() => playAudio(ptAudios[0])}
        />
      </p>

      <div className={styles.page268__questionBox}>
        <main className={styles.page268__main}>
          {questions.map((q, index) => {
            const [beforeBlank, afterBlank] = q.sentence.split('__________');
            const engAudio = engAudios[index + 1];
            const ptAudio = ptAudios[index + 1];

            return (
              <div key={index} className={styles.page268__question}>
                <div className={styles.page268__sentenceRow}>
                  <span>{beforeBlank}</span>
                  <input
                    type="text"
                    value={inputValues[index]}
                    onChange={(e) => handleInputChange(e.target.value, index)}
                    className={styles.page268__input}
                  />
                  <span>{afterBlank}</span>
                  {results[index] !== null && (
                    <img
                      src={results[index] ? correctIcon : wrongIcon}
                      alt={results[index] ? "Correct" : "Incorrect"}
                      className={styles.page268__resultIcon}
                    />
                  )}
                </div>

                <div className={styles.page268__audioRow}>
                  <img
                    src={eng_audio_icon}
                    alt={`Play sentence ${index + 1} (EN)`}
                    className={styles.page268__icon}
                    onClick={() => playAudio(engAudio)}
                  />
                  <img
                    src={ptbr_audio_icon}
                    alt={`Play frase ${index + 1} (PT)`}
                    className={styles.page268__icon}
                    onClick={() => playAudio(ptAudio)}
                  />
                </div>
              </div>
            );
          })}
        </main>
      </div>

      <div className={styles.page268__checkContainer}>
        <button className={styles.page268__checkButton} onClick={handleCheckClick}>
          Check
        </button>
      </div>
    </div>
  );
};

export default Pagina268;
