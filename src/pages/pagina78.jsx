import React, { useRef } from 'react';
import styles from './pagina78.module.css';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';

import pg78_audio1e from '../assets/audios/pg78_audio1e.mp3';
import pg78_audio2e from '../assets/audios/pg78_audio2e.mp3';
import pg78_audio3e from '../assets/audios/pg78_audio3e.mp3';
import pg78_audio4e from '../assets/audios/pg78_audio4e.mp3';
import pg78_audio5e from '../assets/audios/pg78_audio5e.mp3';
import pg78_audio6e from '../assets/audios/pg78_audio6e.mp3';
import pg78_audio7e from '../assets/audios/pg78_audio7e.mp3';
import pg78_audio8e from '../assets/audios/pg78_audio8e.mp3';
import pg78_audio9e from '../assets/audios/pg78_audio9e.mp3';
import pg78_audio10e from '../assets/audios/pg78_audio10e.mp3';
import pg78_audio11e from '../assets/audios/pg78_audio11e.mp3';
import pg78_audio12e from '../assets/audios/pg78_audio12e.mp3';
import pg78_audio13e from '../assets/audios/pg78_audio13e.mp3';
import pg78_audio14e from '../assets/audios/pg78_audio14e.mp3';
import pg78_audio15e from '../assets/audios/pg78_audio15e.mp3';
import pg78_audio16e from '../assets/audios/pg78_audio16e.mp3';
import pg78_audio17e from '../assets/audios/pg78_audio17e.mp3';
import pg78_audio18e from '../assets/audios/pg78_audio18e.mp3';
import pg78_audio19e from '../assets/audios/pg78_audio19e.mp3';
import pg78_audio20e from '../assets/audios/pg78_audio20e.mp3';
import pg78_audio21e from '../assets/audios/pg78_audio21e.mp3';
import pg78_audio22e from '../assets/audios/pg78_audio22e.mp3';
import pg78_audio23e from '../assets/audios/pg78_audio23e.mp3';
import pg78_audio24e from '../assets/audios/pg78_audio24e.mp3';
import pg78_audio25e from '../assets/audios/pg78_audio25e.mp3';
import pg78_audio26e from '../assets/audios/pg78_audio26e.mp3';
import pg78_audio27e from '../assets/audios/pg78_audio27e.mp3';
import pg78_audio28e from '../assets/audios/pg78_audio28e.mp3';
import pg78_audio29e from '../assets/audios/pg78_audio29e.mp3';
import pg78_audio30e from '../assets/audios/pg78_audio30e.mp3';
import pg78_audio31e from '../assets/audios/pg78_audio31e.mp3';
import pg78_audio32e from '../assets/audios/pg78_audio32e.mp3';
import pg78_audio33e from '../assets/audios/pg78_audio33e.mp3';
import pg78_audio34e from '../assets/audios/pg78_audio34e.mp3';

const audioMap = {
  pg78_audio1e,
  pg78_audio2e,
  pg78_audio3e,
  pg78_audio4e,
  pg78_audio5e,
  pg78_audio6e,
  pg78_audio7e,
  pg78_audio8e,
  pg78_audio9e,
  pg78_audio10e,
  pg78_audio11e,
  pg78_audio12e,
  pg78_audio13e,
  pg78_audio14e,
  pg78_audio15e,
  pg78_audio16e,
  pg78_audio17e,
  pg78_audio18e,
  pg78_audio19e,
  pg78_audio20e,
  pg78_audio21e,
  pg78_audio22e,
  pg78_audio23e,
  pg78_audio24e,
  pg78_audio25e,
  pg78_audio26e,
  pg78_audio27e,
  pg78_audio28e,
  pg78_audio29e,
  pg78_audio30e,
  pg78_audio31e,
  pg78_audio32e,
  pg78_audio33e,
  pg78_audio34e,
};

