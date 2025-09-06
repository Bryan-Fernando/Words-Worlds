import React, { useEffect, useRef } from 'react';
import styles from './pagina511.module.css';

import pagina511imagem1 from '../assets/images/dialoguespagina8_imagem1.gif';
import pagina511imagem2 from '../assets/images/dialoguespagina8_imagem2.gif';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import audio1e from '../assets/audios/pg511_audio1e.mp3';
import audio2e from '../assets/audios/pg511_audio2e.mp3';
import audio3e from '../assets/audios/pg511_audio3e.mp3';
import audio4e from '../assets/audios/pg511_audio4e.mp3';
import audio5e from '../assets/audios/pg511_audio5e.mp3';
import audio6e from '../assets/audios/pg511_audio6e.mp3';
import audio7e from '../assets/audios/pg511_audio7e.mp3';
import audio8e from '../assets/audios/pg511_audio8e.mp3';
import audio9e from '../assets/audios/pg511_audio9e.mp3';
import audio10e from '../assets/audios/pg511_audio10e.mp3';
import audio11e from '../assets/audios/pg511_audio11e.mp3';
import audio12e from '../assets/audios/pg511_audio12e.mp3';
import audio13e from '../assets/audios/pg511_audio13e.mp3';
import audio14e from '../assets/audios/pg511_audio14e.mp3';

import audio1p from '../assets/audios/pg511_audio1p.mp3';
import audio2p from '../assets/audios/pg511_audio2p.mp3';
import audio3p from '../assets/audios/pg511_audio3p.mp3';
import audio4p from '../assets/audios/pg511_audio4p.mp3';
import audio5p from '../assets/audios/pg511_audio5p.mp3';
import audio6p from '../assets/audios/pg511_audio6p.mp3';
import audio7p from '../assets/audios/pg511_audio7p.mp3';
import audio8p from '../assets/audios/pg511_audio8p.mp3';
import audio9p from '../assets/audios/pg511_audio9p.mp3';
import audio10p from '../assets/audios/pg511_audio10p.mp3';
import audio11p from '../assets/audios/pg511_audio11p.mp3';
import audio12p from '../assets/audios/pg511_audio12p.mp3';
import audio13p from '../assets/audios/pg511_audio13p.mp3';
import audio14p from '../assets/audios/pg511_audio14p.mp3';

