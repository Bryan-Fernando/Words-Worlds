import React, { useEffect, useRef } from 'react';
import styles from './pagina509.module.css';

import pagina509imagem1 from '../assets/images/dialoguespagina6_imagem1.gif';
import pagina509imagem2 from '../assets/images/dialoguespagina6_imagem2.gif';
import pagina509imagem3 from '../assets/images/dialoguespagina6_imagem3.gif';
import pagina509imagem4 from '../assets/images/dialoguespagina6_imagem4.gif';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import audio1e from '../assets/audios/pg509_audio1e.mp3';
import audio2e from '../assets/audios/pg509_audio2e.mp3';
import audio3e from '../assets/audios/pg509_audio3e.mp3';
import audio4e from '../assets/audios/pg509_audio4e.mp3';
import audio5e from '../assets/audios/pg509_audio5e.mp3';
import audio6e from '../assets/audios/pg509_audio6e.mp3';
import audio7e from '../assets/audios/pg509_audio7e.mp3';
import audio8e from '../assets/audios/pg509_audio8e.mp3';
import audio9e from '../assets/audios/pg509_audio9e.mp3';
import audio10e from '../assets/audios/pg509_audio10e.mp3';
import audio11e from '../assets/audios/pg509_audio11e.mp3';
import audio12e from '../assets/audios/pg509_audio12e.mp3';
import audio13e from '../assets/audios/pg509_audio13e.mp3';
import audio14e from '../assets/audios/pg509_audio14e.mp3';
import audio15e from '../assets/audios/pg509_audio15e.mp3';
import audio16e from '../assets/audios/pg509_audio16e.mp3';

import audio1p from '../assets/audios/pg509_audio1p.mp3';
import audio2p from '../assets/audios/pg509_audio2p.mp3';
import audio3p from '../assets/audios/pg509_audio3p.mp3';
import audio4p from '../assets/audios/pg509_audio4p.mp3';
import audio5p from '../assets/audios/pg509_audio5p.mp3';
import audio6p from '../assets/audios/pg509_audio6p.mp3';
import audio7p from '../assets/audios/pg509_audio7p.mp3';
import audio8p from '../assets/audios/pg509_audio8p.mp3';
import audio9p from '../assets/audios/pg509_audio9p.mp3';
import audio10p from '../assets/audios/pg509_audio10p.mp3';
import audio11p from '../assets/audios/pg509_audio11p.mp3';
import audio12p from '../assets/audios/pg509_audio12p.mp3';
import audio13p from '../assets/audios/pg509_audio13p.mp3';
import audio14p from '../assets/audios/pg509_audio14p.mp3';
import audio15p from '../assets/audios/pg509_audio15p.mp3';
import audio16p from '../assets/audios/pg509_audio16p.mp3';

