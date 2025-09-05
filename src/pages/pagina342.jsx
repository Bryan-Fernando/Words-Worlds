import React, { useRef, useState } from 'react';
import styles from './pagina342.module.css';
import correctIcon from '../assets/icons/correct_icon.webp';
import wrongIcon from '../assets/icons/wrong_icon.webp';
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import audio1e from '../assets/audios/pg342_audio1e.mp3';
import audio2e from '../assets/audios/pg342_audio2e.mp3';
import audio3e from '../assets/audios/pg342_audio3e.mp3';
import audio4e from '../assets/audios/pg342_audio4e.mp3';
import audio5e from '../assets/audios/pg342_audio5e.mp3';
import audio6e from '../assets/audios/pg342_audio6e.mp3';
import audio7e from '../assets/audios/pg342_audio7e.mp3';
import audio8e from '../assets/audios/pg342_audio8e.mp3';
import audio9e from '../assets/audios/pg342_audio9e.mp3';

import audio1p from '../assets/audios/pg342_audio1p.mp3';
import audio2p from '../assets/audios/pg342_audio2p.mp3';
import audio3p from '../assets/audios/pg342_audio3p.mp3';
import audio4p from '../assets/audios/pg342_audio4p.mp3';
import audio5p from '../assets/audios/pg342_audio5p.mp3';
import audio6p from '../assets/audios/pg342_audio6p.mp3';
import audio7p from '../assets/audios/pg342_audio7p.mp3';
import audio8p from '../assets/audios/pg342_audio8p.mp3';
import audio9p from '../assets/audios/pg342_audio9p.mp3';

const fillInBlanksQuestions = [
  { sentence: '1. I think it __________ rain tomorrow.', answer: 'will' },
  { sentence: '2. He __________ be back by 9 p.m.', answer: 'will' },
  { sentence: '3. She __________ call you later.', answer: 'will' },
  { sentence: '4. We __________ help you with this homework.', answer: 'will' },
  { sentence: '5. They __________ come to the party.', answer: 'will' }
];

const multipleChoiceQuestions = [
  {
    id: 1,
    question: '1. I __________ go to the cinema tonight.',
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
      { id: 'b', text: 'have', isCorrect: false },
      { id: 'c', text: 'are', isCorrect: false },
      { id: 'd', text: 'do', isCorrect: false }
    ]
  }
];

const normalize = (str) => str.trim().replace(/\s+/g, ' ').toLowerCase();

