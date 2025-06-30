import React, { useRef } from 'react';
import styles from './pagina75.module.css';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';

import pg75_audio1e from '../assets/audios/pg75_audio1e.mp3';
import pg75_audio2e from '../assets/audios/pg75_audio2e.mp3';
import pg75_audio3e from '../assets/audios/pg75_audio3e.mp3';
import pg75_audio4e from '../assets/audios/pg75_audio4e.mp3';
import pg75_audio5e from '../assets/audios/pg75_audio5e.mp3';
import pg75_audio6e from '../assets/audios/pg75_audio6e.mp3';
import pg75_audio7e from '../assets/audios/pg75_audio7e.mp3';
import pg75_audio8e from '../assets/audios/pg75_audio8e.mp3';
import pg75_audio9e from '../assets/audios/pg75_audio9e.mp3';
import pg75_audio10e from '../assets/audios/pg75_audio10e.mp3';
import pg75_audio11e from '../assets/audios/pg75_audio11e.mp3';
import pg75_audio12e from '../assets/audios/pg75_audio12e.mp3';
import pg75_audio13e from '../assets/audios/pg75_audio13e.mp3';
import pg75_audio14e from '../assets/audios/pg75_audio14e.mp3';
import pg75_audio15e from '../assets/audios/pg75_audio15e.mp3';
import pg75_audio16e from '../assets/audios/pg75_audio16e.mp3';
import pg75_audio17e from '../assets/audios/pg75_audio17e.mp3';
import pg75_audio18e from '../assets/audios/pg75_audio18e.mp3';
import pg75_audio19e from '../assets/audios/pg75_audio19e.mp3';
import pg75_audio20e from '../assets/audios/pg75_audio20e.mp3';
import pg75_audio21e from '../assets/audios/pg75_audio21e.mp3';
import pg75_audio22e from '../assets/audios/pg75_audio22e.mp3';
import pg75_audio23e from '../assets/audios/pg75_audio23e.mp3';

const audioMap = {
  pg75_audio1e,
  pg75_audio2e,
  pg75_audio3e,
  pg75_audio4e,
  pg75_audio5e,
  pg75_audio6e,
  pg75_audio7e,
  pg75_audio8e,
  pg75_audio9e,
  pg75_audio10e,
  pg75_audio11e,
  pg75_audio12e,
  pg75_audio13e,
  pg75_audio14e,
  pg75_audio15e,
  pg75_audio16e,
  pg75_audio17e,
  pg75_audio18e,
  pg75_audio19e,
  pg75_audio20e,
  pg75_audio21e,
  pg75_audio22e,
  pg75_audio23e,
};

