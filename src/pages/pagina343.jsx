import React, { useRef, useState } from 'react';
import styles from './pagina343.module.css';
import correctIcon from '../assets/icons/correct_icon.webp';
import wrongIcon from '../assets/icons/wrong_icon.webp';
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import audio1e from '../assets/audios/pg343_audio1e.mp3';
import audio2e from '../assets/audios/pg343_audio2e.mp3';
import audio3e from '../assets/audios/pg343_audio3e.mp3';
import audio4e from '../assets/audios/pg343_audio4e.mp3';
import audio5e from '../assets/audios/pg343_audio5e.mp3';
import audio6e from '../assets/audios/pg343_audio6e.mp3';
import audio7e from '../assets/audios/pg343_audio7e.mp3';

import audio1p from '../assets/audios/pg343_audio1p.mp3';
import audio2p from '../assets/audios/pg343_audio2p.mp3';
import audio3p from '../assets/audios/pg343_audio3p.mp3';
import audio4p from '../assets/audios/pg343_audio4p.mp3';
import audio5p from '../assets/audios/pg343_audio5p.mp3';
import audio6p from '../assets/audios/pg343_audio6p.mp3';
import audio7p from '../assets/audios/pg343_audio7p.mp3';

const wordOrderQuestions = [
  { id: 1, words: 'tomorrow / will / I / study', answer: 'I will study tomorrow' },
  { id: 2, words: 'will / She / help / us', answer: 'She will help us' },
  { id: 3, words: 'not / come / will / They / today', answer: 'They will not come today' }
];

const chooseCorrectFormQuestions = [
  {
    id: 1,
    question: '1.',
    options: [
      { id: 'a', text: 'She will goes to the party.', isCorrect: false },
      { id: 'b', text: 'She will go to the party.', isCorrect: true }
    ]
  },
  {
    id: 2,
    question: '2.',
    options: [
      { id: 'a', text: 'I will not to be late.', isCorrect: false },
      { id: 'b', text: 'I will not be late.', isCorrect: true }
    ]
  }
];

const normalize = (str) => (str ?? '').trim().replace(/\s+/g, ' ').toLowerCase();

