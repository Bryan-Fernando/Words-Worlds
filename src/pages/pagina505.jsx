import React, { useEffect, useRef } from 'react';
import styles from './pagina505.module.css';

import pagina505imagem1 from '../assets/images/dialoguespagina2_imagem1.gif';
import pagina505imagem2 from '../assets/images/dialoguespagina2_imagem2.gif';
import pagina505imagem3 from '../assets/images/dialoguespagina2_imagem3.gif';
import pagina505imagem4 from '../assets/images/dialoguespagina2_imagem4.gif';
import pagina505imagem5 from '../assets/images/dialoguespagina2_imagem5.gif';
import pagina505imagem6 from '../assets/images/dialoguespagina2_imagem6.gif';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import pg505_audio1e from '../assets/audios/pg505_audio1e.mp3';
import pg505_audio2e from '../assets/audios/pg505_audio2e.mp3';
import pg505_audio3e from '../assets/audios/pg505_audio3e.mp3';
import pg505_audio4e from '../assets/audios/pg505_audio4e.mp3';
import pg505_audio5e from '../assets/audios/pg505_audio5e.mp3';
import pg505_audio6e from '../assets/audios/pg505_audio6e.mp3';
import pg505_audio7e from '../assets/audios/pg505_audio7e.mp3';
import pg505_audio8e from '../assets/audios/pg505_audio8e.mp3';
import pg505_audio9e from '../assets/audios/pg505_audio9e.mp3';
import pg505_audio10e from '../assets/audios/pg505_audio10e.mp3';
import pg505_audio11e from '../assets/audios/pg505_audio11e.mp3';
import pg505_audio12e from '../assets/audios/pg505_audio12e.mp3';
import pg505_audio13e from '../assets/audios/pg505_audio13e.mp3';
import pg505_audio14e from '../assets/audios/pg505_audio14e.mp3';
import pg505_audio15e from '../assets/audios/pg505_audio15e.mp3';
import pg505_audio16e from '../assets/audios/pg505_audio16e.mp3';
import pg505_audio17e from '../assets/audios/pg505_audio17e.mp3';
import pg505_audio18e from '../assets/audios/pg505_audio18e.mp3';
import pg505_audio19e from '../assets/audios/pg505_audio19e.mp3';
import pg505_audio20e from '../assets/audios/pg505_audio20e.mp3';
import pg505_audio21e from '../assets/audios/pg505_audio21e.mp3';
import pg505_audio22e from '../assets/audios/pg505_audio22e.mp3';
import pg505_audio23e from '../assets/audios/pg505_audio23e.mp3';

import pg505_audio1p from '../assets/audios/pg505_audio1p.mp3';
import pg505_audio2p from '../assets/audios/pg505_audio2p.mp3';
import pg505_audio3p from '../assets/audios/pg505_audio3p.mp3';
import pg505_audio4p from '../assets/audios/pg505_audio4p.mp3';
import pg505_audio5p from '../assets/audios/pg505_audio5p.mp3';
import pg505_audio6p from '../assets/audios/pg505_audio6p.mp3';
import pg505_audio7p from '../assets/audios/pg505_audio7p.mp3';
import pg505_audio8p from '../assets/audios/pg505_audio8p.mp3';
import pg505_audio9p from '../assets/audios/pg505_audio9p.mp3';
import pg505_audio10p from '../assets/audios/pg505_audio10p.mp3';
import pg505_audio11p from '../assets/audios/pg505_audio11p.mp3';
import pg505_audio12p from '../assets/audios/pg505_audio12p.mp3';
import pg505_audio13p from '../assets/audios/pg505_audio13p.mp3';
import pg505_audio14p from '../assets/audios/pg505_audio14p.mp3';
import pg505_audio15p from '../assets/audios/pg505_audio15p.mp3';
import pg505_audio16p from '../assets/audios/pg505_audio16p.mp3';
import pg505_audio17p from '../assets/audios/pg505_audio17p.mp3';
import pg505_audio18p from '../assets/audios/pg505_audio18p.mp3';
import pg505_audio19p from '../assets/audios/pg505_audio19p.mp3';
import pg505_audio20p from '../assets/audios/pg505_audio20p.mp3';
import pg505_audio21p from '../assets/audios/pg505_audio21p.mp3';
import pg505_audio22p from '../assets/audios/pg505_audio22p.mp3';
import pg505_audio23p from '../assets/audios/pg505_audio23p.mp3';


