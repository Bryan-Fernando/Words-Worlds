import React, { useState, useRef } from 'react';
import styles from './pagina170.module.css';

import clock5 from '../assets/images/pagina170_imagem1.webp';
import clock6 from '../assets/images/pagina170_imagem2.webp';
import clock7 from '../assets/images/pagina170_imagem3.webp';
import clock8 from '../assets/images/pagina170_imagem4.webp';

// Ícones
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

// Áudios
import audio1e from '../assets/audios/pg170_audio1e.mp3';
import audio2e from '../assets/audios/pg170_audio2e.mp3';
import audio2p from '../assets/audios/pg170_audio2p.mp3';
import audio3e from '../assets/audios/pg170_audio3e.mp3';
import audio3p from '../assets/audios/pg170_audio3p.mp3';
import audio4e from '../assets/audios/pg170_audio4e.mp3';
import audio4p from '../assets/audios/pg170_audio4p.mp3';
import audio5e from '../assets/audios/pg170_audio5e.mp3';
import audio5p from '../assets/audios/pg170_audio5p.mp3';
import audio6e from '../assets/audios/pg170_audio6e.mp3';
import audio6p from '../assets/audios/pg170_audio6p.mp3';

const Pagina170 = () => {
  const [selectedClock, setSelectedClock] = useState(5);
  const currentAudio = useRef(null);

  const handleShowClock = (clockNumber) => {
    setSelectedClock(clockNumber);
  };

  const audioMap = {
    'pg170_audio1e': audio1e,
    'pg170_audio2e': audio2e,
    'pg170_audio2p': audio2p,
    'pg170_audio3e': audio3e,
    'pg170_audio3p': audio3p,
    'pg170_audio4e': audio4e,
    'pg170_audio4p': audio4p,
    'pg170_audio5e': audio5e,
    'pg170_audio5p': audio5p,
    'pg170_audio6e': audio6e,
    'pg170_audio6p': audio6p,
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
      case 5: return clock5;
      case 6: return clock6;
      case 7: return clock7;
      case 8: return clock8;
      default: return clock5;
    }
  };

  return (
    <div className={styles["page170__container"]}>

      {/* Texto lado esquerdo */}
      <div className={styles["page170__left-content"]}>
        <div className={styles["page170__header"]}>
          <div className={styles["page170__system-title"]}>Sistema Digital</div>
          <h1 className={styles["page170__main-title"]}>
            How to Ask and Tell the Time
            <img
              src={eng_audio_icon}
              alt="Audio English"
              className={styles["page170__audio-icon"]}
              onClick={() => playAudio("pg170_audio1e")}
            />
          </h1>
          <p className={styles["page170__subtitle"]}>Como Perguntar e Dizer as Horas</p>
        </div>

        <div className={styles["page170__examples"]}>
          {/* Exemplo 5 */}
          <div className={styles["page170__example-block"]}>
            <p>
              A: What time is it?
              <img
                src={eng_audio_icon}
                alt="Audio English"
                className={styles["page170__audio-icon"]}
                onClick={() => playAudio("pg170_audio2e")}
              />
              <img
                src={ptbr_audio_icon}
                alt="Audio Portuguese"
                className={styles["page170__audio-icon"]}
                onClick={() => playAudio("pg170_audio2p")}
              />
            </p>
            <p
              className={styles["page170__text-red"]}
              onClick={() => handleShowClock(5)}
            >
              B: It is five o'clock
              <img
                src={eng_audio_icon}
                alt="Audio English"
                className={styles["page170__audio-icon"]}
                onClick={(e) => {
                  e.stopPropagation();
                  playAudio("pg170_audio3e");
                }}
              />
              <img
                src={ptbr_audio_icon}
                alt="Audio Portuguese"
                className={styles["page170__audio-icon"]}
                onClick={(e) => {
                  e.stopPropagation();
                  playAudio("pg170_audio3p");
                }}
              />
            </p>
          </div>

          {/* Exemplo 6 */}
          <div className={styles["page170__example-block"]}>
            <p>
              A: What time is it?
              <img
                src={eng_audio_icon}
                alt="Audio English"
                className={styles["page170__audio-icon"]}
                onClick={() => playAudio("pg170_audio2e")}
              />
              <img
                src={ptbr_audio_icon}
                alt="Audio Portuguese"
                className={styles["page170__audio-icon"]}
                onClick={() => playAudio("pg170_audio2p")}
              />
            </p>
            <p
              className={styles["page170__text-red"]}
              onClick={() => handleShowClock(6)}
            >
              B: It is six o'clock
              <img
                src={eng_audio_icon}
                alt="Audio English"
                className={styles["page170__audio-icon"]}
                onClick={(e) => {
                  e.stopPropagation();
                  playAudio("pg170_audio4e");
                }}
              />
              <img
                src={ptbr_audio_icon}
                alt="Audio Portuguese"
                className={styles["page170__audio-icon"]}
                onClick={(e) => {
                  e.stopPropagation();
                  playAudio("pg170_audio4p");
                }}
              />
            </p>
          </div>

          {/* Exemplo 7 */}
          <div className={styles["page170__example-block"]}>
            <p>
              A: What time is it?
              <img
                src={eng_audio_icon}
                alt="Audio English"
                className={styles["page170__audio-icon"]}
                onClick={() => playAudio("pg170_audio2e")}
              />
              <img
                src={ptbr_audio_icon}
                alt="Audio Portuguese"
                className={styles["page170__audio-icon"]}
                onClick={() => playAudio("pg170_audio2p")}
              />
            </p>
            <p
              className={styles["page170__text-red"]}
              onClick={() => handleShowClock(7)}
            >
              B: It is seven o'clock
              <img
                src={eng_audio_icon}
                alt="Audio English"
                className={styles["page170__audio-icon"]}
                onClick={(e) => {
                  e.stopPropagation();
                  playAudio("pg170_audio5e");
                }}
              />
              <img
                src={ptbr_audio_icon}
                alt="Audio Portuguese"
                className={styles["page170__audio-icon"]}
                onClick={(e) => {
                  e.stopPropagation();
                  playAudio("pg170_audio5p");
                }}
              />
            </p>
          </div>

          {/* Exemplo 8 */}
          <div className={styles["page170__example-block"]}>
            <p>
              A: What time is it?
              <img
                src={eng_audio_icon}
                alt="Audio English"
                className={styles["page170__audio-icon"]}
                onClick={() => playAudio("pg170_audio2e")}
              />
              <img
                src={ptbr_audio_icon}
                alt="Audio Portuguese"
                className={styles["page170__audio-icon"]}
                onClick={() => playAudio("pg170_audio2p")}
              />
            </p>
            <p
              className={styles["page170__text-red"]}
              onClick={() => handleShowClock(8)}
            >
              B: It is eight o'clock
              <img
                src={eng_audio_icon}
                alt="Audio English"
                className={styles["page170__audio-icon"]}
                onClick={(e) => {
                  e.stopPropagation();
                  playAudio("pg170_audio6e");
                }}
              />
              <img
                src={ptbr_audio_icon}
                alt="Audio Portuguese"
                className={styles["page170__audio-icon"]}
                onClick={(e) => {
                  e.stopPropagation();
                  playAudio("pg170_audio6p");
                }}
              />
            </p>
          </div>
        </div>
      </div>

      {/* Imagem lado direito */}
      <div className={styles["page170__clock-container"]}>
        <img src={getClockImage()} alt="Clock" className={styles["page170__clock-image"]} />
      </div>
    </div>
  );
};

export default Pagina170;