import React, { useRef } from 'react';
import styles from './pagina81.module.css';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';

import pg81_audio1e from '../assets/audios/pg81_audio1e.mp3';
import pg81_audio2e from '../assets/audios/pg81_audio2e.mp3';
import pg81_audio3e from '../assets/audios/pg81_audio3e.mp3';
import pg81_audio4e from '../assets/audios/pg81_audio4e.mp3';
import pg81_audio5e from '../assets/audios/pg81_audio5e.mp3';
import pg81_audio6e from '../assets/audios/pg81_audio6e.mp3';

const Pagina81 = () => {
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
                className={styles['page81__audio-icon']}
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
    <div className={styles['page81']}>
      <h1 className={styles['page81__title']}>
        Grammar <br />
        <span className={styles['page81__title--highlight']}>
          Simple Present ( Be and Common Main Verbs )
        </span>
      </h1>

      {/* Tabela 1 */}
      <section>
        <div className={styles['page81__table-header']}>Affirmative Form</div>
        <table className={styles['page81__table']}>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Aux Verb</th>
              <th>Adv</th>
              <th>
                Verb <span className={styles['page81__bf-label']}>(BF)</span>
              </th>
              <th>Object Complement</th>
              <th>Translation</th>
            </tr>
          </thead>
          <tbody>
            {renderRow(
              ['Lucas', '', '', 'lives', 'in São Paulo', 'Lucas mora em São Paulo'],
              pg81_audio1e
            )}
          </tbody>
        </table>
      </section>

      {/* Tabela 2 */}
      <section>
        <div className={styles['page81__table-header']}>Affirmative Form</div>
        <table className={styles['page81__table']}>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Aux Verb</th>
              <th>Adv</th>
              <th>
                Verb <span className={styles['page81__bf-label']}>(BF)</span>
              </th>
              <th>Object Complement</th>
              <th>Translation</th>
            </tr>
          </thead>
          <tbody>
            {renderRow(
              ['Lucas', <span className={styles['page81__verb-cell']}>is</span>, '', '', 'a nice guy', 'Lucas é um cara legal'],
              pg81_audio2e
            )}
            {renderRow(
              ['Lucas', '', '', <span className={styles['page81__verb-cell']}>arrives</span>, 'at work at 8 a.m.', 'Lucas chega ao trabalho às 8h'],
              pg81_audio3e
            )}
            {renderRow(
              ['Pam', '', '', <span className={styles['page81__verb-cell']}>begins</span>, 'her day with a coffee', 'Pam começa o dia com um café'],
              pg81_audio4e
            )}
            {renderRow(
              ['Pam', '', '', <span className={styles['page81__verb-cell']}>calls</span>, 'her friends on weekends', 'Pam liga para seus amigos nos fins de semana'],
              pg81_audio5e
            )}
            {renderRow(
              ['Credisis', '', '', <span className={styles['page81__verb-cell']}>opens</span>, 'at 8:00 a.m.', 'A Credisis abre às 8h'],
              pg81_audio6e
            )}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Pagina81;
