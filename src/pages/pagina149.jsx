import React, { useState, useRef } from 'react';
import styles from './pagina149.module.css';

import correct_icon from '../assets/icons/correct_icon.webp';
import wrong_icon from '../assets/icons/wrong_icon.webp';
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import pagina149_imagem1 from '../assets/images/pagina149_imagem1.gif';

import global_exercise_e from '../assets/audios/global_exercise_e.mp3';
import global_exercise_p from '../assets/audios/global_exercise_p.mp3';
import pg149_audio1e from '../assets/audios/pg149_audio1e.mp3';
import pg149_audio1p from '../assets/audios/pg149_audio1p.mp3';
import pg149_audio2e from '../assets/audios/pg149_audio2e.mp3';
import pg149_audio2p from '../assets/audios/pg149_audio2p.mp3';
import pg149_audio3e from '../assets/audios/pg149_audio3e.mp3';
import pg149_audio3p from '../assets/audios/pg149_audio3p.mp3';
import pg149_audio4e from '../assets/audios/pg149_audio4e.mp3';
import pg149_audio4p from '../assets/audios/pg149_audio4p.mp3';

const audioMap = {
  global_exercise_e,
  global_exercise_p,
  pg149_audio1e,
  pg149_audio1p,
  pg149_audio2e,
  pg149_audio2p,
  pg149_audio3e,
  pg149_audio3p,
  pg149_audio4e,
  pg149_audio4p,
};

const Pagina149 = () => {
  const [inputValues, setInputValues] = useState(Array(3).fill(''));
  const [results, setResults] = useState(Array(3).fill(null));
  const [showAnswers, setShowAnswers] = useState(false);
  const currentAudioRef = useRef(null);

  const correctAnswers = [
    "Is she listening to music?",
    "Are you writing an email?",
    "Are they going to the park?",
  ];

  const handleInputChange = (value, index) => {
    const newValues = [...inputValues];
    newValues[index] = value;
    setInputValues(newValues);
  };

  const handleCheckClick = () => {
    const newResults = inputValues.map(
      (value, index) =>
        value.trim().toLowerCase() === correctAnswers[index].toLowerCase()
    );
    setResults(newResults);
    setShowAnswers(true);
  };

  const playAudio = (key) => {
    if (currentAudioRef.current) {
      currentAudioRef.current.pause();
      currentAudioRef.current.currentTime = 0;
    }
    const audio = new Audio(audioMap[key]);
    currentAudioRef.current = audio;
    audio.play();
  };

  return (
    <div className={styles["page149__container"]}>
      <h1 className={styles["page149__title"]}>
        <span className={styles["page149__title--red"]}>Exercises</span>
        <span className={styles["page149__icons-container"]}>
          <img
            src={eng_audio_icon}
            alt="English Audio"
            className={styles["page149__icon"]}
            onClick={() => playAudio('global_exercise_e')}
          />
          <img
            src={ptbr_audio_icon}
            alt="Portuguese Audio"
            className={styles["page149__icon"]}
            onClick={() => playAudio('global_exercise_p')}
          />
        </span>
      </h1>

      <h2 className={styles["page149__subtitle"]}>
        4. Turn these sentences into questions.
        <span className={styles["page149__icons-container"]}>
          <img
            src={eng_audio_icon}
            alt="English Audio"
            className={styles["page149__icon"]}
            onClick={() => playAudio('pg149_audio1e')}
          />
          <img
            src={ptbr_audio_icon}
            alt="Portuguese Audio"
            className={styles["page149__icon"]}
            onClick={() => playAudio('pg149_audio1p')}
          />
        </span>
      </h2>

      <div className={styles["page149__content"]}>
        <div className={styles["page149__questions-container"]}>
          {[
            "1. She is listening to music.",
            "2. You are writing an email.",
            "3. They are going to the park.",
          ].map((question, index) => (
            <div key={index} className={styles["page149__question"]}>
              <span>
                {question}
              </span>

              <div className={styles["page149__input-container"]}>
                <input
                  type="text"
                  value={inputValues[index]}
                  onChange={(e) => handleInputChange(e.target.value, index)}
                  className={styles["page149__input-box"]}
                />
                {results[index] !== null && (
                  <img
                    src={results[index] ? correct_icon : wrong_icon}
                    alt={results[index] ? "Correct" : "Incorrect"}
                    className={styles["page149__checkmark-image"]}
                  />
                )}
                <span className={styles["page149__icons-container"]}>
                  <img
                    src={eng_audio_icon}
                    alt="English Audio"
                    className={styles["page149__icon"]}
                    onClick={() => playAudio(`pg149_audio${index + 2}e`)}
                  />
                  <img
                    src={ptbr_audio_icon}
                    alt="Portuguese Audio"
                    className={styles["page149__icon"]}
                    onClick={() => playAudio(`pg149_audio${index + 2}p`)}
                  />
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className={styles["page149__image-container"]}>
          <img
            src={pagina149_imagem1}
            alt="Girl listening to music"
            className={styles["page149__image"]}
          />
        </div>
      </div>

      <button className={styles["page149__check-button"]} onClick={handleCheckClick}>
        <em>Check</em>
      </button>

      {showAnswers && (
        <div className={styles["page149__answers-section"]}>
          <h2 className={styles["page149__answers-title"]}>Answers</h2>
          <h3 className={styles["page149__answers-subtitle"]}>4. Make Questions</h3>
          <ul className={styles["page149__answers-list"]}>
            {correctAnswers.map((answer, index) => (
              <li key={index}>{answer}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Pagina149;
