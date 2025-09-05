import React, { useRef, useState } from 'react';
import styles from './pagina346.module.css';
import correctIcon from '../assets/icons/correct_icon.webp';
import wrongIcon from '../assets/icons/wrong_icon.webp';
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import audio1e from '../assets/audios/pg346_audio1e.mp3';
import audio2e from '../assets/audios/pg346_audio2e.mp3';
import audio3e from '../assets/audios/pg346_audio3e.mp3';
import audio4e from '../assets/audios/pg346_audio4e.mp3';
import audio5e from '../assets/audios/pg346_audio5e.mp3';
import audio6e from '../assets/audios/pg346_audio6e.mp3';
import audio7e from '../assets/audios/pg346_audio7e.mp3';

import audio1p from '../assets/audios/pg346_audio1p.mp3';
import audio2p from '../assets/audios/pg346_audio2p.mp3';
import audio3p from '../assets/audios/pg346_audio3p.mp3';
import audio4p from '../assets/audios/pg346_audio4p.mp3';
import audio5p from '../assets/audios/pg346_audio5p.mp3';
import audio6p from '../assets/audios/pg346_audio6p.mp3';
import audio7p from '../assets/audios/pg346_audio7p.mp3';

const questionFormationQuestions = [
  { id: 1, words: '(you / be / at the meeting?)', answer: 'Will you be at the meeting?' },
  { id: 2, words: '(he / call / me / tonight?)', answer: 'Will he call me tonight?' },
  { id: 3, words: '(we / travel / by train?)', answer: 'Will we travel by train?' },
  { id: 4, words: '(they / arrive / on time?)', answer: 'Will they arrive on time?' },
  { id: 5, words: '(she / help / us / with the presentation?)', answer: 'Will she help us with the presentation?' }
];

const normalize = (str) => (str ?? '').trim().replace(/\s+/g, ' ').toLowerCase();

const Pagina346 = () => {
  const [inputValuesEx7, setInputValuesEx7] = useState(Array(questionFormationQuestions.length).fill(''));
  const [resultsEx7, setResultsEx7] = useState(Array(questionFormationQuestions.length).fill(null));
  const currentAudioRef = useRef(null);

  const eng = [audio1e, audio2e, audio3e, audio4e, audio5e, audio6e, audio7e];
  const pt = [audio1p, audio2p, audio3p, audio4p, audio5p, audio6p, audio7p];

  const playAudio = (file) => {
    if (currentAudioRef.current) {
      currentAudioRef.current.pause();
      currentAudioRef.current.currentTime = 0;
    }
    const a = new Audio(file);
    currentAudioRef.current = a;
    a.play();
  };

  const handleInputChangeEx7 = (value, index) => {
    const updated = [...inputValuesEx7];
    updated[index] = value;
    setInputValuesEx7(updated);
  };

  const handleCheckClickEx7 = () => {
    const evaluated = inputValuesEx7.map((input, i) => normalize(input) === normalize(questionFormationQuestions[i].answer));
    setResultsEx7(evaluated);
  };

  return (
    <div className={styles.page346__container}>
      <header className={styles.page346__header}>
        <h1><span className={styles.page346__exercisesRed}>Exercises</span></h1>
      </header>

      <p className={styles.page346__instructionRed}>
        <strong>
          7. Question Formation
          <img
            src={eng_audio_icon}
            alt="Play English Audio"
            className={styles.page346__icon}
            onClick={() => playAudio(eng[0])}
          />
          <img
            src={ptbr_audio_icon}
            alt="Play Portuguese Audio"
            className={styles.page346__icon}
            onClick={() => playAudio(pt[0])}
          />
        </strong>
      </p>
      <p className={styles.page346__instruction}>
        Write a question using "Will" and the words provided.
        <img
          src={eng_audio_icon}
          alt="Play English Audio"
          className={styles.page346__icon}
          onClick={() => playAudio(eng[1])}
        />
        <img
          src={ptbr_audio_icon}
          alt="Play Portuguese Audio"
          className={styles.page346__icon}
          onClick={() => playAudio(pt[1])}
        />
      </p>

      <div className={styles.page346__questionBox}>
        <main className={styles.page346__main}>
          {questionFormationQuestions.map((q, index) => {
            const audioIdx = 2 + index;
            return (
              <div key={q.id} className={styles.page346__question}>
                <span>{q.id}. {q.words}</span>
                <div className={styles.page346__inputContainer}>
                  <span className={styles.page346__arrow}>→</span>
                  <input
                    type="text"
                    value={inputValuesEx7[index]}
                    onChange={(e) => handleInputChangeEx7(e.target.value, index)}
                    className={styles.page346__input}
                    placeholder={inputValuesEx7[index] === '' ? 'Type the question' : ''}
                  />
                  <div className={styles.page346__iconsRow}>
                    {resultsEx7[index] !== null && (
                      <img
                        src={resultsEx7[index] ? correctIcon : wrongIcon}
                        alt={resultsEx7[index] ? 'Correct' : 'Incorrect'}
                        className={styles.page346__resultIcon}
                      />
                    )}
                    <img
                      src={eng_audio_icon}
                      alt="Play English Audio"
                      className={styles.page346__icon}
                      onClick={() => playAudio(eng[audioIdx])}
                    />
                    <img
                      src={ptbr_audio_icon}
                      alt="Play Portuguese Audio"
                      className={styles.page346__icon}
                      onClick={() => playAudio(pt[audioIdx])}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </main>
      </div>

      <div className={styles.page346__checkContainer}>
        <button className={styles.page346__checkButton} onClick={handleCheckClickEx7}>
          Check
        </button>
      </div>
    </div>
  );
};

export default Pagina346;
