import React, { useState } from 'react';
import styles from './pagina174.module.css';

import clock10_07 from '../assets/images/pagina174_imagem1.webp';
import clock10_08 from '../assets/images/pagina174_imagem2.webp';
import clock10_09 from '../assets/images/pagina174_imagem3.webp';
import conversationImage from '../assets/images/pagina174_imagem4.webp';

const Pagina174 = () => {
  const [selectedClock, setSelectedClock] = useState('10:07');

  const handleShowClock = (time) => {
    setSelectedClock(time);
  };

  const getClockImage = () => {
    switch (selectedClock) {
      case '10:07': return clock10_07;
      case '10:08': return clock10_08;
      case '10:09': return clock10_09;
      default: return clock10_07;
    }
  };

  return (
    <div className={styles["page174__container"]}>

      <div className={styles["page174__content-row"]}>
        {/* Texto à esquerda */}
        <div className={styles["page174__left-content"]}>
          <div className={styles["page174__header"]}>
            <div className={styles["page174__system-title"]}>Sistema Digital</div>
            <h1 className={styles["page174__main-title"]}>How to Ask and Tell the Time</h1>
            <p className={styles["page174__subtitle"]}>Como Perguntar e Dizer as Horas</p>
          </div>

          <div className={styles["page174__examples"]}>

            {/* Exemplo 10:07 */}
            <div className={styles["page174__example-block"]}>
              <p><strong>A:</strong> What time is it?</p>
              <p
                className={styles["page174__text-red"]}
                onClick={() => handleShowClock('10:07')}
              >
                <strong>B:</strong> It’s ten <span className={styles["page174__text-blue"]}>oh</span> seven
              </p>
            </div>

            {/* Exemplo 10:08 */}
            <div className={styles["page174__example-block"]}>
              <p><strong>A:</strong> What time is it?</p>
              <p
                className={styles["page174__text-red"]}
                onClick={() => handleShowClock('10:08')}
              >
                <strong>B:</strong> It’s ten <span className={styles["page174__text-blue"]}>oh</span> eight
              </p>
            </div>

            {/* Exemplo 10:09 */}
            <div className={styles["page174__example-block"]}>
              <p><strong>A:</strong> What time is it?</p>
              <p
                className={styles["page174__text-red"]}
                onClick={() => handleShowClock('10:09')}
              >
                <strong>B:</strong> It’s ten <span className={styles["page174__text-blue"]}>oh</span> nine
              </p>
            </div>
          </div>
        </div>

        {/* Relógio à direita */}
        <div className={styles["page174__clock-container"]}>
          <img src={getClockImage()} alt="Clock" className={styles["page174__clock-image"]} />
        </div>
      </div>

      {/* Conversa - Imagem + Falas */}
      <div className={styles["page174__conversation"]}>
        <img src={conversationImage} alt="Conversation" className={styles["page174__conversation-image"]} />
        <div className={styles["page174__speech-bubble1"]}>
          Hey, what time is it?
        </div>
        <div className={styles["page174__speech-bubble2"]}>
          It is ten <span className={styles["page174__text-blue"]}>oh</span> nine.
        </div>
      </div>
    </div>
  );
};

export default Pagina174;
