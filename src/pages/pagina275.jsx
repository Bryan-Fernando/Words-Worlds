import React, { useState } from 'react';
import styles from './pagina275.module.css';

import map1 from '../assets/images/map1.mp4';
import map2 from '../assets/images/map2.mp4';
import map3 from '../assets/images/map3.mp4';

const pagina275 = () => {
  const [videoSrc, setVideoSrc] = useState(null);

  const handlePlayVideo = (map) => {
    setVideoSrc(map);
  };

  const handleCloseVideo = () => {
    setVideoSrc(null);
  };

  return (
    <div className={styles.container}>
      <div className={styles.conversationBlock}>
        <div className={styles.grayBox}></div>
        <div className={styles.textBlock}>
          <h4>Mathew</h4>
          <p>
            Excuse me, can you tell me how to get to the subway station?<br/>
            <em>Com licença, você pode me dizer como chegar à estação de metrô?</em>
          </p>
          <h4>Emma</h4>
          <p 
            className={styles.directions}
            onClick={() => handlePlayVideo(map1)}
          >
            Of course! Go down 2 blocks and make a left on 8th St. Then go up 1 block to the corner of 1st Ave. You’ll find it on your right side. <br />
            Claro! Desça 2 quarteirões e vire à esquerda na 8th St. Em seguida, suba 1 quarteirão até a esquina da 1st Ave. Você vai encontrá-lo do seu lado direito.
          </p>
        </div>
      </div>

      <div className={styles.conversationBlock}>
        <div className={styles.grayBox}></div>
        <div className={styles.textBlock}>
          <h4>Bonnie</h4>
          <p>
            Good afternoon! Can you tell me how to get to “La Trattoria Italian restaurant”, please?<br/>
            <em>Boa tarde! Você pode me dizer como chegar ao “restaurante italiano La Trattoria”, por favor?</em>
          </p>
          <h4>Stephany</h4>
          <p
            className={styles.directions}
            onClick={() => handlePlayVideo(map2)}
          >
            Good afternoon! Yes, go straight ahead up to 1st Ave. Then make a right. Go to the corner of 5th St. Turn left. You can’t miss it.
             <br />
             Boa tarde! Sim, siga em frente até a 1st Ave. Em seguida, vire à direita. Vá para a esquina da 5th St. Vire à esquerda. Não tem como errar.
          </p>
        </div>
      </div>

      <div className={styles.conversationBlock}>
        <div className={styles.grayBox}></div>
        <div className={styles.textBlock}>
          <h4>Nick</h4>
          <p>
            Hi there! Can you help me find the nearest ATM?<br/>
            <em>Olá! Você pode me ajudar a encontrar o caixa eletrônico mais próximo?</em>
          </p>
          <h4>Margaret</h4>
          <p
            className={styles.directions}
            onClick={() => handlePlayVideo(map3)}
          >
            Hi! Of course, there’s an ATM around the corner. Just walk straight ahead and take first right. You’ll see it across the Avenue.
             <br />
            Oi! Claro, há um caixa eletrônico na esquina. Apenas ande em frente e vire na primeira à direita. Você vai ver do outro lado da Avenida.
          </p>
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

export default pagina275;
