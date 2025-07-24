import React, { useRef, useState } from 'react';
import styles from './pagina217.module.css';
import correct_icon from '../assets/icons/correct_icon.webp';
import wrong_icon from '../assets/icons/wrong_icon.webp';
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import audio1e from '../assets/audios/pg217_audio1e.mp3';
import audio1p from '../assets/audios/pg217_audio1p.mp3';
import audio2e from '../assets/audios/pg217_audio2e.mp3';
import audio2p from '../assets/audios/pg217_audio2p.mp3';
import audio3e from '../assets/audios/pg217_audio3e.mp3';
import audio3p from '../assets/audios/pg217_audio3p.mp3';
import audio4e from '../assets/audios/pg217_audio4e.mp3';
import audio4p from '../assets/audios/pg217_audio4p.mp3';
import audio5e from '../assets/audios/pg217_audio5e.mp3';
import audio5p from '../assets/audios/pg217_audio5p.mp3';
import audio6e from '../assets/audios/pg217_audio6e.mp3';
import audio6p from '../assets/audios/pg217_audio6p.mp3';
import audio7e from '../assets/audios/pg217_audio7e.mp3';
import audio7p from '../assets/audios/pg217_audio7p.mp3';
import audio8e from '../assets/audios/pg217_audio8e.mp3';
import audio8p from '../assets/audios/pg217_audio8p.mp3';
import audio9e from '../assets/audios/pg217_audio9e.mp3';
import audio9p from '../assets/audios/pg217_audio9p.mp3';

const Pagina217 = () => {
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

  const [inputValues, setInputValues] = useState(Array(4).fill(''));
  const [results, setResults] = useState(Array(4).fill(null));

  const sentences = [
    {
      id: 1,
      text: "I can speak French",
      audioEn: audio2e,
      audioPt: audio2p,
      audioNegEn: audio6e,
      audioNegPt: audio6p,
    },
    {
      id: 2,
      text: "She can play the guitar",
      audioEn: audio3e,
      audioPt: audio3p,
      audioNegEn: audio7e,
      audioNegPt: audio7p,
    },
    {
      id: 3,
      text: "They can come to the party",
      audioEn: audio4e,
      audioPt: audio4p,
      audioNegEn: audio8e,
      audioNegPt: audio8p,
    },
    {
      id: 4,
      text: "We can run fast",
      audioEn: audio5e,
      audioPt: audio5p,
      audioNegEn: audio9e,
      audioNegPt: audio9p,
    },
  ];

  const correctAnswers = [
    "I can't speak French",
    "She can't play the guitar",
    "They can't come to the party",
    "We can't run fast"
  ];

  const handleInputChange = (value, index) => {
    setInputValues((prevValues) => {
      const newValues = [...prevValues];
      newValues[index] = value;
      return newValues;
    });
  };

  const handleCheckClick = () => {
    const newResults = inputValues.map((value, index) => {
      if (!value.trim()) return false;
      const trimmedValue = value.trim().toLowerCase();
      const correctValue = correctAnswers[index].toLowerCase();
      return trimmedValue === correctValue;
    });
    setResults(newResults);
  };

  return (
    <div className={styles.pg217Container}>
      <h1 className={styles.pg217Title}>Exercises</h1>

      <div className={styles.pg217ExerciseSection}>
        <h2 className={styles.pg217ExerciseTitle}>
          4. Change into the negative form
          <img
            src={eng_audio_icon}
            alt="English instruction"
            className={styles.page217__audio_icon}
            onClick={() => playAudio(audio1e)}
          />
          <img
            src={ptbr_audio_icon}
            alt="Portuguese instruction"
            className={styles.page217__audio_icon}
            onClick={() => playAudio(audio1p)}
          />
        </h2>

        <div className={styles.pg217SentencesBox}>
          {sentences.map((sentence, index) => (
            <div key={sentence.id} className={styles.pg217Line}>
              <span className={styles.pg217Number}>{sentence.id}.</span>
              <span className={styles.pg217Text}>{sentence.text}</span>
              <img
                src={eng_audio_icon}
                alt="English"
                className={styles.page217__audio_icon}
                onClick={() => playAudio(sentence.audioEn)}
              />
              <img
                src={ptbr_audio_icon}
                alt="Portuguese"
                className={styles.page217__audio_icon}
                onClick={() => playAudio(sentence.audioPt)}
              />
              <input
                type="text"
                value={inputValues[index] || ""}
                onChange={(e) => handleInputChange(e.target.value, index)}
                className={styles.pg217Input}
                placeholder="Write the negative form"
              />
              <img
                src={eng_audio_icon}
                alt="Negative English"
                className={styles.page217__audio_icon}
                onClick={() => playAudio(sentence.audioNegEn)}
              />
              <img
                src={ptbr_audio_icon}
                alt="Negative Portuguese"
                className={styles.page217__audio_icon}
                onClick={() => playAudio(sentence.audioNegPt)}
              />
              {results[index] !== null && (
                <img
                  src={results[index] ? correct_icon : wrong_icon}
                  alt={results[index] ? "Correct" : "Incorrect"}
                  className={styles.pg217CheckIcon}
                />
              )}
            </div>
          ))}
        </div>

        <button onClick={handleCheckClick} className={styles.pg217CheckButton}>
          Check
        </button>
      </div>
    </div>
  );
};

export default Pagina217;
