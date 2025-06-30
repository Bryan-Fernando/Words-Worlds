import React, { useRef } from 'react';
import styles from './pagina76.module.css';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';

// Áudios dos pronomes
import global_I from '../assets/audios/global_I.mp3';
import global_we from '../assets/audios/global_we.mp3';
import global_you from '../assets/audios/global_you.mp3';
import global_they from '../assets/audios/global_they.mp3';
import global_he from '../assets/audios/global_he.mp3';
import global_she from '../assets/audios/global_she.mp3';
import global_it from '../assets/audios/global_it.mp3';

import pg76_audio1e from '../assets/audios/pg76_audio1e.mp3';
import pg76_audio2e from '../assets/audios/pg76_audio2e.mp3';
import pg76_audio3e from '../assets/audios/pg76_audio3e.mp3';
import pg76_audio4e from '../assets/audios/pg76_audio4e.mp3';
import pg76_audio5e from '../assets/audios/pg76_audio5e.mp3';
import pg76_audio6e from '../assets/audios/pg76_audio6e.mp3';
import pg76_audio7e from '../assets/audios/pg76_audio7e.mp3';
import pg76_audio8e from '../assets/audios/pg76_audio8e.mp3';
import pg76_audio9e from '../assets/audios/pg76_audio9e.mp3';
import pg76_audio10e from '../assets/audios/pg76_audio10e.mp3';
import pg76_audio11e from '../assets/audios/pg76_audio11e.mp3';
import pg76_audio12e from '../assets/audios/pg76_audio12e.mp3';
import pg76_audio13e from '../assets/audios/pg76_audio13e.mp3';
import pg76_audio14e from '../assets/audios/pg76_audio14e.mp3';
import pg76_audio15e from '../assets/audios/pg76_audio15e.mp3';
import pg76_audio16e from '../assets/audios/pg76_audio16e.mp3';
import pg76_audio17e from '../assets/audios/pg76_audio17e.mp3';
import pg76_audio18e from '../assets/audios/pg76_audio18e.mp3';
import pg76_audio19e from '../assets/audios/pg76_audio19e.mp3';
import pg76_audio20e from '../assets/audios/pg76_audio20e.mp3';
import pg76_audio21e from '../assets/audios/pg76_audio21e.mp3';
import pg76_audio22e from '../assets/audios/pg76_audio22e.mp3';
import pg76_audio23e from '../assets/audios/pg76_audio23e.mp3';
import pg76_audio24e from '../assets/audios/pg76_audio24e.mp3';
import pg76_audio25e from '../assets/audios/pg76_audio25e.mp3';
import pg76_audio26e from '../assets/audios/pg76_audio26e.mp3';
import pg76_audio27e from '../assets/audios/pg76_audio27e.mp3';
import pg76_audio28e from '../assets/audios/pg76_audio28e.mp3';
import pg76_audio29e from '../assets/audios/pg76_audio29e.mp3';
import pg76_audio30e from '../assets/audios/pg76_audio30e.mp3';
import pg76_audio31e from '../assets/audios/pg76_audio31e.mp3';
import pg76_audio32e from '../assets/audios/pg76_audio32e.mp3';
import pg76_audio33e from '../assets/audios/pg76_audio33e.mp3';
import pg76_audio34e from '../assets/audios/pg76_audio34e.mp3';
import pg76_audio35e from '../assets/audios/pg76_audio35e.mp3';
import pg76_audio36e from '../assets/audios/pg76_audio36e.mp3';
import pg76_audio37e from '../assets/audios/pg76_audio37e.mp3';
import pg76_audio38e from '../assets/audios/pg76_audio38e.mp3';
import pg76_audio39e from '../assets/audios/pg76_audio39e.mp3';
import pg76_audio40e from '../assets/audios/pg76_audio40e.mp3';
import pg76_audio41e from '../assets/audios/pg76_audio41e.mp3';
import pg76_audio42e from '../assets/audios/pg76_audio42e.mp3';
import pg76_audio43e from '../assets/audios/pg76_audio43e.mp3';
import pg76_audio44e from '../assets/audios/pg76_audio44e.mp3';
import pg76_audio45e from '../assets/audios/pg76_audio45e.mp3';
import pg76_audio46e from '../assets/audios/pg76_audio46e.mp3';
import pg76_audio47e from '../assets/audios/pg76_audio47e.mp3';
import pg76_audio48e from '../assets/audios/pg76_audio48e.mp3';
import pg76_audio49e from '../assets/audios/pg76_audio49e.mp3';
import pg76_audio50e from '../assets/audios/pg76_audio50e.mp3';

