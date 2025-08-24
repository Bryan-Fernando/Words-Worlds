import React, { useRef } from 'react';

import styles from './pagina47.module.css';

import pagina47_imagem1 from '../assets/images/pagina47_imagem1.webp';

import iconeE from '../assets/icons/eng_audio_icon.webp';
import iconeP from '../assets/icons/ptbr_audio_icon.webp';

import global_grammar from '../assets/audios/global_grammar.mp3';
import global_posse_ae from '../assets/audios/global_posse_ae.mp3';
import global_posse_ap from '../assets/audios/global_posse_ap.mp3';
import my_audio from '../assets/audios/my_audio.mp3';
import his_audio from '../assets/audios/his_audio.mp3';
import her_audio from '../assets/audios/her_audio.mp3';
import its_audio from '../assets/audios/its_audio.mp3';
import our_audio from '../assets/audios/our_audio.mp3';
import your_audio from '../assets/audios/your_audio.mp3';
import their_audio from '../assets/audios/their_audio.mp3';
import audio1e from '../assets/audios/pg47_audio1e.mp3';
import audio2e from '../assets/audios/pg47_audio2e.mp3';
import audio3e from '../assets/audios/pg47_audio3e.mp3';
import audio4e from '../assets/audios/pg47_audio4e.mp3';
import audio5e from '../assets/audios/pg47_audio5e.mp3';
import audio6e from '../assets/audios/pg47_audio6e.mp3';
import audio7e from '../assets/audios/pg47_audio7e.mp3';
import audio8e from '../assets/audios/pg47_audio8e.mp3';
import audio9e from '../assets/audios/pg47_audio9e.mp3';
import audio10e from '../assets/audios/pg47_audio10e.mp3';
import audio11e from '../assets/audios/pg47_audio11e.mp3';
import audio12e from '../assets/audios/pg47_audio12e.mp3';
import audio13e from '../assets/audios/pg47_audio13e.mp3';
import audio14_1e from '../assets/audios/pg47_audio14_1e.mp3';
import audio14_2e from '../assets/audios/pg47_audio14_2e.mp3';
import audio15_1e from '../assets/audios/pg47_audio15_1e.mp3';
import audio15_2e from '../assets/audios/pg47_audio15_2e.mp3';
import audio15_3e from '../assets/audios/pg47_audio15_3e.mp3';
import audio1p from '../assets/audios/pg47_audio1p.mp3';
import audio2p from '../assets/audios/pg47_audio2p.mp3';
import audio3p from '../assets/audios/pg47_audio3p.mp3';
import audio4p from '../assets/audios/pg47_audio4p.mp3';
import audio5p from '../assets/audios/pg47_audio5p.mp3';
import audio6p from '../assets/audios/pg47_audio6p.mp3';
import audio7p from '../assets/audios/pg47_audio7p.mp3';
import audio8p from '../assets/audios/pg47_audio8p.mp3';
import audio9p from '../assets/audios/pg47_audio9p.mp3';
import audio10p from '../assets/audios/pg47_audio10p.mp3';
import audio11p from '../assets/audios/pg47_audio11p.mp3';
import audio12p from '../assets/audios/pg47_audio12p.mp3';
import audio13p from '../assets/audios/pg47_audio13p.mp3';
import audio14p from '../assets/audios/pg47_audio14p.mp3';

