import React, { useState, useRef } from 'react';
import styles from './pagina175.module.css';

import clock10_10 from '../assets/images/pagina175_imagem1.webp';
import clock10_15 from '../assets/images/pagina175_imagem2.webp';
import clock10_20 from '../assets/images/pagina175_imagem3.webp';
import clock10_25 from '../assets/images/pagina175_imagem4.webp';

// Ícones
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

// Áudios
import audio1e from '../assets/audios/pg175_audio1e.mp3';
import audio2e from '../assets/audios/pg175_audio2e.mp3';
import audio2p from '../assets/audios/pg175_audio2p.mp3';
import audio3e from '../assets/audios/pg175_audio3e.mp3';
import audio3p from '../assets/audios/pg175_audio3p.mp3';
import audio4e from '../assets/audios/pg175_audio4e.mp3';
import audio4p from '../assets/audios/pg175_audio4p.mp3';
import audio5e from '../assets/audios/pg175_audio5e.mp3';
import audio5p from '../assets/audios/pg175_audio5p.mp3';
import audio6e from '../assets/audios/pg175_audio6e.mp3';
import audio6p from '../assets/audios/pg175_audio6p.mp3';

const Pagina175 = () => {
  const [selectedClock, setSelectedClock] = useState('10:10');
  const currentAudio = useRef(null);

  const handleShowClock = (time) => {
    setSelectedClock(time);
  };

  const audioMap = {
    'pg175_audio1e': audio1e,
    'pg175_audio2e': audio2e,
    'pg175_audio2p': audio2p,
    'pg175_audio3e': audio3e,
    'pg175_audio3p': audio3p,
    'pg175_audio4e': audio4e,
    'pg175_audio4p': audio4p,
    'pg175_audio5e': audio5e,
    'pg175_audio5p': audio5p,
    'pg175_audio6e': audio6e,
    'pg175_audio6p': audio6p,
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
      case '10:10': return clock10_10;
      case '10:15': return clock10_15;
      case '10:20': return clock10_20;
      case '10:25': return clock10_25;
      default: return clock10_10;
    }
  };

  return (
    <div className={styles["page175__container"]}>

      <div className={styles["page175__content-row"]}>
        {/* Texto lado esquerdo */}
        <div className={styles["page175__left-content"]}>
          <div className={styles["page175__header"]}>
            <div className={styles["page175__system-title"]}>Sistema Digital</div>
            <h1 className={styles["page175__main-title"]}>
              How to Ask and Tell the Time
              <img
                src={eng_audio_icon}
                alt="Audio English"
                className={styles["page175__audio-icon"]}
                onClick={() => playAudio("pg175_audio1e")}
              />
            </h1>
            <p className={styles["page175__subtitle"]}>Como Perguntar e Dizer as Horas</p>
          </div>

          <div className={styles["page175__examples"]}>

            {/* 10:10 */}
            <div className={styles["page175__example-block"]}>
              <p>
                A: What time is it?
                <img
                  src={eng_audio_icon}
                  alt="Audio English"
                  className={styles["page175__audio-icon"]}
                  onClick={() => playAudio("pg175_audio2e")}
                />
                <img
                  src={ptbr_audio_icon}
                  alt="Audio Portuguese"
                  className={styles["page175__audio-icon"]}
                  onClick={() => playAudio("pg175_audio2p")}
                />
              </p>
              <p
                className={styles["page175__text-red"]}
                onClick={() => handleShowClock('10:10')}
              >
                B: It’s ten ten
                <img
                  src={eng_audio_icon}
                  alt="Audio English"
                  className={styles["page175__audio-icon"]}
                  onClick={(e) => {
                    e.stopPropagation();
                    playAudio("pg175_audio3e");
                  }}
                />
                <img
                  src={ptbr_audio_icon}
                  alt="Audio Portuguese"
                  className={styles["page175__audio-icon"]}
                  onClick={(e) => {
                    e.stopPropagation();
                    playAudio("pg175_audio3p");
                  }}
                />
              </p>
            </div>

            {/* 10:15 */}
            <div className={styles["page175__example-block"]}>
              <p>
                A: What time is it?
                <img
                  src={eng_audio_icon}
                  alt="Audio English"
                  className={styles["page175__audio-icon"]}
                  onClick={() => playAudio("pg175_audio2e")}
                />
                <img
                  src={ptbr_audio_icon}
                  alt="Audio Portuguese"
                  className={styles["page175__audio-icon"]}
                  onClick={() => playAudio("pg175_audio2p")}
                />
              </p>
              <p
                className={styles["page175__text-red"]}
                onClick={() => handleShowClock('10:15')}
              >
                B: It’s ten fifteen
                <img
                  src={eng_audio_icon}
                  alt="Audio English"
                  className={styles["page175__audio-icon"]}
                  onClick={(e) => {
                    e.stopPropagation();
                    playAudio("pg175_audio4e");
                  }}
                />
                <img
                  src={ptbr_audio_icon}
                  alt="Audio Portuguese"
                  className={styles["page175__audio-icon"]}
                  onClick={(e) => {
                    e.stopPropagation();
                    playAudio("pg175_audio4p");
                  }}
                />
              </p>
            </div>

            {/* 10:20 */}
            <div className={styles["page175__example-block"]}>
              <p>
                A: What time is it?
                <img
                  src={eng_audio_icon}
                  alt="Audio English"
                  className={styles["page175__audio-icon"]}
                  onClick={() => playAudio("pg175_audio2e")}
                />
                <img
                  src={ptbr_audio_icon}
                  alt="Audio Portuguese"
                  className={styles["page175__audio-icon"]}
                  onClick={() => playAudio("pg175_audio2p")}
                />
              </p>
              <p
                className={styles["page175__text-red"]}
                onClick={() => handleShowClock('10:20')}
              >
                B: It’s ten twenty
                <img
                  src={eng_audio_icon}
                  alt="Audio English"
                  className={styles["page175__audio-icon"]}
                  onClick={(e) => {
                    e.stopPropagation();
                    playAudio("pg175_audio5e");
                  }}
                />
                <img
                  src={ptbr_audio_icon}
                  alt="Audio Portuguese"
                  className={styles["page175__audio-icon"]}
                  onClick={(e) => {
                    e.stopPropagation();
                    playAudio("pg175_audio5p");
                  }}
                />
              </p>
            </div>

            {/* 10:25 */}
            <div className={styles["page175__example-block"]}>
              <p>
                A: What time is it?
                <img
                  src={eng_audio_icon}
                  alt="Audio English"
                  className={styles["page175__audio-icon"]}
                  onClick={() => playAudio("pg175_audio2e")}
                />
                <img
                  src={ptbr_audio_icon}
                  alt="Audio Portuguese"
                  className={styles["page175__audio-icon"]}
                  onClick={() => playAudio("pg175_audio2p")}
                />
              </p>
              <p
                className={styles["page175__text-red"]}
                onClick={() => handleShowClock('10:25')}
              >
                B: It’s ten twenty-five
                <img
                  src={eng_audio_icon}
                  alt="Audio English"
                  className={styles["page175__audio-icon"]}
                  onClick={(e) => {
                    e.stopPropagation();
                    playAudio("pg175_audio6e");
                  }}
                />
                <img
                  src={ptbr_audio_icon}
                  alt="Audio Portuguese"
                  className={styles["page175__audio-icon"]}
                  onClick={(e) => {
                    e.stopPropagation();
                    playAudio("pg175_audio6p");
                  }}
                />
              </p>
            </div>
          </div>

          {/* Nota Azul Final */}
          <section className={styles["page175__note"]}>
            <div className={styles["page175__note-header"]}>Nota:</div>
            <div className={styles["page175__note-content"]}>
              <p>
                A partir de 10:09 retira-se <span className={styles["page175__text-red"]}>oh</span> em inglês.<br />
                Em português permanece o <span className={styles["page175__text-red"]}>E</span>.<br />
                <span className={styles["page175__text-red"]}>Ex: Ten ten = Dez e dez</span>
              </p>
            </div>
          </section>
        </div>

        {/* Relógio lado direito */}
        <div className={styles["page175__clock-container"]}>
          <img src={getClockImage()} alt="Clock" className={styles["page175__clock-image"]} />
        </div>
      </div>
    </div>
  );
};

export default Pagina175;
