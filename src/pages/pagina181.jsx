import React, { useRef } from 'react';
import styles from './pagina181.module.css';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';

import audio1e from '../assets/audios/pg181_audio1e.mp3';
import audio2e from '../assets/audios/pg181_audio2e.mp3';
import audio3e from '../assets/audios/pg181_audio3e.mp3';
import audio4e from '../assets/audios/pg181_audio4e.mp3';
import audio5e from '../assets/audios/pg181_audio5e.mp3';
import audio6e from '../assets/audios/pg181_audio6e.mp3';
import audio7e from '../assets/audios/pg181_audio7e.mp3';
import audio8e from '../assets/audios/pg181_audio8e.mp3';
import audio9e from '../assets/audios/pg181_audio9e.mp3';
import audio10e from '../assets/audios/pg181_audio10e.mp3';
import audio11e from '../assets/audios/pg181_audio11e.mp3';
import audio12e from '../assets/audios/pg181_audio12e.mp3';
import audio13e from '../assets/audios/pg181_audio13e.mp3';
import audio14e from '../assets/audios/pg181_audio14e.mp3';
import audio15e from '../assets/audios/pg181_audio15e.mp3';
import audio16e from '../assets/audios/pg181_audio16e.mp3';

const Pagina181 = () => {
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
    'pg181_audio1e': audio1e,
    'pg181_audio2e': audio2e,
    'pg181_audio3e': audio3e,
    'pg181_audio4e': audio4e,
    'pg181_audio5e': audio5e,
    'pg181_audio6e': audio6e,
    'pg181_audio7e': audio7e,
    'pg181_audio8e': audio8e,
    'pg181_audio9e': audio9e,
    'pg181_audio10e': audio10e,
    'pg181_audio11e': audio11e,
    'pg181_audio12e': audio12e,
    'pg181_audio13e': audio13e,
    'pg181_audio14e': audio14e,
    'pg181_audio15e': audio15e,
    'pg181_audio16e': audio16e,
  };

  const rows = [
    {
      pronoun: 'I',
      translation: 'Eu não gostaria de viajar de avião.',
      verb: 'like to travel',
      complement: 'by plane',
      contraction: "I wouldn’t",
    },
    {
      pronoun: 'He',
      translation: 'Ele não concordaria com a ideia.',
      verb: 'agree',
      complement: 'with the idea',
      contraction: "He wouldn’t",
    },
    {
      pronoun: 'She',
      translation: 'Ela não esqueceria do seu aniversário.',
      verb: 'forget',
      complement: 'your birthday',
      contraction: "She wouldn’t",
    },
    {
      pronoun: 'It',
      translation: 'Isso não funcionaria sem pilhas.',
      verb: 'work',
      complement: 'without batteries',
      contraction: "It wouldn’t",
    },
    {
      pronoun: 'We',
      translation: 'Nós não gostaríamos de viajar de carro.',
      verb: 'like to travel',
      complement: 'by car',
      contraction: "We wouldn’t",
    },
    {
      pronoun: 'You',
      translation: 'Você não gostaria daquele restaurante.',
      verb: 'like',
      complement: 'that restaurant',
      contraction: "You wouldn’t",
    },
    {
      pronoun: "Y'all",
      translation: 'Vocês não gostariam daquele restaurante.',
      verb: 'like',
      complement: 'that restaurant',
      contraction: "Y’all wouldn’t",
    },
    {
      pronoun: 'They',
      translation: 'Eles/Elas não acreditariam na sua história.',
      verb: 'believe',
      complement: 'your story',
      contraction: "They wouldn’t",
    },
  ];

  return (
    <div className={styles.page181__container}>
      <header className={styles.page181__header}>
        <h1 className={styles.page181__title}>Grammar - <span className={styles.page181__title_black}>Would</span></h1>
      </header>

      <main className={styles.page181__main}>
        <aside className={styles.page181__aside}>
          <div className={styles.page181__aside_container}>
            <div className={styles.page181__aside_header}>
              <p><strong>Would - Futuro do Pretérito</strong></p>
            </div>
            <div className={styles.page181__aside_content}>
              <p className={styles.page181__text}>
                O <span className={styles.page181__highlight}>Would</span> é um <span className={styles.page181__highlight}>verbo modal/auxiliar</span> que não tem uma tradução exata, mas que coloca o verbo principal no futuro do pretérito com a terminação de <span className={styles.page181__highlight}>ria</span> em português.
              </p>
            </div>
          </div>
        </aside>

        <section className={styles.page181__tableSection}>
          <div className={styles.page181__tableTitle}>
            Negative Form
          </div>
          <table className={styles.page181__table}>
            <thead>
              <tr>
                <th>
                  <div className={styles.page181__translation}>Full Form</div>
                  Subject
                </th>
                <th>Aux. Verb</th>
                <th><div className={styles.page181__translation}>Not</div></th>
                <th><div className={styles.page181__translation}>Contraction</div></th>
                <th>Example Sentences</th>
                <th>Tradução</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((item, index) => {
                const fullSentence = `${item.pronoun} would not ${item.verb} ${item.complement}`;
                const contractedSentence = `${item.contraction} ${item.verb} ${item.complement}`;
                return (
                  <tr key={item.pronoun}>
                    <td>{item.pronoun}</td>
                    <td><div className={styles.page181__translation}>would</div></td>
                    <td><div className={styles.page181__translation}>not</div></td>
                    <td className={styles.page181__translation}>{item.contraction}</td>
                    <td>
                      <div>
                        {fullSentence}
                        <img
                          src={eng_audio_icon}
                          alt=""
                          className={styles.page181__audioIcon}
                          onClick={() => playAudio(`pg181_audio${index * 2 + 1}e`)}
                        />
                      </div>
                      <div>
                        {contractedSentence}
                        <img
                          src={eng_audio_icon}
                          alt=""
                          className={styles.page181__audioIcon}
                          onClick={() => playAudio(`pg181_audio${index * 2 + 2}e`)}
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

export default Pagina181;
