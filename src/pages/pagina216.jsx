import React, { useRef, useState } from 'react';
import styles from './pagina216.module.css';
import correct_icon from '../assets/icons/correct_icon.webp';
import wrong_icon from '../assets/icons/wrong_icon.webp';
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import audio1e from '../assets/audios/pg216_audio1e.mp3';
import audio1p from '../assets/audios/pg216_audio1p.mp3';
import audio2e from '../assets/audios/pg216_audio2e.mp3';
import audio2p from '../assets/audios/pg216_audio2p.mp3';
import audio3e from '../assets/audios/pg216_audio3e.mp3';
import audio3p from '../assets/audios/pg216_audio3p.mp3';
import audio4e from '../assets/audios/pg216_audio4e.mp3';
import audio4p from '../assets/audios/pg216_audio4p.mp3';
import audio5e from '../assets/audios/pg216_audio5e.mp3';
import audio5p from '../assets/audios/pg216_audio5p.mp3';
import audio6e from '../assets/audios/pg216_audio6e.mp3';
import audio6p from '../assets/audios/pg216_audio6p.mp3';

const Pagina216 = () => {
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

  const [inputValues, setInputValues] = useState(Array(5).fill(''));
  const [results, setResults] = useState(Array(5).fill(null));

  const correctAnswers = ['What', 'Who', 'When', 'How', 'Where'];

  const handleCheckClick = () => {
    const newResults = inputValues.map((value, index) => {
      if (!value.trim()) return false;
      const trimmedValue = value.trim().toLowerCase();
      const correctValue = correctAnswers[index].toLowerCase();
      return trimmedValue === correctValue;
    });
    setResults(newResults);
  };

  const handleInputChange = (value, index) => {
    setInputValues((prevValues) => {
      const newValues = [...prevValues];
      newValues[index] = value;
      return newValues;
    });
  };

  return (
    <div className={styles.pg216Container}>
      <h1 className={styles.pg216Title}>Exercises</h1>

      <div className={styles.pg216ExerciseSection}>
        <h2 className={styles.pg216ExerciseTitle}>
          3. Fill in the blanks by completing each question using:
          <br />
          What, Where, When, Who, or How.
          <img
            src={eng_audio_icon}
            alt="Play instruction audio"
            className={styles.page216__audio_icon}
            onClick={() => playAudio(audio1e)}
          />
          <img
            src={ptbr_audio_icon}
            alt="Play instruction audio"
            className={styles.page216__audio_icon}
            onClick={() => playAudio(audio1p)}
          />
        </h2>

        <div className={styles.pg216QuestionsBox}>
          {/* Question 1 */}
          <div className={styles.pg216Question}>
            <span>1.</span>
            <input
              type="text"
              value={inputValues[0]}
              onChange={(e) => handleInputChange(e.target.value, 0)}
              className={styles.pg216InputBox}
            />
            <span>can you do with your phone?</span>
            <img src={eng_audio_icon} onClick={() => playAudio(audio2e)} className={styles.page216__audio_icon} />
            <img src={ptbr_audio_icon} onClick={() => playAudio(audio2p)} className={styles.page216__audio_icon} />
            {results[0] !== null && (
              <img
                src={results[0] ? correct_icon : wrong_icon}
                alt={results[0] ? 'Correct' : 'Incorrect'}
                className={styles.pg216CheckmarkImage}
              />
            )}
          </div>

          {/* Question 2 */}
          <div className={styles.pg216Question}>
            <span>2.</span>
            <input
              type="text"
              value={inputValues[1]}
              onChange={(e) => handleInputChange(e.target.value, 1)}
              className={styles.pg216InputBox}
            />
            <span>can help me?</span>
            <img src={eng_audio_icon} onClick={() => playAudio(audio3e)} className={styles.page216__audio_icon} />
            <img src={ptbr_audio_icon} onClick={() => playAudio(audio3p)} className={styles.page216__audio_icon} />
            {results[1] !== null && (
              <img
                src={results[1] ? correct_icon : wrong_icon}
                alt={results[1] ? 'Correct' : 'Incorrect'}
                className={styles.pg216CheckmarkImage}
              />
            )}
          </div>

          {/* Question 3 */}
          <div className={styles.pg216Question}>
            <span>3.</span>
            <input
              type="text"
              value={inputValues[2]}
              onChange={(e) => handleInputChange(e.target.value, 2)}
              className={styles.pg216InputBox}
            />
            <span>can we go to the park?</span>
            <img src={eng_audio_icon} onClick={() => playAudio(audio4e)} className={styles.page216__audio_icon} />
            <img src={ptbr_audio_icon} onClick={() => playAudio(audio4p)} className={styles.page216__audio_icon} />
            {results[2] !== null && (
              <img
                src={results[2] ? correct_icon : wrong_icon}
                alt={results[2] ? 'Correct' : 'Incorrect'}
                className={styles.pg216CheckmarkImage}
              />
            )}
          </div>

          {/* Question 4 */}
          <div className={styles.pg216Question}>
            <span>4.</span>
            <input
              type="text"
              value={inputValues[3]}
              onChange={(e) => handleInputChange(e.target.value, 3)}
              className={styles.pg216InputBox}
            />
            <span>can they speak English faster?</span>
            <img src={eng_audio_icon} onClick={() => playAudio(audio5e)} className={styles.page216__audio_icon} />
            <img src={ptbr_audio_icon} onClick={() => playAudio(audio5p)} className={styles.page216__audio_icon} />
            {results[3] !== null && (
              <img
                src={results[3] ? correct_icon : wrong_icon}
                alt={results[3] ? 'Correct' : 'Incorrect'}
                className={styles.pg216CheckmarkImage}
              />
            )}
          </div>

          {/* Question 5 - Where do you live? */}
          <div className={styles.pg216Question}>
            <span>5.</span>
            <input
              type="text"
              value={inputValues[4]}
              onChange={(e) => handleInputChange(e.target.value, 4)}
              className={styles.pg216InputBox}
            />
            <span>do you live?</span>
            <img src={eng_audio_icon} onClick={() => playAudio(audio6e)} className={styles.page216__audio_icon} />
            <img src={ptbr_audio_icon} onClick={() => playAudio(audio6p)} className={styles.page216__audio_icon} />
            {results[4] !== null && (
              <img
                src={results[4] ? correct_icon : wrong_icon}
                alt={results[4] ? 'Correct' : 'Incorrect'}
                className={styles.pg216CheckmarkImage}
              />
            )}
          </div>
        </div>

        <button onClick={handleCheckClick} className={styles.pg216CheckButton}>
          Check
        </button>
      </div>
    </div>
  );
};

export default Pagina216;
