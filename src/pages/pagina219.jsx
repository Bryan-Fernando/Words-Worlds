import React, { useState, useRef } from 'react';
import styles from './pagina219.module.css';
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import audio1e from '../assets/audios/pg219_audio1e.mp3';
import audio1p from '../assets/audios/pg219_audio1p.mp3';
import audio2e from '../assets/audios/pg219_audio2e.mp3';
import audio2p from '../assets/audios/pg219_audio2p.mp3';
import audio3e from '../assets/audios/pg219_audio3e.mp3';
import audio3p from '../assets/audios/pg219_audio3p.mp3';
import audio4e from '../assets/audios/pg219_audio4e.mp3';
import audio4p from '../assets/audios/pg219_audio4p.mp3';
import audio5e from '../assets/audios/pg219_audio5e.mp3';
import audio5p from '../assets/audios/pg219_audio5p.mp3';
import audio6e from '../assets/audios/pg219_audio6e.mp3';
import audio6p from '../assets/audios/pg219_audio6p.mp3';

const Pagina219 = () => {
  const [selectedLeft, setSelectedLeft] = useState(null);
  const [matches, setMatches] = useState({});
  const [showResults, setShowResults] = useState(false);
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

  const leftColumn = [
    { id: 1, text: "Can you play", audioEn: audio3e, audioPt: audio3p },
    { id: 2, text: "Can she open", audioEn: audio4e, audioPt: audio4p },
    { id: 3, text: "Can they visit", audioEn: audio5e, audioPt: audio5p },
    { id: 4, text: "Can he use", audioEn: audio6e, audioPt: audio6p }
  ];

  const rightColumn = [
    { id: "a", text: "the window, please?", correctMatch: 2 },
    { id: "b", text: "the museum today?", correctMatch: 3 },
    { id: "c", text: "the computer?", correctMatch: 4 },
    { id: "d", text: "the piano?", correctMatch: 1 }
  ];

  const handleLeftClick = (item) => {
    if (showResults) return;
    setSelectedLeft(item);
  };

  const handleRightClick = (item) => {
    if (showResults || !selectedLeft) return;

    setMatches(prev => ({
      ...prev,
      [selectedLeft.id]: item.id
    }));
    setSelectedLeft(null);
  };

  const checkAnswers = () => {
    if (Object.keys(matches).length === leftColumn.length) {
      setShowResults(true);
    } else {
      alert('Please complete all matches before checking!');
    }
  };

  const resetExercise = () => {
    setMatches({});
    setSelectedLeft(null);
    setShowResults(false);
  };

  const isCorrectMatch = (leftId) => {
    if (!showResults || !matches[leftId]) return null;
    const rightItem = rightColumn.find(item => item.id === matches[leftId]);
    return rightItem?.correctMatch === leftId;
  };

  const getItemClassName = (item, isLeft) => {
    const baseClass = `${styles.pg219Item} ${styles.clickable}`;
    if (isLeft) {
      if (selectedLeft?.id === item.id) return `${baseClass} ${styles.selected}`;
      if (showResults) {
        return `${baseClass} ${isCorrectMatch(item.id) ? styles.correctMatch : styles.incorrectMatch}`;
      }
      return baseClass;
    } else {
      if (showResults) {
        const matchedLeft = Object.entries(matches).find(([_, rightId]) => rightId === item.id);
        if (matchedLeft) {
          return `${baseClass} ${isCorrectMatch(Number(matchedLeft[0])) ? styles.correctMatch : styles.incorrectMatch}`;
        }
      }
      return baseClass;
    }
  };

  return (
    <div className={styles.pg219Container}>
      <h1 className={styles.pg219Title}>Exercises</h1>

      <div className={styles.pg219ExerciseSection}>
        <h2 className={styles.pg219ExerciseTitle}>
          6. Match columns
          <img
            src={eng_audio_icon}
            alt="English instruction"
            className={styles.page219__audio_icon}
            onClick={() => playAudio(audio1e)}
          />
          <img
            src={ptbr_audio_icon}
            alt="Portuguese instruction"
            className={styles.page219__audio_icon}
            onClick={() => playAudio(audio1p)}
          />
        </h2>

        <div className={styles.pg219Instructions}>
          Click an item in the left column, then click its match in the right column.
          <img
            src={eng_audio_icon}
            alt="Instruction EN"
            className={styles.page219__audio_icon}
            onClick={() => playAudio(audio2e)}
          />
          <img
            src={ptbr_audio_icon}
            alt="Instruction PT"
            className={styles.page219__audio_icon}
            onClick={() => playAudio(audio2p)}
          />
        </div>

        <div className={styles.pg219ColumnsContainer}>
          <div className={styles.pg219Column}>
            {leftColumn.map((item) => (
              <div 
                key={item.id} 
                className={getItemClassName(item, true)}
                onClick={() => handleLeftClick(item)}
              >
                <span className={styles.pg219Number}>{item.id}.</span>
                <span className={styles.pg219Text}>{item.text}</span>
                <img
                  src={eng_audio_icon}
                  alt="English audio"
                  className={styles.page219__audio_icon}
                  onClick={(e) => {
                    e.stopPropagation();
                    playAudio(item.audioEn);
                  }}
                />
                <img
                  src={ptbr_audio_icon}
                  alt="Portuguese audio"
                  className={styles.page219__audio_icon}
                  onClick={(e) => {
                    e.stopPropagation();
                    playAudio(item.audioPt);
                  }}
                />
                {matches[item.id] && (
                  <span className={styles.pg219Match}>
                    → {rightColumn.find(r => r.id === matches[item.id])?.text}
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className={styles.pg219Column}>
            {rightColumn.map((item) => (
              <div 
                key={item.id} 
                className={getItemClassName(item, false)}
                onClick={() => handleRightClick(item)}
              >
                <span className={styles.pg219Letter}>{item.id}.</span>
                <span className={styles.pg219Text}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.pg219ButtonContainer}>
          <button 
            className={styles.pg219Button} 
            onClick={checkAnswers}
            disabled={showResults}
          >
            Check
          </button>
          <button 
            className={styles.pg219Button} 
            onClick={resetExercise}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagina219;
