import React, { useEffect, useRef } from 'react';
import styles from './pagina506.module.css';

import pagina506imagem1 from '../assets/images/dialoguespagina3_imagem1.gif';
import pagina506imagem3 from '../assets/images/dialoguespagina3_imagem3.gif';
import pagina506imagem4 from '../assets/images/dialoguespagina3_imagem4.gif';
import pagina506imagem5 from '../assets/images/dialoguespagina3_imagem5.gif';
import pagina506imagem6 from '../assets/images/dialoguespagina3_imagem6.gif';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import pg506_audio1e from '../assets/audios/pg506_audio1e.mp3';
import pg506_audio2e from '../assets/audios/pg506_audio2e.mp3';
import pg506_audio3e from '../assets/audios/pg506_audio3e.mp3';
import pg506_audio4e from '../assets/audios/pg506_audio4e.mp3';
import pg506_audio5e from '../assets/audios/pg506_audio5e.mp3';
import pg506_audio6e from '../assets/audios/pg506_audio6e.mp3';
import pg506_audio7e from '../assets/audios/pg506_audio7e.mp3';
import pg506_audio8e from '../assets/audios/pg506_audio8e.mp3';
import pg506_audio9e from '../assets/audios/pg506_audio9e.mp3';
import pg506_audio10e from '../assets/audios/pg506_audio10e.mp3';
import pg506_audio11e from '../assets/audios/pg506_audio11e.mp3';
import pg506_audio12e from '../assets/audios/pg506_audio12e.mp3';
import pg506_audio13e from '../assets/audios/pg506_audio13e.mp3';
import pg506_audio14e from '../assets/audios/pg506_audio14e.mp3';
import pg506_audio15e from '../assets/audios/pg506_audio15e.mp3';
import pg506_audio16e from '../assets/audios/pg506_audio16e.mp3';
import pg506_audio17e from '../assets/audios/pg506_audio17e.mp3';
import pg506_audio18e from '../assets/audios/pg506_audio18e.mp3';
import pg506_audio19e from '../assets/audios/pg506_audio19e.mp3';
import pg506_audio20e from '../assets/audios/pg506_audio20e.mp3';
import pg506_audio21e from '../assets/audios/pg506_audio21e.mp3';
import pg506_audio22e from '../assets/audios/pg506_audio22e.mp3';
import pg506_audio23e from '../assets/audios/pg506_audio23e.mp3';
import pg506_audio24e from '../assets/audios/pg506_audio24e.mp3';

import pg506_audio1p from '../assets/audios/pg506_audio1p.mp3';
import pg506_audio2p from '../assets/audios/pg506_audio2p.mp3';
import pg506_audio3p from '../assets/audios/pg506_audio3p.mp3';
import pg506_audio4p from '../assets/audios/pg506_audio4p.mp3';
import pg506_audio5p from '../assets/audios/pg506_audio5p.mp3';
import pg506_audio6p from '../assets/audios/pg506_audio6p.mp3';
import pg506_audio7p from '../assets/audios/pg506_audio7p.mp3';
import pg506_audio8p from '../assets/audios/pg506_audio8p.mp3';
import pg506_audio9p from '../assets/audios/pg506_audio9p.mp3';
import pg506_audio10p from '../assets/audios/pg506_audio10p.mp3';
import pg506_audio11p from '../assets/audios/pg506_audio11p.mp3';
import pg506_audio12p from '../assets/audios/pg506_audio12p.mp3';
import pg506_audio13p from '../assets/audios/pg506_audio13p.mp3';
import pg506_audio14p from '../assets/audios/pg506_audio14p.mp3';
import pg506_audio15p from '../assets/audios/pg506_audio15p.mp3';
import pg506_audio16p from '../assets/audios/pg506_audio16p.mp3';
import pg506_audio17p from '../assets/audios/pg506_audio17p.mp3';
import pg506_audio18p from '../assets/audios/pg506_audio18p.mp3';
import pg506_audio19p from '../assets/audios/pg506_audio19p.mp3';
import pg506_audio20p from '../assets/audios/pg506_audio20p.mp3';
import pg506_audio21p from '../assets/audios/pg506_audio21p.mp3';
import pg506_audio22p from '../assets/audios/pg506_audio22p.mp3';
import pg506_audio23p from '../assets/audios/pg506_audio23p.mp3';
import pg506_audio24p from '../assets/audios/pg506_audio24p.mp3';

