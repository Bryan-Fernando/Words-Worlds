import React, { useRef } from 'react';
import styles from './pagina80.module.css';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';

import pg80_audio1e from '../assets/audios/pg80_audio1e.mp3';
import pg80_audio2e from '../assets/audios/pg80_audio2e.mp3';
import pg80_audio3e from '../assets/audios/pg80_audio3e.mp3';
import pg80_audio4e from '../assets/audios/pg80_audio4e.mp3';
import pg80_audio5e from '../assets/audios/pg80_audio5e.mp3';
import pg80_audio6e from '../assets/audios/pg80_audio6e.mp3';
import pg80_audio7e from '../assets/audios/pg80_audio7e.mp3';
import pg80_audio8e from '../assets/audios/pg80_audio8e.mp3';
import pg80_audio9e from '../assets/audios/pg80_audio9e.mp3';
import pg80_audio10e from '../assets/audios/pg80_audio10e.mp3';
import pg80_audio11e from '../assets/audios/pg80_audio11e.mp3';

import pagina80_imagem1 from '../assets/images/pagina80_imagem1.webp';
import pagina80_imagem2 from '../assets/images/pagina80_imagem2.webp';

const Pagina80 = () => {
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

  // helper: uma linha com ícone somente na coluna "Object Complement"
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
                className={styles['page80__audio-icon']}
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
    <div className={styles['page80']}>
      <h1 className={styles['page80__title']}>
        Grammar <br />
        <span className={styles['page80__title--highlight']}>
          Simple Present ( Be and Common Main Verbs )
        </span>
      </h1>

      {/* Tabela 1 */}
      <section>
        <div className={styles['page80__table-header']}>Affirmative Form</div>
        <table className={styles['page80__table']}>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Aux Verb</th>
              <th>Adv</th>
              <th>
                Verb <span className={styles['page80__bf-label']}>(BF)</span>
              </th>
              <th>Object Complement</th>
              <th>Translation</th>
            </tr>
          </thead>
          <tbody>
            {renderRow(
              ['I', '', '', 'live', 'in São Paulo', 'Eu moro em São Paulo'],
              pg80_audio1e
            )}
          </tbody>
        </table>
      </section>

      {/* Tabela 2 */}
      <section>
        <div className={styles['page80__table-header']}>Affirmative Form</div>
        <table className={styles['page80__table']}>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Aux Verb</th>
              <th>Adv</th>
              <th>
                Verb <span className={styles['page80__bf-label']}>(BF)</span>
              </th>
              <th>Object Complement</th>
              <th>Translation</th>
            </tr>
          </thead>
          <tbody>
            {renderRow(
              ['I', <span className={styles['page80__verb-cell']}>am</span>, '', '', 'happy', 'Eu estou feliz'],
              pg80_audio2e
            )}
            {renderRow(
              ['I', '', '', <span className={styles['page80__verb-cell']}>call</span>, 'my friends on weekends', 'Eu ligo para meus amigos nos fins de semana'],
              pg80_audio3e
            )}
            {renderRow(
              ['I', '', '', <span className={styles['page80__verb-cell']}>begin</span>, 'my day with a coffee', 'Eu começo meu dia com um café'],
              pg80_audio4e
            )}
            {renderRow(
              ['I', '', '', <span className={styles['page80__verb-cell']}>need to eat</span>, 'fruit for breakfast', 'Eu preciso comer fruta no café da manhã'],
              pg80_audio5e
            )}
            {renderRow(
              ['I', '', '', <span className={styles['page80__verb-cell']}>have to go to work</span>, 'at 7:00 a.m.', 'Eu tenho que ir para o trabalho às 7h'],
              pg80_audio6e
            )}
          </tbody>
        </table>
      </section>

      {/* Tabela 3 */}
      <section>
        <div className={styles['page80__table-header']}>Affirmative Form</div>
        <table className={styles['page80__table']}>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Aux Verb</th>
              <th>Adv</th>
              <th>
                Verb <span className={styles['page80__bf-label']}>(BF)</span>
              </th>
              <th>Object Complement</th>
              <th>Translation</th>
            </tr>
          </thead>
          <tbody>
            {renderRow(
              ['I', '', '', <span className={styles['page80__verb-cell']}>have</span>, 'a big family', 'Eu tenho uma família grande'],
              pg80_audio7e
            )}
            {renderRow(
              ['I', '', '', <span className={styles['page80__verb-cell']}>finish</span>, 'my work before 5 a.m.', 'Eu termino meu trabalho antes das 5 da manhã'],
              pg80_audio8e
            )}
            {renderRow(
              ['I', '', '', <span className={styles['page80__verb-cell']}>call</span>, 'my friends on weekends', 'Eu ligo para meus amigos nos fins de semana'],
              pg80_audio9e
            )}
            {renderRow(
              ['I', '', '', <span className={styles['page80__verb-cell']}>eat</span>, 'fruit for breakfast', 'Eu como fruta no café da manhã'],
              pg80_audio10e
            )}
            {renderRow(
              ['I', '', '', <span className={styles['page80__verb-cell']}>like to go</span>, 'to the gym in the morning', 'Eu gosto de ir à academia de manhã'],
              pg80_audio11e
            )}
          </tbody>
        </table>
      </section>

      {/* Imagens */}
      <section className={styles['page80__images']}>
        <img
          src={pagina80_imagem1}
          alt="Pessoa tomando café com notebook"
          className={styles['page80__image']}
        />
        <img
          src={pagina80_imagem2}
          alt="Pessoa na academia"
          className={styles['page80__image']}
        />
      </section>
    </div>
  );
};

export default Pagina80;
