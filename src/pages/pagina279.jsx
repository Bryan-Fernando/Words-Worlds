import React, { useState, useRef } from 'react';
import styles from './pagina279.module.css';

import clock10_35 from '../assets/images/pagina279_imagem1.webp';
import clock10_40 from '../assets/images/pagina279_imagem2.webp';
import clock10_45 from '../assets/images/pagina279_imagem3.webp';
import clock10_50 from '../assets/images/pagina279_imagem4.webp';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import audio1e from '../assets/audios/pg279_audio1e.mp3';
import audio2e from '../assets/audios/pg279_audio2e.mp3';
import audio2p from '../assets/audios/pg279_audio2p.mp3';
import audio3e from '../assets/audios/pg279_audio3e.mp3';
import audio3p from '../assets/audios/pg279_audio3p.mp3';
import audio4e from '../assets/audios/pg279_audio4e.mp3';
import audio4p from '../assets/audios/pg279_audio4p.mp3';
import audio5e from '../assets/audios/pg279_audio5e.mp3';
import audio6e from '../assets/audios/pg279_audio6e.mp3';
import audio6p from '../assets/audios/pg279_audio6p.mp3';
import audio7e from '../assets/audios/pg279_audio7e.mp3';
import audio7p from '../assets/audios/pg279_audio7p.mp3';

const timeExamples = [
  {
    time: "10:35",
    texts: [
      { text: "It’s twenty-five to eleven", idE: "pg279_audio3e", idP: "pg279_audio3p" }
    ],
    image: clock10_35,
    alt: "Clock 10:35"
  },
  {
    time: "10:40",
    texts: [
      { text: "It’s twenty to eleven", idE: "pg279_audio4e", idP: "pg279_audio4p" }
    ],
    image: clock10_40,
    alt: "Clock 10:40"
  },
  {
    time: "10:45",
    texts: [
      { text: "It’s quarter to eleven", idE: "pg279_audio5e", idP: "pg279_audio6p" },
      { text: "It’s fifteen to eleven", idE: "pg279_audio6e", idP: "pg279_audio6p" }
    ],
    image: clock10_45,
    alt: "Clock 10:45"
  },
  {
    time: "10:50",
    texts: [
      { text: "It’s ten to eleven", idE: "pg279_audio7e", idP: "pg279_audio7p" }
    ],
    image: clock10_50,
    alt: "Clock 10:50"
  }
];

const Pagina279 = () => {
  const [selectedTime, setSelectedTime] = useState(timeExamples[0].time);
  const currentAudio = useRef(null);

  const handleShowClock = (time) => {
    setSelectedTime(time);
  };

  const audioMap = {
    'pg279_audio1e': audio1e,
    'pg279_audio2e': audio2e,
    'pg279_audio2p': audio2p,
    'pg279_audio3e': audio3e,
    'pg279_audio3p': audio3p,
    'pg279_audio4e': audio4e,
    'pg279_audio4p': audio4p,
    'pg279_audio5e': audio5e,
    'pg279_audio6e': audio6e,
    'pg279_audio6p': audio6p,
    'pg279_audio7e': audio7e,
    'pg279_audio7p': audio7p,
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
    <div className={styles["page279__container"]}>
      {/* Header */}
      <div className={styles["page279__header"]}>
        <div className={styles["page279__system-title"]}>Sistema Analógico</div>
        <h1 className={styles["page279__main-title"]}>
          How to Ask and Tell the Time
          <img
            src={eng_audio_icon}
            alt="Audio English"
            className={styles["page279__audio-icon"]}
            onClick={() => playAudio("pg279_audio1e")}
          />
        </h1>
        <p className={styles["page279__subtitle"]}>Como Perguntar e Dizer as Horas</p>
      </div>

      {/* Conteúdo em duas colunas */}
      <div className={styles["page279__content-row"]}>
        {/* Lado esquerdo */}
        <div className={styles["page279__left-content"]}>
          {timeExamples.map((example, index) => (
            <div key={index} className={styles["page279__example-block"]}>
              <p>
                <strong>A:</strong> What time is it?
                <img
                  src={eng_audio_icon}
                  alt="Audio English"
                  className={styles["page279__audio-icon"]}
                  onClick={() => playAudio("pg279_audio2e")}
                />
                <img
                  src={ptbr_audio_icon}
                  alt="Audio Portuguese"
                  className={styles["page279__audio-icon"]}
                  onClick={() => playAudio("pg279_audio2p")}
                />
              </p>
              {example.texts.map((item, i) => (
                <p
                  key={i}
                  className={styles["page279__text-red"]}
                  onClick={() => handleShowClock(example.time)}
                >
                  <strong>B:</strong> {item.text}
                  <img
                    src={eng_audio_icon}
                    alt="Audio English"
                    className={styles["page279__audio-icon"]}
                    onClick={(e) => {
                      e.stopPropagation();
                      playAudio(item.idE);
                    }}
                  />
                  <img
                    src={ptbr_audio_icon}
                    alt="Audio Portuguese"
                    className={styles["page279__audio-icon"]}
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

        {/* Lado direito */}
        <div className={styles["page279__clock-container"]}>
          {getClockImage() && (
            <img
              src={getClockImage()}
              alt="Clock"
              className={styles["page279__clock-image"]}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Pagina279;
