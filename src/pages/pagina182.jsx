import React, { useRef } from 'react';
import styles from './pagina182.module.css';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';

import audio1e from '../assets/audios/pg182_audio1e.mp3';
import audio2e from '../assets/audios/pg182_audio2e.mp3';
import audio3e from '../assets/audios/pg182_audio3e.mp3';
import audio4e from '../assets/audios/pg182_audio4e.mp3';
import audio5e from '../assets/audios/pg182_audio5e.mp3';
import audio6e from '../assets/audios/pg182_audio6e.mp3';
import audio7e from '../assets/audios/pg182_audio7e.mp3';
import audio8e from '../assets/audios/pg182_audio8e.mp3';

const Pagina182 = () => {
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
    'pg182_audio1e': audio1e,
    'pg182_audio2e': audio2e,
    'pg182_audio3e': audio3e,
    'pg182_audio4e': audio4e,
    'pg182_audio5e': audio5e,
    'pg182_audio6e': audio6e,
    'pg182_audio7e': audio7e,
    'pg182_audio8e': audio8e,
  };

  const rows = [
    {
      subject: 'I',
      translation: 'Eu seria uma boa professora um dia?',
      verb: 'be',
      complement: 'a good teacher one day?',
    },
    {
      subject: 'he',
      translation: 'Ele nos ajudaria com a tarefa de casa?',
      verb: 'help',
      complement: 'us with the homework?',
    },
    {
      subject: 'she',
      translation: 'Ela me perdoaria?',
      verb: 'forgive',
      complement: 'me?',
    },
    {
      subject: 'it',
      translation: 'Seria suficiente?',
      verb: 'be',
      complement: 'enough?',
    },
    {
      subject: 'we',
      translation: 'Nós precisaríamos de mais tempo para terminar o projeto?',
      verb: 'need to finish',
      complement: 'more time this project?',
    },
    {
      subject: 'you',
      translation: 'Você estaria de acordo com isso?',
      verb: 'be',
      complement: 'okay with that?',
    },
    {
      subject: 'y’all',
      translation: 'Vocês gostariam de um café?',
      verb: 'like',
      complement: 'some coffee?',
    },
    {
      subject: 'they',
      translation: 'Eles/Elas aceitariam a oferta?',
      verb: 'accept',
      complement: 'the offer?',
    },
  ];

  return (
    <div className={styles.page182__container}>
      <header className={styles.page182__header}>
        <h1 className={styles.page182__title}>Grammar - <span className={styles.page182__title_black}>Would</span></h1>
      </header>

      <main className={styles.page182__main}>
        <aside className={styles.page182__aside}>
          <div className={styles.page182__aside_container}>
            <div className={styles.page182__aside_header}>
              <p><strong>Would - Futuro do Pretérito</strong></p>
            </div>
            <div className={styles.page182__aside_content}>
              <p className={styles.page182__text}>
                O <span className={styles.page182__highlight}>Would</span> é um <span className={styles.page182__highlight}>verbo modal/auxiliar</span> que não tem uma tradução exata, mas que coloca o verbo principal no futuro do pretérito com a terminação de <span className={styles.page182__highlight}>ria</span> em português.
              </p>
            </div>
          </div>
        </aside>

        <section className={styles.page182__tableSection}>
          <div className={styles.page182__tableTitle}>
            Interrogative Form
          </div>
          <table className={styles.page182__table}>
            <thead>
              <tr>
                <th><div className={styles.page182__translation}>Full Form</div>Aux. Verb</th>
                <th>Subject</th>
                <th>Adv / <div className={styles.page182__translation}>Not</div></th>
                <th>Example Sentence</th>
                <th>Tradução</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((item, index) => (
                <tr key={index}>
                  <td><div className={styles.page182__translation}>would</div></td>
                  <td>{item.subject}</td>
                  <td></td>
                  <td>
                    Would {item.subject} {item.verb} {item.complement}
                    <img
                      src={eng_audio_icon}
                      alt=""
                      className={styles.page182__audioIcon}
                      onClick={() => playAudio(`pg182_audio${index + 1}e`)}
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

export default Pagina182;
