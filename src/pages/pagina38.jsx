import React, { useRef } from 'react';
import styles from './pagina38.module.css';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';

import pagina38_imagem1 from '../assets/images/pagina38_imagem1.webp';

import pg38_audio1e from '../assets/audios/pg38_audio1e.mp3';
import pg38_audio2e from '../assets/audios/pg38_audio2e.mp3';
import pg38_audio3e from '../assets/audios/pg38_audio3e.mp3';
import pg38_audio4e from '../assets/audios/pg38_audio4e.mp3';
import pg38_audio5e from '../assets/audios/pg38_audio5e.mp3';
import pg38_audio6e from '../assets/audios/pg38_audio6e.mp3';
import pg38_audio7e from '../assets/audios/pg38_audio7e.mp3';
import pg38_audio8e from '../assets/audios/pg38_audio8e.mp3';
import pg38_audio9e from '../assets/audios/pg38_audio9e.mp3';
import pg38_audio10e from '../assets/audios/pg38_audio10e.mp3';
import pg38_audio11e from '../assets/audios/pg38_audio11e.mp3';
import pg38_audio12e from '../assets/audios/pg38_audio12e.mp3';
import pg38_audio13e from '../assets/audios/pg38_audio13e.mp3';

const Pagina38 = () => {
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

  // helper: linha com ícone apenas na coluna "Object Complement"
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
                className={styles['page38__audio-icon']}
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
    <div className={styles["page38"]}>
      <h1 className={styles["page38__title"]}>
        Grammar <br />
        <span className={styles["page38__title--highlight"]}>
          Simple Present ( Be and Common Main Verbs )
        </span>
      </h1>

      {/* Tabela 1 */}
      <section>
        <div className={styles["page38__table-header"]}>Affirmative Form</div>
        <table className={styles["page38__table"]}>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Aux Verb</th>
              <th>Adv</th>
              <th>Verb <span className={styles["page38__bf-label"]}>(BF)</span></th>
              <th>Object Complement</th>
              <th>Translation</th>
            </tr>
          </thead>
          <tbody>
            {renderRow(
              ['Lucas and I', '', '', 'live', 'in São Paulo', 'Lucas e eu moramos em São Paulo'],
              pg38_audio1e
            )}
          </tbody>
        </table>
      </section>

      {/* Tabela 2 */}
      <section>
        <div className={styles["page38__table-header"]}>Affirmative Form</div>
        <table className={styles["page38__table"]}>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Aux Verb</th>
              <th>Adv</th>
              <th>Verb <span className={styles["page38__bf-label"]}>(BF)</span></th>
              <th>Object Complement</th>
              <th>Translation</th>
            </tr>
          </thead>
          <tbody>
            {renderRow(
              ['Marcia and I', <span className={styles["page38__verb-cell"]}>are</span>, '', '', 'happy', 'Márcia e eu estamos felizes'],
              pg38_audio2e
            )}
            {renderRow(
              ['Lucas, Pam and I', '', '', <span className={styles["page38__verb-cell"]}>live</span>, 'in Brazil', 'Lucas, Pam e eu moramos no Brasil'],
              pg38_audio3e
            )}
            {renderRow(
              ['You', '', '', <span className={styles["page38__verb-cell"]}>make</span>, 'delicious pancakes', 'Você faz panquecas deliciosas'],
              pg38_audio4e
            )}
            {renderRow(
              ['You, Luca and Bia', '', '', <span className={styles["page38__verb-cell"]}>need</span>, 'a new phone', 'Você, Luca e Bia precisam de um telefone novo'],
              pg38_audio5e
            )}
            {renderRow(
              ['Isa, Talita and Eric', '', '', <span className={styles["page38__verb-cell"]}>travel</span>, 'by bus', 'Isa, Talita e Eric viajam de ônibus'],
              pg38_audio6e
            )}
            {renderRow(
              ['Banks', '', '', <span className={styles["page38__verb-cell"]}>open</span>, 'at 8:00 a.m.', 'Os bancos abrem às 8h'],
              pg38_audio7e
            )}
          </tbody>
        </table>
      </section>

      {/* Tabela 3 */}
      <section>
        <div className={styles["page38__table-header"]}>Affirmative Form</div>
        <table className={styles["page38__table"]}>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Aux Verb</th>
              <th>Adv</th>
              <th>Verb <span className={styles["page38__bf-label"]}>(BF)</span></th>
              <th>Object Complement</th>
              <th>Translation</th>
            </tr>
          </thead>
          <tbody>
            {renderRow(
              ['We', <span className={styles["page38__verb-cell"]}>are</span>, '', '', 'happy', 'Nós estamos felizes'],
              pg38_audio8e
            )}
            {renderRow(
              ['We', '', '', <span className={styles["page38__verb-cell"]}>live</span>, 'in Brazil', 'Nós moramos no Brasil'],
              pg38_audio9e
            )}
            {renderRow(
              ['You', '', '', <span className={styles["page38__verb-cell"]}>make</span>, 'delicious pancakes', 'Você faz panquecas deliciosas'],
              pg38_audio10e
            )}
            {renderRow(
              ['Y’all', '', '', <span className={styles["page38__verb-cell"]}>need</span>, 'a new phone', 'Vocês precisam de um telefone novo'],
              pg38_audio11e
            )}
            {renderRow(
              ['They', '', '', <span className={styles["page38__verb-cell"]}>travel</span>, 'by plane', 'Eles viajam de avião'],
              pg38_audio12e
            )}
            {renderRow(
              ['They', '', '', <span className={styles["page38__verb-cell"]}>open</span>, 'at 8:00 a.m.', 'Eles abrem às 8h'],
              pg38_audio13e
            )}
          </tbody>
        </table>
      </section>

      {/* Imagem */}
      <section className={styles["page38__image-container"]}>
        <img src={pagina38_imagem1} alt="Grupo de amigos" className={styles["page38__image"]} />
      </section>
    </div>
  );
};

export default Pagina38;