const Pagina511 = ({ onValidar }) => {
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
          <div className={styles.badge}>
            Talking about Science Experiments
            <img src={eng_audio_icon} alt="Play English Audio" className={styles.page511__icon} onClick={() => playAudio(audio1e)} />
            <img src={ptbr_audio_icon} alt="Play Portuguese Audio" className={styles.page511__icon} onClick={() => playAudio(audio1p)} />
          </div>
          <img src={pagina511imagem1} alt="Talking about Science Experiments" className={styles.card__image} />

          <div className={styles.dialogue}>
            <p className={`${styles.bubble} ${styles.bubbleA}`}>
              <strong>Joseph:</strong> Did you enjoy the science experiment today?
              <img src={eng_audio_icon} alt="Play English Audio" className={styles.page511__icon} onClick={() => playAudio(audio2e)} />
              <img src={ptbr_audio_icon} alt="Play Portuguese Audio" className={styles.page511__icon} onClick={() => playAudio(audio2p)} />
            </p>
            <p className={`${styles.bubble} ${styles.bubbleB}`}>
              <strong>Willian:</strong> Yeah, it was cool! Mixing colors to make new ones was fun.
              <img src={eng_audio_icon} alt="Play English Audio" className={styles.page511__icon} onClick={() => playAudio(audio3e)} />
              <img src={ptbr_audio_icon} alt="Play Portuguese Audio" className={styles.page511__icon} onClick={() => playAudio(audio3p)} />
            </p>
            <p className={`${styles.bubble} ${styles.bubbleA}`}>
              <strong>Joseph:</strong> I liked it too. What's your favorite science topic?
              <img src={eng_audio_icon} alt="Play English Audio" className={styles.page511__icon} onClick={() => playAudio(audio4e)} />
              <img src={ptbr_audio_icon} alt="Play Portuguese Audio" className={styles.page511__icon} onClick={() => playAudio(audio4p)} />
            </p>
            <p className={`${styles.bubble} ${styles.bubbleB}`}>
              <strong>Willian:</strong> I really like learning about animals and their habitats.
              <img src={eng_audio_icon} alt="Play English Audio" className={styles.page511__icon} onClick={() => playAudio(audio5e)} />
              <img src={ptbr_audio_icon} alt="Play Portuguese Audio" className={styles.page511__icon} onClick={() => playAudio(audio5p)} />
            </p>
            <p className={`${styles.bubble} ${styles.bubbleA}`}>
              <strong>Joseph:</strong> Me too! Next week, we're going to study the solar system.
              <img src={eng_audio_icon} alt="Play English Audio" className={styles.page511__icon} onClick={() => playAudio(audio6e)} />
              <img src={ptbr_audio_icon} alt="Play Portuguese Audio" className={styles.page511__icon} onClick={() => playAudio(audio6p)} />
            </p>
            <p className={`${styles.bubble} ${styles.bubbleB}`}>
              <strong>Willian:</strong> Awesome, I can't wait.
              <img src={eng_audio_icon} alt="Play English Audio" className={styles.page511__icon} onClick={() => playAudio(audio7e)} />
              <img src={ptbr_audio_icon} alt="Play Portuguese Audio" className={styles.page511__icon} onClick={() => playAudio(audio7p)} />
            </p>
          </div>
        </section>

        <section className={styles.card}>
          <div className={styles.badge}>
            Planning for History Project
            <img src={eng_audio_icon} alt="Play English Audio" className={styles.page511__icon} onClick={() => playAudio(audio8e)} />
            <img src={ptbr_audio_icon} alt="Play Portuguese Audio" className={styles.page511__icon} onClick={() => playAudio(audio8p)} />
          </div>
          <img src={pagina511imagem2} alt="Planning for History Project" className={styles.card__image} />

          <div className={styles.dialogue}>
            <p className={`${styles.bubble} ${styles.bubbleA}`}>
              <strong>Karen:</strong> Have you heard about the history project?
              <img src={eng_audio_icon} alt="Play English Audio" className={styles.page511__icon} onClick={() => playAudio(audio9e)} />
              <img src={ptbr_audio_icon} alt="Play Portuguese Audio" className={styles.page511__icon} onClick={() => playAudio(audio9p)} />
            </p>
            <p className={`${styles.bubble} ${styles.bubbleB}`}>
              <strong>Lisa:</strong> Yes, we have to research a famous person from the past.
              <img src={eng_audio_icon} alt="Play English Audio" className={styles.page511__icon} onClick={() => playAudio(audio10e)} />
              <img src={ptbr_audio_icon} alt="Play Portuguese Audio" className={styles.page511__icon} onClick={() => playAudio(audio10p)} />
            </p>
            <p className={`${styles.bubble} ${styles.bubbleA}`}>
              <strong>Karen:</strong> I'm thinking of choosing Leonardo da Vinci. How about you?
              <img src={eng_audio_icon} alt="Play English Audio" className={styles.page511__icon} onClick={() => playAudio(audio11e)} />
              <img src={ptbr_audio_icon} alt="Play Portuguese Audio" className={styles.page511__icon} onClick={() => playAudio(audio11p)} />
            </p>
            <p className={`${styles.bubble} ${styles.bubbleB}`}>
              <strong>Lisa:</strong> I'm interested in Amelia Earhart. Let's share our findings!
              <img src={eng_audio_icon} alt="Play English Audio" className={styles.page511__icon} onClick={() => playAudio(audio12e)} />
              <img src={ptbr_audio_icon} alt="Play Portuguese Audio" className={styles.page511__icon} onClick={() => playAudio(audio12p)} />
            </p>
            <p className={`${styles.bubble} ${styles.bubbleA}`}>
              <strong>Karen:</strong> That's a great idea. We can make a presentation together.
              <img src={eng_audio_icon} alt="Play English Audio" className={styles.page511__icon} onClick={() => playAudio(audio13e)} />
              <img src={ptbr_audio_icon} alt="Play Portuguese Audio" className={styles.page511__icon} onClick={() => playAudio(audio13p)} />
            </p>
            <p className={`${styles.bubble} ${styles.bubbleB}`}>
              <strong>Lisa:</strong> Perfect, let's start gathering information.
              <img src={eng_audio_icon} alt="Play English Audio" className={styles.page511__icon} onClick={() => playAudio(audio14e)} />
              <img src={ptbr_audio_icon} alt="Play Portuguese Audio" className={styles.page511__icon} onClick={() => playAudio(audio14p)} />
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Pagina511;
