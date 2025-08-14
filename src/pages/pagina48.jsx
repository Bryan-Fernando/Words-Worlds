import React, { useRef } from 'react';

import styles from './pagina48.module.css';

import pagina48_imagem1 from '../assets/images/pagina48_imagem1.webp';
import pagina48_imagem2 from '../assets/images/pagina48_imagem2.webp';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import global_grammar from '../assets/audios/global_grammar.mp3';
import global_posse_ae from '../assets/audios/global_posse_ae.mp3';
import global_posse_ap from '../assets/audios/global_posse_ap.mp3';
import audio1e from '../assets/audios/pg48_audio1e.mp3';
import audio2e from '../assets/audios/pg48_audio2e.mp3';
import audio3e from '../assets/audios/pg48_audio3e.mp3';
import audio1p from '../assets/audios/pg48_audio1p.mp3';
import audio2p from '../assets/audios/pg48_audio2p.mp3';
import audio3p from '../assets/audios/pg48_audio3p.mp3';

const Pagina48 = () => {
  const audioMap = {
    pg48_audio1e: audio1e,
    pg48_audio2e: audio2e,
    pg48_audio3e: audio3e,
    pg48_audio1p: audio1p,
    pg48_audio2p: audio2p,
    pg48_audio3p: audio3p,
  };

  const currentAudio = useRef(null);

  const playAudio = (audioId) => {
    if (currentAudio.current) {
      currentAudio.current.pause();
      currentAudio.current.currentTime = 0;
    }
    const audio = new Audio(audioMap[audioId]);
    currentAudio.current = audio;
    audio.play();
  };

  const globalAudioMap = {
    global_grammar,
    global_posse_ae,
    global_posse_ap,
  };

  const playGlobalAudio = (audioKey) => {
    const audio = new Audio(globalAudioMap[audioKey]);
    audio.play();
  };

  return (
    <div>
      <div className={styles['page48__container']}>
        <header className={styles['page48__header']}>
          <h1 className={styles['page48__header-h1']}>
            Grammar
            <img
              src={eng_audio_icon}
              alt="English audio"
              className={styles['page48__audio-icon']}
              onClick={() => playGlobalAudio('global_grammar')}
            />
          </h1>
          <div className={styles['page48__header-h2-h3']}>
            <h2 className={styles['page48__header-h2']}>
              Possessive Adjectives
              <img
                src={eng_audio_icon}
                alt="English audio"
                className={styles['page48__audio-icon']}
                onClick={() => playGlobalAudio('global_posse_ae')}
              />
            </h2>
            <h3 className={styles['page48__header-h3']}>
              Pronomes possessivos
              <img
                src={ptbr_audio_icon}
                alt="Portuguese audio"
                className={styles['page48__audio-icon']}
                onClick={() => playGlobalAudio('global_posse_ap')}
              />
            </h3>
          </div>
        </header>

        <main className={styles['page48__main']}>
          <div className={styles['page48__exemplo']}>
            <p className={styles['page48__titulo-exemplo']}><strong>Exemplo:</strong></p>
            <div className={styles['page48__exemplo-img']}>
              <div className={styles['page48__aside-texto-1']}>
                <p>
                  John: I love this city. <strong>Its</strong> architecture is stunning.
                  <img
                    src={eng_audio_icon}
                    alt="English audio"
                    className={styles['page48__audio-icon']}
                    onClick={() => playAudio('pg48_audio1e')}
                  />
                </p>
              </div>
              <img
                className={styles['page48__aside-img-1']}
                src={pagina48_imagem1}
                alt=""
              />
            </div>
            <div className={styles['page48__traducao']}>
              <p className={styles['page48__titulo-traducao']}><strong>Tradução:</strong></p>
              <p className={styles['page48__traducao-texto-1']}>
                Eu amo essa cidade. <strong>Sua</strong> arquitetura é impressionante.
                <img
                  src={ptbr_audio_icon}
                  alt="Portuguese audio"
                  className={styles['page48__audio-icon']}
                  onClick={() => playAudio('pg48_audio1p')}
                />
              </p>
            </div>
          </div>

          <div className={styles['page48__exemplo']}>
            <p className={styles['page48__titulo-exemplo']}><strong>Exemplo:</strong></p>
            <div className={styles['page48__exemplo-img']}>
              <div className={styles['page48__aside-texto-2']}>
                <p>
                  Paulo: Are these <strong>our</strong> books?
                  <img
                    src={eng_audio_icon}
                    alt="English audio"
                    className={styles['page48__audio-icon']}
                    onClick={() => playAudio('pg48_audio2e')}
                  />
                </p>
              </div>
              <div className={styles['page48__aside-texto-3']}>
                <p>
                  Maria: No, they aren’t. <strong>Our</strong> books are on the teacher’s desk.
                  <img
                    src={eng_audio_icon}
                    alt="English audio"
                    className={styles['page48__audio-icon']}
                    onClick={() => playAudio('pg48_audio3e')}
                  />
                </p>
              </div>
              <img
                className={styles['page48__aside-img-2']}
                src={pagina48_imagem2}
                alt=""
              />
            </div>
            <div className={styles['page48__traducao']}>
              <p className={styles['page48__titulo-traducao']}><strong>Tradução:</strong></p>
              <p className={styles['page48__traducao-texto-2']}>
                Estes são <strong>nossos</strong> livros?
                <img
                  src={ptbr_audio_icon}
                  alt="Portuguese audio"
                  className={styles['page48__audio-icon']}
                  onClick={() => playAudio('pg48_audio2p')}
                />
              </p>
              <p className={styles['page48__traducao-texto-3']}>
                Não, não são. <strong>Nossos</strong> livros estão na mesa do professor.
                <img
                  src={ptbr_audio_icon}
                  alt="Portuguese audio"
                  className={styles['page48__audio-icon']}
                  onClick={() => playAudio('pg48_audio3p')}
                />
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Pagina48;
