import React, { useState, useRef } from 'react';
import styles from './pagina173.module.css';

import clock10_04 from '../assets/images/pagina173_imagem1.webp';
import clock10_05 from '../assets/images/pagina173_imagem2.webp';
import clock10_06 from '../assets/images/pagina173_imagem3.webp';
import image4 from '../assets/images/pagina173_imagem4.webp';
import image5 from '../assets/images/pagina173_imagem5.webp';

// Ícones
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

// Áudios
import audio1e from '../assets/audios/pg173_audio1e.mp3';
import audio2e from '../assets/audios/pg173_audio2e.mp3';
import audio2p from '../assets/audios/pg173_audio2p.mp3';
import audio3e from '../assets/audios/pg173_audio3e.mp3';
import audio3p from '../assets/audios/pg173_audio3p.mp3';
import audio4e from '../assets/audios/pg173_audio4e.mp3';
import audio4p from '../assets/audios/pg173_audio4p.mp3';
import audio5e from '../assets/audios/pg173_audio5e.mp3';
import audio5p from '../assets/audios/pg173_audio5p.mp3';

const Pagina173 = () => {
  const [selectedClock, setSelectedClock] = useState('10:04');
  const currentAudio = useRef(null);

  const handleShowClock = (time) => {
    setSelectedClock(time);
  };

  const audioMap = {
    'pg173_audio1e': audio1e,
    'pg173_audio2e': audio2e,
    'pg173_audio2p': audio2p,
    'pg173_audio3e': audio3e,
    'pg173_audio3p': audio3p,
    'pg173_audio4e': audio4e,
    'pg173_audio4p': audio4p,
    'pg173_audio5e': audio5e,
    'pg173_audio5p': audio5p,
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
      case '10:04': return clock10_04;
      case '10:05': return clock10_05;
      case '10:06': return clock10_06;
      default: return clock10_04;
    }
  };

  return (
    <div className={styles["page173__container"]}>

      <div className={styles["page173__content-row"]}>
        {/* Texto à esquerda */}
        <div className={styles["page173__left-content"]}>
          <div className={styles["page173__header"]}>
            <div className={styles["page173__system-title"]}>Sistema Digital</div>
            <h1 className={styles["page173__main-title"]}>
              How to Ask and Tell the Time
              <img
                src={eng_audio_icon}
                alt="Audio English"
                className={styles["page173__audio-icon"]}
                onClick={() => playAudio("pg173_audio1e")}
              />
            </h1>
            <p className={styles["page173__subtitle"]}>Como Perguntar e Dizer as Horas</p>
          </div>

          <div className={styles["page173__examples"]}>

            {/* Exemplo 10:04 */}
            <div className={styles["page173__example-block"]}>
              <p>
                A: What time is it?
                <img
                  src={eng_audio_icon}
                  alt="Audio English"
                  className={styles["page173__audio-icon"]}
                  onClick={() => playAudio("pg173_audio2e")}
                />
                <img
                  src={ptbr_audio_icon}
                  alt="Audio Portuguese"
                  className={styles["page173__audio-icon"]}
                  onClick={() => playAudio("pg173_audio2p")}
                />
              </p>
              <p
                className={styles["page173__text-red"]}
                onClick={() => handleShowClock('10:04')}
              >
                B: It’s ten <span className={styles["page173__text-blue"]}>oh</span> four
                <img
                  src={eng_audio_icon}
                  alt="Audio English"
                  className={styles["page173__audio-icon"]}
                  onClick={(e) => {
                    e.stopPropagation();
                    playAudio("pg173_audio3e");
                  }}
                />
                <img
                  src={ptbr_audio_icon}
                  alt="Audio Portuguese"
                  className={styles["page173__audio-icon"]}
                  onClick={(e) => {
                    e.stopPropagation();
                    playAudio("pg173_audio3p");
                  }}
                />
              </p>
            </div>

            {/* Exemplo 10:05 */}
            <div className={styles["page173__example-block"]}>
              <p>
                A: What time is it?
                <img
                  src={eng_audio_icon}
                  alt="Audio English"
                  className={styles["page173__audio-icon"]}
                  onClick={() => playAudio("pg173_audio2e")}
                />
                <img
                  src={ptbr_audio_icon}
                  alt="Audio Portuguese"
                  className={styles["page173__audio-icon"]}
                  onClick={() => playAudio("pg173_audio2p")}
                />
              </p>
              <p
                className={styles["page173__text-red"]}
                onClick={() => handleShowClock('10:05')}
              >
                B: It’s ten <span className={styles["page173__text-blue"]}>oh</span> five
                <img
                  src={eng_audio_icon}
                  alt="Audio English"
                  className={styles["page173__audio-icon"]}
                  onClick={(e) => {
                    e.stopPropagation();
                    playAudio("pg173_audio4e");
                  }}
                />
                <img
                  src={ptbr_audio_icon}
                  alt="Audio Portuguese"
                  className={styles["page173__audio-icon"]}
                  onClick={(e) => {
                    e.stopPropagation();
                    playAudio("pg173_audio4p");
                  }}
                />
              </p>
            </div>

            {/* Exemplo 10:06 */}
            <div className={styles["page173__example-block"]}>
              <p>
                A: What time is it?
                <img
                  src={eng_audio_icon}
                  alt="Audio English"
                  className={styles["page173__audio-icon"]}
                  onClick={() => playAudio("pg173_audio2e")}
                />
                <img
                  src={ptbr_audio_icon}
                  alt="Audio Portuguese"
                  className={styles["page173__audio-icon"]}
                  onClick={() => playAudio("pg173_audio2p")}
                />
              </p>
              <p
                className={styles["page173__text-red"]}
                onClick={() => handleShowClock('10:06')}
              >
                B: It’s ten <span className={styles["page173__text-blue"]}>oh</span> six
                <img
                  src={eng_audio_icon}
                  alt="Audio English"
                  className={styles["page173__audio-icon"]}
                  onClick={(e) => {
                    e.stopPropagation();
                    playAudio("pg173_audio5e");
                  }}
                />
                <img
                  src={ptbr_audio_icon}
                  alt="Audio Portuguese"
                  className={styles["page173__audio-icon"]}
                  onClick={(e) => {
                    e.stopPropagation();
                    playAudio("pg173_audio5p");
                  }}
                />
              </p>
            </div>
          </div>
        </div>

        {/* Relógio à direita */}
        <div className={styles["page173__clock-container"]}>
          <img src={getClockImage()} alt="Clock" className={styles["page173__clock-image"]} />
        </div>
      </div>

      {/* Imagens adicionais */}
      <div className={styles["page173__image-pair"]}>
        <img src={image4} alt="Conversation 1" className={styles["page173__photo"]} />
        <img src={image5} alt="Conversation 2" className={styles["page173__photo"]} />
      </div>
    </div>
  );
};

export default Pagina173;
