import React, { useRef } from 'react';
import styles from './pagina187.module.css';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';

import audio1e from '../assets/audios/pg187_audio1e.mp3';
import audio2e from '../assets/audios/pg187_audio2e.mp3';
import audio3e from '../assets/audios/pg187_audio3e.mp3';
import audio4e from '../assets/audios/pg187_audio4e.mp3';
import audio5e from '../assets/audios/pg187_audio5e.mp3';
import audio6e from '../assets/audios/pg187_audio6e.mp3';
import audio7e from '../assets/audios/pg187_audio7e.mp3';
import audio8e from '../assets/audios/pg187_audio8e.mp3';

const Pagina187 = () => {
  const currentAudio = useRef(null);

  const playAudio = (id) => {
    if (currentAudio.current) {
      currentAudio.current.pause();
      currentAudio.current.currentTime = 0;
    }
    const audio = new Audio(audioMap[id]);
    currentAudio.current = audio;
    audio.play();
  };

  const audioMap = {
    'pg187_audio1e': audio1e,
    'pg187_audio2e': audio2e,
    'pg187_audio3e': audio3e,
    'pg187_audio4e': audio4e,
    'pg187_audio5e': audio5e,
    'pg187_audio6e': audio6e,
    'pg187_audio7e': audio7e,
    'pg187_audio8e': audio8e,
  };

  const questionWords = [
    { word: 'How', translation: 'Como / Quão (adjetivo/adverbial)', audio: 'pg187_audio1e' },
    { word: 'How far', translation: 'Quão longe / Que distância', audio: 'pg187_audio3e' },
    { word: 'How old', translation: 'Quantos anos / Quão velho (somente para idade)', audio: 'pg187_audio2e' },
    { word: 'How often', translation: 'Com que frequência / Quão frequente', audio: 'pg187_audio4e' },
  ];

  const tableData = [
    {
      questionWord: 'How',
      translation: 'Como isso funcionaria na prática?',
      subject: 'it',
      verb: 'work',
      complement: 'in practice?',
      audio: 'pg187_audio5e',
    },
    {
      questionWord: 'How far',
      translation: 'Quão longe nós teríamos que dirigir antes de parar?',
      subject: 'we',
      verb: 'have to drive',
      complement: 'before stopping?',
      audio: 'pg187_audio6e',
    },
    {
      questionWord: 'How old',
      translation: 'Quantos anos Rodrigo teria em 2050?',
      subject: 'Rodrigo',
      verb: 'be',
      complement: 'in 2050?',
      audio: 'pg187_audio7e',
    },
    {
      questionWord: 'How often',
      translation: 'Com que frequência nós nos encontraríamos durante o curso?',
      subject: 'we',
      verb: 'meet',
      complement: 'during the course?',
      audio: 'pg187_audio8e',
    },
  ];

  return (
    <div className={styles.page187__container}>
      <header className={styles.page187__header}>
        <h1 className={styles.page187__title}>Grammar - <span className={styles.page187__title_black}>Question Words</span></h1>
      </header>

      <main className={styles.page187__main}>
        <section className={styles.page187__vocabulary}>
          <div className={styles.page187__vocabulary_grid}>
            {questionWords.map((item, index) => (
              <div key={index} className={styles.page187__vocabulary_card}>
                <div className={styles.page187__word}>
                  {item.word}
                  <img
                    src={eng_audio_icon}
                    alt=""
                    className={styles.page187__audioIcon}
                    onClick={() => playAudio(item.audio)}
                  />
                </div>
                <div className={styles.page187__translation}>{item.translation}</div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.page187__tableSection}>
          <div className={styles.page187__tableTitle}>
            Question Words
          </div>
          <div className={styles.page187__subtitleSection}>
            Interrogative Form
          </div>
          <table className={styles.page187__table}>
            <thead>
              <tr>
                <th>Question Word</th>
                <th>Aux. Verb</th>
                <th>Subject</th>
                <th>Adv</th>
                <th>Verb(s)</th>
                <th>Object Complement</th>
                <th>Tradução</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((item, index) => (
                <tr key={index}>
                  <td
                    onClick={() => playAudio(item.audio)}
                    style={{ cursor: 'pointer' }}
                  >
                    {item.questionWord}
                  </td>
                  <td
                    onClick={() => playAudio(item.audio)}
                    style={{ cursor: 'pointer' }}
                  >
                    <span className={styles.page187__translationBlue}>would</span>
                  </td>
                  <td
                    onClick={() => playAudio(item.audio)}
                    style={{ cursor: 'pointer' }}
                  >
                    {item.subject}
                  </td>
                  <td
                    onClick={() => playAudio(item.audio)}
                    style={{ cursor: 'pointer' }}
                  ></td>
                  <td
                    onClick={() => playAudio(item.audio)}
                    style={{ cursor: 'pointer' }}
                  >
                    {item.verb}
                  </td>
                  <td
                    onClick={() => playAudio(item.audio)}
                    style={{ cursor: 'pointer' }}
                  >
                    {item.complement}
                  </td>
                  <td>{item.translation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default Pagina187;
