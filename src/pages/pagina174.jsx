import React, { useState, useRef } from 'react';
import styles from './pagina174.module.css';

import clock10_07 from '../assets/images/pagina174_imagem1.webp';
import clock10_08 from '../assets/images/pagina174_imagem2.webp';
import clock10_09 from '../assets/images/pagina174_imagem3.webp';
import conversationImage from '../assets/images/pagina174_imagem4.webp';

// Ícones
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

// Áudios
import audio1e from '../assets/audios/pg174_audio1e.mp3';
import audio2e from '../assets/audios/pg174_audio2e.mp3';
import audio2p from '../assets/audios/pg174_audio2p.mp3';
import audio3e from '../assets/audios/pg174_audio3e.mp3';
import audio3p from '../assets/audios/pg174_audio3p.mp3';
import audio4e from '../assets/audios/pg174_audio4e.mp3';
import audio4p from '../assets/audios/pg174_audio4p.mp3';
import audio5e from '../assets/audios/pg174_audio5e.mp3';
import audio5p from '../assets/audios/pg174_audio5p.mp3';

const Pagina174 = () => {
  const [selectedClock, setSelectedClock] = useState('10:07');
  const currentAudio = useRef(null);

  const handleShowClock = (time) => {
    setSelectedClock(time);
  };

  const audioMap = {
    'pg174_audio1e': audio1e,
    'pg174_audio2e': audio2e,
    'pg174_audio2p': audio2p,
    'pg174_audio3e': audio3e,
    'pg174_audio3p': audio3p,
    'pg174_audio4e': audio4e,
    'pg174_audio4p': audio4p,
    'pg174_audio5e': audio5e,
    'pg174_audio5p': audio5p,
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
      case '10:07': return clock10_07;
      case '10:08': return clock10_08;
      case '10:09': return clock10_09;
      default: return clock10_07;
    }
  };

  return (
    <div className={styles["page174__container"]}>

      <div className={styles["page174__content-row"]}>
        {/* Texto à esquerda */}
        <div className={styles["page174__left-content"]}>
          <div className={styles["page174__header"]}>
            <div className={styles["page174__system-title"]}>Sistema Digital</div>
            <h1 className={styles["page174__main-title"]}>
              How to Ask and Tell the Time
              <img
                src={eng_audio_icon}
                alt="Audio English"
                className={styles["page174__audio-icon"]}
                onClick={() => playAudio("pg174_audio1e")}
              />
            </h1>
            <p className={styles["page174__subtitle"]}>Como Perguntar e Dizer as Horas</p>
          </div>

          <div className={styles["page174__examples"]}>

            {/* Exemplo 10:07 */}
            <div className={styles["page174__example-block"]}>
              <p>
                A: What time is it?
                <img
                  src={eng_audio_icon}
                  alt="Audio English"
                  className={styles["page174__audio-icon"]}
                  onClick={() => playAudio("pg174_audio2e")}
                />
                <img
                  src={ptbr_audio_icon}
                  alt="Audio Portuguese"
                  className={styles["page174__audio-icon"]}
                  onClick={() => playAudio("pg174_audio2p")}
                />
              </p>
              <p
                className={styles["page174__text-red"]}
                onClick={() => handleShowClock('10:07')}
              >
                B: It’s ten <span className={styles["page174__text-blue"]}>oh</span> seven
                <img
                  src={eng_audio_icon}
                  alt="Audio English"
                  className={styles["page174__audio-icon"]}
                  onClick={(e) => {
                    e.stopPropagation();
                    playAudio("pg174_audio3e");
                  }}
                />
                <img
                  src={ptbr_audio_icon}
                  alt="Audio Portuguese"
                  className={styles["page174__audio-icon"]}
                  onClick={(e) => {
                    e.stopPropagation();
                    playAudio("pg174_audio3p");
                  }}
                />
              </p>
            </div>

            {/* Exemplo 10:08 */}
            <div className={styles["page174__example-block"]}>
              <p>
                A: What time is it?
                <img
                  src={eng_audio_icon}
                  alt="Audio English"
                  className={styles["page174__audio-icon"]}
                  onClick={() => playAudio("pg174_audio2e")}
                />
                <img
                  src={ptbr_audio_icon}
                  alt="Audio Portuguese"
                  className={styles["page174__audio-icon"]}
                  onClick={() => playAudio("pg174_audio2p")}
                />
              </p>
              <p
                className={styles["page174__text-red"]}
                onClick={() => handleShowClock('10:08')}
              >
                B: It’s ten <span className={styles["page174__text-blue"]}>oh</span> eight
                <img
                  src={eng_audio_icon}
                  alt="Audio English"
                  className={styles["page174__audio-icon"]}
                  onClick={(e) => {
                    e.stopPropagation();
                    playAudio("pg174_audio4e");
                  }}
                />
                <img
                  src={ptbr_audio_icon}
                  alt="Audio Portuguese"
                  className={styles["page174__audio-icon"]}
                  onClick={(e) => {
                    e.stopPropagation();
                    playAudio("pg174_audio4p");
                  }}
                />
              </p>
            </div>

            {/* Exemplo 10:09 */}
            <div className={styles["page174__example-block"]}>
              <p>
                A: What time is it?
                <img
                  src={eng_audio_icon}
                  alt="Audio English"
                  className={styles["page174__audio-icon"]}
                  onClick={() => playAudio("pg174_audio2e")}
                />
                <img
                  src={ptbr_audio_icon}
                  alt="Audio Portuguese"
                  className={styles["page174__audio-icon"]}
                  onClick={() => playAudio("pg174_audio2p")}
                />
              </p>
              <p
                className={styles["page174__text-red"]}
                onClick={() => handleShowClock('10:09')}
              >
                B: It’s ten <span className={styles["page174__text-blue"]}>oh</span> nine
                <img
                  src={eng_audio_icon}
                  alt="Audio English"
                  className={styles["page174__audio-icon"]}
                  onClick={(e) => {
                    e.stopPropagation();
                    playAudio("pg174_audio5e");
                  }}
                />
                <img
                  src={ptbr_audio_icon}
                  alt="Audio Portuguese"
                  className={styles["page174__audio-icon"]}
                  onClick={(e) => {
                    e.stopPropagation();
                    playAudio("pg174_audio5p");
                  }}
                />
              </p>
            </div>
          </div>
        </div>

        {/* Relógio à direita */}
        <div className={styles["page174__clock-container"]}>
          <img src={getClockImage()} alt="Clock" className={styles["page174__clock-image"]} />
        </div>
      </div>

      {/* Conversa - Imagem + Falas */}
      <div className={styles["page174__conversation"]}>
        <img src={conversationImage} alt="Conversation" className={styles["page174__conversation-image"]} />
        <div
          className={styles["page174__speech-bubble1"]}
        >
          Hey, what time is it?
        </div>
        <div
          className={styles["page174__speech-bubble2"]}
        >
          It’s ten oh nine.
        </div>
      </div>
    </div>
  );
};

export default Pagina174;
