import React, { useEffect, useRef } from 'react';
import styles from './pagina504.module.css';

import pagina504imagem1 from '../assets/images/dialoguespagina1_imagem1.gif';
import pagina504imagem2 from '../assets/images/dialoguespagina1_imagem2.gif';
import pagina504imagem3 from '../assets/images/dialoguespagina76_imagem3.gif';
import pagina504imagem4 from '../assets/images/dialoguespagina1_imagem4.gif';
import pagina504imagem5 from '../assets/images/dialoguespagina1_imagem5.gif';
import pagina504imagem6 from '../assets/images/dialoguespagina1_imagem6.gif';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';
import campainha from '../assets/icons/campainha.png';

import bell from '../assets/audios/bell.mp3';

// ======= IMPORTS DOS ÁUDIOS =======
import pg504_audio1e from '../assets/audios/pg504_audio1e.mp3';
import pg504_audio2e from '../assets/audios/pg504_audio2e.mp3';
import pg504_audio3e from '../assets/audios/pg504_audio3e.mp3';
import pg504_audio4e from '../assets/audios/pg504_audio4e.mp3';
import pg504_audio5e from '../assets/audios/pg504_audio5e.mp3';
import pg504_audio6e from '../assets/audios/pg504_audio6e.mp3';
import pg504_audio7e from '../assets/audios/pg504_audio7e.mp3';
import pg504_audio8e from '../assets/audios/pg504_audio8e.mp3';
import pg504_audio9e from '../assets/audios/pg504_audio9e.mp3';
import pg504_audio10e from '../assets/audios/pg504_audio10e.mp3';
import pg504_audio11e from '../assets/audios/pg504_audio11e.mp3';
import pg504_audio12e from '../assets/audios/pg504_audio12e.mp3';
import pg504_audio13e from '../assets/audios/pg504_audio13e.mp3';
import pg504_audio14e from '../assets/audios/pg504_audio14e.mp3';
import pg504_audio15e from '../assets/audios/pg504_audio15e.mp3';
import pg504_audio16e from '../assets/audios/pg504_audio16e.mp3';
import pg504_audio17e from '../assets/audios/pg504_audio17e.mp3';
import pg504_audio18e from '../assets/audios/pg504_audio18e.mp3';
import pg504_audio19e from '../assets/audios/pg504_audio19e.mp3';
import pg504_audio20e from '../assets/audios/pg504_audio20e.mp3';
import pg504_audio21e from '../assets/audios/pg504_audio21e.mp3';
import pg504_audio22e from '../assets/audios/pg504_audio22e.mp3';
import pg504_audio23e from '../assets/audios/pg504_audio23e.mp3';
import pg504_audio24e from '../assets/audios/pg504_audio24e.mp3';
import pg504_audio25e from '../assets/audios/pg504_audio25e.mp3';

import pg504_audio1p from '../assets/audios/pg504_audio1p.mp3';
import pg504_audio2p from '../assets/audios/pg504_audio2p.mp3';
import pg504_audio3p from '../assets/audios/pg504_audio3p.mp3';
import pg504_audio4p from '../assets/audios/pg504_audio4p.mp3';
import pg504_audio5p from '../assets/audios/pg504_audio5p.mp3';
import pg504_audio6p from '../assets/audios/pg504_audio6p.mp3';
import pg504_audio7p from '../assets/audios/pg504_audio7p.mp3';
import pg504_audio8p from '../assets/audios/pg504_audio8p.mp3';
import pg504_audio9p from '../assets/audios/pg504_audio9p.mp3';
import pg504_audio10p from '../assets/audios/pg504_audio10p.mp3';
import pg504_audio11p from '../assets/audios/pg504_audio11p.mp3';
import pg504_audio12p from '../assets/audios/pg504_audio12p.mp3';
import pg504_audio13p from '../assets/audios/pg504_audio13p.mp3';
import pg504_audio14p from '../assets/audios/pg504_audio14p.mp3';
import pg504_audio15p from '../assets/audios/pg504_audio15p.mp3';
import pg504_audio16p from '../assets/audios/pg504_audio16p.mp3';
import pg504_audio17p from '../assets/audios/pg504_audio17p.mp3';
import pg504_audio18p from '../assets/audios/pg504_audio18p.mp3';
import pg504_audio19p from '../assets/audios/pg504_audio19p.mp3';
import pg504_audio20p from '../assets/audios/pg504_audio20p.mp3';
import pg504_audio21p from '../assets/audios/pg504_audio21p.mp3';
import pg504_audio22p from '../assets/audios/pg504_audio22p.mp3';
import pg504_audio23p from '../assets/audios/pg504_audio23p.mp3';
import pg504_audio24p from '../assets/audios/pg504_audio24p.mp3';
import pg504_audio25p from '../assets/audios/pg504_audio25p.mp3';

