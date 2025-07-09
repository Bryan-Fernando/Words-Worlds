import React from 'react';
import styles from './pagina178.module.css';

import image1 from '../assets/images/pagina178_imagem1.webp';
import image2 from '../assets/images/pagina178_imagem2.webp';
import image3 from '../assets/images/pagina178_imagem3.webp';

// Ícone
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';

// Áudios
import audio1e from '../assets/audios/pg178_audio1e.mp3';
import audio2e from '../assets/audios/pg178_audio2e.mp3';
import audio3e from '../assets/audios/pg178_audio3e.mp3';

const Pagina178 = () => {
  const audioMap = {
    'pg178_audio1e': audio1e,
    'pg178_audio2e': audio2e,
    'pg178_audio3e': audio3e,
  };

  const playAudio = (audioId) => {
    const audio = new Audio(audioMap[audioId]);
    audio.play();
  };

  return (
    <div className={styles["page178__container"]}>

      {/* Header */}
      <div className={styles["page178__header"]}>
        <div className={styles["page178__system-title"]}>Sistema Analógico</div>
        <h1 className={styles["page178__main-title"]}>
          How to Ask and Tell the Time
          <img
            src={eng_audio_icon}
            alt="Audio English"
            className={styles["page178__audio-icon"]}
            onClick={() => playAudio("pg178_audio1e")}
          />
        </h1>
        <p className={styles["page178__subtitle"]}>Como Perguntar e Dizer as Horas</p>
      </div>

      {/* Frase centralizada acima do relógio do meio */}
      <p className={styles["page178__clock-caption"]}>
        It is ______ o’clock. <br /> hora(s) (exata/s)
      </p>

      {/* Imagens dos relógios */}
      <div className={styles["page178__images"]}>
        <img src={image1} alt="Clock 1" className={styles["page178__image"]} />
        <img src={image2} alt="Clock 2" className={styles["page178__image"]} />
        <img src={image3} alt="Clock 3" className={styles["page178__image"]} />
      </div>

      {/* Blocos de texto em 2 colunas */}
      <div className={styles["page178__columns"]}>

        {/* Coluna esquerda */}
        <div className={styles["page178__text-section"]}>
          <p>
            <span className={styles["page178__blue"]}>● Lado esquerdo do relógio</span><br />
            <span className={styles["page178__red"]}>
              Em inglês usamos os minutos <span className={styles["page178__blue"]}>(29 - 59)</span> antes das horas como em português.
            </span>
          </p>
        </div>

        {/* Coluna direita */}
        <div className={styles["page178__text-section"]}>
          <p>
            <span className={styles["page178__blue"]}>Lado direito do relógio</span><br />
            <span className={styles["page178__red"]}>
              ● Em inglês
            </span> usamos <span className={styles["page178__red"]}>os minutos</span> <span style={{ fontWeight: 'bold' }}>antes das horas</span> no sistema analógico até 30 min.<br />
            <span className={styles["page178__red"]}>Em português</span> usamos <span className={styles["page178__red"]}>as horas</span> <span style={{ fontWeight: 'bold' }}>antes dos minutos.</span>
          </p>
        </div>

      </div>

      {/* Exemplos abaixo das colunas */}
      <div className={styles["page178__example-section"]}>
        <div className={styles["page178__columns"]}>

          {/* Exemplo lado esquerdo */}
          <div>
            <p className={styles["page178__red"]}>Exemplo:</p>
            <p>
              <span className={styles["page178__blue"]}>
                It is twenty to eleven.
                <img
                  src={eng_audio_icon}
                  alt="Audio English"
                  className={styles["page178__audio-icon"]}
                  onClick={() => playAudio("pg178_audio2e")}
                />
              </span><br />
              <span className={styles["page178__red"]}>São vinte para as onze.</span>
            </p>
          </div>

          {/* Exemplo lado direito */}
          <div>
            <p className={styles["page178__red"]}>Exemplo:</p>
            <p>
              <span className={styles["page178__blue"]}>
                It is twenty past ten.
                <img
                  src={eng_audio_icon}
                  alt="Audio English"
                  className={styles["page178__audio-icon"]}
                  onClick={() => playAudio("pg178_audio3e")}
                />
              </span><br />
              <span className={styles["page178__red"]}>São dez e vinte.</span>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Pagina178;
