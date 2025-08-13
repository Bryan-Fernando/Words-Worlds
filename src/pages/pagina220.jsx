import React, { useState, useRef } from 'react';
import styles from './pagina220.module.css';
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import audio1e from '../assets/audios/pg220_audio1e.mp3';
import audio1p from '../assets/audios/pg220_audio1p.mp3';
import audio2e from '../assets/audios/pg220_audio2e.mp3';
import audio2p from '../assets/audios/pg220_audio2p.mp3';
import audio3e from '../assets/audios/pg220_audio3e.mp3';
import audio3p from '../assets/audios/pg220_audio3p.mp3';
import audio4e from '../assets/audios/pg220_audio4e.mp3';
import audio4p from '../assets/audios/pg220_audio4p.mp3';
import audio5e from '../assets/audios/pg220_audio5e.mp3';
import audio5p from '../assets/audios/pg220_audio5p.mp3';
import audio6e from '../assets/audios/pg220_audio6e.mp3';
import audio6p from '../assets/audios/pg220_audio6p.mp3';

const Pagina220 = () => {
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

  const sentences = [
    {
      id: 1,
      text: "He can cook",
      correctMatch: "C",
      audioEn: audio3e,
      audioPt: audio3p,
    },
    {
      id: 2,
      text: "She can ride a bike",
      correctMatch: "D",
      audioEn: audio4e,
      audioPt: audio4p,
    },
    {
      id: 3,
      text: "They can play the piano",
      correctMatch: "A",
      audioEn: audio5e,
      audioPt: audio5p,
    },
    {
      id: 4,
      text: "The dog can catch the ball",
      correctMatch: "B",
      audioEn: audio6e,
      audioPt: audio6p,
    },
  ];

  const images = [
    {
      id: "A",
      alt: "Piano playing",
      src: "../assets/images/piano-playing.jpg",
    },
    {
      id: "B",
      alt: "Dog catching ball",
      src: "../assets/images/dog-ball.jpg",
    },
    {
      id: "C",
      alt: "Man cooking",
      src: "../assets/images/man-cooking.jpg",
    },
    {
      id: "D",
      alt: "Woman riding bike",
      src: "../assets/images/bike-riding.jpg",
    },
  ];

  const [selectedSentence, setSelectedSentence] = useState(null);
  const [matches, setMatches] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleSentenceClick = (sentence) => {
    if (showResults) return;
    setSelectedSentence(sentence);
  };

  const handleImageClick = (image) => {
    if (showResults || !selectedSentence) return;
    setMatches((prev) => ({
      ...prev,
      [selectedSentence.id]: image.id,
    }));
    setSelectedSentence(null);
  };

  const checkAnswers = () => {
    if (Object.keys(matches).length === sentences.length) {
      setShowResults(true);
    } else {
      alert("Please match all sentences with images before checking!");
    }
  };

  const resetExercise = () => {
    setMatches({});
    setSelectedSentence(null);
    setShowResults(false);
  };

  const isCorrectMatch = (sentenceId) => {
    if (!showResults || !matches[sentenceId]) return null;
    const sentence = sentences.find((s) => s.id === sentenceId);
    return sentence?.correctMatch === matches[sentenceId];
  };

  const getItemClassName = (item, isSentence) => {
    const baseClass = `${styles.pg220Item} ${styles.clickable}`;
    if (isSentence) {
      if (selectedSentence?.id === item.id)
        return `${baseClass} ${styles.selected}`;
      if (showResults) {
        return `${baseClass} ${
          isCorrectMatch(item.id)
            ? styles.correctMatch
            : styles.incorrectMatch
        }`;
      }
      return baseClass;
    } else {
      if (showResults) {
        const matchedSentence = Object.entries(matches).find(
          ([_, imageId]) => imageId === item.id
        );
        if (matchedSentence) {
          return `${styles.pg220ImageContainer} ${
            isCorrectMatch(Number(matchedSentence[0]))
              ? styles.correctMatch
              : styles.incorrectMatch
          }`;
        }
      }
      return styles.pg220ImageContainer;
    }
  };

  return (
    <div className={styles.pg220Container}>
      <h1 className={styles.pg220Title}>Exercises</h1>

      <div className={styles.pg220ExerciseSection}>
        <h2 className={styles.pg220ExerciseTitle}>
          7. Match pictures to sentences
          <img
            src={eng_audio_icon}
            alt="Instruction audio EN"
            className={styles.page220__audio_icon}
            onClick={() => playAudio(audio1e)}
          />
          <img
            src={ptbr_audio_icon}
            alt="Instruction audio PT"
            className={styles.page220__audio_icon}
            onClick={() => playAudio(audio1p)}
          />
        </h2>

        <div className={styles.pg220Instructions}>
          Click a sentence, then click the matching image.
          <img
            src={eng_audio_icon}
            alt="Instruction detail EN"
            className={styles.page220__audio_icon}
            onClick={() => playAudio(audio2e)}
          />
          <img
            src={ptbr_audio_icon}
            alt="Instruction detail PT"
            className={styles.page220__audio_icon}
            onClick={() => playAudio(audio2p)}
          />
        </div>

        <div className={styles.pg220SentencesContainer}>
          {sentences.map((sentence) => (
            <div
              key={sentence.id}
              className={getItemClassName(sentence, true)}
              onClick={() => handleSentenceClick(sentence)}
            >
              <span className={styles.pg220Number}>{sentence.id}.</span>
              <span className={styles.pg220Text}>{sentence.text}</span>
              <img
                src={eng_audio_icon}
                alt="EN audio"
                className={styles.page220__audio_icon}
                onClick={(e) => {
                  e.stopPropagation();
                  playAudio(sentence.audioEn);
                }}
              />
              <img
                src={ptbr_audio_icon}
                alt="PT audio"
                className={styles.page220__audio_icon}
                onClick={(e) => {
                  e.stopPropagation();
                  playAudio(sentence.audioPt);
                }}
              />
              {matches[sentence.id] && (
                <span className={styles.pg220Match}>
                  → {matches[sentence.id]}
                </span>
              )}
            </div>
          ))}
        </div>

        <div className={styles.pg220ImagesGrid}>
          {images.map((image) => (
            <div
              key={image.id}
              className={getItemClassName(image, false)}
              onClick={() => handleImageClick(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={styles.pg220Image}
              />
              <span className={styles.pg220ImageLabel}>{image.id}</span>
            </div>
          ))}
        </div>

        <div className={styles.pg220ButtonContainer}>
          <button
            className={styles.pg220Button}
            onClick={checkAnswers}
            disabled={showResults}
          >
            Check
          </button>
          <button className={styles.pg220Button} onClick={resetExercise}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagina220;
