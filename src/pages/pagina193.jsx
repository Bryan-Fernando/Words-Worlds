import React, { useRef } from 'react';
import styles from './pagina193.module.css';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';

import audio1e from '../assets/audios/pg193_audio1e.mp3';
import audio2e from '../assets/audios/pg193_audio2e.mp3';
import audio3e from '../assets/audios/pg193_audio3e.mp3';
import audio4e from '../assets/audios/pg193_audio4e.mp3';
import audio5e from '../assets/audios/pg193_audio5e.mp3';
import audio6e from '../assets/audios/pg193_audio6e.mp3';
import audio7e from '../assets/audios/pg193_audio7e.mp3';
import audio8e from '../assets/audios/pg193_audio8e.mp3';

const Pagina193 = () => {
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
    'pg193_audio1e': audio1e,
    'pg193_audio2e': audio2e,
    'pg193_audio3e': audio3e,
    'pg193_audio4e': audio4e,
    'pg193_audio5e': audio5e,
    'pg193_audio6e': audio6e,
    'pg193_audio7e': audio7e,
    'pg193_audio8e': audio8e,
  };

  const questionWords = [
    { word: 'How many times', translation: 'Quantas vezes', audio: 'pg193_audio1e' },
    { word: 'How many times a day', translation: 'Quantas vezes por dia', audio: 'pg193_audio4e' },
    { word: 'How many times a week', translation: 'Quantas vezes por semana', audio: 'pg193_audio2e' },
    { word: 'How many times a month', translation: 'Quantas vezes por mês', audio: 'pg193_audio5e' },
    { word: 'How many times a year', translation: 'Quantas vezes por ano', audio: 'pg193_audio3e' },
  ];

  const tableData = [
    {
      questionWord: 'How many times a month',
      translation: 'Quantas vezes por mês você iria ao spa só para relaxar?',
      subject: 'you',
      verb: 'go to the spa just',
      complement: 'to relax?',
      audio: 'pg193_audio6e',
    },
    {
      questionWord: 'How many times a month',
      translation: 'Quantas vezes por mês isso precisaria de manutenção?',
      subject: 'it',
      verb: 'need',
      complement: 'maintenance?',
      audio: 'pg193_audio7e',
    },
    {
      questionWord: 'How many times a month',
      translation: 'Quantas vezes por mês eles/elas organizariam eventos?',
      subject: 'they',
      verb: 'organize',
      complement: 'events?',
      audio: 'pg193_audio8e',
    },
  ];

  return (
    <div className={styles.page193__container}>
      <header className={styles.page193__header}>
        <h1 className={styles.page193__title}>Grammar - <span className={styles.page193__title_black}>Question Words</span></h1>
      </header>

      <main className={styles.page193__main}>
        <section className={styles.page193__vocabulary}>
          <div className={styles.page193__vocabulary_grid}>
            {questionWords.map((item, index) => (
              <div key={index} className={styles.page193__vocabulary_card}>
                <div className={styles.page193__word}>
                  {item.word}
                  <img
                    src={eng_audio_icon}
                    alt=""
                    className={styles.page193__audioIcon}
                    onClick={() => playAudio(item.audio)}
                  />
                </div>
                <div className={styles.page193__translation}>{item.translation}</div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.page193__tableSection}>
          <div className={styles.page193__tableTitle}>
            Question Words
          </div>
          <div className={styles.page193__subtitleSection}>
            Interrogative Form
          </div>
          <table className={styles.page193__table}>
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
                    <span className={styles.page193__translationBlue}>would</span>
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

export default Pagina193;
