import React, { useRef, useState } from 'react';
import styles from './pagina348.module.css';
import correctIcon from '../assets/icons/correct_icon.webp';
import wrongIcon from '../assets/icons/wrong_icon.webp';
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import audio1e from '../assets/audios/pg348_audio1e.mp3';
import audio2e from '../assets/audios/pg348_audio2e.mp3';
import audio3e from '../assets/audios/pg348_audio3e.mp3';
import audio4e from '../assets/audios/pg348_audio4e.mp3';
import audio5e from '../assets/audios/pg348_audio5e.mp3';
import audio6e from '../assets/audios/pg348_audio6e.mp3';

import audio1p from '../assets/audios/pg348_audio1p.mp3';
import audio2p from '../assets/audios/pg348_audio2p.mp3';
import audio3p from '../assets/audios/pg348_audio3p.mp3';
import audio4p from '../assets/audios/pg348_audio4p.mp3';
import audio5p from '../assets/audios/pg348_audio5p.mp3';
import audio6p from '../assets/audios/pg348_audio6p.mp3';

const promisesOffersEx9 = [
  { id: 1, phrase: '(carry your bag)', correctAnswers: ['I will carry your bag.', "I'll carry your bag."] },
  { id: 2, phrase: '(call you tonight)', correctAnswers: ['I will call you tonight.', "I'll call you tonight."] },
  { id: 3, phrase: '(send the email now)', correctAnswers: ['I will send the email now.', "I'll send the email now."] },
  { id: 4, phrase: '(bring the book tomorrow)', correctAnswers: ['I will bring the book tomorrow.', "I'll bring the book tomorrow."] }
];

const normalize = (str) => (str ?? '').trim().replace(/\s+/g, ' ').toLowerCase();

const Pagina348 = () => {
  const [inputValuesEx9, setInputValuesEx9] = useState(Array(promisesOffersEx9.length).fill(''));
  const [resultsEx9, setResultsEx9] = useState(Array(promisesOffersEx9.length).fill(null));
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

  const handleInputChangeEx9 = (value, index) => {
    const updated = [...inputValuesEx9];
    updated[index] = value;
    setInputValuesEx9(updated);
  };

  const handleCheckClickEx9 = () => {
    const evaluated = inputValuesEx9.map((input, i) =>
      promisesOffersEx9[i].correctAnswers.some((ans) => normalize(ans) === normalize(input))
    );
    setResultsEx9(evaluated);
  };

  return (
    <div className={styles.page348__container}>
      <header className={styles.page348__header}>
        <h1><span className={styles.page348__exercisesRed}>Exercises</span></h1>
      </header>

      <p className={styles.page348__instructionRed}>
        <strong>
          9. Make Promises or Offers
          <img src={eng_audio_icon} alt="Play English Audio" className={styles.page348__icon} onClick={() => playAudio(audio1e)} />
          <img src={ptbr_audio_icon} alt="Play Portuguese Audio" className={styles.page348__icon} onClick={() => playAudio(audio1p)} />
        </strong>
      </p>
      <p className={styles.page348__instruction}>
        Write sentences using "I will..." to make a promise or an offer. Example: (help you) → I will help you / I'll help you
        <img src={eng_audio_icon} alt="Play English Audio" className={styles.page348__icon} onClick={() => playAudio(audio2e)} />
        <img src={ptbr_audio_icon} alt="Play Portuguese Audio" className={styles.page348__icon} onClick={() => playAudio(audio2p)} />
      </p>

      <div className={styles.page348__questionBox}>
        <main className={styles.page348__main}>
          {promisesOffersEx9.map((item, index) => (
            <div key={item.id} className={styles.page348__question}>
              <span>{item.id}. {item.phrase}</span>
              <div className={styles.page348__inputContainer}>
                <span className={styles.page348__arrow}>→</span>
                <input
                  type="text"
                  value={inputValuesEx9[index]}
                  onChange={(e) => handleInputChangeEx9(e.target.value, index)}
                  className={styles.page348__input}
                  placeholder={inputValuesEx9[index] === '' ? 'Type your answer' : ''}
                />
                <div className={styles.page348__iconsRow}>
                  {resultsEx9[index] !== null && (
                    <img
                      src={resultsEx9[index] ? correctIcon : wrongIcon}
                      alt={resultsEx9[index] ? 'Correct' : 'Incorrect'}
                      className={styles.page348__resultIcon}
                    />
                  )}
                  <img
                    src={eng_audio_icon}
                    alt="Play English Audio"
                    className={styles.page348__icon}
                    onClick={() => playAudio([audio3e, audio4e, audio5e, audio6e][index])}
                  />
                  <img
                    src={ptbr_audio_icon}
                    alt="Play Portuguese Audio"
                    className={styles.page348__icon}
                    onClick={() => playAudio([audio3p, audio4p, audio5p, audio6p][index])}
                  />
                </div>
              </div>
            </div>
          ))}
        </main>
      </div>

      <div className={styles.page348__checkContainer}>
        <button className={styles.page348__checkButton} onClick={handleCheckClickEx9}>
          Check
        </button>
      </div>
    </div>
  );
};

export default Pagina348;
