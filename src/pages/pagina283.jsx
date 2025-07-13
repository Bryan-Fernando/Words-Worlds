import React, { useRef } from 'react';
import styles from './pagina283.module.css';

import img1 from '../assets/images/pagina283_imagem1.webp';
import img2 from '../assets/images/pagina283_imagem2.gif';
import img3 from '../assets/images/pagina283_imagem3.webp';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import audio1e from '../assets/audios/pg283_audio1e.mp3';
import audio1p from '../assets/audios/pg283_audio1p.mp3';
import audio2e from '../assets/audios/pg283_audio2e.mp3';
import audio2p from '../assets/audios/pg283_audio2p.mp3';
import audio3e from '../assets/audios/pg283_audio3e.mp3';
import audio3p from '../assets/audios/pg283_audio3p.mp3';
import audio4e from '../assets/audios/pg283_audio4e.mp3';
import audio4p from '../assets/audios/pg283_audio4p.mp3';
import audio5e from '../assets/audios/pg283_audio5e.mp3';
import audio5p from '../assets/audios/pg283_audio5p.mp3';
import audio6e from '../assets/audios/pg283_audio6e.mp3';
import audio6p from '../assets/audios/pg283_audio6p.mp3';
import audio7e from '../assets/audios/pg283_audio7e.mp3';
import audio7p from '../assets/audios/pg283_audio7p.mp3';
import audio8e from '../assets/audios/pg283_audio8e.mp3';
import audio8p from '../assets/audios/pg283_audio8p.mp3';
import audio9e from '../assets/audios/pg283_audio9e.mp3';
import audio9p from '../assets/audios/pg283_audio9p.mp3';
import audio10e from '../assets/audios/pg283_audio10e.mp3';
import audio10p from '../assets/audios/pg283_audio10p.mp3';
import audio11e from '../assets/audios/pg283_audio11e.mp3';
import audio11p from '../assets/audios/pg283_audio11p.mp3';
import audio12e from '../assets/audios/pg283_audio12e.mp3';
import audio12p from '../assets/audios/pg283_audio12p.mp3';
import audio13e from '../assets/audios/pg283_audio13e.mp3';
import audio13p from '../assets/audios/pg283_audio13p.mp3';
import audio14e from '../assets/audios/pg283_audio14e.mp3';
import audio14p from '../assets/audios/pg283_audio14p.mp3';
import audio15e from '../assets/audios/pg283_audio15e.mp3';
import audio15p from '../assets/audios/pg283_audio15p.mp3';
import audio16e from '../assets/audios/pg283_audio16e.mp3';
import audio16p from '../assets/audios/pg283_audio16p.mp3';
import audio17e from '../assets/audios/pg283_audio17e.mp3';
import audio17p from '../assets/audios/pg283_audio17p.mp3';
import audio18e from '../assets/audios/pg283_audio18e.mp3';
import audio18p from '../assets/audios/pg283_audio18p.mp3';
import audio19e from '../assets/audios/pg283_audio19e.mp3';
import audio19p from '../assets/audios/pg283_audio19p.mp3';
import audio20e from '../assets/audios/pg283_audio20e.mp3';
import audio20p from '../assets/audios/pg283_audio20p.mp3';

