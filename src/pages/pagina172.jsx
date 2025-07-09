import React, { useState, useRef } from 'react';
import styles from './pagina172.module.css';

import clock10_00 from '../assets/images/pagina172_imagem1.webp';
import clock10_01 from '../assets/images/pagina172_imagem2.webp';
import clock10_02 from '../assets/images/pagina172_imagem3.webp';
import clock10_03 from '../assets/images/pagina172_imagem4.webp';

// Ícones
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

// Áudios
import audio1e from '../assets/audios/pg172_audio1e.mp3';
import audio2e from '../assets/audios/pg172_audio2e.mp3';
import audio2p from '../assets/audios/pg172_audio2p.mp3';
import audio3e from '../assets/audios/pg172_audio3e.mp3';
import audio3p from '../assets/audios/pg172_audio3p.mp3';
import audio4e from '../assets/audios/pg172_audio4e.mp3';
import audio4p from '../assets/audios/pg172_audio4p.mp3';
import audio5e from '../assets/audios/pg172_audio5e.mp3';
import audio5p from '../assets/audios/pg172_audio5p.mp3';
import audio6e from '../assets/audios/pg172_audio6e.mp3';
import audio6p from '../assets/audios/pg172_audio6p.mp3';

const Pagina172 = () => {
  const [selectedClock, setSelectedClock] = useState('10:00');
  const currentAudio = useRef(null);

  const handleShowClock = (time) => {
    setSelectedClock(time);
  };

  const audioMap = {
    'pg172_audio1e': audio1e,
    'pg172_audio2e': audio2e,
    'pg172_audio2p': audio2p,
    'pg172_audio3e': audio3e,
    'pg172_audio3p': audio3p,
    'pg172_audio4e': audio4e,
    'pg172_audio4p': audio4p,
    'pg172_audio5e': audio5e,
    'pg172_audio5p': audio5p,
    'pg172_audio6e': audio6e,
    'pg172_audio6p': audio6p,
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
      case '10:00': return clock10_00;
      case '10:01': return clock10_01;
      case '10:02': return clock10_02;
      case '10:03': return clock10_03;
      default: return clock10_00;
    }
  };

  return (
    <div className={styles["page172__container"]}>

      {/* Lado esquerdo */}
      <div className={styles["page172__left-content"]}>
        <div className={styles["page172__header"]}>
          <div className={styles["page172__system-title"]}>Sistema Digital</div>
          <h1 className={styles["page172__main-title"]}>
            How to Ask and Tell the Time
            <img
              src={eng_audio_icon}
              alt="Audio English"
              className={styles["page172__audio-icon"]}
              onClick={() => playAudio("pg172_audio1e")}
            />
          </h1>
          <p className={styles["page172__subtitle"]}>Como Perguntar e Dizer as Horas</p>
        </div>

        {/* Bloco vermelho */}
        <div className={styles["page172__red-box"]}>
          Ao indicar ( ou ao dizer ) <span className={styles["page172__red-box-strong"]}>as horas em português, o sistema digital segue o mesmo modelo do sistema digital em inglês.</span>
        </div>

        {/* Exemplos */}
        <div className={styles["page172__examples"]}>

          {/* 10:00 */}
          <div className={styles["page172__example-block"]}>
            <p>
              A: What time is it?
              <img
                src={eng_audio_icon}
                alt="Audio English"
                className={styles["page172__audio-icon"]}
                onClick={() => playAudio("pg172_audio2e")}
              />
              <img
                src={ptbr_audio_icon}
                alt="Audio Portuguese"
                className={styles["page172__audio-icon"]}
                onClick={() => playAudio("pg172_audio2p")}
              />
            </p>
            <p
              className={styles["page172__text-red"]}
              onClick={() => handleShowClock('10:00')}
            >
              B: It’s ten o’clock
              <img
                src={eng_audio_icon}
                alt="Audio English"
                className={styles["page172__audio-icon"]}
                onClick={(e) => {
                  e.stopPropagation();
                  playAudio("pg172_audio3e");
                }}
              />
              <img
                src={ptbr_audio_icon}
                alt="Audio Portuguese"
                className={styles["page172__audio-icon"]}
                onClick={(e) => {
                  e.stopPropagation();
                  playAudio("pg172_audio3p");
                }}
              />
            </p>
          </div>

          {/* 10:01 */}
          <div className={styles["page172__example-block"]}>
            <p>
              A: What time is it?
              <img
                src={eng_audio_icon}
                alt="Audio English"
                className={styles["page172__audio-icon"]}
                onClick={() => playAudio("pg172_audio2e")}
              />
              <img
                src={ptbr_audio_icon}
                alt="Audio Portuguese"
                className={styles["page172__audio-icon"]}
                onClick={() => playAudio("pg172_audio2p")}
              />
            </p>
            <p
              className={styles["page172__text-red"]}
              onClick={() => handleShowClock('10:01')}
            >
              B: It’s ten <span className={styles["page172__text-blue"]}>oh</span> one
              <img
                src={eng_audio_icon}
                alt="Audio English"
                className={styles["page172__audio-icon"]}
                onClick={(e) => {
                  e.stopPropagation();
                  playAudio("pg172_audio4e");
                }}
              />
              <img
                src={ptbr_audio_icon}
                alt="Audio Portuguese"
                className={styles["page172__audio-icon"]}
                onClick={(e) => {
                  e.stopPropagation();
                  playAudio("pg172_audio4p");
                }}
              />
            </p>
          </div>

          {/* 10:02 */}
          <div className={styles["page172__example-block"]}>
            <p>
              A: What time is it?
              <img
                src={eng_audio_icon}
                alt="Audio English"
                className={styles["page172__audio-icon"]}
                onClick={() => playAudio("pg172_audio2e")}
              />
              <img
                src={ptbr_audio_icon}
                alt="Audio Portuguese"
                className={styles["page172__audio-icon"]}
                onClick={() => playAudio("pg172_audio2p")}
              />
            </p>
            <p
              className={styles["page172__text-red"]}
              onClick={() => handleShowClock('10:02')}
            >
              B: It’s ten <span className={styles["page172__text-blue"]}>oh</span> two
              <img
                src={eng_audio_icon}
                alt="Audio English"
                className={styles["page172__audio-icon"]}
                onClick={(e) => {
                  e.stopPropagation();
                  playAudio("pg172_audio5e");
                }}
              />
              <img
                src={ptbr_audio_icon}
                alt="Audio Portuguese"
                className={styles["page172__audio-icon"]}
                onClick={(e) => {
                  e.stopPropagation();
                  playAudio("pg172_audio5p");
                }}
              />
            </p>
          </div>

          {/* 10:03 */}
          <div className={styles["page172__example-block"]}>
            <p>
              A: What time is it?
              <img
                src={eng_audio_icon}
                alt="Audio English"
                className={styles["page172__audio-icon"]}
                onClick={() => playAudio("pg172_audio2e")}
              />
              <img
                src={ptbr_audio_icon}
                alt="Audio Portuguese"
                className={styles["page172__audio-icon"]}
                onClick={() => playAudio("pg172_audio2p")}
              />
            </p>
            <p
              className={styles["page172__text-red"]}
              onClick={() => handleShowClock('10:03')}
            >
              B: It’s ten <span className={styles["page172__text-blue"]}>oh</span> three
              <img
                src={eng_audio_icon}
                alt="Audio English"
                className={styles["page172__audio-icon"]}
                onClick={(e) => {
                  e.stopPropagation();
                  playAudio("pg172_audio6e");
                }}
              />
              <img
                src={ptbr_audio_icon}
                alt="Audio Portuguese"
                className={styles["page172__audio-icon"]}
                onClick={(e) => {
                  e.stopPropagation();
                  playAudio("pg172_audio6p");
                }}
              />
            </p>
          </div>
        </div>

        {/* Nota Azul */}
        <section className={styles["page172__note"]}>
          <div className={styles["page172__note-header"]}>Nota:</div>
          <div className={styles["page172__note-content"]}>
            <p>Ten <span>oh</span> one = Dez e um</p>
            <p>Na tradução, <span>oh</span> significa <span>e</span> (para horas)</p>
          </div>
        </section>
      </div>

      {/* Imagem do relógio */}
      <div className={styles["page172__clock-container"]}>
        <img src={getClockImage()} alt="Clock" className={styles["page172__clock-image"]} />
      </div>
    </div>
  );
};

export default Pagina172;
