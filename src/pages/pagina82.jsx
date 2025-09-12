import React, { useRef } from 'react';
import styles from './pagina82.module.css';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';

import pagina82_imagem1 from '../assets/images/pagina82_imagem1.webp';
import pagina82_imagem2 from '../assets/images/pagina82_imagem2.webp';

import pg82_audio1e from '../assets/audios/pg82_audio1e.mp3';
import pg82_audio2e from '../assets/audios/pg82_audio2e.mp3';
import pg82_audio3e from '../assets/audios/pg82_audio3e.mp3';
import pg82_audio4e from '../assets/audios/pg82_audio4e.mp3';
import pg82_audio5e from '../assets/audios/pg82_audio5e.mp3';

const Pagina82 = () => {
  const currentAudioRef = useRef(null);

  const playAudio = (audioFile) => {
    if (currentAudioRef.current) {
      currentAudioRef.current.pause();
      currentAudioRef.current.currentTime = 0;
    }
    const audio = new Audio(audioFile);
    currentAudioRef.current = audio;
    audio.play().catch(() => {});
  };

  // helper: renderiza uma linha com ícone apenas na coluna "Object Complement"
  const renderRow = (cells, audio) => (
    <tr>
      {cells.map((cell, i) => {
        // 0=Subject, 1=Aux, 2=Adv, 3=Verb(BF), 4=Object Complement, 5=Translation
        if (i === 4) {
          return (
            <td key={i}>
              {cell}
              <img
                src={eng_audio_icon}
                alt="Play Audio"
                className={styles['page82__audio-icon']}
                onClick={() => playAudio(audio)}
              />
            </td>
          );
        }
        return <td key={i}>{cell}</td>;
      })}
    </tr>
  );

  return (
    <div className={styles['page82']}>
      <h1 className={styles['page82__title']}>
        Grammar <br />
        <span className={styles['page82__title--highlight']}>
          Simple Present ( Be and Common Main Verbs )
        </span>
      </h1>

      {/* Tabela */}
      <section>
        <div className={styles['page82__table-header']}>Affirmative Form</div>
        <table className={styles['page82__table']}>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Aux Verb</th>
              <th>Adv</th>
              <th>
                Verb <span className={styles['page82__bf-label']}>(BF)</span>
              </th>
              <th>Object Complement</th>
              <th>Translation</th>
            </tr>
          </thead>
          <tbody>
            {renderRow(
              ['He', <span className={styles['page82__verb-cell']}>is</span>, '', '', 'a nice guy', 'Ele é um cara legal'],
              pg82_audio1e
            )}
            {renderRow(
              ['He', '', '', <span className={styles['page82__verb-cell']}>begins</span>, 'his day with a coffee', 'Ele começa o dia com um café'],
              pg82_audio2e
            )}
            {renderRow(
              ['She', '', '', <span className={styles['page82__verb-cell']}>calls</span>, 'her friends on weekends', 'Ela liga para seus amigos nos fins de semana'],
              pg82_audio3e
            )}
            {renderRow(
              ['She', '', '', <span className={styles['page82__verb-cell']}>has to go</span>, 'to Campinas on Friday', 'Ela tem que ir para Campinas na sexta-feira'],
              pg82_audio4e
            )}
            {renderRow(
              ['It', '', '', <span className={styles['page82__verb-cell']}>needs to open</span>, 'at 8:00 a.m.', 'Ela precisa abrir às 8h'],
              pg82_audio5e
            )}
          </tbody>
        </table>
      </section>

      {/* Imagens */}
      <section className={styles['page82__images']}>
        <img
          src={pagina82_imagem1}
          alt="Agência Credisis"
          className={styles['page82__image']}
        />
        <img
          src={pagina82_imagem2}
          alt="Homem com turbante"
          className={styles['page82__image']}
        />
      </section>
    </div>
  );
};

export default Pagina82;