const Pagina283 = () => {
  const currentAudio = useRef(null);

  const audioMap = {
    'pg283_audio1e': audio1e,
    'pg283_audio1p': audio1p,
    'pg283_audio2e': audio2e,
    'pg283_audio2p': audio2p,
    'pg283_audio3e': audio3e,
    'pg283_audio3p': audio3p,
    'pg283_audio4e': audio4e,
    'pg283_audio4p': audio4p,
    'pg283_audio5e': audio5e,
    'pg283_audio5p': audio5p,
    'pg283_audio6e': audio6e,
    'pg283_audio6p': audio6p,
    'pg283_audio7e': audio7e,
    'pg283_audio7p': audio7p,
    'pg283_audio8e': audio8e,
    'pg283_audio8p': audio8p,
    'pg283_audio9e': audio9e,
    'pg283_audio9p': audio9p,
    'pg283_audio10e': audio10e,
    'pg283_audio10p': audio10p,
    'pg283_audio11e': audio11e,
    'pg283_audio11p': audio11p,
    'pg283_audio12e': audio12e,
    'pg283_audio12p': audio12p,
    'pg283_audio13e': audio13e,
    'pg283_audio13p': audio13p,
    'pg283_audio14e': audio14e,
    'pg283_audio14p': audio14p,
    'pg283_audio15e': audio15e,
    'pg283_audio15p': audio15p,
    'pg283_audio16e': audio16e,
    'pg283_audio16p': audio16p,
    'pg283_audio17e': audio17e,
    'pg283_audio17p': audio17p,
    'pg283_audio18e': audio18e,
    'pg283_audio18p': audio18p,
    'pg283_audio19e': audio19e,
    'pg283_audio19p': audio19p,
    'pg283_audio20e': audio20e,
    'pg283_audio20p': audio20p,
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
    <div className={styles["page283__container"]}>
      <h1 className={styles["page283__title"]}>Dialogues</h1>

      <div className={styles["page283__block"]}>
        <div className={styles["page283__text"]}>
          <p>
            <strong>4 - Asking About an Event</strong>
            <img src={eng_audio_icon} alt="" className={styles["page283__audio-icon"]} onClick={() => playAudio("pg283_audio1e")} />
            <img src={ptbr_audio_icon} alt="" className={styles["page283__audio-icon"]} onClick={() => playAudio("pg283_audio1p")} />
          </p>
          <p>
            Do you know what time the concert starts?
            <img src={eng_audio_icon} alt="" className={styles["page283__audio-icon"]} onClick={() => playAudio("pg283_audio2e")} />
            <img src={ptbr_audio_icon} alt="" className={styles["page283__audio-icon"]} onClick={() => playAudio("pg283_audio2p")} />
          </p>
          <p className={styles["page283__red"]}>
            At 8:00 p.m., but doors open at 7.
            <img src={eng_audio_icon} alt="" className={styles["page283__audio-icon"]} onClick={() => playAudio("pg283_audio3e")} />
            <img src={ptbr_audio_icon} alt="" className={styles["page283__audio-icon"]} onClick={() => playAudio("pg283_audio3p")} />
          </p>
          <p>
            Cool! Let’s go early.
            <img src={eng_audio_icon} alt="" className={styles["page283__audio-icon"]} onClick={() => playAudio("pg283_audio4e")} />
            <img src={ptbr_audio_icon} alt="" className={styles["page283__audio-icon"]} onClick={() => playAudio("pg283_audio4p")} />
          </p>
          <p className={styles["page283__red"]}>
            Sounds good!
            <img src={eng_audio_icon} alt="" className={styles["page283__audio-icon"]} onClick={() => playAudio("pg283_audio5e")} />
            <img src={ptbr_audio_icon} alt="" className={styles["page283__audio-icon"]} onClick={() => playAudio("pg283_audio5p")} />
          </p>
        </div>
        <img src={img1} alt="Event" className={styles["page283__image"]} />
      </div>

      <div className={styles["page283__block"]}>
        <div className={styles["page283__text"]}>
          <p>
            <strong>5 - Asking About a Class Schedule</strong>
            <img src={eng_audio_icon} alt="" className={styles["page283__audio-icon"]} onClick={() => playAudio("pg283_audio6e")} />
            <img src={ptbr_audio_icon} alt="" className={styles["page283__audio-icon"]} onClick={() => playAudio("pg283_audio6p")} />
          </p>
          <p>
            What time does the class start?
            <img src={eng_audio_icon} alt="" className={styles["page283__audio-icon"]} onClick={() => playAudio("pg283_audio7e")} />
            <img src={ptbr_audio_icon} alt="" className={styles["page283__audio-icon"]} onClick={() => playAudio("pg283_audio7p")} />
          </p>
          <p className={styles["page283__red"]}>
            At 9:00 a.m. sharp.
            <img src={eng_audio_icon} alt="" className={styles["page283__audio-icon"]} onClick={() => playAudio("pg283_audio8e")} />
            <img src={ptbr_audio_icon} alt="" className={styles["page283__audio-icon"]} onClick={() => playAudio("pg283_audio8p")} />
          </p>
          <p>
            Thanks! I’ll be there on time.
            <img src={eng_audio_icon} alt="" className={styles["page283__audio-icon"]} onClick={() => playAudio("pg283_audio9e")} />
            <img src={ptbr_audio_icon} alt="" className={styles["page283__audio-icon"]} onClick={() => playAudio("pg283_audio9p")} />
          </p>
          <p className={styles["page283__red"]}>
            Don’t be late!
            <img src={eng_audio_icon} alt="" className={styles["page283__audio-icon"]} onClick={() => playAudio("pg283_audio10e")} />
            <img src={ptbr_audio_icon} alt="" className={styles["page283__audio-icon"]} onClick={() => playAudio("pg283_audio10p")} />
          </p>
        </div>
        <img src={img2} alt="Class Schedule" className={styles["page283__image"]} />
      </div>

      <div className={styles["page283__block"]}>
        <div className={styles["page283__text"]}>
          <p>
            <strong>6 - Train Departure</strong>
            <img src={eng_audio_icon} alt="" className={styles["page283__audio-icon"]} onClick={() => playAudio("pg283_audio11e")} />
            <img src={ptbr_audio_icon} alt="" className={styles["page283__audio-icon"]} onClick={() => playAudio("pg283_audio11p")} />
          </p>
          <p>
            What time does our train leave?
            <img src={eng_audio_icon} alt="" className={styles["page283__audio-icon"]} onClick={() => playAudio("pg283_audio12e")} />
            <img src={ptbr_audio_icon} alt="" className={styles["page283__audio-icon"]} onClick={() => playAudio("pg283_audio12p")} />
          </p>
          <p className={styles["page283__red"]}>
            At 3:15 p.m.
            <img src={eng_audio_icon} alt="" className={styles["page283__audio-icon"]} onClick={() => playAudio("pg283_audio13e")} />
            <img src={ptbr_audio_icon} alt="" className={styles["page283__audio-icon"]} onClick={() => playAudio("pg283_audio13p")} />
          </p>
          <p>
            We should get to the station early.
            <img src={eng_audio_icon} alt="" className={styles["page283__audio-icon"]} onClick={() => playAudio("pg283_audio14e")} />
            <img src={ptbr_audio_icon} alt="" className={styles["page283__audio-icon"]} onClick={() => playAudio("pg283_audio14p")} />
          </p>
          <p className={styles["page283__red"]}>
            Yeah, at least 30 minutes before.
            <img src={eng_audio_icon} alt="" className={styles["page283__audio-icon"]} onClick={() => playAudio("pg283_audio15e")} />
            <img src={ptbr_audio_icon} alt="" className={styles["page283__audio-icon"]} onClick={() => playAudio("pg283_audio15p")} />
          </p>
        </div>
        <img src={img3} alt="Train Departure" className={styles["page283__image"]} />
      </div>

      <div className={styles["page283__block"]}>
        <div className={styles["page283__text"]}>
          <p>
            <strong>7 - Asking About an Appointment</strong>
            <img src={eng_audio_icon} alt="" className={styles["page283__audio-icon"]} onClick={() => playAudio("pg283_audio16e")} />
            <img src={ptbr_audio_icon} alt="" className={styles["page283__audio-icon"]} onClick={() => playAudio("pg283_audio16p")} />
          </p>
          <p>
            What time is my doctor’s appointment?
            <img src={eng_audio_icon} alt="" className={styles["page283__audio-icon"]} onClick={() => playAudio("pg283_audio17e")} />
            <img src={ptbr_audio_icon} alt="" className={styles["page283__audio-icon"]} onClick={() => playAudio("pg283_audio17p")} />
          </p>
          <p className={styles["page283__red"]}>
            It’s at 2:30 p.m.
            <img src={eng_audio_icon} alt="" className={styles["page283__audio-icon"]} onClick={() => playAudio("pg283_audio18e")} />
            <img src={ptbr_audio_icon} alt="" className={styles["page283__audio-icon"]} onClick={() => playAudio("pg283_audio18p")} />
          </p>
          <p>
            Thanks for reminding me!
            <img src={eng_audio_icon} alt="" className={styles["page283__audio-icon"]} onClick={() => playAudio("pg283_audio19e")} />
            <img src={ptbr_audio_icon} alt="" className={styles["page283__audio-icon"]} onClick={() => playAudio("pg283_audio19p")} />
          </p>
          <p className={styles["page283__red"]}>
            No problem!
            <img src={eng_audio_icon} alt="" className={styles["page283__audio-icon"]} onClick={() => playAudio("pg283_audio20e")} />
            <img src={ptbr_audio_icon} alt="" className={styles["page283__audio-icon"]} onClick={() => playAudio("pg283_audio20p")} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pagina283;
