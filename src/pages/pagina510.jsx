import React, { useEffect, useRef } from 'react';
import styles from './pagina510.module.css';

import pagina510imagem1 from '../assets/images/dialoguespagina7_imagem1.gif';
import pagina510imagem2 from '../assets/images/dialoguespagina7_imagem2.gif';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import audio1e from '../assets/audios/pg510_audio1e.mp3';
import audio2e from '../assets/audios/pg510_audio2e.mp3';
import audio3e from '../assets/audios/pg510_audio3e.mp3';
import audio4e from '../assets/audios/pg510_audio4e.mp3';
import audio5e from '../assets/audios/pg510_audio5e.mp3';
import audio6e from '../assets/audios/pg510_audio6e.mp3';
import audio7e from '../assets/audios/pg510_audio7e.mp3';
import audio8e from '../assets/audios/pg510_audio8e.mp3';

import audio1p from '../assets/audios/pg510_audio1p.mp3';
import audio2p from '../assets/audios/pg510_audio2p.mp3';
import audio3p from '../assets/audios/pg510_audio3p.mp3';
import audio4p from '../assets/audios/pg510_audio4p.mp3';
import audio5p from '../assets/audios/pg510_audio5p.mp3';
import audio6p from '../assets/audios/pg510_audio6p.mp3';
import audio7p from '../assets/audios/pg510_audio7p.mp3';
import audio8p from '../assets/audios/pg510_audio8p.mp3';

const Pagina510 = ({ onValidar }) => {
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
          <img src={pagina510imagem1} alt="Cooking Plans" className={styles.card__image} />
          <h3 className={styles.card__title}>
            Cooking Plans
            <img src={eng_audio_icon} alt="Play English Audio" className={styles.page510__icon} onClick={() => playAudio(audio1e)} />
            <img src={ptbr_audio_icon} alt="Play Portuguese Audio" className={styles.page510__icon} onClick={() => playAudio(audio1p)} />
          </h3>
          <div className={styles.dialogue}>
            <p>
              <strong className={styles.nameA}>Emily:</strong> What’s on the menu for tonight? It smells delicious!
              <img src={eng_audio_icon} alt="Play English Audio" className={styles.page510__icon} onClick={() => playAudio(audio2e)} />
              <img src={ptbr_audio_icon} alt="Play Portuguese Audio" className={styles.page510__icon} onClick={() => playAudio(audio2p)} />
            </p>
            <p className={styles.textB}>
              <strong className={styles.nameB}>Anthony:</strong> Thanks! I’m going to make a special homemade lasagna for dinner.
              <img src={eng_audio_icon} alt="Play English Audio" className={styles.page510__icon} onClick={() => playAudio(audio3e)} />
              <img src={ptbr_audio_icon} alt="Play Portuguese Audio" className={styles.page510__icon} onClick={() => playAudio(audio3p)} />
            </p>
            <p>
              <strong className={styles.nameA}>Emily:</strong> I can’t wait to taste it. I’m going to try out a new dessert recipe.
              <img src={eng_audio_icon} alt="Play English Audio" className={styles.page510__icon} onClick={() => playAudio(audio4e)} />
              <img src={ptbr_audio_icon} alt="Play Portuguese Audio" className={styles.page510__icon} onClick={() => playAudio(audio4p)} />
            </p>
          </div>
        </section>

        <section className={styles.card}>
          <img src={pagina510imagem2} alt="Learning a Musical Instrument" className={styles.card__image} />
          <h3 className={styles.card__title}>
            Learning a Musical Instrument
            <img src={eng_audio_icon} alt="Play English Audio" className={styles.page510__icon} onClick={() => playAudio(audio5e)} />
            <img src={ptbr_audio_icon} alt="Play Portuguese Audio" className={styles.page510__icon} onClick={() => playAudio(audio5p)} />
          </h3>
          <div className={styles.dialogue}>
            <p>
              <strong className={styles.nameA}>Brian:</strong> You’ve got a guitar? Are you planning to learn how to play it?
              <img src={eng_audio_icon} alt="Play English Audio" className={styles.page510__icon} onClick={() => playAudio(audio6e)} />
              <img src={ptbr_audio_icon} alt="Play Portuguese Audio" className={styles.page510__icon} onClick={() => playAudio(audio6p)} />
            </p>
            <p className={styles.textB}>
              <strong className={styles.nameB}>Laura:</strong> Absolutely! I’m going to take guitar lessons and hopefully play some songs soon.
              <img src={eng_audio_icon} alt="Play English Audio" className={styles.page510__icon} onClick={() => playAudio(audio7e)} />
              <img src={ptbr_audio_icon} alt="Play Portuguese Audio" className={styles.page510__icon} onClick={() => playAudio(audio7p)} />
            </p>
            <p>
              <strong className={styles.nameA}>Brian:</strong> That’s exciting! I’m going to dust off my old keyboard and start practicing again.
              <img src={eng_audio_icon} alt="Play English Audio" className={styles.page510__icon} onClick={() => playAudio(audio8e)} />
              <img src={ptbr_audio_icon} alt="Play Portuguese Audio" className={styles.page510__icon} onClick={() => playAudio(audio8p)} />
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Pagina510;
