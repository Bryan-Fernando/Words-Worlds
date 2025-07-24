import React, { useRef, useState } from 'react';
import styles from './pagina277.module.css';

import pagina277_imagem1 from '../assets/images/pagina275_imagem1.webp';
import pagina277_imagem2 from '../assets/images/pagina277_imagem1.webp';

import map3 from '../assets/images/map3.mp4';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import audio1 from '../assets/audios/pg277_audio1e.mp3'; // Novo áudio

const Pagina277 = () => {
  const [videoSrc, setVideoSrc] = useState(null);
  const currentAudio = useRef(null);

  const playAudio = () => {
    if (currentAudio.current) {
      currentAudio.current.pause();
      currentAudio.current.currentTime = 0;
    }
    const audio = new Audio(audio1);
    currentAudio.current = audio;
    audio.play();
  };

  const handlePlayVideo = (map) => {
    setVideoSrc(map);
  };

  const handleCloseVideo = () => {
    setVideoSrc(null);
  };

  return (
    <div className={styles.container}>
      <img src={pagina277_imagem1} alt="Map 3" className={styles.mapImage} />

      <div className={styles.dialogueWrapper}>
        <div className={styles.dialogueNumber}>3</div>

        <section className={styles.dialogueSection}>
          <div className={styles.dialogueImageContainer}>
            <img src={pagina277_imagem2} alt="Dialogue Image" className={styles.dialogueImage} />
          </div>

          <div className={styles.textBlock}>
            <div>
              <span className={styles.nameBlue}>Nick</span>
              <div className={styles.speechBubble}>
                Hi there! Can you help me find the nearest ATM?
                <img
                  src={eng_audio_icon}
                  alt="Play audio"
                  className={styles.audioIcon}
                  onClick={playAudio}
                />
                <em>Olá! Você pode me ajudar a encontrar o caixa eletrônico mais próximo?</em>
              </div>
            </div>

            <div>
              <span className={styles.nameRed}>Margaret</span>
              <div
                className={`${styles.speechBubble} ${styles.directions}`}
                onClick={() => handlePlayVideo(map3)}
              >
                Hi! Of course, there’s an ATM around the corner. Just walk straight ahead and take first right.
                You’ll see it across the Avenue.
                <em>Oi! Claro, há um caixa eletrônico na esquina. Apenas ande em frente e vire na primeira à direita. Você vai ver do outro lado da Avenida.</em>
              </div>
            </div>
          </div>
        </section>
      </div>

      {videoSrc && (
        <div className={styles.videoOverlay} onClick={handleCloseVideo}>
          <video src={videoSrc} controls autoPlay className={styles.videoPlayer} />
        </div>
      )}
    </div>
  );
};

export default Pagina277;
