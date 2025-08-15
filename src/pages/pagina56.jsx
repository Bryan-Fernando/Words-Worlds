import React, { useRef } from 'react';

import styles from './pagina56.module.css';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import campainha from '../assets/icons/campainha.png';

import pagina56Imagem1 from '../assets/images/pagina56_imagem1.webp';
import pagina56Imagem2 from '../assets/images/pagina56_imagem2.webp';
import pagina56Imagem3 from '../assets/images/pagina56_imagem3.webp';

import pg56Audio1e from '../assets/audios/pg56_audio1e.mp3';
import pg56Audio2e from '../assets/audios/pg56_audio2e.mp3';
import pg56Audio3e from '../assets/audios/pg56_audio3e.mp3';
import pg56Audio4e from '../assets/audios/pg56_audio4e.mp3';
import bell from '../assets/audios/bell.mp3';

const Pagina56 = () => {
  const audioMap = {
    'pg56-audio1e': pg56Audio1e,
    'pg56-audio2e': pg56Audio2e,
    'pg56-audio3e': pg56Audio3e,
    'pg56-audio4e': pg56Audio4e,
    'bell': bell,
  };

  const currentAudio = useRef(null);

  const playAudio = (audioId) => {
    if (!audioMap[audioId]) return;
    if (currentAudio.current) {
      currentAudio.current.pause();
      currentAudio.current.currentTime = 0;
    }
    const audio = new Audio(audioMap[audioId]);
    currentAudio.current = audio;
    audio.play();
  };

  return (
    <div className={styles["page56"]}>
      <main className={styles["page56__content"]}>
        <div className={styles["page56__section--first"]}>
          <img className={styles["page56__image"]} src={pagina56Imagem1} alt="Gustavo" />
          <div className={styles["page56__text-container"]}>
            <p>
              <span className={styles["page56__text--red"]}>
                First name:
                <img
                  src={eng_audio_icon}
                  alt="English Audio"
                  className={styles["page56__icon"]}
                  onClick={() => playAudio('pg56-audio1e')}
                />
              </span>
              <span className={styles["page56__text--black"]}> Gustavo (primeiro nome)</span>
            </p>
            <p>
              <span className={styles["page56__text--red"]}>
                Middle name:
                <img
                  src={eng_audio_icon}
                  alt="English Audio"
                  className={styles["page56__icon"]}
                  onClick={() => playAudio('pg56-audio2e')}
                />
              </span>
              <span className={styles["page56__text--black"]}> Amaral (nome do meio)</span>
            </p>
            <p>
              <span className={styles["page56__text--red"]}>
                Last name/Family name:
                <img
                  src={eng_audio_icon}
                  alt="English Audio"
                  className={styles["page56__icon"]}
                  onClick={() => playAudio('pg56-audio3e')}
                />
              </span>
              <span className={styles["page56__text--black"]}> Dias (último nome/sobrenome)</span>
            </p>
            <p>
              <span className={styles["page56__text--red"]}>
                Full name:
                <img
                  src={eng_audio_icon}
                  alt="English Audio"
                  className={styles["page56__icon"]}
                  onClick={() => playAudio('pg56-audio4e')}
                />
              </span>
              <span className={styles["page56__text--black"]}> Gustavo Amaral Dias (nome completo)</span>
            </p>
          </div>
          <div className={styles["page56__line--red"]}></div>
          <div className={styles["page56__line--gray"]}></div>
        </div>

        <div className={styles["page56__section--second"]}>
          <img className={styles["page56__image"]} src={pagina56Imagem2} alt="Lucimar" />
          <div className={styles["page56__text-container"]}>
            <p>
              <span className={styles["page56__text--red"]}>
                First name:
                <img
                  src={eng_audio_icon}
                  alt="English Audio"
                  className={styles["page56__icon"]}
                  onClick={() => playAudio('pg56-audio1e')}
                />
              </span>
              <span className={styles["page56__text--black"]}> Lucimar (primeiro nome)</span>
            </p>
            <p>
              <span className={styles["page56__text--red"]}>
                Middle name:
                <img
                  src={eng_audio_icon}
                  alt="English Audio"
                  className={styles["page56__icon"]}
                  onClick={() => playAudio('pg56-audio2e')}
                />
              </span>
              <span className={styles["page56__text--black"]}> Pereira (nome do meio)</span>
            </p>
            <p>
              <span className={styles["page56__text--red"]}>
                Last name/Family name:
                <img
                  src={eng_audio_icon}
                  alt="English Audio"
                  className={styles["page56__icon"]}
                  onClick={() => playAudio('pg56-audio3e')}
                />
              </span>
              <span className={styles["page56__text--black"]}> da Silva (último nome/sobrenome)</span>
            </p>
            <p>
              <span className={styles["page56__text--red"]}>
                Full name:
                <img
                  src={eng_audio_icon}
                  alt="English Audio"
                  className={styles["page56__icon"]}
                  onClick={() => playAudio('pg56-audio4e')}
                />
              </span>
              <span className={styles["page56__text--black"]}> Lucimar Pereira de Sousa (nome completo)</span>
            </p>
          </div>
          <div className={styles["page56__line--red"]}></div>
        </div>

        <div className={styles["page56__section--third"]}>
          <img className={styles["page56__image"]} src={pagina56Imagem3} alt="Ines" />
          <div className={styles["page56__text-container"]}>
            <p>
              <span className={styles["page56__text--red"]}>
                First name:
                <img
                  src={eng_audio_icon}
                  alt="English Audio"
                  className={styles["page56__icon"]}
                  onClick={() => playAudio('pg56-audio1e')}
                />
              </span>
              <span className={styles["page56__text--black"]}> Ines (primeiro nome)</span>
            </p>
            <p>
              <span className={styles["page56__text--red"]}>
                Middle name:
                <img
                  src={eng_audio_icon}
                  alt="English Audio"
                  className={styles["page56__icon"]}
                  onClick={() => playAudio('pg56-audio2e')}
                />
              </span>
              <span className={styles["page56__text--black"]}> Pagliari (nome do meio)</span>
            </p>
            <p>
              <span className={styles["page56__text--red"]}>
                Last name/Family name:
                <img
                  src={eng_audio_icon}
                  alt="English Audio"
                  className={styles["page56__icon"]}
                  onClick={() => playAudio('pg56-audio3e')}
                />
              </span>
              <span className={styles["page56__text--black"]}> Jardim (último nome/sobrenome)</span>
            </p>
            <p>
              <span className={styles["page56__text--red"]}>
                Full name:
                <img
                  src={eng_audio_icon}
                  alt="English Audio"
                  className={styles["page56__icon"]}
                  onClick={() => playAudio('pg56-audio4e')}
                />
              </span>
              <span className={styles["page56__text--black"]}> Ines Pagliari Jardim (nome completo)</span>
            </p>
          </div>
          <div className={styles["page56__line--red"]}></div>
          <div className={styles["page56__line--gray"]}></div>
        </div>
      </main>

      <aside className={styles["page56__aside"]}>
        <div className={styles["page56__aside-container"]}>
          <div className={styles["page56__aside-notes1"]}>
            <img
              className={styles["page56__aside-img-notes"]}
              onClick={() => playAudio('bell')}
              src={campainha}
              alt=""
            />
            <p><strong>Word Bank</strong></p>
          </div>
          <div className={styles["page56__aside-notes2"]}>
            <div className={styles["page56__word-row"]}>
              <div className={styles["page56__word-column"]}>
                <span className={styles["page56__text--red"]}>
                  First name
                </span>
                <span className={styles["page56__text--black"]}> Primeiro nome</span>
              </div>
              <div className={styles["page56__word-column"]}>
                <span className={styles["page56__text--red"]}>
                  Middle name
                </span>
                <span className={styles["page56__text--black"]}> Nome do meio</span>
              </div>
            </div>
            <div className={styles["page56__word-row"]}>
              <div className={styles["page56__word-column"]}>
                <span className={styles["page56__text--red"]}>
                  Last name/Family name
                </span>
                <span className={styles["page56__text--black"]}> Último nome/Sobrenome</span>
              </div>
              <div className={styles["page56__word-column"]}>
                <span className={styles["page56__text--red"]}>
                  Full name
                </span>
                <span className={styles["page56__text--black"]}> Nome completo</span>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Pagina56;
