import React, { useState } from 'react';

import styles from './pagina102.module.css';

import correct_icon from '../assets/icons/correct_icon.webp';
import wrong_icon from '../assets/icons/wrong_icon.webp';
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';
import slow_audio_icon from '../assets/icons/slow_audio_icon.webp';

import pagina102_imagem1 from '../assets/images/pagina102_imagem1.webp';

import global_learning_le_e from '../assets/audios/global_learning_le_e.mp3';
import global_learning_le_p from '../assets/audios/global_learning_le_p.mp3';
import pg102_audio1e from '../assets/audios/pg102_audio1e.mp3';
import pg102_audio1p from '../assets/audios/pg102_audio1p.mp3';
import pg102_audio2 from '../assets/audios/pg102_audio2.mp3';
import pg102_audio3 from '../assets/audios/pg102_audio3.mp3';
import pg102_audio4 from '../assets/audios/pg102_audio4.mp3';
import pg102_audio5 from '../assets/audios/pg102_audio5.mp3';
import pg102_audio6 from '../assets/audios/pg102_audio6.mp3';
import pg102_audio7 from '../assets/audios/pg102_audio7.mp3';
import pg102_audio8 from '../assets/audios/pg102_audio8.mp3';
import pg102_audio9 from '../assets/audios/pg102_audio9.mp3';
import pg102_audio10 from '../assets/audios/pg102_audio10.mp3';
import pg102_audio11 from '../assets/audios/pg102_audio11.mp3';
import pg102_audio12 from '../assets/audios/pg102_audio12.mp3';
import pg102_audio13 from '../assets/audios/pg102_audio13.mp3';
import pg102_audio14 from '../assets/audios/pg102_audio14.mp3';
import pg102_audio15 from '../assets/audios/pg102_audio15.mp3';
import pg102_audio16 from '../assets/audios/pg102_audio16.mp3';
import pg102_audio17 from '../assets/audios/pg102_audio17.mp3';
import pg102_audio18 from '../assets/audios/pg102_audio18.mp3';
import pg102_audio19 from '../assets/audios/pg102_audio19.mp3';
import pg102_audio20 from '../assets/audios/pg102_audio20.mp3';
import pg102_audio21 from '../assets/audios/pg102_audio21.mp3';
import pg102_audio22 from '../assets/audios/pg102_audio22.mp3';
import pg102_audio23 from '../assets/audios/pg102_audio23.mp3';
import pg102_audio24 from '../assets/audios/pg102_audio24.mp3';
import pg102_audio25 from '../assets/audios/pg102_audio25.mp3';
import pg102_audio2p from '../assets/audios/pg102_audio2p.mp3';
import pg102_audio3p from '../assets/audios/pg102_audio3p.mp3';
import pg102_audio4p from '../assets/audios/pg102_audio4p.mp3';
import pg102_audio5p from '../assets/audios/pg102_audio5p.mp3';
import pg102_audio6p from '../assets/audios/pg102_audio6p.mp3';
import pg102_audio7p from '../assets/audios/pg102_audio7p.mp3';
import pg102_audio8p from '../assets/audios/pg102_audio8p.mp3';
import pg102_audio9p from '../assets/audios/pg102_audio9p.mp3';
import pg102_audio10p from '../assets/audios/pg102_audio10p.mp3';
import pg102_audio11p from '../assets/audios/pg102_audio11p.mp3';
import pg102_audio12p from '../assets/audios/pg102_audio12p.mp3';
import pg102_audio13p from '../assets/audios/pg102_audio13p.mp3';
import pg102_audio14p from '../assets/audios/pg102_audio14p.mp3';
import pg102_audio15p from '../assets/audios/pg102_audio15p.mp3';
import pg102_audio16p from '../assets/audios/pg102_audio16p.mp3';
import pg102_audio17p from '../assets/audios/pg102_audio17p.mp3';
import pg102_audio18p from '../assets/audios/pg102_audio18p.mp3';
import pg102_audio19p from '../assets/audios/pg102_audio19p.mp3';
import pg102_audio20p from '../assets/audios/pg102_audio20p.mp3';
import pg102_audio21p from '../assets/audios/pg102_audio21p.mp3';
import pg102_audio22p from '../assets/audios/pg102_audio22p.mp3';
import pg102_audio23p from '../assets/audios/pg102_audio23p.mp3';
import pg102_audio24p from '../assets/audios/pg102_audio24p.mp3';
import pg102_audio25p from '../assets/audios/pg102_audio25p.mp3';