const Pagina506 = ({ onValidar }) => {
  const currentAudioRef = useRef(null);

  useEffect(() => {
    if (onValidar) onValidar(true);
    return () => {
      if (currentAudioRef.current) {
        currentAudioRef.current.pause();
        currentAudioRef.current.src = "";
      }
    };
  }, [onValidar]);

  const audioMap = {
    pg506_audio1e, pg506_audio2e, pg506_audio3e, pg506_audio4e, pg506_audio5e,
    pg506_audio6e, pg506_audio7e, pg506_audio8e, pg506_audio9e, pg506_audio10e,
    pg506_audio11e, pg506_audio12e, pg506_audio13e, pg506_audio14e, pg506_audio15e,
    pg506_audio16e, pg506_audio17e, pg506_audio18e, pg506_audio19e, pg506_audio20e,
    pg506_audio21e, pg506_audio22e, pg506_audio23e, pg506_audio24e,

    pg506_audio1p, pg506_audio2p, pg506_audio3p, pg506_audio4p, pg506_audio5p,
    pg506_audio6p, pg506_audio7p, pg506_audio8p, pg506_audio9p, pg506_audio10p,
    pg506_audio11p, pg506_audio12p, pg506_audio13p, pg506_audio14p, pg506_audio15p,
    pg506_audio16p, pg506_audio17p, pg506_audio18p, pg506_audio19p, pg506_audio20p,
    pg506_audio21p, pg506_audio22p, pg506_audio23p, pg506_audio24p,
  };

  const playAudio = (audioKey) => {
    const audioFile = audioMap[audioKey];
    if (!audioFile) return;

    if (currentAudioRef.current) {
      currentAudioRef.current.pause();
      currentAudioRef.current.currentTime = 0;
    }

    const audio = new Audio(audioFile);
    currentAudioRef.current = audio;
    audio.play();
  };

  return (
    <div className={styles.page__container}>
      <header className={styles.page__header}>
        <h1 className={styles.page__title}>Dialogues</h1>
        <h2 className={styles.page__subtitle}>Real-life Conversation</h2>
      </header>

      <main className={styles.page__grid}>
        <section className={styles.card}>
          <img src={pagina506imagem1} alt="Movies and TV shows" className={styles.card__image} />
          <h3 className={styles.card__title}>
            Movies and TV shows
            <img src={eng_audio_icon} alt="" className={styles.page506_audio_icon} onClick={() => playAudio('pg506_audio1e')} />
            <img src={ptbr_audio_icon} alt="" className={styles.page506_audio_icon} onClick={() => playAudio('pg506_audio1p')} />
          </h3>
          <div className={styles.dialogue}>
            <p>
              <span className={styles.speakerA}>A:</span> What kind of movies do you like?
              <img src={eng_audio_icon} alt="" className={styles.page506_audio_icon} onClick={() => playAudio('pg506_audio2e')} />
              <img src={ptbr_audio_icon} alt="" className={styles.page506_audio_icon} onClick={() => playAudio('pg506_audio2p')} />
            </p>
            <p>
              <span className={styles.speakerB}>B:</span> I enjoy watching comedies and action movies. How about you?
              <img src={eng_audio_icon} alt="" className={styles.page506_audio_icon} onClick={() => playAudio('pg506_audio3e')} />
              <img src={ptbr_audio_icon} alt="" className={styles.page506_audio_icon} onClick={() => playAudio('pg506_audio3p')} />
            </p>
            <p>
              <span className={styles.speakerA}>A:</span> I like romantic movies and documentaries.
              <img src={eng_audio_icon} alt="" className={styles.page506_audio_icon} onClick={() => playAudio('pg506_audio4e')} />
              <img src={ptbr_audio_icon} alt="" className={styles.page506_audio_icon} onClick={() => playAudio('pg506_audio4p')} />
            </p>
          </div>
        </section>

        <section className={styles.card}>
          <img src="" alt="Sports" className={styles.card__image} />
          <h3 className={styles.card__title}>
            Sports
            <img src={eng_audio_icon} alt="" className={styles.page506_audio_icon} onClick={() => playAudio('pg506_audio5e')} />
            <img src={ptbr_audio_icon} alt="" className={styles.page506_audio_icon} onClick={() => playAudio('pg506_audio5p')} />
          </h3>
          <div className={styles.dialogue}>
            <p>
              <span className={styles.speakerA}>A:</span> Are you a sports fan?
              <img src={eng_audio_icon} alt="" className={styles.page506_audio_icon} onClick={() => playAudio('pg506_audio6e')} />
              <img src={ptbr_audio_icon} alt="" className={styles.page506_audio_icon} onClick={() => playAudio('pg506_audio6p')} />
            </p>
            <p>
              <span className={styles.speakerB}>B:</span> Yes, I really enjoy watching soccer. How about you?
              <img src={eng_audio_icon} alt="" className={styles.page506_audio_icon} onClick={() => playAudio('pg506_audio7e')} />
              <img src={ptbr_audio_icon} alt="" className={styles.page506_audio_icon} onClick={() => playAudio('pg506_audio7p')} />
            </p>
            <p>
              <span className={styles.speakerA}>A:</span> I like playing basketball and going for runs.
              <img src={eng_audio_icon} alt="" className={styles.page506_audio_icon} onClick={() => playAudio('pg506_audio8e')} />
              <img src={ptbr_audio_icon} alt="" className={styles.page506_audio_icon} onClick={() => playAudio('pg506_audio8p')} />
            </p>
          </div>
        </section>

        <section className={styles.card}>
          <img src={pagina506imagem3} alt="Weekend Plans" className={styles.card__image} />
          <h3 className={styles.card__title}>
            Weekend Plans
            <img src={eng_audio_icon} alt="" className={styles.page506_audio_icon} onClick={() => playAudio('pg506_audio9e')} />
            <img src={ptbr_audio_icon} alt="" className={styles.page506_audio_icon} onClick={() => playAudio('pg506_audio9p')} />
          </h3>
          <div className={styles.dialogue}>
            <p>
              <span className={styles.speakerA}>A:</span> Any plans for the weekend?
              <img src={eng_audio_icon} alt="" className={styles.page506_audio_icon} onClick={() => playAudio('pg506_audio10e')} />
              <img src={ptbr_audio_icon} alt="" className={styles.page506_audio_icon} onClick={() => playAudio('pg506_audio10p')} />
            </p>
            <p>
              <span className={styles.speakerB}>B:</span> I’m thinking of going to the park. What about you?
              <img src={eng_audio_icon} alt="" className={styles.page506_audio_icon} onClick={() => playAudio('pg506_audio11e')} />
              <img src={ptbr_audio_icon} alt="" className={styles.page506_audio_icon} onClick={() => playAudio('pg506_audio11p')} />
            </p>
            <p>
              <span className={styles.speakerA}>A:</span> I might visit a museum on Saturday and relax at home on Sunday.
              <img src={eng_audio_icon} alt="" className={styles.page506_audio_icon} onClick={() => playAudio('pg506_audio12e')} />
              <img src={ptbr_audio_icon} alt="" className={styles.page506_audio_icon} onClick={() => playAudio('pg506_audio12p')} />
            </p>
          </div>
        </section>

        <section className={styles.card}>
          <img src={pagina506imagem4} alt="Music" className={styles.card__image} />
          <h3 className={styles.card__title}>
            Music
            <img src={eng_audio_icon} alt="" className={styles.page506_audio_icon} onClick={() => playAudio('pg506_audio13e')} />
            <img src={ptbr_audio_icon} alt="" className={styles.page506_audio_icon} onClick={() => playAudio('pg506_audio13p')} />
          </h3>
          <div className={styles.dialogue}>
            <p>
              <span className={styles.speakerA}>A:</span> What kind of music do you listen to?
              <img src={eng_audio_icon} alt="" className={styles.page506_audio_icon} onClick={() => playAudio('pg506_audio14e')} />
              <img src={ptbr_audio_icon} alt="" className={styles.page506_audio_icon} onClick={() => playAudio('pg506_audio14p')} />
            </p>
            <p>
              <span className={styles.speakerB}>B:</span> I like pop and rock music. How about you?
              <img src={eng_audio_icon} alt="" className={styles.page506_audio_icon} onClick={() => playAudio('pg506_audio15e')} />
              <img src={ptbr_audio_icon} alt="" className={styles.page506_audio_icon} onClick={() => playAudio('pg506_audio15p')} />
            </p>
            <p>
              <span className={styles.speakerA}>A:</span> I’m a fan of classical music and some hip-hop.
              <img src={eng_audio_icon} alt="" className={styles.page506_audio_icon} onClick={() => playAudio('pg506_audio16e')} />
              <img src={ptbr_audio_icon} alt="" className={styles.page506_audio_icon} onClick={() => playAudio('pg506_audio16p')} />
            </p>
          </div>
        </section>

        <section className={styles.card}>
          <img src={pagina506imagem5} alt="Food and Cooking" className={styles.card__image} />
          <h3 className={styles.card__title}>
            Food and Cooking
            <img src={eng_audio_icon} alt="" className={styles.page506_audio_icon} onClick={() => playAudio('pg506_audio17e')} />
            <img src={ptbr_audio_icon} alt="" className={styles.page506_audio_icon} onClick={() => playAudio('pg506_audio17p')} />
          </h3>
          <div className={styles.dialogue}>
            <p>
              <span className={styles.speakerA}>A:</span> Do you enjoy cooking?
              <img src={eng_audio_icon} alt="" className={styles.page506_audio_icon} onClick={() => playAudio('pg506_audio18e')} />
              <img src={ptbr_audio_icon} alt="" className={styles.page506_audio_icon} onClick={() => playAudio('pg506_audio18p')} />
            </p>
            <p>
              <span className={styles.speakerB}>B:</span> Yes, I love trying out new recipes. How about you?
              <img src={eng_audio_icon} alt="" className={styles.page506_audio_icon} onClick={() => playAudio('pg506_audio19e')} />
              <img src={ptbr_audio_icon} alt="" className={styles.page506_audio_icon} onClick={() => playAudio('pg506_audio19p')} />
            </p>
            <p>
              <span className={styles.speakerA}>A:</span> I’m not a great cook, but I enjoy baking sometimes.
              <img src={eng_audio_icon} alt="" className={styles.page506_audio_icon} onClick={() => playAudio('pg506_audio20e')} />
              <img src={ptbr_audio_icon} alt="" className={styles.page506_audio_icon} onClick={() => playAudio('pg506_audio20p')} />
            </p>
          </div>
        </section>

        <section className={styles.card}>
          <img src={pagina506imagem6} alt="Travel Experiences" className={styles.card__image} />
          <h3 className={styles.card__title}>
            Travel Experiences
            <img src={eng_audio_icon} alt="" className={styles.page506_audio_icon} onClick={() => playAudio('pg506_audio21e')} />
            <img src={ptbr_audio_icon} alt="" className={styles.page506_audio_icon} onClick={() => playAudio('pg506_audio21p')} />
          </h3>
          <div className={styles.dialogue}>
            <p>
              <span className={styles.speakerA}>A:</span> Have you traveled to any interesting places recently?
              <img src={eng_audio_icon} alt="" className={styles.page506_audio_icon} onClick={() => playAudio('pg506_audio22e')} />
              <img src={ptbr_audio_icon} alt="" className={styles.page506_audio_icon} onClick={() => playAudio('pg506_audio22p')} />
            </p>
            <p>
              <span className={styles.speakerB}>B:</span> Last year, I went to Paris. It was amazing. How about you?
              <img src={eng_audio_icon} alt="" className={styles.page506_audio_icon} onClick={() => playAudio('pg506_audio23e')} />
              <img src={ptbr_audio_icon} alt="" className={styles.page506_audio_icon} onClick={() => playAudio('pg506_audio23p')} />
            </p>
            <p>
              <span className={styles.speakerA}>A:</span> I haven’t traveled much, but I went to a beautiful beach last summer.
              <img src={eng_audio_icon} alt="" className={styles.page506_audio_icon} onClick={() => playAudio('pg506_audio24e')} />
              <img src={ptbr_audio_icon} alt="" className={styles.page506_audio_icon} onClick={() => playAudio('pg506_audio24p')} />
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Pagina506;
