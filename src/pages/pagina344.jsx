import React, { useRef, useState } from 'react';
import styles from './pagina344.module.css';
import correctIcon from '../assets/icons/correct_icon.webp';
import wrongIcon from '../assets/icons/wrong_icon.webp';
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import audio1e from '../assets/audios/pg344_audio1e.mp3';
import audio2e from '../assets/audios/pg344_audio2e.mp3';
import audio3e from '../assets/audios/pg344_audio3e.mp3';
import audio4e from '../assets/audios/pg344_audio4e.mp3';

import audio1p from '../assets/audios/pg344_audio1p.mp3';
import audio2p from '../assets/audios/pg344_audio2p.mp3';
import audio3p from '../assets/audios/pg344_audio3p.mp3';
import audio4p from '../assets/audios/pg344_audio4p.mp3';

const leftItems = [
  { id: 1, text: 'I will call you', answer: 'a' },
  { id: 2, text: 'He will travel', answer: 'c' },
  { id: 3, text: "They won't", answer: 'b' },
];

const rightItems = [
  { letter: 'a', meaning: 'after dinner' },
  { letter: 'b', meaning: 'be here on time' },
  { letter: 'c', meaning: 'to France' },
];

const normalize = (str) => (str ?? '').trim().toLowerCase();

const Pagina344 = () => {
  const [inputs, setInputs] = useState(Array(leftItems.length).fill(''));
  const [results, setResults] = useState(Array(leftItems.length).fill(null));
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

  const handleInputChange = (value, index) => {
    const updated = [...inputs];
    updated[index] = value;
    setInputs(updated);
  };

  const handleCheckClick = () => {
    const newResults = inputs.map((input, i) => normalize(input) === normalize(leftItems[i].answer));
    setResults(newResults);
  };

  return (
    <div className={styles.page344__container}>
      <header className={styles.page344__header}>
        <h1><span className={styles.page344__exercisesRed}>Exercises</span></h1>
      </header>

      <p className={styles.page344__instructionRed}>
        <strong>
          5. Matching
          <img
            src={eng_audio_icon}
            alt="Play English Audio"
            className={styles.page344__icon}
            onClick={() => playAudio(audio1e)}
          />
          <img
            src={ptbr_audio_icon}
            alt="Play Portuguese Audio"
            className={styles.page344__icon}
            onClick={() => playAudio(audio1p)}
          />
        </strong>
      </p>

      <div className={styles.page344__matchBox}>
        <div className={styles.page344__leftBox}>
          {leftItems.map((item, index) => (
            <div key={item.id} className={styles.page344__matchItem}>
              <span>{item.id}.</span>
              <input
                type="text"
                maxLength={1}
                value={inputs[index]}
                onChange={(e) => handleInputChange(e.target.value, index)}
                className={styles.page344__input}
              />
              <span>{item.text}</span>
              <div className={styles.page344__iconsRow}>
                {results[index] !== null && (
                  <img
                    src={results[index] ? correctIcon : wrongIcon}
                    alt={results[index] ? 'Correct' : 'Incorrect'}
                    className={styles.page344__resultIcon}
                  />
                )}
                <img
                  src={eng_audio_icon}
                  alt="Play English Audio"
                  className={styles.page344__icon}
                  onClick={() => playAudio([audio2e, audio3e, audio4e][index])}
                />
                <img
                  src={ptbr_audio_icon}
                  alt="Play Portuguese Audio"
                  className={styles.page344__icon}
                  onClick={() => playAudio([audio2p, audio3p, audio4p][index])}
                />
              </div>
            </div>
          ))}
        </div>

        <div className={styles.page344__rightBox}>
          {rightItems.map((item) => (
            <div key={item.letter} className={styles.page344__definition}>
              <span>{item.letter}) {item.meaning}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.page344__checkContainer}>
        <button className={styles.page344__checkButton} onClick={handleCheckClick}>
          Check
        </button>
      </div>
    </div>
  );
};

export default Pagina344;
