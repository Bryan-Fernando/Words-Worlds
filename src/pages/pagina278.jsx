import React, { useState, useRef } from 'react';
import styles from './pagina278.module.css';

import clock10_25 from '../assets/images/pagina278_imagem1.webp';
import clock10_30 from '../assets/images/pagina278_imagem2.webp';
import conversationImage from '../assets/images/pagina278_imagem3.webp';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import audio1e from '../assets/audios/pg278_audio1e.mp3';
import audio2e from '../assets/audios/pg278_audio2e.mp3';
import audio2p from '../assets/audios/pg278_audio2p.mp3';
import audio3e from '../assets/audios/pg278_audio3e.mp3';
import audio3p from '../assets/audios/pg278_audio3p.mp3';
import audio4e from '../assets/audios/pg278_audio4e.mp3';
import audio4p from '../assets/audios/pg278_audio4p.mp3';
import audio5e from '../assets/audios/pg278_audio5e.mp3';
import audio5p from '../assets/audios/pg278_audio5p.mp3';
import audio6e from '../assets/audios/pg278_audio6e.mp3';
import audio6p from '../assets/audios/pg278_audio6p.mp3';

const timeExamples = [
  {
    time: "10:25",
    texts: [
      { text: "It’s twenty-five past / after ten.", idE: "pg278_audio3e", idP: "pg278_audio3p" }
    ],
    image: clock10_25,
    alt: "Clock 10:25"
  },
  {
    time: "10:30",
    texts: [
      { text: "It’s half past ten.", idE: "pg278_audio4e", idP: "pg278_audio4p" }
    ],
    image: clock10_30,
    alt: "Clock 10:30"
  }
];

const Pagina278 = () => {
  const [selectedTime, setSelectedTime] = useState(timeExamples[0].time);
  const currentAudio = useRef(null);

  const handleShowClock = (time) => {
    setSelectedTime(time);
  };

  const audioMap = {
    'pg278_audio1e': audio1e,
    'pg278_audio2e': audio2e,
    'pg278_audio2p': audio2p,
    'pg278_audio3e': audio3e,
    'pg278_audio3p': audio3p,
    'pg278_audio4e': audio4e,
    'pg278_audio4p': audio4p,
    'pg278_audio5e': audio5e,
    'pg278_audio5p': audio5p,
    'pg278_audio6e': audio6e,
    'pg278_audio6p': audio6p,
  };

  const playAudio = (audioId) => {
    if (currentAudio.current) {
      currentAudio.current.pause();
      currentAudio.current.currentTime = 0;
    }
    const audio = new Audio(audioMap[audioId]);
    currentAudio.current = audio;
    audio.play();
  };

  const getClockImage = () => {
    const example = timeExamples.find(e => e.time === selectedTime);
    return example ? example.image : null;
  };

  return (
    <div className={styles["page278__container"]}>
      {/* Header */}
      <div className={styles["page278__header"]}>
        <div className={styles["page278__system-title"]}>Sistema Analógico</div>
        <h1 className={styles["page278__main-title"]}>
          How to Ask and Tell the Time
          <img
            src={eng_audio_icon}
            alt="Audio English"
            className={styles["page278__audio-icon"]}
            onClick={() => playAudio("pg278_audio1e")}
          />
        </h1>
        <p className={styles["page278__subtitle"]}>Como Perguntar e Dizer as Horas</p>
      </div>

      {/* Conteúdo em duas colunas */}
      <div className={styles["page278__content-row"]}>
        {/* Lado esquerdo: Textos */}
        <div className={styles["page278__left-content"]}>
          {timeExamples.map((example, index) => (
            <div key={index} className={styles["page278__example-block"]}>
              <p>
                <strong>A:</strong> What time is it?
                <img
                  src={eng_audio_icon}
                  alt="Audio English"
                  className={styles["page278__audio-icon"]}
                  onClick={() => playAudio("pg278_audio2e")}
                />
                <img
                  src={ptbr_audio_icon}
                  alt="Audio Portuguese"
                  className={styles["page278__audio-icon"]}
                  onClick={() => playAudio("pg278_audio2p")}
                />
              </p>
              {example.texts.map((item, i) => (
                <p
                  key={i}
                  className={styles["page278__text-red"]}
                  onClick={() => handleShowClock(example.time)}
                >
                  <strong>B:</strong> {item.text}
                  <img
                    src={eng_audio_icon}
                    alt="Audio English"
                    className={styles["page278__audio-icon"]}
                    onClick={(e) => {
                      e.stopPropagation();
                      playAudio(item.idE);
                    }}
                  />
                  <img
                    src={ptbr_audio_icon}
                    alt="Audio Portuguese"
                    className={styles["page278__audio-icon"]}
                    onClick={(e) => {
                      e.stopPropagation();
                      playAudio(item.idP);
                    }}
                  />
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* Lado direito: Relógio */}
        <div className={styles["page278__clock-container"]}>
          {getClockImage() && (
            <img
              src={getClockImage()}
              alt="Clock"
              className={styles["page278__clock-image"]}
            />
          )}
        </div>
      </div>

      {/* Conversa com balões */}
      <div className={styles["page278__conversation"]}>
        <div className={styles["page278__speech-left"]}>
          Could you tell me the time, please?
          <img
            src={eng_audio_icon}
            alt="Audio English"
            className={styles["page278__audio-icon"]}
            onClick={() => playAudio("pg278_audio5e")}
          />
          <img
            src={ptbr_audio_icon}
            alt="Audio Portuguese"
            className={styles["page278__audio-icon"]}
            onClick={() => playAudio("pg278_audio5p")}
          />
        </div>
        <div className={styles["page278__speech-right"]}>
          Sure, it’s 20 past 10.<br /> (20 after 10)
          <img
            src={eng_audio_icon}
            alt="Audio English"
            className={styles["page278__audio-icon"]}
            onClick={() => playAudio("pg278_audio6e")}
          />
          <img
            src={ptbr_audio_icon}
            alt="Audio Portuguese"
            className={styles["page278__audio-icon"]}
            onClick={() => playAudio("pg278_audio6p")}
          />
        </div>
        <img
          src={conversationImage}
          alt="People talking"
          className={styles["page278__conversation-image"]}
        />
      </div>
    </div>
  );
};

export default Pagina278;