const audioMap = {
    global_learning_le_e,
    global_learning_le_p,
    pg102_audio1e,
    pg102_audio1p,
    pg102_audio2,
    pg102_audio3,
    pg102_audio4,
    pg102_audio5,
    pg102_audio6,
    pg102_audio7,
    pg102_audio8,
    pg102_audio9,
    pg102_audio10,
    pg102_audio11,
    pg102_audio12,
    pg102_audio13,
    pg102_audio14,
    pg102_audio15,
    pg102_audio16,
    pg102_audio17,
    pg102_audio18,
    pg102_audio19,
    pg102_audio20,
    pg102_audio21,
    pg102_audio22,
    pg102_audio23,
    pg102_audio24,
    pg102_audio25,
    pg102_audio2p,
    pg102_audio3p,
    pg102_audio4p,
    pg102_audio5p,
    pg102_audio6p,
    pg102_audio7p,
    pg102_audio8p,
    pg102_audio9p,
    pg102_audio10p,
    pg102_audio11p,
    pg102_audio12p,
    pg102_audio13p,
    pg102_audio14p,
    pg102_audio15p,
    pg102_audio16p,
    pg102_audio17p,
    pg102_audio18p,
    pg102_audio19p,
    pg102_audio20p,
    pg102_audio21p,
    pg102_audio22p,
    pg102_audio23p,
    pg102_audio24p,
    pg102_audio25p,
};