const Pagina509 = ({ onValidar }) => {
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
          <img src={pagina509imagem1} alt="Home Renovation Plans" className={styles.card__image} />
          <h3 className={styles.card__title}>
            Home Renovation Plans
            <img src={eng_audio_icon} alt="Play English Audio" className={styles.page509__icon} onClick={() => playAudio(audio1e)} />
            <img src={ptbr_audio_icon} alt="Play Portuguese Audio" className={styles.page509__icon} onClick={() => playAudio(audio1p)} />
          </h3>
          <div className={styles.dialogue}>
            <p>
              <strong className={styles.nameA}>Richard:</strong> Your house looks great! Did you just renovate it?
              <img src={eng_audio_icon} alt="Play English Audio" className={styles.page509__icon} onClick={() => playAudio(audio2e)} />
              <img src={ptbr_audio_icon} alt="Play Portuguese Audio" className={styles.page509__icon} onClick={() => playAudio(audio2p)} />
            </p>
            <p className={styles.textB}>
              <strong className={styles.nameB}>Linda:</strong> Thank you! Yes, we're going to renovate the entire place. It's been a long time coming.
              <img src={eng_audio_icon} alt="Play English Audio" className={styles.page509__icon} onClick={() => playAudio(audio3e)} />
              <img src={ptbr_audio_icon} alt="Play Portuguese Audio" className={styles.page509__icon} onClick={() => playAudio(audio3p)} />
            </p>
            <p>
              <strong className={styles.nameA}>Richard:</strong> The results are fantastic. I'm going to redecorate my living room next month.
              <img src={eng_audio_icon} alt="Play English Audio" className={styles.page509__icon} onClick={() => playAudio(audio4e)} />
              <img src={ptbr_audio_icon} alt="Play Portuguese Audio" className={styles.page509__icon} onClick={() => playAudio(audio4p)} />
            </p>
          </div>
        </section>

        <section className={styles.card}>
          <img src={pagina509imagem2} alt="Fitness Goals" className={styles.card__image} />
          <h3 className={styles.card__title}>
            Fitness Goals
            <img src={eng_audio_icon} alt="Play English Audio" className={styles.page509__icon} onClick={() => playAudio(audio5e)} />
            <img src={ptbr_audio_icon} alt="Play Portuguese Audio" className={styles.page509__icon} onClick={() => playAudio(audio5p)} />
          </h3>
          <div className={styles.dialogue}>
            <p>
              <strong className={styles.nameA}>Patricia:</strong> You've been hitting the gym a lot lately. What's your goal?
              <img src={eng_audio_icon} alt="Play English Audio" className={styles.page509__icon} onClick={() => playAudio(audio6e)} />
              <img src={ptbr_audio_icon} alt="Play Portuguese Audio" className={styles.page509__icon} onClick={() => playAudio(audio6p)} />
            </p>
            <p className={styles.textB}>
              <strong className={styles.nameB}>Michael:</strong> I'm going to participate in a marathon next year, so I'm training hard for it.
              <img src={eng_audio_icon} alt="Play English Audio" className={styles.page509__icon} onClick={() => playAudio(audio7e)} />
              <img src={ptbr_audio_icon} alt="Play Portuguese Audio" className={styles.page509__icon} onClick={() => playAudio(audio7p)} />
            </p>
            <p>
              <strong className={styles.nameA}>Patricia:</strong> That's impressive dedication! I'm going to start yoga classes to improve my flexibility.
              <img src={eng_audio_icon} alt="Play English Audio" className={styles.page509__icon} onClick={() => playAudio(audio8e)} />
              <img src={ptbr_audio_icon} alt="Play Portuguese Audio" className={styles.page509__icon} onClick={() => playAudio(audio8p)} />
            </p>
          </div>
        </section>

        <section className={styles.card}>
          <img src={pagina509imagem3} alt="Wedding Plans" className={styles.card__image} />
          <h3 className={styles.card__title}>
            Wedding Plans
            <img src={eng_audio_icon} alt="Play English Audio" className={styles.page509__icon} onClick={() => playAudio(audio9e)} />
            <img src={ptbr_audio_icon} alt="Play Portuguese Audio" className={styles.page509__icon} onClick={() => playAudio(audio9p)} />
          </h3>
          <div className={styles.dialogue}>
            <p>
              <strong className={styles.nameA}>Amanda:</strong> I heard you're engaged! Congratulations! Have you set a wedding date yet?
              <img src={eng_audio_icon} alt="Play English Audio" className={styles.page509__icon} onClick={() => playAudio(audio10e)} />
              <img src={ptbr_audio_icon} alt="Play Portuguese Audio" className={styles.page509__icon} onClick={() => playAudio(audio10p)} />
            </p>
            <p className={styles.textB}>
              <strong className={styles.nameB}>Andrew:</strong> Thank you! Yes, we're going to get married in October next year.
              <img src={eng_audio_icon} alt="Play English Audio" className={styles.page509__icon} onClick={() => playAudio(audio11e)} />
              <img src={ptbr_audio_icon} alt="Play Portuguese Audio" className={styles.page509__icon} onClick={() => playAudio(audio11p)} />
            </p>
            <p>
              <strong className={styles.nameA}>Amanda:</strong> That gives you plenty of time to plan. I'm going to help with the preparations if you need me.
              <img src={eng_audio_icon} alt="Play English Audio" className={styles.page509__icon} onClick={() => playAudio(audio12e)} />
              <img src={ptbr_audio_icon} alt="Play Portuguese Audio" className={styles.page509__icon} onClick={() => playAudio(audio12p)} />
            </p>
          </div>
        </section>

        <section className={styles.card}>
          <img src={pagina509imagem4} alt="Buying a New Car" className={styles.card__image} />
          <h3 className={styles.card__title}>
            Buying a New Car
            <img src={eng_audio_icon} alt="Play English Audio" className={styles.page509__icon} onClick={() => playAudio(audio13e)} />
            <img src={ptbr_audio_icon} alt="Play Portuguese Audio" className={styles.page509__icon} onClick={() => playAudio(audio13p)} />
          </h3>
          <div className={styles.dialogue}>
            <p>
              <strong className={styles.nameA}>Kenneth:</strong> Are you getting a new car?
              <img src={eng_audio_icon} alt="Play English Audio" className={styles.page509__icon} onClick={() => playAudio(audio14e)} />
              <img src={ptbr_audio_icon} alt="Play Portuguese Audio" className={styles.page509__icon} onClick={() => playAudio(audio14p)} />
            </p>
            <p className={styles.textB}>
              <strong className={styles.nameB}>Steven:</strong> Yes, I'm going to buy a new car for my birthday. This one's been giving me trouble.
              <img src={eng_audio_icon} alt="Play English Audio" className={styles.page509__icon} onClick={() => playAudio(audio15e)} />
              <img src={ptbr_audio_icon} alt="Play Portuguese Audio" className={styles.page509__icon} onClick={() => playAudio(audio15p)} />
            </p>
            <p>
              <strong className={styles.nameA}>Kenneth:</strong> Smart choice! I'm going to start saving up for a new car too.
              <img src={eng_audio_icon} alt="Play English Audio" className={styles.page509__icon} onClick={() => playAudio(audio16e)} />
              <img src={ptbr_audio_icon} alt="Play Portuguese Audio" className={styles.page509__icon} onClick={() => playAudio(audio16p)} />
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Pagina509;