const Pagina343 = () => {
  const [inputValuesEx3, setInputValuesEx3] = useState(Array(wordOrderQuestions.length).fill(''));
  const [resultsEx3, setResultsEx3] = useState(Array(wordOrderQuestions.length).fill(null));

  const [selectedOptionsEx4, setSelectedOptionsEx4] = useState({});
  const [resultsEx4, setResultsEx4] = useState({});
  const [displayedAnswersEx4, setDisplayedAnswersEx4] = useState({});

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

  const handleInputChangeEx3 = (value, index) => {
    const updated = [...inputValuesEx3];
    updated[index] = value;
    setInputValuesEx3(updated);
  };

  const handleCheckClickEx3 = () => {
    const evaluated = inputValuesEx3.map((input, i) => normalize(input) === normalize(wordOrderQuestions[i].answer));
    setResultsEx3(evaluated);
  };

  const handleOptionChangeEx4 = (questionId, optionId) => {
    setSelectedOptionsEx4({ ...selectedOptionsEx4, [questionId]: optionId });
  };

  const handleCheckClickEx4 = () => {
    const newResults = {};
    const newDisplayed = {};
    chooseCorrectFormQuestions.forEach((q) => {
      const sel = selectedOptionsEx4[q.id];
      const opt = q.options.find((o) => o.id === sel);
      newResults[q.id] = !!opt && opt.isCorrect;
      if (opt) newDisplayed[q.id] = opt.text;
    });
    setResultsEx4(newResults);
    setDisplayedAnswersEx4(newDisplayed);
  };

  return (
    <div className={styles.page343__container}>
      <header className={styles.page343__header}>
        <h1><span className={styles.page343__exercisesRed}>Exercises</span></h1>
      </header>

      <p className={styles.page343__instructionRed}>
        <strong>
          3. Word Order
          <img
            src={eng_audio_icon}
            alt="Play English Audio"
            className={styles.page343__icon}
            onClick={() => playAudio(audio1e)}
          />
          <img
            src={ptbr_audio_icon}
            alt="Play Portuguese Audio"
            className={styles.page343__icon}
            onClick={() => playAudio(audio1p)}
          />
        </strong>
      </p>

      <div className={styles.page343__questionBox}>
        <main className={styles.page343__main}>
          {wordOrderQuestions.map((q, index) => (
            <div key={q.id} className={styles.page343__question}>
              <span>{q.id}. {q.words}</span>
              <div className={styles.page343__inputContainer}>
                <input
                  type="text"
                  value={inputValuesEx3[index]}
                  onChange={(e) => handleInputChangeEx3(e.target.value, index)}
                  className={styles.page343__input}
                  placeholder={inputValuesEx3[index] === '' ? 'Type the correct order' : ''}
                />
                <div className={styles.page343__iconsRow}>
                  {resultsEx3[index] !== null && (
                    <img
                      src={resultsEx3[index] ? correctIcon : wrongIcon}
                      alt={resultsEx3[index] ? 'Correct' : 'Incorrect'}
                      className={styles.page343__resultIcon}
                    />
                  )}
                  <img
                    src={eng_audio_icon}
                    alt="Play English Audio"
                    className={styles.page343__icon}
                    onClick={() => playAudio([audio2e, audio3e, audio4e][index])}
                  />
                  <img
                    src={ptbr_audio_icon}
                    alt="Play Portuguese Audio"
                    className={styles.page343__icon}
                    onClick={() => playAudio([audio2p, audio3p, audio4p][index])}
                  />
                </div>
              </div>
            </div>
          ))}
        </main>
      </div>

      <div className={styles.page343__checkContainer}>
        <button className={styles.page343__checkButton} onClick={handleCheckClickEx3}>
          Check
        </button>
      </div>

      <hr className={styles.page343__divider} />

      <p className={styles.page343__instructionRed}>
        <strong>
          4. Choose the Correct Form
          <img
            src={eng_audio_icon}
            alt="Play English Audio"
            className={styles.page343__icon}
            onClick={() => playAudio(audio5e)}
          />
          <img
            src={ptbr_audio_icon}
            alt="Play Portuguese Audio"
            className={styles.page343__icon}
            onClick={() => playAudio(audio5p)}
          />
        </strong>
      </p>

      <div className={styles.page343__questionBox}>
        <main className={styles.page343__main}>
          {chooseCorrectFormQuestions.map((question, idx) => (
            <div key={question.id} className={styles.page343__multipleChoiceQuestion}>
              <div className={styles.page343__questionText}>
                {displayedAnswersEx4[question.id] ? (
                  <>
                    <span>{question.question}</span>
                    <span className={styles.page343__chosenAnswer}>{displayedAnswersEx4[question.id]}</span>
                  </>
                ) : (
                  <span>{question.question}</span>
                )}
                <div className={styles.page343__iconsRow}>
                  {resultsEx4[question.id] !== undefined && (
                    <img
                      src={resultsEx4[question.id] ? correctIcon : wrongIcon}
                      alt={resultsEx4[question.id] ? 'Correct' : 'Incorrect'}
                      className={styles.page343__resultIcon}
                    />
                  )}
                  <img
                    src={eng_audio_icon}
                    alt="Play English Audio"
                    className={styles.page343__icon}
                    onClick={() => playAudio([audio6e, audio7e][idx])}
                  />
                  <img
                    src={ptbr_audio_icon}
                    alt="Play Portuguese Audio"
                    className={styles.page343__icon}
                    onClick={() => playAudio([audio6p, audio7p][idx])}
                  />
                </div>
              </div>

              <div className={styles.page343__optionsContainer}>
                {question.options.map((option) => (
                  <div key={option.id} className={styles.page343__optionItem}>
                    <input
                      type="radio"
                      id={`q${question.id}-${option.id}`}
                      name={`question-${question.id}`}
                      value={option.id}
                      checked={selectedOptionsEx4[question.id] === option.id}
                      onChange={() => handleOptionChangeEx4(question.id, option.id)}
                      className={styles.page343__radioInput}
                    />
                    <label htmlFor={`q${question.id}-${option.id}`} className={styles.page343__radioLabel}>
                      {option.id}) {option.text}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </main>
      </div>

      <div className={styles.page343__checkContainer}>
        <button className={styles.page343__checkButton} onClick={handleCheckClickEx4}>
          Check
        </button>
      </div>
    </div>
  );
};

export default Pagina343;
