import React, { useState, useRef } from 'react';
import styles from './pagina222.module.css';
import correct_icon from '../assets/icons/correct_icon.webp';
import wrong_icon from '../assets/icons/wrong_icon.webp';
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import audio1e from '../assets/audios/pg222_audio1e.mp3';
import audio1p from '../assets/audios/pg222_audio1p.mp3';
import audio2e from '../assets/audios/pg222_audio2e.mp3';
import audio3e from '../assets/audios/pg222_audio3e.mp3';
import audio3p from '../assets/audios/pg222_audio3p.mp3';
import audio4e from '../assets/audios/pg222_audio4e.mp3';
import audio5e from '../assets/audios/pg222_audio5e.mp3';
import audio5p from '../assets/audios/pg222_audio5p.mp3';
import audio6e from '../assets/audios/pg222_audio6e.mp3';
import audio7e from '../assets/audios/pg222_audio7e.mp3';
import audio7p from '../assets/audios/pg222_audio7p.mp3';
import audio8e from '../assets/audios/pg222_audio8e.mp3';
import audio9e from '../assets/audios/pg222_audio9e.mp3';
import audio9p from '../assets/audios/pg222_audio9p.mp3';

const Pagina222 = () => {
  const [userAnswers, setUserAnswers] = useState(['', '', '', '']);
  const [showResults, setShowResults] = useState(false);
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

  const exercises = [
    {
      id: 1,
      words: "swim / can / I / well",
      audioScrambled: audio2e,
      audioCorrect: { en: audio3e, pt: audio3p },
      correctAnswer: "I can swim well"
    },
    {
      id: 2,
      words: "you / can / help / He",
      audioScrambled: audio4e,
      audioCorrect: { en: audio5e, pt: audio5p },
      correctAnswer: "He can help you"
    },
    {
      id: 3,
      words: "a / bike / ride / can / She",
      audioScrambled: audio6e,
      audioCorrect: { en: audio7e, pt: audio7p },
      correctAnswer: "She can ride a bike"
    },
    {
      id: 4,
      words: "The / dog / catch / ball / can / the",
      audioScrambled: audio8e,
      audioCorrect: { en: audio9e, pt: audio9p },
      correctAnswer: "The dog can catch the ball"
    }
  ];

  const handleInputChange = (index, value) => {
    const newAnswers = [...userAnswers];
    newAnswers[index] = value;
    setUserAnswers(newAnswers);
  };

  const handleCheck = () => {
    setShowResults(true);
  };

  const handleReset = () => {
    setUserAnswers(['', '', '', '']);
    setShowResults(false);
  };

  return (
    <div className={styles.pg222Container}>
      <h1 className={styles.pg222Title}>Exercises</h1>

      <div className={styles.pg222ExerciseSection}>
        <h2 className={styles.pg222ExerciseTitle}>
          9. Put the words in the correct order
          <img
            src={eng_audio_icon}
            alt="EN audio"
            className={styles.page222__audio_icon}
            onClick={() => playAudio(audio1e)}
          />
          <img
            src={ptbr_audio_icon}
            alt="PT audio"
            className={styles.page222__audio_icon}
            onClick={() => playAudio(audio1p)}
          />
        </h2>

        <div className={styles.pg222WordsBox}>
          {exercises.map((exercise, index) => (
            <div key={exercise.id} className={styles.pg222WordLine}>
              <span className={styles.pg222Number}>{exercise.id}.</span>
              <span className={styles.pg222Words}>{exercise.words}</span>
              <img
                src={eng_audio_icon}
                alt="EN scrambled"
                className={styles.page222__audio_icon}
                onClick={() => playAudio(exercise.audioScrambled)}
              />

              <div className={styles.pg222InputContainer}>
                <input
                  type="text"
                  value={userAnswers[index]}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  className={styles.pg222Input}
                  placeholder="Type your answer"
                  disabled={showResults}
                />
                <img
                  src={
                    showResults &&
                    userAnswers[index].trim().toLowerCase() ===
                      exercise.correctAnswer.toLowerCase()
                      ? correct_icon
                      : showResults
                      ? wrong_icon
                      : ''
                  }
                  alt=""
                  className={
                    showResults ? styles.pg222ResultIcon : styles.pg222ResultIconHidden
                  }
                />
                <img
                  src={eng_audio_icon}
                  alt="EN correct"
                  className={styles.page222__audio_icon}
                  onClick={() => playAudio(exercise.audioCorrect.en)}
                />
                <img
                  src={ptbr_audio_icon}
                  alt="PT correct"
                  className={styles.page222__audio_icon}
                  onClick={() => playAudio(exercise.audioCorrect.pt)}
                />
              </div>
            </div>
          ))}
        </div>

        <div className={styles.pg222ButtonsContainer}>
          <button
            className={styles.pg222CheckButton}
            onClick={handleCheck}
            disabled={showResults || userAnswers.some(answer => !answer.trim())}
          >
            Check
          </button>
          {showResults && (
            <button
              className={styles.pg222ResetButton}
              onClick={handleReset}
            >
              Reset
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Pagina222;