const audioMap = {
  // Pronomes
  global_I,
  global_we,
  global_you,
  global_they,
  global_he,
  global_she,
  global_it,
  // Verbos
  pg76_audio1e,
  pg76_audio2e,
  pg76_audio3e,
  pg76_audio4e,
  pg76_audio5e,
  pg76_audio6e,
  pg76_audio7e,
  pg76_audio8e,
  pg76_audio9e,
  pg76_audio10e,
  pg76_audio11e,
  pg76_audio12e,
  pg76_audio13e,
  pg76_audio14e,
  pg76_audio15e,
  pg76_audio16e,
  pg76_audio17e,
  pg76_audio18e,
  pg76_audio19e,
  pg76_audio20e,
  pg76_audio21e,
  pg76_audio22e,
  pg76_audio23e,
  pg76_audio24e,
  pg76_audio25e,
  pg76_audio26e,
  pg76_audio27e,
  pg76_audio28e,
  pg76_audio29e,
  pg76_audio30e,
  pg76_audio31e,
  pg76_audio32e,
  pg76_audio33e,
  pg76_audio34e,
  pg76_audio35e,
  pg76_audio36e,
  pg76_audio37e,
  pg76_audio38e,
  pg76_audio39e,
  pg76_audio40e,
  pg76_audio41e,
  pg76_audio42e,
  pg76_audio43e,
  pg76_audio44e,
  pg76_audio45e,
  pg76_audio46e,
  pg76_audio47e,
  pg76_audio48e,
  pg76_audio49e,
  pg76_audio50e,
};


