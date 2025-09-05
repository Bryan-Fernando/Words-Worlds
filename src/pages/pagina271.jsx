import React, { useRef, useState } from 'react';
import styles from './pagina271.module.css';
import correctIcon from '../assets/icons/correct_icon.webp';
import wrongIcon from '../assets/icons/wrong_icon.webp';
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import eng1 from '../assets/audios/pg271_audio1e.mp3';
import eng2 from '../assets/audios/pg271_audio2e.mp3';
import eng3 from '../assets/audios/pg271_audio3e.mp3';
import eng4 from '../assets/audios/pg271_audio4e.mp3';
import eng5 from '../assets/audios/pg271_audio5e.mp3';
import eng6 from '../assets/audios/pg271_audio6e.mp3';
import eng7 from '../assets/audios/pg271_audio7e.mp3';
import eng8 from '../assets/audios/pg271_audio8e.mp3';
import eng9 from '../assets/audios/pg271_audio9e.mp3';

import pt1 from '../assets/audios/pg271_audio1p.mp3';
import pt2 from '../assets/audios/pg271_audio2p.mp3';
import pt3 from '../assets/audios/pg271_audio3p.mp3';
import pt4 from '../assets/audios/pg271_audio4p.mp3';
import pt5 from '../assets/audios/pg271_audio5p.mp3';
import pt6 from '../assets/audios/pg271_audio6p.mp3';
import pt7 from '../assets/audios/pg271_audio7p.mp3';
import pt8 from '../assets/audios/pg271_audio8p.mp3';
import pt9 from '../assets/audios/pg271_audio9p.mp3';

const questions = [
  { original: "a) This room is big. (bigger)", answer: "this room is bigger." },
  { original: "b) That mountain is high. (the highest)", answer: "that is the highest mountain." },
  { original: "c) She is pretty. (prettier than Anna)", answer: "she is prettier than anna." },
  { original: "d) My phone is good. (the best)", answer: "my phone is the best." }
];

const normalize = (str) => str.trim().replace(/\s+/g, ' ').toLowerCase();

const Pagina271 = () => {
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
    const updated = [...inputValues];
    updated[index] = value;
    setInputValues(updated);
  };

  const handleCheckClick = () => {
    const newResults = inputValues.map((input, i) => normalize(input) === normalize(questions[i].answer));
    setResults(newResults);
  };

  const engAudios = [eng1, eng2, eng3, eng4, eng5, eng6, eng7, eng8, eng9];
  const ptAudios = [pt1, pt2, pt3, pt4, pt5, pt6, pt7, pt8, pt9];

  return (
    <div className={styles.page271__container}>
      <header className={styles.page271__header}>
        <h1>
          <span className={styles.page271__grammarRed}>Grammar</span> - <span className={styles.page271__grammarBold}>Adjectives</span>
        </h1>
      </header>

      <p className={styles.page271__instruction}>
        <strong>4.</strong> Rewrite the sentence using the word in parentheses:
        <img
          src={eng_audio_icon}
          alt="Play instruction (EN)"
          className={styles.page271__icon}
          onClick={() => playAudio(engAudios[0])}
        />
        <img
          src={ptbr_audio_icon}
          alt="Play instrução (PT)"
          className={styles.page271__icon}
          onClick={() => playAudio(ptAudios[0])}
        />
      </p>

      <div className={styles.page271__questionBox}>
        <main className={styles.page271__main}>
          {questions.map((q, index) => {
            const originalEngIndex = 2 * index + 1;
            const answerEngIndex = 2 * index + 2;
            const originalPtIndex = 2 * index + 1;
            const answerPtIndex = 2 * index + 2;

            return (
              <div key={index} className={styles.page271__question}>
                <span className={styles.page271__original}>
                  {q.original}{' '}
                  <img
                    src={eng_audio_icon}
                    alt={`Play original ${index + 1} (EN)`}
                    className={styles.page271__icon}
                    onClick={() => playAudio(engAudios[originalEngIndex])}
                  />
                  <img
                    src={ptbr_audio_icon}
                    alt={`Play original ${index + 1} (PT)`}
                    className={styles.page271__icon}
                    onClick={() => playAudio(ptAudios[originalPtIndex])}
                  />
                </span>

                <div className={styles.page271__inputWrapper}>
                  <input
                    type="text"
                    value={inputValues[index]}
                    onChange={(e) => handleInputChange(e.target.value, index)}
                    className={styles.page271__input}
                  />
                  {results[index] !== null && (
                    <img
                      src={results[index] ? correctIcon : wrongIcon}
                      alt={results[index] ? "Correct" : "Incorrect"}
                      className={styles.page271__resultIcon}
                    />
                  )}
                  <img
                    src={eng_audio_icon}
                    alt={`Play answer ${index + 1} (EN)`}
                    className={styles.page271__icon2}
                    onClick={() => playAudio(engAudios[answerEngIndex])}
                  />
                  <img
                    src={ptbr_audio_icon}
                    alt={`Play resposta ${index + 1} (PT)`}
                    className={styles.page271__icon2}
                    onClick={() => playAudio(ptAudios[answerPtIndex])}
                  />
                </div>
              </div>
            );
          })}
        </main>
      </div>

      <div className={styles.page271__checkContainer}>
        <button className={styles.page271__checkButton} onClick={handleCheckClick}>
          Check
        </button>
      </div>
    </div>
  );
};

export default Pagina271;
