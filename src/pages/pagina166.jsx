import React, { useRef } from 'react';
import styles from './pagina166.module.css';

import pagina166_imagem1 from '../assets/images/pagina166_imagem1.webp';
import pagina166_imagem2 from '../assets/images/pagina166_imagem2.gif';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import audio1e from '../assets/audios/pg166_audio1e.mp3';
import audio1p from '../assets/audios/pg166_audio1p.mp3';
import audio2e from '../assets/audios/pg166_audio2e.mp3';
import audio2p from '../assets/audios/pg166_audio2p.mp3';
import audio3e from '../assets/audios/pg166_audio3e.mp3';
import audio3p from '../assets/audios/pg166_audio3p.mp3';
import audio4e from '../assets/audios/pg166_audio4e.mp3';
import audio4p from '../assets/audios/pg166_audio4p.mp3';
import audio5e from '../assets/audios/pg166_audio5e.mp3';
import audio5p from '../assets/audios/pg166_audio5p.mp3';
import audio6e from '../assets/audios/pg166_audio6e.mp3';
import audio6p from '../assets/audios/pg166_audio6p.mp3';
import audio7e from '../assets/audios/pg166_audio7e.mp3';
import audio7p from '../assets/audios/pg166_audio7p.mp3';
import audio8e from '../assets/audios/pg166_audio8e.mp3';
import audio8p from '../assets/audios/pg166_audio8p.mp3';
import audio9e from '../assets/audios/pg166_audio9e.mp3';
import audio9p from '../assets/audios/pg166_audio9p.mp3';
import audio10e from '../assets/audios/pg166_audio10e.mp3';
import audio10p from '../assets/audios/pg166_audio10p.mp3';
import audio11e from '../assets/audios/pg166_audio11e.mp3';
import audio11p from '../assets/audios/pg166_audio11p.mp3';
import audio12e from '../assets/audios/pg166_audio12e.mp3';
import audio12p from '../assets/audios/pg166_audio12p.mp3';