const Pagina504 = ({ onValidar }) => {
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
    bell,

    pg504_audio1e, pg504_audio2e, pg504_audio3e, pg504_audio4e, pg504_audio5e,
    pg504_audio6e, pg504_audio7e, pg504_audio8e, pg504_audio9e, pg504_audio10e,
    pg504_audio11e, pg504_audio12e, pg504_audio13e, pg504_audio14e, pg504_audio15e,
    pg504_audio16e, pg504_audio17e, pg504_audio18e, pg504_audio19e, pg504_audio20e,
    pg504_audio21e, pg504_audio22e, pg504_audio23e, pg504_audio24e, pg504_audio25e,

    pg504_audio1p, pg504_audio2p, pg504_audio3p, pg504_audio4p, pg504_audio5p,
    pg504_audio6p, pg504_audio7p, pg504_audio8p, pg504_audio9p, pg504_audio10p,
    pg504_audio11p, pg504_audio12p, pg504_audio13p, pg504_audio14p, pg504_audio15p,
    pg504_audio16p, pg504_audio17p, pg504_audio18p, pg504_audio19p, pg504_audio20p,
    pg504_audio21p, pg504_audio22p, pg504_audio23p, pg504_audio24p, pg504_audio25p,
  };

  // === SUA FUNÇÃO (reutilizada exatamente como pediu) ===
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
        {/* ===== Card 1 ===== */}
        <section className={styles.card}>
          <img src={pagina504imagem1} alt="People greeting each other" className={styles.card__image} />
          <h3 className={styles.card__title}>
            Greeting Someone
            <img src={eng_audio_icon} alt="English audio" className={styles.page504_audio_icon} onClick={() => playAudio('pg504_audio1e')} />
            <img src={ptbr_audio_icon} alt="Portuguese audio" className={styles.page504_audio_icon} onClick={() => playAudio('pg504_audio1p')} />
          </h3>
          <div className={styles.dialogue}>
            <p>
              <span className={styles.speakerA}>A:</span> Hi!
              <img src={eng_audio_icon} alt="English audio" className={styles.page504_audio_icon} onClick={() => playAudio('pg504_audio2e')} />
              <img src={ptbr_audio_icon} alt="Portuguese audio" className={styles.page504_audio_icon} onClick={() => playAudio('pg504_audio2p')} />
            </p>
            <p>
              <span className={styles.speakerB}>B:</span> Hello! How are you?
              <img src={eng_audio_icon} alt="English audio" className={styles.page504_audio_icon} onClick={() => playAudio('pg504_audio3e')} />
              <img src={ptbr_audio_icon} alt="Portuguese audio" className={styles.page504_audio_icon} onClick={() => playAudio('pg504_audio3p')} />
            </p>
            <p>
              <span className={styles.speakerA}>A:</span> I’m good, thank you. And you?
              <img src={eng_audio_icon} alt="English audio" className={styles.page504_audio_icon} onClick={() => playAudio('pg504_audio4e')} />
              <img src={ptbr_audio_icon} alt="Portuguese audio" className={styles.page504_audio_icon} onClick={() => playAudio('pg504_audio4p')} />
            </p>
            <p>
              <span className={styles.speakerB}>B:</span> I’m doing well, thanks.
              <img src={eng_audio_icon} alt="English audio" className={styles.page504_audio_icon} onClick={() => playAudio('pg504_audio5e')} />
              <img src={ptbr_audio_icon} alt="Portuguese audio" className={styles.page504_audio_icon} onClick={() => playAudio('pg504_audio5p')} />
            </p>
          </div>
        </section>

        {/* ===== Card 2 ===== */}
        <section className={styles.card}>
          <img src={pagina504imagem2} alt="Introducing at the office" className={styles.card__image} />
          <h3 className={styles.card__title}>
            Introducing Yourself
            <img src={eng_audio_icon} alt="English audio" className={styles.page504_audio_icon} onClick={() => playAudio('pg504_audio6e')} />
            <img src={ptbr_audio_icon} alt="Portuguese audio" className={styles.page504_audio_icon} onClick={() => playAudio('pg504_audio6p')} />
          </h3>
          <div className={styles.dialogue}>
            <p>
              <span className={styles.speakerA}>A:</span> Hi, I’m Thomas
              <img src={eng_audio_icon} alt="English audio" className={styles.page504_audio_icon} onClick={() => playAudio('pg504_audio7e')} />
              <img src={ptbr_audio_icon} alt="Portuguese audio" className={styles.page504_audio_icon} onClick={() => playAudio('pg504_audio7p')} />
            </p>
            <p>
              <span className={styles.speakerB}>B:</span> Nice to meet you, Thomas. I’m Elizabeth.
              <img src={eng_audio_icon} alt="English audio" className={styles.page504_audio_icon} onClick={() => playAudio('pg504_audio8e')} />
              <img src={ptbr_audio_icon} alt="Portuguese audio" className={styles.page504_audio_icon} onClick={() => playAudio('pg504_audio8p')} />
            </p>
          </div>
        </section>

        {/* ===== Card 3 ===== */}
        <section className={styles.card}>
          <img src={pagina504imagem3} alt="Friends at a table" className={styles.card__image} />
          <h3 className={styles.card__title}>
            Greetings
            <img src={eng_audio_icon} alt="English audio" className={styles.page504_audio_icon} onClick={() => playAudio('pg504_audio9e')} />
            <img src={ptbr_audio_icon} alt="Portuguese audio" className={styles.page504_audio_icon} onClick={() => playAudio('pg504_audio9p')} />
          </h3>
          <div className={styles.dialogue}>
            <p>
              <span className={styles.speakerAmini}>a</span> Hi!
              <img src={eng_audio_icon} alt="English audio" className={styles.page504_audio_icon} onClick={() => playAudio('pg504_audio10e')} />
              <img src={ptbr_audio_icon} alt="Portuguese audio" className={styles.page504_audio_icon} onClick={() => playAudio('pg504_audio10p')} />
            </p>
            <p>
              <span className={styles.speakerBmini}>b</span> Hello! How are you?
              <img src={eng_audio_icon} alt="English audio" className={styles.page504_audio_icon} onClick={() => playAudio('pg504_audio11e')} />
              <img src={ptbr_audio_icon} alt="Portuguese audio" className={styles.page504_audio_icon} onClick={() => playAudio('pg504_audio11p')} />
            </p>
            <p>
              <span className={styles.speakerAmini}>a</span> I’m good, thank you. <br /> And you?
              <img src={eng_audio_icon} alt="English audio" className={styles.page504_audio_icon} onClick={() => playAudio('pg504_audio12e')} />
              <img src={ptbr_audio_icon} alt="Portuguese audio" className={styles.page504_audio_icon} onClick={() => playAudio('pg504_audio12p')} />
            </p>
            <p>
              <span className={styles.speakerBmini}>b</span> I’m doing well, thanks.
              <img src={eng_audio_icon} alt="English audio" className={styles.page504_audio_icon} onClick={() => playAudio('pg504_audio13e')} />
              <img src={ptbr_audio_icon} alt="Portuguese audio" className={styles.page504_audio_icon} onClick={() => playAudio('pg504_audio13p')} />
            </p>
          </div>
        </section>

        {/* ===== Card 4 ===== */}
        <section className={styles.card}>
          <img src={pagina504imagem4} alt="Ordering food at a counter" className={styles.card__image} />
          <h3 className={styles.card__title}>
            Ordering Food
            <img src={eng_audio_icon} alt="English audio" className={styles.page504_audio_icon} onClick={() => playAudio('pg504_audio14e')} />
            <img src={ptbr_audio_icon} alt="Portuguese audio" className={styles.page504_audio_icon} onClick={() => playAudio('pg504_audio14p')} />
          </h3>
          <div className={styles.dialogue}>
            <p>
              <span className={styles.speakerA}>A:</span> I’d like a cheeseburger and a small fries, please.
              <img src={eng_audio_icon} alt="English audio" className={styles.page504_audio_icon} onClick={() => playAudio('pg504_audio15e')} />
              <img src={ptbr_audio_icon} alt="Portuguese audio" className={styles.page504_audio_icon} onClick={() => playAudio('pg504_audio15p')} />
            </p>
            <p>
              <span className={styles.speakerB}>B:</span> Sure thing. Anything to drink?
              <img src={eng_audio_icon} alt="English audio" className={styles.page504_audio_icon} onClick={() => playAudio('pg504_audio16e')} />
              <img src={ptbr_audio_icon} alt="Portuguese audio" className={styles.page504_audio_icon} onClick={() => playAudio('pg504_audio16p')} />
            </p>
            <p>
              <span className={styles.speakerA}>A:</span> Yes, a soda, please.
              <img src={eng_audio_icon} alt="English audio" className={styles.page504_audio_icon} onClick={() => playAudio('pg504_audio17e')} />
              <img src={ptbr_audio_icon} alt="Portuguese audio" className={styles.page504_audio_icon} onClick={() => playAudio('pg504_audio17p')} />
            </p>
          </div>
        </section>

        {/* ===== Card 5 ===== */}
        <section className={styles.card}>
          <img src={pagina504imagem5} alt="Two people chatting on the street" className={styles.card__image} />
          <h3 className={styles.card__title}>
            Making Small Talk
            <img src={eng_audio_icon} alt="English audio" className={styles.page504_audio_icon} onClick={() => playAudio('pg504_audio18e')} />
            <img src={ptbr_audio_icon} alt="Portuguese audio" className={styles.page504_audio_icon} onClick={() => playAudio('pg504_audio18p')} />
          </h3>
          <div className={styles.dialogue}>
            <p>
              <span className={styles.speakerA}>A:</span> So, have you been to this city before?
              <img src={eng_audio_icon} alt="English audio" className={styles.page504_audio_icon} onClick={() => playAudio('pg504_audio19e')} />
              <img src={ptbr_audio_icon} alt="Portuguese audio" className={styles.page504_audio_icon} onClick={() => playAudio('pg504_audio19p')} />
            </p>
            <p>
              <span className={styles.speakerB}>B:</span> No, it’s my first time here. How about you?
              <img src={eng_audio_icon} alt="English audio" className={styles.page504_audio_icon} onClick={() => playAudio('pg504_audio20e')} />
              <img src={ptbr_audio_icon} alt="Portuguese audio" className={styles.page504_audio_icon} onClick={() => playAudio('pg504_audio20p')} />
            </p>
            <p>
              <span className={styles.speakerA}>A:</span> I’ve been here a few times. There’s a lot to see.
              <img src={eng_audio_icon} alt="English audio" className={styles.page504_audio_icon} onClick={() => playAudio('pg504_audio21e')} />
              <img src={ptbr_audio_icon} alt="Portuguese audio" className={styles.page504_audio_icon} onClick={() => playAudio('pg504_audio21p')} />
            </p>
          </div>
        </section>

        {/* ===== Card 6 ===== */}
        <section className={styles.card}>
          <img src={pagina504imagem6} alt="Friends talking at a park" className={styles.card__image} />
          <h3 className={styles.card__title}>
            Talking about Hobbies
            <img src={eng_audio_icon} alt="English audio" className={styles.page504_audio_icon} onClick={() => playAudio('pg504_audio22e')} />
            <img src={ptbr_audio_icon} alt="Portuguese audio" className={styles.page504_audio_icon} onClick={() => playAudio('pg504_audio22p')} />
          </h3>
          <div className={styles.dialogue}>
            <p>
              <span className={styles.speakerA}>A:</span> What do you like to do in your free time?
              <img src={eng_audio_icon} alt="English audio" className={styles.page504_audio_icon} onClick={() => playAudio('pg504_audio23e')} />
              <img src={ptbr_audio_icon} alt="Portuguese audio" className={styles.page504_audio_icon} onClick={() => playAudio('pg504_audio23p')} />
            </p>
            <p>
              <span className={styles.speakerB}>B:</span> I enjoy reading books and playing the guitar. How about you?
              <img src={eng_audio_icon} alt="English audio" className={styles.page504_audio_icon} onClick={() => playAudio('pg504_audio24e')} />
              <img src={ptbr_audio_icon} alt="Portuguese audio" className={styles.page504_audio_icon} onClick={() => playAudio('pg504_audio24p')} />
            </p>
            <p>
              <span className={styles.speakerA}>A:</span> I like painting and going for walks.
              <img src={eng_audio_icon} alt="English audio" className={styles.page504_audio_icon} onClick={() => playAudio('pg504_audio25e')} />
              <img src={ptbr_audio_icon} alt="Portuguese audio" className={styles.page504_audio_icon} onClick={() => playAudio('pg504_audio25p')} />
            </p>
          </div>
        </section>
      </main>

      {/* Nota / Rodapé */}
      <footer className={styles.page__footer}>
        <div className={styles.note__banner}>
          <img
            className={styles.page504_audio_icon}
            onClick={() => playAudio('bell')}
            src={campainha}
            alt="Play bell"
          />
          <span className={styles.note__text}>
            <strong>NOTE:</strong> Listening Comprehension and Pronunciation
          </span>
        </div>

        <div className={styles.note__box}>
          Now, take a moment to focus on the dialogue(s). Pay attention to the way the speakers
          express themselves, and try to practice mimicking their pronunciation.
        </div>
      </footer>
    </div>
  );
};

export default Pagina504;
