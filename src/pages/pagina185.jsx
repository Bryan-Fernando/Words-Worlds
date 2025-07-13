import React, { useRef } from 'react';
import styles from './pagina185.module.css';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';

import audio1e from '../assets/audios/pg185_audio1e.mp3';
import audio2e from '../assets/audios/pg185_audio2e.mp3';
import audio3e from '../assets/audios/pg185_audio3e.mp3';
import audio4e from '../assets/audios/pg185_audio4e.mp3';
import audio5e from '../assets/audios/pg185_audio5e.mp3';
import audio6e from '../assets/audios/pg185_audio6e.mp3';
import audio7e from '../assets/audios/pg185_audio7e.mp3';
import audio8e from '../assets/audios/pg185_audio8e.mp3';

const Pagina185 = () => {
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
    'pg185_audio1e': audio1e,
    'pg185_audio2e': audio2e,
    'pg185_audio3e': audio3e,
    'pg185_audio4e': audio4e,
    'pg185_audio5e': audio5e,
    'pg185_audio6e': audio6e,
    'pg185_audio7e': audio7e,
    'pg185_audio8e': audio8e,
  };

  const questionWords = [
    { word: 'Why', translation: 'Por que (em perguntas)', audio: 'pg185_audio1e' },
    { word: 'Who', translation: 'Quem', audio: 'pg185_audio3e' },
    { word: 'Which', translation: 'Que, qual, quais (opção)', audio: 'pg185_audio2e' },
    { word: 'What size', translation: 'Que tamanho / Qual tamanho', audio: 'pg185_audio4e' },
  ];

  const tableData = [
    {
      questionWord: 'Who',
      translation: 'Quem ela convidaria para o casamento?',
      subject: 'she',
      verb: 'invite',
      complement: 'to the wedding?',
      audio: 'pg185_audio5e',
    },
    {
      questionWord: 'Why',
      translation: 'Por que eu mentiria para você?',
      subject: 'I',
      verb: 'lie',
      complement: 'to you?',
      audio: 'pg185_audio6e',
    },
    {
      questionWord: 'Which',
      translation: 'Qual você recomendaria: o livro ou o filme?',
      subject: 'you',
      verb: 'recommend',
      complement: 'the book or the movie?',
      audio: 'pg185_audio7e',
    },
    {
      questionWord: 'What size',
      translation: 'Que tamanho seria de lavar depois?',
      subject: 'it',
      verb: 'be washing?',
      complement: 'after',
      audio: 'pg185_audio8e',
    },
  ];

  return (
    <div className={styles.page185__container}>
      <header className={styles.page185__header}>
        <h1 className={styles.page185__title}>Grammar - <span className={styles.page185__title_black}>Question Words</span></h1>
      </header>

      <main className={styles.page185__main}>
        <section className={styles.page185__vocabulary}>
          <div className={styles.page185__vocabulary_grid}>
            {questionWords.map((item, index) => (
              <div key={index} className={styles.page185__vocabulary_card}>
                <div className={styles.page185__word}>
                  {item.word}
                  <img
                    src={eng_audio_icon}
                    alt=""
                    className={styles.page185__audioIcon}
                    onClick={() => playAudio(item.audio)}
                  />
                </div>
                <div className={styles.page185__translation}>{item.translation}</div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.page185__tableSection}>
          <div className={styles.page185__tableTitle}>
            Question Words
          </div>
          <div className={styles.page185__subtitleSection}>
            Interrogative Form
          </div>
          <table className={styles.page185__table}>
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
                    <span className={styles.page185__translationBlue}>would</span>
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

export default Pagina185;
