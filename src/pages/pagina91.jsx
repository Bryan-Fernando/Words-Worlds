import React, { useState } from 'react';

import styles from './pagina91.module.css';

import correct_icon from '../assets/icons/correct_icon.webp';
import wrong_icon from '../assets/icons/wrong_icon.webp';
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';
import slow_audio_icon from '../assets/icons/slow_audio_icon.webp';

import pagina91_imagem1 from '../assets/images/pagina91_imagem1.webp';
import pagina91_imagem2 from '../assets/images/pagina91_imagem2.webp';

import global_learning_le_e from '../assets/audios/global_learning_le_e.mp3';
import global_learning_le_p from '../assets/audios/global_learning_le_p.mp3';
import pg91_audio1e from '../assets/audios/pg91_audio1e.mp3';
import pg91_audio1p from '../assets/audios/pg91_audio1p.mp3';
import pg91_audio2 from '../assets/audios/pg91_audio2.mp3';
import pg91_audio3 from '../assets/audios/pg91_audio3.mp3';
import pg91_audio4 from '../assets/audios/pg91_audio4.mp3';
import pg91_audio5 from '../assets/audios/pg91_audio5.mp3';
import pg91_audio6 from '../assets/audios/pg91_audio6.mp3';
import pg91_audio7 from '../assets/audios/pg91_audio7.mp3';
import pg91_audio8 from '../assets/audios/pg91_audio8.mp3';
import pg91_audio9 from '../assets/audios/pg91_audio9.mp3';
import pg91_audio2p from '../assets/audios/pg91_audio2p.mp3';
import pg91_audio3p from '../assets/audios/pg91_audio3p.mp3';
import pg91_audio4p from '../assets/audios/pg91_audio4p.mp3';
import pg91_audio5p from '../assets/audios/pg91_audio5p.mp3';
import pg91_audio6p from '../assets/audios/pg91_audio6p.mp3';
import pg91_audio7p from '../assets/audios/pg91_audio7p.mp3';
import pg91_audio8p from '../assets/audios/pg91_audio8p.mp3';
import pg91_audio9p from '../assets/audios/pg91_audio9p.mp3';

