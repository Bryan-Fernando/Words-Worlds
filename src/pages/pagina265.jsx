import React, { useRef } from 'react';
import styles from './pagina265.module.css';

import audio1 from '../assets/audios/pg265_audio1e.mp3';
import audio2 from '../assets/audios/pg265_audio2e.mp3';
import audio3 from '../assets/audios/pg265_audio3e.mp3';
import audio4 from '../assets/audios/pg265_audio4e.mp3';
import audio5 from '../assets/audios/pg265_audio5e.mp3';
import audio6 from '../assets/audios/pg265_audio6e.mp3';
import audio7 from '../assets/audios/pg265_audio7e.mp3';
import audio8 from '../assets/audios/pg265_audio8e.mp3';
import audio9 from '../assets/audios/pg265_audio9e.mp3';
import audio10 from '../assets/audios/pg265_audio10e.mp3';
import audio11 from '../assets/audios/pg265_audio11e.mp3';
import audio12 from '../assets/audios/pg265_audio12e.mp3';
import audio13 from '../assets/audios/pg265_audio13e.mp3';
import audio14 from '../assets/audios/pg265_audio14e.mp3';
import audio15 from '../assets/audios/pg265_audio15e.mp3';
import audio16 from '../assets/audios/pg265_audio16e.mp3';
import audio17 from '../assets/audios/pg265_audio17e.mp3';
import audio18 from '../assets/audios/pg265_audio18e.mp3';
import audio19 from '../assets/audios/pg265_audio19e.mp3';
import audio20 from '../assets/audios/pg265_audio20e.mp3';
import audio21 from '../assets/audios/pg265_audio21e.mp3';
import audio22 from '../assets/audios/pg265_audio22e.mp3';
import audio23 from '../assets/audios/pg265_audio23e.mp3';
import audio24 from '../assets/audios/pg265_audio24e.mp3';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';

