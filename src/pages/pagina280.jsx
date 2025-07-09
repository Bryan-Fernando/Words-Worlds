import React, { useRef } from 'react';
import styles from './pagina280.module.css';

import img1 from '../assets/images/pagina280_imagem1.webp';
import img2 from '../assets/images/pagina280_imagem2.webp';
import img3 from '../assets/images/pagina280_imagem3.webp';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import audio1e from '../assets/audios/pg280_audio1e.mp3';
import audio2e from '../assets/audios/pg280_audio2e.mp3';
import audio2p from '../assets/audios/pg280_audio2p.mp3';
import audio3e from '../assets/audios/pg280_audio3e.mp3';
import audio3p from '../assets/audios/pg280_audio3p.mp3';
import audio4e from '../assets/audios/pg280_audio4e.mp3';
import audio4p from '../assets/audios/pg280_audio4p.mp3';
import audio5e from '../assets/audios/pg280_audio5e.mp3';
import audio5p from '../assets/audios/pg280_audio5p.mp3';
import audio6e from '../assets/audios/pg280_audio6e.mp3';
import audio6p from '../assets/audios/pg280_audio6p.mp3';
import audio7e from '../assets/audios/pg280_audio7e.mp3';
import audio7p from '../assets/audios/pg280_audio7p.mp3';

const Pagina280 = () => {
  const currentAudio = useRef(null);

  const audioMap = {
    'pg280_audio1e': audio1e,
    'pg280_audio2e': audio2e,
    'pg280_audio2p': audio2p,
    'pg280_audio3e': audio3e,
    'pg280_audio3p': audio3p,
    'pg280_audio4e': audio4e,
    'pg280_audio4p': audio4p,
    'pg280_audio5e': audio5e,
    'pg280_audio5p': audio5p,
    'pg280_audio6e': audio6e,
    'pg280_audio6p': audio6p,
    'pg280_audio7e': audio7e,
    'pg280_audio7p': audio7p,
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

  return (
    <div className={styles["page280__container"]}>

      {/* Header */}
      <div className={styles["page280__header"]}>
        <div className={styles["page280__system-title"]}>Sistema Analógico</div>
        <h1 className={styles["page280__main-title"]}>
          How to Ask and Tell the Time
          <img
            src={eng_audio_icon}
            alt="English audio"
            className={styles["page280__audio-icon"]}
            onClick={() => playAudio('pg280_audio1e')}
          />
        </h1>
        <p className={styles["page280__subtitle"]}>Como Perguntar e Dizer as Horas</p>
      </div>

      {/* Bloco Pergunta + Relógio */}
      <div className={styles["page280__top-example"]}>
        <div>
          <p>
            <strong>A:</strong> What time is it?
            <img
              src={eng_audio_icon}
              alt="English audio"
              className={styles["page280__audio-icon"]}
              onClick={() => playAudio('pg280_audio2e')}
            />
            <img
              src={ptbr_audio_icon}
              alt="Portuguese audio"
              className={styles["page280__audio-icon"]}
              onClick={() => playAudio('pg280_audio2p')}
            />
          </p>
          <p className={styles["page280__text-red"]}>
            <strong>B:</strong> It’s five to eleven
            <img
              src={eng_audio_icon}
              alt="English audio"
              className={styles["page280__audio-icon"]}
              onClick={() => playAudio('pg280_audio3e')}
            />
            <img
              src={ptbr_audio_icon}
              alt="Portuguese audio"
              className={styles["page280__audio-icon"]}
              onClick={() => playAudio('pg280_audio3p')}
            />
          </p>
        </div>
        <img src={img1} alt="Clock" className={styles["page280__image"]} />
      </div>

      {/* Bloco de imagens com balões */}
      <div className={styles["page280__image-block"]}>

        {/* Primeiro grupo */}
        <div className={styles["page280__image-wrapper"]}>
          <div className={styles["page280__speech-left"]}>
            It’s 10:45. 
            <br />
            <img
                src={eng_audio_icon}
                alt="English audio"
                className={styles["page280__audio-icon"]}
                onClick={() => playAudio('pg280_audio4e')}
              />
              <img
                src={ptbr_audio_icon}
                alt="Portuguese audio"
                className={styles["page280__audio-icon"]}
                onClick={() => playAudio('pg280_audio4p')}
              /> <br />
            <span>( quarter to 11 )
              
              <br />( fifteen to 11 )
            </span>
          </div>
          <div className={styles["page280__speech-right-red"]}>
            What time is it?
              <img
                src={eng_audio_icon}
                alt="English audio"
                className={styles["page280__audio-icon"]}
                onClick={() => playAudio('pg280_audio5e')}
              />
              <img
                src={ptbr_audio_icon}
                alt="Portuguese audio"
                className={styles["page280__audio-icon"]}
                onClick={() => playAudio('pg280_audio5p')}
              />
          </div>
          <img src={img2} alt="People asking time" className={styles["page280__conversation-image"]} />
        </div>

        {/* Segundo grupo */}
        <div className={styles["page280__image-wrapper"]}>
          <div className={styles["page280__speech-left"]}>
            Do you have the time, please?
            <img
              src={eng_audio_icon}
              alt="English audio"
              className={styles["page280__audio-icon"]}
              onClick={() => playAudio('pg280_audio6e')}
            />
            <img
              src={ptbr_audio_icon}
              alt="Portuguese audio"
              className={styles["page280__audio-icon"]}
              onClick={() => playAudio('pg280_audio6p')}
            />
          </div>
          <div className={styles["page280__speech-right-red"]}>
            It’s 10:00. 
            <img
              src={eng_audio_icon}
              alt="English audio"
              className={styles["page280__audio-icon"]}
              onClick={() => playAudio('pg280_audio7e')}
            />
            <img
              src={ptbr_audio_icon}
              alt="Portuguese audio"
              className={styles["page280__audio-icon"]}
              onClick={() => playAudio('pg280_audio7p')}
            />
            <br />( o’clock )
          </div>
          <img src={img3} alt="People answering time" className={styles["page280__conversation-image"]} />
        </div>
      </div>

      {/* Nota */}
      <div className={styles["page280__note"]}>
        <div className={styles["page280__note-header"]}>Nota:</div>
        <div className={styles["page280__note-content"]}>
          A partir de <strong>10:56 até 10:59</strong> é muito comum usar a expressão:
          <br />
          <span className={styles["page280__red-bold"]}>
            It’s almost eleven o’clock.
          </span> = São quase <span className={styles["page280__blue-bold"]}>onze horas</span>
        </div>
      </div>
    </div>
  );
};

export default Pagina280;
