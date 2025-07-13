import React, { useRef } from 'react';
import styles from './pagina184.module.css';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';

import audio1e from '../assets/audios/pg184_audio1e.mp3';
import audio2e from '../assets/audios/pg184_audio2e.mp3';
import audio3e from '../assets/audios/pg184_audio3e.mp3';
import audio4e from '../assets/audios/pg184_audio4e.mp3';
import audio5e from '../assets/audios/pg184_audio5e.mp3';
import audio6e from '../assets/audios/pg184_audio6e.mp3';
import audio7e from '../assets/audios/pg184_audio7e.mp3';
import audio8e from '../assets/audios/pg184_audio8e.mp3';

const Pagina184 = () => {
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
    'pg184_audio1e': audio1e,
    'pg184_audio2e': audio2e,
    'pg184_audio3e': audio3e,
    'pg184_audio4e': audio4e,
    'pg184_audio5e': audio5e,
    'pg184_audio6e': audio6e,
    'pg184_audio7e': audio7e,
    'pg184_audio8e': audio8e,
  };

  const questionWords = [
    { word: 'What', translation: 'O que, que, qual, quais', audio: 'pg184_audio1e' },
    { word: 'Where', translation: 'Onde, aonde', audio: 'pg184_audio3e' },
    { word: 'When', translation: 'Quando', audio: 'pg184_audio2e' },
    { word: 'What time', translation: 'Que horas', audio: 'pg184_audio4e' },
  ];

  const tableData = [
    {
      questionWord: 'What',
      wordTranslation: 'O que',
      subject: 'Wallace',
      translation: 'O que Wallace preferiria comer: peixe ou frango?',
      verb: 'prefer to eat',
      complement: 'fish or chicken?',
      audio: 'pg184_audio5e',
    },
    {
      questionWord: 'Where',
      wordTranslation: 'Onde',
      subject: 'I',
      translation: 'Onde eu encontraria aquele livro?',
      verb: 'find',
      complement: 'that book?',
      audio: 'pg184_audio6e',
    },
    {
      questionWord: 'When',
      wordTranslation: 'Quando',
      subject: 'Melissa',
      translation: 'Quando Melissa começaria a trabalhar na Credisis?',
      verb: 'start working',
      complement: 'at Credisis?',
      audio: 'pg184_audio7e',
    },
    {
      questionWord: 'What time',
      wordTranslation: 'Que horas',
      subject: 'we',
      translation: 'Que horas nós precisaríamos acordar?',
      verb: 'need to wake up?',
      complement: '',
      audio: 'pg184_audio8e',
    },
  ];

  return (
    <div className={styles.page184__container}>
      <header className={styles.page184__header}>
        <h1 className={styles.page184__title}>Grammar - <span className={styles.page184__title_black}>Question Words</span></h1>
      </header>

      <main className={styles.page184__main}>
        <section className={styles.page184__vocabulary}>
          <div className={styles.page184__vocabulary_grid}>
            {questionWords.map((item, index) => (
              <div key={index} className={styles.page184__vocabulary_card}>
                <div className={styles.page184__word}>
                  {item.word}
                  <img
                    src={eng_audio_icon}
                    alt=""
                    className={styles.page184__audioIcon}
                    onClick={() => playAudio(item.audio)}
                  />
                </div>
                <div className={styles.page184__translation}>{item.translation}</div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.page184__tableSection}>
          <div className={styles.page184__tableTitle}>
            Question Words
          </div>
          <div className={styles.page184__subtitleSection}>
            Interrogative Form
          </div>
          <table className={styles.page184__table}>
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
                    <span className={styles.page184__translationBlue}>would</span>
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

export default Pagina184;
