import React, { useState } from 'react';
import styles from './pagina177.module.css';

import clock10_50 from '../assets/images/pagina177_imagem1.webp';
import clock10_55 from '../assets/images/pagina177_imagem2.webp';
import image3 from '../assets/images/pagina177_imagem3.webp';
import image4 from '../assets/images/pagina177_imagem4.webp';

const Pagina177 = () => {
  const [selectedClock, setSelectedClock] = useState('10:50');

  const handleShowClock = (time) => {
    setSelectedClock(time);
  };

  const getClockImage = () => {
    switch (selectedClock) {
      case '10:50': return clock10_50;
      case '10:55': return clock10_55;
      default: return clock10_50;
    }
  };

  return (
    <div className={styles["page177__container"]}>

      <div className={styles["page177__content-row"]}>
        {/* Texto à esquerda */}
        <div className={styles["page177__left-content"]}>
          <div className={styles["page177__header"]}>
            <div className={styles["page177__system-title"]}>Sistema Digital</div>
            <h1 className={styles["page177__main-title"]}>How to Ask and Tell the Time</h1>
            <p className={styles["page177__subtitle"]}>Como Perguntar e Dizer as Horas</p>
          </div>

          <div className={styles["page177__examples"]}>

            {/* 10:50 */}
            <div className={styles["page177__example-block"]}>
              <p>A: What time is it?</p>
              <p
                className={styles["page177__text-red"]}
                onClick={() => handleShowClock('10:50')}
              >
                B: It’s ten fifty
              </p>
            </div>

            {/* 10:55 */}
            <div className={styles["page177__example-block"]}>
              <p>A: What time is it?</p>
              <p
                className={styles["page177__text-red"]}
                onClick={() => handleShowClock('10:55')}
              >
                B: It’s ten fifty-five
              </p>
            </div>
          </div>
        </div>

        {/* Relógio à direita */}
        <div className={styles["page177__clock-container"]}>
          <img src={getClockImage()} alt="Clock" className={styles["page177__clock-image"]} />
        </div>
      </div>

      {/* Imagens de pessoas */}
      <div className={styles["page177__image-pair"]}>
        <img src={image3} alt="Person 1" className={styles["page177__photo"]} />
        <img src={image4} alt="Person 2" className={styles["page177__photo"]} />
      </div>

      {/* Nota Azul */}
      <section className={styles["page177__note"]}>
        <div className={styles["page177__note-header"]}>
          Nota:
        </div>
        <div className={styles["page177__note-content"]}>
          <p>
            A partir de <span className={styles["page177__text-blue-italic"]}>10:56 até 10:59</span> é muito comum usar a expressão:<br />
            <span className={styles["page177__text-blue-italic"]}>It’s almost eleven o’clock.</span> = <span className={styles["page177__text-blue-italic"]}>São quase onze horas</span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Pagina177;
