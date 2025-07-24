import React, { useRef, useState } from 'react';
import styles from './pagina276.module.css';

import mapImage from '../assets/images/pagina275_imagem1.webp';
import dialogueImage from '../assets/images/pagina276_imagem1.webp';
import video2 from '../assets/images/map2.mp4';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import audio1 from '../assets/audios/pg276_audio1e.mp3'; // Novo áudio

const Pagina276 = () => {
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

  const handlePlayVideo = () => {
    setVideoSrc(video2);
  };

  const handleCloseVideo = () => {
    setVideoSrc(null);
  };

  return (
    <div className={styles.container}>
      <img src={mapImage} alt="Mapa da rota 2" className={styles.mapImage} />

      <div className={styles.dialogueWrapper}>
        <div className={styles.dialogueNumber}>2</div>

        <div className={styles.dialogueSection}>
          <div className={styles.dialogueImageContainer}>
            <img src={dialogueImage} alt="Diálogo Bonnie e Stephany" className={styles.dialogueImage} />
          </div>

          <div className={styles.textBlock}>
            <h4 className={styles.nameBlue}>Bonnie</h4>
            <p className={styles.speechBubble}>
              Good afternoon! Can you tell me how to get to “La Trattoria Italian restaurant”, please?
              <img
                src={eng_audio_icon}
                alt="Play audio"
                className={styles.audioIcon}
                onClick={playAudio}
              /><br />
              <em>Boa tarde! Você pode me dizer como chegar ao “restaurante italiano La Trattoria”, por favor?</em>
            </p>

            <h4 className={styles.nameRed}>Stephany</h4>
            <p className={`${styles.speechBubble} ${styles.directions}`} onClick={handlePlayVideo}>
              Good afternoon! Yes, go straight ahead up to 1st Ave. Then make a right. Go to the corner of 5th St. Turn left. You can’t miss it.<br />
              <em>Boa tarde! Sim, siga em frente até a 1st Ave. Em seguida, vire à direita. Vá para a esquina da 5th St. Vire à esquerda. Não tem como errar.</em>
            </p>
          </div>
        </div>
      </div>

      {videoSrc && (
        <div className={styles.videoOverlay} onClick={handleCloseVideo}>
          <video src={videoSrc} controls autoPlay className={styles.videoPlayer} />
        </div>
      )}
    </div>
  );
};

export default Pagina276;
