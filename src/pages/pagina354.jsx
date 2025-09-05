import React, { useState, useRef } from 'react';
import styles from './pagina354.module.css';
import correctIcon from '../assets/icons/correct_icon.webp';
import wrongIcon from '../assets/icons/wrong_icon.webp';
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import audio1e from '../assets/audios/pg354_audio1e.mp3';
import audio2e from '../assets/audios/pg354_audio2e.mp3';
import audio3e from '../assets/audios/pg354_audio3e.mp3';
import audio4e from '../assets/audios/pg354_audio4e.mp3';
import audio5e from '../assets/audios/pg354_audio5e.mp3';
import audio6e from '../assets/audios/pg354_audio6e.mp3';

import audio1p from '../assets/audios/pg354_audio1p.mp3';
import audio2p from '../assets/audios/pg354_audio2p.mp3';
import audio3p from '../assets/audios/pg354_audio3p.mp3';
import audio4p from '../assets/audios/pg354_audio4p.mp3';
import audio5p from '../assets/audios/pg354_audio5p.mp3';
import audio6p from '../assets/audios/pg354_audio6p.mp3';

const questionsEx15 = [
  { id: 1, words: 'you / see / When / will / us?', answer: 'When will you see us?' },
  { id: 2, words: 'will / Who / come / tomorrow?', answer: 'Who will come tomorrow?' },
  { id: 3, words: 'call / I / later / will / you', answer: 'I will call you later.' },
  { id: 4, words: 'not / be / will / He / there', answer: 'He will not be there.' },
  { id: 5, words: 'the / finish / We / will / project / soon', answer: 'We will finish the project soon.' }
];

const normalize = (str) => {
  if (str === null || str === undefined) return '';
  return str.trim().replace(/[.,?]/g, '').replace(/\s+/g, ' ').toLowerCase();
};

const Pagina354 = () => {
  const [inputValuesEx15, setInputValuesEx15] = useState(Array(questionsEx15.length).fill(''));
  const [resultsEx15, setResultsEx15] = useState(Array(questionsEx15.length).fill(null));
  const currentAudioRef = useRef(null);

  const playAudio = (file) => {
    if (currentAudioRef.current) {
      currentAudioRef.current.pause();
      currentAudioRef.current.currentTime = 0;
    }
    const a = new Audio(file);
    currentAudioRef.current = a;
    a.play();
  };

  const handleInputChangeEx15 = (value, index) => {
    const updatedValues = [...inputValuesEx15];
    updatedValues[index] = value;
    setInputValuesEx15(updatedValues);
  };

  const handleCheckClickEx15 = () => {
    const evaluatedResults = inputValuesEx15.map((input, i) => {
      const userInput = normalize(input);
      const correctAnswer = normalize(questionsEx15[i].answer);
      return userInput === correctAnswer;
    });
    setResultsEx15(evaluatedResults);
  };

  return (
    <div className={styles.page354__container}>
      <header className={styles.page354__header}>
        <h1><span className={styles.page354__exercisesRed}>Exercises</span></h1>
      </header>

      <p className={styles.page354__instructionRed}>
        <strong>
          15. Word Order
          <img
            src={eng_audio_icon}
            alt="Play English Audio"
            className={styles.page354__icon}
            onClick={() => playAudio(audio1e)}
          />
          <img
            src={ptbr_audio_icon}
            alt="Play Portuguese Audio"
            className={styles.page354__icon}
            onClick={() => playAudio(audio1p)}
          />
        </strong>
      </p>

      <div className={styles.page354__questionBox}>
        <main className={styles.page354__main}>
          {questionsEx15.map((q, index) => (
            <div key={q.id} className={styles.page354__question}>
              <span>{q.id}. {q.words}</span>
              <div className={styles.page354__inputContainer}>
                <input
                  type="text"
                  value={inputValuesEx15[index]}
                  onChange={(e) => handleInputChangeEx15(e.target.value, index)}
                  className={styles.page354__input}
                  placeholder={inputValuesEx15[index] === '' ? 'Type the correct order' : ''}
                />
                {resultsEx15[index] !== null && (
                  <img
                    src={resultsEx15[index] ? correctIcon : wrongIcon}
                    alt={resultsEx15[index] ? 'Correct' : 'Incorrect'}
                    className={styles.page354__resultIcon}
                  />
                )}
                <img
                  src={eng_audio_icon}
                  alt="Play English Audio"
                  className={styles.page354__icon}
                  onClick={() => playAudio([audio2e, audio3e, audio4e, audio5e, audio6e][index])}
                />
                <img
                  src={ptbr_audio_icon}
                  alt="Play Portuguese Audio"
                  className={styles.page354__icon}
                  onClick={() => playAudio([audio2p, audio3p, audio4p, audio5p, audio6p][index])}
                />
              </div>
            </div>
          ))}
        </main>
      </div>

      <div className={styles.page354__checkContainer}>
        <button className={styles.page354__checkButton} onClick={handleCheckClickEx15}>
          Check
        </button>
      </div>
    </div>
  );
};

export default Pagina354;
