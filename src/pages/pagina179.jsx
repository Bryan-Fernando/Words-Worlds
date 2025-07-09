import React, { useState, useRef } from 'react';
import styles from './pagina179.module.css';

import clock10_00 from '../assets/images/pagina179_imagem1.webp';
import clock10_05 from '../assets/images/pagina179_imagem2.webp';
import clock10_10 from '../assets/images/pagina179_imagem3.webp';
import clock10_15 from '../assets/images/pagina179_imagem4.webp';
import clock10_20 from '../assets/images/pagina179_imagem5.webp';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import audio1e from '../assets/audios/pg179_audio1e.mp3';
import audio2e from '../assets/audios/pg179_audio2e.mp3';
import audio2p from '../assets/audios/pg179_audio2p.mp3';
import audio3e from '../assets/audios/pg179_audio3e.mp3';
import audio3p from '../assets/audios/pg179_audio3p.mp3';
import audio4e from '../assets/audios/pg179_audio4e.mp3';
import audio4p from '../assets/audios/pg179_audio4p.mp3';
import audio5e from '../assets/audios/pg179_audio5e.mp3';
import audio5p from '../assets/audios/pg179_audio5p.mp3';
import audio6e from '../assets/audios/pg179_audio6e.mp3';
import audio6p from '../assets/audios/pg179_audio6p.mp3';
import audio7e from '../assets/audios/pg179_audio7e.mp3';
import audio8e from '../assets/audios/pg179_audio8e.mp3';
import audio8p from '../assets/audios/pg179_audio8p.mp3';

const timeExamples = [
  {
    time: "10:00",
    texts: [
      { text: "It’s ten o’clock", idE: "pg179_audio3e", idP: "pg179_audio3p" }
    ],
    image: clock10_00,
    alt: "Clock 10:00"
  },
  {
    time: "10:05",
    texts: [
      { text: "It’s five past / after ten", idE: "pg179_audio4e", idP: "pg179_audio4p" }
    ],
    image: clock10_05,
    alt: "Clock 10:05"
  },
  {
    time: "10:10",
    texts: [
      { text: "It’s ten past / after ten", idE: "pg179_audio5e", idP: "pg179_audio5p" }
    ],
    image: clock10_10,
    alt: "Clock 10:10"
  },
  {
    time: "10:15",
    texts: [
      { text: "It’s quarter past / after ten.", idE: "pg179_audio6e", idP: "pg179_audio6p" },
      { text: "It’s fifteen past / after ten.", idE: "pg179_audio7e", idP: "pg179_audio6p" }
    ],
    image: clock10_15,
    alt: "Clock 10:15"
  },
  {
    time: "10:20",
    texts: [
      { text: "It’s twenty past / after ten.", idE: "pg179_audio8e", idP: "pg179_audio8p" }
    ],
    image: clock10_20,
    alt: "Clock 10:20"
  }
];

const Pagina179 = () => {
  const [selectedTime, setSelectedTime] = useState(timeExamples[0].time);
  const currentAudio = useRef(null);

  const handleShowClock = (time) => {
    setSelectedTime(time);
  };

  const audioMap = {
    'pg179_audio1e': audio1e,
    'pg179_audio2e': audio2e,
    'pg179_audio2p': audio2p,
    'pg179_audio3e': audio3e,
    'pg179_audio3p': audio3p,
    'pg179_audio4e': audio4e,
    'pg179_audio4p': audio4p,
    'pg179_audio5e': audio5e,
    'pg179_audio5p': audio5p,
    'pg179_audio6e': audio6e,
    'pg179_audio6p': audio6p,
    'pg179_audio7e': audio7e,
    'pg179_audio8e': audio8e,
    'pg179_audio8p': audio8p,
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
    <div className={styles["page179__container"]}>
      {/* Header */}
      <div className={styles["page179__header"]}>
        <div className={styles["page179__system-title"]}>Sistema Analógico</div>
        <h1 className={styles["page179__main-title"]}>
          How to Ask and Tell the Time
          <img
            src={eng_audio_icon}
            alt="Audio English"
            className={styles["page179__audio-icon"]}
            onClick={() => playAudio("pg179_audio1e")}
          />
        </h1>
        <p className={styles["page179__subtitle"]}>Como Perguntar e Dizer as Horas</p>
      </div>

      {/* Conteúdo */}
      <div className={styles["page179__content-row"]}>
        {/* Textos */}
        <div className={styles["page179__left-content"]}>
          {timeExamples.map((example, index) => (
            <div key={index} className={styles["page179__example-block"]}>
              <p>
                <strong>A:</strong> What time is it?
                <img
                  src={eng_audio_icon}
                  alt="Audio English"
                  className={styles["page179__audio-icon"]}
                  onClick={() => playAudio("pg179_audio2e")}
                />
                <img
                  src={ptbr_audio_icon}
                  alt="Audio Portuguese"
                  className={styles["page179__audio-icon"]}
                  onClick={() => playAudio("pg179_audio2p")}
                />
              </p>
              {example.texts.map((item, i) => (
                <p
                  key={i}
                  className={styles["page179__text-red"]}
                  onClick={() => handleShowClock(example.time)}
                >
                  <strong>B:</strong> {item.text}
                  <img
                    src={eng_audio_icon}
                    alt="Audio English"
                    className={styles["page179__audio-icon"]}
                    onClick={(e) => {
                      e.stopPropagation();
                      playAudio(item.idE);
                    }}
                  />
                  {item.idP && (
                    <img
                      src={ptbr_audio_icon}
                      alt="Audio Portuguese"
                      className={styles["page179__audio-icon"]}
                      onClick={(e) => {
                        e.stopPropagation();
                        playAudio(item.idP);
                      }}
                    />
                  )}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* Relógio */}
        <div className={styles["page179__clock-container"]}>
          {getClockImage() && (
            <img
              src={getClockImage()}
              alt="Clock"
              className={styles["page179__clock-image"]}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Pagina179;
