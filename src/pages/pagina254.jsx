import React, { useRef } from "react";
import styles from "./pagina254.module.css";

import audio1 from "../assets/audios/pg254_audio1e.mp3";
import audio2 from "../assets/audios/pg254_audio2e.mp3";
import audio3 from "../assets/audios/pg254_audio3e.mp3";
import audio4 from "../assets/audios/pg254_audio4e.mp3";
import audio5 from "../assets/audios/pg254_audio5e.mp3";
import audio6 from "../assets/audios/pg254_audio6e.mp3";
import audio7 from "../assets/audios/pg254_audio7e.mp3";
import audio8 from "../assets/audios/pg254_audio8e.mp3";
import audio9 from "../assets/audios/pg254_audio9e.mp3";
import audio10 from "../assets/audios/pg254_audio10e.mp3";
import audio11 from "../assets/audios/pg254_audio11e.mp3";
import audio12 from "../assets/audios/pg254_audio12e.mp3";
import audio13 from "../assets/audios/pg254_audio13e.mp3";
import audio14 from "../assets/audios/pg254_audio14e.mp3";
import audio15 from "../assets/audios/pg254_audio15e.mp3";
import audio16 from "../assets/audios/pg254_audio16e.mp3";
import audio17 from "../assets/audios/pg254_audio17e.mp3";
import audio18 from "../assets/audios/pg254_audio18e.mp3";
import audio19 from "../assets/audios/pg254_audio19e.mp3";
import audio20 from "../assets/audios/pg254_audio20e.mp3";
import audio21 from "../assets/audios/pg254_audio21e.mp3";
import audio22 from "../assets/audios/pg254_audio22e.mp3";
import audio23 from "../assets/audios/pg254_audio23e.mp3";

import eng_audio_icon from "../assets/icons/eng_audio_icon.webp";