const Pagina76 = () => {
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
        {highlightS ? (
          <span className={styles["page76__highlight-s"]}>{s}</span>
        ) : (
          s
        )}
      </span>
    );
  };

  const cell = (infinitive, infinitiveAudio, third, thirdAudio, isRed = false, fullHighlight = false) => (
    <div className={styles["page76__row"]}>
      <span className={isRed ? styles["page76__red-text"] : ""}>
        {infinitive}
        <img
          src={eng_audio_icon}
          alt="Play Audio"
          className={styles["page76__audio-icon"]}
          onClick={() => playAudio(infinitiveAudio)}
        />
      </span>
      <span>
        {fullHighlight ? (
          <>
            <span className={styles["page76__highlight-full"]}>{third}</span>
            <img
              src={eng_audio_icon}
              alt="Play Audio"
              className={styles["page76__audio-icon"]}
              onClick={() => playAudio(thirdAudio)}
            />
          </>
        ) : third.includes(' ') ? (
          <>
            <span className={styles["page76__highlight-full"]}>{third}</span>
            <img
              src={eng_audio_icon}
              alt="Play Audio"
              className={styles["page76__audio-icon"]}
              onClick={() => playAudio(thirdAudio)}
            />
          </>
        ) : (
          <>
            {addS(third, !['does', 'finishes', 'goes', 'has'].includes(third))}
            <img
              src={eng_audio_icon}
              alt="Play Audio"
              className={styles["page76__audio-icon"]}
              onClick={() => playAudio(thirdAudio)}
            />
          </>
        )}
      </span>
    </div>
  );

  const pronouns = (
    <div className={styles["page76__pronoun-group"]}>
      <div className={styles["page76__pronoun--left"]}>
        <span onClick={() => playAudio('global_I')}>I</span> <br />
        <span onClick={() => playAudio('global_we')}>We</span> -{" "}
        <span onClick={() => playAudio('global_you')}>You</span> -{" "}
        <span onClick={() => playAudio('global_they')}>They</span>
      </div>
      <div className={styles["page76__pronoun--right"]}>
        <em>
          <span onClick={() => playAudio('global_he')}>He</span> -{" "}
          <span onClick={() => playAudio('global_she')}>She</span> -{" "}
          <span onClick={() => playAudio('global_it')}>It</span>
        </em>
      </div>
    </div>
  );

  return (
    <div className={styles["page76__container"]}>
      <header className={styles["page76__header"]}>
        <h1 className={styles["page76__grammar-title"]}>Grammar:</h1>
        <h2 className={styles["page76__header--en"]}>Common Main Verbs</h2>
        <h3 className={styles["page76__header--pt"]}>Simple Present - Affirmative Form</h3>
      </header>

      <section className={styles["page76__note"]}>
        <div className={styles["page76__note-title"]}>Uso</div>
        <div className={styles["page76__note-content"]}>
          Para falar de ações cotidianas, horários, hábitos, verdades, fatos, características ou descrever ações em geral.
        </div>
      </section>

      <main className={styles["page76__main"]}>
        {/* Exemplo de bloco */}
        <div className={styles["page76__labels"]}>
          <span className={styles["page76__label--leftA"]}>A</span>
          <span className={styles["page76__label--centerB"]}>B</span>
          <span className={styles["page76__label--rightC"]}>C</span>
        </div>
        <section className={styles["page76__block"]}>
          <div className={styles["page76__columns--3"]}>
            <div className={styles["page76__column"]}>
              {pronouns}
              {cell("ask", "pg76_audio1e", "asks", "pg76_audio2e", true)}
              {cell("answer", "pg76_audio3e", "answers", "pg76_audio4e", true)}
              {cell("arrive", "pg76_audio5e", "arrives", "pg76_audio6e", true)}
            </div>
            <div className={styles["page76__column"]}>
              {pronouns}
              {cell("buy", "pg76_audio7e", "buys", "pg76_audio8e", true)}
              {cell("bring", "pg76_audio9e", "brings", "pg76_audio10e", true)}
              {cell("begin", "pg76_audio11e", "begins", "pg76_audio12e", true)}
            </div>
            <div className={styles["page76__column"]}>
              {pronouns}
              {cell("call", "pg76_audio13e", "calls", "pg76_audio14e", true)}
              {cell("come", "pg76_audio15e", "comes", "pg76_audio16e", true)}
              {cell("cook", "pg76_audio17e", "cooks", "pg76_audio18e", true)}
            </div>
          </div>
        </section>
        {/* Bloco D E F */}
        <div className={styles["page76__labels"]}>
          <span className={styles["page76__label--leftD"]}>D</span>
          <span className={styles["page76__label--centerE"]}>E</span>
          <span className={styles["page76__label--rightF"]}>F</span>
        </div>
        <section className={styles["page76__block"]}>
          <div className={styles["page76__columns--3"]}>
            <div className={styles["page76__column"]}>
              {pronouns}
              {cell("dance", "pg76_audio19e", "dances", "pg76_audio20e", true)}
              {cell("do", "pg76_audio21e", "does", "pg76_audio22e", true, true)}
              {cell("drink", "pg76_audio23e", "drinks", "pg76_audio24e", true)}
            </div>
            <div className={styles["page76__column"]}>
              {pronouns}
              {cell("eat", "pg76_audio25e", "eats", "pg76_audio26e", true)}
              {cell("enjoy", "pg76_audio27e", "enjoys", "pg76_audio28e", true)}
              {cell("explain", "pg76_audio29e", "explains", "pg76_audio30e", true)}
            </div>
            <div className={styles["page76__column"]}>
              {pronouns}
              {cell("find", "pg76_audio31e", "finds", "pg76_audio32e", true)}
              {cell("finish", "pg76_audio33e", "finishes", "pg76_audio34e", true, true)}
              {cell("fly", "pg76_audio35e", "flies", "pg76_audio36e", true)}
            </div>
          </div>
        </section>

        {/* Bloco G H L */}
        <div className={styles["page76__labels"]}>
          <span className={styles["page76__label--leftG"]}>G</span>
          <span className={styles["page76__label--centerH"]}>H</span>
          <span className={styles["page76__label--rightL"]}>L</span>
        </div>
        <section className={styles["page76__block"]}>
          <div className={styles["page76__columns--3"]}>
            <div className={styles["page76__column"]}>
              {pronouns}
              {cell("go", "pg76_audio37e", "goes", "pg76_audio38e", true, true)}
              {cell("give", "pg76_audio39e", "gives", "pg76_audio40e", true)}
              {cell("get", "pg76_audio41e", "gets", "pg76_audio42e", true)}
            </div>
            <div className={styles["page76__column"]}>
              {pronouns}
              {cell("have", "pg76_audio43e", "has", "pg76_audio44e", true, true)}
              {cell("help", "pg76_audio45e", "helps", "pg76_audio46e", true)}
              {cell("hear", "pg76_audio47e", "hears", "pg76_audio48e", true)}
            </div>
            <div className={styles["page76__column"]}>
              {pronouns}
              {cell("like", "pg76_audio49e", "likes", "pg76_audio50e", true)}
              {/* Caso precise adicionar mais células, continue nesta coluna */}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Pagina76;
