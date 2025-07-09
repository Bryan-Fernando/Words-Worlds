import React, { useRef } from 'react';
import styles from './pagina281.module.css';

import img1 from '../assets/images/pagina281_imagem1.webp';
import img2 from '../assets/images/pagina281_imagem2.webp';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

// Importar todos os áudios (20×2 = 40 arquivos)
import audio1e from '../assets/audios/pg281_audio1e.mp3';
import audio1p from '../assets/audios/pg281_audio1p.mp3';
import audio2e from '../assets/audios/pg281_audio2e.mp3';
import audio2p from '../assets/audios/pg281_audio2p.mp3';
import audio3e from '../assets/audios/pg281_audio3e.mp3';
import audio3p from '../assets/audios/pg281_audio3p.mp3';
import audio4e from '../assets/audios/pg281_audio4e.mp3';
import audio4p from '../assets/audios/pg281_audio4p.mp3';
import audio5e from '../assets/audios/pg281_audio5e.mp3';
import audio5p from '../assets/audios/pg281_audio5p.mp3';
import audio6e from '../assets/audios/pg281_audio6e.mp3';
import audio6p from '../assets/audios/pg281_audio6p.mp3';
import audio7e from '../assets/audios/pg281_audio7e.mp3';
import audio7p from '../assets/audios/pg281_audio7p.mp3';
import audio8e from '../assets/audios/pg281_audio8e.mp3';
import audio8p from '../assets/audios/pg281_audio8p.mp3';
import audio9e from '../assets/audios/pg281_audio9e.mp3';
import audio9p from '../assets/audios/pg281_audio9p.mp3';
import audio10e from '../assets/audios/pg281_audio10e.mp3';
import audio10p from '../assets/audios/pg281_audio10p.mp3';
import audio11e from '../assets/audios/pg281_audio11e.mp3';
import audio11p from '../assets/audios/pg281_audio11p.mp3';
import audio12e from '../assets/audios/pg281_audio12e.mp3';
import audio12p from '../assets/audios/pg281_audio12p.mp3';
import audio13e from '../assets/audios/pg281_audio13e.mp3';
import audio13p from '../assets/audios/pg281_audio13p.mp3';
import audio14e from '../assets/audios/pg281_audio14e.mp3';
import audio14p from '../assets/audios/pg281_audio14p.mp3';
import audio15e from '../assets/audios/pg281_audio15e.mp3';
import audio15p from '../assets/audios/pg281_audio15p.mp3';
import audio16e from '../assets/audios/pg281_audio16e.mp3';
import audio16p from '../assets/audios/pg281_audio16p.mp3';
import audio17e from '../assets/audios/pg281_audio17e.mp3';
import audio17p from '../assets/audios/pg281_audio17p.mp3';
import audio18e from '../assets/audios/pg281_audio18e.mp3';
import audio18p from '../assets/audios/pg281_audio18p.mp3';
import audio19e from '../assets/audios/pg281_audio19e.mp3';
import audio19p from '../assets/audios/pg281_audio19p.mp3';
import audio20e from '../assets/audios/pg281_audio20e.mp3';
import audio20p from '../assets/audios/pg281_audio20p.mp3';

