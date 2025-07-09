import React, { useRef } from 'react';
import styles from './pagina77.module.css';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';

// IMPORTS DE ÁUDIOS (exemplo; ajuste os caminhos conforme seus arquivos)
import pg77_audio1e from '../assets/audios/pg77_audio1e.mp3';
import pg77_audio2e from '../assets/audios/pg77_audio2e.mp3';
import pg77_audio3e from '../assets/audios/pg77_audio3e.mp3';
import pg77_audio4e from '../assets/audios/pg77_audio4e.mp3';
import pg77_audio5e from '../assets/audios/pg77_audio5e.mp3';
import pg77_audio6e from '../assets/audios/pg77_audio6e.mp3';
import pg77_audio7e from '../assets/audios/pg77_audio7e.mp3';
import pg77_audio8e from '../assets/audios/pg77_audio8e.mp3';
import pg77_audio9e from '../assets/audios/pg77_audio9e.mp3';
import pg77_audio10e from '../assets/audios/pg77_audio10e.mp3';
import pg77_audio11e from '../assets/audios/pg77_audio11e.mp3';
import pg77_audio12e from '../assets/audios/pg77_audio12e.mp3';
import pg77_audio13e from '../assets/audios/pg77_audio13e.mp3';
import pg77_audio14e from '../assets/audios/pg77_audio14e.mp3';
import pg77_audio15e from '../assets/audios/pg77_audio15e.mp3';
import pg77_audio16e from '../assets/audios/pg77_audio16e.mp3';
import pg77_audio17e from '../assets/audios/pg77_audio17e.mp3';
import pg77_audio18e from '../assets/audios/pg77_audio18e.mp3';
import pg77_audio19e from '../assets/audios/pg77_audio19e.mp3';
import pg77_audio20e from '../assets/audios/pg77_audio20e.mp3';
import pg77_audio21e from '../assets/audios/pg77_audio21e.mp3';
import pg77_audio22e from '../assets/audios/pg77_audio22e.mp3';
import pg77_audio23e from '../assets/audios/pg77_audio23e.mp3';
import pg77_audio24e from '../assets/audios/pg77_audio24e.mp3';
import pg77_audio25e from '../assets/audios/pg77_audio25e.mp3';
import pg77_audio26e from '../assets/audios/pg77_audio26e.mp3';
import pg77_audio27e from '../assets/audios/pg77_audio27e.mp3';
import pg77_audio28e from '../assets/audios/pg77_audio28e.mp3';
import pg77_audio29e from '../assets/audios/pg77_audio29e.mp3';
import pg77_audio30e from '../assets/audios/pg77_audio30e.mp3';
import pg77_audio31e from '../assets/audios/pg77_audio31e.mp3';
import pg77_audio32e from '../assets/audios/pg77_audio32e.mp3';
import pg77_audio33e from '../assets/audios/pg77_audio33e.mp3';
import pg77_audio34e from '../assets/audios/pg77_audio34e.mp3';
import pg77_audio35e from '../assets/audios/pg77_audio35e.mp3';
import pg77_audio36e from '../assets/audios/pg77_audio36e.mp3';
import pg77_audio37e from '../assets/audios/pg77_audio37e.mp3';
import pg77_audio38e from '../assets/audios/pg77_audio38e.mp3';
import pg77_audio39e from '../assets/audios/pg77_audio39e.mp3';
import pg77_audio40e from '../assets/audios/pg77_audio40e.mp3';
import pg77_audio41e from '../assets/audios/pg77_audio41e.mp3';
import pg77_audio42e from '../assets/audios/pg77_audio42e.mp3';
import pg77_audio43e from '../assets/audios/pg77_audio43e.mp3';
import pg77_audio44e from '../assets/audios/pg77_audio44e.mp3';
import pg77_audio45e from '../assets/audios/pg77_audio45e.mp3';
import pg77_audio46e from '../assets/audios/pg77_audio46e.mp3';
import pg77_audio47e from '../assets/audios/pg77_audio47e.mp3';
import pg77_audio48e from '../assets/audios/pg77_audio48e.mp3';
import pg77_audio49e from '../assets/audios/pg77_audio49e.mp3';
import pg77_audio50e from '../assets/audios/pg77_audio50e.mp3';
// Mapeamento
const audioMap = {
  pg77_audio1e,
  pg77_audio2e,
  pg77_audio3e,
  pg77_audio4e,
  pg77_audio5e,
  pg77_audio6e,
  pg77_audio7e,
  pg77_audio8e,
  pg77_audio9e,
  pg77_audio10e,
  pg77_audio11e,
  pg77_audio12e,
  pg77_audio13e,
  pg77_audio14e,
  pg77_audio15e,
  pg77_audio16e,
  pg77_audio17e,
  pg77_audio18e,
  pg77_audio19e,
  pg77_audio20e,
  pg77_audio21e,
  pg77_audio22e,
  pg77_audio23e,
  pg77_audio24e,
  pg77_audio25e,
  pg77_audio26e,
  pg77_audio27e,
  pg77_audio28e,
  pg77_audio29e,
  pg77_audio30e,
  pg77_audio31e,
  pg77_audio32e,
  pg77_audio33e,
  pg77_audio34e,
  pg77_audio35e,
  pg77_audio36e,
  pg77_audio37e,
  pg77_audio38e,
  pg77_audio39e,
  pg77_audio40e,
  pg77_audio41e,
  pg77_audio42e,
  pg77_audio43e,
  pg77_audio44e,
  pg77_audio45e,
  pg77_audio46e,
  pg77_audio47e,
  pg77_audio48e,
  pg77_audio49e,
  pg77_audio50e,
};