const Pagina91 = () => {
  // 8 questões nesta página
  const TOTAL = 8;

  const [inputValues, setInputValues] = useState(Array(TOTAL).fill(''));
  const [results, setResults] = useState(Array(TOTAL).fill(null));
  const [isSpeedReduced, setIsSpeedReduced] = useState({});
  const [showAnswersKey, setShowAnswersKey] = useState(false);

  const correctAnswers = ['The', 'a', 'a', '', 'an', '', 'The', 'a'];

  const audioMap = {
    global_learning_le_e,
    global_learning_le_p,
    pg91_audio1e,
    pg91_audio1p,
    pg91_audio2,
    pg91_audio3,
    pg91_audio4,
    pg91_audio5,
    pg91_audio6,
    pg91_audio7,
    pg91_audio8,
    pg91_audio9,
    pg91_audio2p,
    pg91_audio3p,
    pg91_audio4p,
    pg91_audio5p,
    pg91_audio6p,
    pg91_audio7p,
    pg91_audio8p,
    pg91_audio9p
  };

  const questions = [
    '____ sky is blue.',
    'I have ____ cat.',
    'She is ____ teacher.',
    'We are____ students.',
    'He is ____ architect.',
    'They are ____ engineers.',
    '____ Earth is round.',
    'You are ____ musician'
  ];

  // CHECK (case-insensitive)
  const handleCheckClick = () => {
    const newResults = inputValues.map(
      (value, index) =>
        (value || '').trim().toLowerCase() === (correctAnswers[index] || '').trim().toLowerCase()
    );
    setResults(newResults);
  };

  // RESET
  const handleResetClick = () => {
    setInputValues(Array(TOTAL).fill(''));
    setResults(Array(TOTAL).fill(null));
    setIsSpeedReduced({});
  };

  // ANSWERS KEY toggle
  const toggleAnswersKey = () => setShowAnswersKey((v) => !v);

  const handleInputChange = (value, index) => {
    const newValues = [...inputValues];
    newValues[index] = value;
    setInputValues(newValues);
  };

  const playAudio = (audioKey) => {
    if (audioMap[audioKey]) {
      const audio = new Audio(audioMap[audioKey]);
      const speed = isSpeedReduced[audioKey] ? 0.6 : 1;
      audio.playbackRate = speed;
      audio.play().catch((error) => console.error('Erro ao reproduzir o áudio:', error));
    } else {
      console.warn(`Áudio não encontrado para: ${audioKey}`);
    }
  };

  const toggleSpeedReduction = (audioKey) => {
    setIsSpeedReduced((prevState) => ({
      ...prevState,
      [audioKey]: !prevState[audioKey]
    }));
  };

  return (
    <div className={styles['page91__container']}>
      <header className={styles['page91__header']}>
        <h1 className={styles['page91__title']}>
          Learning Language Exercises
          <img
            src={eng_audio_icon}
            alt="English audio"
            className={styles['page91__header-icon']}
            onClick={() => playAudio('global_learning_le_e')}
          />
          <img
            src={ptbr_audio_icon}
            alt="Portuguese audio"
            className={styles['page91__header-icon']}
            onClick={() => playAudio('global_learning_le_p')}
          />
        </h1>
        <div className={styles['page91__image-container']}></div>
      </header>

      <main className={styles['page91__main']}>
        <div style={{ width: '100%' }}>
          <div className={styles['page91__header-images']}>
            <img src={pagina91_imagem1} alt="sala de aula" />
            <img src={pagina91_imagem2} alt="engenheiros" />
          </div>
          <div className={styles.pg91tabelaAfirmativaContainer}>
            <div className={styles.pg91tableHeaderAfirmativa}>AFIRMATIVA</div>
            <table className={styles.pg91styledTableAfirmativa}>
              <thead className={styles.pg91Thead}>
                <tr className={styles.pg91celulatable}>
                  <th>Introdução</th>
                  <th>Sujeito</th>
                  <th>Verbo <br /> Auxiliar</th>
                  <th>Advérbio</th>
                  <th>Verbo(s)</th>
                  <th>Objeto <br /> Complemento</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </main>

      <aside className={styles['page91__aside']}>
        <h2 className={styles['page91__questions-title']}>
          Fill in the blanks with the appropriate
          <span className={styles['page91__highlight--definite']}> Definitive </span>
          or
          <span className={styles['page91__highlight--indefinite']}> Indefinite </span>
          article, or leave the blank empty for
          <span className={styles['page91__highlight--plural']}> plural nouns </span>. <br />
          <img
            src={eng_audio_icon}
            alt="English audio"
            className={styles['page91__header-icon']}
            onClick={() => playAudio('pg91_audio1e')}
          />
          <img
            src={ptbr_audio_icon}
            alt="Portuguese audio"
            className={styles['page91__header-icon']}
            onClick={() => playAudio('pg91_audio1p')}
          />
          <div className={styles['page91__word-bank-header-1']}>
            <p>Faça os exercícios após escutar os áudios.</p>
          </div>
        </h2>

        <div className={styles['page91__questions-container']}>
          {questions.map((question, index) => {
            const [left, right] = question.split('____');
            const audioKeyEn = `pg91_audio${index + 2}`;
            const audioKeyPt = `pg91_audio${index + 2}p`;

            return (
              <div key={index} className={styles['page91__question']}>
                <span>
                  <em>
                    <strong>{index + 1}.</strong> {left}
                  </em>
                </span>

                <div className={styles['page91__input-container']}>
                  <input
                    type="text"
                    value={inputValues[index]}
                    onChange={(e) => handleInputChange(e.target.value, index)}
                    className={styles['page91__input-box']}
                  />
                  {results[index] !== null && (
                    <img
                      src={results[index] ? correct_icon : wrong_icon}
                      alt={results[index] ? 'Correct' : 'Incorrect'}
                      className={styles['page91__checkmark-image']}
                    />
                  )}
                </div>

                <span>
                  <em>{right}</em>
                </span>

                <div className={styles['page91__icons-container']}>
                  <img
                    src={eng_audio_icon}
                    alt="English Audio Icon"
                    className={styles['page91__additional-icon']}
                    onClick={() => playAudio(audioKeyEn)}
                  />
                  <img
                    src={ptbr_audio_icon}
                    alt="Portuguese Audio Icon"
                    className={styles['page91__additional-icon']}
                    onClick={() => playAudio(audioKeyPt)}
                  />
                  <img
                    src={slow_audio_icon}
                    alt="Volume Reduced Icon"
                    className={`${styles['page91__additional-icon']} ${
                      isSpeedReduced[audioKeyEn] ? styles['page91__icon--pulsing'] : ''
                    }`}
                    onClick={() => toggleSpeedReduction(audioKeyEn)}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* AÇÕES: Check → Reset → Answers Key */}
        <div className={styles['page91__actions']}>
          <button className={styles['page91__button--check']} onClick={handleCheckClick}>
            <em>Check</em>
          </button>

          <button className={styles['page91__reset--button']} onClick={handleResetClick}>
            Reset
          </button>

          <button
            className={styles['page91__answersKey--button']}
            aria-pressed={showAnswersKey ? 'true' : 'false'}
            onClick={toggleAnswersKey}
          >
            Answers Key
          </button>
        </div>

        {/* ANSWERS KEY */}
        {showAnswersKey && (
          <div className={styles['page91__answersKey-box']}>
            {questions.map((q, i) => {
              const [left, right] = q.split('____');
              const ans = correctAnswers[i] || '';
              const full = `${left}${ans}${right}`;
              return (
                <div key={i} className={styles['page91__answersKey-item']}>
                  <span className={styles['page91__answersKey-num']}>{i + 1}.</span>
                  <span className={styles['page91__answersKey-text']}>{full}</span>
                </div>
              );
            })}
          </div>
        )}
      </aside>
    </div>
  );
};

export default Pagina91;
