import React, { useState, useRef } from "react";
import styles from "./pagina352.module.css";
import correctIcon from '../assets/icons/correct_icon.webp';
import wrongIcon from '../assets/icons/wrong_icon.webp';
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import audio1e from "../assets/audios/pg352_audio1e.mp3";
import audio2e from "../assets/audios/pg352_audio2e.mp3";
import audio3e from "../assets/audios/pg352_audio3e.mp3";
import audio4e from "../assets/audios/pg352_audio4e.mp3";
import audio5e from "../assets/audios/pg352_audio5e.mp3";
import audio6e from "../assets/audios/pg352_audio6e.mp3";
import audio7e from "../assets/audios/pg352_audio7e.mp3";
import audio8e from "../assets/audios/pg352_audio8e.mp3";
import audio9e from "../assets/audios/pg352_audio9e.mp3";

import audio1p from "../assets/audios/pg352_audio1p.mp3";
import audio2p from "../assets/audios/pg352_audio2p.mp3";
import audio3p from "../assets/audios/pg352_audio3p.mp3";
import audio4p from "../assets/audios/pg352_audio4p.mp3";
import audio5p from "../assets/audios/pg352_audio5p.mp3";
import audio6p from "../assets/audios/pg352_audio6p.mp3";
import audio7p from "../assets/audios/pg352_audio7p.mp3";
import audio8p from "../assets/audios/pg352_audio8p.mp3";
import audio9p from "../assets/audios/pg352_audio9p.mp3";

const questionsEx13 = [
  {
    id: 'a',
    parts: [
      { textBefore: "", textAfter: " the captain speak to the passengers during the flight?", answer: "Will" },
      { textBefore: "Yes, he ", textAfter: " give updates and share the weather forecast.", answer: "will" }
    ]
  },
  {
    id: 'b',
    parts: [
      { textBefore: "", textAfter: " the plane arrive on time?", answer: "Will" },
      { textBefore: "I think it ", textAfter: " land a few minutes early.", answer: "will" }
    ]
  },
  {
    id: 'c',
    parts: [
      { textBefore: "Who ", textAfter: " assist us with boarding?", answer: "will" },
      { textBefore: "The flight attendants ", textAfter: " help us find our seats.", answer: "will" }
    ]
  },
  {
    id: 'd',
    parts: [
      { textBefore: "", textAfter: " you fly to New York again next month?", answer: "Will" },
      { textBefore: "Yes, I ", textAfter: " go there for another business meeting.", answer: "will" }
    ]
  }
];

const normalize = (str) => (str ?? '').trim().replace(/\s+/g, ' ').toLowerCase();

const Pagina352 = () => {
  const [inputValuesEx13, setInputValuesEx13] = useState(
    questionsEx13.map(q => Array(q.parts.length).fill(''))
  );
  const [resultsEx13, setResultsEx13] = useState(Array(questionsEx13.length).fill(null));
  const currentAudioRef = useRef(null);

  const eng = [audio1e, audio2e, audio3e, audio4e, audio5e, audio6e, audio7e, audio8e, audio9e];
  const pt = [audio1p, audio2p, audio3p, audio4p, audio5p, audio6p, audio7p, audio8p, audio9p];

  const playAudio = (file) => {
    if (currentAudioRef.current) {
      currentAudioRef.current.pause();
      currentAudioRef.current.currentTime = 0;
    }
    const a = new Audio(file);
    currentAudioRef.current = a;
    a.play();
  };

  const handleInputChangeEx13 = (questionIndex, partIndex, value) => {
    const updatedValues = [...inputValuesEx13];
    updatedValues[questionIndex][partIndex] = value;
    setInputValuesEx13(updatedValues);
    const updatedResults = [...resultsEx13];
    updatedResults[questionIndex] = null;
    setResultsEx13(updatedResults);
  };

  const handleCheckClickEx13 = () => {
    const evaluatedResults = questionsEx13.map((question, questionIndex) =>
      question.parts.every((part, partIndex) => {
        const userInput = normalize(inputValuesEx13[questionIndex][partIndex]);
        const correctAnswer = normalize(part.answer);
        return userInput === correctAnswer;
      })
    );
    setResultsEx13(evaluatedResults);
  };

  return (
    <div className={styles.page352__container}>
      <header className={styles.page352__header}>
        <h1><span className={styles.page352__exercisesRed}>Exercises</span></h1>
      </header>

      <p className={styles.page352__instructionRed}>
        <strong>
          13. Fill in the blanks with "will"
          <img src={eng_audio_icon} alt="Play English Audio" className={styles.page352__icon} onClick={() => playAudio(eng[0])} />
          <img src={ptbr_audio_icon} alt="Play Portuguese Audio" className={styles.page352__icon} onClick={() => playAudio(pt[0])} />
        </strong>
      </p>

      <div className={styles.page352__questionBox}>
        <main className={styles.page352__dialoguesContainer}>
          {questionsEx13.map((question, questionIndex) => (
            <div key={question.id} className={styles.page352__dialogueItem}>
              <div className={styles.page352__itemNumberContainer}>
                <span className={styles.page352__itemNumber}>{question.id})</span>
              </div>

              <div className={styles.page352__dialogueContentWrapper}>
                {question.parts.map((part, partIndex) => {
                  const idx = 1 + questionIndex * 2 + partIndex;
                  return (
                    <div key={`${question.id}-${partIndex}`} className={styles.page352__dialoguePart}>
                      {partIndex === 0 ? (
                        <>
                          <span className={styles.page352__dialogueText}>{part.textBefore}</span>
                          <input
                            type="text"
                            value={inputValuesEx13[questionIndex][partIndex]}
                            onChange={(e) => handleInputChangeEx13(questionIndex, partIndex, e.target.value)}
                            className={styles.page352__dialogueInput}
                          />
                          <span className={styles.page352__dialogueText}>{part.textAfter}</span>
                          {resultsEx13[questionIndex] !== null && (
                            <img
                              src={resultsEx13[questionIndex] ? correctIcon : wrongIcon}
                              alt={resultsEx13[questionIndex] ? "Correct" : "Incorrect"}
                              className={styles.page352__resultIcon}
                            />
                          )}
                          <img src={eng_audio_icon} alt="Play English Audio" className={styles.page352__icon} onClick={() => playAudio(eng[idx])} />
                          <img src={ptbr_audio_icon} alt="Play Portuguese Audio" className={styles.page352__icon} onClick={() => playAudio(pt[idx])} />
                        </>
                      ) : (
                        <>
                          <span className={styles.page352__dialogueTextIndent}>{part.textBefore}</span>
                          <input
                            type="text"
                            value={inputValuesEx13[questionIndex][partIndex]}
                            onChange={(e) => handleInputChangeEx13(questionIndex, partIndex, e.target.value)}
                            className={styles.page352__dialogueInput}
                          />
                          <span className={styles.page352__dialogueText}>{part.textAfter}</span>
                          <img src={eng_audio_icon} alt="Play English Audio" className={styles.page352__icon} onClick={() => playAudio(eng[idx])} />
                          <img src={ptbr_audio_icon} alt="Play Portuguese Audio" className={styles.page352__icon} onClick={() => playAudio(pt[idx])} />
                        </>
                      )}
                    </div>
                  );
                })}
              </div>

              {questionIndex < questionsEx13.length - 1 && <hr className={styles.page352__divider} />}
            </div>
          ))}
        </main>
      </div>

      <div className={styles.page352__checkContainer}>
        <button className={styles.page352__checkButton} onClick={handleCheckClickEx13}>
          Check
        </button>
      </div>
    </div>
  );
};

export default Pagina352;