export default function Pagina77() {
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

  const addS = (word, highlightS = true) => {
    const base = word.slice(0, -1);
    const s = word.slice(-1);
    return (
      <span>
        {base}
        {highlightS
          ? <span className={styles["page77__highlight-s"]}>{s}</span>
          : s}
      </span>
    );
  };

  const cell = (infinitive, infinitiveAudio, third, thirdAudio, isRed = false, fullHighlight = false) => (
    <div className={styles["page77__row"]}>
      <span className={isRed ? styles["page77__red-text"] : ""}>
        {infinitive}
        <img
          src={eng_audio_icon}
          alt="Play Audio"
          className={styles["page77__audio-icon"]}
          onClick={() => playAudio(infinitiveAudio)}
        />
      </span>
      <span>
        {fullHighlight
          ? <>
            <span className={styles["page77__highlight-full"]}>{third}</span>
            <img
              src={eng_audio_icon}
              alt="Play Audio"
              className={styles["page77__audio-icon"]}
              onClick={() => playAudio(thirdAudio)}
            />
          </>
          : third.includes(' ')
            ? <>
              <span className={styles["page77__highlight-full"]}>{third}</span>
              <img
                src={eng_audio_icon}
                alt="Play Audio"
                className={styles["page77__audio-icon"]}
                onClick={() => playAudio(thirdAudio)}
              />
            </>
            : <>
              {addS(third, !['teaches', 'tries', 'watches', 'studies'].includes(third))}
              <img
                src={eng_audio_icon}
                alt="Play Audio"
                className={styles["page77__audio-icon"]}
                onClick={() => playAudio(thirdAudio)}
              />
            </>
        }
      </span>
    </div>
  );

  const pronouns = (
    <div className={styles["page77__pronoun-group"]}>
      <div className={styles["page77__pronoun--left"]}>
        I <br />We - You - They
      </div>
      <div className={styles["page77__pronoun--right"]}>
        <em>He - She - It</em>
      </div>
    </div>
  );

  return (
    <div className={styles["page77__container"]}>
      <header className={styles["page77__header"]}>
        <h1 className={styles["page77__grammar-title"]}>Grammar:</h1>
        <h2 className={styles["page77__header--en"]}>Common Main Verbs</h2>
        <h3 className={styles["page77__header--pt"]}>Simple Present - Affirmative Form</h3>
      </header>

      <main className={styles["page77__main"]}>
        {/* M N O */}
        <div className={styles["page77__labels"]}>
          <span className={styles["page77__label--leftM"]}>M</span>
          <span className={styles["page77__label--centerN"]}>N</span>
          <span className={styles["page77__label--rightO"]}>O</span>
        </div>
        <section className={styles["page77__block"]}>
          <div className={styles["page77__columns--3"]}>
            <div className={styles["page77__column"]}>
              {pronouns}
              {cell("make", "pg77_audio1e", "makes", "pg77_audio2e", true)}
              {cell("meet", "pg77_audio3e", "meets", "pg77_audio4e", true)}
            </div>
            <div className={styles["page77__column"]}>
              {pronouns}
              {cell("need", "pg77_audio5e", "needs", "pg77_audio6e", true)}
            </div>
            <div className={styles["page77__column"]}>
              {pronouns}
              {cell("open", "pg77_audio7e", "opens", "pg77_audio8e", true)}
            </div>
          </div>
        </section>

        {/* P R S */}
        <div className={styles["page77__labels"]}>
          <span className={styles["page77__label--leftP"]}>P</span>
          <span className={styles["page77__label--centerR"]}>R</span>
          <span className={styles["page77__label--rightS"]}>S</span>
        </div>
        <section className={styles["page77__block"]}>
          <div className={styles["page77__columns--3"]}>
            <div className={styles["page77__column"]}>
              {pronouns}
              {cell("play", "pg77_audio9e", "plays", "pg77_audio10e", true)}
            </div>
            <div className={styles["page77__column"]}>
              {pronouns}
              {cell("read", "pg77_audio11e", "reads", "pg77_audio12e", true)}
              {cell("run", "pg77_audio13e", "runs", "pg77_audio14e", true)}
            </div>
            <div className={styles["page77__column"]}>
              {pronouns}
              {cell("say", "pg77_audio15e", "says", "pg77_audio16e", true)}
              {cell("see", "pg77_audio17e", "sees", "pg77_audio18e", true)}
              {cell("sing", "pg77_audio19e", "sings", "pg77_audio20e", true)}
              {cell("speak", "pg77_audio21e", "speaks", "pg77_audio22e", true)}
              {cell("study", "pg77_audio23e", "studies", "pg77_audio24e", true, true)}
            </div>
          </div>
        </section>

        {/* T U W */}
        <div className={styles["page77__labels"]}>
          <span className={styles["page77__label--leftT"]}>T</span>
          <span className={styles["page77__label--centerU"]}>U</span>
          <span className={styles["page77__label--rightW"]}>W</span>
        </div>
        <section className={styles["page77__block"]}>
          <div className={styles["page77__columns--3"]}>
            <div className={styles["page77__column"]}>
              {pronouns}
              {cell("take", "pg77_audio25e", "takes", "pg77_audio26e", true)}
              {cell("talk", "pg77_audio27e", "talks", "pg77_audio28e", true)}
              {cell("teach", "pg77_audio29e", "teaches", "pg77_audio30e", true, true)}
              {cell("think", "pg77_audio31e", "thinks", "pg77_audio32e", true)}
              {cell("travel", "pg77_audio33e", "travels", "pg77_audio34e", true)}
              {cell("try", "pg77_audio35e", "tries", "pg77_audio36e", true, true)}
            </div>
            <div className={styles["page77__column"]}>
              {pronouns}
              {cell("use", "pg77_audio37e", "uses", "pg77_audio38e", true)}
            </div>
            <div className={styles["page77__column"]}>
              {pronouns}
              {cell("wait", "pg77_audio39e", "waits", "pg77_audio40e", true)}
              {cell("walk", "pg77_audio41e", "walks", "pg77_audio42e", true)}
              {cell("want", "pg77_audio43e", "wants", "pg77_audio44e", true)}
              {cell("watch", "pg77_audio45e", "watches", "pg77_audio46e", true, true)}
              {cell("work", "pg77_audio47e", "works", "pg77_audio48e", true)}
              {cell("write", "pg77_audio49e", "writes", "pg77_audio50e", true)}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
