import React, { useRef } from 'react';
import styles from './pagina183.module.css';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';

import audio1e from '../assets/audios/pg183_audio1e.mp3';
import audio2e from '../assets/audios/pg183_audio2e.mp3';
import audio3e from '../assets/audios/pg183_audio3e.mp3';
import audio4e from '../assets/audios/pg183_audio4e.mp3';
import audio5e from '../assets/audios/pg183_audio5e.mp3';
import audio6e from '../assets/audios/pg183_audio6e.mp3';
import audio7e from '../assets/audios/pg183_audio7e.mp3';
import audio8e from '../assets/audios/pg183_audio8e.mp3';

const Pagina183 = () => {
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
    'pg183_audio1e': audio1e,
    'pg183_audio2e': audio2e,
    'pg183_audio3e': audio3e,
    'pg183_audio4e': audio4e,
    'pg183_audio5e': audio5e,
    'pg183_audio6e': audio6e,
    'pg183_audio7e': audio7e,
    'pg183_audio8e': audio8e,
  };

  const rows = [
    {
      subject: 'I',
      translation: 'Eu não seria um bom líder para esta equipe?',
      verb: 'be',
      complement: 'a good leader for this team?',
    },
    {
      subject: 'he',
      translation: 'Ele não gostaria de ir ao show com a gente?',
      verb: 'enjoy going',
      complement: 'to the concert with us?',
    },
    {
      subject: 'she',
      translation: 'Ela não gostaria de saber a verdade?',
      verb: 'want to know',
      complement: 'the truth?',
    },
    {
      subject: 'it',
      translation: 'Não levaria tempo demais de ônibus?',
      verb: 'take to travel',
      complement: 'too long by bus?',
    },
    {
      subject: 'we',
      translation: 'Nós não nos divertiríamos mais na praia?',
      verb: 'have',
      complement: 'more fun at the beach?',
    },
    {
      subject: 'you',
      translation: 'Você não preferiria ficar em casa esta noite?',
      verb: 'prefer to stay',
      complement: 'home tonight?',
    },
    {
      subject: 'y’all',
      translation: 'Vocês não prefeririam ficar em casa esta noite?',
      verb: 'prefer to stay',
      complement: 'home tonight?',
    },
    {
      subject: 'they',
      translation: 'Eles/Elas não perceberiam a diferença?',
      verb: 'notice',
      complement: 'the difference?',
    },
  ];

  return (
    <div className={styles.page183__container}>
      <header className={styles.page183__header}>
        <h1 className={styles.page183__title}>Grammar - Would</h1>
      </header>

      <main className={styles.page183__main}>
        <aside className={styles.page183__aside}>
          <div className={styles.page183__aside_container}>
            <div className={styles.page183__aside_header}>
              <p><strong>Would - Futuro do Pretérito</strong></p>
            </div>
            <div className={styles.page183__aside_content}>
              <p className={styles.page183__text}>
                O <span className={styles.page183__highlight}>Would</span> é um <span className={styles.page183__highlight}>verbo modal/auxiliar</span> que não tem uma tradução exata, mas que coloca o verbo principal no futuro do pretérito com a terminação de <span className={styles.page183__highlight}>ria</span> em português.
              </p>
            </div>
          </div>
        </aside>

        <section className={styles.page183__tableSection}>
          <div className={styles.page183__tableTitle}>
            Negative Interrogative Form - Contraction
          </div>
          <table className={styles.page183__table}>
            <thead>
              <tr>
                <th>
                  <div className={styles.page183__translation}>Contraction</div>
                  Aux. Verb
                </th>
                <th>Subject</th>
                <th>Adv / <div className={styles.page183__translation}>Not</div></th>
                <th>Example Sentence</th>
                <th>Tradução</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((item, index) => (
                <tr key={index}>
                  <td><div className={styles.page183__translation}>Wouldn't</div></td>
                  <td>{item.subject}</td>
                  <td></td>
                  <td>
                    Wouldn't {item.subject} {item.verb} {item.complement}
                    <img
                      src={eng_audio_icon}
                      alt=""
                      className={styles.page183__audioIcon}
                      onClick={() => playAudio(`pg183_audio${index + 1}e`)}
                    />
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

export default Pagina183;
