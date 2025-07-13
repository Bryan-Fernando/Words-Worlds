import React, { useRef } from 'react';
import styles from './pagina186.module.css';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';

import audio1e from '../assets/audios/pg186_audio1e.mp3';
import audio2e from '../assets/audios/pg186_audio2e.mp3';
import audio3e from '../assets/audios/pg186_audio3e.mp3';
import audio4e from '../assets/audios/pg186_audio4e.mp3';
import audio5e from '../assets/audios/pg186_audio5e.mp3';
import audio6e from '../assets/audios/pg186_audio6e.mp3';
import audio7e from '../assets/audios/pg186_audio7e.mp3';
import audio8e from '../assets/audios/pg186_audio8e.mp3';

const Pagina186 = () => {
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
    'pg186_audio1e': audio1e,
    'pg186_audio2e': audio2e,
    'pg186_audio3e': audio3e,
    'pg186_audio4e': audio4e,
    'pg186_audio5e': audio5e,
    'pg186_audio6e': audio6e,
    'pg186_audio7e': audio7e,
    'pg186_audio8e': audio8e,
  };

  const questionWords = [
    { word: 'Whose', translation: 'De quem (posse)', audio: 'pg186_audio1e' },
    { word: 'What kind of', translation: 'Que tipo de / espécie de', audio: 'pg186_audio3e' },
    { word: 'What type of', translation: 'Que tipo de / espécie de', audio: 'pg186_audio2e' },
    { word: 'What sort of', translation: 'Que tipo de / espécie de', audio: 'pg186_audio4e' },
  ];

  const tableData = [
    {
      questionWord: 'Whose idea',
      translation: 'De quem seria a ideia de cancelar a viagem?',
      subject: 'it',
      verb: 'be to cancel',
      complement: 'the trip?',
      audio: 'pg186_audio5e',
    },
    {
      questionWord: 'What kind of gift',
      translation: 'Que tipo de presente nós levaríamos para a festa?',
      subject: 'we',
      verb: 'take',
      complement: 'to the party?',
      audio: 'pg186_audio6e',
    },
    {
      questionWord: 'What type of clothes',
      translation: 'Que tipo de roupa você usaria para um evento social?',
      subject: 'you',
      verb: 'wear',
      complement: 'to a social event?',
      audio: 'pg186_audio7e',
    },
    {
      questionWord: 'What sort of music',
      translation: 'Que tipo de música ele tocaria no show?',
      subject: 'he',
      verb: 'play',
      complement: 'at the concert?',
      audio: 'pg186_audio8e',
    },
  ];

  return (
    <div className={styles.page186__container}>
      <header className={styles.page186__header}>
        <h1 className={styles.page186__title}>Grammar - <span className={styles.page186__title_black}>Question Words</span></h1>
      </header>

      <main className={styles.page186__main}>
        <section className={styles.page186__vocabulary}>
          <div className={styles.page186__vocabulary_grid}>
            {questionWords.map((item, index) => (
              <div key={index} className={styles.page186__vocabulary_card}>
                <div className={styles.page186__word}>
                  {item.word}
                  <img
                    src={eng_audio_icon}
                    alt=""
                    className={styles.page186__audioIcon}
                    onClick={() => playAudio(item.audio)}
                  />
                </div>
                <div className={styles.page186__translation}>{item.translation}</div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.page186__tableSection}>
          <div className={styles.page186__tableTitle}>
            Question Words
          </div>
          <div className={styles.page186__subtitleSection}>
            Interrogative Form
          </div>
          <table className={styles.page186__table}>
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
                    <span className={styles.page186__translationBlue}>would</span>
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

export default Pagina186;