export default function Page78() {
  const currentAudioRef = useRef(null);

  const playAudio = (key) => {
    if (currentAudioRef.current) {
      currentAudioRef.current.pause();
      currentAudioRef.current.currentTime = 0;
    }
    const src = audioMap[key];
    if (src) {
      const audio = new Audio(src);
      currentAudioRef.current = audio;
      audio.play();
    }
  };

  return (
    <div className={styles["page78__container"]}>
      <header className={styles["page78__header"]}>
        <h1 className={styles["page78__title"]}>
          Regras para <span className={styles["page78__highlight-red"]}>"He, She, It"</span>
        </h1>
      </header>

      {/* Bloco 1 */}
      <div className={styles["page78__block"]}>
        <p>
          Adicionamos <span className={styles["page78__highlight-red"]}>"s"</span> à maioria dos verbos quando usamos{" "}
          <span className={styles["page78__highlight-blue"]}>"he"</span>,{" "}
          <span className={styles["page78__highlight-blue"]}>"she"</span> ou{" "}
          <span className={styles["page78__highlight-blue"]}>"it"</span>.
        </p>
        <p className={styles["page78__ex"]}><strong>Ex:</strong></p>
        <p>
          <span className={styles["page78__highlight-blue"]}>
            work
            <img src={eng_audio_icon} alt="" onClick={() => playAudio('pg78_audio1e')} className={styles["page78__audio-icon"]} />
          </span>
          {" - "}
          <span className={styles["page78__highlight-red"]}>
            works
            <img src={eng_audio_icon} alt="" onClick={() => playAudio('pg78_audio2e')} className={styles["page78__audio-icon"]} />
          </span>
          {" ; "}
          <span className={styles["page78__highlight-blue"]}>
            read
            <img src={eng_audio_icon} alt="" onClick={() => playAudio('pg78_audio3e')} className={styles["page78__audio-icon"]} />
          </span>
          {" - "}
          <span className={styles["page78__highlight-red"]}>
            reads
            <img src={eng_audio_icon} alt="" onClick={() => playAudio('pg78_audio4e')} className={styles["page78__audio-icon"]} />
          </span>
          {" ; "}
          <span className={styles["page78__highlight-blue"]}>
            eat
            <img src={eng_audio_icon} alt="" onClick={() => playAudio('pg78_audio5e')} className={styles["page78__audio-icon"]} />
          </span>
          {" - "}
          <span className={styles["page78__highlight-red"]}>
            eats
            <img src={eng_audio_icon} alt="" onClick={() => playAudio('pg78_audio6e')} className={styles["page78__audio-icon"]} />
          </span>
        </p>
      </div>

      {/* Bloco 2 */}
      <div className={styles["page78__block"]}>
        <p>
          Quando um verbo termina em <span className={styles["page78__highlight-red"]}>sh, ch, x, z, ss</span> ou <span className={styles["page78__highlight-red"]}>o</span>, adicionamos <span className={styles["page78__highlight-red"]}>-es</span>.
        </p>
        <p className={styles["page78__ex"]}><strong>Ex:</strong></p>
        <p>
          {[
            { base: "wash", audioBase: "pg78_audio7e", third: "washes", audioThird: "pg78_audio8e" },
            { base: "watch", audioBase: "pg78_audio9e", third: "watches", audioThird: "pg78_audio10e" },
            { base: "fix", audioBase: "pg78_audio11e", third: "fixes", audioThird: "pg78_audio12e" },
            { base: "buzz", audioBase: "pg78_audio13e", third: "buzzes", audioThird: "pg78_audio14e" },
            { base: "kiss", audioBase: "pg78_audio15e", third: "kisses", audioThird: "pg78_audio16e" },
            { base: "go", audioBase: "pg78_audio17e", third: "goes", audioThird: "pg78_audio18e" },
            { base: "do", audioBase: "pg78_audio19e", third: "does", audioThird: "pg78_audio20e" },
          ].map((item, i) => (
            <React.Fragment key={i}>
              <span className={styles["page78__highlight-blue"]}>
                {item.base}
                <img src={eng_audio_icon} alt="" onClick={() => playAudio(item.audioBase)} className={styles["page78__audio-icon"]} />
              </span>
              {" - "}
              <span className={styles["page78__highlight-red"]}>
                {item.third}
                <img src={eng_audio_icon} alt="" onClick={() => playAudio(item.audioThird)} className={styles["page78__audio-icon"]} />
              </span>
              {" ; "}
            </React.Fragment>
          ))}
        </p>
        <p className={styles["page78__note"]}>
          Na pronúncia, esses verbos ganham uma sílaba extra, exceto “go” e “do”.
        </p>
      </div>

      {/* Bloco 3 */}
      <div className={styles["page78__block"]}>
        <p>Adicionamos apenas <span className={styles["page78__highlight-red"]}>"s"</span> aos verbos que terminam em vogal + <span className={styles["page78__highlight-red"]}>"y"</span>.</p>
        <p className={styles["page78__ex"]}><strong>Ex:</strong></p>
        <p>
          {[
            { base: "play", audioBase: "pg78_audio21e", third: "plays", audioThird: "pg78_audio22e" },
            { base: "enjoy", audioBase: "pg78_audio23e", third: "enjoys", audioThird: "pg78_audio24e" },
          ].map((item, i) => (
            <React.Fragment key={i}>
              <span className={styles["page78__highlight-blue"]}>
                {item.base}
                <img src={eng_audio_icon} alt="" onClick={() => playAudio(item.audioBase)} className={styles["page78__audio-icon"]} />
              </span>
              {" - "}
              <span className={styles["page78__highlight-red"]}>
                {item.third}
                <img src={eng_audio_icon} alt="" onClick={() => playAudio(item.audioThird)} className={styles["page78__audio-icon"]} />
              </span>
              {" ; "}
            </React.Fragment>
          ))}
        </p>
      </div>

      {/* Bloco 4 */}
      <div className={styles["page78__block"]}>
        <p>Se o verbo termina em <span className={styles["page78__highlight-red"]}>consoante</span> + <span className={styles["page78__highlight-red"]}>"y"</span>, trocamos o <span className={styles["page78__highlight-red"]}>"y"</span> por <span className={styles["page78__highlight-red"]}>"i"</span> e adicionamos <span className={styles["page78__highlight-red"]}>"es"</span>.</p>
        <p className={styles["page78__ex"]}><strong>Ex:</strong></p>
        <p>
          {[
            { base: "study", audioBase: "pg78_audio25e", third: "studies", audioThird: "pg78_audio26e" },
            { base: "carry", audioBase: "pg78_audio27e", third: "carries", audioThird: "pg78_audio28e" },
            { base: "try", audioBase: "pg78_audio29e", third: "tries", audioThird: "pg78_audio30e" },
            { base: "dry", audioBase: "pg78_audio31e", third: "dries", audioThird: "pg78_audio32e" },
            { base: "cry", audioBase: "pg78_audio33e", third: "cries", audioThird: "pg78_audio34e" },
          ].map((item, i) => (
            <React.Fragment key={i}>
              <span className={styles["page78__highlight-blue"]}>
                {item.base}
                <img src={eng_audio_icon} alt="" onClick={() => playAudio(item.audioBase)} className={styles["page78__audio-icon"]} />
              </span>
              {" - "}
              <span className={styles["page78__highlight-red"]}>
                {item.third}
                <img src={eng_audio_icon} alt="" onClick={() => playAudio(item.audioThird)} className={styles["page78__audio-icon"]} />
              </span>
              {" ; "}
            </React.Fragment>
          ))}
        </p>
      </div>
    </div>
  );
}
