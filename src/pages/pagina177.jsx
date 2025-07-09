import React, { useState, useRef } from 'react';
import styles from './pagina177.module.css';

import clock10_50 from '../assets/images/pagina177_imagem1.webp';
import clock10_55 from '../assets/images/pagina177_imagem2.webp';
import image3 from '../assets/images/pagina177_imagem3.webp';
import image4 from '../assets/images/pagina177_imagem4.webp';

// Ícones
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

// Áudios
import audio1e from '../assets/audios/pg177_audio1e.mp3';
import audio2e from '../assets/audios/pg177_audio2e.mp3';
import audio2p from '../assets/audios/pg177_audio2p.mp3';
import audio3e from '../assets/audios/pg177_audio3e.mp3';
import audio3p from '../assets/audios/pg177_audio3p.mp3';
import audio4e from '../assets/audios/pg177_audio4e.mp3';
import audio4p from '../assets/audios/pg177_audio4p.mp3';
import audio5e from '../assets/audios/pg177_audio5e.mp3';

const Pagina177 = () => {
  const [selectedClock, setSelectedClock] = useState('10:50');
  const currentAudio = useRef(null);

  const handleShowClock = (time) => {
    setSelectedClock(time);
  };

  const audioMap = {
    'pg177_audio1e': audio1e,
    'pg177_audio2e': audio2e,
    'pg177_audio2p': audio2p,
    'pg177_audio3e': audio3e,
    'pg177_audio3p': audio3p,
    'pg177_audio4e': audio4e,
    'pg177_audio4p': audio4p,
    'pg177_audio5e': audio5e,
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
      case '10:50': return clock10_50;
      case '10:55': return clock10_55;
      default: return clock10_50;
    }
  };

  return (
    <div className={styles["page177__container"]}>

      <div className={styles["page177__content-row"]}>
        {/* Texto à esquerda */}
        <div className={styles["page177__left-content"]}>
          <div className={styles["page177__header"]}>
            <div className={styles["page177__system-title"]}>Sistema Digital</div>
            <h1 className={styles["page177__main-title"]}>
              How to Ask and Tell the Time
              <img
                src={eng_audio_icon}
                alt="Audio English"
                className={styles["page177__audio-icon"]}
                onClick={() => playAudio("pg177_audio1e")}
              />
            </h1>
            <p className={styles["page177__subtitle"]}>Como Perguntar e Dizer as Horas</p>
          </div>

          <div className={styles["page177__examples"]}>

            {/* 10:50 */}
            <div className={styles["page177__example-block"]}>
              <p>
                A: What time is it?
                <img
                  src={eng_audio_icon}
                  alt="Audio English"
                  className={styles["page177__audio-icon"]}
                  onClick={() => playAudio("pg177_audio2e")}
                />
                <img
                  src={ptbr_audio_icon}
                  alt="Audio Portuguese"
                  className={styles["page177__audio-icon"]}
                  onClick={() => playAudio("pg177_audio2p")}
                />
              </p>
              <p
                className={styles["page177__text-red"]}
                onClick={() => handleShowClock('10:50')}
              >
                B: It’s ten fifty
                <img
                  src={eng_audio_icon}
                  alt="Audio English"
                  className={styles["page177__audio-icon"]}
                  onClick={(e) => {
                    e.stopPropagation();
                    playAudio("pg177_audio3e");
                  }}
                />
                <img
                  src={ptbr_audio_icon}
                  alt="Audio Portuguese"
                  className={styles["page177__audio-icon"]}
                  onClick={(e) => {
                    e.stopPropagation();
                    playAudio("pg177_audio3p");
                  }}
                />
              </p>
            </div>

            {/* 10:55 */}
            <div className={styles["page177__example-block"]}>
              <p>
                A: What time is it?
                <img
                  src={eng_audio_icon}
                  alt="Audio English"
                  className={styles["page177__audio-icon"]}
                  onClick={() => playAudio("pg177_audio2e")}
                />
                <img
                  src={ptbr_audio_icon}
                  alt="Audio Portuguese"
                  className={styles["page177__audio-icon"]}
                  onClick={() => playAudio("pg177_audio2p")}
                />
              </p>
              <p
                className={styles["page177__text-red"]}
                onClick={() => handleShowClock('10:55')}
              >
                B: It’s ten fifty-five
                <img
                  src={eng_audio_icon}
                  alt="Audio English"
                  className={styles["page177__audio-icon"]}
                  onClick={(e) => {
                    e.stopPropagation();
                    playAudio("pg177_audio4e");
                  }}
                />
                <img
                  src={ptbr_audio_icon}
                  alt="Audio Portuguese"
                  className={styles["page177__audio-icon"]}
                  onClick={(e) => {
                    e.stopPropagation();
                    playAudio("pg177_audio4p");
                  }}
                />
              </p>
            </div>
          </div>
        </div>

        {/* Relógio à direita */}
        <div className={styles["page177__clock-container"]}>
          <img src={getClockImage()} alt="Clock" className={styles["page177__clock-image"]} />
        </div>
      </div>

      {/* Imagens de pessoas */}
      <div className={styles["page177__image-pair"]}>
        <img src={image3} alt="Person 1" className={styles["page177__photo"]} />
        <img src={image4} alt="Person 2" className={styles["page177__photo"]} />
      </div>

      {/* Nota Azul */}
      <section className={styles["page177__note"]}>
        <div className={styles["page177__note-header"]}>Nota:</div>
        <div className={styles["page177__note-content"]}>
          <p>
            A partir de <span className={styles["page177__text-blue-italic"]}>10:56 até 10:59</span> é muito comum usar a expressão:
            <br />
            <span
              className={styles["page177__text-blue-italic"]}
              onClick={() => playAudio("pg177_audio5e")}
              style={{ cursor: "pointer" }}
            >
              It’s almost eleven o’clock.
            </span>
            = <span className={styles["page177__text-blue-italic"]}>São quase onze horas</span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Pagina177;
