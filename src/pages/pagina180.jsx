import React, { useRef } from 'react';
import styles from './pagina180.module.css';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';

import audio1e from '../assets/audios/pg180_audio1e.mp3';
import audio2e from '../assets/audios/pg180_audio2e.mp3';
import audio3e from '../assets/audios/pg180_audio3e.mp3';
import audio4e from '../assets/audios/pg180_audio4e.mp3';
import audio5e from '../assets/audios/pg180_audio5e.mp3';
import audio6e from '../assets/audios/pg180_audio6e.mp3';
import audio7e from '../assets/audios/pg180_audio7e.mp3';
import audio8e from '../assets/audios/pg180_audio8e.mp3';
import audio9e from '../assets/audios/pg180_audio9e.mp3';
import audio10e from '../assets/audios/pg180_audio10e.mp3';
import audio11e from '../assets/audios/pg180_audio11e.mp3';
import audio12e from '../assets/audios/pg180_audio12e.mp3';
import audio13e from '../assets/audios/pg180_audio13e.mp3';
import audio14e from '../assets/audios/pg180_audio14e.mp3';
import audio15e from '../assets/audios/pg180_audio15e.mp3';
import audio16e from '../assets/audios/pg180_audio16e.mp3';

const Pagina180 = () => {
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
    'pg180_audio1e': audio1e,
    'pg180_audio2e': audio2e,
    'pg180_audio3e': audio3e,
    'pg180_audio4e': audio4e,
    'pg180_audio5e': audio5e,
    'pg180_audio6e': audio6e,
    'pg180_audio7e': audio7e,
    'pg180_audio8e': audio8e,
    'pg180_audio9e': audio9e,
    'pg180_audio10e': audio10e,
    'pg180_audio11e': audio11e,
    'pg180_audio12e': audio12e,
    'pg180_audio13e': audio13e,
    'pg180_audio14e': audio14e,
    'pg180_audio15e': audio15e,
    'pg180_audio16e': audio16e,
  };

  const rows = [
    {
      pronoun: 'I',
      translation: 'Eu gostaria de um sanduíche, por favor.',
      verb: 'like',
      complement: 'a sandwich, please',
      contraction: "I'd",
    },
    {
      pronoun: 'He',
      translation: 'Ele preferiria um café.',
      verb: 'prefer',
      complement: 'a coffee',
      contraction: "He'd",
    },
    {
      pronoun: 'She',
      translation: 'Ela gostaria de ir ao parque.',
      verb: 'like to go',
      complement: 'to the park',
      contraction: "She'd",
    },
    {
      pronoun: 'It',
      translation: 'Seria um ótimo presente.',
      verb: 'be',
      complement: 'a great gift',
      contraction: "It'd",
    },
    {
      pronoun: 'We',
      translation: 'Nós gostaríamos de viajar de trem.',
      verb: 'like to travel',
      complement: 'by train',
      contraction: "We'd",
    },
    {
      pronoun: 'You',
      translation: 'Você adoraria assistir esse filme.',
      verb: 'enjoy watching',
      complement: 'this movie',
      contraction: "You'd",
    },
    {
      pronoun: "Y'all",
      translation: 'Vocês adorariam assistir esse filme.',
      verb: 'enjoy watching',
      complement: 'this movie',
      contraction: "Y'all'd",
    },
    {
      pronoun: 'They',
      translation: 'Eles/Elas adorariam visitar o Brasil um dia.',
      verb: 'love to visit',
      complement: 'Brazil one day',
      contraction: "They'd",
    },
  ];

  return (
    <div className={styles.page180__container}>
      <header className={styles.page180__header}>
        <h1 className={styles.page180__title}>Grammar - Would</h1>
      </header>

      <main className={styles.page180__main}>
        <aside className={styles.page180__aside}>
          <div className={styles.page180__aside_container}>
            <div className={styles.page180__aside_header}>
              <p><strong>Would - Futuro do Pretérito</strong></p>
            </div>
            <div className={styles.page180__aside_content}>
              <p className={styles.page180__text}>
                O <span className={styles.page180__highlight}>Would</span> é um <span className={styles.page181__highlight}>verbo modal/auxiliar</span> que não tem uma tradução exata, mas que coloca o verbo principal no futuro do pretérito com a terminação de <span className={styles.page180__highlight}>ria</span> em português.
              </p>
            </div>
          </div>
        </aside>

        <section className={styles.page180__tableSection}>
          <div className={styles.page180__tableTitle}>
            Affirmative Form
          </div>
          <table className={styles.page180__table}>
            <thead>
              <tr>
                <th>
                  <div className={styles.page180__translation}>Full Form</div>
                  <div>Subject</div>
                </th>
                <th>Aux. Verb</th>
                <th><div className={styles.page180__translation}>Contraction</div></th>
                <th>Example Sentences</th>
                <th>Tradução</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((item, index) => {
                const fullSentence = `${item.pronoun} would ${item.verb} ${item.complement}`;
                const contractedSentence = `${item.contraction} ${item.verb} ${item.complement}`;
                return (
                  <tr key={item.pronoun}>
                    <td>{item.pronoun}</td>
                    <td><div className={styles.page180__translation}>would</div></td>
                    <td className={styles.page180__translation}>{item.contraction}</td>
                    <td>
                      <div>
                        {fullSentence}
                        <img
                          src={eng_audio_icon}
                          alt=""
                          className={styles.page180__audioIcon}
                          onClick={() => playAudio(`pg180_audio${index * 2 + 1}e`)}
                        />
                      </div>
                      <div>
                        {contractedSentence}
                        <img
                          src={eng_audio_icon}
                          alt=""
                          className={styles.page180__audioIcon}
                          onClick={() => playAudio(`pg180_audio${index * 2 + 2}e`)}
                        />
                      </div>
                    </td>
                    <td>{item.translation}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default Pagina180;
