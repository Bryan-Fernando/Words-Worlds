import React, { useState, useRef } from 'react';
import styles from './pagina176.module.css';

import clock10_30 from '../assets/images/pagina176_imagem1.webp';
import clock10_35 from '../assets/images/pagina176_imagem2.webp';
import clock10_40 from '../assets/images/pagina176_imagem3.webp';
import clock10_45 from '../assets/images/pagina176_imagem4.webp';
import peopleImage from '../assets/images/pagina176_imagem5.webp';

// Ícones
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

// Áudios
import audio1e from '../assets/audios/pg176_audio1e.mp3';
import audio2e from '../assets/audios/pg176_audio2e.mp3';
import audio2p from '../assets/audios/pg176_audio2p.mp3';
import audio3e from '../assets/audios/pg176_audio3e.mp3';
import audio3p from '../assets/audios/pg176_audio3p.mp3';
import audio4e from '../assets/audios/pg176_audio4e.mp3';
import audio4p from '../assets/audios/pg176_audio4p.mp3';
import audio5e from '../assets/audios/pg176_audio5e.mp3';
import audio5p from '../assets/audios/pg176_audio5p.mp3';
import audio6e from '../assets/audios/pg176_audio6e.mp3';
import audio6p from '../assets/audios/pg176_audio6p.mp3';

