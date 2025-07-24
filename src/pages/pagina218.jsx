import React, { useRef, useState } from 'react';
import styles from './pagina218.module.css';
import correct_icon from '../assets/icons/correct_icon.webp';
import wrong_icon from '../assets/icons/wrong_icon.webp';
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import audio1e from '../assets/audios/pg218_audio1e.mp3';
import audio1p from '../assets/audios/pg218_audio1p.mp3';
import audio2e from '../assets/audios/pg218_audio2e.mp3';
import audio2p from '../assets/audios/pg218_audio2p.mp3';
import audio3e from '../assets/audios/pg218_audio3e.mp3';
import audio3p from '../assets/audios/pg218_audio3p.mp3';
import audio4e from '../assets/audios/pg218_audio4e.mp3';
import audio4p from '../assets/audios/pg218_audio4p.mp3';
import audio5e from '../assets/audios/pg218_audio5e.mp3';
import audio5p from '../assets/audios/pg218_audio5p.mp3';
import audio6e from '../assets/audios/pg218_audio6e.mp3';
import audio6p from '../assets/audios/pg218_audio6p.mp3';
import audio7e from '../assets/audios/pg218_audio7e.mp3';
import audio7p from '../assets/audios/pg218_audio7p.mp3';
import audio8e from '../assets/audios/pg218_audio8e.mp3';
import audio8p from '../assets/audios/pg218_audio8p.mp3';
import audio9e from '../assets/audios/pg218_audio9e.mp3';
import audio9p from '../assets/audios/pg218_audio9p.mp3';

const Pagina218 = () => {
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

  const items = [
    {
      id: 1,
      answerText: "Yes, I can swim.",
      answerAudioEn: audio2e,
      answerAudioPt: audio2p,
      questionAudioEn: audio3e,
      questionAudioPt: audio3p,
      correctQuestion: "Can you swim?"
    },
    {
      id: 2,
      answerText: "No, he can't cook",
      answerAudioEn: audio4e,
      answerAudioPt: audio4p,
      questionAudioEn: audio5e,
      questionAudioPt: audio5p,
      correctQuestion: "Can he cook?"
    },
    {
      id: 3,
      answerText: "Yes, they can drive",
      answerAudioEn: audio6e,
      answerAudioPt: audio6p,
      questionAudioEn: audio7e,
      questionAudioPt: audio7p,
      correctQuestion: "Can they drive?"
    },
    {
      id: 4,
      answerText: "No, we can't go out tonight.",
      answerAudioEn: audio8e,
      answerAudioPt: audio8p,
      questionAudioEn: audio9e,
      questionAudioPt: audio9p,
      correctQuestion: "Can we go out tonight?"
    }
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
      const correctValue = items[index].correctQuestion.toLowerCase();
      return trimmedValue === correctValue;
    });
    setResults(newResults);
  };

  return (
    <div className={styles.pg218Container}>
      <h1 className={styles.pg218Title}>Exercises</h1>

      <div className={styles.pg218ExerciseSection}>
        <h2 className={styles.pg218ExerciseTitle}>
          5. Make questions to the given answers
          <img
            src={eng_audio_icon}
            alt="Play English instruction"
            className={styles.page218__audio_icon}
            onClick={() => playAudio(audio1e)}
          />
          <img
            src={ptbr_audio_icon}
            alt="Play Portuguese instruction"
            className={styles.page218__audio_icon}
            onClick={() => playAudio(audio1p)}
          />
        </h2>

        <div className={styles.pg218AnswersBox}>
          {items.map((item, index) => (
            <div key={item.id} className={styles.pg218Line}>
              <div className={styles.pg218SentenceWrapper}>
                <span className={styles.pg218Number}>{item.id}.</span>
                <span className={styles.pg218Text}>{item.answerText}</span>
                <img
                  src={eng_audio_icon}
                  alt="English"
                  className={styles.page218__audio_icon}
                  onClick={() => playAudio(item.answerAudioEn)}
                />
                <img
                  src={ptbr_audio_icon}
                  alt="Portuguese"
                  className={styles.page218__audio_icon}
                  onClick={() => playAudio(item.answerAudioPt)}
                />
              </div>
              <div className={styles.pg218InputWrapper}>
                <input
                  type="text"
                  value={inputValues[index] || ""}
                  onChange={(e) => handleInputChange(e.target.value, index)}
                  className={styles.pg218Input}
                  placeholder="Write the question"
                />
                <img
                  src={eng_audio_icon}
                  alt="Question EN"
                  className={styles.page218__audio_icon}
                  onClick={() => playAudio(item.questionAudioEn)}
                />
                <img
                  src={ptbr_audio_icon}
                  alt="Question PT"
                  className={styles.page218__audio_icon}
                  onClick={() => playAudio(item.questionAudioPt)}
                />
                {results[index] !== null && (
                  <img
                    src={results[index] ? correct_icon : wrong_icon}
                    alt={results[index] ? "Correct" : "Incorrect"}
                    className={styles.pg218CheckIcon}
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        <button onClick={handleCheckClick} className={styles.pg218CheckButton}>
          Check
        </button>
      </div>
    </div>
  );
};

export default Pagina218;
