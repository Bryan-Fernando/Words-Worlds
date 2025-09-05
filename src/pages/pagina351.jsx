import React, { useState, useRef } from "react";
import styles from "./pagina351.module.css";
import correctIcon from "../assets/icons/correct_icon.webp";
import wrongIcon from "../assets/icons/wrong_icon.webp";
import eng_audio_icon from "../assets/icons/eng_audio_icon.webp";
import ptbr_audio_icon from "../assets/icons/ptbr_audio_icon.webp";

import audio1e from "../assets/audios/pg351_audio1e.mp3";
import audio2e from "../assets/audios/pg351_audio2e.mp3";
import audio3e from "../assets/audios/pg351_audio3e.mp3";
import audio4e from "../assets/audios/pg351_audio4e.mp3";
import audio5e from "../assets/audios/pg351_audio5e.mp3";
import audio6e from "../assets/audios/pg351_audio6e.mp3";
import audio7e from "../assets/audios/pg351_audio7e.mp3";
import audio8e from "../assets/audios/pg351_audio8e.mp3";
import audio9e from "../assets/audios/pg351_audio9e.mp3";
import audio10e from "../assets/audios/pg351_audio10e.mp3";
import audio11e from "../assets/audios/pg351_audio11e.mp3";

import audio1p from "../assets/audios/pg351_audio1p.mp3";
import audio2p from "../assets/audios/pg351_audio2p.mp3";
import audio3p from "../assets/audios/pg351_audio3p.mp3";
import audio4p from "../assets/audios/pg351_audio4p.mp3";
import audio5p from "../assets/audios/pg351_audio5p.mp3";
import audio6p from "../assets/audios/pg351_audio6p.mp3";
import audio7p from "../assets/audios/pg351_audio7p.mp3";
import audio8p from "../assets/audios/pg351_audio8p.mp3";
import audio9p from "../assets/audios/pg351_audio9p.mp3";
import audio10p from "../assets/audios/pg351_audio10p.mp3";
import audio11p from "../assets/audios/pg351_audio11p.mp3";

const dialoguesEx12 = [
  {
    id: 1,
    parts: [
      { textBefore: "", textAfter: " you help me with my homework?", answer: "Will" },
      { textBefore: "Sure, I ", textAfter: ".", answer: "will" }
    ]
  },
  {
    id: 2,
    parts: [
      { textBefore: "Where ", textAfter: " you go on vacation?", answer: "Will" },
      { textBefore: "I ", textAfter: " go to Greece.", answer: "will" }
    ]
  },
  {
    id: 3,
    parts: [
      { textBefore: "", textAfter: " it rain tomorrow?", answer: "Will" },
      { textBefore: "I think it ", textAfter: "", answer: "will" }
    ]
  },
  {
    id: 4,
    parts: [
      { textBefore: "", textAfter: " he join us for dinner?", answer: "Will" },
      { textBefore: "No, he ", textAfter: " be late.", answer: "will" }
    ]
  },
  {
    id: 5,
    parts: [
      { textBefore: "What ", textAfter: " we eat tonight?", answer: "Will" },
      { textBefore: "We ", textAfter: " order pizza.", answer: "will" }
    ]
  }
];

const normalize = (str) => (str ?? "").trim().replace(/\s+/g, " ").toLowerCase();

