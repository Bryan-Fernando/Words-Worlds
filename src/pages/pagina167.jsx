import React from 'react';
import styles from './pagina167.module.css';

import pagina167_imagem from '../assets/images/pagina167_imagem1.gif';

// Ícones de áudio
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

// Áudios (24)
import audio1e from '../assets/audios/pg167_audio1e.mp3';
import audio1p from '../assets/audios/pg167_audio1p.mp3';
import audio2e from '../assets/audios/pg167_audio2e.mp3';
import audio2p from '../assets/audios/pg167_audio2p.mp3';
import audio3e from '../assets/audios/pg167_audio3e.mp3';
import audio3p from '../assets/audios/pg167_audio3p.mp3';
import audio4e from '../assets/audios/pg167_audio4e.mp3';
import audio4p from '../assets/audios/pg167_audio4p.mp3';
import audio5e from '../assets/audios/pg167_audio5e.mp3';
import audio5p from '../assets/audios/pg167_audio5p.mp3';
import audio6e from '../assets/audios/pg167_audio6e.mp3';
import audio6p from '../assets/audios/pg167_audio6p.mp3';
import audio7e from '../assets/audios/pg167_audio7e.mp3';
import audio7p from '../assets/audios/pg167_audio7p.mp3';
import audio8e from '../assets/audios/pg167_audio8e.mp3';
import audio8p from '../assets/audios/pg167_audio8p.mp3';
import audio9e from '../assets/audios/pg167_audio9e.mp3';
import audio9p from '../assets/audios/pg167_audio9p.mp3';
import audio10e from '../assets/audios/pg167_audio10e.mp3';
import audio10p from '../assets/audios/pg167_audio10p.mp3';
import audio11e from '../assets/audios/pg167_audio11e.mp3';
import audio11p from '../assets/audios/pg167_audio11p.mp3';
import audio12e from '../assets/audios/pg167_audio12e.mp3';
import audio12p from '../assets/audios/pg167_audio12p.mp3';