const Pagina254 = () => {
  const audioRef = useRef(null);

  const playAudio = (file) => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    const a = new Audio(file);
    audioRef.current = a;
    a.play();
  };

  return (
    <div className={styles.container}>
      <div className={styles.pageContainer}>
        <header className={styles.header}>
          <h1 className={styles.headerTitle}>
            <span className={styles.grammarText}>Grammar</span>
            <span className={styles.titleSeparator}> - </span>
            <span className={styles.adjectivesText}>Adjectives</span>
          </h1>
        </header>

        <main className={styles.mainContent}>
          <section className={styles.explanationBox}>
            <p>
              <span className={styles.bulletPoint}>•</span>
              <span className={styles.boldText}>
                Adjetivos são palavras que caracterizam os substantivos (seres,
                animais, objetos, etc.)
              </span>
            </p>
            <p className={styles.secondLine}>
              Essa caracterização pode expressar{" "}
              <span className={styles.redText}>
                qualidade, defeito, estado ou condição
              </span>
              .
            </p>
          </section>

          <section className={styles.explanationBox}>
            <p>
              <span className={styles.bulletPoint}>•</span>
              Na língua inglesa, os adjetivos são classificados em dois tipos:{" "}
              <span className={styles.redText}>curtos e longos</span>.
            </p>
          </section>

          <section className={styles.adjectivesSection}>
            <div className={styles.adjectivesContainer}>
              <div className={styles.adjectiveColumn}>
                <div className={styles.columnHeader}>
                  <h3 className={styles.columnTitle}>CURTOS</h3>
                </div>
                <div className={styles.adjectivesList}>
                  <div className={styles.adjectiveRow}>
                    <span className={styles.englishWord}>
                      Happy
                      <img
                        src={eng_audio_icon}
                        alt="Play Happy"
                        className={styles.page254__icon}
                        onClick={() => playAudio(audio1)}
                      />
                    </span>
                    <span className={styles.portugueseWord}>Feliz</span>
                  </div>
                  <div className={styles.adjectiveRow}>
                    <span className={styles.englishWord}>
                      Sad
                      <img
                        src={eng_audio_icon}
                        alt="Play Sad"
                        className={styles.page254__icon}
                        onClick={() => playAudio(audio2)}
                      />
                    </span>
                    <span className={styles.portugueseWord}>Triste</span>
                  </div>
                  <div className={styles.adjectiveRow}>
                    <span className={styles.englishWord}>
                      New
                      <img
                        src={eng_audio_icon}
                        alt="Play New"
                        className={styles.page254__icon}
                        onClick={() => playAudio(audio3)}
                      />
                    </span>
                    <span className={styles.portugueseWord}>Novo(a)</span>
                  </div>
                  <div className={styles.adjectiveRow}>
                    <span className={styles.englishWord}>
                      Old
                      <img
                        src={eng_audio_icon}
                        alt="Play Old"
                        className={styles.page254__icon}
                        onClick={() => playAudio(audio4)}
                      />
                    </span>
                    <span className={styles.portugueseWord}>Velho(a)</span>
                  </div>
                  <div className={styles.adjectiveRow}>
                    <span className={styles.englishWord}>
                      Tall
                      <img
                        src={eng_audio_icon}
                        alt="Play Tall"
                        className={styles.page254__icon}
                        onClick={() => playAudio(audio5)}
                      />
                    </span>
                    <span className={styles.portugueseWord}>Alto(a)</span>
                  </div>
                  <div className={styles.adjectiveRow}>
                    <span className={styles.englishWord}>
                      Short
                      <img
                        src={eng_audio_icon}
                        alt="Play Short"
                        className={styles.page254__icon}
                        onClick={() => playAudio(audio6)}
                      />
                    </span>
                    <span className={styles.portugueseWord}>Baixo(a)</span>
                  </div>
                  <div className={styles.adjectiveRow}>
                    <span className={styles.englishWord}>
                      Fast
                      <img
                        src={eng_audio_icon}
                        alt="Play Fast"
                        className={styles.page254__icon}
                        onClick={() => playAudio(audio7)}
                      />
                    </span>
                    <span className={styles.portugueseWord}>Rápido(a)</span>
                  </div>
                  <div className={styles.adjectiveRow}>
                    <span className={styles.englishWord}>
                      Slow
                      <img
                        src={eng_audio_icon}
                        alt="Play Slow"
                        className={styles.page254__icon}
                        onClick={() => playAudio(audio8)}
                      />
                    </span>
                    <span className={styles.portugueseWord}>Devagar(a)</span>
                  </div>
                  <div className={styles.adjectiveRow}>
                    <span className={styles.englishWord}>
                      Smart
                      <img
                        src={eng_audio_icon}
                        alt="Play Smart"
                        className={styles.page254__icon}
                        onClick={() => playAudio(audio9)}
                      />
                    </span>
                    <span className={styles.portugueseWord}>Inteligente</span>
                  </div>
                  <div className={styles.adjectiveRow}>
                    <span className={styles.englishWord}>
                      Young
                      <img
                        src={eng_audio_icon}
                        alt="Play Young"
                        className={styles.page254__icon}
                        onClick={() => playAudio(audio10)}
                      />
                    </span>
                    <span className={styles.portugueseWord}>Jovem</span>
                  </div>
                </div>
              </div>

              <div className={styles.adjectiveColumn}>
                <div className={styles.columnHeader}>
                  <h3 className={styles.columnTitle}>LONGOS</h3>
                </div>
                <div className={styles.adjectivesList}>
                  <div className={styles.adjectiveRow}>
                    <span className={styles.englishWord}>
                      Important
                      <img
                        src={eng_audio_icon}
                        alt="Play Important"
                        className={styles.page254__icon}
                        onClick={() => playAudio(audio11)}
                      />
                    </span>
                    <span className={styles.portugueseWord}>Importante</span>
                  </div>
                  <div className={styles.adjectiveRow}>
                    <span className={styles.englishWord}>
                      Comfortable
                      <img
                        src={eng_audio_icon}
                        alt="Play Comfortable"
                        className={styles.page254__icon}
                        onClick={() => playAudio(audio12)}
                      />
                    </span>
                    <span className={styles.portugueseWord}>Confortável</span>
                  </div>
                  <div className={styles.adjectiveRow}>
                    <span className={styles.englishWord}>
                      Expensive
                      <img
                        src={eng_audio_icon}
                        alt="Play Expensive"
                        className={styles.page254__icon}
                        onClick={() => playAudio(audio13)}
                      />
                    </span>
                    <span className={styles.portugueseWord}>Caro</span>
                  </div>
                  <div className={styles.adjectiveRow}>
                    <span className={styles.englishWord}>
                      Creative
                      <img
                        src={eng_audio_icon}
                        alt="Play Creative"
                        className={styles.page254__icon}
                        onClick={() => playAudio(audio14)}
                      />
                    </span>
                    <span className={styles.portugueseWord}>Criativo(a)</span>
                  </div>
                  <div className={styles.adjectiveRow}>
                    <span className={styles.englishWord}>
                      Beautiful
                      <img
                        src={eng_audio_icon}
                        alt="Play Beautiful"
                        className={styles.page254__icon}
                        onClick={() => playAudio(audio15)}
                      />
                    </span>
                    <span className={styles.portugueseWord}>Bonita</span>
                  </div>
                  <div className={styles.adjectiveRow}>
                    <span className={styles.englishWord}>
                      Difficult
                      <img
                        src={eng_audio_icon}
                        alt="Play Difficult"
                        className={styles.page254__icon}
                        onClick={() => playAudio(audio16)}
                      />
                    </span>
                    <span className={styles.portugueseWord}>Difícil</span>
                  </div>
                  <div className={styles.adjectiveRow}>
                    <span className={styles.englishWord}>
                      Intelligent
                      <img
                        src={eng_audio_icon}
                        alt="Play Intelligent"
                        className={styles.page254__icon}
                        onClick={() => playAudio(audio17)}
                      />
                    </span>
                    <span className={styles.portugueseWord}>Inteligente</span>
                  </div>
                  <div className={styles.adjectiveRow}>
                    <span className={styles.englishWord}>
                      Delicious
                      <img
                        src={eng_audio_icon}
                        alt="Play Delicious"
                        className={styles.page254__icon}
                        onClick={() => playAudio(audio18)}
                      />
                    </span>
                    <span className={styles.portugueseWord}>Delicioso(a)</span>
                  </div>
                  <div className={styles.adjectiveRow}>
                    <span className={styles.englishWord}>
                      Generous
                      <img
                        src={eng_audio_icon}
                        alt="Play Generous"
                        className={styles.page254__icon}
                        onClick={() => playAudio(audio19)}
                      />
                    </span>
                    <span className={styles.portugueseWord}>Generoso(a)</span>
                  </div>
                  <div className={styles.adjectiveRow}>
                    <span className={styles.englishWord}>
                      Interesting
                      <img
                        src={eng_audio_icon}
                        alt="Play Interesting"
                        className={styles.page254__icon}
                        onClick={() => playAudio(audio20)}
                      />
                    </span>
                    <span className={styles.portugueseWord}>Interessante</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className={styles.noteBox}>
            <div className={styles.noteTitle}>NOTA</div>
            <div className={styles.noteContent}>
              <p>
                São considerados adjetivos curtos palavras de duas sílabas ou
                vogais.
              </p>
              <p>
                São considerados adjetivos longos palavras de mais de duas
                sílabas ou vogais.
              </p>
            </div>
          </div>

          <div className={styles.container}>
            <div className={styles.exceptionBox}>
              <div className={styles.title}>
                <em>Exceções:</em> Os seguintes adjetivos têm formas irregulares:
              </div>

              <div className={styles.adjectiveRow}>
                <div className={styles.englishGroup}>
                  <span className={styles.firstAdj}>
                    Good
                    <img
                      src={eng_audio_icon}
                      alt="Play Good, Better, Best"
                      className={styles.page254__icon}
                      onClick={() => playAudio(audio21)}
                    />
                  </span>
                  <span className={styles.boldAdj}>Better</span>
                  <span className={styles.boldAdj}>Best</span>
                </div>
                <span className={styles.dash}>—</span>
                <span className={styles.translation}>Bom, melhor</span>
              </div>

              <div className={styles.adjectiveRow}>
                <div className={styles.englishGroup}>
                  <span className={styles.firstAdj}>
                    Bad
                    <img
                      src={eng_audio_icon}
                      alt="Play Bad, Worse, Worst"
                      className={styles.page254__icon}
                      onClick={() => playAudio(audio22)}
                    />
                  </span>
                  <span className={styles.boldAdj}>Worse</span>
                  <span className={styles.boldAdj}>Worst</span>
                </div>
                <span className={styles.dash}>—</span>
                <span className={styles.translation}>Ruim, pior</span>
              </div>

              <div className={styles.adjectiveRow}>
                <div className={styles.englishGroup}>
                  <span className={styles.firstAdj}>
                    Far
                    <img
                      src={eng_audio_icon}
                      alt="Play Far, Farther, Further, Furthest"
                      className={styles.page254__icon}
                      onClick={() => playAudio(audio23)}
                    />
                  </span>
                  <span className={styles.boldAdj}>Farther</span>
                  <span className={styles.boldAdj}>Further</span>
                  <span className={styles.boldAdj}>Furthest</span>
                </div>
                <span className={styles.dash}>—</span>
                <span className={styles.translation}>
                  Longe, mais longe, além, o mais distante
                </span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Pagina254;
