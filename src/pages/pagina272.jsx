import React, { useRef, useState } from 'react';
import styles from './pagina272.module.css';
import correctIcon from '../assets/icons/correct_icon.webp';
import wrongIcon from '../assets/icons/wrong_icon.webp';
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import eng1 from '../assets/audios/pg272_audio1e.mp3';
import eng2 from '../assets/audios/pg272_audio2e.mp3';
import eng3 from '../assets/audios/pg272_audio3e.mp3';
import eng4 from '../assets/audios/pg272_audio4e.mp3';
import eng5 from '../assets/audios/pg272_audio5e.mp3';
import eng6 from '../assets/audios/pg272_audio6e.mp3';
import eng7 from '../assets/audios/pg272_audio7e.mp3';
import eng8 from '../assets/audios/pg272_audio8e.mp3';
import eng9 from '../assets/audios/pg272_audio9e.mp3';

import pt1 from '../assets/audios/pg272_audio1p.mp3';
import pt2 from '../assets/audios/pg272_audio2p.mp3';
import pt3 from '../assets/audios/pg272_audio3p.mp3';
import pt4 from '../assets/audios/pg272_audio4p.mp3';
import pt5 from '../assets/audios/pg272_audio5p.mp3';
import pt6 from '../assets/audios/pg272_audio6p.mp3';
import pt7 from '../assets/audios/pg272_audio7p.mp3';
import pt8 from '../assets/audios/pg272_audio8p.mp3';
import pt9 from '../assets/audios/pg272_audio9p.mp3';

const leftItems = [
  { id: 1, word: 'Tall', answer: 'd' },
  { id: 2, word: 'Expensive', answer: 'a' },
  { id: 3, word: 'Friendly', answer: 'b' },
  { id: 4, word: 'Delicious', answer: 'c' },
];

const rightItems = [
  { letter: 'a', meaning: 'Costs a lot of money' },
  { letter: 'b', meaning: 'Kind and nice to others' },
  { letter: 'c', meaning: 'Tastes very good' },
  { letter: 'd', meaning: 'Has great height' },
];

const normalize = (str) => str.trim().toLowerCase();

const Pagina272 = () => {
  const [inputs, setInputs] = useState(Array(leftItems.length).fill(''));
  const [results, setResults] = useState(Array(leftItems.length).fill(null));
  const audioRef = useRef(null);

  const playAudio = (file) => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    const a = new Audio(file);
    audioRef.current = a;
    a.play();
  };

  const handleInputChange = (value, index) => {
    const updated = [...inputs];
    updated[index] = value;
    setInputs(updated);
  };

  const handleCheckClick = () => {
    const newResults = inputs.map((input, i) => normalize(input) === leftItems[i].answer);
    setResults(newResults);
  };

  const engAudios = [eng1, eng2, eng3, eng4, eng5, eng6, eng7, eng8, eng9];
  const ptAudios = [pt1, pt2, pt3, pt4, pt5, pt6, pt7, pt8, pt9];

  return (
    <div className={styles.page272__container}>
      <header className={styles.page272__header}>
        <h1>
          <span className={styles.page272__grammarRed}>Grammar</span> - <span className={styles.page272__grammarBold}>Adjectives</span>
        </h1>
      </header>

      <p className={styles.page272__instruction}>
        <strong>5.</strong> Match the adjective to its meaning:
        <img
          src={eng_audio_icon}
          alt="Play instruction (EN)"
          className={styles.page272__icon}
          onClick={() => playAudio(engAudios[0])}
        />
        <img
          src={ptbr_audio_icon}
          alt="Play instrução (PT)"
          className={styles.page272__icon}
          onClick={() => playAudio(ptAudios[0])}
        />
      </p>

      <div className={styles.page272__matchBox}>
        <div className={styles.page272__leftBox}>
          {leftItems.map((item, index) => (
            <div key={item.id} className={styles.page272__matchItem}>
              <span>{item.id} -</span>
              <input
                type="text"
                maxLength={1}
                value={inputs[index]}
                onChange={(e) => handleInputChange(e.target.value, index)}
                className={styles.page272__input}
              />
              <span>
                {item.word}
                <img
                  src={eng_audio_icon}
                  alt={`Play "${item.word}" (EN)`}
                  className={styles.page272__icon}
                  onClick={() => playAudio(engAudios[index + 1])}
                />
                <img
                  src={ptbr_audio_icon}
                  alt={`Ouvir "${item.word}" (PT)`}
                  className={styles.page272__icon}
                  onClick={() => playAudio(ptAudios[index + 1])}
                />
              </span>
              {results[index] !== null && (
                <img
                  src={results[index] ? correctIcon : wrongIcon}
                  alt={results[index] ? 'Correct' : 'Incorrect'}
                  className={styles.page272__resultIcon}
                />
              )}
            </div>
          ))}
        </div>

        <div className={styles.page272__rightBox}>
          {rightItems.map((item, i) => (
            <div key={item.letter} className={styles.page272__definition}>
              <span>
                {item.letter}) {item.meaning}
                <img
                  src={eng_audio_icon}
                  alt={`Play meaning ${item.letter} (EN)`}
                  className={styles.page272__icon}
                  onClick={() => playAudio(engAudios[5 + i])}
                />
                <img
                  src={ptbr_audio_icon}
                  alt={`Ouvir significado ${item.letter} (PT)`}
                  className={styles.page272__icon}
                  onClick={() => playAudio(ptAudios[5 + i])}
                />
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.page272__checkContainer}>
        <button className={styles.page272__checkButton} onClick={handleCheckClick}>
          Check
        </button>
      </div>
    </div>
  );
};

export default Pagina272;
