import React, { useRef, useState } from 'react';
import styles from './pagina273.module.css';
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import eng1 from '../assets/audios/pg273_audio1e.mp3';
import eng2 from '../assets/audios/pg273_audio2e.mp3';
import eng3 from '../assets/audios/pg273_audio3e.mp3';
import eng4 from '../assets/audios/pg273_audio4e.mp3';

import pt1 from '../assets/audios/pg273_audio1p.mp3';
import pt2 from '../assets/audios/pg273_audio2p.mp3';
import pt3 from '../assets/audios/pg273_audio3p.mp3';
import pt4 from '../assets/audios/pg273_audio4p.mp3';

const questions = [
  { prompt: 'a) Beautiful (superlativo de superioridade)' },
  { prompt: 'b) Fast (comparativo de igualdade)' },
  { prompt: 'c) Boring (comparativo de inferioridade)' }
];

const Pagina273 = () => {
  const [inputs, setInputs] = useState(Array(questions.length).fill(''));
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

  const handleInputChange = (value, index) => {
    const updated = [...inputs];
    updated[index] = value;
    setInputs(updated);
  };

  const engAudios = [eng1, eng2, eng3, eng4];
  const ptAudios = [pt1, pt2, pt3, pt4];

  return (
    <div className={styles.page273__container}>
      <header className={styles.page273__header}>
        <h1>
          <span className={styles.page273__grammarRed}>Grammar</span> -{' '}
          <span className={styles.page273__grammarBold}>Adjectives</span>
        </h1>
      </header>

      <p className={styles.page273__instruction}>
        <strong>6.</strong> Make a sentence using the given adjective:
        <img
          src={eng_audio_icon}
          alt="Play instruction (EN)"
          className={styles.page273__icon}
          onClick={() => playAudio(engAudios[0])}
        />
        <img
          src={ptbr_audio_icon}
          alt="Ouvir instrução (PT)"
          className={styles.page273__icon}
          onClick={() => playAudio(ptAudios[0])}
        />
      </p>

      <div className={styles.page273__questionBox}>
        <main className={styles.page273__main}>
          {questions.map((q, index) => (
            <div key={index} className={styles.page273__question}>
              <span className={styles.page273__prompt}>
                {q.prompt}
                <img
                  src={eng_audio_icon}
                  alt={`Play prompt ${index + 1} (EN)`}
                  className={styles.page273__icon}
                  onClick={() => playAudio(engAudios[index + 1])}
                />
                <img
                  src={ptbr_audio_icon}
                  alt={`Ouvir enunciado ${index + 1} (PT)`}
                  className={styles.page273__icon}
                  onClick={() => playAudio(ptAudios[index + 1])}
                />
              </span>

              <div className={styles.page273__inputWrapper}>
                <input
                  type="text"
                  value={inputs[index]}
                  onChange={(e) => handleInputChange(e.target.value, index)}
                  className={styles.page273__input}
                  placeholder="Digite sua frase aqui"
                />
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default Pagina273;
