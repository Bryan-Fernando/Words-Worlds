import React, { useRef } from 'react';
import styles from './pagina150.module.css';
import pagina150_imagem1 from '../assets/images/pagina150_imagem1.webp';

import pg150_audio1e from '../assets/audios/pg150_audio1e.mp3';
import pg150_audio2e from '../assets/audios/pg150_audio2e.mp3';
import pg150_audio3e from '../assets/audios/pg150_audio3e.mp3';
import pg150_audio4e from '../assets/audios/pg150_audio4e.mp3';
import pg150_audio5e from '../assets/audios/pg150_audio5e.mp3';

const Pagina150 = () => {
  const currentAudioRef = useRef(null);

  const playAudio = (audioFile) => {
    if (currentAudioRef.current) {
      currentAudioRef.current.pause();
      currentAudioRef.current.currentTime = 0;
    }
    const audio = new Audio(audioFile);
    currentAudioRef.current = audio;
    audio.play();
  };

  return (
    <div className={styles["page150__container"]}>
      <h1 className={styles["page150__title"]}>
        Grammar <br />
        <span className={styles["page150__title--highlight"]}>
          Simple Present ( Be and Common Main Verbs )
        </span>
      </h1>

      {/* Tabela 1 */}
      <section>
        <div className={styles["page150__table-header"]}>Negative Form</div>
        <table className={styles["page150__table"]}>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Aux <br /> Verb</th>
              <th className={styles["page150__not-label"]}>( Not )</th>
              <th>Verb (s)</th>
              <th>Object <br /> Complement</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {["I", <span className={styles["page150__text-red"]}>don’t</span>, "", "eat", "fruit for breakfast"].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg150_audio1e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </section>

      {/* Tabela 2 */}
      <section>
        <div className={styles["page150__table-header"]}>Negative Form</div>
        <table className={styles["page150__table"]}>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Aux <br /> Verb</th>
              <th className={styles["page150__not-label"]}>( Not )</th>
              <th>Verb (s)</th>
              <th>Object <br /> Complement</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {["I", "am", <span className={styles["page150__text-red"]}>not</span>, "", "at home."].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg150_audio2e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
            <tr>
              {["I", <span className={styles["page150__verb-cell"]}>don’t</span>, "", "arrive", "at work at 8:00 a.m."].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg150_audio3e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
            <tr>
              {["I", <span className={styles["page150__verb-cell"]}>don’t</span>, "", "begin", "my day with a coffee."].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg150_audio4e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
            <tr>
              {["I", <span className={styles["page150__verb-cell"]}>don’t</span>, "", "need to be", "at the office before 9:00 a.m."].map((cell, i) => (
                <td
                  key={i}
                  onClick={() => playAudio(pg150_audio5e)}
                  style={{ cursor: 'pointer' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </section>

      {/* Imagem */}
      <section className={styles["page150__image-container"]}>
        <img src={pagina150_imagem1} alt="Pessoa ao telefone" className={styles["page150__image"]} />
      </section>

      {/* Nota */}
      <section className={styles["page150__note"]}>
        <div className={styles["page150__note-header"]}>Nota:</div>
        <div className={styles["page150__note-content"]}>
          <p>
            <span className={styles["page150__note-red"]}>&ldquo;Don’t&rdquo;</span>
            <span> é a forma contraída de </span>
            <span className={styles["page150__note-red"]}>&ldquo;do not&rdquo;</span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Pagina150;
