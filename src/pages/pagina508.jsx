import React, { useEffect, useRef } from 'react';
import styles from './pagina508.module.css';

import pagina508imagem1 from '../assets/images/dialoguespagina1_imagem5.gif';
import pagina508imagem2 from '../assets/images/dialoguespagina5_imagem2.gif';
import pagina508imagem3 from '../assets/images/dialoguespagina5_imagem3.gif';
import pagina508imagem4 from '../assets/images/dialoguespagina5_imagem4.gif';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import audio1e from '../assets/audios/pg508_audio1e.mp3';
import audio2e from '../assets/audios/pg508_audio2e.mp3';
import audio3e from '../assets/audios/pg508_audio3e.mp3';
import audio4e from '../assets/audios/pg508_audio4e.mp3';
import audio5e from '../assets/audios/pg508_audio5e.mp3';
import audio6e from '../assets/audios/pg508_audio6e.mp3';
import audio7e from '../assets/audios/pg508_audio7e.mp3';
import audio8e from '../assets/audios/pg508_audio8e.mp3';
import audio9e from '../assets/audios/pg508_audio9e.mp3';
import audio10e from '../assets/audios/pg508_audio10e.mp3';
import audio11e from '../assets/audios/pg508_audio11e.mp3';
import audio12e from '../assets/audios/pg508_audio12e.mp3';
import audio13e from '../assets/audios/pg508_audio13e.mp3';
import audio14e from '../assets/audios/pg508_audio14e.mp3';
import audio15e from '../assets/audios/pg508_audio15e.mp3';
import audio16e from '../assets/audios/pg508_audio16e.mp3';

import audio1p from '../assets/audios/pg508_audio1p.mp3';
import audio2p from '../assets/audios/pg508_audio2p.mp3';
import audio3p from '../assets/audios/pg508_audio3p.mp3';
import audio4p from '../assets/audios/pg508_audio4p.mp3';
import audio5p from '../assets/audios/pg508_audio5p.mp3';
import audio6p from '../assets/audios/pg508_audio6p.mp3';
import audio7p from '../assets/audios/pg508_audio7p.mp3';
import audio8p from '../assets/audios/pg508_audio8p.mp3';
import audio9p from '../assets/audios/pg508_audio9p.mp3';
import audio10p from '../assets/audios/pg508_audio10p.mp3';
import audio11p from '../assets/audios/pg508_audio11p.mp3';
import audio12p from '../assets/audios/pg508_audio12p.mp3';
import audio13p from '../assets/audios/pg508_audio13p.mp3';
import audio14p from '../assets/audios/pg508_audio14p.mp3';
import audio15p from '../assets/audios/pg508_audio15p.mp3';
import audio16p from '../assets/audios/pg508_audio16p.mp3';

