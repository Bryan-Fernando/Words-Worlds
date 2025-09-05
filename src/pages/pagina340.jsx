import React, { useRef } from "react";
import styles from "./pagina340.module.css";

import eng_audio_icon from "../assets/icons/eng_audio_icon.webp";

import audio1 from "../assets/audios/pg340_audio1e.mp3";
import audio2 from "../assets/audios/pg340_audio2e.mp3";
import audio3 from "../assets/audios/pg340_audio3e.mp3";
import audio4 from "../assets/audios/pg340_audio4e.mp3";
import audio5 from "../assets/audios/pg340_audio5e.mp3";

const Pagina340 = () => {
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
    <div className={styles.page340__container}>
      <div className={styles.page340__pageContainer}>
        <header className={styles.page340__header}>
          <h1 className={styles.page340__headerTitle}>Grammar - Simple Future</h1>
        </header>

        <main className={styles.page340__mainContent}>
          <section className={styles.page340__grammarIntro}>
            <div className={styles.page340__willVerb}>
              <h2>
                <span className={styles.page340__willBullet}></span>
                Will
                <img
                  src={eng_audio_icon}
                  alt="Play English Audio"
                  className={styles.page340__icon}
                  onClick={() => playAudio(audio1)}
                />
              </h2>
            </div>
          </section>

          <section className={styles.page340__grammarSection}>
            <div className={styles.page340__grammarHeader}>
              <h2 className={styles.page340__grammarTitle}>Negative Interrogative Form</h2>
            </div>
            <div className={styles.page340__grammarContent}>
              <div className={styles.page340__grammarRow}>
                <span>Palavras interrogativas</span>
                <span>Aux. Verb</span>
                <span>Subject</span>
                <span>Verb (s)</span>
                <span>Object Complement</span>
              </div>
            </div>
          </section>

          <section className={styles.page340__tableContent}>
            <div className={styles.page340__tableGroup}>
              <div className={styles.page340__tableRow}>
                <div className={styles.page340__pg338Cell}>
                  <span className={styles.page340__pg338Red}>—</span>
                </div>
                <div className={styles.page340__pg338Cell}>
                  <span className={styles.page340__pg338Red}>Won't</span>
                </div>
                <div className={styles.page340__pg338Cell}>
                  <span className={styles.page340__pg338Red}>I</span>
                  <span className={styles.page340__pg338Black}>Eu</span>
                  <span className={styles.page340__pg338Black}>Eu</span>
                </div>
                <div className={styles.page340__pg338Cell}>
                  <span className={styles.page340__pg338Red}>have</span>
                  <span className={styles.page340__pg338Black}><span className={styles.page340__blueText}>não</span> terei</span>
                  <span className={styles.page340__pg338Black}><span className={styles.page340__blueText}>não</span> vou ter</span>
                </div>
                <div className={styles.page340__pg338Cell}>
                  <span className={styles.page340__pg338Red}>
                    class tomorrow?
                    <img
                      src={eng_audio_icon}
                      alt="Play English Audio"
                      className={styles.page340__icon}
                      onClick={() => playAudio(audio2)}
                    />
                  </span>
                  <span className={styles.page340__pg338Black}>aula amanhã?</span>
                  <span className={styles.page340__pg338Black}>aula amanhã?</span>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.page340__tableContent}>
            <div className={styles.page340__tableGroup}>
              <div className={styles.page340__tableRow}>
                <div className={styles.page340__pg338Cell}>
                  <span className={styles.page340__pg338Red}>—</span>
                </div>
                <div className={styles.page340__pg338Cell}>
                  <span className={styles.page340__pg338Red}>Won't</span>
                </div>
                <div className={styles.page340__pg338Cell}>
                  <span className={styles.page340__pg338Red}>He</span>
                  <span className={styles.page340__pg338Black}>Ele</span>
                  <span className={styles.page340__pg338Black}>Ele</span>
                </div>
                <div className={styles.page340__pg338Cell}>
                  <span className={styles.page340__pg338Red}>travel</span>
                  <span className={styles.page340__pg338Black}><span className={styles.page340__blueText}>não</span> viajará</span>
                  <span className={styles.page340__pg338Black}><span className={styles.page340__blueText}>não</span> vai viajar</span>
                </div>
                <div className={styles.page340__pg338Cell}>
                  <span className={styles.page340__pg338Red}>
                    next week?
                    <img
                      src={eng_audio_icon}
                      alt="Play English Audio"
                      className={styles.page340__icon}
                      onClick={() => playAudio(audio3)}
                    />
                  </span>
                  <span className={styles.page340__pg338Black}>na semana que vem?</span>
                  <span className={styles.page340__pg338Black}>na semana que vem?</span>
                </div>
              </div>
            </div>

            <div className={styles.page340__tableGroup}>
              <div className={styles.page340__tableRow}>
                <div className={styles.page340__pg338Cell}>
                  <span className={styles.page340__pg338Red}>—</span>
                </div>
                <div className={styles.page340__pg338Cell}>
                  <span className={styles.page340__pg338Red}>Won't</span>
                </div>
                <div className={styles.page340__pg338Cell}>
                  <span className={styles.page340__pg338Red}>she</span>
                  <span className={styles.page340__pg338Black}>Ela</span>
                  <span className={styles.page340__pg338Black}>Ela</span>
                </div>
                <div className={styles.page340__pg338Cell}>
                  <span className={styles.page340__pg338Red}>call</span>
                  <span className={styles.page340__pg338Black}><span className={styles.page340__blueText}>não</span> ligará</span>
                  <span className={styles.page340__pg338Black}><span className={styles.page340__blueText}>não</span> vai ligar</span>
                </div>
                <div className={styles.page340__pg338Cell}>
                  <span className={styles.page340__pg338Red}>
                    you later?
                    <img
                      src={eng_audio_icon}
                      alt="Play English Audio"
                      className={styles.page340__icon}
                      onClick={() => playAudio(audio4)}
                    />
                  </span>
                  <span className={styles.page340__pg338Black}>para você mais tarde?</span>
                  <span className={styles.page340__pg338Black}>para você mais tarde?</span>
                </div>
              </div>
            </div>

            <div className={styles.page340__tableGroup}>
              <div className={styles.page340__tableRow}>
                <div className={styles.page340__pg338Cell}>
                  <span className={styles.page340__pg338Red}>—</span>
                </div>
                <div className={styles.page340__pg338Cell}>
                  <span className={styles.page340__pg338Red}>Won't</span>
                </div>
                <div className={styles.page340__pg338Cell}>
                  <span className={styles.page340__pg338Red}>it</span>
                  <span className={styles.page340__pg338Black}>-</span>
                  <span className={styles.page340__pg338Black}>-</span>
                </div>
                <div className={styles.page340__pg338Cell}>
                  <span className={styles.page340__pg338Red}>open</span>
                  <span className={styles.page340__pg338Black}><span className={styles.page340__blueText}>não</span> abrirá</span>
                  <span className={styles.page340__pg338Black}><span className={styles.page340__blueText}>não</span> vai abrir</span>
                </div>
                <div className={styles.page340__pg338Cell}>
                  <span className={styles.page340__pg338Red}>
                    at 10:00 a.m.?
                    <img
                      src={eng_audio_icon}
                      alt="Play English Audio"
                      className={styles.page340__icon}
                      onClick={() => playAudio(audio5)}
                    />
                  </span>
                  <span className={styles.page340__pg338Black}>às 10:00 da manhã?</span>
                  <span className={styles.page340__pg338Black}>às 10:00 da manhã?</span>
                </div>
              </div>
            </div>
          </section>

          <div className={styles.page340__noteBox}>
            <div className={styles.page340__noteTitle}>
              Nota: <span className={styles.page340__lightIcon}>💡</span>
            </div>
            <div className={styles.page340__noteContent}>
              <div className={styles.page340__noteFormula}>
                <span>• Conforme a tabela acima, não se esqueça de que o verbo auxiliar troca de posição com o sujeito nas perguntas.</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Pagina340;
