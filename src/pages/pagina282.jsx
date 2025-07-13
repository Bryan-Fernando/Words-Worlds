import React, { useRef } from 'react';
import styles from './pagina282.module.css';

import img1 from '../assets/images/pagina177_imagem4.webp';
import img2 from '../assets/images/pagina177_imagem3.webp';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

// Importar todos os áudios
import audio1e from '../assets/audios/pg282_audio1e.mp3';
import audio1p from '../assets/audios/pg282_audio1p.mp3';
import audio2e from '../assets/audios/pg282_audio2e.mp3';
import audio2p from '../assets/audios/pg282_audio2p.mp3';
import audio3e from '../assets/audios/pg282_audio3e.mp3';
import audio3p from '../assets/audios/pg282_audio3p.mp3';
import audio4e from '../assets/audios/pg282_audio4e.mp3';
import audio4p from '../assets/audios/pg282_audio4p.mp3';
import audio5e from '../assets/audios/pg282_audio5e.mp3';
import audio5p from '../assets/audios/pg282_audio5p.mp3';
import audio6e from '../assets/audios/pg282_audio6e.mp3';
import audio6p from '../assets/audios/pg282_audio6p.mp3';
import audio7e from '../assets/audios/pg282_audio7e.mp3';
import audio7p from '../assets/audios/pg282_audio7p.mp3';
import audio8e from '../assets/audios/pg282_audio8e.mp3';
import audio8p from '../assets/audios/pg282_audio8p.mp3';
import audio9e from '../assets/audios/pg282_audio9e.mp3';
import audio9p from '../assets/audios/pg282_audio9p.mp3';
import audio10e from '../assets/audios/pg282_audio10e.mp3';
import audio10p from '../assets/audios/pg282_audio10p.mp3';
import audio11e from '../assets/audios/pg282_audio11e.mp3';
import audio11p from '../assets/audios/pg282_audio11p.mp3';
import audio12e from '../assets/audios/pg282_audio12e.mp3';
import audio12p from '../assets/audios/pg282_audio12p.mp3';
import audio13e from '../assets/audios/pg282_audio13e.mp3';
import audio13p from '../assets/audios/pg282_audio13p.mp3';
import audio14e from '../assets/audios/pg282_audio14e.mp3';
import audio14p from '../assets/audios/pg282_audio14p.mp3';
import audio15e from '../assets/audios/pg282_audio15e.mp3';
import audio15p from '../assets/audios/pg282_audio15p.mp3';

