import React, { useState, useRef } from 'react';
import styles from './pagina169.module.css';

import clock1 from '../assets/images/pagina169_imagem1.webp';
import clock2 from '../assets/images/pagina169_imagem2.webp';
import clock3 from '../assets/images/pagina169_imagem3.webp';
import clock4 from '../assets/images/pagina169_imagem4.webp';

// Ícones
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

// Áudios
import audio1e from '../assets/audios/pg169_audio1e.mp3';
import audio2e from '../assets/audios/pg169_audio2e.mp3';
import audio2p from '../assets/audios/pg169_audio2p.mp3';
import audio3e from '../assets/audios/pg169_audio3e.mp3';
import audio3p from '../assets/audios/pg169_audio3p.mp3';
import audio4e from '../assets/audios/pg169_audio4e.mp3';
import audio4p from '../assets/audios/pg169_audio4p.mp3';
import audio5e from '../assets/audios/pg169_audio5e.mp3';
import audio5p from '../assets/audios/pg169_audio5p.mp3';
import audio6e from '../assets/audios/pg169_audio6e.mp3';
import audio6p from '../assets/audios/pg169_audio6p.mp3';

const Pagina169 = () => {
  const [selectedClock, setSelectedClock] = useState(1);
  const currentAudio = useRef(null);

  const handleShowClock = (clockNumber) => {
    setSelectedClock(clockNumber);
  };

  const audioMap = {
    'pg169_audio1e': audio1e,
    'pg169_audio2e': audio2e,
    'pg169_audio2p': audio2p,
    'pg169_audio3e': audio3e,
    'pg169_audio3p': audio3p,
    'pg169_audio4e': audio4e,
    'pg169_audio4p': audio4p,
    'pg169_audio5e': audio5e,
    'pg169_audio5p': audio5p,
    'pg169_audio6e': audio6e,
    'pg169_audio6p': audio6p,
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
      case 1: return clock1;
      case 2: return clock2;
      case 3: return clock3;
      case 4: return clock4;
      default: return clock1;
    }
  };

  return (
    <div className={styles["page169__container"]}>

      {/* Texto lado esquerdo */}
      <div className={styles["page169__left-content"]}>
        <div className={styles["page169__header"]}>
          <div className={styles["page169__system-title"]}>Sistema Digital</div>
          <h1 className={styles["page169__main-title"]}>
            How to Ask and Tell the Time
            <img
              src={eng_audio_icon}
              alt="Audio English"
              className={styles["page169__audio-icon"]}
              onClick={() => playAudio("pg169_audio1e")}
            />
          </h1>
          <p className={styles["page169__subtitle"]}>Como Perguntar e Dizer as Horas</p>
        </div>

        <div className={styles["page169__examples"]}>
          {/* Exemplo 1 */}
          <div className={styles["page169__example-block"]}>
            <p>
              A: What time is it?
              <img
                src={eng_audio_icon}
                alt="Audio English"
                className={styles["page169__audio-icon"]}
                onClick={() => playAudio("pg169_audio2e")}
              />
              <img
                src={ptbr_audio_icon}
                alt="Audio Portuguese"
                className={styles["page169__audio-icon"]}
                onClick={() => playAudio("pg169_audio2p")}
              />
            </p>
            <p
              className={styles["page169__text-red"]}
              onClick={() => handleShowClock(1)}
            >
              B: It is one o'clock
              <img
                src={eng_audio_icon}
                alt="Audio English"
                className={styles["page169__audio-icon"]}
                onClick={(e) => {
                  e.stopPropagation();
                  playAudio("pg169_audio3e");
                }}
              />
              <img
                src={ptbr_audio_icon}
                alt="Audio Portuguese"
                className={styles["page169__audio-icon"]}
                onClick={(e) => {
                  e.stopPropagation();
                  playAudio("pg169_audio3p");
                }}
              />
            </p>
          </div>

          {/* Exemplo 2 */}
          <div className={styles["page169__example-block"]}>
            <p>
              A: What time is it?
              <img
                src={eng_audio_icon}
                alt="Audio English"
                className={styles["page169__audio-icon"]}
                onClick={() => playAudio("pg169_audio2e")}
              />
              <img
                src={ptbr_audio_icon}
                alt="Audio Portuguese"
                className={styles["page169__audio-icon"]}
                onClick={() => playAudio("pg169_audio2p")}
              />
            </p>
            <p
              className={styles["page169__text-red"]}
              onClick={() => handleShowClock(2)}
            >
              B: It is two o'clock
              <img
                src={eng_audio_icon}
                alt="Audio English"
                className={styles["page169__audio-icon"]}
                onClick={(e) => {
                  e.stopPropagation();
                  playAudio("pg169_audio4e");
                }}
              />
              <img
                src={ptbr_audio_icon}
                alt="Audio Portuguese"
                className={styles["page169__audio-icon"]}
                onClick={(e) => {
                  e.stopPropagation();
                  playAudio("pg169_audio4p");
                }}
              />
            </p>
          </div>

          {/* Exemplo 3 */}
          <div className={styles["page169__example-block"]}>
            <p>
              A: What time is it?
              <img
                src={eng_audio_icon}
                alt="Audio English"
                className={styles["page169__audio-icon"]}
                onClick={() => playAudio("pg169_audio2e")}
              />
              <img
                src={ptbr_audio_icon}
                alt="Audio Portuguese"
                className={styles["page169__audio-icon"]}
                onClick={() => playAudio("pg169_audio2p")}
              />
            </p>
            <p
              className={styles["page169__text-red"]}
              onClick={() => handleShowClock(3)}
            >
              B: It is three o'clock
              <img
                src={eng_audio_icon}
                alt="Audio English"
                className={styles["page169__audio-icon"]}
                onClick={(e) => {
                  e.stopPropagation();
                  playAudio("pg169_audio5e");
                }}
              />
              <img
                src={ptbr_audio_icon}
                alt="Audio Portuguese"
                className={styles["page169__audio-icon"]}
                onClick={(e) => {
                  e.stopPropagation();
                  playAudio("pg169_audio5p");
                }}
              />
            </p>
          </div>

          {/* Exemplo 4 */}
          <div className={styles["page169__example-block"]}>
            <p>
              A: What time is it?
              <img
                src={eng_audio_icon}
                alt="Audio English"
                className={styles["page169__audio-icon"]}
                onClick={() => playAudio("pg169_audio2e")}
              />
              <img
                src={ptbr_audio_icon}
                alt="Audio Portuguese"
                className={styles["page169__audio-icon"]}
                onClick={() => playAudio("pg169_audio2p")}
              />
            </p>
            <p
              className={styles["page169__text-red"]}
              onClick={() => handleShowClock(4)}
            >
              B: It is four o'clock
              <img
                src={eng_audio_icon}
                alt="Audio English"
                className={styles["page169__audio-icon"]}
                onClick={(e) => {
                  e.stopPropagation();
                  playAudio("pg169_audio6e");
                }}
              />
              <img
                src={ptbr_audio_icon}
                alt="Audio Portuguese"
                className={styles["page169__audio-icon"]}
                onClick={(e) => {
                  e.stopPropagation();
                  playAudio("pg169_audio6p");
                }}
              />
            </p>
          </div>
        </div>

        {/* Nota */}
        <div className={styles["page169__note"]}>
          <p><strong>When you just want to ask the time, use:</strong></p>
          <p>
            What time is it?
          </p>
        </div>
      </div>

      {/* Imagem lado direito */}
      <div className={styles["page169__clock-container"]}>
        <img src={getClockImage()} alt="Clock" className={styles["page169__clock-image"]} />
      </div>
    </div>
  );
};

export default Pagina169;