const Pagina176 = () => {
  const [selectedClock, setSelectedClock] = useState('10:30');
  const currentAudio = useRef(null);

  const handleShowClock = (time) => {
    setSelectedClock(time);
  };

  const audioMap = {
    'pg176_audio1e': audio1e,
    'pg176_audio2e': audio2e,
    'pg176_audio2p': audio2p,
    'pg176_audio3e': audio3e,
    'pg176_audio3p': audio3p,
    'pg176_audio4e': audio4e,
    'pg176_audio4p': audio4p,
    'pg176_audio5e': audio5e,
    'pg176_audio5p': audio5p,
    'pg176_audio6e': audio6e,
    'pg176_audio6p': audio6p,
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
      case '10:30': return clock10_30;
      case '10:35': return clock10_35;
      case '10:40': return clock10_40;
      case '10:45': return clock10_45;
      default: return clock10_30;
    }
  };

  return (
    <div className={styles["page176__container"]}>

      <div className={styles["page176__content-row"]}>
        {/* Texto lado esquerdo */}
        <div className={styles["page176__left-content"]}>
          <div className={styles["page176__header"]}>
            <div className={styles["page176__system-title"]}>Sistema Digital</div>
            <h1 className={styles["page176__main-title"]}>
              How to Ask and Tell the Time
              <img
                src={eng_audio_icon}
                alt="Audio English"
                className={styles["page176__audio-icon"]}
                onClick={() => playAudio("pg176_audio1e")}
              />
            </h1>
            <p className={styles["page176__subtitle"]}>Como Perguntar e Dizer as Horas</p>
          </div>

          <div className={styles["page176__examples"]}>

            {/* 10:30 */}
            <div className={styles["page176__example-block"]}>
              <p>
                A: What time is it?
                <img
                  src={eng_audio_icon}
                  alt="Audio English"
                  className={styles["page176__audio-icon"]}
                  onClick={() => playAudio("pg176_audio2e")}
                />
                <img
                  src={ptbr_audio_icon}
                  alt="Audio Portuguese"
                  className={styles["page176__audio-icon"]}
                  onClick={() => playAudio("pg176_audio2p")}
                />
              </p>
              <p
                className={styles["page176__text-red"]}
                onClick={() => handleShowClock('10:30')}
              >
                B: It’s ten thirty
                <img
                  src={eng_audio_icon}
                  alt="Audio English"
                  className={styles["page176__audio-icon"]}
                  onClick={(e) => {
                    e.stopPropagation();
                    playAudio("pg176_audio3e");
                  }}
                />
                <img
                  src={ptbr_audio_icon}
                  alt="Audio Portuguese"
                  className={styles["page176__audio-icon"]}
                  onClick={(e) => {
                    e.stopPropagation();
                    playAudio("pg176_audio3p");
                  }}
                />
              </p>
            </div>

            {/* 10:35 */}
            <div className={styles["page176__example-block"]}>
              <p>
                A: What time is it?
                <img
                  src={eng_audio_icon}
                  alt="Audio English"
                  className={styles["page176__audio-icon"]}
                  onClick={() => playAudio("pg176_audio2e")}
                />
                <img
                  src={ptbr_audio_icon}
                  alt="Audio Portuguese"
                  className={styles["page176__audio-icon"]}
                  onClick={() => playAudio("pg176_audio2p")}
                />
              </p>
              <p
                className={styles["page176__text-red"]}
                onClick={() => handleShowClock('10:35')}
              >
                B: It’s ten thirty-five
                <img
                  src={eng_audio_icon}
                  alt="Audio English"
                  className={styles["page176__audio-icon"]}
                  onClick={(e) => {
                    e.stopPropagation();
                    playAudio("pg176_audio4e");
                  }}
                />
                <img
                  src={ptbr_audio_icon}
                  alt="Audio Portuguese"
                  className={styles["page176__audio-icon"]}
                  onClick={(e) => {
                    e.stopPropagation();
                    playAudio("pg176_audio4p");
                  }}
                />
              </p>
            </div>

            {/* 10:40 */}
            <div className={styles["page176__example-block"]}>
              <p>
                A: What time is it?
                <img
                  src={eng_audio_icon}
                  alt="Audio English"
                  className={styles["page176__audio-icon"]}
                  onClick={() => playAudio("pg176_audio2e")}
                />
                <img
                  src={ptbr_audio_icon}
                  alt="Audio Portuguese"
                  className={styles["page176__audio-icon"]}
                  onClick={() => playAudio("pg176_audio2p")}
                />
              </p>
              <p
                className={styles["page176__text-red"]}
                onClick={() => handleShowClock('10:40')}
              >
                B: It’s ten forty
                <img
                  src={eng_audio_icon}
                  alt="Audio English"
                  className={styles["page176__audio-icon"]}
                  onClick={(e) => {
                    e.stopPropagation();
                    playAudio("pg176_audio5e");
                  }}
                />
                <img
                  src={ptbr_audio_icon}
                  alt="Audio Portuguese"
                  className={styles["page176__audio-icon"]}
                  onClick={(e) => {
                    e.stopPropagation();
                    playAudio("pg176_audio5p");
                  }}
                />
              </p>
            </div>

            {/* 10:45 */}
            <div className={styles["page176__example-block"]}>
              <p>
                A: What time is it?
                <img
                  src={eng_audio_icon}
                  alt="Audio English"
                  className={styles["page176__audio-icon"]}
                  onClick={() => playAudio("pg176_audio2e")}
                />
                <img
                  src={ptbr_audio_icon}
                  alt="Audio Portuguese"
                  className={styles["page176__audio-icon"]}
                  onClick={() => playAudio("pg176_audio2p")}
                />
              </p>
              <p
                className={styles["page176__text-red"]}
                onClick={() => handleShowClock('10:45')}
              >
                B: It’s ten forty-five
                <img
                  src={eng_audio_icon}
                  alt="Audio English"
                  className={styles["page176__audio-icon"]}
                  onClick={(e) => {
                    e.stopPropagation();
                    playAudio("pg176_audio6e");
                  }}
                />
                <img
                  src={ptbr_audio_icon}
                  alt="Audio Portuguese"
                  className={styles["page176__audio-icon"]}
                  onClick={(e) => {
                    e.stopPropagation();
                    playAudio("pg176_audio6p");
                  }}
                />
              </p>
            </div>
          </div>
        </div>

        {/* Relógio lado direito */}
        <div className={styles["page176__clock-container"]}>
          <img src={getClockImage()} alt="Clock" className={styles["page176__clock-image"]} />
        </div>
      </div>

      {/* Imagem de pessoas */}
      <div className={styles["page176__container-image"]}>
        <img src={peopleImage} alt="People talking" className={styles["page176__people-image"]} />
      </div>
    </div>
  );
};

export default Pagina176;