const Pagina47 = () => {
  const audioMap = {
    my_audio,
    his_audio,
    her_audio,
    its_audio,
    our_audio,
    your_audio,
    their_audio,
    pg47_audio1e: audio1e,
    pg47_audio2e: audio2e,
    pg47_audio3e: audio3e,
    pg47_audio4e: audio4e,
    pg47_audio5e: audio5e,
    pg47_audio6e: audio6e,
    pg47_audio7e: audio7e,
    pg47_audio8e: audio8e,
    pg47_audio9e: audio9e,
    pg47_audio10e: audio10e,
    pg47_audio11e: audio11e,
    pg47_audio12e: audio12e,
    pg47_audio13e: audio13e,
    pg47_audio14_1e: audio14_1e,
    pg47_audio14_2e: audio14_2e,
    pg47_audio15_1e: audio15_1e,
    pg47_audio15_2e: audio15_2e,
    pg47_audio15_3e: audio15_3e,
    pg47_audio1p: audio1p,
    pg47_audio2p: audio2p,
    pg47_audio3p: audio3p,
    pg47_audio4p: audio4p,
    pg47_audio5p: audio5p,
    pg47_audio6p: audio6p,
    pg47_audio7p: audio7p,
    pg47_audio8p: audio8p,
    pg47_audio9p: audio9p,
    pg47_audio10p: audio10p,
    pg47_audio11p: audio11p,
    pg47_audio12p: audio12p,
    pg47_audio13p: audio13p,
    pg47_audio14p: audio14p,
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
      <div className={styles['page47__container']}>
        <header className={styles['page47__header']}>
          <h1 className={styles['page47__header-h1']}>
            Grammar
            <img
              src={iconeE}
              alt="English audio"
              className={styles['page47__audio-icon']}
              onClick={() => playGlobalAudio('global_grammar')}
            />
          </h1>
          <div className={styles['page47__header-h2h3']}>
            <h2 className={styles['page47__header-h2']}>
              Possessive Adjectives
              <img
                src={iconeE}
                alt="English audio"
                className={styles['page47__audio-icon']}
                onClick={() => playGlobalAudio('global_posse_ae')}
              />
            </h2>
            <h3 className={styles['page47__header-h3']}>
              Pronomes possessivos
              <img
                src={iconeP}
                alt="Portuguese audio"
                className={styles['page47__audio-icon']}
                onClick={() => playGlobalAudio('global_posse_ap')}
              />
            </h3>
          </div>
        </header>

        <main className={styles['page47__main']}>
          <div className={styles['page47__container-main']}>
            <table className={styles['page47__table']}>
              <thead>
                <tr>
                  <th>
                    My
                    <img src={iconeE} alt="English audio" className={styles['page47__audio-icon']} onClick={() => playAudio('my_audio')} />
                  </th>
                  <td>meu(s), minha(s)</td>
                </tr>
                <tr>
                  <th>
                    His
                    <img src={iconeE} alt="English audio" className={styles['page47__audio-icon']} onClick={() => playAudio('his_audio')} />
                  </th>
                  <td>dele (seu/s/sua/s)</td>
                </tr>
                <tr>
                  <th>
                    Her
                    <img src={iconeE} alt="English audio" className={styles['page47__audio-icon']} onClick={() => playAudio('her_audio')} />
                  </th>
                  <td>dela (seu/s/sua/s)</td>
                </tr>
                <tr>
                  <th>
                    Its
                    <img src={iconeE} alt="English audio" className={styles['page47__audio-icon']} onClick={() => playAudio('its_audio')} />
                  </th>
                  <td>seu(s), sua(s) - coisas/animais/plantas</td>
                </tr>
                <tr>
                  <th>
                    Our
                    <img src={iconeE} alt="English audio" className={styles['page47__audio-icon']} onClick={() => playAudio('our_audio')} />
                  </th>
                  <td>nosso(s), nossa(s)</td>
                </tr>
                <tr>
                  <th>
                    Your
                    <img src={iconeE} alt="English audio" className={styles['page47__audio-icon']} onClick={() => playAudio('your_audio')} />
                  </th>
                  <td>seu(s), sua(s), teu(s), tua(s)</td>
                </tr>
                <tr>
                  <th>
                    Your
                    <img src={iconeE} alt="English audio" className={styles['page47__audio-icon']} onClick={() => playAudio('your_audio')} />
                  </th>
                  <td>seus, suas, teus, tuas (de vocês)</td>
                </tr>
                <tr>
                  <th>
                    Their
                    <img src={iconeE} alt="English audio" className={styles['page47__audio-icon']} onClick={() => playAudio('their_audio')} />
                  </th>
                  <td>deles, delas, seus, suas</td>
                </tr>
              </thead>
            </table>

            <div className={styles['page47__main-texto']}>
              <ol className={styles['page47__main-list']}>
                <li>
                  This is <strong>my</strong> teacher.
                  <img src={iconeE} alt="English audio" className={styles['page47__audio-icon']} onClick={() => playAudio('pg47_audio1e')} />
                  <img src={iconeP} alt="Portuguese audio" className={styles['page47__audio-icon']} onClick={() => playAudio('pg47_audio1p')} />
                </li>
                <li>
                  Those are <strong>your</strong> keys.
                  <img src={iconeE} alt="English audio" className={styles['page47__audio-icon']} onClick={() => playAudio('pg47_audio2e')} />
                  <img src={iconeP} alt="Portuguese audio" className={styles['page47__audio-icon']} onClick={() => playAudio('pg47_audio2p')} />
                </li>
                <li>
                  These are <strong>his</strong> pens.
                  <img src={iconeE} alt="English audio" className={styles['page47__audio-icon']} onClick={() => playAudio('pg47_audio3e')} />
                  <img src={iconeP} alt="Portuguese audio" className={styles['page47__audio-icon']} onClick={() => playAudio('pg47_audio3p')} />
                </li>
                <li>
                  This is <strong>her</strong> phone.
                  <img src={iconeE} alt="English audio" className={styles['page47__audio-icon']} onClick={() => playAudio('pg47_audio4e')} />
                  <img src={iconeP} alt="Portuguese audio" className={styles['page47__audio-icon']} onClick={() => playAudio('pg47_audio4p')} />
                </li>
                <li>
                  That is <strong>their</strong> car.
                  <img src={iconeE} alt="English audio" className={styles['page47__audio-icon']} onClick={() => playAudio('pg47_audio5e')} />
                  <img src={iconeP} alt="Portuguese audio" className={styles['page47__audio-icon']} onClick={() => playAudio('pg47_audio5p')} />
                </li>
                <li>
                  <strong>My</strong> friend Leo is from Italy.
                  <img src={iconeE} alt="English audio" className={styles['page47__audio-icon']} onClick={() => playAudio('pg47_audio6e')} />
                  <img src={iconeP} alt="Portuguese audio" className={styles['page47__audio-icon']} onClick={() => playAudio('pg47_audio6p')} />
                </li>
                <li>
                  <strong>His</strong> dad is an engineer.
                  <img src={iconeE} alt="English audio" className={styles['page47__audio-icon']} onClick={() => playAudio('pg47_audio7e')} />
                  <img src={iconeP} alt="Portuguese audio" className={styles['page47__audio-icon']} onClick={() => playAudio('pg47_audio7p')} />
                </li>
                <li>
                  <strong>Her</strong> parents are Canadian.
                  <img src={iconeE} alt="English audio" className={styles['page47__audio-icon']} onClick={() => playAudio('pg47_audio8e')} />
                  <img src={iconeP} alt="Portuguese audio" className={styles['page47__audio-icon']} onClick={() => playAudio('pg47_audio8p')} />
                </li>
                <li>
                  <strong>Our</strong> neighbor is French.
                  <img src={iconeE} alt="English audio" className={styles['page47__audio-icon']} onClick={() => playAudio('pg47_audio9e')} />
                  <img src={iconeP} alt="Portuguese audio" className={styles['page47__audio-icon']} onClick={() => playAudio('pg47_audio9p')} />
                </li>
                <li className={styles['page47__last-li']}>
                  <strong>Your</strong> sister is smart.
                  <img src={iconeE} alt="English audio" className={styles['page47__audio-icon']} onClick={() => playAudio('pg47_audio10e')} />
                  <img src={iconeP} alt="Portuguese audio" className={styles['page47__audio-icon']} onClick={() => playAudio('pg47_audio10p')} />
                </li>
              </ol>
            </div>
          </div>
        </main>

        <aside className={styles['page47__aside']}>
          <div className={styles['page47__exemplo']}>
            <p className={styles['page47__titulo']}>Exemplo:</p>
            <div className={styles['page47__exemplo-img']}>
              <img className={styles['page47__aside-img-1']} src={pagina47_imagem1} alt="" />

              <div className={styles['page47__aside-texto-1']}>
                <span className={styles['page47__badge']}>3</span>
                <p>Nice to meet you, Daniel.</p>
                <img src={iconeE} alt="English audio" className={styles['page47__audio-icon']} onClick={() => playAudio('pg47_audio11e')} />
              </div>

              <div className={styles['page47__aside-texto-2']}>
                <span className={styles['page47__badge']}>2</span>
                <p>Hi, Daniel!</p>
                <img src={iconeE} alt="English audio" className={styles['page47__audio-icon']} onClick={() => playAudio('pg47_audio13e')} />
              </div>

              <div className={styles['page47__aside-texto-3']}>
                <span className={styles['page47__badge']}>4</span>
                <p>Welcome guys!</p>
                <img src={iconeE} alt="English audio" className={styles['page47__audio-icon']} onClick={() => playAudio('pg47_audio12e')} />
              </div>

              <div className={styles['page47__aside-texto-4']}>
                <span className={styles['page47__badge']}>1</span>
                <p>
                  This is <strong>my</strong> friend Daniel.
                  <img src={iconeE} alt="English audio" className={styles['page47__audio-icon']} onClick={() => playAudio('pg47_audio14_1e')} />
                  <br />
                  He is <strong>our</strong> web designer.
                  <img src={iconeE} alt="English audio" className={styles['page47__audio-icon']} onClick={() => playAudio('pg47_audio14_2e')} />
                </p>
              </div>

              <div className={styles['page47__aside-texto-5']}>
                <p>
                  Daniel, this is <strong>my</strong> childhood friend Karen
                  <img src={iconeE} alt="English audio" className={styles['page47__audio-icon']} onClick={() => playAudio('pg47_audio15_1e')} />
                  <br />
                  and this is <strong>her</strong> brother Ethan.
                  <img src={iconeE} alt="English audio" className={styles['page47__audio-icon']} onClick={() => playAudio('pg47_audio15_2e')} />
                  <br />
                  They will be working in the IT (Information Technology) department.
                  <img src={iconeE} alt="English audio" className={styles['page47__audio-icon']} onClick={() => playAudio('pg47_audio15_3e')} />
                </p>
              </div>
            </div>
          </div>

          <div className={styles['page47__traducao']}>
            <p className={styles['page47__titulo']}>Tradução:</p>
            <div className={styles['page47__traducao-top']}>
              <div className={styles['page47__aside-traducao-2']}>
                <span className={`${styles['page47__badge']} ${styles['page47__badge--sm']}`}>1</span>
                <p>Oi, Daniel!</p>
                <img src={iconeP} alt="Portuguese audio" className={styles['page47__audio-icon']} onClick={() => playAudio('pg47_audio11p')} />
              </div>
              <div className={styles['page47__aside-traducao-3']}>
                <span className={`${styles['page47__badge']} ${styles['page47__badge--sm']}`}>2</span>
                <p>Sejam bem-vindos, pessoal!</p>
                <img src={iconeP} alt="Portuguese audio" className={styles['page47__audio-icon']} onClick={() => playAudio('pg47_audio12p')} />
              </div>
              <div className={styles['page47__aside-traducao-1']}>
                <span className={`${styles['page47__badge']} ${styles['page47__badge--sm']}`}>3</span>
                <p>Prazer em conhecê-lo, Daniel.</p>
                <img src={iconeP} alt="Portuguese audio" className={styles['page47__audio-icon']} onClick={() => playAudio('pg47_audio13p')} />
              </div>
            </div>
            <div className={styles['page47__aside-traducao-4']}>
              <span className={`${styles['page47__badge']} ${styles['page47__badge--sm']}`}>4</span>
              <p>
                Este é meu amigo Daniel. Ele é nosso web designer. Daniel, esta é minha amiga de infância Karen e este é seu irmão Ethan.
                <img src={iconeP} alt="Portuguese audio" className={styles['page47__audio-icon']} onClick={() => playAudio('pg47_audio14p')} />
              </p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Pagina47;