const Pagina265 = () => {
  const audioRef = useRef(null);

  const playAudio = (file) => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    const a = new Audio(file);
    audioRef.current = a;
    a.play();
  };

  return (
    <div className={styles.page265__container}>
      <div className={styles.page265__pageContainer}>
        <div className={styles.page265__columnContainer}>
          <header className={styles.page265__header}>
            <h1 className={styles.page265__headerTitle}>
              <span className={styles.page265__grammarText}>Grammar</span>
              <span className={styles.page265__dashText}> - </span>
              <span className={styles.page265__adjectivesText}>Adjectives</span>
            </h1>
          </header>

          <main className={styles.page265__mainContent}>
            <section className={styles.page265__adjectivesSection}>
              <div className={styles.page265__columnContainer}>
                <section className={styles.page265__grammarSection}>
                  <div className={styles.page265__grammarHeader}>
                    <h2 className={styles.page265__grammarTitle}>Short Adjectives</h2>
                  </div>
                  <div className={styles.page265__grammarContent}>
                    <div className={styles.page265__grammarRow}>
                      <span>English</span>
                      <span>Português</span>
                    </div>
                  </div>
                </section>

                <div className={styles.page265__tableContent}>
                  <div className={styles.page265__row}>
                    <span>
                      tall
                      <img src={eng_audio_icon} alt="Play tall" className={styles.page265__icon} onClick={() => playAudio(audio1)} />
                    </span>
                    <span>alto</span>
                  </div>
                  <div className={styles.page265__row}>
                    <span>
                      short
                      <img src={eng_audio_icon} alt="Play short" className={styles.page265__icon} onClick={() => playAudio(audio2)} />
                    </span>
                    <span>baixo / curto</span>
                  </div>
                  <div className={styles.page265__row}>
                    <span>
                      big
                      <img src={eng_audio_icon} alt="Play big" className={styles.page265__icon} onClick={() => playAudio(audio3)} />
                    </span>
                    <span>grande</span>
                  </div>
                  <div className={styles.page265__row}>
                    <span>
                      small
                      <img src={eng_audio_icon} alt="Play small" className={styles.page265__icon} onClick={() => playAudio(audio4)} />
                    </span>
                    <span>pequeno</span>
                  </div>
                  <div className={styles.page265__row}>
                    <span>
                      fast
                      <img src={eng_audio_icon} alt="Play fast" className={styles.page265__icon} onClick={() => playAudio(audio5)} />
                    </span>
                    <span>rápido</span>
                  </div>
                  <div className={styles.page265__row}>
                    <span>
                      slow
                      <img src={eng_audio_icon} alt="Play slow" className={styles.page265__icon} onClick={() => playAudio(audio6)} />
                    </span>
                    <span>devagar / lento</span>
                  </div>
                  <div className={styles.page265__row}>
                    <span>
                      old
                      <img src={eng_audio_icon} alt="Play old" className={styles.page265__icon} onClick={() => playAudio(audio7)} />
                    </span>
                    <span>velho</span>
                  </div>
                  <div className={styles.page265__row}>
                    <span>
                      young
                      <img src={eng_audio_icon} alt="Play young" className={styles.page265__icon} onClick={() => playAudio(audio8)} />
                    </span>
                    <span>jovem</span>
                  </div>
                  <div className={styles.page265__row}>
                    <span>
                      easy
                      <img src={eng_audio_icon} alt="Play easy" className={styles.page265__icon} onClick={() => playAudio(audio9)} />
                    </span>
                    <span>fácil</span>
                  </div>
                  <div className={styles.page265__row}>
                    <span>
                      fun
                      <img src={eng_audio_icon} alt="Play fun" className={styles.page265__icon} onClick={() => playAudio(audio10)} />
                    </span>
                    <span>engraçado</span>
                  </div>
                  <div className={styles.page265__row}>
                    <span>
                      nice
                      <img src={eng_audio_icon} alt="Play nice" className={styles.page265__icon} onClick={() => playAudio(audio11)} />
                    </span>
                    <span>legal / gentil</span>
                  </div>
                  <div className={styles.page265__row}>
                    <span>
                      late
                      <img src={eng_audio_icon} alt="Play late" className={styles.page265__icon} onClick={() => playAudio(audio12)} />
                    </span>
                    <span>atrasado / tarde</span>
                  </div>
                </div>
              </div>

              <div className={styles.page265__columnContainer}>
                <section className={styles.page265__grammarSection}>
                  <div className={styles.page265__grammarHeader}>
                    <h2 className={styles.page265__grammarTitle}>Long Adjectives</h2>
                  </div>
                  <div className={styles.page265__grammarContent}>
                    <div className={styles.page265__grammarRow}>
                      <span>English</span>
                      <span>Português</span>
                    </div>
                  </div>
                </section>

                <div className={styles.page265__tableContent}>
                  <div className={styles.page265__row}>
                    <span>
                      beautiful
                      <img src={eng_audio_icon} alt="Play beautiful" className={styles.page265__icon} onClick={() => playAudio(audio13)} />
                    </span>
                    <span>bonito / lindo</span>
                  </div>
                  <div className={styles.page265__row}>
                    <span>
                      intelligent
                      <img src={eng_audio_icon} alt="Play intelligent" className={styles.page265__icon} onClick={() => playAudio(audio14)} />
                    </span>
                    <span>inteligente</span>
                  </div>
                  <div className={styles.page265__row}>
                    <span>
                      expensive
                      <img src={eng_audio_icon} alt="Play expensive" className={styles.page265__icon} onClick={() => playAudio(audio15)} />
                    </span>
                    <span>caro</span>
                  </div>
                  <div className={styles.page265__row}>
                    <span>
                      interesting
                      <img src={eng_audio_icon} alt="Play interesting" className={styles.page265__icon} onClick={() => playAudio(audio16)} />
                    </span>
                    <span>interessante</span>
                  </div>
                  <div className={styles.page265__row}>
                    <span>
                      comfortable
                      <img src={eng_audio_icon} alt="Play comfortable" className={styles.page265__icon} onClick={() => playAudio(audio17)} />
                    </span>
                    <span>confortável</span>
                  </div>
                  <div className={styles.page265__row}>
                    <span>
                      difficult
                      <img src={eng_audio_icon} alt="Play difficult" className={styles.page265__icon} onClick={() => playAudio(audio18)} />
                    </span>
                    <span>difícil</span>
                  </div>
                  <div className={styles.page265__row}>
                    <span>
                      dangerous
                      <img src={eng_audio_icon} alt="Play dangerous" className={styles.page265__icon} onClick={() => playAudio(audio19)} />
                    </span>
                    <span>perigoso</span>
                  </div>
                  <div className={styles.page265__row}>
                    <span>
                      important
                      <img src={eng_audio_icon} alt="Play important" className={styles.page265__icon} onClick={() => playAudio(audio20)} />
                    </span>
                    <span>importante</span>
                  </div>
                  <div className={styles.page265__row}>
                    <span>
                      popular
                      <img src={eng_audio_icon} alt="Play popular" className={styles.page265__icon} onClick={() => playAudio(audio21)} />
                    </span>
                    <span>popular</span>
                  </div>
                  <div className={styles.page265__row}>
                    <span>
                      delicious
                      <img src={eng_audio_icon} alt="Play delicious" className={styles.page265__icon} onClick={() => playAudio(audio22)} />
                    </span>
                    <span>delicioso</span>
                  </div>
                  <div className={styles.page265__row}>
                    <span>
                      generous
                      <img src={eng_audio_icon} alt="Play generous" className={styles.page265__icon} onClick={() => playAudio(audio23)} />
                    </span>
                    <span>generoso</span>
                  </div>
                  <div className={styles.page265__row}>
                    <span>
                      fabulous
                      <img src={eng_audio_icon} alt="Play fabulous" className={styles.page265__icon} onClick={() => playAudio(audio24)} />
                    </span>
                    <span>fabuloso</span>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Pagina265;
