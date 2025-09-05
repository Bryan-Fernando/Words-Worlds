import React, { useEffect, useRef } from 'react';
import styles from './pagina507.module.css';

import pagina507imagem1 from '../assets/images/dialoguespagina4_imagem1.gif';
import pagina507imagem2 from '../assets/images/dialoguespagina4_imagem2.gif';
import pagina507imagem3 from '../assets/images/dialoguespagina4_imagem3.gif';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import audio1e from '../assets/audios/pg507_audio1e.mp3';
import audio2e from '../assets/audios/pg507_audio2e.mp3';
import audio3e from '../assets/audios/pg507_audio3e.mp3';
import audio4e from '../assets/audios/pg507_audio4e.mp3';
import audio5e from '../assets/audios/pg507_audio5e.mp3';
import audio6e from '../assets/audios/pg507_audio6e.mp3';
import audio7e from '../assets/audios/pg507_audio7e.mp3';
import audio8e from '../assets/audios/pg507_audio8e.mp3';
import audio9e from '../assets/audios/pg507_audio9e.mp3';
import audio10e from '../assets/audios/pg507_audio10e.mp3';
import audio11e from '../assets/audios/pg507_audio11e.mp3';

import audio1p from '../assets/audios/pg507_audio1p.mp3';
import audio2p from '../assets/audios/pg507_audio2p.mp3';
import audio3p from '../assets/audios/pg507_audio3p.mp3';
import audio4p from '../assets/audios/pg507_audio4p.mp3';
import audio5p from '../assets/audios/pg507_audio5p.mp3';
import audio6p from '../assets/audios/pg507_audio6p.mp3';
import audio7p from '../assets/audios/pg507_audio7p.mp3';
import audio8p from '../assets/audios/pg507_audio8p.mp3';
import audio9p from '../assets/audios/pg507_audio9p.mp3';
import audio10p from '../assets/audios/pg507_audio10p.mp3';
import audio11p from '../assets/audios/pg507_audio11p.mp3';

const Pagina507 = ({ onValidar }) => {
  const currentAudioRef = useRef(null);
  const playAudio = (file) => {
    if (currentAudioRef.current) {
      currentAudioRef.current.pause();
      currentAudioRef.current.currentTime = 0;
    }
    const a = new Audio(file);
    currentAudioRef.current = a;
    a.play();
  };

  useEffect(() => {
    if (onValidar) onValidar(true);
  }, [onValidar]);

  return (
    <div className={styles.page__container}>
      <header className={styles.page__header}>
        <h1 className={styles.page__title}>Dialogues</h1>
        <h2 className={styles.page__subtitle}>Real-life Conversation</h2>
      </header>

      <main className={styles.page__grid}>
        <section className={styles.card}>
          <img src={pagina507imagem1} alt="Hometown" className={styles.card__image} />
          <h3 className={styles.card__title}>
            Hometown
            <img src={eng_audio_icon} alt="Play English Audio" className={styles.page507__icon} onClick={() => playAudio(audio1e)} />
            <img src={ptbr_audio_icon} alt="Play Portuguese Audio" className={styles.page507__icon} onClick={() => playAudio(audio1p)} />
          </h3>
          <div className={styles.dialogue}>
            <p>
              <span className={styles.speakerA}>A:</span> Where are you from?
              <img src={eng_audio_icon} alt="Play English Audio" className={styles.page507__icon} onClick={() => playAudio(audio2e)} />
              <img src={ptbr_audio_icon} alt="Play Portuguese Audio" className={styles.page507__icon} onClick={() => playAudio(audio2p)} />
            </p>
            <p>
              <span className={styles.speakerB}>B:</span> I’m from New York. How about you?
              <img src={eng_audio_icon} alt="Play English Audio" className={styles.page507__icon} onClick={() => playAudio(audio3e)} />
              <img src={ptbr_audio_icon} alt="Play Portuguese Audio" className={styles.page507__icon} onClick={() => playAudio(audio3p)} />
            </p>
            <p>
              <span className={styles.speakerA}>A:</span> I’m originally from Tokyo, but I live here now.
              <img src={eng_audio_icon} alt="Play English Audio" className={styles.page507__icon} onClick={() => playAudio(audio4e)} />
              <img src={ptbr_audio_icon} alt="Play Portuguese Audio" className={styles.page507__icon} onClick={() => playAudio(audio4p)} />
            </p>
          </div>
        </section>

        <section className={styles.card}>
          <img src={pagina507imagem2} alt="Future Plans" className={styles.card__image} />
          <h3 className={styles.card__title}>
            Future Plans
            <img src={eng_audio_icon} alt="Play English Audio" className={styles.page507__icon} onClick={() => playAudio(audio5e)} />
            <img src={ptbr_audio_icon} alt="Play Portuguese Audio" className={styles.page507__icon} onClick={() => playAudio(audio5p)} />
          </h3>
          <div className={styles.dialogue}>
            <p>
              <span className={styles.speakerA}>A:</span> What are your plans for the future?
              <img src={eng_audio_icon} alt="Play English Audio" className={styles.page507__icon} onClick={() => playAudio(audio6e)} />
              <img src={ptbr_audio_icon} alt="Play Portuguese Audio" className={styles.page507__icon} onClick={() => playAudio(audio6p)} />
            </p>
            <p>
              <span className={styles.speakerB}>B:</span> I’m hoping to start my own business someday. How about you?
              <img src={eng_audio_icon} alt="Play English Audio" className={styles.page507__icon} onClick={() => playAudio(audio7e)} />
              <img src={ptbr_audio_icon} alt="Play Portuguese Audio" className={styles.page507__icon} onClick={() => playAudio(audio7p)} />
            </p>
            <p>
              <span className={styles.speakerA}>A:</span> I want to continue studying and maybe travel more.
              <img src={eng_audio_icon} alt="Play English Audio" className={styles.page507__icon} onClick={() => playAudio(audio8e)} />
              <img src={ptbr_audio_icon} alt="Play Portuguese Audio" className={styles.page507__icon} onClick={() => playAudio(audio8p)} />
            </p>
          </div>
        </section>

        <section className={styles.card}>
          <img src={pagina507imagem3} alt="Asking for Directions" className={styles.card__image} />
          <h3 className={styles.card__title}>
            Asking for Directions
            <img src={eng_audio_icon} alt="Play English Audio" className={styles.page507__icon} onClick={() => playAudio(audio9e)} />
            <img src={ptbr_audio_icon} alt="Play Portuguese Audio" className={styles.page507__icon} onClick={() => playAudio(audio9p)} />
          </h3>
          <div className={styles.dialogue}>
            <p>
              <span className={styles.speakerA}>A:</span> Excuse me, can you help me find the nearest bus stop?
              <img src={eng_audio_icon} alt="Play English Audio" className={styles.page507__icon} onClick={() => playAudio(audio10e)} />
              <img src={ptbr_audio_icon} alt="Play Portuguese Audio" className={styles.page507__icon} onClick={() => playAudio(audio10p)} />
            </p>
            <p>
              <span className={styles.speakerB}>B:</span> Of course! It’s just down this street, on your left.
              <img src={eng_audio_icon} alt="Play English Audio" className={styles.page507__icon} onClick={() => playAudio(audio11e)} />
              <img src={ptbr_audio_icon} alt="Play Portuguese Audio" className={styles.page507__icon} onClick={() => playAudio(audio11p)} />
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Pagina507;
