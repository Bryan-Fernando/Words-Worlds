import React, { useRef } from "react";
import styles from "./pagina263.module.css";

import audio1 from "../assets/audios/pg263_audio1e.mp3";
import audio2 from "../assets/audios/pg263_audio2e.mp3";
import audio3 from "../assets/audios/pg263_audio3e.mp3";
import audio4 from "../assets/audios/pg263_audio4e.mp3";
import audio5 from "../assets/audios/pg263_audio5e.mp3";
import audio6 from "../assets/audios/pg263_audio6e.mp3";
import audio7 from "../assets/audios/pg263_audio7e.mp3";
import audio8 from "../assets/audios/pg263_audio8e.mp3";
import audio9 from "../assets/audios/pg263_audio9e.mp3";
import audio10 from "../assets/audios/pg263_audio10e.mp3";
import audio11 from "../assets/audios/pg263_audio11e.mp3";
import audio12 from "../assets/audios/pg263_audio12e.mp3";
import audio13 from "../assets/audios/pg263_audio13e.mp3";
import audio14 from "../assets/audios/pg263_audio14e.mp3";
import audio15 from "../assets/audios/pg263_audio15e.mp3";
import audio16 from "../assets/audios/pg263_audio16e.mp3";
import audio17 from "../assets/audios/pg263_audio17e.mp3";
import audio18 from "../assets/audios/pg263_audio18e.mp3";
import audio19 from "../assets/audios/pg263_audio19e.mp3";

import eng_audio_icon from "../assets/icons/eng_audio_icon.webp";

const Pagina263 = () => {
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
    <div>
      <div className={styles.pg91Container}>
        <header className={styles.pg91Header}>
          <h1>
            <span className={styles.grammar}>Grammar</span>
            <span className={styles.dash}> - </span>
            <span>Adjectives</span>
          </h1>
        </header>
        <main className={styles.pg91Main}>
          <div className={styles.adjectivesContainer}>
            <div className={styles.ingSection}>
              <h2>
                Que terminam em <span className={styles.redText}>"ing"</span>
              </h2>
              <div className={styles.wordList}>
                <div className={styles.englishWords}>
                  <p>
                    amusing
                    <img
                      src={eng_audio_icon}
                      alt="Play amusing"
                      className={styles.page263__icon}
                      onClick={() => playAudio(audio1)}
                    />
                  </p>
                  <p>
                    annoying
                    <img
                      src={eng_audio_icon}
                      alt="Play annoying"
                      className={styles.page263__icon}
                      onClick={() => playAudio(audio2)}
                    />
                  </p>
                  <p>
                    boring
                    <img
                      src={eng_audio_icon}
                      alt="Play boring"
                      className={styles.page263__icon}
                      onClick={() => playAudio(audio3)}
                    />
                  </p>
                  <p>
                    disappointing
                    <img
                      src={eng_audio_icon}
                      alt="Play disappointing"
                      className={styles.page263__icon}
                      onClick={() => playAudio(audio4)}
                    />
                  </p>
                  <p>
                    exciting
                    <img
                      src={eng_audio_icon}
                      alt="Play exciting"
                      className={styles.page263__icon}
                      onClick={() => playAudio(audio5)}
                    />
                  </p>
                  <p>
                    interesting
                    <img
                      src={eng_audio_icon}
                      alt="Play interesting"
                      className={styles.page263__icon}
                      onClick={() => playAudio(audio6)}
                    />
                  </p>
                  <p>
                    frightening
                    <img
                      src={eng_audio_icon}
                      alt="Play frightening"
                      className={styles.page263__icon}
                      onClick={() => playAudio(audio7)}
                    />
                  </p>
                  <p>
                    tiring
                    <img
                      src={eng_audio_icon}
                      alt="Play tiring"
                      className={styles.page263__icon}
                      onClick={() => playAudio(audio8)}
                    />
                  </p>
                  <p>
                    shocking
                    <img
                      src={eng_audio_icon}
                      alt="Play shocking"
                      className={styles.page263__icon}
                      onClick={() => playAudio(audio9)}
                    />
                  </p>
                  <p>
                    surprising
                    <img
                      src={eng_audio_icon}
                      alt="Play surprising"
                      className={styles.page263__icon}
                      onClick={() => playAudio(audio10)}
                    />
                  </p>
                  <p>
                    worrying
                    <img
                      src={eng_audio_icon}
                      alt="Play worrying"
                      className={styles.page263__icon}
                      onClick={() => playAudio(audio11)}
                    />
                  </p>
                </div>
                <div className={styles.portugueseWords}>
                  <p>divertido</p>
                  <p>irritante</p>
                  <p>chato</p>
                  <p>decepcionante</p>
                  <p>excitante</p>
                  <p>interessante</p>
                  <p>assustador</p>
                  <p>cansativo</p>
                  <p>chocante</p>
                  <p>surpreendente</p>
                  <p>preocupante</p>
                </div>
              </div>
            </div>
            <div className={styles.edSection}>
              <h2>
                Que terminam em <span className={styles.redText}>"ed"</span>
              </h2>
              <div className={styles.wordList}>
                <div className={styles.englishWords}>
                  <p>
                    annoyed
                    <img
                      src={eng_audio_icon}
                      alt="Play annoyed"
                      className={styles.page263__icon}
                      onClick={() => playAudio(audio12)}
                    />
                  </p>
                  <p>
                    bored
                    <img
                      src={eng_audio_icon}
                      alt="Play bored"
                      className={styles.page263__icon}
                      onClick={() => playAudio(audio13)}
                    />
                  </p>
                  <p>
                    delighted
                    <img
                      src={eng_audio_icon}
                      alt="Play delighted"
                      className={styles.page263__icon}
                      onClick={() => playAudio(audio14)}
                    />
                  </p>
                  <p>
                    disappointed
                    <img
                      src={eng_audio_icon}
                      alt="Play disappointed"
                      className={styles.page263__icon}
                      onClick={() => playAudio(audio15)}
                    />
                  </p>
                  <p>
                    excited
                    <img
                      src={eng_audio_icon}
                      alt="Play excited"
                      className={styles.page263__icon}
                      onClick={() => playAudio(audio16)}
                    />
                  </p>
                  <p>
                    frightened
                    <img
                      src={eng_audio_icon}
                      alt="Play frightened"
                      className={styles.page263__icon}
                      onClick={() => playAudio(audio17)}
                    />
                  </p>
                  <p>
                    tired
                    <img
                      src={eng_audio_icon}
                      alt="Play tired"
                      className={styles.page263__icon}
                      onClick={() => playAudio(audio18)}
                    />
                  </p>
                  <p>
                    worried
                    <img
                      src={eng_audio_icon}
                      alt="Play worried"
                      className={styles.page263__icon}
                      onClick={() => playAudio(audio19)}
                    />
                  </p>
                </div>
                <div className={styles.portugueseWords}>
                  <p>aborrecido</p>
                  <p>aborrecido</p>
                  <p>encantado</p>
                  <p>decepcionado</p>
                  <p>excitado</p>
                  <p>assustado</p>
                  <p>cansado</p>
                  <p>preocupado</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Pagina263;
