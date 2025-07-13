import React, { useState, useEffect, useRef } from 'react';
import styles from './pagina285.module.css';

import correct_icon from '../assets/icons/correct_icon.webp';
import wrong_icon from '../assets/icons/wrong_icon.webp';
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import audio1e from '../assets/audios/pg285_audio1e.mp3';
import audio1p from '../assets/audios/pg285_audio1p.mp3';
import audio2e from '../assets/audios/pg285_audio2e.mp3';
import audio2p from '../assets/audios/pg285_audio2p.mp3';
import audio3e from '../assets/audios/pg285_audio3e.mp3';
import audio3p from '../assets/audios/pg285_audio3p.mp3';
import audio4e from '../assets/audios/pg285_audio4e.mp3';
import audio4p from '../assets/audios/pg285_audio4p.mp3';
import audio5e from '../assets/audios/pg285_audio5e.mp3';
import audio5p from '../assets/audios/pg285_audio5p.mp3';
import audio6e from '../assets/audios/pg285_audio6e.mp3';
import audio6p from '../assets/audios/pg285_audio6p.mp3';
import audio7e from '../assets/audios/pg285_audio7e.mp3';
import audio7p from '../assets/audios/pg285_audio7p.mp3';
import audio8e from '../assets/audios/pg285_audio8e.mp3';
import audio8p from '../assets/audios/pg285_audio8p.mp3';
import audio9e from '../assets/audios/pg285_audio9e.mp3';
import audio9p from '../assets/audios/pg285_audio9p.mp3';
import audio10e from '../assets/audios/pg285_audio10e.mp3';
import audio10p from '../assets/audios/pg285_audio10p.mp3';
import audio11e from '../assets/audios/pg285_audio11e.mp3';
import audio11p from '../assets/audios/pg285_audio11p.mp3';