const Pagina508 = ({ onValidar }) => {
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
          <img src={pagina508imagem1} alt="Making Weekend Plans" className={styles.card__image} />
          <h3 className={styles.card__title}>
            Making Weekend Plans
            <img src={eng_audio_icon} alt="Play English Audio" className={styles.page508__icon} onClick={() => playAudio(audio1e)} />
            <img src={ptbr_audio_icon} alt="Play Portuguese Audio" className={styles.page508__icon} onClick={() => playAudio(audio1p)} />
          </h3>
          <div className={styles.dialogue}>
            <p>
              <strong className={styles.nameA}>Ana:</strong> Hey, do you have any plans for the weekend?
              <img src={eng_audio_icon} alt="Play English Audio" className={styles.page508__icon} onClick={() => playAudio(audio2e)} />
              <img src={ptbr_audio_icon} alt="Play Portuguese Audio" className={styles.page508__icon} onClick={() => playAudio(audio2p)} />
            </p>
            <p className={styles.textB}>
              <strong className={styles.nameB}>Mathew:</strong> Yes, I'm actually going to watch a movie on Saturday evening. How about you?
              <img src={eng_audio_icon} alt="Play English Audio" className={styles.page508__icon} onClick={() => playAudio(audio3e)} />
              <img src={ptbr_audio_icon} alt="Play Portuguese Audio" className={styles.page508__icon} onClick={() => playAudio(audio3p)} />
            </p>
            <p>
              <strong className={styles.nameA}>Ana:</strong> Sounds fun! I'm going to visit my parents. Maybe we can catch up later?
              <img src={eng_audio_icon} alt="Play English Audio" className={styles.page508__icon} onClick={() => playAudio(audio4e)} />
              <img src={ptbr_audio_icon} alt="Play Portuguese Audio" className={styles.page508__icon} onClick={() => playAudio(audio4p)} />
            </p>
          </div>
        </section>

        <section className={styles.card}>
          <img src={pagina508imagem2} alt="Career Plans" className={styles.card__image} />
          <h3 className={styles.card__title}>
            Career Plans
            <img src={eng_audio_icon} alt="Play English Audio" className={styles.page508__icon} onClick={() => playAudio(audio5e)} />
            <img src={ptbr_audio_icon} alt="Play Portuguese Audio" className={styles.page508__icon} onClick={() => playAudio(audio5p)} />
          </h3>
          <div className={styles.dialogue}>
            <p>
              <strong className={styles.nameA}>Thomas:</strong> What are your career plans for the next few years?
              <img src={eng_audio_icon} alt="Play English Audio" className={styles.page508__icon} onClick={() => playAudio(audio6e)} />
              <img src={ptbr_audio_icon} alt="Play Portuguese Audio" className={styles.page508__icon} onClick={() => playAudio(audio6p)} />
            </p>
            <p className={styles.textB}>
              <strong className={styles.nameB}>Susan:</strong> Well, I'm going to start my own business. I've been preparing for it for a while.
              <img src={eng_audio_icon} alt="Play English Audio" className={styles.page508__icon} onClick={() => playAudio(audio7e)} />
              <img src={ptbr_audio_icon} alt="Play Portuguese Audio" className={styles.page508__icon} onClick={() => playAudio(audio7p)} />
            </p>
            <p>
              <strong className={styles.nameA}>Thomas:</strong> That's ambitious! I'm going to further my education and pursue a master's degree.
              <img src={eng_audio_icon} alt="Play English Audio" className={styles.page508__icon} onClick={() => playAudio(audio8e)} />
              <img src={ptbr_audio_icon} alt="Play Portuguese Audio" className={styles.page508__icon} onClick={() => playAudio(audio8p)} />
            </p>
          </div>
        </section>

        <section className={styles.card}>
          <img src={pagina508imagem3} alt="Travel Plans" className={styles.card__image} />
          <h3 className={styles.card__title}>
            Travel Plans
            <img src={eng_audio_icon} alt="Play English Audio" className={styles.page508__icon} onClick={() => playAudio(audio9e)} />
            <img src={ptbr_audio_icon} alt="Play Portuguese Audio" className={styles.page508__icon} onClick={() => playAudio(audio9p)} />
          </h3>
          <div className={styles.dialogue}>
            <p>
              <strong className={styles.nameA}>Karen:</strong> Have you thought about your summer vacation yet?
              <img src={eng_audio_icon} alt="Play English Audio" className={styles.page508__icon} onClick={() => playAudio(audio10e)} />
              <img src={ptbr_audio_icon} alt="Play Portuguese Audio" className={styles.page508__icon} onClick={() => playAudio(audio10p)} />
            </p>
            <p className={styles.textB}>
              <strong className={styles.nameB}>Sarah:</strong> Absolutely, I'm going to travel to Thailand with my family and go hiking. We're all excited!
              <img src={eng_audio_icon} alt="Play English Audio" className={styles.page508__icon} onClick={() => playAudio(audio11e)} />
              <img src={ptbr_audio_icon} alt="Play Portuguese Audio" className={styles.page508__icon} onClick={() => playAudio(audio11p)} />
            </p>
            <p>
              <strong className={styles.nameA}>Karen:</strong> Wow, that sounds amazing. I'm going to visit some national parks and go.
              <img src={eng_audio_icon} alt="Play English Audio" className={styles.page508__icon} onClick={() => playAudio(audio12e)} />
              <img src={ptbr_audio_icon} alt="Play Portuguese Audio" className={styles.page508__icon} onClick={() => playAudio(audio12p)} />
            </p>
          </div>
        </section>

        <section className={styles.card}>
          <img src={pagina508imagem4} alt="Moving to a New City" className={styles.card__image} />
          <h3 className={styles.card__title}>
            Moving to a New City
            <img src={eng_audio_icon} alt="Play English Audio" className={styles.page508__icon} onClick={() => playAudio(audio13e)} />
            <img src={ptbr_audio_icon} alt="Play Portuguese Audio" className={styles.page508__icon} onClick={() => playAudio(audio13p)} />
          </h3>
          <div className={styles.dialogue}>
            <p>
              <strong className={styles.nameA}>Charles:</strong> I heard you're planning to move to a new city. Is that true?
              <img src={eng_audio_icon} alt="Play English Audio" className={styles.page508__icon} onClick={() => playAudio(audio14e)} />
              <img src={ptbr_audio_icon} alt="Play Portuguese Audio" className={styles.page508__icon} onClick={() => playAudio(audio14p)} />
            </p>
            <p className={styles.textB}>
              <strong className={styles.nameB}>James:</strong> Yes, you're right. I'm going to move to New York for a job opportunity.
              <img src={eng_audio_icon} alt="Play English Audio" className={styles.page508__icon} onClick={() => playAudio(audio15e)} />
              <img src={ptbr_audio_icon} alt="Play Portuguese Audio" className={styles.page508__icon} onClick={() => playAudio(audio15p)} />
            </p>
            <p>
              <strong className={styles.nameA}>Charles:</strong> That's a big step! I'm going to help you with the moving process if you need.
              <img src={eng_audio_icon} alt="Play English Audio" className={styles.page508__icon} onClick={() => playAudio(audio16e)} />
              <img src={ptbr_audio_icon} alt="Play Portuguese Audio" className={styles.page508__icon} onClick={() => playAudio(audio16p)} />
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Pagina508;