const Pagina166 = () => {

  const currentAudio = React.useRef(null);

  const audioMap = {
    'pg166_audio1e': audio1e,
    'pg166_audio1p': audio1p,
    'pg166_audio2e': audio2e,
    'pg166_audio2p': audio2p,
    'pg166_audio3e': audio3e,
    'pg166_audio3p': audio3p,
    'pg166_audio4e': audio4e,
    'pg166_audio4p': audio4p,
    'pg166_audio5e': audio5e,
    'pg166_audio5p': audio5p,
    'pg166_audio6e': audio6e,
    'pg166_audio6p': audio6p,
    'pg166_audio7e': audio7e,
    'pg166_audio7p': audio7p,
    'pg166_audio8e': audio8e,
    'pg166_audio8p': audio8p,
    'pg166_audio9e': audio9e,
    'pg166_audio9p': audio9p,
    'pg166_audio10e': audio10e,
    'pg166_audio10p': audio10p,
    'pg166_audio11e': audio11e,
    'pg166_audio11p': audio11p,
    'pg166_audio12e': audio12e,
    'pg166_audio12p': audio12p,
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
    <div className={styles["page166__container"]}>
      <h1 className={styles["page166__title"]}>Examples</h1>

      <section className={styles["page166__content"]}>
        {/* Bloco de Exemplos */}
        <div className={styles["page166__examples"]}>
          {/* Bloco 1 */}
          <div className={styles["page166__example-box"]}>
            <p>
              <span className={styles["page166__text-red"]}>
                A: Do I have to work on Monday?
              </span>
              <img
                src={eng_audio_icon}
                alt="English audio"
                className={styles["page166__icon"]}
                onClick={() => playAudio("pg166_audio1e")}
              />
              <img
                src={ptbr_audio_icon}
                alt="Portuguese audio"
                className={styles["page166__icon"]}
                onClick={() => playAudio("pg166_audio1p")}
              />
            </p>
            <p>
              <strong>B:</strong> Yes, you do
              <img
                src={eng_audio_icon}
                alt="English audio"
                className={styles["page166__icon"]}
                onClick={() => playAudio("pg166_audio2e")}
              />
              <img
                src={ptbr_audio_icon}
                alt="Portuguese audio"
                className={styles["page166__icon"]}
                onClick={() => playAudio("pg166_audio2p")}
              />
            </p>
            <p>
              <strong>B:</strong> No, you don’t
              <img
                src={eng_audio_icon}
                alt="English audio"
                className={styles["page166__icon"]}
                onClick={() => playAudio("pg166_audio3e")}
              />
              <img
                src={ptbr_audio_icon}
                alt="Portuguese audio"
                className={styles["page166__icon"]}
                onClick={() => playAudio("pg166_audio3p")}
              />
            </p>
          </div>

          {/* Bloco 2 */}
          <div className={styles["page166__example-box"]}>
            <p>
              <span className={styles["page166__text-red"]}>
                A: Does Tom play soccer?
              </span>
              <img
                src={eng_audio_icon}
                alt="English audio"
                className={styles["page166__icon"]}
                onClick={() => playAudio("pg166_audio4e")}
              />
              <img
                src={ptbr_audio_icon}
                alt="Portuguese audio"
                className={styles["page166__icon"]}
                onClick={() => playAudio("pg166_audio4p")}
              />
            </p>
            <p>
              <strong>B:</strong> Yes, he does
              <img
                src={eng_audio_icon}
                alt="English audio"
                className={styles["page166__icon"]}
                onClick={() => playAudio("pg166_audio5e")}
              />
              <img
                src={ptbr_audio_icon}
                alt="Portuguese audio"
                className={styles["page166__icon"]}
                onClick={() => playAudio("pg166_audio5p")}
              />
            </p>
            <p>
              <strong>B:</strong> No, he doesn’t
              <img
                src={eng_audio_icon}
                alt="English audio"
                className={styles["page166__icon"]}
                onClick={() => playAudio("pg166_audio6e")}
              />
              <img
                src={ptbr_audio_icon}
                alt="Portuguese audio"
                className={styles["page166__icon"]}
                onClick={() => playAudio("pg166_audio6p")}
              />
            </p>
          </div>

          {/* Bloco 3 */}
          <div className={styles["page166__example-box"]}>
            <p>
              <span className={styles["page166__text-red"]}>
                A: Does Ane travel very often?
              </span>
              <img
                src={eng_audio_icon}
                alt="English audio"
                className={styles["page166__icon"]}
                onClick={() => playAudio("pg166_audio7e")}
              />
              <img
                src={ptbr_audio_icon}
                alt="Portuguese audio"
                className={styles["page166__icon"]}
                onClick={() => playAudio("pg166_audio7p")}
              />
            </p>
            <p>
              <strong>B:</strong> Yes, she does
              <img
                src={eng_audio_icon}
                alt="English audio"
                className={styles["page166__icon"]}
                onClick={() => playAudio("pg166_audio8e")}
              />
              <img
                src={ptbr_audio_icon}
                alt="Portuguese audio"
                className={styles["page166__icon"]}
                onClick={() => playAudio("pg166_audio8p")}
              />
            </p>
            <p>
              <strong>B:</strong> No, she doesn’t
              <img
                src={eng_audio_icon}
                alt="English audio"
                className={styles["page166__icon"]}
                onClick={() => playAudio("pg166_audio9e")}
              />
              <img
                src={ptbr_audio_icon}
                alt="Portuguese audio"
                className={styles["page166__icon"]}
                onClick={() => playAudio("pg166_audio9p")}
              />
            </p>
          </div>

          {/* Bloco 4 */}
          <div className={styles["page166__example-box"]}>
            <p>
              <span className={styles["page166__text-red"]}>
                A: Does it rain a lot?
              </span>
              <img
                src={eng_audio_icon}
                alt="English audio"
                className={styles["page166__icon"]}
                onClick={() => playAudio("pg166_audio10e")}
              />
              <img
                src={ptbr_audio_icon}
                alt="Portuguese audio"
                className={styles["page166__icon"]}
                onClick={() => playAudio("pg166_audio10p")}
              />
            </p>
            <p>
              <strong>B:</strong> Yes, it does
              <img
                src={eng_audio_icon}
                alt="English audio"
                className={styles["page166__icon"]}
                onClick={() => playAudio("pg166_audio11e")}
              />
              <img
                src={ptbr_audio_icon}
                alt="Portuguese audio"
                className={styles["page166__icon"]}
                onClick={() => playAudio("pg166_audio11p")}
              />
            </p>
            <p>
              <strong>B:</strong> No, it doesn’t
              <img
                src={eng_audio_icon}
                alt="English audio"
                className={styles["page166__icon"]}
                onClick={() => playAudio("pg166_audio12e")}
              />
              <img
                src={ptbr_audio_icon}
                alt="Portuguese audio"
                className={styles["page166__icon"]}
                onClick={() => playAudio("pg166_audio12p")}
              />
            </p>
          </div>
        </div>

        {/* Imagem Direita */}
        <div className={styles["page166__image-right"]}>
          <img src={pagina166_imagem1} alt="Imagem 1" />
        </div>
      </section>

      {/* Imagem Inferior */}
      <section className={styles["page166__image-bottom"]}>
        <img src={pagina166_imagem2} alt="Imagem 2" />
      </section>

      {/* Nota */}
      <section className={styles["page166__note"]}>
        <div className={styles["page166__note-header"]}>Nota</div>
        <div className={styles["page166__note-content"]}>
          <p>
            Para respostas curtas, tanto afirmativas quanto negativas, usamos os verbos auxiliares
            <span className={styles["page166__text-red"]}> do</span>,
            <span className={styles["page166__text-red"]}> don’t</span>,
            <span className={styles["page166__text-red"]}> does</span> e
            <span className={styles["page166__text-red"]}> doesn’t</span>. Esses verbos representam o verbo da pergunta.
          </p>
        </div>
      </section>
    </div>

  );
};

export default Pagina166;
