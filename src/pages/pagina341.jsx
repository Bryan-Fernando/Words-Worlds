import React, { useRef } from "react";
import styles from "./pagina341.module.css";

import eng_audio_icon from "../assets/icons/eng_audio_icon.webp";

import audio1 from "../assets/audios/pg341_audio1e.mp3";
import audio2 from "../assets/audios/pg341_audio2e.mp3";
import audio3 from "../assets/audios/pg341_audio3e.mp3";
import audio4 from "../assets/audios/pg341_audio4e.mp3";
import audio5 from "../assets/audios/pg341_audio5e.mp3";

const Pagina341 = () => {
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
    <div className={styles.page341__container}>
      <div className={styles.page341__pageContainer}>
        <header className={styles.page341__header}>
          <h1 className={styles.page341__headerTitle}>Grammar - Simple Future</h1>
        </header>

        <main className={styles.page341__mainContent}>
          <section className={styles.page341__grammarIntro}>
            <div className={styles.page341__willVerb}>
              <h2>
                <span className={styles.page341__willBullet}></span>
                Will
                <img
                  src={eng_audio_icon}
                  alt="Play English Audio"
                  className={styles.page341__icon}
                  onClick={() => playAudio(audio1)}
                />
              </h2>
            </div>
          </section>

          <section className={styles.page341__grammarSection}>
            <div className={styles.page341__grammarHeader}>
              <h2 className={styles.page341__grammarTitle}>Negative Interrogative Form</h2>
            </div>
            <div className={styles.page341__grammarContent}>
              <div className={styles.page341__grammarRow}>
                <span>Palavras interrogativas</span>
                <span>Aux. Verb</span>
                <span>Subject</span>
                <span>Verb (s)</span>
                <span>Object Complement</span>
              </div>
            </div>
          </section>

          <section className={styles.page341__tableContent}>
            <div className={styles.page341__tableGroup}>
              <div className={styles.page341__tableRow}>
                <div className={styles.page341__pg338Cell}>
                  <span className={styles.page341__pg338Red}>—</span>
                </div>
                <div className={styles.page341__pg338Cell}>
                  <span className={styles.page341__pg338Red}>Won't</span>
                </div>
                <div className={styles.page341__pg338Cell}>
                  <span className={styles.page341__pg338Red}>we</span>
                  <span className={styles.page341__pg338Black}>Nós</span>
                  <span className={styles.page341__pg338Black}>Nós</span>
                </div>
                <div className={styles.page341__pg338Cell}>
                  <span className={styles.page341__pg338Red}>close</span>
                  <span><span className={styles.page341__blueText}>não</span> <span className={styles.page341__pg338Black}>fecharemos</span></span>
                  <span><span className={styles.page341__blueText}>não</span> <span className={styles.page341__pg338Black}>vamos fechar</span></span>
                </div>
                <div className={styles.page341__pg338Cell}>
                  <span className={styles.page341__pg338Red}>
                    the store at 5:00 p.m?
                    <img
                      src={eng_audio_icon}
                      alt="Play English Audio"
                      className={styles.page341__icon}
                      onClick={() => playAudio(audio2)}
                    />
                  </span>
                  <span className={styles.page341__pg338Black}>a loja às 17 horas?</span>
                  <span className={styles.page341__pg338Black}>a loja às 17 horas?</span>
                </div>
              </div>
            </div>

            <div className={styles.page341__tableGroup}>
              <div className={styles.page341__tableRow}>
                <div className={styles.page341__pg338Cell}>
                  <span className={styles.page341__pg338Red}>—</span>
                </div>
                <div className={styles.page341__pg338Cell}>
                  <span className={styles.page341__pg338Red}>Won't</span>
                </div>
                <div className={styles.page341__pg338Cell}>
                  <span className={styles.page341__pg338Red}>
                    you <span className={styles.page341__blueText}>( sg )</span>
                  </span>
                  <span className={styles.page341__pg338Black}>Você</span>
                  <span className={styles.page341__pg338Black}>Você</span>
                </div>
                <div className={styles.page341__pg338Cell}>
                  <span className={styles.page341__pg338Red}>need</span>
                  <span><span className={styles.page341__blueText}>não</span> <span className={styles.page341__pg338Black}>precisará</span></span>
                  <span><span className={styles.page341__blueText}>não</span> <span className={styles.page341__pg338Black}>vai precisar</span></span>
                </div>
                <div className={styles.page341__pg338Cell}>
                  <span className={styles.page341__pg338Red}>
                    a jacket?
                    <img
                      src={eng_audio_icon}
                      alt="Play English Audio"
                      className={styles.page341__icon}
                      onClick={() => playAudio(audio3)}
                    />
                  </span>
                  <span className={styles.page341__pg338Black}>de uma jaqueta?</span>
                  <span className={styles.page341__pg338Black}>de uma jaqueta?</span>
                </div>
              </div>
            </div>

            <div className={styles.page341__tableGroup}>
              <div className={styles.page341__tableRow}>
                <div className={styles.page341__pg338Cell}>
                  <span className={styles.page341__pg338Red}>—</span>
                </div>
                <div className={styles.page341__pg338Cell}>
                  <span className={styles.page341__pg338Red}>Won't</span>
                </div>
                <div className={styles.page341__pg338Cell}>
                  <span className={styles.page341__pg338Red}>
                    you all <span className={styles.page341__blueText}>( pl )</span>
                  </span>
                  <span className={styles.page341__pg338Black}>Vocês</span>
                  <span className={styles.page341__pg338Black}>Vocês</span>
                </div>
                <div className={styles.page341__pg338Cell}>
                  <span className={styles.page341__pg338Red}>need to work</span>
                  <span><span className={styles.page341__blueText}>não</span> <span className={styles.page341__pg338Black}>precisarão trabalhar</span></span>
                  <span><span className={styles.page341__blueText}>não</span> <span className={styles.page341__pg338Black}>vão precisar trabalhar</span></span>
                </div>
                <div className={styles.page341__pg338Cell}>
                  <span className={styles.page341__pg338Red}>
                    on the weekend?
                    <img
                      src={eng_audio_icon}
                      alt="Play English Audio"
                      className={styles.page341__icon}
                      onClick={() => playAudio(audio4)}
                    />
                  </span>
                  <span className={styles.page341__pg338Black}>no fim de semana?</span>
                  <span className={styles.page341__pg338Black}>no fim de semana?</span>
                </div>
              </div>
            </div>

            <div className={styles.page341__tableGroup}>
              <div className={styles.page341__tableRow}>
                <div className={styles.page341__pg338Cell}>
                  <span className={styles.page341__pg338Red}>—</span>
                </div>
                <div className={styles.page341__pg338Cell}>
                  <span className={styles.page341__pg338Red}>Won't</span>
                </div>
                <div className={styles.page341__pg338Cell}>
                  <span className={styles.page341__pg338Red}>they</span>
                  <span className={styles.page341__pg338Black}>Eles / Elas</span>
                  <span className={styles.page341__pg338Black}>Eles / Elas</span>
                </div>
                <div className={styles.page341__pg338Cell}>
                  <span className={styles.page341__pg338Red}>have to go to work</span>
                  <span><span className={styles.page341__blueText}>não</span> <span className={styles.page341__pg338Black}>terão que ir trabalhar</span></span>
                  <span><span className={styles.page341__blueText}>não</span> <span className={styles.page341__pg338Black}>vão ter que ir trabalhar</span></span>
                </div>
                <div className={styles.page341__pg338Cell}>
                  <span className={styles.page341__pg338Red}>
                    at 7:00 a.m?
                    <img
                      src={eng_audio_icon}
                      alt="Play English Audio"
                      className={styles.page341__icon}
                      onClick={() => playAudio(audio5)}
                    />
                  </span>
                  <span className={styles.page341__pg338Black}>às 7:00 da manhã?</span>
                  <span className={styles.page341__pg338Black}>às 7:00 da manhã?</span>
                </div>
              </div>
            </div>
          </section>

          <div className={styles.page341__noteBox}>
            <div className={styles.page341__noteTitle}>
              Nota: <span className={styles.page341__lightIcon}>💡</span>
            </div>
            <div className={styles.page341__noteContent}>
              <div className={styles.page341__noteFormula}>
                <span>• Conforme a tabela acima, não se esqueça de que o verbo auxiliar troca de posição com o sujeito nas perguntas.</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Pagina341;