const Pagina102 = () => {
  const [inputValues, setInputValues] = useState(Array(30).fill(''));
  const [results, setResults] = useState(Array(30).fill(null));
  const [isSpeedReduced, setIsSpeedReduced] = useState({});
  const [showAnswersKey, setShowAnswersKey] = useState(false);

  const correctAnswers = [
    // Affirmative (0–4)
    'am', 'is', 'are', 'are', 'is',
    // Negative (5–9)
    'am not', 'is not', 'are not', 'are not', 'is not',
    // Interrogative (10–13)
    'are', 'is', 'are', 'are',
    // Mixed (14–23)
    'is', 'is', 'are not', 'are', 'is',
    'are not', 'are', 'am', 'is', 'are'
  ];

  const normalize = (s) => (s ?? '').trim().toLowerCase().replace(/\s+/g, ' ');

  const handleCheckClick = () => {
    const newResults = inputValues.map((value, index) => {
      if (!value.trim()) return false;
      const trimmedValue = normalize(value);
      const correctValue = normalize(correctAnswers[index] ?? '');
      return trimmedValue === correctValue;
    });
    setResults(newResults);
  };

  const handleReset = () => {
    setInputValues(Array(30).fill(''));
    setResults(Array(30).fill(null));
    setShowAnswersKey(false);
  };

  const toggleAnswersKey = () => setShowAnswersKey((v) => !v);

  const handleInputChange = (value, index) => {
    setInputValues((prevValues) => {
      const newValues = [...prevValues];
      newValues[index] = value;
      return newValues;
    });
  };

  const playAudio = (audioKey) => {
    if (audioMap[audioKey]) {
      const audio = new Audio(audioMap[audioKey]);
      audio.playbackRate = isSpeedReduced[audioKey] ? 0.6 : 1;
      audio.play().catch((error) => console.error('Erro ao reproduzir o áudio:', error));
    } else {
      console.warn(`Áudio não encontrado para: ${audioKey}`);
    }
  };

  const toggleSpeedReduction = (audioKey) => {
    setIsSpeedReduced((prevState) => ({
      ...prevState,
      [audioKey]: !prevState[audioKey],
    }));
  };

  // Answers Key (A=Affirmative, B=Negative, C=Interrogative, D=Mixed)
  const answersKeyItems = [
    // Affirmative (A.1–A.5)
    { label: 'A.1', text: 'am' },
    { label: 'A.2', text: 'is' },
    { label: 'A.3', text: 'are' },
    { label: 'A.4', text: 'are' },
    { label: 'A.5', text: 'is' },
    // Negative (B.1–B.5)
    { label: 'B.1', text: 'am not' },
    { label: 'B.2', text: 'is not' },
    { label: 'B.3', text: 'are not' },
    { label: 'B.4', text: 'are not' },
    { label: 'B.5', text: 'is not' },
    // Interrogative (C.1–C.4)
    { label: 'C.1', text: 'are' },
    { label: 'C.2', text: 'is' },
    { label: 'C.3', text: 'are' },
    { label: 'C.4', text: 'are' },
    // Mixed (D.1–D.10)
    { label: 'D.1', text: 'is' },
    { label: 'D.2', text: 'is' },
    { label: 'D.3', text: 'are not' },
    { label: 'D.4', text: 'are' },
    { label: 'D.5', text: 'is' },
    { label: 'D.6', text: 'are not' },
    { label: 'D.7', text: 'are' },
    { label: 'D.8', text: 'am' },
    { label: 'D.9', text: 'is' },
    { label: 'D.10', text: 'are' },
  ];

  return (
    <div className={styles['page102__container']}>
      <main className={styles['page102__main']}>
        <header className={styles['page102__header']}>
          <h1 className={styles['page102__h1']}>
            Learning Language Exercises
            <img
              src={eng_audio_icon}
              alt="English audio"
              className={styles['page102__header-icon']}
              onClick={() => playAudio('global_learning_le_e')}
            />
            <img
              src={ptbr_audio_icon}
              alt="Portuguese audio"
              className={styles['page102__header-icon']}
              onClick={() => playAudio('global_learning_le_p')}
            />
          </h1>
          <p>
            Fill in the blanks with the <span style={{ color: 'blue' }}>Correct Complete Form</span> of the verb
            to be (Simple Present)
            <img
              src={eng_audio_icon}
              alt="English audio"
              className={styles['page102__header-icon']}
              onClick={() => playAudio('pg102_audio1e')}
            />
            <img
              src={ptbr_audio_icon}
              alt="Portuguese audio"
              className={styles['page102__header-icon']}
              onClick={() => playAudio('pg102_audio1p')}
            />
          </p>
        </header>

        {/* Affirmative */}
        <div className={styles['page102__container-questoes']}>
          <div className={styles['page102__questions1']}>
            <h2 className={styles['page102__h2']}>Affirmative:</h2>
            {[
              'I ____ a student.',
              'She ____ my sister.',
              'We ____ friends.',
              'They ____ at home.',
              'It ____ a beautiful day.',
            ].map((sentence, index) => {
              const audioKey = `pg102_audio${index + 2}`;
              const audioKeyP = `pg102_audio${index + 2}p`;
              const [before, after] = sentence.split('____');
              return (
                <div key={index} className={styles['page102__question']}>
                  <span>{before}</span>
                  <input
                    type="text"
                    value={inputValues[index] || ''}
                    onChange={(e) => handleInputChange(e.target.value, index)}
                    className={styles['page102__input-box']}
                  />
                  <span>{after}</span>

                  {results[index] !== null && (
                    <img
                      src={results[index] ? correct_icon : wrong_icon}
                      alt={results[index] ? 'Correct' : 'Incorrect'}
                      className={styles['page102__checkmark-image']}
                    />
                  )}

                  <div className={styles['page102__icons-container']}>
                    <img
                      src={eng_audio_icon}
                      alt="Audio Icon"
                      className={styles['page102__additional-icon']}
                      onClick={() => playAudio(audioKey)}
                    />
                    <img
                      src={ptbr_audio_icon}
                      alt="Audio Icon"
                      className={styles['page102__additional-icon']}
                      onClick={() => playAudio(audioKeyP)}
                    />
                    <img
                      src={slow_audio_icon}
                      alt="Volume Reduced Icon"
                      className={`${styles['page102__additional-icon']} ${isSpeedReduced[audioKey] ? styles['page102__pulsing'] : ''}`}
                      onClick={() => toggleSpeedReduction(audioKey)}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className={styles['page102__tabela-afirmativa-container']}>
            <div className={styles['page102__table-header-afirmativa']}>AFIRMATIVA</div>
            <table className={styles['page102__styled-table-afirmativa']}>
              <thead>
                <tr className={styles['page102__celula-table']}>
                  <th>Sujeito</th>
                  <th>Verbo Auxiliar</th>
                  <th>Adverb</th>
                  <th>Verbo(s)</th>
                  <th>Objeto Complemento</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>

        {/* Negative */}
        <div className={styles['page102__container-questoes']}>
          <div className={styles['page102__questions2']}>
            <h2 className={styles['page102__h2']} style={{ color: 'red' }}>
              Negative:
            </h2>
            {[
              'I ____ a teacher.',
              'She ____ my mother.',
              'We ____ late.',
              'They ____ happy.',
              'It ____ cold today.',
            ].map((sentence, index) => {
              const realIndex = index + 5;
              const audioKey = `pg102_audio${realIndex + 2}`;
              const audioKeyP = `pg102_audio${realIndex + 2}p`;
              const [before, after] = sentence.split('____');

              return (
                <div key={realIndex} className={styles['page102__question']}>
                  <span>{before}</span>
                  <input
                    type="text"
                    value={inputValues[realIndex] || ''}
                    onChange={(e) => handleInputChange(e.target.value, realIndex)}
                    className={styles['page102__input-box']}
                  />
                  <span>{after}</span>

                  {results[realIndex] !== null && (
                    <img
                      src={results[realIndex] ? correct_icon : wrong_icon}
                      alt={results[realIndex] ? 'Correct' : 'Incorrect'}
                      className={styles['page102__checkmark-image']}
                    />
                  )}

                  <div className={styles['page102__icons-container']}>
                    <img
                      src={eng_audio_icon}
                      alt="Audio Icon"
                      className={styles['page102__additional-icon']}
                      onClick={() => playAudio(audioKey)}
                    />
                    <img
                      src={ptbr_audio_icon}
                      alt="Audio Icon"
                      className={styles['page102__additional-icon']}
                      onClick={() => playAudio(audioKeyP)}
                    />
                    <img
                      src={slow_audio_icon}
                      alt="Volume Reduced Icon"
                      className={`${styles['page102__additional-icon']} ${isSpeedReduced[audioKey] ? styles['page102__pulsing'] : ''}`}
                      onClick={() => toggleSpeedReduction(audioKey)}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div className={styles['page102__tabela-negativa-container']}>
            <div className={styles['page102__table-header-negativa']}>NEGATIVA</div>
            <table className={styles['page102__styled-table-negativa']}>
              <thead>
                <tr className={styles['page102__celula-table']}>
                  <th>Introdução</th>
                  <th>Sujeito</th>
                  <th>Verbo Auxiliar</th>
                  <th>
                    <span style={{ color: 'red' }}>Not</span> <br /> Adverb
                  </th>
                  <th>Verbo(s)</th>
                  <th>Objeto Complemento</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>

        {/* Interrogative */}
        <div className={styles['page102__container-questoes']}>
          <div className={styles['page102__questions3']}>
            <h2 className={styles['page102__h2']}>Interrogative:</h2>
            {['you a doctor?', 'she your friend?', 'we late?', 'they at the park?'].map(
              (sentence, index) => {
                const realIndex = index + 10;
                const audioKey = `pg102_audio${realIndex + 2}`;
                const audioKeyP = `pg102_audio${realIndex + 2}p`;

                return (
                  <div key={realIndex} className={styles['page102__question']}>
                    <input
                      type="text"
                      value={inputValues[realIndex] || ''}
                      onChange={(e) => handleInputChange(e.target.value, realIndex)}
                      className={styles['page102__input-box']}
                    />
                    <span>{sentence}</span>

                    {results[realIndex] !== null && (
                      <img
                        src={results[realIndex] ? correct_icon : wrong_icon}
                        alt={results[realIndex] ? 'Correct' : 'Incorrect'}
                        className={styles['page102__checkmark-image']}
                      />
                    )}

                    <div className={styles['page102__icons-container']}>
                      <img
                        src={eng_audio_icon}
                        alt="Audio Icon"
                        className={styles['page102__additional-icon']}
                        onClick={() => playAudio(audioKey)}
                      />
                      <img
                        src={ptbr_audio_icon}
                        alt="Audio Icon"
                        className={styles['page102__additional-icon']}
                        onClick={() => playAudio(audioKeyP)}
                      />
                      <img
                        src={slow_audio_icon}
                        alt="Volume Reduced Icon"
                        className={`${styles['page102__additional-icon']} ${isSpeedReduced[audioKey] ? styles['page102__pulsing'] : ''}`}
                        onClick={() => toggleSpeedReduction(audioKey)}
                      />
                    </div>
                  </div>
                );
              }
            )}
          </div>
          <div className={styles['page102__tabela-interrogativa-container']}>
            <div className={styles['page102__table-header-interrogativa']}>INTERROGATIVA</div>
            <table className={styles['page102__styled-table-interrogativa']}>
              <thead>
                <tr className={styles['page102__celula-table']}>
                  <th>Verbo Auxiliar</th>
                  <th>Sujeito</th>
                  <th>
                    <span style={{ color: 'red' }}>Not</span> <br /> Adverb
                  </th>
                  <th>Verbo(s)</th>
                  <th>Objeto Complemento</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>

        {/* Mixed */}
        <div className={styles['page102__container-questoes']}>
          <div className={styles['page102__questions4']}>
            <h2 className={styles['page102__h2']}>Mixed:</h2>
            {[
              'It ____ a cat. (affirmative)',
              '____ he your brother? (interrogative)',
              'They ____ here. (negative)',
              '____ we ready? (interrogative)',
              'She ____ a good singer. (affirmative)',
              'You ____ my teacher. (negative)',
              '____ they from France? (interrogative)',
              'I ____ at home. (affirmative)',
              'It ____ a big problem. (affirmative)',
              '____ you my friend? (interrogative)',
            ].map((sentence, index) => {
              const realIndex = index + 14;
              const audioKey = `pg102_audio${realIndex + 2}`;
              const audioKeyP = `pg102_audio${realIndex + 2}p`;
              const [before, after] = sentence.split('____');

              return (
                <div key={realIndex} className={styles['page102__question']}>
                  <span>{before}</span>

                  <input
                    type="text"
                    value={inputValues[realIndex] || ''}
                    onChange={(e) => handleInputChange(e.target.value, realIndex)}
                    className={styles['page102__input-box']}
                  />

                  <span>{after}</span>

                  {results[realIndex] !== null && (
                    <img
                      src={results[realIndex] ? correct_icon : wrong_icon}
                      alt={results[realIndex] ? 'Correct' : 'Incorrect'}
                      className={styles['page102__checkmark-image']}
                    />
                  )}

                  <div className={styles['page102__icons-container']}>
                    <img
                      src={eng_audio_icon}
                      alt="Audio Icon"
                      className={styles['page102__additional-icon']}
                      onClick={() => playAudio(audioKey)}
                    />
                    <img
                      src={ptbr_audio_icon}
                      alt="Audio Icon"
                      className={styles['page102__additional-icon']}
                      onClick={() => playAudio(audioKeyP)}
                    />
                    <img
                      src={slow_audio_icon}
                      alt="Volume Reduced Icon"
                      className={`${styles['page102__additional-icon']} ${isSpeedReduced[audioKey] ? styles['page102__pulsing'] : ''}`}
                      onClick={() => toggleSpeedReduction(audioKey)}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          {/* Imagem */}
          <div className={styles['page102__container-imagem']}>
            <img className={styles['page102__imagem']} src={pagina102_imagem1} alt="Learning" />
          </div>
        </div>

        {/* AÇÕES (ordem: Check → Reset → Answers Key) */}
        <div className={styles['page102__actions']}>
          <button className={styles['page102__check-button']} onClick={handleCheckClick}>
            <em>Check</em>
          </button>

          <button className={styles['page102__reset--button']} onClick={handleReset}>
            <em>Reset</em>
          </button>

          <button
            className={styles['page102__answersKey--button']}
            onClick={toggleAnswersKey}
            aria-pressed={showAnswersKey ? 'true' : 'false'}
          >
            <em>Answers Key</em>
          </button>
        </div>

        {showAnswersKey && (
          <div className={styles['page102__answersKey-box']}>
            {answersKeyItems.map((item, idx) => (
              <div key={idx} className={styles['page102__answersKey-item']}>
                <div className={styles['page102__answersKey-num']}>{item.label}</div>
                <div className={styles['page102__answersKey-text']}>{item.text}</div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Pagina102;