const Pagina282 = () => {
  const currentAudio = useRef(null);

  const audioMap = {
    'pg282_audio1e': audio1e,
    'pg282_audio1p': audio1p,
    'pg282_audio2e': audio2e,
    'pg282_audio2p': audio2p,
    'pg282_audio3e': audio3e,
    'pg282_audio3p': audio3p,
    'pg282_audio4e': audio4e,
    'pg282_audio4p': audio4p,
    'pg282_audio5e': audio5e,
    'pg282_audio5p': audio5p,
    'pg282_audio6e': audio6e,
    'pg282_audio6p': audio6p,
    'pg282_audio7e': audio7e,
    'pg282_audio7p': audio7p,
    'pg282_audio8e': audio8e,
    'pg282_audio8p': audio8p,
    'pg282_audio9e': audio9e,
    'pg282_audio9p': audio9p,
    'pg282_audio10e': audio10e,
    'pg282_audio10p': audio10p,
    'pg282_audio11e': audio11e,
    'pg282_audio11p': audio11p,
    'pg282_audio12e': audio12e,
    'pg282_audio12p': audio12p,
    'pg282_audio13e': audio13e,
    'pg282_audio13p': audio13p,
    'pg282_audio14e': audio14e,
    'pg282_audio14p': audio14p,
    'pg282_audio15e': audio15e,
    'pg282_audio15p': audio15p,
  };

  const playAudio = (id) => {
    if (currentAudio.current) {
      currentAudio.current.pause();
      currentAudio.current.currentTime = 0;
    }
    const audio = new Audio(audioMap[id]);
    currentAudio.current = audio;
    audio.play();
  };

  return (
    <div className={styles["page282__container"]}>
      <h1 className={styles["page282__title"]}>Dialogues</h1>

      {/* 1 - Asking About a Meeting Time */}
      <div className={styles["page282__block"]}>
        <div className={styles["page282__text"]}>
          <p>
            <strong>1 - Asking About a Meeting Time</strong>
            <img src={eng_audio_icon} alt="" className={styles["page282__audio-icon"]} onClick={() => playAudio("pg282_audio1e")} />
            <img src={ptbr_audio_icon} alt="" className={styles["page282__audio-icon"]} onClick={() => playAudio("pg282_audio1p")} />
          </p>
          <p>
            What time is the meeting?
            <img src={eng_audio_icon} alt="" className={styles["page282__audio-icon"]} onClick={() => playAudio("pg282_audio2e")} />
            <img src={ptbr_audio_icon} alt="" className={styles["page282__audio-icon"]} onClick={() => playAudio("pg282_audio2p")} />
          </p>
          <p className={styles["page282__red"]}>
            It’s at 10:30 a.m.
            <img src={eng_audio_icon} alt="" className={styles["page282__audio-icon"]} onClick={() => playAudio("pg282_audio3e")} />
            <img src={ptbr_audio_icon} alt="" className={styles["page282__audio-icon"]} onClick={() => playAudio("pg282_audio3p")} />
          </p>
          <p>
            Got it. Thanks!
            <img src={eng_audio_icon} alt="" className={styles["page282__audio-icon"]} onClick={() => playAudio("pg282_audio4e")} />
            <img src={ptbr_audio_icon} alt="" className={styles["page282__audio-icon"]} onClick={() => playAudio("pg282_audio4p")} />
          </p>
          <p className={styles["page282__red"]}>
            No problem!
            <img src={eng_audio_icon} alt="" className={styles["page282__audio-icon"]} onClick={() => playAudio("pg282_audio5e")} />
            <img src={ptbr_audio_icon} alt="" className={styles["page282__audio-icon"]} onClick={() => playAudio("pg282_audio5p")} />
          </p>
        </div>
        <img src={img1} alt="Meeting Time Dialogue" className={styles["page282__image"]} />
      </div>

      {/* 2 - Game */}
      <div className={styles["page282__block2"]}>
        <div className={styles["page282__text"]}>
          <p>
            <strong>2 - Game</strong>
            <img src={eng_audio_icon} alt="" className={styles["page282__audio-icon"]} onClick={() => playAudio("pg282_audio6e")} />
            <img src={ptbr_audio_icon} alt="" className={styles["page282__audio-icon"]} onClick={() => playAudio("pg282_audio6p")} />
          </p>
          <p>
            What time does the game start?
            <img src={eng_audio_icon} alt="" className={styles["page282__audio-icon"]} onClick={() => playAudio("pg282_audio7e")} />
            <img src={ptbr_audio_icon} alt="" className={styles["page282__audio-icon"]} onClick={() => playAudio("pg282_audio7p")} />
          </p>
          <p className={styles["page282__red"]}>
            At 7:45 p.m.
            <img src={eng_audio_icon} alt="" className={styles["page282__audio-icon"]} onClick={() => playAudio("pg282_audio8e")} />
            <img src={ptbr_audio_icon} alt="" className={styles["page282__audio-icon"]} onClick={() => playAudio("pg282_audio8p")} />
          </p>
          <p>
            Great! I won’t be late.
            <img src={eng_audio_icon} alt="" className={styles["page282__audio-icon"]} onClick={() => playAudio("pg282_audio9e")} />
            <img src={ptbr_audio_icon} alt="" className={styles["page282__audio-icon"]} onClick={() => playAudio("pg282_audio9p")} />
          </p>
          <p className={styles["page282__red"]}>
            See you there!
            <img src={eng_audio_icon} alt="" className={styles["page282__audio-icon"]} onClick={() => playAudio("pg282_audio10e")} />
            <img src={ptbr_audio_icon} alt="" className={styles["page282__audio-icon"]} onClick={() => playAudio("pg282_audio10p")} />
          </p>
        </div>
      </div>

      {/* 3 - Asking About a Flight Time */}
      <div className={styles["page282__block3"]}>
        <div className={styles["page282__text"]}>
          <p>
            <strong>3 - Asking About a Flight Time</strong>
            <img src={eng_audio_icon} alt="" className={styles["page282__audio-icon"]} onClick={() => playAudio("pg282_audio11e")} />
            <img src={ptbr_audio_icon} alt="" className={styles["page282__audio-icon"]} onClick={() => playAudio("pg282_audio11p")} />
          </p>
          <p>
            What time is our flight?
            <img src={eng_audio_icon} alt="" className={styles["page282__audio-icon"]} onClick={() => playAudio("pg282_audio12e")} />
            <img src={ptbr_audio_icon} alt="" className={styles["page282__audio-icon"]} onClick={() => playAudio("pg282_audio12p")} />
          </p>
          <p className={styles["page282__red"]}>
            It’s at 6:20 a.m.
            <img src={eng_audio_icon} alt="" className={styles["page282__audio-icon"]} onClick={() => playAudio("pg282_audio13e")} />
            <img src={ptbr_audio_icon} alt="" className={styles["page282__audio-icon"]} onClick={() => playAudio("pg282_audio13p")} />
          </p>
          <p>
            So early! We should leave by 4.
            <img src={eng_audio_icon} alt="" className={styles["page282__audio-icon"]} onClick={() => playAudio("pg282_audio14e")} />
            <img src={ptbr_audio_icon} alt="" className={styles["page282__audio-icon"]} onClick={() => playAudio("pg282_audio14p")} />
          </p>
          <p className={styles["page282__red"]}>
            Yep, don’t oversleep!
            <img src={eng_audio_icon} alt="" className={styles["page282__audio-icon"]} onClick={() => playAudio("pg282_audio15e")} />
            <img src={ptbr_audio_icon} alt="" className={styles["page282__audio-icon"]} onClick={() => playAudio("pg282_audio15p")} />
          </p>
        </div>
        <img src={img2} alt="Flight Time Dialogue" className={styles["page282__image"]} />
      </div>
    </div>
  );
};

export default Pagina282;