const Pagina342 = () => {
  const [inputValuesEx1, setInputValuesEx1] = useState(Array(fillInBlanksQuestions.length).fill(''));
  const [resultsEx1, setResultsEx1] = useState(Array(fillInBlanksQuestions.length).fill(null));
  const [selectedOptionsEx2, setSelectedOptionsEx2] = useState({});
  const [resultsEx2, setResultsEx2] = useState({});
  const [displayedAnswersEx2, setDisplayedAnswersEx2] = useState({});

  const currentAudioRef = useRef(null);

  const eng = [audio1e, audio2e, audio3e, audio4e, audio5e, audio6e, audio7e, audio8e, audio9e];
  const pt = [audio1p, audio2p, audio3p, audio4p, audio5p, audio6p, audio7p, audio8p, audio9p];

  const playAudio = (file) => {
    if (currentAudioRef.current) {
      currentAudioRef.current.pause();
      currentAudioRef.current.currentTime = 0;
    }
    const audio = new Audio(file);
    currentAudioRef.current = audio;
    audio.play();
  };

  const handleInputChangeEx1 = (value, index) => {
    const updatedValues = [...inputValuesEx1];
    updatedValues[index] = value;
    setInputValuesEx1(updatedValues);
  };

  const handleCheckClickEx1 = () => {
    const evaluatedResults = inputValuesEx1.map((input, i) => normalize(input) === normalize(fillInBlanksQuestions[i].answer));
    setResultsEx1(evaluatedResults);
  };

  const handleOptionChangeEx2 = (questionId, optionId) => {
    setSelectedOptionsEx2({ ...selectedOptionsEx2, [questionId]: optionId });
  };

  const handleCheckClickEx2 = () => {
    const newResults = {};
    const newDisplayedAnswers = {};
    multipleChoiceQuestions.forEach((q) => {
      const sel = selectedOptionsEx2[q.id];
      const opt = q.options.find((o) => o.id === sel);
      newResults[q.id] = !!opt && opt.isCorrect;
      if (opt) newDisplayedAnswers[q.id] = opt.text;
    });
    setResultsEx2(newResults);
    setDisplayedAnswersEx2(newDisplayedAnswers);
  };

  return (
    <div className={styles.page342__container}>
      <header className={styles.page342__header}>
        <h1><span className={styles.page342__exercisesRed}>Exercises</span></h1>
      </header>

      <p className={styles.page342__instructionRed}>
        <strong>
          1. Fill in the blanks using "will" ( Full Form )
          <img
            src={eng_audio_icon}
            alt="Play English Audio"
            className={styles.page342__icon}
            onClick={() => playAudio(eng[0])}
          />
          <img
            src={ptbr_audio_icon}
            alt="Play Portuguese Audio"
            className={styles.page342__icon}
            onClick={() => playAudio(pt[0])}
          />
        </strong>
      </p>

      <div className={styles.page342__questionBox}>
        <main className={styles.page342__main}>
          {fillInBlanksQuestions.map((q, index) => {
            const [beforeBlank, afterBlank] = q.sentence.split('__________');
            const audioIdx = index + 1;
            return (
              <div key={index} className={styles.page342__question}>
                <span>{beforeBlank}</span>
                <input
                  type="text"
                  value={inputValuesEx1[index]}
                  onChange={(e) => handleInputChangeEx1(e.target.value, index)}
                  className={styles.page342__input}
                />
                <span>
                  {afterBlank}
                  <img
                    src={eng_audio_icon}
                    alt="Play English Audio"
                    className={styles.page342__icon}
                    onClick={() => playAudio(eng[audioIdx])}
                  />
                  <img
                    src={ptbr_audio_icon}
                    alt="Play Portuguese Audio"
                    className={styles.page342__icon}
                    onClick={() => playAudio(pt[audioIdx])}
                  />
                </span>

                {resultsEx1[index] !== null && (
                  <img
                    src={resultsEx1[index] ? correctIcon : wrongIcon}
                    alt={resultsEx1[index] ? 'Correct' : 'Incorrect'}
                    className={styles.page342__resultIcon}
                  />
                )}
              </div>
            );
          })}
        </main>
      </div>

      <div className={styles.page342__checkContainer}>
        <button className={styles.page342__checkButton} onClick={handleCheckClickEx1}>
          Check
        </button>
      </div>

      <hr className={styles.page342__divider} />

      <p className={styles.page342__instructionRed}>
        <strong>
          2. Multiple Choice
          <img
            src={eng_audio_icon}
            alt="Play English Audio"
            className={styles.page342__icon}
            onClick={() => playAudio(eng[6])}
          />
          <img
            src={ptbr_audio_icon}
            alt="Play Portuguese Audio"
            className={styles.page342__icon}
            onClick={() => playAudio(pt[6])}
          />
        </strong>
      </p>

      <div className={styles.page342__questionBox}>
        <main className={styles.page342__main}>
          {multipleChoiceQuestions.map((question, idx) => {
            const [beforeBlank, afterBlank] = question.question.split('__________');
            const displayedAnswer = displayedAnswersEx2[question.id];
            const audioIdx = 7 + idx;
            return (
              <div key={question.id} className={styles.page342__multipleChoiceQuestion}>
                <div className={styles.page342__questionText}>
                  <span>{beforeBlank}</span>
                  {displayedAnswer ? (
                    <span className={styles.page342__chosenAnswer}>{displayedAnswer}</span>
                  ) : (
                    <span className={styles.page342__blankPlaceholder}>__________</span>
                  )}
                  <span>
                    {afterBlank}
                    <img
                      src={eng_audio_icon}
                      alt="Play English Audio"
                      className={styles.page342__icon}
                      onClick={() => playAudio(eng[audioIdx])}
                    />
                    <img
                      src={ptbr_audio_icon}
                      alt="Play Portuguese Audio"
                      className={styles.page342__icon}
                      onClick={() => playAudio(pt[audioIdx])}
                    />
                  </span>
                  {resultsEx2[question.id] !== undefined && (
                    <img
                      src={resultsEx2[question.id] ? correctIcon : wrongIcon}
                      alt={resultsEx2[question.id] ? 'Correct' : 'Incorrect'}
                      className={styles.page342__resultIcon}
                    />
                  )}
                </div>
                <div className={styles.page342__optionsContainer}>
                  {question.options.map((option) => (
                    <div key={option.id} className={styles.page342__optionItem}>
                      <input
                        type="radio"
                        id={`q${question.id}-${option.id}`}
                        name={`question-${question.id}`}
                        value={option.id}
                        checked={selectedOptionsEx2[question.id] === option.id}
                        onChange={() => handleOptionChangeEx2(question.id, option.id)}
                        className={styles.page342__radioInput}
                      />
                      <label htmlFor={`q${question.id}-${option.id}`} className={styles.page342__radioLabel}>
                        {option.id}) {option.text}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </main>
      </div>

      <div className={styles.page342__checkContainer}>
        <button className={styles.page342__checkButton} onClick={handleCheckClickEx2}>
          Check
        </button>
      </div>
    </div>
  );
};

export default Pagina342;
