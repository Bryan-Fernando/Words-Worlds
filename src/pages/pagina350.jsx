import React, { useRef, useState } from 'react';
import styles from './pagina350.module.css';
import correctIcon from '../assets/icons/correct_icon.webp';
import wrongIcon from '../assets/icons/wrong_icon.webp';
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import audio1e from '../assets/audios/pg350_audio1e.mp3';
import audio2e from '../assets/audios/pg350_audio2e.mp3';
import audio3e from '../assets/audios/pg350_audio3e.mp3';
import audio4e from '../assets/audios/pg350_audio4e.mp3';
import audio5e from '../assets/audios/pg350_audio5e.mp3';
import audio6e from '../assets/audios/pg350_audio6e.mp3';
import audio7e from '../assets/audios/pg350_audio7e.mp3';

import audio1p from '../assets/audios/pg350_audio1p.mp3';
import audio2p from '../assets/audios/pg350_audio2p.mp3';
import audio3p from '../assets/audios/pg350_audio3p.mp3';
import audio4p from '../assets/audios/pg350_audio4p.mp3';
import audio5p from '../assets/audios/pg350_audio5p.mp3';
import audio6p from '../assets/audios/pg350_audio6p.mp3';
import audio7p from '../assets/audios/pg350_audio7p.mp3';

const dialogueQuestionsEx11 = [
  { id: 1, textBefore: 'Anna: Hi! ', textAfter: ' you come to the movies tonight?', answer: 'Will' },
  { id: 2, textBefore: 'Ben: Yes, I think I ', textAfter: '!', answer: 'will' },
  { id: 3, textBefore: 'Anna: Great! ', textAfter: ' you bring the tickets?', answer: 'Will' },
  { id: 4, audioOnly: true, text: 'Ben: Sure.' },
  { id: 5, textBefore: 'Anna: Perfect! ', textAfter: ' we meet at 7?', answer: 'Will' }
];

const normalize = (str) => (str ?? '').trim().replace(/\s+/g, ' ').toLowerCase();

const Pagina350 = () => {
  const [inputValuesEx11, setInputValuesEx11] = useState(Array(dialogueQuestionsEx11.length).fill(''));
  const [resultsEx11, setResultsEx11] = useState(Array(dialogueQuestionsEx11.length).fill(null));
  const currentAudioRef = useRef(null);

  const lineAudioE = { 1: audio3e, 2: audio4e, 3: audio5e, 4: audio6e, 5: audio7e };
  const lineAudioP = { 1: audio3p, 2: audio4p, 3: audio5p, 4: audio6p, 5: audio7p };

  const playAudio = (file) => {
    if (currentAudioRef.current) {
      currentAudioRef.current.pause();
      currentAudioRef.current.currentTime = 0;
    }
    const a = new Audio(file);
    currentAudioRef.current = a;
    a.play();
  };

  const handleInputChangeEx11 = (value, index) => {
    const updated = [...inputValuesEx11];
    updated[index] = value;
    setInputValuesEx11(updated);
  };

  const handleCheckClickEx11 = () => {
    const evaluated = inputValuesEx11.map((input, i) => {
      const item = dialogueQuestionsEx11[i];
      if (item.audioOnly) return null;
      return normalize(input) === normalize(item.answer);
    });
    setResultsEx11(evaluated);
  };

  return (
    <div className={styles.page350__container}>
      <header className={styles.page350__header}>
        <h1><span className={styles.page350__exercisesRed}>Exercises</span></h1>
      </header>

      <p className={styles.page350__instructionRed}>
        <strong>
          11. Dialogue Completion
          <img src={eng_audio_icon} alt="Play English Audio" className={styles.page350__icon} onClick={() => playAudio(audio1e)} />
          <img src={ptbr_audio_icon} alt="Play Portuguese Audio" className={styles.page350__icon} onClick={() => playAudio(audio1p)} />
        </strong>
      </p>
      <p className={styles.page350__instructionSubtitle}>
        Complete the conversation using polite questions and answers with "will."
        <img src={eng_audio_icon} alt="Play English Audio" className={styles.page350__icon} onClick={() => playAudio(audio2e)} />
        <img src={ptbr_audio_icon} alt="Play Portuguese Audio" className={styles.page350__icon} onClick={() => playAudio(audio2p)} />
      </p>

      <div className={styles.page350__questionBox}>
        <main className={styles.page350__main}>
          {dialogueQuestionsEx11.map((q, index) => (
            <div key={q.id} className={styles.page350__dialogueLine}>
              {q.audioOnly ? (
                <div className={styles.page350__speakerRow}>
                  <span>{q.text}</span>
                  <img src={eng_audio_icon} alt="Play English Audio" className={styles.page350__icon} onClick={() => playAudio(lineAudioE[q.id])} />
                  <img src={ptbr_audio_icon} alt="Play Portuguese Audio" className={styles.page350__icon} onClick={() => playAudio(lineAudioP[q.id])} />
                </div>
              ) : (
                <div className={styles.page350__dialogueContent}>
                  <span>{q.textBefore}</span>
                  <input
                    type="text"
                    value={inputValuesEx11[index]}
                    onChange={(e) => handleInputChangeEx11(e.target.value, index)}
                    className={styles.page350__input}
                  />
                  <span>{q.textAfter}</span>
                  <div className={styles.page350__iconsRow}>
                    {resultsEx11[index] !== null && (
                      <img
                        src={resultsEx11[index] ? correctIcon : wrongIcon}
                        alt={resultsEx11[index] ? 'Correct' : 'Incorrect'}
                        className={styles.page350__resultIcon}
                      />
                    )}
                    <img
                      src={eng_audio_icon}
                      alt="Play English Audio"
                      className={styles.page350__icon}
                      onClick={() => playAudio(lineAudioE[q.id])}
                    />
                    <img
                      src={ptbr_audio_icon}
                      alt="Play Portuguese Audio"
                      className={styles.page350__icon}
                      onClick={() => playAudio(lineAudioP[q.id])}
                    />
                  </div>
                </div>
              )}
              {index < dialogueQuestionsEx11.length - 1 && <hr className={styles.page350__divider} />}
            </div>
          ))}
        </main>
      </div>

      <div className={styles.page350__checkContainer}>
        <button className={styles.page350__checkButton} onClick={handleCheckClickEx11}>
          Check
        </button>
      </div>

      <div className={styles.page350__imagePlaceholdersContainer}>
        <div className={styles.page350__imagePlaceholderBox}></div>
        <div className={styles.page350__imagePlaceholderBox}></div>
      </div>
    </div>
  );
};

export default Pagina350;
