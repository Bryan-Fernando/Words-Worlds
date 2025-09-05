import React, { useRef } from "react";
import styles from "./pagina258.module.css";

import audio1 from "../assets/audios/pg258_audio1e.mp3";
import audio2 from "../assets/audios/pg258_audio2e.mp3";
import audio3 from "../assets/audios/pg258_audio3e.mp3";
import audio4 from "../assets/audios/pg258_audio4e.mp3";
import audio5 from "../assets/audios/pg258_audio5e.mp3";

import eng_audio_icon from "../assets/icons/eng_audio_icon.webp";

const Pagina258 = () => {
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
    <div className={styles.pageContainer}>
      <div className={styles.titleContainer}>
        <span className={styles.grammarText}>Grammar</span>
        <span className={styles.dashText}> - </span>
        <span className={styles.adjectivesText}>Adjectives</span>
      </div>

      <div className={styles.comparativesContainer}>
        <div className={styles.comparativesSection}>
          <div className={styles.comparativeSection}>
            <div className={styles.sectionTitle1}>
              <div className={styles.redText1}>
                Superlativo (de
                <span className={styles.redText}> superioridade</span>)
              </div>
              <div>( Comparando com um grupo )</div>
            </div>

            <div className={styles.noteBox}>
              <div className={styles.noteContent}>
                Acrescente "<span className={styles.noteContenter}>the</span>" + "
                <span className={styles.noteContenter}>est</span>" ao adjetivo.
              </div>
            </div>

            <div className={styles.sectionTitle}>
              <div className={styles.redSquare}></div>
              <span>ADJETIVOS CURTOS</span>
            </div>

            <div className={styles.exampleCard}>
              <div className={styles.exampleItem1}>
                <div className={styles.englishSentence}>
                  Paul is <span className={styles.noteContenter}>the</span> tall
                  <span className={styles.noteContenter}>est</span> student in the
                  classroom.
                  <img
                    src={eng_audio_icon}
                    alt="Play Paul is the tallest student in the classroom."
                    className={styles.page258__icon}
                    onClick={() => playAudio(audio1)}
                  />
                </div>
                <div className={styles.translationText}>
                  Paul é <span className={styles.noteContenter}>o</span> aluno{" "}
                  <span className={styles.noteContenter}>mais</span> alto do que a
                  sala de aula.
                </div>
              </div>

              <div className={styles.exampleItem1}>
                <div className={styles.englishSentence}>
                  Isabel is <span className={styles.noteContenter}>the</span> old
                  <span className={styles.noteContenter}>est</span> teacher in
                  school.
                  <img
                    src={eng_audio_icon}
                    alt="Play Isabel is the oldest teacher in school."
                    className={styles.page258__icon}
                    onClick={() => playAudio(audio2)}
                  />
                </div>
                <div className={styles.translationText}>
                  Isabel é <span className={styles.noteContenter}>a</span>{" "}
                  professora <span className={styles.noteContenter}>mais</span>{" "}
                  velha do que a escola.
                </div>
              </div>
            </div>
          </div>

          <div className={styles.comparativeSection}>
            <div className={styles.sectionTitle1}>
              <div className={styles.redText1}>
                Superlativo (de
                <span className={styles.redText}> inferioridade</span>)
              </div>
              <div>( Comparando com um grupo )</div>
            </div>

            <div className={styles.noteBox}>
              <div className={styles.noteContent}>
                Acrescente "<span className={styles.noteContenter}>the</span>" + "
                <span className={styles.noteContenter}>est</span>" ao adjetivo.
              </div>
            </div>

            <div className={styles.sectionTitle}>
              <div className={styles.redSquare}></div>
              <span>ADJETIVOS CURTOS</span>
            </div>

            <div className={styles.exampleCard}>
              <div className={styles.exampleItem1}>
                <div className={styles.englishSentence}>
                  The white car is{" "}
                  <span className={styles.noteContenter}>the</span> slow
                  <span className={styles.noteContenter}>est</span> in Formula X.
                  <img
                    src={eng_audio_icon}
                    alt="Play The white car is the slowest in Formula X."
                    className={styles.page258__icon}
                    onClick={() => playAudio(audio3)}
                  />
                </div>
                <div className={styles.translationText}>
                  O carro branco é{" "}
                  <span className={styles.noteContenter}>o mais</span> lento do
                  que a Fórmula X.
                </div>
              </div>

              <div className={styles.exampleItem1}>
                <div className={styles.englishSentence}>
                  Sarah is <span className={styles.noteContenter}>the</span> young
                  <span className={styles.noteContenter}>est</span> teacher in
                  school.
                  <img
                    src={eng_audio_icon}
                    alt="Play Sarah is the youngest teacher in school."
                    className={styles.page258__icon}
                    onClick={() => playAudio(audio4)}
                  />
                </div>
                <div className={styles.translationText}>
                  Sarah é <span className={styles.noteContenter}>a</span>{" "}
                  professora <span className={styles.noteContenter}>mais</span>{" "}
                  jovem do que a escola.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.contextmain}>
          <div className={styles.contextBox}>
            <div className={styles.contextBlock1}>
              <div className={styles.contextTitle}>
                <span className={styles.redText1}>Contexto</span>
                <span style={{ fontWeight: "normal" }}>
                  : Dois carros lentos, mas um é mais lento:
                </span>
              </div>
              <div className={styles.contextExamples}>
                <div className={styles.noteText}>
                  Se dois carros são lentos, mas um é mais lento que o outro, usamos
                  o{" "}
                  <span className={styles.redText1}>
                    comparativo de superioridade
                  </span>{" "}
                  <span style={{ fontWeight: "900" }}>(não o superlativo)</span> -
                  mesmo que ambos compartilhem a mesma característica (lentidão).
                </div>
              </div>
            </div>

            <div className={styles.contextBlock2}>
              <div className={styles.noteText}>
                <span className={styles.redText1}>
                  "The white car is slower than the yellow car."
                </span>
                <img
                  src={eng_audio_icon}
                  alt="Play The white car is slower than the yellow car."
                  className={styles.page258__icon}
                  onClick={() => playAudio(audio5)}
                />
              </div>
              <div className={styles.noteText}>
                "O carro branco é <span className={styles.redText1}>mais lento do que</span> o carro amarelo."
              </div>
              <div className={styles.noteText}>
                Essa é a forma mais comum, natural e usada no inglês real.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagina258;
