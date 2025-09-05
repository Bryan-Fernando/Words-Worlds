import React, { useRef, useState } from 'react';
import styles from './pagina347.module.css';
import correctIcon from '../assets/icons/correct_icon.webp';
import wrongIcon from '../assets/icons/wrong_icon.webp';
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import audio1e from '../assets/audios/pg347_audio1e.mp3';
import audio2e from '../assets/audios/pg347_audio2e.mp3';
import audio3e from '../assets/audios/pg347_audio3e.mp3';
import audio4e from '../assets/audios/pg347_audio4e.mp3';
import audio5e from '../assets/audios/pg347_audio5e.mp3';
import audio6e from '../assets/audios/pg347_audio6e.mp3';

import audio1p from '../assets/audios/pg347_audio1p.mp3';
import audio2p from '../assets/audios/pg347_audio2p.mp3';
import audio3p from '../assets/audios/pg347_audio3p.mp3';
import audio4p from '../assets/audios/pg347_audio4p.mp3';
import audio5p from '../assets/audios/pg347_audio5p.mp3';
import audio6p from '../assets/audios/pg347_audio6p.mp3';

const questionsEx8 = [
  {
    id: 1,
    question: "Will you go to the party on Saturday?",
    correctAnswers: [
      "Yes, I will go to the party on Saturday.",
      "No, I will not go to the party on Saturday.",
      "Yes, I'll go to the party on Saturday.",
      "No, I won't go to the party on Saturday."
    ]
  },
  {
    id: 2,
    question: "Will he send the report soon?",
    correctAnswers: [
      "Yes, he will send the report soon.",
      "No, he will not send the report soon.",
      "Yes, he'll send the report soon.",
      "No, he won't send the report soon."
    ]
  },
  {
    id: 3,
    question: "Will they need more time?",
    correctAnswers: [
      "Yes, they will need more time.",
      "No, they will not need more time.",
      "Yes, they'll need more time.",
      "No, they won't need more time."
    ]
  },
  {
    id: 4,
    question: "Will she join the meeting later?",
    correctAnswers: [
      "Yes, she will join the meeting later.",
      "No, she will not join the meeting later.",
      "Yes, she'll join the meeting later.",
      "No, she won't join the meeting later."
    ]
  }
];

const normalize = (str) => (str ?? '').trim().replace(/\s+/g, ' ').toLowerCase();

const Pagina347 = () => {
  const [inputValuesEx8, setInputValuesEx8] = useState(Array(questionsEx8.length).fill(''));
  const [resultsEx8, setResultsEx8] = useState(Array(questionsEx8.length).fill(null));
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

  const handleInputChangeEx8 = (value, index) => {
    const updatedValues = [...inputValuesEx8];
    updatedValues[index] = value;
    setInputValuesEx8(updatedValues);
  };

  const handleCheckClickEx8 = () => {
    const evaluatedResults = inputValuesEx8.map((input, i) => {
      const userInput = normalize(input);
      return questionsEx8[i].correctAnswers.some(correctAns => normalize(correctAns) === userInput);
    });
    setResultsEx8(evaluatedResults);
  };

  return (
    <div className={styles.page347__container}>
      <header className={styles.page347__header}>
        <h1><span className={styles.page347__exercisesRed}>Exercises</span></h1>
      </header>

      <p className={styles.page347__instructionRed}>
        <strong>
          8. Respond to the questions
          <img
            src={eng_audio_icon}
            alt="Play English Audio"
            className={styles.page347__icon}
            onClick={() => playAudio(audio1e)}
          />
          <img
            src={ptbr_audio_icon}
            alt="Play Portuguese Audio"
            className={styles.page347__icon}
            onClick={() => playAudio(audio1p)}
          />
        </strong>
      </p>
      <p className={styles.page347__instruction}>
        Answer the questions in the Affirmative or Negative forms.
        <img
          src={eng_audio_icon}
          alt="Play English Audio"
          className={styles.page347__icon}
          onClick={() => playAudio(audio2e)}
        />
        <img
          src={ptbr_audio_icon}
          alt="Play Portuguese Audio"
          className={styles.page347__icon}
          onClick={() => playAudio(audio2p)}
        />
      </p>

      <div className={styles.page347__questionBox}>
        <main className={styles.page347__main}>
          {questionsEx8.map((q, index) => (
            <div key={q.id} className={styles.page347__question}>
              <span>{q.id}. {q.question}</span>
              <div className={styles.page347__inputContainer}>
                <span className={styles.page347__arrow}>→</span>
                <input
                  type="text"
                  value={inputValuesEx8[index]}
                  onChange={(e) => handleInputChangeEx8(e.target.value, index)}
                  className={styles.page347__input}
                  placeholder={inputValuesEx8[index] === '' ? "Type your answer" : ""}
                />
                <div className={styles.page347__iconsRow}>
                  {resultsEx8[index] !== null && (
                    <img
                      src={resultsEx8[index] ? correctIcon : wrongIcon}
                      alt={resultsEx8[index] ? "Correct" : "Incorrect"}
                      className={styles.page347__resultIcon}
                    />
                  )}
                  <img
                    src={eng_audio_icon}
                    alt="Play English Audio"
                    className={styles.page347__icon}
                    onClick={() => playAudio([audio3e, audio4e, audio5e, audio6e][index])}
                  />
                  <img
                    src={ptbr_audio_icon}
                    alt="Play Portuguese Audio"
                    className={styles.page347__icon}
                    onClick={() => playAudio([audio3p, audio4p, audio5p, audio6p][index])}
                  />
                </div>
              </div>
            </div>
          ))}
        </main>
      </div>

      <div className={styles.page347__checkContainer}>
        <button className={styles.page347__checkButton} onClick={handleCheckClickEx8}>
          Check
        </button>
      </div>
    </div>
  );
};

export default Pagina347;
