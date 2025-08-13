import React, { useState, useRef } from 'react';
import styles from './pagina221.module.css';
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import audio1e from '../assets/audios/pg221_audio1e.mp3';
import audio1p from '../assets/audios/pg221_audio1p.mp3';
import audio2e from '../assets/audios/pg221_audio2e.mp3';
import audio2p from '../assets/audios/pg221_audio2p.mp3';
import audio3e from '../assets/audios/pg221_audio3e.mp3';
import audio3p from '../assets/audios/pg221_audio3p.mp3';
import audio4e from '../assets/audios/pg221_audio4e.mp3';
import audio4p from '../assets/audios/pg221_audio4p.mp3';
import audio5e from '../assets/audios/pg221_audio5e.mp3';
import audio5p from '../assets/audios/pg221_audio5p.mp3';
import audio6e from '../assets/audios/pg221_audio6e.mp3';
import audio6p from '../assets/audios/pg221_audio6p.mp3';
import audio7e from '../assets/audios/pg221_audio7e.mp3';
import audio7p from '../assets/audios/pg221_audio7p.mp3';
import audio8e from '../assets/audios/pg221_audio8e.mp3';
import audio8p from '../assets/audios/pg221_audio8p.mp3';
import audio9e from '../assets/audios/pg221_audio9e.mp3';
import audio9p from '../assets/audios/pg221_audio9p.mp3';
import audio10e from '../assets/audios/pg221_audio10e.mp3';
import audio10p from '../assets/audios/pg221_audio10p.mp3';
import audio11e from '../assets/audios/pg221_audio11e.mp3';
import audio11p from '../assets/audios/pg221_audio11p.mp3';
import audio12e from '../assets/audios/pg221_audio12e.mp3';
import audio12p from '../assets/audios/pg221_audio12p.mp3';
import audio13e from '../assets/audios/pg221_audio13e.mp3';
import audio13p from '../assets/audios/pg221_audio13p.mp3';
import audio14e from '../assets/audios/pg221_audio14e.mp3';
import audio14p from '../assets/audios/pg221_audio14p.mp3';
import audio15e from '../assets/audios/pg221_audio15e.mp3';
import audio15p from '../assets/audios/pg221_audio15p.mp3';
import audio16e from '../assets/audios/pg221_audio16e.mp3';
import audio16p from '../assets/audios/pg221_audio16p.mp3';
import audio17e from '../assets/audios/pg221_audio17e.mp3';
import audio17p from '../assets/audios/pg221_audio17p.mp3';

const Pagina221 = () => {
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

  const audioMap = {
    1: { question: [audio2e, audio2p], options: [audio3e, audio3p, audio4e, audio4p, audio5e, audio5p] },
    2: { question: [audio6e, audio6p], options: [audio7e, audio7p, audio8e, audio8p, audio9e, audio9p] },
    3: { question: [audio10e, audio10p], options: [audio11e, audio11p, audio12e, audio12p, audio13e, audio13p] },
    4: { question: [audio14e, audio14p], options: [audio15e, audio15p, audio16e, audio16p, audio17e, audio17p] }
  };

  const questions = [
    {
      id: 1,
      text: "Can she drive a car?",
      options: ["Yes, she can;", "No, he can't;", "Yes, we can"],
      correctAnswer: "Yes, she can;"
    },
    {
      id: 2,
      text: "Can you speak Spanish?",
      options: ["Yes, I do;", "Yes, I can;", "No, I am not"],
      correctAnswer: "Yes, I can;"
    },
    {
      id: 3,
      text: "Can they swim?",
      options: ["Yes, they can;", "Yes, they are;", "No, they doesn't"],
      correctAnswer: "Yes, they can;"
    },
    {
      id: 4,
      text: "Can he play football?",
      options: ["Yes, he can;", "Yes, he is;", "No, he don't"],
      correctAnswer: "Yes, he can;"
    }
  ];

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleOptionSelect = (questionId, option) => {
    if (showResults) return;
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: option
    }));
  };

  const checkAnswers = () => {
    if (Object.keys(selectedAnswers).length < questions.length) {
      alert('Please answer all questions before checking!');
      return;
    }
    setShowResults(true);
  };

  const resetExercise = () => {
    setSelectedAnswers({});
    setShowResults(false);
  };

  const isCorrectAnswer = (questionId, option) => {
    if (!showResults) return null;
    const question = questions.find(q => q.id === questionId);
    return question.correctAnswer === option;
  };

  return (
    <div className={styles.pg221Container}>
      <h1 className={styles.pg221Title}>Exercises</h1>

      <div className={styles.pg221ExerciseSection}>
        <h2 className={styles.pg221ExerciseTitle}>
          8. Multiple choice
          <img
            src={eng_audio_icon}
            alt="Instruction audio EN"
            className={styles.page221__audio_icon}
            onClick={() => playAudio(audio1e)}
          />
          <img
            src={ptbr_audio_icon}
            alt="Instruction audio PT"
            className={styles.page221__audio_icon}
            onClick={() => playAudio(audio1p)}
          />
        </h2>

        <div className={styles.pg221QuestionsContainer}>
          {questions.map((question, qIndex) => (
            <div key={question.id} className={styles.pg221QuestionBlock}>
              <div className={styles.pg221Question}>
                <span className={styles.pg221Number}>{question.id}.</span>
                <span className={styles.pg221QuestionText}>{question.text}</span>
                <img
                  src={eng_audio_icon}
                  alt="EN audio"
                  className={styles.page221__audio_icon}
                  onClick={() => playAudio(audioMap[question.id].question[0])}
                />
                <img
                  src={ptbr_audio_icon}
                  alt="PT audio"
                  className={styles.page221__audio_icon}
                  onClick={() => playAudio(audioMap[question.id].question[1])}
                />
              </div>
              <div className={styles.pg221Options}>
                {question.options.map((option, index) => (
                  <button
                    key={index}
                    className={`${styles.pg221Option} ${
                      selectedAnswers[question.id] === option ? styles.selected : ''
                    } ${
                      showResults
                        ? isCorrectAnswer(question.id, option)
                          ? styles.correct
                          : selectedAnswers[question.id] === option
                          ? styles.incorrect
                          : ''
                        : ''
                    }`}
                    onClick={() => handleOptionSelect(question.id, option)}
                    disabled={showResults}
                  >
                    {option}
                    <img
                      src={eng_audio_icon}
                      alt="EN audio"
                      className={styles.page221__audio_icon}
                      onClick={(e) => {
                        e.stopPropagation();
                        playAudio(audioMap[question.id].options[index * 2]);
                      }}
                    />
                    <img
                      src={ptbr_audio_icon}
                      alt="PT audio"
                      className={styles.page221__audio_icon}
                      onClick={(e) => {
                        e.stopPropagation();
                        playAudio(audioMap[question.id].options[index * 2 + 1]);
                      }}
                    />
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.pg221ButtonsContainer}>
          <button
            className={styles.pg221CheckButton}
            onClick={checkAnswers}
            disabled={showResults}
          >
            Check
          </button>
          <button
            className={styles.pg221ResetButton}
            onClick={resetExercise}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagina221;
