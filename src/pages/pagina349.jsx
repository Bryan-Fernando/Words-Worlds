import React, { useRef, useState } from 'react';
import styles from './pagina349.module.css';
import correctIcon from '../assets/icons/correct_icon.webp';
import wrongIcon from '../assets/icons/wrong_icon.webp';
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import audio1e from '../assets/audios/pg349_audio1e.mp3';
import audio2e from '../assets/audios/pg349_audio2e.mp3';
import audio3e from '../assets/audios/pg349_audio3e.mp3';
import audio4e from '../assets/audios/pg349_audio4e.mp3';
import audio5e from '../assets/audios/pg349_audio5e.mp3';
import audio6e from '../assets/audios/pg349_audio6e.mp3';
import audio7e from '../assets/audios/pg349_audio7e.mp3';
import audio8e from '../assets/audios/pg349_audio8e.mp3';
import audio9e from '../assets/audios/pg349_audio9e.mp3';
import audio10e from '../assets/audios/pg349_audio10e.mp3';

import audio1p from '../assets/audios/pg349_audio1p.mp3';
import audio2p from '../assets/audios/pg349_audio2p.mp3';
import audio3p from '../assets/audios/pg349_audio3p.mp3';
import audio4p from '../assets/audios/pg349_audio4p.mp3';
import audio5p from '../assets/audios/pg349_audio5p.mp3';
import audio6p from '../assets/audios/pg349_audio6p.mp3';
import audio7p from '../assets/audios/pg349_audio7p.mp3';
import audio8p from '../assets/audios/pg349_audio8p.mp3';
import audio9p from '../assets/audios/pg349_audio9p.mp3';
import audio10p from '../assets/audios/pg349_audio10p.mp3';

const matchingQuestionsEx10 = [
  { id: 1, question: 'Will you help me clean the room?', correctAnswer: 'c' },
  { id: 2, question: 'Will they be here on time?', correctAnswer: 'd' },
  { id: 3, question: 'Will she bring her guitar?', correctAnswer: 'b' },
  { id: 4, question: 'Will you come to the picnic?', correctAnswer: 'a' }
];

const responseOptionsEx10 = [
  { letter: 'a', text: "Yes, I'll be there!" },
  { letter: 'b', text: 'Yes, I think she will.' },
  { letter: 'c', text: "Sure, I'll do it now." },
  { letter: 'd', text: "No, I don't think so." }
];

const normalize = (str) => (str ?? '').trim().toLowerCase();

const Pagina349 = () => {
  const [inputValuesEx10, setInputValuesEx10] = useState(Array(matchingQuestionsEx10.length).fill(''));
  const [resultsEx10, setResultsEx10] = useState(Array(matchingQuestionsEx10.length).fill(null));
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

  const handleInputChangeEx10 = (value, index) => {
    const updated = [...inputValuesEx10];
    updated[index] = value;
    setInputValuesEx10(updated);
  };

  const handleCheckClickEx10 = () => {
    const evaluated = inputValuesEx10.map((input, i) => normalize(input) === normalize(matchingQuestionsEx10[i].correctAnswer));
    setResultsEx10(evaluated);
  };

  return (
    <div className={styles.page349__container}>
      <header className={styles.page349__header}>
        <h1><span className={styles.page349__exercisesRed}>Exercises</span></h1>
      </header>

      <p className={styles.page349__instructionRed}>
        <strong>
          10. Matching – Questions and Responses
          <img src={eng_audio_icon} alt="Play English Audio" className={styles.page349__icon} onClick={() => playAudio(audio1e)} />
          <img src={ptbr_audio_icon} alt="Play Portuguese Audio" className={styles.page349__icon} onClick={() => playAudio(audio1p)} />
        </strong>
      </p>
      <p className={styles.page349__instruction}>
        Match the questions (A) with the most appropriate responses (B).
        <img src={eng_audio_icon} alt="Play English Audio" className={styles.page349__icon} onClick={() => playAudio(audio2e)} />
        <img src={ptbr_audio_icon} alt="Play Portuguese Audio" className={styles.page349__icon} onClick={() => playAudio(audio2p)} />
      </p>

      <div className={styles.page349__matchBox}>
        <div className={styles.page349__leftBox}>
          {matchingQuestionsEx10.map((item, index) => (
            <div key={item.id} className={styles.page349__matchItem}>
              <span>{item.id}.</span>
              <input
                type="text"
                maxLength={1}
                value={inputValuesEx10[index]}
                onChange={(e) => handleInputChangeEx10(e.target.value, index)}
                className={styles.page349__input}
              />
              <span>{item.question}</span>
              <div className={styles.page349__iconsRow}>
                {resultsEx10[index] !== null && (
                  <img
                    src={resultsEx10[index] ? correctIcon : wrongIcon}
                    alt={resultsEx10[index] ? 'Correct' : 'Incorrect'}
                    className={styles.page349__resultIcon}
                  />
                )}
                <img
                  src={eng_audio_icon}
                  alt="Play English Audio"
                  className={styles.page349__icon}
                  onClick={() => playAudio([audio3e, audio4e, audio5e, audio6e][index])}
                />
                <img
                  src={ptbr_audio_icon}
                  alt="Play Portuguese Audio"
                  className={styles.page349__icon}
                  onClick={() => playAudio([audio3p, audio4p, audio5p, audio6p][index])}
                />
              </div>
            </div>
          ))}
        </div>

        <div className={styles.page349__rightBox}>
          {responseOptionsEx10.map((item, idx) => (
            <div key={item.letter} className={styles.page349__definition}>
              <span>{item.letter}. {item.text} <img
                  src={eng_audio_icon}
                  alt="Play English Audio"
                  className={styles.page349__icon}
                  onClick={() => playAudio([audio7e, audio8e, audio9e, audio10e][idx])}
                />
                <img
                  src={ptbr_audio_icon}
                  alt="Play Portuguese Audio"
                  className={styles.page349__icon}
                  onClick={() => playAudio([audio7p, audio8p, audio9p, audio10p][idx])}
                /></span>
              <div className={styles.page349__iconsRow}>
                
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.page349__checkContainer}>
        <button className={styles.page349__checkButton} onClick={handleCheckClickEx10}>
          Check
        </button>
      </div>
    </div>
  );
};

export default Pagina349;