const Pagina281 = () => {
  const currentAudio = useRef(null);

  const audioMap = {
    'pg281_audio1e': audio1e,
    'pg281_audio1p': audio1p,
    'pg281_audio2e': audio2e,
    'pg281_audio2p': audio2p,
    'pg281_audio3e': audio3e,
    'pg281_audio3p': audio3p,
    'pg281_audio4e': audio4e,
    'pg281_audio4p': audio4p,
    'pg281_audio5e': audio5e,
    'pg281_audio5p': audio5p,
    'pg281_audio6e': audio6e,
    'pg281_audio6p': audio6p,
    'pg281_audio7e': audio7e,
    'pg281_audio7p': audio7p,
    'pg281_audio8e': audio8e,
    'pg281_audio8p': audio8p,
    'pg281_audio9e': audio9e,
    'pg281_audio9p': audio9p,
    'pg281_audio10e': audio10e,
    'pg281_audio10p': audio10p,
    'pg281_audio11e': audio11e,
    'pg281_audio11p': audio11p,
    'pg281_audio12e': audio12e,
    'pg281_audio12p': audio12p,
    'pg281_audio13e': audio13e,
    'pg281_audio13p': audio13p,
    'pg281_audio14e': audio14e,
    'pg281_audio14p': audio14p,
    'pg281_audio15e': audio15e,
    'pg281_audio15p': audio15p,
    'pg281_audio16e': audio16e,
    'pg281_audio16p': audio16p,
    'pg281_audio17e': audio17e,
    'pg281_audio17p': audio17p,
    'pg281_audio18e': audio18e,
    'pg281_audio18p': audio18p,
    'pg281_audio19e': audio19e,
    'pg281_audio19p': audio19p,
    'pg281_audio20e': audio20e,
    'pg281_audio20p': audio20p,
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
    <div className={styles["page281__container"]}>
      <h1 className={styles["page281__title"]}>Dialogues</h1>

      {/* 1 - Formal */}
      <div className={styles["page281__block"]}>
        <div className={styles["page281__text"]}>
          <p>
            <strong>1 - Formal</strong>
            <img src={eng_audio_icon} alt="" className={styles["page281__audio-icon"]} onClick={() => playAudio("pg281_audio1e")} />
            <img src={ptbr_audio_icon} alt="" className={styles["page281__audio-icon"]} onClick={() => playAudio("pg281_audio1p")} />
          </p>
          <p>
            Excuse me, do you have the time?
            <img src={eng_audio_icon} alt="" className={styles["page281__audio-icon"]} onClick={() => playAudio("pg281_audio2e")} />
            <img src={ptbr_audio_icon} alt="" className={styles["page281__audio-icon"]} onClick={() => playAudio("pg281_audio2p")} />
          </p>
          <p className={styles["page281__red"]}>
            Yes, it’s 10:15.
            <img src={eng_audio_icon} alt="" className={styles["page281__audio-icon"]} onClick={() => playAudio("pg281_audio3e")} />
            <img src={ptbr_audio_icon} alt="" className={styles["page281__audio-icon"]} onClick={() => playAudio("pg281_audio3p")} />
          </p>
          <p>
            Thank you!
            <img src={eng_audio_icon} alt="" className={styles["page281__audio-icon"]} onClick={() => playAudio("pg281_audio4e")} />
            <img src={ptbr_audio_icon} alt="" className={styles["page281__audio-icon"]} onClick={() => playAudio("pg281_audio4p")} />
          </p>
          <p className={styles["page281__red"]}>
            You’re welcome.
            <img src={eng_audio_icon} alt="" className={styles["page281__audio-icon"]} onClick={() => playAudio("pg281_audio5e")} />
            <img src={ptbr_audio_icon} alt="" className={styles["page281__audio-icon"]} onClick={() => playAudio("pg281_audio5p")} />
          </p>
        </div>
        <img src={img1} alt="Formal Dialogue" className={styles["page281__image"]} />
      </div>

      <div className={styles["page281__block"]}>
        <div className={styles["page281__text"]}>
          <p>
            <strong>2 - Casual</strong>
            <img
              src={eng_audio_icon}
              alt="English audio"
              className={styles["page281__audio-icon"]}
              onClick={() => playAudio("pg281_audio6e")}
            />
            <img
              src={ptbr_audio_icon}
              alt="Portuguese audio"
              className={styles["page281__audio-icon"]}
              onClick={() => playAudio("pg281_audio6p")}
            />
          </p>
          <p>
            Hey, what time is it?
            <img
              src={eng_audio_icon}
              alt="English audio"
              className={styles["page281__audio-icon"]}
              onClick={() => playAudio("pg281_audio7e")}
            />
            <img
              src={ptbr_audio_icon}
              alt="Portuguese audio"
              className={styles["page281__audio-icon"]}
              onClick={() => playAudio("pg281_audio7p")}
            />
          </p>
          <p className={styles["page281__red"]}>
            It’s 3:45.
            <img
              src={eng_audio_icon}
              alt="English audio"
              className={styles["page281__audio-icon"]}
              onClick={() => playAudio("pg281_audio8e")}
            />
            <img
              src={ptbr_audio_icon}
              alt="Portuguese audio"
              className={styles["page281__audio-icon"]}
              onClick={() => playAudio("pg281_audio8p")}
            />
          </p>
          <p>
            Oh, almost four! Thanks.
            <img
              src={eng_audio_icon}
              alt="English audio"
              className={styles["page281__audio-icon"]}
              onClick={() => playAudio("pg281_audio9e")}
            />
            <img
              src={ptbr_audio_icon}
              alt="Portuguese audio"
              className={styles["page281__audio-icon"]}
              onClick={() => playAudio("pg281_audio9p")}
            />
          </p>
          <p className={styles["page281__red"]}>
            No problem!
            <img
              src={eng_audio_icon}
              alt="English audio"
              className={styles["page281__audio-icon"]}
              onClick={() => playAudio("pg281_audio10e")}
            />
            <img
              src={ptbr_audio_icon}
              alt="Portuguese audio"
              className={styles["page281__audio-icon"]}
              onClick={() => playAudio("pg281_audio10p")}
            />
          </p>
        </div>
      </div>

      <div className={styles["page281__block"]}>
        <div className={styles["page281__text"]}>
          <p>
            <strong>3 - On the Phone</strong>
            <img
              src={eng_audio_icon}
              alt="English audio"
              className={styles["page281__audio-icon"]}
              onClick={() => playAudio("pg281_audio11e")}
            />
            <img
              src={ptbr_audio_icon}
              alt="Portuguese audio"
              className={styles["page281__audio-icon"]}
              onClick={() => playAudio("pg281_audio11p")}
            />
          </p>
          <p>
            Hi, do you know what time it is?
            <img
              src={eng_audio_icon}
              alt="English audio"
              className={styles["page281__audio-icon"]}
              onClick={() => playAudio("pg281_audio12e")}
            />
            <img
              src={ptbr_audio_icon}
              alt="Portuguese audio"
              className={styles["page281__audio-icon"]}
              onClick={() => playAudio("pg281_audio12p")}
            />
          </p>
          <p className={styles["page281__red"]}>
            Yeah, it’s 7:30.
            <img
              src={eng_audio_icon}
              alt="English audio"
              className={styles["page281__audio-icon"]}
              onClick={() => playAudio("pg281_audio13e")}
            />
            <img
              src={ptbr_audio_icon}
              alt="Portuguese audio"
              className={styles["page281__audio-icon"]}
              onClick={() => playAudio("pg281_audio13p")}
            />
          </p>
          <p>
            Oh! I’m late. Thanks!
            <img
              src={eng_audio_icon}
              alt="English audio"
              className={styles["page281__audio-icon"]}
              onClick={() => playAudio("pg281_audio14e")}
            />
            <img
              src={ptbr_audio_icon}
              alt="Portuguese audio"
              className={styles["page281__audio-icon"]}
              onClick={() => playAudio("pg281_audio14p")}
            />
          </p>
          <p className={styles["page281__red"]}>
            Hurry up!
            <img
              src={eng_audio_icon}
              alt="English audio"
              className={styles["page281__audio-icon"]}
              onClick={() => playAudio("pg281_audio15e")}
            />
            <img
              src={ptbr_audio_icon}
              alt="Portuguese audio"
              className={styles["page281__audio-icon"]}
              onClick={() => playAudio("pg281_audio15p")}
            />
          </p>
        </div>
        <img src={img2} alt="On the Phone Dialogue" className={styles["page281__image"]} />
      </div>

      <div className={styles["page281__block"]}>
        <div className={styles["page281__text"]}>
          <p>
            <strong>4 - Asking in a Shop</strong>
            <img
              src={eng_audio_icon}
              alt="English audio"
              className={styles["page281__audio-icon"]}
              onClick={() => playAudio("pg281_audio16e")}
            />
            <img
              src={ptbr_audio_icon}
              alt="Portuguese audio"
              className={styles["page281__audio-icon"]}
              onClick={() => playAudio("pg281_audio16p")}
            />
          </p>
          <p>
            Excuse me, could you tell me the time, please?
            <img
              src={eng_audio_icon}
              alt="English audio"
              className={styles["page281__audio-icon"]}
              onClick={() => playAudio("pg281_audio17e")}
            />
            <img
              src={ptbr_audio_icon}
              alt="Portuguese audio"
              className={styles["page281__audio-icon"]}
              onClick={() => playAudio("pg281_audio17p")}
            />
          </p>
          <p className={styles["page281__red"]}>
            Sure! It’s 5:20.
            <img
              src={eng_audio_icon}
              alt="English audio"
              className={styles["page281__audio-icon"]}
              onClick={() => playAudio("pg281_audio18e")}
            />
            <img
              src={ptbr_audio_icon}
              alt="Portuguese audio"
              className={styles["page281__audio-icon"]}
              onClick={() => playAudio("pg281_audio18p")}
            />
          </p>
          <p>
            Thanks a lot!
            <img
              src={eng_audio_icon}
              alt="English audio"
              className={styles["page281__audio-icon"]}
              onClick={() => playAudio("pg281_audio19e")}
            />
            <img
              src={ptbr_audio_icon}
              alt="Portuguese audio"
              className={styles["page281__audio-icon"]}
              onClick={() => playAudio("pg281_audio19p")}
            />
          </p>
          <p className={styles["page281__red"]}>
            Anytime!
            <img
              src={eng_audio_icon}
              alt="English audio"
              className={styles["page281__audio-icon"]}
              onClick={() => playAudio("pg281_audio20e")}
            />
            <img
              src={ptbr_audio_icon}
              alt="Portuguese audio"
              className={styles["page281__audio-icon"]}
              onClick={() => playAudio("pg281_audio20p")}
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pagina281;
