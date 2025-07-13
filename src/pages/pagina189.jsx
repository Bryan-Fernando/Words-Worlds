import React, { useRef } from 'react';
import styles from './pagina189.module.css';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';

import audio1e from '../assets/audios/pg189_audio1e.mp3';
import audio2e from '../assets/audios/pg189_audio2e.mp3';
import audio3e from '../assets/audios/pg189_audio3e.mp3';
import audio4e from '../assets/audios/pg189_audio4e.mp3';
import audio5e from '../assets/audios/pg189_audio5e.mp3';
import audio6e from '../assets/audios/pg189_audio6e.mp3';
import audio7e from '../assets/audios/pg189_audio7e.mp3';
import audio8e from '../assets/audios/pg189_audio8e.mp3';

const Pagina189 = () => {
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
    'pg189_audio1e': audio1e,
    'pg189_audio2e': audio2e,
    'pg189_audio3e': audio3e,
    'pg189_audio4e': audio4e,
    'pg189_audio5e': audio5e,
    'pg189_audio6e': audio6e,
    'pg189_audio7e': audio7e,
    'pg189_audio8e': audio8e,
  };

  const questionWords = [
    { word: 'How much', translation: 'Quanto / quanta / quanto de (substantivos incontáveis)', audio: 'pg189_audio1e' },
    { word: 'How many', translation: 'Quantos / quantas (substantivos contáveis)', audio: 'pg189_audio3e' },
    { word: 'How long', translation: 'Quanto tempo (duração total)', audio: 'pg189_audio2e' },
    { word: 'How much longer', translation: 'Quanto tempo mais / ainda (tempo restante)', audio: 'pg189_audio4e' },
  ];

  const tableData = [
    {
      questionWord: 'How much money',
      translation: 'Quanto dinheiro você gastaria em um presente de aniversário?',
      subject: 'you',
      verb: 'spend',
      complement: 'on a birthday gift?',
      audio: 'pg189_audio5e',
    },
    {
      questionWord: 'How many books',
      translation: 'Quantos livros Bryan leria em um mês?',
      subject: 'Bryan',
      verb: 'read',
      complement: 'in a month?',
      audio: 'pg189_audio6e',
    },
    {
      questionWord: 'How long',
      translation: 'Quanto tempo você ficaria no Brasil?',
      subject: 'you',
      verb: 'stay',
      complement: 'in Brazil?',
      audio: 'pg189_audio7e',
    },
    {
      questionWord: 'How much longer',
      translation: 'Quanto tempo mais levaria para atualizar o sistema?',
      subject: 'it',
      verb: 'take to update',
      complement: 'the system?',
      audio: 'pg189_audio8e',
    },
  ];

  return (
    <div className={styles.page189__container}>
      <header className={styles.page189__header}>
        <h1 className={styles.page189__title}>Grammar - <span className={styles.page189__title_black}>Question Words</span></h1>
      </header>

      <main className={styles.page189__main}>
        <section className={styles.page189__vocabulary}>
          <div className={styles.page189__vocabulary_grid}>
            {questionWords.map((item, index) => (
              <div key={index} className={styles.page189__vocabulary_card}>
                <div className={styles.page189__word}>
                  {item.word}
                  <img
                    src={eng_audio_icon}
                    alt=""
                    className={styles.page189__audioIcon}
                    onClick={() => playAudio(item.audio)}
                  />
                </div>
                <div className={styles.page189__translation}>{item.translation}</div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.page189__tableSection}>
          <div className={styles.page189__tableTitle}>
            Question Words
          </div>
          <div className={styles.page189__subtitleSection}>
            Interrogative Form
          </div>
          <table className={styles.page189__table}>
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
                    <span className={styles.page189__translationBlue}>would</span>
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

export default Pagina189;