const Pagina167 = () => {
  const currentAudio = React.useRef(null);

  const audioMap = {
    'pg167_audio1e': audio1e,
    'pg167_audio1p': audio1p,
    'pg167_audio2e': audio2e,
    'pg167_audio2p': audio2p,
    'pg167_audio3e': audio3e,
    'pg167_audio3p': audio3p,
    'pg167_audio4e': audio4e,
    'pg167_audio4p': audio4p,
    'pg167_audio5e': audio5e,
    'pg167_audio5p': audio5p,
    'pg167_audio6e': audio6e,
    'pg167_audio6p': audio6p,
    'pg167_audio7e': audio7e,
    'pg167_audio7p': audio7p,
    'pg167_audio8e': audio8e,
    'pg167_audio8p': audio8p,
    'pg167_audio9e': audio9e,
    'pg167_audio9p': audio9p,
    'pg167_audio10e': audio10e,
    'pg167_audio10p': audio10p,
    'pg167_audio11e': audio11e,
    'pg167_audio11p': audio11p,
    'pg167_audio12e': audio12e,
    'pg167_audio12p': audio12p,
  };

  const playAudio = (audioId) => {
    if (currentAudio.current) {
      currentAudio.current.pause();
      currentAudio.current.currentTime = 0;
    }
    const audio = new Audio(audioMap[audioId]);
    currentAudio.current = audio;
    audio.play();
  };

  return (
    <div className={styles["page167__container"]}>
      <h1 className={styles["page167__title"]}>Examples</h1>

      <div className={styles["page167__examples"]}>
        {/* Bloco 1 */}
        <div className={styles["page167__example-box"]}>
          <p>
            <span className={styles["page167__text-red"]}>
              A: Do we have to go to São Paulo?
            </span>
            <img src={eng_audio_icon} alt="English audio" className={styles["page167__audio-icon"]} onClick={() => playAudio("pg167_audio1e")} />
            <img src={ptbr_audio_icon} alt="Portuguese audio" className={styles["page167__audio-icon"]} onClick={() => playAudio("pg167_audio1p")} />
          </p>
          <p>
            <strong>B:</strong> Yes, we do
            <img src={eng_audio_icon} alt="English audio" className={styles["page167__audio-icon"]} onClick={() => playAudio("pg167_audio2e")} />
            <img src={ptbr_audio_icon} alt="Portuguese audio" className={styles["page167__audio-icon"]} onClick={() => playAudio("pg167_audio2p")} />
          </p>
          <p>
            <strong>B:</strong> No, we don’t
            <img src={eng_audio_icon} alt="English audio" className={styles["page167__audio-icon"]} onClick={() => playAudio("pg167_audio3e")} />
            <img src={ptbr_audio_icon} alt="Portuguese audio" className={styles["page167__audio-icon"]} onClick={() => playAudio("pg167_audio3p")} />
          </p>
        </div>

        {/* Bloco 2 */}
        <div className={styles["page167__example-box"]}>
          <p>
            <span className={styles["page167__text-red"]}>
              A: Do you speak Spanish? <span className={styles["page167__text-blue"]}>( Singular )</span>
            </span>
            <img src={eng_audio_icon} alt="English audio" className={styles["page167__audio-icon"]} onClick={() => playAudio("pg167_audio4e")} />
            <img src={ptbr_audio_icon} alt="Portuguese audio" className={styles["page167__audio-icon"]} onClick={() => playAudio("pg167_audio4p")} />
          </p>
          <p>
            <strong>B:</strong> Yes, I do
            <img src={eng_audio_icon} alt="English audio" className={styles["page167__audio-icon"]} onClick={() => playAudio("pg167_audio5e")} />
            <img src={ptbr_audio_icon} alt="Portuguese audio" className={styles["page167__audio-icon"]} onClick={() => playAudio("pg167_audio5p")} />
          </p>
          <p>
            <strong>B:</strong> No, I don’t
            <img src={eng_audio_icon} alt="English audio" className={styles["page167__audio-icon"]} onClick={() => playAudio("pg167_audio6e")} />
            <img src={ptbr_audio_icon} alt="Portuguese audio" className={styles["page167__audio-icon"]} onClick={() => playAudio("pg167_audio6p")} />
          </p>
        </div>

        {/* Bloco 3 */}
        <div className={styles["page167__example-box"]}>
          <p>
            <span className={styles["page167__text-red"]}>
              A: Do y’all play in a rock band? <span className={styles["page167__text-blue"]}>( Plural )</span>
            </span>
            <img src={eng_audio_icon} alt="English audio" className={styles["page167__audio-icon"]} onClick={() => playAudio("pg167_audio7e")} />
            <img src={ptbr_audio_icon} alt="Portuguese audio" className={styles["page167__audio-icon"]} onClick={() => playAudio("pg167_audio7p")} />
          </p>
          <p>
            <strong>B:</strong> Yes, we do
            <img src={eng_audio_icon} alt="English audio" className={styles["page167__audio-icon"]} onClick={() => playAudio("pg167_audio8e")} />
            <img src={ptbr_audio_icon} alt="Portuguese audio" className={styles["page167__audio-icon"]} onClick={() => playAudio("pg167_audio8p")} />
          </p>
          <p>
            <strong>B:</strong> No, we don’t
            <img src={eng_audio_icon} alt="English audio" className={styles["page167__audio-icon"]} onClick={() => playAudio("pg167_audio9e")} />
            <img src={ptbr_audio_icon} alt="Portuguese audio" className={styles["page167__audio-icon"]} onClick={() => playAudio("pg167_audio9p")} />
          </p>
        </div>

        {/* Bloco 4 */}
        <div className={styles["page167__example-box"]}>
          <p>
            <span className={styles["page167__text-red"]}>
              A: Do they go to the park very often?
            </span>
            <img src={eng_audio_icon} alt="English audio" className={styles["page167__audio-icon"]} onClick={() => playAudio("pg167_audio10e")} />
            <img src={ptbr_audio_icon} alt="Portuguese audio" className={styles["page167__audio-icon"]} onClick={() => playAudio("pg167_audio10p")} />
          </p>
          <p>
            <strong>B:</strong> Yes, they do
            <img src={eng_audio_icon} alt="English audio" className={styles["page167__audio-icon"]} onClick={() => playAudio("pg167_audio11e")} />
            <img src={ptbr_audio_icon} alt="Portuguese audio" className={styles["page167__audio-icon"]} onClick={() => playAudio("pg167_audio11p")} />
          </p>
          <p>
            <strong>B:</strong> No, they don’t
            <img src={eng_audio_icon} alt="English audio" className={styles["page167__audio-icon"]} onClick={() => playAudio("pg167_audio12e")} />
            <img src={ptbr_audio_icon} alt="Portuguese audio" className={styles["page167__audio-icon"]} onClick={() => playAudio("pg167_audio12p")} />
          </p>
        </div>
      </div>

      <img src={pagina167_imagem} alt="Imagem Exemplo" className={styles["page167__image"]} />

      <section className={styles["page167__note"]}>
        <div className={styles["page167__note-header"]}>Nota</div>
        <div className={styles["page167__note-content"]}>
          Para respostas curtas, tanto afirmativas quanto negativas, usamos os verbos auxiliares <span>do</span>, <span>don’t</span>, <span>does</span> e <span>doesn’t</span>. Esses verbos representam o verbo da pergunta.
        </div>
      </section>
    </div>
  );
};

export default Pagina167;
