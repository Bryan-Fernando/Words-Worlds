import React, { useState } from 'react';
import styles from './pagina170.module.css';

import clock5 from '../assets/images/pagina170_imagem1.webp';
import clock6 from '../assets/images/pagina170_imagem2.webp';
import clock7 from '../assets/images/pagina170_imagem3.webp';
import clock8 from '../assets/images/pagina170_imagem4.webp';

const Pagina170 = () => {
  const [selectedClock, setSelectedClock] = useState(5);

  const handleShowClock = (clockNumber) => {
    setSelectedClock(clockNumber);
  };

  const getClockImage = () => {
    switch (selectedClock) {
      case 5: return clock5;
      case 6: return clock6;
      case 7: return clock7;
      case 8: return clock8;
      default: return clock5;
    }
  };

  return (
    <div className={styles["page170__container"]}>

      {/* Texto lado esquerdo */}
      <div className={styles["page170__left-content"]}>
        <div className={styles["page170__header"]}>
          <div className={styles["page170__system-title"]}>Sistema Digital</div>
          <h1 className={styles["page170__main-title"]}>How to Ask and Tell the Time</h1>
          <p className={styles["page170__subtitle"]}>Como Perguntar e Dizer as Horas</p>
        </div>

        <div className={styles["page170__examples"]}>

          {/* Exemplo 5 */}
          <div className={styles["page170__example-block"]}>
            <p><strong>A:</strong> What time is it?</p>
            <p
              className={styles["page170__text-red"]}
              onClick={() => handleShowClock(5)}
            >
              <strong>B:</strong> It is five o'clock
            </p>
          </div>

          {/* Exemplo 6 */}
          <div className={styles["page170__example-block"]}>
            <p><strong>A:</strong> What time is it?</p>
            <p
              className={styles["page170__text-red"]}
              onClick={() => handleShowClock(6)}
            >
              <strong>B:</strong> It is six o'clock
            </p>
          </div>

          {/* Exemplo 7 */}
          <div className={styles["page170__example-block"]}>
            <p><strong>A:</strong> What time is it?</p>
            <p
              className={styles["page170__text-red"]}
              onClick={() => handleShowClock(7)}
            >
              <strong>B:</strong> It is seven o'clock
            </p>
          </div>

          {/* Exemplo 8 */}
          <div className={styles["page170__example-block"]}>
            <p><strong>A:</strong> What time is it?</p>
            <p
              className={styles["page170__text-red"]}
              onClick={() => handleShowClock(8)}
            >
              <strong>B:</strong> It is eight o'clock
            </p>
          </div>
        </div>
      </div>

      {/* Imagem lado direito */}
      <div className={styles["page170__clock-container"]}>
        <img src={getClockImage()} alt="Clock" className={styles["page170__clock-image"]} />
      </div>

    </div>
  );
};

export default Pagina170;
