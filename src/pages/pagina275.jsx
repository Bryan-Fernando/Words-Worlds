import React, { useState } from 'react';
import styles from './pagina275.module.css';

import mapImage from '../assets/images/pagina275_imagem1.webp';
import dialogueImage from '../assets/images/pagina275_imagem2.webp';
import video1 from '../assets/images/map1.mp4';

const Pagina275 = () => {
  const [videoSrc, setVideoSrc] = useState(null);

  const handlePlayVideo = () => {
    setVideoSrc(video1);
  };

  const handleCloseVideo = () => {
    setVideoSrc(null);
  };

  return (
    <div className={styles.container}>
      <img src={mapImage} alt="Mapa da rota 1" className={styles.mapImage} />

      <div className={styles.dialogueWrapper}>
        <div className={styles.dialogueNumber}>1</div>

        <div className={styles.dialogueSection}>
          <div className={styles.dialogueImageContainer}>
            <img src={dialogueImage} alt="Diálogo Mathew e Emma" className={styles.dialogueImage} />
          </div>

          <div className={styles.textBlock}>
            <h4 className={styles.nameBlue}>Mathew</h4>
            <p className={styles.speechBubble}>
              Excuse me, can you tell me how to get to the subway station?<br />
              <em>Com licença, você pode me dizer como chegar à estação de metrô?</em>
            </p>

            <h4 className={styles.nameRed}>Emma</h4>
            <p className={`${styles.speechBubble} ${styles.directions}`} onClick={handlePlayVideo}>
              Of course! Go down 2 blocks and make a left on 8th St. Then go up 1 block to the corner of 1st Ave.
              You’ll find it on your right side.<br />
              <em>Claro! Desça 2 quarteirões e vire à esquerda na 8th St. Em seguida, suba 1 quarteirão até a esquina da 1st Ave. Você vai encontrá-lo do seu lado direito.</em>
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

export default Pagina275;