const Pagina285 = () => {
  const currentAudio = useRef(null);

  const playAudio = (id) => {
    if (currentAudio.current) {
      currentAudio.current.pause();
      currentAudio.current.currentTime = 0;
    }
    const audio = new Audio(audioMap[id]);
    currentAudio.current = audio;
    audio.play();
  };

  const audioMap = {
    'pg285_audio1e': audio1e,
    'pg285_audio1p': audio1p,
    'pg285_audio2e': audio2e,
    'pg285_audio2p': audio2p,
    'pg285_audio3e': audio3e,
    'pg285_audio3p': audio3p,
    'pg285_audio4e': audio4e,
    'pg285_audio4p': audio4p,
    'pg285_audio5e': audio5e,
    'pg285_audio5p': audio5p,
    'pg285_audio6e': audio6e,
    'pg285_audio6p': audio6p,
    'pg285_audio7e': audio7e,
    'pg285_audio7p': audio7p,
    'pg285_audio8e': audio8e,
    'pg285_audio8p': audio8p,
    'pg285_audio9e': audio9e,
    'pg285_audio9p': audio9p,
    'pg285_audio10e': audio10e,
    'pg285_audio10p': audio10p,
    'pg285_audio11e': audio11e,
    'pg285_audio11p': audio11p,
  };

  const correctAnswers = [
    "I wake up at six o’clock",
    "I go to school at seven o’clock",
    "The meeting is at nine o’clock",
    "It passes at eight o’clock",
    "I eat lunch at eleven o’clock"
  ];

  const [inputValues, setInputValues] = useState(Array(5).fill(''));
  const [usedOptions, setUsedOptions] = useState([]);
  const [results, setResults] = useState(Array(5).fill(null));
  const [showAnswers, setShowAnswers] = useState(false);
  const [shuffledOptions, setShuffledOptions] = useState([]);

  useEffect(() => {
    const shuffled = [...correctAnswers].sort(() => Math.random() - 0.5);
    setShuffledOptions(shuffled);
  }, []);

  const handleSelectOption = (text) => {
    const indexInUsed = usedOptions.indexOf(text);

    if (indexInUsed !== -1) {
      const newValues = inputValues.map((val) => (val === text ? '' : val));
      setInputValues(newValues);
      setUsedOptions(usedOptions.filter((opt) => opt !== text));
    } else {
      const firstEmpty = inputValues.findIndex((val) => val === '');
      if (firstEmpty !== -1) {
        const newValues = [...inputValues];
        newValues[firstEmpty] = text;
        setInputValues(newValues);
        setUsedOptions([...usedOptions, text]);
      }
    }
  };

  const handleCheckClick = () => {
    const newResults = inputValues.map(
      (ans, index) => ans.trim().toLowerCase() === correctAnswers[index].trim().toLowerCase()
    );
    setResults(newResults);
    setShowAnswers(true);
  };

  return (
    <div className={styles["page285__container"]}>
      <h1 className={styles["page285__title"]}>Exercises</h1>

      <h2 className={styles["page285__subtitle"]}>
        1. Answer the question according to the pictures:
        <img
          src={eng_audio_icon}
          alt=""
          className={styles["page285__audio-icon"]}
          onClick={() => playAudio("pg285_audio1e")}
        />
        <img
          src={ptbr_audio_icon}
          alt=""
          className={styles["page285__audio-icon"]}
          onClick={() => playAudio("pg285_audio1p")}
        />
      </h2>

      <div className={styles["page285__questions-container"]}>
        {[
          {
            question: "a) What time do you wake up?",
            qEn: "pg285_audio2e",
            qPt: "pg285_audio2p",
            aEn: "pg285_audio3e",
            aPt: "pg285_audio3p",
          },
          {
            question: "a) What time do you go to school?",
            qEn: "pg285_audio4e",
            qPt: "pg285_audio4p",
            aEn: "pg285_audio5e",
            aPt: "pg285_audio5p",
          },
          {
            question: "a) What time is the meeting?",
            qEn: "pg285_audio6e",
            qPt: "pg285_audio6p",
            aEn: "pg285_audio7e",
            aPt: "pg285_audio7p",
          },
          {
            question: "a) What time does the bus pass?",
            qEn: "pg285_audio8e",
            qPt: "pg285_audio8p",
            aEn: "pg285_audio9e",
            aPt: "pg285_audio9p",
          },
          {
            question: "a) What time do you eat lunch?",
            qEn: "pg285_audio10e",
            qPt: "pg285_audio10p",
            aEn: "pg285_audio11e",
            aPt: "pg285_audio11p",
          },
        ].map((item, index) => (
          <div key={index} className={styles["page285__question-block"]}>
            <p>
              {item.question}
              <img
                src={eng_audio_icon}
                alt=""
                className={styles["page285__audio-icon"]}
                onClick={() => playAudio(item.qEn)}
              />
              <img
                src={ptbr_audio_icon}
                alt=""
                className={styles["page285__audio-icon"]}
                onClick={() => playAudio(item.qPt)}
              />
            </p>
            <div className={styles["page285__input-container"]}>
              <input
                type="text"
                value={inputValues[index]}
                readOnly
                className={styles["page285__input-box"]}
              />
              <div className={styles["page285__answer-audio"]}>
                <img
                  src={eng_audio_icon}
                  alt=""
                  className={styles["page285__audio-icon"]}
                  onClick={() => playAudio(item.aEn)}
                />
                <img
                  src={ptbr_audio_icon}
                  alt=""
                  className={styles["page285__audio-icon"]}
                  onClick={() => playAudio(item.aPt)}
                />
              </div>
              {showAnswers && (
                <img
                  src={results[index] ? correct_icon : wrong_icon}
                  alt={results[index] ? "Correct" : "Incorrect"}
                  className={styles["page285__result-icon"]}
                />
              )}
            </div>
          </div>
        ))}
      </div>

      <div className={styles["page285__answer-column"]}>
        {shuffledOptions.map((option, idx) => (
          <div
            key={idx}
            onClick={() => handleSelectOption(option)}
            className={`${styles["page285__answer-option"]} ${inputValues.includes(option) ? styles["selected"] : ""}`}
          >
            {option}
          </div>
        ))}
      </div>

      <button className={styles["page285__check-button"]} onClick={handleCheckClick}>
        <em>Check</em>
      </button>

      {showAnswers && (
        <div className={styles["page285__answers-section"]}>
          <h2 className={styles["page285__answers-title"]}>Answers</h2>
          <ul className={styles["page285__answers-list"]}>
            {correctAnswers.map((ans, idx) => (
              <li key={idx}>{ans}</li>
            ))}
          </ul>
        </div>
      )}

      <div className={styles["page285__note"]}>
        <div className={styles["page285__note-header"]}>
          Nota
        </div>
        <div className={styles["page285__note-content"]}>
          Usar a preposição <span className={styles["page285__red-bold"]}>at</span> antes de hora cheia para definir horários<br />
          Ex: What time is our English class?<br />
          It is <span className={styles["page285__red-bold"]}>at</span> <span className={styles["page285__blue-bold"]}>9:00 a.m.</span>
        </div>
      </div>
    </div>
  );
};

export default Pagina285;
