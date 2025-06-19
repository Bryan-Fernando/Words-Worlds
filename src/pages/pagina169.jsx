import React, { useState } from 'react';
import styles from './pagina169.module.css';

import clock1 from '../assets/images/pagina169_imagem1.webp';
import clock2 from '../assets/images/pagina169_imagem2.webp';
import clock3 from '../assets/images/pagina169_imagem3.webp';
import clock4 from '../assets/images/pagina169_imagem4.webp';

const Pagina169 = () => {
  const [selectedClock, setSelectedClock] = useState(1);

  const handleShowClock = (clockNumber) => {
    setSelectedClock(clockNumber);
  };

  const getClockImage = () => {
    switch (selectedClock) {
      case 1: return clock1;
      case 2: return clock2;
      case 3: return clock3;
      case 4: return clock4;
      default: return clock1;
    }
  };

  return (
    <div className={styles["page169__container"]}>

      {/* Texto lado esquerdo */}
      <div className={styles["page169__left-content"]}>
        <div className={styles["page169__header"]}>
          <div className={styles["page169__system-title"]}>Sistema Digital</div>
          <h1 className={styles["page169__main-title"]}>How to Ask and Tell the Time</h1>
          <p className={styles["page169__subtitle"]}>Como Perguntar e Dizer as Horas</p>
        </div>

        <div className={styles["page169__examples"]}>

          {/* Exemplo 1 */}
          <div className={styles["page169__example-block"]}>
            <p><strong>A:</strong> What time is it?</p>
            <p
              className={styles["page169__text-red"]}
              onClick={() => handleShowClock(1)}
            >
              <strong>B:</strong> It is one o'clock
            </p>
          </div>

          {/* Exemplo 2 */}
          <div className={styles["page169__example-block"]}>
            <p><strong>A:</strong> What time is it?</p>
            <p
              className={styles["page169__text-red"]}
              onClick={() => handleShowClock(2)}
            >
              <strong>B:</strong> It is two o'clock
            </p>
          </div>

          {/* Exemplo 3 */}
          <div className={styles["page169__example-block"]}>
            <p><strong>A:</strong> What time is it?</p>
            <p
              className={styles["page169__text-red"]}
              onClick={() => handleShowClock(3)}
            >
              <strong>B:</strong> It is three o'clock
            </p>
          </div>

          {/* Exemplo 4 */}
          <div className={styles["page169__example-block"]}>
            <p><strong>A:</strong> What time is it?</p>
            <p
              className={styles["page169__text-red"]}
              onClick={() => handleShowClock(4)}
            >
              <strong>B:</strong> It is four o'clock
            </p>
          </div>

        </div>

        {/* Nota */}
        <div className={styles["page169__note"]}>
          <p><strong>When you just want to ask the time, use:</strong></p>
          <p>What time is it?</p>
        </div>
      </div>

      {/* Imagem lado direito */}
      <div className={styles["page169__clock-container"]}>
        <img src={getClockImage()} alt="Clock" className={styles["page169__clock-image"]} />
      </div>

    </div>
  );
};

export default Pagina169;
