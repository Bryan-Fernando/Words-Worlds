import React, { useState, useRef } from 'react';
import styles from './pagina171.module.css';

import clock9 from '../assets/images/pagina171_imagem1.webp';
import clock10 from '../assets/images/pagina171_imagem2.webp';
import clock11 from '../assets/images/pagina171_imagem3.webp';
import clock12 from '../assets/images/pagina171_imagem4.webp';

// Ícones
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

// Áudios
import audio1e from '../assets/audios/pg171_audio1e.mp3';
import audio2e from '../assets/audios/pg171_audio2e.mp3';
import audio2p from '../assets/audios/pg171_audio2p.mp3';
import audio3e from '../assets/audios/pg171_audio3e.mp3';
import audio3p from '../assets/audios/pg171_audio3p.mp3';
import audio4e from '../assets/audios/pg171_audio4e.mp3';
import audio4p from '../assets/audios/pg171_audio4p.mp3';
import audio5e from '../assets/audios/pg171_audio5e.mp3';
import audio5p from '../assets/audios/pg171_audio5p.mp3';
import audio6e from '../assets/audios/pg171_audio6e.mp3';
import audio6p from '../assets/audios/pg171_audio6p.mp3';


const Pagina171 = () => {
  const [selectedClock, setSelectedClock] = useState(9);
  const currentAudio = useRef(null);

  const handleShowClock = (clockNumber) => {
    setSelectedClock(clockNumber);
  };

  const audioMap = {
    'pg171_audio1e': audio1e,
    'pg171_audio2e': audio2e,
    'pg171_audio2p': audio2p,
    'pg171_audio3e': audio3e,
    'pg171_audio3p': audio3p,
    'pg171_audio4e': audio4e,
    'pg171_audio4p': audio4p,
    'pg171_audio5e': audio5e,
    'pg171_audio5p': audio5p,
    'pg171_audio6e': audio6e,
    'pg171_audio6p': audio6p,

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

  const getClockImage = () => {
    switch (selectedClock) {
      case 9: return clock9;
      case 10: return clock10;
      case 11: return clock11;
      case 12: return clock12;
      default: return clock9;
    }
  };

  return (
    <div className={styles["page171__container"]}>

      {/* Texto à esquerda */}
      <div className={styles["page171__left-content"]}>
        <div className={styles["page171__header"]}>
          <div className={styles["page171__system-title"]}>Sistema Digital</div>
          <h1 className={styles["page171__main-title"]}>
            How to Ask and Tell the Time
            <img
              src={eng_audio_icon}
              alt="Audio English"
              className={styles["page171__audio-icon"]}
              onClick={() => playAudio("pg171_audio1e")}
            />
          </h1>
          <p className={styles["page171__subtitle"]}>Como Perguntar e Dizer as Horas</p>
        </div>

        <div className={styles["page171__examples"]}>

          {/* Exemplo 9 */}
          <div className={styles["page171__example-block"]}>
            <p>
              A: What time is it?
              <img
                src={eng_audio_icon}
                alt="Audio English"
                className={styles["page171__audio-icon"]}
                onClick={() => playAudio("pg171_audio2e")}
              />
              <img
                src={ptbr_audio_icon}
                alt="Audio Portuguese"
                className={styles["page171__audio-icon"]}
                onClick={() => playAudio("pg171_audio2p")}
              />
            </p>
            <p
              className={styles["page171__text-red"]}
              onClick={() => handleShowClock(9)}
            >
              B: It is nine o'clock
              <img
                src={eng_audio_icon}
                alt="Audio English"
                className={styles["page171__audio-icon"]}
                onClick={(e) => {
                  e.stopPropagation();
                  playAudio("pg171_audio3e");
                }}
              />
              <img
                src={ptbr_audio_icon}
                alt="Audio Portuguese"
                className={styles["page171__audio-icon"]}
                onClick={(e) => {
                  e.stopPropagation();
                  playAudio("pg171_audio3p");
                }}
              />
            </p>
          </div>

          {/* Exemplo 10 */}
          <div className={styles["page171__example-block"]}>
            <p>
              A: What time is it?
              <img
                src={eng_audio_icon}
                alt="Audio English"
                className={styles["page171__audio-icon"]}
                onClick={() => playAudio("pg171_audio2e")}
              />
              <img
                src={ptbr_audio_icon}
                alt="Audio Portuguese"
                className={styles["page171__audio-icon"]}
                onClick={() => playAudio("pg171_audio2p")}
              />
            </p>
            <p
              className={styles["page171__text-red"]}
              onClick={() => handleShowClock(10)}
            >
              B: It is ten o'clock
              <img
                src={eng_audio_icon}
                alt="Audio English"
                className={styles["page171__audio-icon"]}
                onClick={(e) => {
                  e.stopPropagation();
                  playAudio("pg171_audio4e");
                }}
              />
              <img
                src={ptbr_audio_icon}
                alt="Audio Portuguese"
                className={styles["page171__audio-icon"]}
                onClick={(e) => {
                  e.stopPropagation();
                  playAudio("pg171_audio4p");
                }}
              />
            </p>
          </div>

          {/* Exemplo 11 */}
          <div className={styles["page171__example-block"]}>
            <p>
              A: What time is it?
              <img
                src={eng_audio_icon}
                alt="Audio English"
                className={styles["page171__audio-icon"]}
                onClick={() => playAudio("pg171_audio2e")}
              />
              <img
                src={ptbr_audio_icon}
                alt="Audio Portuguese"
                className={styles["page171__audio-icon"]}
                onClick={() => playAudio("pg171_audio2p")}
              />
            </p>
            <p
              className={styles["page171__text-red"]}
              onClick={() => handleShowClock(11)}
            >
              B: It is eleven o'clock
              <img
                src={eng_audio_icon}
                alt="Audio English"
                className={styles["page171__audio-icon"]}
                onClick={(e) => {
                  e.stopPropagation();
                  playAudio("pg171_audio5e");
                }}
              />
              <img
                src={ptbr_audio_icon}
                alt="Audio Portuguese"
                className={styles["page171__audio-icon"]}
                onClick={(e) => {
                  e.stopPropagation();
                  playAudio("pg171_audio5p");
                }}
              />
            </p>
          </div>

          {/* Exemplo 12 */}
          <div className={styles["page171__example-block"]}>
            <p>
              A: What time is it?
              <img
                src={eng_audio_icon}
                alt="Audio English"
                className={styles["page171__audio-icon"]}
                onClick={() => playAudio("pg171_audio2e")}
              />
              <img
                src={ptbr_audio_icon}
                alt="Audio Portuguese"
                className={styles["page171__audio-icon"]}
                onClick={() => playAudio("pg171_audio2p")}
              />
            </p>
            <p
              className={styles["page171__text-red"]}
              onClick={() => handleShowClock(12)}
            >
              B: It is twelve o'clock
              <img
                src={eng_audio_icon}
                alt="Audio English"
                className={styles["page171__audio-icon"]}
                onClick={(e) => {
                  e.stopPropagation();
                  playAudio("pg171_audio6e");
                }}
              />
              <img
                src={ptbr_audio_icon}
                alt="Audio Portuguese"
                className={styles["page171__audio-icon"]}
                onClick={(e) => {
                  e.stopPropagation();
                  playAudio("pg171_audio6p");
                }}
              />
            </p>
          </div>
        </div>

        {/* Nota com áudios */}
        <section className={styles["page171__note-audio"]}>
          <div className={styles["page171__note-audio-header"]}>Nota:</div>
          <div className={styles["page171__note-audio-content"]}>
            <p>
              Somente Áudio: (Que horas são?)
            </p>
            <p>
              Somente Áudio: (É uma hora)
            </p>
          </div>
        </section>
      </div>

      {/* Imagem à direita */}
      <div className={styles["page171__clock-container"]}>
        <img src={getClockImage()} alt="Clock" className={styles["page171__clock-image"]} />
      </div>
    </div>
  );
};

export default Pagina171;
