import React, { useState, useEffect, useRef } from 'react';
import styles from './pagina286.module.css';

import correct_icon from '../assets/icons/correct_icon.webp';
import wrong_icon from '../assets/icons/wrong_icon.webp';
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import audio1e from '../assets/audios/pg286_audio1e.mp3';
import audio1p from '../assets/audios/pg286_audio1p.mp3';
import audio2e from '../assets/audios/pg286_audio2e.mp3';
import audio3e from '../assets/audios/pg286_audio3e.mp3';
import audio4e from '../assets/audios/pg286_audio4e.mp3';
import audio5e from '../assets/audios/pg286_audio5e.mp3';
import audio6e from '../assets/audios/pg286_audio6e.mp3';

const Pagina286 = () => {
  const currentAudio = useRef(null);

  const audioMap = {
    pg286_audio1e: audio1e,
    pg286_audio1p: audio1p,
    pg286_audio2e: audio2e,
    pg286_audio3e: audio3e,
    pg286_audio4e: audio4e,
    pg286_audio5e: audio5e,
    pg286_audio6e: audio6e,
  };

  const playAudio = (id) => {
    if (currentAudio.current) {
      currentAudio.current.pause();
      currentAudio.current.currentTime = 0;
    }
    const audio = new Audio(audioMap[id]);
    currentAudio.current = audio;
    audio.play();
  };

  const times = ["3:00", "6:00", "8:00", "7:00", "9:00"];
  const answerOptions = [
    "a) Nine o’clock",
    "b) Eight o’clock",
    "c) Seven o’clock",
    "d) Six o’clock",
    "e) Three o’clock"
  ];
  const correctMatches = ["e", "d", "b", "c", "a"];

  const [selectedOptions, setSelectedOptions] = useState(Array(5).fill(''));
  const [results, setResults] = useState(Array(5).fill(null));

  // Inicializa já com opções para evitar undefined na 1ª render
  const [shuffledAnswers, setShuffledAnswers] = useState(answerOptions);

  useEffect(() => {
    // Embaralha após montar
    setShuffledAnswers([...answerOptions].sort(() => Math.random() - 0.5));
  }, []);

  // Versão segura: aceita undefined/null e sempre retorna uma string
  const getLetter = (text = '') => String(text).charAt(0);

  const handleSelect = (letter) => {
    const indexInInputs = selectedOptions.indexOf(letter);
    if (indexInInputs !== -1) {
      const newSelections = [...selectedOptions];
      newSelections[indexInInputs] = '';
      setSelectedOptions(newSelections);
    } else {
      const firstEmpty = selectedOptions.findIndex(val => val === '');
      if (firstEmpty !== -1) {
        const newSelections = [...selectedOptions];
        newSelections[firstEmpty] = letter;
        setSelectedOptions(newSelections);
      }
    }
  };

  const handleCheckClick = () => {
    const newResults = selectedOptions.map((val, i) => val === correctMatches[i]);
    setResults(newResults);
  };

  return (
    <div className={styles.page286__container}>
      <h1 className={styles.page286__title}>Exercises</h1>

      <h2 className={styles.page286__subtitle}>
        2. <i>Match the time:</i>
        <img
          src={eng_audio_icon}
          alt=""
          className={styles.page286__audioIcon}
          onClick={() => playAudio("pg286_audio1e")}
        />
        <img
          src={ptbr_audio_icon}
          alt=""
          className={styles.page286__audioIcon}
          onClick={() => playAudio("pg286_audio1p")}
        />
      </h2>

      <div className={styles.page286__rows}>
        {times.map((time, i) => {
          const optionText = shuffledAnswers[i] ?? '';      // garante string
          const optionLetter = getLetter(optionText);        // pega a letra inicial

          return (
            <div key={i} className={styles.page286__row}>
              <span className={styles.page286__time}>{time}</span>

              <div className={styles.page286__inputWrapper}>
                <div className={styles.page286__inputBox}>
                  {selectedOptions[i]}
                </div>

                <img
                  src={eng_audio_icon}
                  alt=""
                  className={styles.page286__audioIcon}
                  onClick={() => playAudio(`pg286_audio${i + 2}e`)}
                />

                {results[i] !== null && (
                  <img
                    src={results[i] ? correct_icon : wrong_icon}
                    alt={results[i] ? "Correct" : "Incorrect"}
                    className={styles.page286__resultIcon}
                  />
                )}
              </div>

              <div
                className={`${styles.page286__option} ${
                  selectedOptions.includes(optionLetter) ? styles.selected : ''
                }`}
                onClick={() => handleSelect(optionLetter)}
              >
                {optionText}
              </div>
            </div>
          );
        })}
      </div>

      <button className={styles.page286__checkButton} onClick={handleCheckClick}>
        <em>Check</em>
      </button>
    </div>
  );
};

export default Pagina286;
