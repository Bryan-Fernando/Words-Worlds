import React, { useRef } from "react";
import styles from "./pagina338.module.css";

import eng_audio_icon from "../assets/icons/eng_audio_icon.webp";

import audio1 from "../assets/audios/pg338_audio1e.mp3";
import audio2 from "../assets/audios/pg338_audio2e.mp3";
import audio3 from "../assets/audios/pg338_audio3e.mp3";
import audio4 from "../assets/audios/pg338_audio4e.mp3";
import audio5 from "../assets/audios/pg338_audio5e.mp3";

const Pagina338 = () => {
  const currentAudioRef = useRef(null);

  const playAudio = (file) => {
    if (currentAudioRef.current) {
      currentAudioRef.current.pause();
      currentAudioRef.current.currentTime = 0;
    }
    const audio = new Audio(file);
    currentAudioRef.current = audio;
    audio.play();
  };

  return (
    <div className={styles.page338__container}>
      <div className={styles.page338__pageContainer}>
        <header className={styles.page338__header}>
          <h1 className={styles.page338__headerTitle}>Grammar - Simple Future</h1>
        </header>

        <main className={styles.page338__mainContent}>
          <section className={styles.page338__grammarIntro}>
            <div className={styles.page338__willVerb}>
              <h2>
                <span className={styles.page338__willBullet}></span>
                Will
                <img
                  src={eng_audio_icon}
                  alt="Play English Audio"
                  className={styles.page338__icon}
                  onClick={() => playAudio(audio1)}
                />
              </h2>
            </div>
          </section>

          <section className={styles.page338__grammarSection}>
            <div className={styles.page338__grammarHeader}>
              <h2 className={styles.page338__grammarTitle}>Interrogative Form</h2>
            </div>
            <div className={styles.page338__grammarContent}>
              <div className={styles.page338__grammarRow}>
                <span>Palavras interrogativas</span>
                <span>Aux. Verb</span>
                <span>Subject</span>
                <span>Verb (s)</span>
                <span>Object / Complement</span>
              </div>
            </div>
          </section>

          <section className={styles.page338__tableContent}>
            <div className={styles.page338__tableGroup}>
              <div className={styles.page338__tableRow}>
                <div className={styles.page338__pg338Cell}>
                  <span className={styles.page338__pg338Dash}>—</span>
                </div>
                <div className={styles.page338__pg338Cell}>
                  <span className={styles.page338__pg338Red}>Will</span>
                </div>
                <div className={styles.page338__pg338Cell}>
                  <span className={styles.page338__pg338Red}>I</span>
                  <span className={styles.page338__pg338Black}>Eu</span>
                  <span className={styles.page338__pg338Black}>Eu</span>
                </div>
                <div className={styles.page338__pg338Cell}>
                  <span className={styles.page338__pg338Red}>have</span>
                  <span className={styles.page338__pg338Black}>terei</span>
                  <span className={styles.page338__pg338Black}>vou ter</span>
                </div>
                <div className={styles.page338__pg338Cell}>
                  <span className={styles.page338__pg338Red}>
                    class tomorrow?
                    <img
                      src={eng_audio_icon}
                      alt="Play English Audio"
                      className={styles.page338__icon}
                      onClick={() => playAudio(audio2)}
                    />
                  </span>
                  <span className={styles.page338__pg338Black}>aula amanhã?</span>
                  <span className={styles.page338__pg338Black}>aula amanhã?</span>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.page338__tableContent}>
            <div className={styles.page338__tableGroup}>
              <div className={styles.page338__tableRow}>
                <div className={styles.page338__pg338Cell}>
                  <span className={styles.page338__pg338Dash}>—</span>
                </div>
                <div className={styles.page338__pg338Cell}>
                  <span className={styles.page338__pg338Red}>Will</span>
                </div>
                <div className={styles.page338__pg338Cell}>
                  <span className={styles.page338__pg338Red}>He</span>
                  <span className={styles.page338__pg338Black}>Ele</span>
                  <span className={styles.page338__pg338Black}>Ele</span>
                </div>
                <div className={styles.page338__pg338Cell}>
                  <span className={styles.page338__pg338Red}>travel</span>
                  <span className={styles.page338__pg338Black}>viajará</span>
                  <span className={styles.page338__pg338Black}>vai viajar</span>
                </div>
                <div className={styles.page338__pg338Cell}>
                  <span className={styles.page338__pg338Red}>
                    next week?
                    <img
                      src={eng_audio_icon}
                      alt="Play English Audio"
                      className={styles.page338__icon}
                      onClick={() => playAudio(audio3)}
                    />
                  </span>
                  <span className={styles.page338__pg338Black}>na semana que vem?</span>
                  <span className={styles.page338__pg338Black}>na semana que vem?</span>
                </div>
              </div>
            </div>

            <div className={styles.page338__tableGroup}>
              <div className={styles.page338__tableRow}>
                <div className={styles.page338__pg338Cell}>
                  <span className={styles.page338__pg338Dash}>—</span>
                </div>
                <div className={styles.page338__pg338Cell}>
                  <span className={styles.page338__pg338Red}>Will</span>
                </div>
                <div className={styles.page338__pg338Cell}>
                  <span className={styles.page338__pg338Red}>she</span>
                  <span className={styles.page338__pg338Black}>Ela</span>
                  <span className={styles.page338__pg338Black}>Ela</span>
                </div>
                <div className={styles.page338__pg338Cell}>
                  <span className={styles.page338__pg338Red}>call</span>
                  <span className={styles.page338__pg338Black}>ligará</span>
                  <span className={styles.page338__pg338Black}>vai ligar</span>
                </div>
                <div className={styles.page338__pg338Cell}>
                  <span className={styles.page338__pg338Red}>
                    you later?
                    <img
                      src={eng_audio_icon}
                      alt="Play English Audio"
                      className={styles.page338__icon}
                      onClick={() => playAudio(audio4)}
                    />
                  </span>
                  <span className={styles.page338__pg338Black}>para você mais tarde?</span>
                  <span className={styles.page338__pg338Black}>para você mais tarde?</span>
                </div>
              </div>
            </div>

            <div className={styles.page338__tableGroup}>
              <div className={styles.page338__tableRow}>
                <div className={styles.page338__pg338Cell}>
                  <span className={styles.page338__pg338Dash}>—</span>
                </div>
                <div className={styles.page338__pg338Cell}>
                  <span className={styles.page338__pg338Red}>Will</span>
                </div>
                <div className={styles.page338__pg338Cell}>
                  <span className={styles.page338__pg338Red}>it</span>
                  <span className={styles.page338__pg338Black}>-</span>
                  <span className={styles.page338__pg338Black}>-</span>
                </div>
                <div className={styles.page338__pg338Cell}>
                  <span className={styles.page338__pg338Red}>open</span>
                  <span className={styles.page338__pg338Black}>Abrirá</span>
                  <span className={styles.page338__pg338Black}>Vai abrir</span>
                </div>
                <div className={styles.page338__pg338Cell}>
                  <span className={styles.page338__pg338Red}>
                    at 10:00 a.m.?
                    <img
                      src={eng_audio_icon}
                      alt="Play English Audio"
                      className={styles.page338__icon}
                      onClick={() => playAudio(audio5)}
                    />
                  </span>
                  <span className={styles.page338__pg338Black}>às 10:00 da manhã?</span>
                  <span className={styles.page338__pg338Black}>às 10:00 da manhã?</span>
                </div>
              </div>
            </div>
          </section>

          <div className={styles.page338__noteBox}>
            <div className={styles.page338__noteTitle}>
              Nota: <span className={styles.page338__lightIcon}>💡</span>
            </div>
            <div className={styles.page338__noteContent}>
              <div className={styles.page338__noteFormula}>
                <span>• Conforme a tabela acima, não se esqueça de que o verbo auxiliar troca de posição com o sujeito nas perguntas.</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Pagina338;