const Pagina351 = () => {
  const [inputValuesEx12, setInputValuesEx12] = useState(
    dialoguesEx12.map((d) => Array(d.parts.length).fill(""))
  );
  const [resultsEx12, setResultsEx12] = useState(Array(dialoguesEx12.length).fill(null));
  const currentAudioRef = useRef(null);

  const eng = [audio1e, audio2e, audio3e, audio4e, audio5e, audio6e, audio7e, audio8e, audio9e, audio10e, audio11e];
  const pt = [audio1p, audio2p, audio3p, audio4p, audio5p, audio6p, audio7p, audio8p, audio9p, audio10p, audio11p];

  const playAudio = (file) => {
    if (currentAudioRef.current) {
      currentAudioRef.current.pause();
      currentAudioRef.current.currentTime = 0;
    }
    const a = new Audio(file);
    currentAudioRef.current = a;
    a.play();
  };

  const handleInputChangeEx12 = (dialogueIndex, partIndex, value) => {
    const updatedValues = [...inputValuesEx12];
    updatedValues[dialogueIndex][partIndex] = value;
    setInputValuesEx12(updatedValues);
    const updatedResults = [...resultsEx12];
    updatedResults[dialogueIndex] = null;
    setResultsEx12(updatedResults);
  };

  const handleCheckClickEx12 = () => {
    const evaluatedResults = dialoguesEx12.map((dialogue, dialogueIndex) =>
      dialogue.parts.every((part, partIndex) => {
        const userInput = normalize(inputValuesEx12[dialogueIndex][partIndex]);
        const correctAnswer = normalize(part.answer);
        return userInput === correctAnswer;
      })
    );
    setResultsEx12(evaluatedResults);
  };

  return (
    <div className={styles.page351__container}>
      <header className={styles.page351__header}>
        <h1><span className={styles.page351__exercisesRed}>Exercises</span></h1>
      </header>

      <p className={styles.page351__instructionRed}>
        <strong>
          12. Complete the dialogues with "will"
          <img
            src={eng_audio_icon}
            alt="Play English Audio"
            className={styles.page351__icon}
            onClick={() => playAudio(eng[0])}
          />
          <img
            src={ptbr_audio_icon}
            alt="Play Portuguese Audio"
            className={styles.page351__icon}
            onClick={() => playAudio(pt[0])}
          />
        </strong>
      </p>

      <div className={styles.page351__questionBox}>
        <main className={styles.page351__dialoguesContainer}>
          {dialoguesEx12.map((dialogue, dialogueIndex) => (
            <div key={dialogue.id} className={styles.page351__dialogueItem}>
              <div className={styles.page351__itemNumberContainer}>
                <span className={styles.page351__itemNumber}>{dialogue.id}.</span>
              </div>

              <div className={styles.page351__dialogueContentWrapper}>
                {dialogue.parts.map((part, partIndex) => {
                  const idx = 1 + dialogueIndex * 2 + partIndex;
                  return (
                    <div key={`${dialogue.id}-${partIndex}`} className={styles.page351__dialoguePart}>
                      {partIndex === 0 ? (
                        <>
                          <span className={styles.page351__dialogueText}>{part.textBefore}</span>
                          <input
                            type="text"
                            value={inputValuesEx12[dialogueIndex][partIndex]}
                            onChange={(e) => handleInputChangeEx12(dialogueIndex, partIndex, e.target.value)}
                            className={styles.page351__dialogueInput}
                          />
                          <span className={styles.page351__dialogueText}>{part.textAfter}</span>
                        </>
                      ) : (
                        <>
                          <span className={styles.page351__dialogueTextIndent}>{part.textBefore}</span>
                          <input
                            type="text"
                            value={inputValuesEx12[dialogueIndex][partIndex]}
                            onChange={(e) => handleInputChangeEx12(dialogueIndex, partIndex, e.target.value)}
                            className={styles.page351__dialogueInput}
                          />
                          <span className={styles.page351__dialogueText}>{part.textAfter}</span>
                        </>
                      )}
                      <span className={styles.page351__iconsLine}>
                        <img
                          src={eng_audio_icon}
                          alt="Play English Audio"
                          className={styles.page351__icon}
                          onClick={() => playAudio(eng[idx])}
                        />
                        <img
                          src={ptbr_audio_icon}
                          alt="Play Portuguese Audio"
                          className={styles.page351__icon}
                          onClick={() => playAudio(pt[idx])}
                        />
                      </span>
                    </div>
                  );
                })}
                {resultsEx12[dialogueIndex] !== null && (
                  <img
                    src={resultsEx12[dialogueIndex] ? correctIcon : wrongIcon}
                    alt={resultsEx12[dialogueIndex] ? "Correct" : "Incorrect"}
                    className={styles.page351__resultIcon}
                  />
                )}
              </div>
              {dialogueIndex < dialoguesEx12.length - 1 && <hr className={styles.page351__divider} />}
            </div>
          ))}
        </main>
      </div>

      <div className={styles.page351__checkContainer}>
        <button className={styles.page351__checkButton} onClick={handleCheckClickEx12}>
          Check
        </button>
      </div>
    </div>
  );
};

export default Pagina351;
