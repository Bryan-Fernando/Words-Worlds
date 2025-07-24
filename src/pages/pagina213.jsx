import React, { useRef } from 'react';
import styles from './pagina213.module.css';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import audio1 from '../assets/audios/pg213_audio1e.mp3';
import audio2 from '../assets/audios/pg213_audio2e.mp3';
import audio3 from '../assets/audios/pg213_audio3e.mp3';
import audio4 from '../assets/audios/pg213_audio4e.mp3';
import audio5 from '../assets/audios/pg213_audio5e.mp3';

const Pagina213 = () => {
  const currentAudio = useRef(null);

  const playAudio = (audioId) => {
    const audioMap = {
      pg213_audio1e: audio1,
      pg213_audio2e: audio2,
      pg213_audio3e: audio3,
      pg213_audio4e: audio4,
      pg213_audio5e: audio5,
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
                  className={styles.page213__audio_icon}
                  onClick={() => playAudio('pg213_audio1e')}
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
                <span>Verb <span className={styles.red}>(BF)</span></span>
                <span>Object Complement</span>
              </div>
            </div>
          </section>

          <section className={styles.tableContent}>
            <div
              className={styles.tableGroup}
              onClick={() => playAudio('pg213_audio2e')}
              style={{ cursor: 'pointer' }}
            >
              <div className={styles.tableRow}>
                <div className={styles.pg213Cell}>
                  <span className={styles.red}>Can't</span>
                </div>
                <div className={styles.pg213Cell}>
                  <span className={styles.red}>we</span>
                  <span className={styles.black}>Nós</span>
                </div>
                <div className={styles.pg213Cell}>
                  <span className={styles.blueText}>não</span>
                </div>
                <div className={styles.pg213Cell}>
                  <span className={styles.red}>go</span>
                  <span className={styles.black}>podemos ir</span>
                </div>
                <div className={styles.pg213Cell}>
                  <span className={styles.red}>to the beach this weekend?</span>
                  <span className={styles.black}>à praia neste fim de semana?</span>
                </div>
              </div>
            </div>

            <div
              className={styles.tableGroup}
              onClick={() => playAudio('pg213_audio3e')}
              style={{ cursor: 'pointer' }}
            >
              <div className={styles.tableRow}>
                <div className={styles.pg213Cell}>
                  <span className={styles.red}>Can't</span>
                </div>
                <div className={styles.pg213Cell}>
                  <span className={styles.red}>you (sg.)</span>
                  <span className={styles.black}>Você</span>
                </div>
                <div className={styles.pg213Cell}>
                  <span className={styles.blueText}>não</span>
                </div>
                <div className={styles.pg213Cell}>
                  <span className={styles.red}>come</span>
                  <span className={styles.black}>pode vir</span>
                  <span className={styles.black}>consegue vir</span>
                </div>
                <div className={styles.pg213Cell}>
                  <span className={styles.red}>to the party?</span>
                  <span className={styles.black}>à festa?</span>
                </div>
              </div>
            </div>

            <div
              className={styles.tableGroup}
              onClick={() => playAudio('pg213_audio4e')}
              style={{ cursor: 'pointer' }}
            >
              <div className={styles.tableRow}>
                <div className={styles.pg213Cell}>
                  <span className={styles.red}>Can't</span>
                </div>
                <div className={styles.pg213Cell}>
                  <span className={styles.red}>y'all (pl.)</span>
                  <span className={styles.black}>Vocês</span>
                  <span className={styles.black}>Vocês</span>
                </div>
                <div className={styles.pg213Cell}>
                  <span className={styles.blueText}>não</span>
                </div>
                <div className={styles.pg213Cell}>
                  <span className={styles.red}>wait</span>
                  <span className={styles.black}>podem esperar</span>
                  <span className={styles.black}>conseguem esperar</span>
                </div>
                <div className={styles.pg213Cell}>
                  <span className={styles.red}>a little longer?</span>
                  <span className={styles.black}>mais um pouco?</span>
                </div>
              </div>
            </div>

            <div
              className={styles.tableGroup}
              onClick={() => playAudio('pg213_audio5e')}
              style={{ cursor: 'pointer' }}
            >
              <div className={styles.tableRow}>
                <div className={styles.pg213Cell}>
                  <span className={styles.red}>Can't</span>
                </div>
                <div className={styles.pg213Cell}>
                  <span className={styles.red}>they</span>
                  <span className={styles.black}>Eles/Elas</span>
                </div>
                <div className={styles.pg213Cell}>
                  <span className={styles.blueText}>não</span>
                </div>
                <div className={styles.pg213Cell}>
                  <span className={styles.red}>see</span>
                  <span className={styles.black}>podem ver</span>
                  <span className={styles.black}>conseguem ver</span>
                </div>
                <div className={styles.pg213Cell}>
                  <span className={styles.red}>the problem?</span>
                  <span className={styles.black}>o problema?</span>
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

export default Pagina213;
