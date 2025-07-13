import React, { useRef } from 'react';
import styles from './pagina284.module.css';

import img1 from '../assets/images/pagina284_imagem1.webp';
import img2 from '../assets/images/pagina284_imagem2.webp';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import audio1e from '../assets/audios/pg284_audio1e.mp3';
import audio1p from '../assets/audios/pg284_audio1p.mp3';
import audio2e from '../assets/audios/pg284_audio2e.mp3';
import audio2p from '../assets/audios/pg284_audio2p.mp3';
import audio3e from '../assets/audios/pg284_audio3e.mp3';
import audio3p from '../assets/audios/pg284_audio3p.mp3';
import audio4e from '../assets/audios/pg284_audio4e.mp3';
import audio4p from '../assets/audios/pg284_audio4p.mp3';
import audio5e from '../assets/audios/pg284_audio5e.mp3';
import audio5p from '../assets/audios/pg284_audio5p.mp3';
import audio6e from '../assets/audios/pg284_audio6e.mp3';
import audio6p from '../assets/audios/pg284_audio6p.mp3';
import audio7e from '../assets/audios/pg284_audio7e.mp3';
import audio7p from '../assets/audios/pg284_audio7p.mp3';
import audio8e from '../assets/audios/pg284_audio8e.mp3';
import audio8p from '../assets/audios/pg284_audio8p.mp3';
import audio9e from '../assets/audios/pg284_audio9e.mp3';
import audio9p from '../assets/audios/pg284_audio9p.mp3';
import audio10e from '../assets/audios/pg284_audio10e.mp3';
import audio10p from '../assets/audios/pg284_audio10p.mp3';
import audio11e from '../assets/audios/pg284_audio11e.mp3';
import audio11p from '../assets/audios/pg284_audio11p.mp3';
import audio12e from '../assets/audios/pg284_audio12e.mp3';
import audio12p from '../assets/audios/pg284_audio12p.mp3';
import audio13e from '../assets/audios/pg284_audio13e.mp3';
import audio13p from '../assets/audios/pg284_audio13p.mp3';
import audio14e from '../assets/audios/pg284_audio14e.mp3';
import audio14p from '../assets/audios/pg284_audio14p.mp3';
import audio15e from '../assets/audios/pg284_audio15e.mp3';
import audio15p from '../assets/audios/pg284_audio15p.mp3';

