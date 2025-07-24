import React, { useRef, useState } from 'react';
import styles from './pagina214.module.css';
import correct_icon from '../assets/icons/correct_icon.webp';
import wrong_icon from '../assets/icons/wrong_icon.webp';
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import audio1e from '../assets/audios/pg214_audio1e.mp3';
import audio1p from '../assets/audios/pg214_audio1p.mp3';
import audio2e from '../assets/audios/pg214_audio2e.mp3';
import audio2p from '../assets/audios/pg214_audio2p.mp3';
import audio3e from '../assets/audios/pg214_audio3e.mp3';
import audio3p from '../assets/audios/pg214_audio3p.mp3';
import audio4e from '../assets/audios/pg214_audio4e.mp3';
import audio4p from '../assets/audios/pg214_audio4p.mp3';
import audio5e from '../assets/audios/pg214_audio5e.mp3';
import audio5p from '../assets/audios/pg214_audio5p.mp3';
import audio6e from '../assets/audios/pg214_audio6e.mp3';
import audio6p from '../assets/audios/pg214_audio6p.mp3';
import audio7e from '../assets/audios/pg214_audio7e.mp3';
import audio7p from '../assets/audios/pg214_audio7p.mp3';

const Pagina214 = () => {
  const currentAudio = useRef(null);

  const playAudio = (audio) => {
    if (currentAudio.current) {
      currentAudio.current.pause();
      currentAudio.current.currentTime = 0;
    }
    const newAudio = new Audio(audio);
    currentAudio.current = newAudio;
    newAudio.play();
  };

  const [inputValues, setInputValues] = useState(Array(6).fill(''));
  const [results, setResults] = useState(Array(6).fill(null));

  const correctAnswers = [
    'What',
    'Where',
    'When',
    'Who',
    'Why',
    'How'
  ];

  const handleCheckClick = () => {
    const newResults = inputValues.map((value, index) => {
      if (!value.trim()) return false;
      const trimmedValue = value.trim().toLowerCase();
      const correctValue = correctAnswers[index].toLowerCase();
      return trimmedValue === correctValue;
    });
    setResults(newResults);
  };

  const handleInputChange = (value, index) => {
    setInputValues((prevValues) => {
      const newValues = [...prevValues];
      newValues[index] = value;
      return newValues;
    });
  };

  return (
    <div className={styles.pg214Container}>
      <h1 className={styles.pg214Title}>Exercises</h1>

      <div className={styles.pg214ExerciseSection}>
        <h2 className={styles.pg214ExerciseTitle}>
          1. Fill in the blanks by completing each question using:
          <br />
          What, Where, When, Who, Why, or How.
          <img
            src={eng_audio_icon}
            alt="Play English audio"
            className={styles.page214__audio_icon}
            onClick={() => playAudio(audio1e)}
          />
          <img
            src={ptbr_audio_icon}
            alt="Play Portuguese audio"
            className={styles.page214__audio_icon}
            onClick={() => playAudio(audio1p)}
          />
        </h2>

        <div className={styles.pg214QuestionsBox}>
          <div className={styles.pg214Question}>
            <span>1.</span>
            <input
              type="text"
              value={inputValues[0]}
              onChange={(e) => handleInputChange(e.target.value, 0)}
              className={styles.pg214InputBox}
            />
            <span>can you cook really well?</span>
            <img
              src={eng_audio_icon}
              alt="English"
              className={styles.page214__audio_icon}
              onClick={() => playAudio(audio2e)}
            />
            <img
              src={ptbr_audio_icon}
              alt="Portuguese"
              className={styles.page214__audio_icon}
              onClick={() => playAudio(audio2p)}
            />
            {results[0] !== null && (
              <img
                src={results[0] ? correct_icon : wrong_icon}
                alt={results[0] ? "Correct" : "Incorrect"}
                className={styles.pg214CheckmarkImage}
              />
            )}
          </div>

          <div className={styles.pg214Question}>
            <span>2.</span>
            <input
              type="text"
              value={inputValues[1]}
              onChange={(e) => handleInputChange(e.target.value, 1)}
              className={styles.pg214InputBox}
            />
            <span>can we park the car?</span>
            <img
              src={eng_audio_icon}
              alt="English"
              className={styles.page214__audio_icon}
              onClick={() => playAudio(audio3e)}
            />
            <img
              src={ptbr_audio_icon}
              alt="Portuguese"
              className={styles.page214__audio_icon}
              onClick={() => playAudio(audio3p)}
            />
            {results[1] !== null && (
              <img
                src={results[1] ? correct_icon : wrong_icon}
                alt={results[1] ? "Correct" : "Incorrect"}
                className={styles.pg214CheckmarkImage}
              />
            )}
          </div>

          <div className={styles.pg214Question}>
            <span>3.</span>
            <input
              type="text"
              value={inputValues[2]}
              onChange={(e) => handleInputChange(e.target.value, 2)}
              className={styles.pg214InputBox}
            />
            <span>can I visit your office?</span>
            <img
              src={eng_audio_icon}
              alt="English"
              className={styles.page214__audio_icon}
              onClick={() => playAudio(audio4e)}
            />
            <img
              src={ptbr_audio_icon}
              alt="Portuguese"
              className={styles.page214__audio_icon}
              onClick={() => playAudio(audio4p)}
            />
            {results[2] !== null && (
              <img
                src={results[2] ? correct_icon : wrong_icon}
                alt={results[2] ? "Correct" : "Incorrect"}
                className={styles.pg214CheckmarkImage}
              />
            )}
          </div>

          <div className={styles.pg214Question}>
            <span>4.</span>
            <input
              type="text"
              value={inputValues[3]}
              onChange={(e) => handleInputChange(e.target.value, 3)}
              className={styles.pg214InputBox}
            />
            <span>can answer this question?</span>
            <img
              src={eng_audio_icon}
              alt="English"
              className={styles.page214__audio_icon}
              onClick={() => playAudio(audio5e)}
            />
            <img
              src={ptbr_audio_icon}
              alt="Portuguese"
              className={styles.page214__audio_icon}
              onClick={() => playAudio(audio5p)}
            />
            {results[3] !== null && (
              <img
                src={results[3] ? correct_icon : wrong_icon}
                alt={results[3] ? "Correct" : "Incorrect"}
                className={styles.pg214CheckmarkImage}
              />
            )}
          </div>

          <div className={styles.pg214Question}>
            <span>5.</span>
            <input
              type="text"
              value={inputValues[4]}
              onChange={(e) => handleInputChange(e.target.value, 4)}
              className={styles.pg214InputBox}
            />
            <span>can't she come to the party?</span>
            <img
              src={eng_audio_icon}
              alt="English"
              className={styles.page214__audio_icon}
              onClick={() => playAudio(audio6e)}
            />
            <img
              src={ptbr_audio_icon}
              alt="Portuguese"
              className={styles.page214__audio_icon}
              onClick={() => playAudio(audio6p)}
            />
            {results[4] !== null && (
              <img
                src={results[4] ? correct_icon : wrong_icon}
                alt={results[4] ? "Correct" : "Incorrect"}
                className={styles.pg214CheckmarkImage}
              />
            )}
          </div>

          <div className={styles.pg214Question}>
            <span>6.</span>
            <input
              type="text"
              value={inputValues[5]}
              onChange={(e) => handleInputChange(e.target.value, 5)}
              className={styles.pg214InputBox}
            />
            <span>can I get to the train station?</span>
            <img
              src={eng_audio_icon}
              alt="English"
              className={styles.page214__audio_icon}
              onClick={() => playAudio(audio7e)}
            />
            <img
              src={ptbr_audio_icon}
              alt="Portuguese"
              className={styles.page214__audio_icon}
              onClick={() => playAudio(audio7p)}
            />
            {results[5] !== null && (
              <img
                src={results[5] ? correct_icon : wrong_icon}
                alt={results[5] ? "Correct" : "Incorrect"}
                className={styles.pg214CheckmarkImage}
              />
            )}
          </div>
        </div>

        <button onClick={handleCheckClick} className={styles.pg214CheckButton}>
          Check
        </button>
      </div>
    </div>
  );
};

export default Pagina214;
