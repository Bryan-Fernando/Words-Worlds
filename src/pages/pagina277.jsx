import React, { useRef } from "react";
import styles from "./pagina277.module.css";

import eng_audio_icon from "../assets/icons/eng_audio_icon.webp";

import audio1 from "../assets/audios/pg277_audio1e.mp3";
import audio2 from "../assets/audios/pg277_audio2e.mp3";
import audio3 from "../assets/audios/pg277_audio3e.mp3";
import audio4 from "../assets/audios/pg277_audio4e.mp3";
import audio5 from "../assets/audios/pg277_audio5e.mp3";
import audio6 from "../assets/audios/pg277_audio6e.mp3";
import audio7 from "../assets/audios/pg277_audio7e.mp3";
import audio8 from "../assets/audios/pg277_audio8e.mp3";

const Pagina277 = () => {
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
    <div className={styles.container}>
      <div className={styles.pageContainer}>
        <header className={styles.header}>
          <h1 className={styles.headerTitle}>
            Grammar - <span className={styles.modalHighlight}>Should</span>
          </h1>
        </header>
        <main className={styles.mainContent}>
          <section className={styles.grammarSection}>
            <div className={styles.grammarHeaderNegative}>
              <h2 className={styles.grammarTitle}>Interrogative Form</h2>
            </div>
            <div className={styles.grammarContentNegative}>
              <div className={styles.grammarRowNegative}>
                <span>Subject</span>
                <span>Aux. Verb</span>
                <span>Adv</span>
                <span>Main Verb</span>
                <span>Object <br/> Complement</span>
              </div>
            </div>
          </section>

          <section className={styles.tableContent}>
            <div className={styles.tableGroup}>
              <div className={styles.tableRow}>
                <div className={styles.pg413Cell}>
                  <span className={styles.pg413Red}><em>Should</em></span>
                </div>
                <div className={styles.pg413Cell}>
                  <span className={styles.pg413Red}><em>I</em></span>
                  <span className={styles.pg413Black}><em>Eu deveria</em></span>
                </div>
                <div className={styles.pg413Cell}></div>
                <div className={styles.pg413Cell}>
                  <span className={styles.pg413Red}><em>go</em></span>
                  <span className={styles.pg413Black}><em>ir</em></span>
                </div>
                <div className={styles.pg413Cell}>
                  <span className={styles.pg413Red}>
                    <em>now?</em>
                    <img
                      src={eng_audio_icon}
                      alt="Play English Audio"
                      className={styles.page277__icon}
                      onClick={() => playAudio(audio1)}
                    />
                  </span>
                  <span className={styles.pg413Black}><em>agora?</em></span>
                </div>
              </div>
            </div>

            <div className={styles.tableGroup}>
              <div className={styles.tableRow}>
                <div className={styles.pg413Cell}>
                  <span className={styles.pg413Red}><em>Should</em></span>
                </div>
                <div className={styles.pg413Cell}>
                  <span className={styles.pg413Red}><em>he</em></span>
                  <span className={styles.pg413Black}><em>Ele deveria</em></span>
                </div>
                <div className={styles.pg413Cell}></div>
                <div className={styles.pg413Cell}>
                  <span className={styles.pg413Red}><em>take</em></span>
                  <span className={styles.pg413Black}><em>pegar</em></span>
                </div>
                <div className={styles.pg413Cell}>
                  <span className={styles.pg413Red}>
                    <em>the bus or the City train?</em>
                    <img
                      src={eng_audio_icon}
                      alt="Play English Audio"
                      className={styles.page277__icon}
                      onClick={() => playAudio(audio2)}
                    />
                  </span>
                  <span className={styles.pg413Black}><em>o ônibus ou o trem?</em></span>
                </div>
              </div>

              <div className={styles.tableRow}>
                <div className={styles.pg413Cell}>
                  <span className={styles.pg413Red}><em>Should</em></span>
                </div>
                <div className={styles.pg413Cell}>
                  <span className={styles.pg413Red}><em>she</em></span>
                  <span className={styles.pg413Black}><em>Ela deveria</em></span>
                </div>
                <div className={styles.pg413Cell}></div>
                <div className={styles.pg413Cell}>
                  <span className={styles.pg413Red}><em>invite</em></span>
                  <span className={styles.pg413Black}><em>convidá-los</em></span>
                </div>
                <div className={styles.pg413Cell}>
                  <span className={styles.pg413Red}>
                    <em>them to the party?</em>
                    <img
                      src={eng_audio_icon}
                      alt="Play English Audio"
                      className={styles.page277__icon}
                      onClick={() => playAudio(audio3)}
                    />
                  </span>
                  <span className={styles.pg413Black}><em>para a festa?</em></span>
                </div>
              </div>

              <div className={styles.tableRow}>
                <div className={styles.pg413Cell}>
                  <span className={styles.pg413Red}><em>Should</em></span>
                </div>
                <div className={styles.pg413Cell}>
                  <span className={styles.pg413Red}><em>it</em></span>
                  <span className={styles.pg413Black}><em>Deveria</em></span>
                </div>
                <div className={styles.pg413Cell}></div>
                <div className={styles.pg413Cell}>
                  <span className={styles.pg413Red}><em>be</em></span>
                  <span className={styles.pg413Black}><em>ser</em></span>
                </div>
                <div className={styles.pg413Cell}>
                  <span className={styles.pg413Red}>
                    <em>fixed?</em>
                    <img
                      src={eng_audio_icon}
                      alt="Play English Audio"
                      className={styles.page277__icon}
                      onClick={() => playAudio(audio4)}
                    />
                  </span>
                  <span className={styles.pg413Black}><em>consertado?</em></span>
                </div>
              </div>
            </div>

            <div className={styles.tableGroup}>
              <div className={styles.tableRow}>
                <div className={styles.pg413Cell}>
                  <span className={styles.pg413Red}><em>Should</em></span>
                </div>
                <div className={styles.pg413Cell}>
                  <span className={styles.pg413Red}><em>we</em></span>
                  <span className={styles.pg413Black}><em>Nós deveríamos</em></span>
                </div>
                <div className={styles.pg413Cell}></div>
                <div className={styles.pg413Cell}>
                  <span className={styles.pg413Red}><em>leave</em></span>
                  <span className={styles.pg413Black}><em>sair</em></span>
                </div>
                <div className={styles.pg413Cell}>
                  <span className={styles.pg413Red}>
                    <em>early?</em>
                    <img
                      src={eng_audio_icon}
                      alt="Play English Audio"
                      className={styles.page277__icon}
                      onClick={() => playAudio(audio5)}
                    />
                  </span>
                  <span className={styles.pg413Black}><em>cedo?</em></span>
                </div>
              </div>

              <div className={styles.tableRow}>
                <div className={styles.pg413Cell}>
                  <span className={styles.pg413Red}><em>Should</em></span>
                </div>
                <div className={styles.pg413Cell}>
                  <span className={styles.pg413Red}><em>you <span className={styles.sgplBlue}>(sg)</span></em></span>
                  <span className={styles.pg413Black}><em>Você deveria</em></span>
                </div>
                <div className={styles.pg413Cell}></div>
                <div className={styles.pg413Cell}>
                  <span className={styles.pg413Red}><em>call</em></span>
                  <span className={styles.pg413Black}><em>chamá-la?</em></span>
                </div>
                <div className={styles.pg413Cell}>
                  <span className={styles.pg413Red}>
                    <em>her?</em>
                    <img
                      src={eng_audio_icon}
                      alt="Play English Audio"
                      className={styles.page277__icon}
                      onClick={() => playAudio(audio6)}
                    />
                  </span>
                </div>
              </div>

              <div className={styles.tableRow}>
                <div className={styles.pg413Cell}>
                  <span className={styles.pg413Red}><em>Should</em></span>
                </div>
                <div className={styles.pg413Cell}>
                  <span className={styles.pg413Red}><em>you guys <span className={styles.sgplBlue}>(pl)</span></em></span>
                  <span className={styles.pg413Black}><em>Vocês deveriam</em></span>
                </div>
                <div className={styles.pg413Cell}></div>
                <div className={styles.pg413Cell}>
                  <span className={styles.pg413Red}><em>visit</em></span>
                  <span className={styles.pg413Black}><em>visitar</em></span>
                </div>
                <div className={styles.pg413Cell}>
                  <span className={styles.pg413Red}>
                    <em>the museum today?</em>
                    <img
                      src={eng_audio_icon}
                      alt="Play English Audio"
                      className={styles.page277__icon}
                      onClick={() => playAudio(audio7)}
                    />
                  </span>
                  <span className={styles.pg413Black}><em>o museu hoje?</em></span>
                </div>
              </div>

              <div className={styles.tableRow}>
                <div className={styles.pg413Cell}>
                  <span className={styles.pg413Red}><em>Should</em></span>
                </div>
                <div className={styles.pg413Cell}>
                  <span className={styles.pg413Red}><em>they</em></span>
                  <span className={styles.pg413Black}><em>Eles / Elas deveriam</em></span>
                </div>
                <div className={styles.pg413Cell}></div>
                <div className={styles.pg413Cell}>
                  <span className={styles.pg413Red}><em>come</em></span>
                  <span className={styles.pg413Black}><em>vir</em></span>
                </div>
                <div className={styles.pg413Cell}>
                  <span className={styles.pg413Red}>
                    <em>too?</em>
                    <img
                      src={eng_audio_icon}
                      alt="Play English Audio"
                      className={styles.page277__icon}
                      onClick={() => playAudio(audio8)}
                    />
                  </span>
                  <span className={styles.pg413Black}><em>também?</em></span>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Pagina277;