const Pagina505 = ({ onValidar }) => {
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
    pg505_audio1e, pg505_audio2e, pg505_audio3e, pg505_audio4e, pg505_audio5e,
    pg505_audio6e, pg505_audio7e, pg505_audio8e, pg505_audio9e, pg505_audio10e,
    pg505_audio11e, pg505_audio12e, pg505_audio13e, pg505_audio14e, pg505_audio15e,
    pg505_audio16e, pg505_audio17e, pg505_audio18e, pg505_audio19e, pg505_audio20e,
    pg505_audio21e, pg505_audio22e, pg505_audio23e,

    pg505_audio1p, pg505_audio2p, pg505_audio3p, pg505_audio4p, pg505_audio5p,
    pg505_audio6p, pg505_audio7p, pg505_audio8p, pg505_audio9p, pg505_audio10p,
    pg505_audio11p, pg505_audio12p, pg505_audio13p, pg505_audio14p, pg505_audio15p,
    pg505_audio16p, pg505_audio17p, pg505_audio18p, pg505_audio19p, pg505_audio20p,
    pg505_audio21p, pg505_audio22p, pg505_audio23p,
  };

  // === Função que evita sobreposição de áudios ===
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
        {/* Card 1 */}
        <section className={styles.card}>
          <img src={pagina505imagem1} alt="Asking about Work" className={styles.card__image} />
          <h3 className={styles.card__title}>
            Asking about Work
            <img src={eng_audio_icon} alt="English audio" className={styles.page505_audio_icon} onClick={() => playAudio('pg505_audio1e')} />
            <img src={ptbr_audio_icon} alt="Portuguese audio" className={styles.page505_audio_icon} onClick={() => playAudio('pg505_audio1p')} />
          </h3>
          <div className={styles.dialogue}>
            <p>
              <span className={styles.speakerA}>A:</span> What do you do for a living?
              <img src={eng_audio_icon} alt="English audio" className={styles.page505_audio_icon} onClick={() => playAudio('pg505_audio2e')} />
              <img src={ptbr_audio_icon} alt="Portuguese audio" className={styles.page505_audio_icon} onClick={() => playAudio('pg505_audio2p')} />
            </p>
            <p>
              <span className={styles.speakerB}>B:</span> I’m a teacher. How about you?
              <img src={eng_audio_icon} alt="English audio" className={styles.page505_audio_icon} onClick={() => playAudio('pg505_audio3e')} />
              <img src={ptbr_audio_icon} alt="Portuguese audio" className={styles.page505_audio_icon} onClick={() => playAudio('pg505_audio3p')} />
            </p>
            <p>
              <span className={styles.speakerA}>A:</span> I’m an engineer.
              <img src={eng_audio_icon} alt="English audio" className={styles.page505_audio_icon} onClick={() => playAudio('pg505_audio4e')} />
              <img src={ptbr_audio_icon} alt="Portuguese audio" className={styles.page505_audio_icon} onClick={() => playAudio('pg505_audio4p')} />
            </p>
          </div>
        </section>

        {/* Card 2 */}
        <section className={styles.card}>
          <img src={pagina505imagem2} alt="Talking about the Weather" className={styles.card__image} />
          <h3 className={styles.card__title}>
            Talking about the Weather
            <img src={eng_audio_icon} alt="English audio" className={styles.page505_audio_icon} onClick={() => playAudio('pg505_audio5e')} />
            <img src={ptbr_audio_icon} alt="Portuguese audio" className={styles.page505_audio_icon} onClick={() => playAudio('pg505_audio5p')} />
          </h3>
          <div className={styles.dialogue}>
            <p>
              <span className={styles.speakerA}>A:</span> It’s a beautiful day today, isn’t it?
              <img src={eng_audio_icon} alt="English audio" className={styles.page505_audio_icon} onClick={() => playAudio('pg505_audio6e')} />
              <img src={ptbr_audio_icon} alt="Portuguese audio" className={styles.page505_audio_icon} onClick={() => playAudio('pg505_audio6p')} />
            </p>
            <p>
              <span className={styles.speakerB}>B:</span> Yes, the sun is shining and it’s warm.
              <img src={eng_audio_icon} alt="English audio" className={styles.page505_audio_icon} onClick={() => playAudio('pg505_audio7e')} />
              <img src={ptbr_audio_icon} alt="Portuguese audio" className={styles.page505_audio_icon} onClick={() => playAudio('pg505_audio7p')} />
            </p>
            <p>
              <span className={styles.speakerA}>A:</span> I’m glad it’s not raining.
              <img src={eng_audio_icon} alt="English audio" className={styles.page505_audio_icon} onClick={() => playAudio('pg505_audio8e')} />
              <img src={ptbr_audio_icon} alt="Portuguese audio" className={styles.page505_audio_icon} onClick={() => playAudio('pg505_audio8p')} />
            </p>
          </div>
        </section>

        {/* Card 3 */}
        <section className={styles.card}>
          <img src={pagina505imagem3} alt="Preferences Expressing" className={styles.card__image} />
          <h3 className={styles.card__title}>
            Preferences Expressing
            <img src={eng_audio_icon} alt="English audio" className={styles.page505_audio_icon} onClick={() => playAudio('pg505_audio9e')} />
            <img src={ptbr_audio_icon} alt="Portuguese audio" className={styles.page505_audio_icon} onClick={() => playAudio('pg505_audio9p')} />
          </h3>
          <div className={styles.dialogue}>
            <p>
              <span className={styles.speakerA}>A:</span> Do you prefer coffee or tea?
              <img src={eng_audio_icon} alt="English audio" className={styles.page505_audio_icon} onClick={() => playAudio('pg505_audio10e')} />
              <img src={ptbr_audio_icon} alt="Portuguese audio" className={styles.page505_audio_icon} onClick={() => playAudio('pg505_audio10p')} />
            </p>
            <p>
              <span className={styles.speakerB}>B:</span> I actually like both, but I’ll have some tea, please.
              <img src={eng_audio_icon} alt="English audio" className={styles.page505_audio_icon} onClick={() => playAudio('pg505_audio11e')} />
              <img src={ptbr_audio_icon} alt="Portuguese audio" className={styles.page505_audio_icon} onClick={() => playAudio('pg505_audio11p')} />
            </p>
          </div>
        </section>

        {/* Card 4 */}
        <section className={styles.card}>
          <img src={pagina505imagem4} alt="Saying Goodbye" className={styles.card__image} />
          <h3 className={styles.card__title}>
            Saying Goodbye
            <img src={eng_audio_icon} alt="English audio" className={styles.page505_audio_icon} onClick={() => playAudio('pg505_audio12e')} />
            <img src={ptbr_audio_icon} alt="Portuguese audio" className={styles.page505_audio_icon} onClick={() => playAudio('pg505_audio12p')} />
          </h3>
          <div className={styles.dialogue}>
            <p>
              <span className={styles.speakerA}>A:</span> Well, it was nice talking to you.
              <img src={eng_audio_icon} alt="English audio" className={styles.page505_audio_icon} onClick={() => playAudio('pg505_audio13e')} />
              <img src={ptbr_audio_icon} alt="Portuguese audio" className={styles.page505_audio_icon} onClick={() => playAudio('pg505_audio13p')} />
            </p>
            <p>
              <span className={styles.speakerB}>B:</span> Likewise! Have a great day.
              <img src={eng_audio_icon} alt="English audio" className={styles.page505_audio_icon} onClick={() => playAudio('pg505_audio14e')} />
              <img src={ptbr_audio_icon} alt="Portuguese audio" className={styles.page505_audio_icon} onClick={() => playAudio('pg505_audio14p')} />
            </p>
            <p>
              <span className={styles.speakerA}>A:</span> Thanks, you too!
              <img src={eng_audio_icon} alt="English audio" className={styles.page505_audio_icon} onClick={() => playAudio('pg505_audio15e')} />
              <img src={ptbr_audio_icon} alt="Portuguese audio" className={styles.page505_audio_icon} onClick={() => playAudio('pg505_audio15p')} />
            </p>
          </div>
        </section>

        {/* Card 5 */}
        <section className={styles.card}>
          <img src={pagina505imagem5} alt="Family" className={styles.card__image} />
          <h3 className={styles.card__title}>
            Family
            <img src={eng_audio_icon} alt="English audio" className={styles.page505_audio_icon} onClick={() => playAudio('pg505_audio16e')} />
            <img src={ptbr_audio_icon} alt="Portuguese audio" className={styles.page505_audio_icon} onClick={() => playAudio('pg505_audio16p')} />
          </h3>
          <div className={styles.dialogue}>
            <p>
              <span className={styles.speakerA}>A:</span> Do you have any siblings?
              <img src={eng_audio_icon} alt="English audio" className={styles.page505_audio_icon} onClick={() => playAudio('pg505_audio17e')} />
              <img src={ptbr_audio_icon} alt="Portuguese audio" className={styles.page505_audio_icon} onClick={() => playAudio('pg505_audio17p')} />
            </p>
            <p>
              <span className={styles.speakerB}>B:</span> Yes, I have a younger sister. How about you?
              <img src={eng_audio_icon} alt="English audio" className={styles.page505_audio_icon} onClick={() => playAudio('pg505_audio18e')} />
              <img src={ptbr_audio_icon} alt="Portuguese audio" className={styles.page505_audio_icon} onClick={() => playAudio('pg505_audio18p')} />
            </p>
            <p>
              <span className={styles.speakerA}>A:</span> I have two brothers.
              <img src={eng_audio_icon} alt="English audio" className={styles.page505_audio_icon} onClick={() => playAudio('pg505_audio19e')} />
              <img src={ptbr_audio_icon} alt="Portuguese audio" className={styles.page505_audio_icon} onClick={() => playAudio('pg505_audio19p')} />
            </p>
          </div>
        </section>

        {/* Card 6 */}
        <section className={styles.card}>
          <img src={pagina505imagem6} alt="Travel" className={styles.card__image} />
          <h3 className={styles.card__title}>
            Travel
            <img src={eng_audio_icon} alt="English audio" className={styles.page505_audio_icon} onClick={() => playAudio('pg505_audio20e')} />
            <img src={ptbr_audio_icon} alt="Portuguese audio" className={styles.page505_audio_icon} onClick={() => playAudio('pg505_audio20p')} />
          </h3>
          <div className={styles.dialogue}>
            <p>
              <span className={styles.speakerA}>A:</span> Have you ever been on a plane?
              <img src={eng_audio_icon} alt="English audio" className={styles.page505_audio_icon} onClick={() => playAudio('pg505_audio21e')} />
              <img src={ptbr_audio_icon} alt="Portuguese audio" className={styles.page505_audio_icon} onClick={() => playAudio('pg505_audio21p')} />
            </p>
            <p>
              <span className={styles.speakerB}>B:</span> Yes, I’ve been on a plane a few times. It’s exciting!
              <img src={eng_audio_icon} alt="English audio" className={styles.page505_audio_icon} onClick={() => playAudio('pg505_audio22e')} />
              <img src={ptbr_audio_icon} alt="Portuguese audio" className={styles.page505_audio_icon} onClick={() => playAudio('pg505_audio22p')} />
            </p>
            <p>
              <span className={styles.speakerA}>A:</span> I’ve never been on a plane. I hope to travel someday.
              <img src={eng_audio_icon} alt="English audio" className={styles.page505_audio_icon} onClick={() => playAudio('pg505_audio23e')} />
              <img src={ptbr_audio_icon} alt="Portuguese audio" className={styles.page505_audio_icon} onClick={() => playAudio('pg505_audio23p')} />
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Pagina505;