const Pagina75 = () => {
  const currentAudioRef = useRef(null);

  const playAudio = (audioKey) => {
    if (currentAudioRef.current) {
      currentAudioRef.current.pause();
      currentAudioRef.current.currentTime = 0;
    }
    const audioSrc = audioMap[audioKey];
    if (audioSrc) {
      const audio = new Audio(audioSrc);
      currentAudioRef.current = audio;
      audio.play();
    }
  };

  return (
    <div className={styles["page75__container"]}>
      <header className={styles["page75__header"]}>
        <h1 className={styles["page75__grammar-title"]}>Grammar:</h1>
        <h2 className={styles["page75__header--en"]}>
          Common Main Verbs (Base Form) – English & Portuguese
        </h2>
        <h3 className={styles["page75__header--pt"]}>
          Verbos Principais Comuns (Forma Base) – Inglês e Português
        </h3>
        <h4 className={styles["page75__infinitive"]}>Infinitivo</h4>
      </header>

      <main className={styles["page75__main"]}>

        {/* Bloco O-P-R-S */}
        <div className={styles["page75__labels"]}>
          <span className={styles["page75__label--leftO"]}>O</span>
          <span className={styles["page75__label--centerP"]}>P</span>
          <span className={styles["page75__label--centerR"]}>R</span>
          <span className={styles["page75__label--rightS"]}>S</span>
        </div>
        <section className={styles["page75__block"]}>
          <div className={styles["page75__columns--4"]}>
            <div className={styles["page75__column"]}>
              <div className={styles["page75__row"]}>
                <span className={styles["page75__english"]}>
                  to open
                  <img
                    src={eng_audio_icon}
                    alt="Play Audio"
                    className={styles["page75__audio-icon"]}
                    onClick={() => playAudio("pg75_audio1e")}
                  />
                </span>
                <span>abrir</span>
              </div>
            </div>
            <div className={styles["page75__column"]}>
              <div className={styles["page75__row"]}>
                <span className={styles["page75__english"]}>
                  to play
                  <img
                    src={eng_audio_icon}
                    alt="Play Audio"
                    className={styles["page75__audio-icon"]}
                    onClick={() => playAudio("pg75_audio2e")}
                  />
                </span>
                <span>
                  jogar <br /> tocar (instrumento musical) <br /> brincar
                </span>
              </div>
            </div>
            <div className={styles["page75__column"]}>
              <div className={styles["page75__row"]}>
                <span className={styles["page75__english"]}>
                  to read
                  <img
                    src={eng_audio_icon}
                    alt="Play Audio"
                    className={styles["page75__audio-icon"]}
                    onClick={() => playAudio("pg75_audio3e")}
                  />
                </span>
                <span>ler</span>
              </div>
              <div className={styles["page75__row"]}>
                <span className={styles["page75__english"]}>
                  to run
                  <img
                    src={eng_audio_icon}
                    alt="Play Audio"
                    className={styles["page75__audio-icon"]}
                    onClick={() => playAudio("pg75_audio4e")}
                  />
                </span>
                <span>correr<br />administrar</span>
              </div>
            </div>
            <div className={styles["page75__column"]}>
              <div className={styles["page75__row"]}>
                <span className={styles["page75__english"]}>
                  to say
                  <img
                    src={eng_audio_icon}
                    alt="Play Audio"
                    className={styles["page75__audio-icon"]}
                    onClick={() => playAudio("pg75_audio5e")}
                  />
                </span>
                <span>dizer</span>
              </div>
              <div className={styles["page75__row"]}>
                <span className={styles["page75__english"]}>
                  to see
                  <img
                    src={eng_audio_icon}
                    alt="Play Audio"
                    className={styles["page75__audio-icon"]}
                    onClick={() => playAudio("pg75_audio6e")}
                  />
                </span>
                <span>ver</span>
              </div>
              <div className={styles["page75__row"]}>
                <span className={styles["page75__english"]}>
                  to sing
                  <img
                    src={eng_audio_icon}
                    alt="Play Audio"
                    className={styles["page75__audio-icon"]}
                    onClick={() => playAudio("pg75_audio7e")}
                  />
                </span>
                <span>cantar</span>
              </div>
              <div className={styles["page75__row"]}>
                <span className={styles["page75__english"]}>
                  to speak
                  <img
                    src={eng_audio_icon}
                    alt="Play Audio"
                    className={styles["page75__audio-icon"]}
                    onClick={() => playAudio("pg75_audio8e")}
                  />
                </span>
                <span>falar</span>
              </div>
              <div className={styles["page75__row"]}>
                <span className={styles["page75__english"]}>
                  to study
                  <img
                    src={eng_audio_icon}
                    alt="Play Audio"
                    className={styles["page75__audio-icon"]}
                    onClick={() => playAudio("pg75_audio9e")}
                  />
                </span>
                <span>estudar</span>
              </div>
            </div>
          </div>
        </section>

        {/* Bloco T-U-W */}
        <div className={styles["page75__labels"]}>
          <span className={styles["page75__label--leftT"]}>T</span>
          <span className={styles["page75__label--centerU"]}>U</span>
          <span className={styles["page75__label--rightW"]}>W</span>
        </div>
        <section className={styles["page75__block"]}>
          <div className={styles["page75__columns--3"]}>
            <div className={styles["page75__column"]}>
              {[
                ["to take", "pg75_audio10e"],
                ["to talk", "pg75_audio11e"],
                ["to teach", "pg75_audio12e"],
                ["to tell", "pg75_audio13e"],
                ["to think", "pg75_audio14e"],
                ["to travel", "pg75_audio15e"],
                ["to try", "pg75_audio16e"],
              ].map(([verb, audioKey], index) => (
                <div key={index} className={styles["page75__row"]}>
                  <span className={styles["page75__english"]}>
                    {verb}
                    <img
                      src={eng_audio_icon}
                      alt="Play Audio"
                      className={styles["page75__audio-icon"]}
                      onClick={() => playAudio(audioKey)}
                    />
                  </span>
                  <span>
                    {{
                      "to take": "pegar\nlevar\nfazer cursos\n tomar medicamentos",
                      "to talk": "conversar",
                      "to teach": "ensinar",
                      "to tell": "contar\n dizer",
                      "to think": "pensar",
                      "to travel": "viajar",
                      "to try": "tentar\n experimentar",
                    }[verb]}
                  </span>
                </div>
              ))}
            </div>
            <div className={styles["page75__column"]}>
              <div className={styles["page75__row"]}>
                <span className={styles["page75__english"]}>
                  to use
                  <img
                    src={eng_audio_icon}
                    alt="Play Audio"
                    className={styles["page75__audio-icon"]}
                    onClick={() => playAudio("pg75_audio17e")}
                  />
                </span>
                <span>usar</span>
              </div>
            </div>
            <div className={styles["page75__column"]}>
              {[
                ["to wait", "pg75_audio18e"],
                ["to walk", "pg75_audio19e"],
                ["to want", "pg75_audio20e"],
                ["to watch", "pg75_audio21e"],
                ["to work", "pg75_audio22e"],
                ["to write", "pg75_audio23e"],
              ].map(([verb, audioKey], index) => (
                <div key={index} className={styles["page75__row"]}>
                  <span className={styles["page75__english"]}>
                    {verb}
                    <img
                      src={eng_audio_icon}
                      alt="Play Audio"
                      className={styles["page75__audio-icon"]}
                      onClick={() => playAudio(audioKey)}
                    />
                  </span>
                  <span>
                    {{
                      "to wait": "esperar\naguardar",
                      "to walk": "caminhar\nandar",
                      "to want": "querer",
                      "to watch": "assistir",
                      "to work": "trabalhar\nfuncionar",
                      "to write": "escrever",
                    }[verb]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Pagina75;
