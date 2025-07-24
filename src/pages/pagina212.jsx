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
    <div className={styles.container}>
      <div className={styles.pageContainer}>
        <header className={styles.header}>
          <h1 className={styles.headerTitle}>Grammar</h1>
        </header>

        <main className={styles.mainContent}>
          <section className={styles.grammarIntro}>
            <div className={styles.modalVerb}>
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

          <section className={styles.grammarSection}>
            <div className={styles.grammarHeader}>
              <h2 className={styles.grammarTitle}>Negative Interrogative Form</h2>
            </div>
            <div className={styles.grammarContent}>
              <div className={styles.grammarRow}>
                <span>Aux. Verb</span>
                <span>Subject</span>
                <span className={styles.redNot}>Not Adv</span>
                <span>Verb <span className={styles.pg213Red}>(BF)</span></span>
                <span>Object Complement</span>
              </div>
            </div>
          </section>

          <section
            className={styles.translationSection}
            onClick={() => playAudio('pg212_audio2e')}
            style={{ cursor: 'pointer' }}
          >
            <div className={styles.translationContent}>
              <div className={styles.translationColumn}>
                <span className={`${styles.translationItem} ${styles.red}`}>Can't</span>
              </div>
              <div className={styles.translationColumn}>
                <span className={`${styles.translationItem} ${styles.red}`}>I</span>
                <span className={`${styles.translationItem} ${styles.black}`}>Eu</span>
              </div>
              <div className={styles.translationColumn}>
                <span className={styles.blueText}>não</span>
              </div>
              <div className={styles.translationColumn}>
                <span className={`${styles.translationItem} ${styles.red}`}>call</span>
                <span className={`${styles.translationItem} ${styles.black}`}>posso te ligar</span>
              </div>
              <div className={styles.translationColumn}>
                <span className={`${styles.translationItem} ${styles.red}`}>you later?</span>
                <span className={`${styles.translationItem} ${styles.black}`}>mais tarde?</span>
              </div>
            </div>
          </section>

          <section className={styles.tableContent}>
            <div
              className={styles.tableGroup}
              onClick={() => playAudio('pg212_audio3e')}
              style={{ cursor: 'pointer' }}
            >
              <div className={styles.tableRow}>
                <div className={styles.pg213Cell}>
                  <span className={styles.pg213Red}>Can't</span>
                </div>
                <div className={styles.pg213Cell}>
                  <span className={styles.pg213Red}>he</span>
                  <span className={styles.pg213Black}>Ele</span>
                  <span className={styles.pg213Black}>Ele</span>
                </div>
                <div className={styles.pg213Cell}>
                  <span className={styles.blueText}>não</span>
                  <span className={styles.blueText}>não</span>
                </div>
                <div className={styles.pg213Cell}>
                  <span className={styles.pg213Red}>fix</span>
                  <span className={styles.pg213Black}>pode consertar</span>
                  <span className={styles.pg213Black}>consegue consertar</span>
                </div>
                <div className={styles.pg213Cell}>
                  <span className={styles.pg213Red}>the car today?</span>
                  <span className={styles.pg213Black}>o carro hoje?</span>
                  <span className={styles.pg213Black}>o carro hoje?</span>
                </div>
              </div>
            </div>

            <div
              className={styles.tableGroup}
              onClick={() => playAudio('pg212_audio4e')}
              style={{ cursor: 'pointer' }}
            >
              <div className={styles.tableRow}>
                <div className={styles.pg213Cell}>
                  <span className={styles.pg213Red}>Can't</span>
                </div>
                <div className={styles.pg213Cell}>
                  <span className={styles.pg213Red}>she</span>
                  <span className={styles.pg213Black}>Ela</span>
                </div>
                <div className={styles.pg213Cell}>
                  <span className={styles.blueText}>não</span>
                </div>
                <div className={styles.pg213Cell}>
                  <span className={styles.pg213Red}>speak</span>
                  <span className={styles.pg213Black}>sabe falar</span>
                </div>
                <div className={styles.pg213Cell}>
                  <span className={styles.pg213Red}>French?</span>
                  <span className={styles.pg213Black}>francês?</span>
                </div>
              </div>
            </div>

            <div
              className={styles.tableGroup}
              onClick={() => playAudio('pg212_audio5e')}
              style={{ cursor: 'pointer' }}
            >
              <div className={styles.tableRow}>
                <div className={styles.pg213Cell}>
                  <span className={styles.pg213Red}>Can't</span>
                  <span className={styles.blueText}>Será que</span>
                </div>
                <div className={styles.pg213Cell}>
                  <span className={styles.pg213Red}>it</span>
                </div>
                <div className={styles.pg213Cell}>
                  <span className={styles.blueText}>não</span>
                </div>
                <div className={styles.pg213Cell}>
                  <span className={styles.pg213Red}>stop raining</span>
                  <span className={styles.pg213Black}>pode parar de chover</span>
                </div>
                <div className={styles.pg213Cell}>
                  <span className={styles.pg213Red}>for a while?</span>
                  <span className={styles.pg213Black}>por um tempo ?</span>
                </div>
              </div>
            </div>
          </section>

          <div className={styles.noteBox}>
            <div className={styles.noteTitle}>Nota:</div>
            <div className={styles.noteContent}>
              <p className={styles.blueTextNote}>
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