const Pagina284 = () => {
  const currentAudio = useRef(null);

  const audioMap = {
    'pg284_audio1e': audio1e,
    'pg284_audio1p': audio1p,
    'pg284_audio2e': audio2e,
    'pg284_audio2p': audio2p,
    'pg284_audio3e': audio3e,
    'pg284_audio3p': audio3p,
    'pg284_audio4e': audio4e,
    'pg284_audio4p': audio4p,
    'pg284_audio5e': audio5e,
    'pg284_audio5p': audio5p,
    'pg284_audio6e': audio6e,
    'pg284_audio6p': audio6p,
    'pg284_audio7e': audio7e,
    'pg284_audio7p': audio7p,
    'pg284_audio8e': audio8e,
    'pg284_audio8p': audio8p,
    'pg284_audio9e': audio9e,
    'pg284_audio9p': audio9p,
    'pg284_audio10e': audio10e,
    'pg284_audio10p': audio10p,
    'pg284_audio11e': audio11e,
    'pg284_audio11p': audio11p,
    'pg284_audio12e': audio12e,
    'pg284_audio12p': audio12p,
    'pg284_audio13e': audio13e,
    'pg284_audio13p': audio13p,
    'pg284_audio14e': audio14e,
    'pg284_audio14p': audio14p,
    'pg284_audio15e': audio15e,
    'pg284_audio15p': audio15p,
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
    <div className={styles['page284__container']}>

      <h1 className={styles['page284__title']}>Dialogues</h1>

      <div className={styles['page284__block']}>
        <div className={styles['page284__text']}>
          <p>
            <strong>8 - Dinner Reservation</strong>
            <img src={eng_audio_icon} alt="" className={styles['page284__audio-icon']} onClick={() => playAudio("pg284_audio1e")} />
            <img src={ptbr_audio_icon} alt="" className={styles['page284__audio-icon']} onClick={() => playAudio("pg284_audio1p")} />
          </p>
          <p>
            What time is our dinner reservation?
            <img src={eng_audio_icon} alt="" className={styles['page284__audio-icon']} onClick={() => playAudio("pg284_audio2e")} />
            <img src={ptbr_audio_icon} alt="" className={styles['page284__audio-icon']} onClick={() => playAudio("pg284_audio2p")} />
          </p>
          <p className={styles['page284__red']}>
            At 7:00 p.m.
            <img src={eng_audio_icon} alt="" className={styles['page284__audio-icon']} onClick={() => playAudio("pg284_audio3e")} />
            <img src={ptbr_audio_icon} alt="" className={styles['page284__audio-icon']} onClick={() => playAudio("pg284_audio3p")} />
          </p>
          <p>
            Perfect! I’m starving.
            <img src={eng_audio_icon} alt="" className={styles['page284__audio-icon']} onClick={() => playAudio("pg284_audio4e")} />
            <img src={ptbr_audio_icon} alt="" className={styles['page284__audio-icon']} onClick={() => playAudio("pg284_audio4p")} />
          </p>
          <p className={styles['page284__red']}>
            Me too! Let’s go.
            <img src={eng_audio_icon} alt="" className={styles['page284__audio-icon']} onClick={() => playAudio("pg284_audio5e")} />
            <img src={ptbr_audio_icon} alt="" className={styles['page284__audio-icon']} onClick={() => playAudio("pg284_audio5p")} />
          </p>
        </div>
        <img src={img1} alt="Dinner Reservation" className={styles['page284__image']} />
      </div>

      <div className={styles['page284__block']}>
        <div className={styles['page284__text']}>
          <p>
            <strong>9 - Movie Showtime</strong>
            <img src={eng_audio_icon} alt="" className={styles['page284__audio-icon']} onClick={() => playAudio("pg284_audio6e")} />
            <img src={ptbr_audio_icon} alt="" className={styles['page284__audio-icon']} onClick={() => playAudio("pg284_audio6p")} />
          </p>
          <p>
            What time is the movie?
            <img src={eng_audio_icon} alt="" className={styles['page284__audio-icon']} onClick={() => playAudio("pg284_audio7e")} />
            <img src={ptbr_audio_icon} alt="" className={styles['page284__audio-icon']} onClick={() => playAudio("pg284_audio7p")} />
          </p>
          <p className={styles['page284__red']}>
            At 6:45 p.m.
            <img src={eng_audio_icon} alt="" className={styles['page284__audio-icon']} onClick={() => playAudio("pg284_audio8e")} />
            <img src={ptbr_audio_icon} alt="" className={styles['page284__audio-icon']} onClick={() => playAudio("pg284_audio8p")} />
          </p>
          <p>
            Cool! Let’s grab popcorn before it starts.
            <img src={eng_audio_icon} alt="" className={styles['page284__audio-icon']} onClick={() => playAudio("pg284_audio9e")} />
            <img src={ptbr_audio_icon} alt="" className={styles['page284__audio-icon']} onClick={() => playAudio("pg284_audio9p")} />
          </p>
          <p className={styles['page284__red']}>
            Good idea!
            <img src={eng_audio_icon} alt="" className={styles['page284__audio-icon']} onClick={() => playAudio("pg284_audio10e")} />
            <img src={ptbr_audio_icon} alt="" className={styles['page284__audio-icon']} onClick={() => playAudio("pg284_audio10p")} />
          </p>
        </div>
        <img src={img2} alt="Movie Showtime" className={styles['page284__image']} />
      </div>

      <div className={styles['page284__block']}>
        <div className={styles['page284__text']}>
          <p>
            <strong>10 - Interview</strong>
            <img src={eng_audio_icon} alt="" className={styles['page284__audio-icon']} onClick={() => playAudio("pg284_audio11e")} />
            <img src={ptbr_audio_icon} alt="" className={styles['page284__audio-icon']} onClick={() => playAudio("pg284_audio11p")} />
          </p>
          <p>
            What time is my interview?
            <img src={eng_audio_icon} alt="" className={styles['page284__audio-icon']} onClick={() => playAudio("pg284_audio12e")} />
            <img src={ptbr_audio_icon} alt="" className={styles['page284__audio-icon']} onClick={() => playAudio("pg284_audio12p")} />
          </p>
          <p className={styles['page284__red']}>
            At 10:00 a.m. Don’t forget your resume!
            <img src={eng_audio_icon} alt="" className={styles['page284__audio-icon']} onClick={() => playAudio("pg284_audio13e")} />
            <img src={ptbr_audio_icon} alt="" className={styles['page284__audio-icon']} onClick={() => playAudio("pg284_audio13p")} />
          </p>
          <p>
            Thanks! I’m ready.
            <img src={eng_audio_icon} alt="" className={styles['page284__audio-icon']} onClick={() => playAudio("pg284_audio14e")} />
            <img src={ptbr_audio_icon} alt="" className={styles['page284__audio-icon']} onClick={() => playAudio("pg284_audio14p")} />
          </p>
          <p className={styles['page284__red']}>
            Good luck!
            <img src={eng_audio_icon} alt="" className={styles['page284__audio-icon']} onClick={() => playAudio("pg284_audio15e")} />
            <img src={ptbr_audio_icon} alt="" className={styles['page284__audio-icon']} onClick={() => playAudio("pg284_audio15p")} />
          </p>
        </div>
      </div>

    </div>
  );
};

export default Pagina284;
