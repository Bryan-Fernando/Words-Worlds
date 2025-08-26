import React, { useRef } from 'react';
import styles from './pagina212.module.css';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import audio1 from '../assets/audios/pg212_audio1e.mp3';
import audio2 from '../assets/audios/pg212_audio2e.mp3';
import audio3 from '../assets/audios/pg212_audio3e.mp3';
import audio4 from '../assets/audios/pg212_audio4e.mp3';
import audio5 from '../assets/audios/pg212_audio5e.mp3';

const Pagina212 = () => {
  const currentAudio = useRef(null);

  const playAudio = (audioId) => {
    const audioMap = {
      pg212_audio1e: audio1,
      pg212_audio2e: audio2,
      pg212_audio3e: audio3,
      pg212_audio4e: audio4,
      pg212_audio5e: audio5,
    };

    if (currentAudio.current) {
      currentAudio.current.pause();
      currentAudio.current.currentTime = 0;
    }

    const audio = new Audio(audioMap[audioId]);
    currentAudio.current = audio;
    audio.play();
  };

  return (
    <div className={styles.page212__container}>
      <div className={styles.page212__pageContainer}>
        <header className={styles.page212__header}>
          <h1 className={styles.page212__headerTitle}>Grammar</h1>
        </header>

        <main className={styles.page212__mainContent}>
          <section className={styles.page212__grammarIntro}>
            <div className={styles.page212__modalVerb}>
              <h2>
                <span>Can</span>
                <span> - Modal Verb</span>
                <img
                  src={eng_audio_icon}
                  alt="Audio icon"
                  className={styles.page212__audio_icon}
                  onClick={() => playAudio('pg212_audio1e')}
                />
              </h2>
              <p><span>Can</span><span> - Verbo Modal</span></p>
            </div>
          </section>

          <section className={styles.page212__grammarSection}>
            <div className={styles.page212__grammarHeader}>
              <h2 className={styles.page212__grammarTitle}>Negative Interrogative Form</h2>
            </div>
            <div className={styles.page212__grammarContent}>
              <div className={styles.page212__grammarRow}>
                <span>Aux. Verb</span>
                <span>Subject</span>
                <span className={styles.page212__redNot}>Not Adv</span>
                <span>Verb <span className={styles.page212__pg213Red}>(BF)</span></span>
                <span>Object Complement</span>
              </div>
            </div>
          </section>

          <section
            className={styles.page212__translationSection}
            onClick={() => playAudio('pg212_audio2e')}
            style={{ cursor: 'pointer' }}
          >
            <div className={styles.page212__translationContent}>
              <div className={styles.page212__translationColumn}>
                <span className={`${styles.page212__translationItem} ${styles.page212__red}`}>Can't</span>
              </div>
              <div className={styles.page212__translationColumn}>
                <span className={`${styles.page212__translationItem} ${styles.page212__red}`}>I</span>
                <span className={`${styles.page212__translationItem} ${styles.page212__black}`}>Eu</span>
              </div>
              <div className={styles.page212__translationColumn}>
                <span className={styles.page212__blueText}>não</span>
              </div>
              <div className={styles.page212__translationColumn}>
                <span className={`${styles.page212__translationItem} ${styles.page212__red}`}>call</span>
                <span className={`${styles.page212__translationItem} ${styles.page212__black}`}>posso te ligar</span>
              </div>
              <div className={styles.page212__translationColumn}>
                <span className={`${styles.page212__translationItem} ${styles.page212__red}`}>you later?</span>
                <span className={`${styles.page212__translationItem} ${styles.page212__black}`}>mais tarde?</span>
              </div>
            </div>
          </section>

          <section className={styles.page212__tableContent}>
            <div
              className={styles.page212__tableGroup}
              onClick={() => playAudio('pg212_audio3e')}
              style={{ cursor: 'pointer' }}
            >
              <div className={styles.page212__tableRow}>
                <div className={styles.page212__pg213Cell}>
                  <span className={styles.page212__pg213Red}>Can't</span>
                </div>
                <div className={styles.page212__pg213Cell}>
                  <span className={styles.page212__pg213Red}>he</span>
                  <span className={styles.page212__pg213Black}>Ele</span>
                  <span className={styles.page212__pg213Black}>Ele</span>
                </div>
                <div className={styles.page212__pg213Cell}>
                  <span className={styles.page212__blueText}>não</span>
                  <span className={styles.page212__blueText}>não</span>
                </div>
                <div className={styles.page212__pg213Cell}>
                  <span className={styles.page212__pg213Red}>fix</span>
                  <span className={styles.page212__pg213Black}>pode consertar</span>
                  <span className={styles.page212__pg213Black}>consegue consertar</span>
                </div>
                <div className={styles.page212__pg213Cell}>
                  <span className={styles.page212__pg213Red}>the car today?</span>
                  <span className={styles.page212__pg213Black}>o carro hoje?</span>
                  <span className={styles.page212__pg213Black}>o carro hoje?</span>
                </div>
              </div>
            </div>

            <div
              className={styles.page212__tableGroup}
              onClick={() => playAudio('pg212_audio4e')}
              style={{ cursor: 'pointer' }}
            >
              <div className={styles.page212__tableRow}>
                <div className={styles.page212__pg213Cell}>
                  <span className={styles.page212__pg213Red}>Can't</span>
                </div>
                <div className={styles.page212__pg213Cell}>
                  <span className={styles.page212__pg213Red}>she</span>
                  <span className={styles.page212__pg213Black}>Ela</span>
                </div>
                <div className={styles.page212__pg213Cell}>
                  <span className={styles.page212__blueText}>não</span>
                </div>
                <div className={styles.page212__pg213Cell}>
                  <span className={styles.page212__pg213Red}>speak</span>
                  <span className={styles.page212__pg213Black}>sabe falar</span>
                </div>
                <div className={styles.page212__pg213Cell}>
                  <span className={styles.page212__pg213Red}>French?</span>
                  <span className={styles.page212__pg213Black}>francês?</span>
                </div>
              </div>
            </div>

            <div
              className={styles.page212__tableGroup}
              onClick={() => playAudio('pg212_audio5e')}
              style={{ cursor: 'pointer' }}
            >
              <div className={styles.page212__tableRow}>
                <div className={styles.page212__pg213Cell}>
                  <span className={styles.page212__pg213Red}>Can't</span>
                  <span className={styles.page212__blueText}>Será que</span>
                </div>
                <div className={styles.page212__pg213Cell}>
                  <span className={styles.page212__pg213Red}>it</span>
                </div>
                <div className={styles.page212__pg213Cell}>
                  <span className={styles.page212__blueText}>não</span>
                </div>
                <div className={styles.page212__pg213Cell}>
                  <span className={styles.page212__pg213Red}>stop raining</span>
                  <span className={styles.page212__pg213Black}>pode parar de chover</span>
                </div>
                <div className={styles.page212__pg213Cell}>
                  <span className={styles.page212__pg213Red}>for a while?</span>
                  <span className={styles.page212__pg213Black}>por um tempo ?</span>
                </div>
              </div>
            </div>
          </section>

          <div className={styles.page212__noteBox}>
            <div className={styles.page212__noteTitle}>Nota:</div>
            <div className={styles.page212__noteContent}>
              <p className={styles.page212__blueTextNote}>
                • Conforme a tabela acima, não se esqueça de que o verbo auxiliar troca de posição com o sujeito nas perguntas.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Pagina212;
