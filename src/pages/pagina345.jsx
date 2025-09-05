import React, { useRef, useState } from 'react';
import styles from './pagina345.module.css';
import correctIcon from '../assets/icons/correct_icon.webp';
import wrongIcon from '../assets/icons/wrong_icon.webp';
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import audio1e from '../assets/audios/pg345_audio1e.mp3';
import audio2e from '../assets/audios/pg345_audio2e.mp3';
import audio3e from '../assets/audios/pg345_audio3e.mp3';
import audio4e from '../assets/audios/pg345_audio4e.mp3';
import audio5e from '../assets/audios/pg345_audio5e.mp3';
import audio6e from '../assets/audios/pg345_audio6e.mp3';

import audio1p from '../assets/audios/pg345_audio1p.mp3';
import audio2p from '../assets/audios/pg345_audio2p.mp3';
import audio3p from '../assets/audios/pg345_audio3p.mp3';
import audio4p from '../assets/audios/pg345_audio4p.mp3';
import audio5p from '../assets/audios/pg345_audio5p.mp3';
import audio6p from '../assets/audios/pg345_audio6p.mp3';

const wordOrderQuestionsEx6 = [
  { id: 1, words: 'help / I / you / will', answer: 'I will help you' },
  { id: 2, words: 'call / later / I / you / will', answer: 'I will call you later' },
  { id: 3, words: 'Will / it / tomorrow ? / rain', answer: 'Will it rain tomorrow?' },
  { id: 4, words: 'you / send / me / the / link ? / Will', answer: 'Will you send me the link?' },
  { id: 5, words: 'come / Will / she / party ? / the / to', answer: 'Will she come to the party?' }
];

const normalize = (str) => (str ?? '').trim().replace(/\s+/g, ' ').toLowerCase();

const Pagina345 = () => {
  const [inputValuesEx6, setInputValuesEx6] = useState(Array(wordOrderQuestionsEx6.length).fill(''));
  const [resultsEx6, setResultsEx6] = useState(Array(wordOrderQuestionsEx6.length).fill(null));
  const currentAudioRef = useRef(null);

  const playAudio = (file) => {
    if (currentAudioRef.current) {
      currentAudioRef.current.pause();
      currentAudioRef.current.currentTime = 0;
    }
    const audio = new Audio(file);
    currentAudioRef.current = audio;
    audio.play();
  };

  const handleInputChangeEx6 = (value, index) => {
    const updatedValues = [...inputValuesEx6];
    updatedValues[index] = value;
    setInputValuesEx6(updatedValues);
  };

  const handleCheckClickEx6 = () => {
    const evaluatedResults = inputValuesEx6.map((input, i) => {
      const userInput = normalize(input);
      const correctAnswer = normalize(wordOrderQuestionsEx6[i].answer);
      return userInput === correctAnswer;
    });
    setResultsEx6(evaluatedResults);
  };

  return (
    <div className={styles.page345__container}>
      <header className={styles.page345__header}>
        <h1><span className={styles.page345__exercisesRed}>Exercises</span></h1>
      </header>

      <p className={styles.page345__instructionRed}>
        <strong>
          6. Word Order
          <img
            src={eng_audio_icon}
            alt="Play English Audio"
            className={styles.page345__icon}
            onClick={() => playAudio(audio1e)}
          />
          <img
            src={ptbr_audio_icon}
            alt="Play Portuguese Audio"
            className={styles.page345__icon}
            onClick={() => playAudio(audio1p)}
          />
        </strong>
      </p>

      <div className={styles.page345__questionBox}>
        <main className={styles.page345__main}>
          {wordOrderQuestionsEx6.map((q, index) => (
            <div key={q.id} className={styles.page345__question}>
              <span>{q.id}. {q.words}</span>
              <div className={styles.page345__inputContainer}>
                <input
                  type="text"
                  value={inputValuesEx6[index]}
                  onChange={(e) => handleInputChangeEx6(e.target.value, index)}
                  className={styles.page345__input}
                  placeholder={inputValuesEx6[index] === '' ? 'Type the correct order' : ''}
                />
                <div className={styles.page345__iconsRow}>
                  {resultsEx6[index] !== null && (
                    <img
                      src={resultsEx6[index] ? correctIcon : wrongIcon}
                      alt={resultsEx6[index] ? 'Correct' : 'Incorrect'}
                      className={styles.page345__resultIcon}
                    />
                  )}
                  <img
                    src={eng_audio_icon}
                    alt="Play English Audio"
                    className={styles.page345__icon}
                    onClick={() => playAudio([audio2e, audio3e, audio4e, audio5e, audio6e][index])}
                  />
                  <img
                    src={ptbr_audio_icon}
                    alt="Play Portuguese Audio"
                    className={styles.page345__icon}
                    onClick={() => playAudio([audio2p, audio3p, audio4p, audio5p, audio6p][index])}
                  />
                </div>
              </div>
            </div>
          ))}
        </main>
      </div>

      <div className={styles.page345__checkContainer}>
        <button className={styles.page345__checkButton} onClick={handleCheckClickEx6}>
          Check
        </button>
      </div>
    </div>
  );
};

export default Pagina345;
