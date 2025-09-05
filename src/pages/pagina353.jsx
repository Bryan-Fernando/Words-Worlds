import React, { useState, useRef } from 'react';
import styles from './pagina353.module.css';
import correctIcon from '../assets/icons/correct_icon.webp';
import wrongIcon from '../assets/icons/wrong_icon.webp';
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import audio1e from '../assets/audios/pg353_audio1e.mp3';
import audio2e from '../assets/audios/pg353_audio2e.mp3';
import audio3e from '../assets/audios/pg353_audio3e.mp3';
import audio4e from '../assets/audios/pg353_audio4e.mp3';
import audio5e from '../assets/audios/pg353_audio5e.mp3';

import audio1p from '../assets/audios/pg353_audio1p.mp3';
import audio2p from '../assets/audios/pg353_audio2p.mp3';
import audio3p from '../assets/audios/pg353_audio3p.mp3';
import audio4p from '../assets/audios/pg353_audio4p.mp3';
import audio5p from '../assets/audios/pg353_audio5p.mp3';

const questionsEx14 = [
  {
    id: 1,
    question: '1. She __________ call you after the meeting.',
    options: [
      { id: 'a', text: 'will', isCorrect: true },
      { id: 'b', text: 'would', isCorrect: false },
      { id: 'c', text: 'am', isCorrect: false },
      { id: 'd', text: 'was', isCorrect: false }
    ]
  },
  {
    id: 2,
    question: '2. They __________ finish the project next week.',
    options: [
      { id: 'a', text: 'will', isCorrect: true },
      { id: 'b', text: 'are', isCorrect: false },
      { id: 'c', text: 'do', isCorrect: false },
      { id: 'd', text: 'would', isCorrect: false }
    ]
  },
  {
    id: 3,
    question: '3. We __________ go to the cinema this evening',
    options: [
      { id: 'a', text: 'have', isCorrect: false },
      { id: 'b', text: 'are', isCorrect: false },
      { id: 'c', text: 'will', isCorrect: true },
      { id: 'd', text: 'do', isCorrect: false }
    ]
  }
];

const Pagina353 = () => {
  const [selectedOptionsEx14, setSelectedOptionsEx14] = useState({});
  const [resultsEx14, setResultsEx14] = useState({});
  const [displayedAnswersEx14, setDisplayedAnswersEx14] = useState({});
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

  const handleOptionChangeEx14 = (questionId, optionId) => {
    setSelectedOptionsEx14({
      ...selectedOptionsEx14,
      [questionId]: optionId
    });
  };

  const handleCheckClickEx14 = () => {
    const newResults = {};
    const newDisplayedAnswers = {};
    questionsEx14.forEach((question) => {
      const selectedOptionId = selectedOptionsEx14[question.id];
      if (selectedOptionId) {
        const selectedOptionObj = question.options.find((opt) => opt.id === selectedOptionId);
        newResults[question.id] = selectedOptionObj ? selectedOptionObj.isCorrect : false;
        if (selectedOptionObj) newDisplayedAnswers[question.id] = selectedOptionObj.text;
      } else {
        newResults[question.id] = false;
      }
    });
    setResultsEx14(newResults);
    setDisplayedAnswersEx14(newDisplayedAnswers);
  };

  return (
    <div className={styles.page353__container}>
      <header className={styles.page353__header}>
        <h1><span className={styles.page353__exercisesRed}>Exercises</span></h1>
      </header>

      <p className={styles.page353__instructionRed}>
        <strong>
          14. Choose the correct option
          <img src={eng_audio_icon} alt="Play English Audio" className={styles.page353__icon} onClick={() => playAudio(audio1e)} />
          <img src={ptbr_audio_icon} alt="Play Portuguese Audio" className={styles.page353__icon} onClick={() => playAudio(audio1p)} />
        </strong>
      </p>
      <p className={styles.page353__subtitleCorrectAnswer}>
        Choose the correct answer.
        <img src={eng_audio_icon} alt="Play English Audio" className={styles.page353__icon} onClick={() => playAudio(audio2e)} />
        <img src={ptbr_audio_icon} alt="Play Portuguese Audio" className={styles.page353__icon} onClick={() => playAudio(audio2p)} />
      </p>

      <div className={styles.page353__questionBox}>
        <main className={styles.page353__main}>
          {questionsEx14.map((question, index) => {
            const [beforeBlank, afterBlank] = question.question.split('__________');
            const displayedAnswer = displayedAnswersEx14[question.id];
            const engQ = [audio3e, audio4e, audio5e][index];
            const ptQ = [audio3p, audio4p, audio5p][index];

            return (
              <React.Fragment key={question.id}>
                <div className={styles.page353__multipleChoiceQuestion}>
                  <div className={styles.page353__questionText}>
                    <span>{beforeBlank}</span>
                    {displayedAnswer ? (
                      <span className={styles.page353__chosenAnswer}>{displayedAnswer}</span>
                    ) : (
                      <span className={styles.page353__blankPlaceholder}>__________</span>
                    )}
                    <span>{afterBlank}</span>
                    {resultsEx14[question.id] !== undefined && (
                      <img
                        src={resultsEx14[question.id] ? correctIcon : wrongIcon}
                        alt={resultsEx14[question.id] ? 'Correct' : 'Incorrect'}
                        className={styles.page353__resultIcon}
                      />
                    )}
                    <img
                      src={eng_audio_icon}
                      alt="Play English Audio"
                      className={styles.page353__icon}
                      onClick={() => playAudio(engQ)}
                    />
                    <img
                      src={ptbr_audio_icon}
                      alt="Play Portuguese Audio"
                      className={styles.page353__icon}
                      onClick={() => playAudio(ptQ)}
                    />
                  </div>
                  <div className={styles.page353__optionsContainer}>
                    {question.options.map((option) => (
                      <div key={option.id} className={styles.page353__optionItem}>
                        <input
                          type="radio"
                          id={`q${question.id}-${option.id}`}
                          name={`question-${question.id}`}
                          value={option.id}
                          checked={selectedOptionsEx14[question.id] === option.id}
                          onChange={() => handleOptionChangeEx14(question.id, option.id)}
                          className={styles.page353__radioInput}
                        />
                        <label htmlFor={`q${question.id}-${option.id}`} className={styles.page353__radioLabel}>
                          {option.id}) {option.text}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                {index < questionsEx14.length - 1 && <hr className={styles.page353__dividerInsideBox} />}
              </React.Fragment>
            );
          })}
        </main>
      </div>

      <div className={styles.page353__checkContainer}>
        <button className={styles.page353__checkButton} onClick={handleCheckClickEx14}>
          Check
        </button>
      </div>
    </div>
  );
};

export default Pagina353;
