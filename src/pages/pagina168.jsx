import React from 'react';
import styles from './pagina168.module.css';

// Ícone de áudio
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';

// Áudios (16)
import audio1e from '../assets/audios/pg168_audio1e.mp3';
import audio2e from '../assets/audios/pg168_audio2e.mp3';
import audio3e from '../assets/audios/pg168_audio3e.mp3';
import audio4e from '../assets/audios/pg168_audio4e.mp3';
import audio5e from '../assets/audios/pg168_audio5e.mp3';
import audio6e from '../assets/audios/pg168_audio6e.mp3';
import audio7e from '../assets/audios/pg168_audio7e.mp3';
import audio8e from '../assets/audios/pg168_audio8e.mp3';
import audio9e from '../assets/audios/pg168_audio9e.mp3';
import audio10e from '../assets/audios/pg168_audio10e.mp3';
import audio11e from '../assets/audios/pg168_audio11e.mp3';
import audio12e from '../assets/audios/pg168_audio12e.mp3';
import audio13e from '../assets/audios/pg168_audio13e.mp3';
import audio14e from '../assets/audios/pg168_audio14e.mp3';
import audio15e from '../assets/audios/pg168_audio15e.mp3';
import audio16e from '../assets/audios/pg168_audio16e.mp3';

const Pagina168 = () => {
  const currentAudio = React.useRef(null);

  const audioMap = {
    'pg168_audio1e': audio1e,
    'pg168_audio2e': audio2e,
    'pg168_audio3e': audio3e,
    'pg168_audio4e': audio4e,
    'pg168_audio5e': audio5e,
    'pg168_audio6e': audio6e,
    'pg168_audio7e': audio7e,
    'pg168_audio8e': audio8e,
    'pg168_audio9e': audio9e,
    'pg168_audio10e': audio10e,
    'pg168_audio11e': audio11e,
    'pg168_audio12e': audio12e,
    'pg168_audio13e': audio13e,
    'pg168_audio14e': audio14e,
    'pg168_audio15e': audio15e,
    'pg168_audio16e': audio16e,
  };

  const playAudio = (audioId) => {
    if (currentAudio.current) {
      currentAudio.current.pause();
      currentAudio.current.currentTime = 0;
    }
    const audio = new Audio(audioMap[audioId]);
    currentAudio.current = audio;
    audio.play();
  };

  return (
    <div className={styles["page168__container"]}>

      {/* Nota */}
      <section className={styles["page168__note"]}>
        <div className={styles["page168__note-header"]}>Nota:</div>
        <div className={styles["page168__note-content"]}>
          <p>
            <span className={styles["page168__text-red"]}>
              Em inglês, não usamos preposições como “de” ou “que” entre dois verbos, como ocorre em português.
            </span>
          </p>
          <p>
            Em português, é comum usar preposições como <span className={styles["page168__text-red"]}>"de"</span> e
            <span className={styles["page168__text-red"]}> "que"</span> entre dois verbos.
          </p>

          <p><strong>Exemplos:</strong></p>
          <ul className={styles["page168__examples-list"]}>
            <li>
              <span className={styles["page168__text-red"]}>
                I have to go to the bank.
              <img
                src={eng_audio_icon}
                alt="English audio"
                className={styles["page168__audio-icon"]}
                onClick={() => playAudio("pg168_audio1e")}
              />
              </span> (Eu tenho que ir ao banco.)
            </li>
            <li>
              <span className={styles["page168__text-red"]}>
                She needs to buy a new phone.
              <img
                src={eng_audio_icon}
                alt="English audio"
                className={styles["page168__audio-icon"]}
                onClick={() => playAudio("pg168_audio2e")}
              />
              </span> (Ela precisa comprar um celular novo.)
            </li>
            <li>
              <span className={styles["page168__text-red"]}>
                He has to go to the bank.
              <img
                src={eng_audio_icon}
                alt="English audio"
                className={styles["page168__audio-icon"]}
                onClick={() => playAudio("pg168_audio3e")}
              />
              </span> (Ele tem que ir ao banco.)
            </li>
            <li>
              <span className={styles["page168__text-red"]}>
                I need to study.
              <img
                src={eng_audio_icon}
                alt="English audio"
                className={styles["page168__audio-icon"]}
                onClick={() => playAudio("pg168_audio4e")}
              />
              </span> (Eu preciso estudar.)
            </li>
            <li>
              <span className={styles["page168__text-red"]}>
                She has to travel.<img
                src={eng_audio_icon}
                alt="English audio"
                className={styles["page168__audio-icon"]}
                onClick={() => playAudio("pg168_audio5e")}
              />
              </span> (Ela tem que viajar.)
            </li>
            <li>
              <span className={styles["page168__text-red"]}>
                We like to go out.<img
                src={eng_audio_icon}
                alt="English audio"
                className={styles["page168__audio-icon"]}
                onClick={() => playAudio("pg168_audio6e")}
              />
              </span> (Nós gostamos de sair.)
            </li>
          </ul>

          <p>
            Mas em inglês isso não acontece. No lugar dessas preposições, usamos <span className={styles["page168__text-red"]}>“to”</span> entre os verbos — e <span className={styles["page168__text-red"]}>“to”</span> não é uma preposição nesse caso, mas parte da forma do infinitivo em inglês: to go (ir), to go out (sair), to buy (comprar), to study (estudar), to travel (viajar).
          </p>
        </div>
      </section>

      {/* Resumo */}
      <section className={styles["page168__summary-table-container"]}>
        <div className={styles["page168__summary-title"]}>Resumo</div>
        <table className={styles["page168__summary-table"]}>
          <thead>
            <tr>
              <th>Verbo Base</th>
              <th>3ª Pessoa</th>
              <th>Nº de sílabas</th>
              <th>Tradução</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td onClick={() => playAudio("pg168_audio7e")}>Try</td>
              <td onClick={() => playAudio("pg168_audio12e")}>Tries</td>
              <td>1</td>
              <td>Tentar</td>
            </tr>
            <tr>
              <td onClick={() => playAudio("pg168_audio8e")}>Cry</td>
              <td onClick={() => playAudio("pg168_audio13e")}>Cries</td>
              <td>1</td>
              <td>Chorar</td>
            </tr>
            <tr>
              <td onClick={() => playAudio("pg168_audio9e")}>Dry</td>
              <td onClick={() => playAudio("pg168_audio14e")}>Dries</td>
              <td>1</td>
              <td>Secar</td>
            </tr>
            <tr>
              <td onClick={() => playAudio("pg168_audio10e")}>Study</td>
              <td onClick={() => playAudio("pg168_audio15e")}>Studies</td>
              <td>2</td>
              <td>Estudar</td>
            </tr>
            <tr>
              <td onClick={() => playAudio("pg168_audio11e")}>Carry</td>
              <td onClick={() => playAudio("pg168_audio16e")}>Carries</td>
              <td>2</td>
              <td>Carregar</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Pagina168;
