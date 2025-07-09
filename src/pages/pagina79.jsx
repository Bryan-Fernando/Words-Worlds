import React, { useRef } from 'react';
import styles from './pagina79.module.css';

// Ícone de áudio
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';

// Imports dos áudios
import pg79_audio1e from '../assets/audios/pg79_audio1e.mp3';
import pg79_audio2e from '../assets/audios/pg79_audio2e.mp3';
import pg79_audio3e from '../assets/audios/pg79_audio3e.mp3';
import pg79_audio4e from '../assets/audios/pg79_audio4e.mp3';
import pg79_audio5e from '../assets/audios/pg79_audio5e.mp3';
import pg79_audio6e from '../assets/audios/pg79_audio6e.mp3';
import pg79_audio7e from '../assets/audios/pg79_audio7e.mp3';
import pg79_audio8e from '../assets/audios/pg79_audio8e.mp3';
import pg79_audio9e from '../assets/audios/pg79_audio9e.mp3';

// Mapa de áudios com nomes iguais aos imports
const audioMap = {
  pg79_audio1e,
  pg79_audio2e,
  pg79_audio3e,
  pg79_audio4e,
  pg79_audio5e,
  pg79_audio6e,
  pg79_audio7e,
  pg79_audio8e,
  pg79_audio9e,
};

const Pagina79 = () => {
  const currentAudioRef = useRef(null);

  const playAudio = (key) => {
    if (currentAudioRef.current) {
      currentAudioRef.current.pause();
      currentAudioRef.current.currentTime = 0;
    }
    const src = audioMap[key];
    if (src) {
      const audio = new Audio(src);
      currentAudioRef.current = audio;
      audio.play();
    }
  };

  return (
    <div className={styles["page79__container"]}>

      {/* Bloco Nota */}
      <section className={styles["page79__note"]}>
        <div className={styles["page79__note-header"]}>
          Nota:
        </div>
        <div className={styles["page79__note-content"]}>
          <ul>
            <li>
              A tradução de frases afirmativas, negativas e interrogativas geralmente começa com o sujeito em português.
            </li>
          </ul>
          <p>
            <strong className={styles["page79__text-red"]}>Exceção</strong><br />
            <span className={styles["page79__text-red"]}>
              It rains a lot in July.
              <img
                src={eng_audio_icon}
                alt=""
                onClick={() => playAudio('pg79_audio1e')}
                className={styles["page79__audio-icon"]}
              />
              <span className={styles["page79__text-blue"]}> (Chove muito em julho.) </span><br />
              Em casos como esse, o pronome “it” é impessoal e
              <span className={styles["page79__highlight-red-bg"]}> não pode </span>
              ser traduzido. Traduzimos apenas o verbo na terceira pessoa do singular, respeitando o sentido da frase.
            </span>
          </p>
        </div>
      </section>

      {/* Frases Afirmativas */}
      <section className={styles["page79__block"]}>
        <h3 className={styles["page79__block-title"]}>Frases Afirmativas</h3>
        <table className={styles["page79__table"]}>
          <tbody>
            <tr>
              <td>
                They are at home.
                <img
                  src={eng_audio_icon}
                  alt=""
                  onClick={() => playAudio('pg79_audio2e')}
                  className={styles["page79__audio-icon"]}
                />
              </td>
              <td>Eles estão em casa</td>
            </tr>
            <tr>
              <td>
                <span className={styles["page79__text-red"]}>
                  It rains a lot in July.
                  <img
                    src={eng_audio_icon}
                    alt=""
                    onClick={() => playAudio('pg79_audio1e')}
                    className={styles["page79__audio-icon"]}
                  />
                </span>
              </td>
              <td>Chove muito em julho</td>
            </tr>
            <tr>
              <td>
                We live in Curitiba.
                <img
                  src={eng_audio_icon}
                  alt=""
                  onClick={() => playAudio('pg79_audio3e')}
                  className={styles["page79__audio-icon"]}
                />
              </td>
              <td>Nós moramos em Curitiba</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Frases Negativas */}
      <section className={styles["page79__block"]}>
        <h3 className={styles["page79__block-title"]}>Frases Negativas</h3>
        <table className={styles["page79__table"]}>
          <tbody>
            <tr>
              <td>
                They aren’t at home.
                <img
                  src={eng_audio_icon}
                  alt=""
                  onClick={() => playAudio('pg79_audio4e')}
                  className={styles["page79__audio-icon"]}
                />
              </td>
              <td>Eles não estão em casa</td>
            </tr>
            <tr>
              <td>
                <span className={styles["page79__text-red"]}>
                  It doesn’t rain a lot in March.
                  <img
                    src={eng_audio_icon}
                    alt=""
                    onClick={() => playAudio('pg79_audio5e')}
                    className={styles["page79__audio-icon"]}
                  />
                </span>
              </td>
              <td>Não chove muito em março</td>
            </tr>
            <tr>
              <td>
                We don’t live in Curitiba.
                <img
                  src={eng_audio_icon}
                  alt=""
                  onClick={() => playAudio('pg79_audio6e')}
                  className={styles["page79__audio-icon"]}
                />
              </td>
              <td>Nós não moramos em Curitiba</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Frases Interrogativas */}
      <section className={styles["page79__block"]}>
        <h3 className={styles["page79__block-title"]}>Frases Interrogativas</h3>
        <table className={styles["page79__table"]}>
          <tbody>
            <tr>
              <td>
                Are they at home?
                <img
                  src={eng_audio_icon}
                  alt=""
                  onClick={() => playAudio('pg79_audio7e')}
                  className={styles["page79__audio-icon"]}
                />
              </td>
              <td>Eles estão em casa?</td>
            </tr>
            <tr>
              <td>
                <span className={styles["page79__text-red"]}>
                  Does it rain a lot in October?
                  <img
                    src={eng_audio_icon}
                    alt=""
                    onClick={() => playAudio('pg79_audio8e')}
                    className={styles["page79__audio-icon"]}
                  />
                </span>
              </td>
              <td>Chove muito em outubro?</td>
            </tr>
            <tr>
              <td>
                Do they live in Curitiba?
                <img
                  src={eng_audio_icon}
                  alt=""
                  onClick={() => playAudio('pg79_audio9e')}
                  className={styles["page79__audio-icon"]}
                />
              </td>
              <td>Eles moram em Curitiba?</td>
            </tr>
          </tbody>
        </table>
      </section>

    </div>
  );
};

export default Pagina79;
