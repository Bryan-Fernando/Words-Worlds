import React, { useRef } from "react";
import styles from "./pagina276.module.css";

import eng_audio_icon from "../assets/icons/eng_audio_icon.webp";

import audio1 from "../assets/audios/pg276_audio1e.mp3";
import audio2 from "../assets/audios/pg276_audio2e.mp3";
import audio3 from "../assets/audios/pg276_audio3e.mp3";
import audio4 from "../assets/audios/pg276_audio4e.mp3";
import audio5 from "../assets/audios/pg276_audio5e.mp3";
import audio6 from "../assets/audios/pg276_audio6e.mp3";
import audio7 from "../assets/audios/pg276_audio7e.mp3";
import audio8 from "../assets/audios/pg276_audio8e.mp3";
import audio9 from "../assets/audios/pg276_audio9e.mp3";

const Pagina276 = () => {
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
              <h2 className={styles.grammarTitle}>Negative Form</h2>
            </div>
            <div className={styles.grammarContentNegative}>
              <div className={styles.grammarRowNegative}>
                <span>Subject</span>
                <span>Aux. Verb</span>
                <span>Not</span>
                <span>Main Verb</span>
                <span>Object <br/> Complement</span>
              </div>
            </div>
          </section>

          <section className={styles.tableContent}>
            {/* I */}
            <div className={styles.tableGroup}>
              <div className={styles.tableRow}>
                <div className={styles.pg413Cell}>
                  <span className={styles.pg413Red}><em>I</em></span>
                  <span className={styles.pg413Red}><em>I</em></span>
                  <span className={styles.pg413Black}><em>Eu</em></span>
                </div>
                <div className={styles.pg413Cell}>
                  <span className={styles.pg413Red}>
                    <em>should</em>
                  </span>
                  <span className={styles.pg413Red}>
                    <em>shouldn't</em>
                    <img
                      src={eng_audio_icon}
                      alt="Play English Audio"
                      className={styles.page276__icon}
                      onClick={() => playAudio(audio2)}
                    />
                  </span>
                  <span className={styles.pg413Black}><em>não deveria</em></span>
                </div>
                <div className={styles.pg413Cell}>
                  <span className={styles.pg413Red}><em><strong>not</strong></em></span>
                </div>
                <div className={styles.pg413Cell}>
                  <span className={styles.pg413Red}><em>eat</em></span>
                  <span className={styles.pg413Red}><em>eat</em></span>
                  <span className={styles.pg413Black}><em>comer</em></span>
                </div>
                <div className={styles.pg413Cell}>
                  <span className={styles.pg413Red}>
                    <em>too much candy</em>
                    <img
                      src={eng_audio_icon}
                      alt="Play English Audio"
                      className={styles.page276__icon}
                      onClick={() => playAudio(audio1)}
                    />
                  </span>
                  <span className={styles.pg413Black}><em>tanto doce</em></span>
                </div>
              </div>
            </div>

            {/* He, She, It */}
            <div className={styles.tableGroup}>
              <div className={styles.tableRow}>
                <div className={styles.pg413Cell}>
                  <span className={styles.pg413Red}>He</span>
                  <span className={styles.pg413Black}>Ele</span>
                </div>
                <div className={styles.pg413Cell}>
                  <span className={styles.pg413Red}>shouldn't</span>
                  <span className={styles.pg413Black}>não deveria</span>
                </div>
                <div className={styles.pg413Cell}></div>
                <div className={styles.pg413Cell}>
                  <span className={styles.pg413Red}>play</span>
                  <span className={styles.pg413Black}>jogar</span>
                </div>
                <div className={styles.pg413Cell}>
                  <span className={styles.pg413Red}>
                    videogames all night
                    <img
                      src={eng_audio_icon}
                      alt="Play English Audio"
                      className={styles.page276__icon}
                      onClick={() => playAudio(audio3)}
                    />
                  </span>
                  <span className={styles.pg413Black}>videogames a noite toda</span>
                </div>
              </div>

              <div className={styles.tableRow}>
                <div className={styles.pg413Cell}>
                  <span className={styles.pg413Red}>She</span>
                  <span className={styles.pg413Black}>Ela</span>
                </div>
                <div className={styles.pg413Cell}>
                  <span className={styles.pg413Red}>shouldn't</span>
                  <span className={styles.pg413Black}>não devia</span>
                  <span className={styles.pg413Black}>não deveria</span>
                </div>
                <div className={styles.pg413Cell}></div>
                <div className={styles.pg413Cell}>
                  <span className={styles.pg413Red}>forget to do</span>
                  <span className={styles.pg413Black}>esquecer de fazer</span>
                </div>
                <div className={styles.pg413Cell}>
                  <span className={styles.pg413Red}>
                    her homework
                    <img
                      src={eng_audio_icon}
                      alt="Play English Audio"
                      className={styles.page276__icon}
                      onClick={() => playAudio(audio4)}
                    />
                  </span>
                  <span className={styles.pg413Black}>sua lição de casa</span>
                </div>
              </div>

              <div className={styles.tableRow}>
                <div className={styles.pg413Cell}>
                  <span className={styles.pg413Red}>It</span>
                </div>
                <div className={styles.pg413Cell}>
                  <span className={styles.pg413Red}>shouldn't</span>
                  <span className={styles.pg413Black}>não devia</span>
                  <span className={styles.pg413Black}>não deveria</span>
                </div>
                <div className={styles.pg413Cell}></div>
                <div className={styles.pg413Cell}>
                  <span className={styles.pg413Red}>make</span>
                  <span className={styles.pg413Black}>fazer</span>
                </div>
                <div className={styles.pg413Cell}>
                  <span className={styles.pg413Red}>
                    that noise
                    <img
                      src={eng_audio_icon}
                      alt="Play English Audio"
                      className={styles.page276__icon}
                      onClick={() => playAudio(audio5)}
                    />
                  </span>
                  <span className={styles.pg413Black}>esse barulho</span>
                </div>
              </div>
            </div>

            {/* We, You, They */}
            <div className={styles.tableGroup}>
              <div className={styles.tableRow}>
                <div className={styles.pg413Cell}>
                  <span className={styles.pg413Red}>We</span>
                  <span className={styles.pg413Black}>Nós</span>
                </div>
                <div className={styles.pg413Cell}>
                  <span className={styles.pg413Red}>shouldn't</span>
                  <span className={styles.pg413Black}>não deveríamos</span>
                </div>
                <div className={styles.pg413Cell}></div>
                <div className={styles.pg413Cell}>
                  <span className={styles.pg413Red}>run</span>
                  <span className={styles.pg413Black}>correr</span>
                </div>
                <div className={styles.pg413Cell}>
                  <span className={styles.pg413Red}>
                    in the hallway
                    <img
                      src={eng_audio_icon}
                      alt="Play English Audio"
                      className={styles.page276__icon}
                      onClick={() => playAudio(audio6)}
                    />
                  </span>
                  <span className={styles.pg413Black}>no corredor</span>
                </div>
              </div>

              <div className={styles.tableRow}>
                <div className={styles.pg413Cell}>
                  <span className={styles.pg413Red}>You</span>
                  <span className={styles.pg413Black}>Você</span>
                </div>
                <div className={styles.pg413Cell}>
                  <span className={styles.pg413Red}>
                    shouldn't <span className={styles.sgplBlue}>(sg)</span>
                  </span>
                  <span className={styles.pg413Black}>não deveria</span>
                </div>
                <div className={styles.pg413Cell}></div>
                <div className={styles.pg413Cell}>
                  <span className={styles.pg413Red}>skip</span>
                  <span className={styles.pg413Black}>matar / cabular</span>
                </div>
                <div className={styles.pg413Cell}>
                  <span className={styles.pg413Red}>
                    class
                    <img
                      src={eng_audio_icon}
                      alt="Play English Audio"
                      className={styles.page276__icon}
                      onClick={() => playAudio(audio7)}
                    />
                  </span>
                  <span className={styles.pg413Black}>aula</span>
                </div>
              </div>

              <div className={styles.tableRow}>
                <div className={styles.pg413Cell}>
                  <span className={styles.pg413Red}>You all</span>
                  <span className={styles.pg413Black}>Vocês</span>
                </div>
                <div className={styles.pg413Cell}>
                  <span className={styles.pg413Red}>
                    shouldn't <span className={styles.sgplBlue}>(pl)</span>
                  </span>
                  <span className={styles.pg413Black}>não deveriam</span>
                </div>
                <div className={styles.pg413Cell}></div>
                <div className={styles.pg413Cell}>
                  <span className={styles.pg413Red}>talk</span>
                  <span className={styles.pg413Black}>falar</span>
                </div>
                <div className={styles.pg413Cell}>
                  <span className={styles.pg413Red}>
                    so loudly
                    <img
                      src={eng_audio_icon}
                      alt="Play English Audio"
                      className={styles.page276__icon}
                      onClick={() => playAudio(audio8)}
                    />
                  </span>
                  <span className={styles.pg413Black}>tão alto</span>
                </div>
              </div>

              <div className={styles.tableRow}>
                <div className={styles.pg413Cell}>
                  <span className={styles.pg413Red}>They</span>
                  <span className={styles.pg413Black}>Eles / Elas</span>
                </div>
                <div className={styles.pg413Cell}>
                  <span className={styles.pg413Red}>shouldn't</span>
                  <span className={styles.pg413Black}>não deveriam</span>
                </div>
                <div className={styles.pg413Cell}></div>
                <div className={styles.pg413Cell}>
                  <span className={styles.pg413Red}>go out</span>
                  <span className={styles.pg413Black}>sair</span>
                </div>
                <div className={styles.pg413Cell}>
                  <span className={styles.pg413Red}>
                    without a jacket
                    <img
                      src={eng_audio_icon}
                      alt="Play English Audio"
                      className={styles.page276__icon}
                      onClick={() => playAudio(audio9)}
                    />
                  </span>
                  <span className={styles.pg413Black}>sem casaco</span>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Pagina276;
