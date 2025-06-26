import React, { useState } from 'react';
import styles from './pagina176.module.css';

import clock10_30 from '../assets/images/pagina176_imagem1.webp';
import clock10_35 from '../assets/images/pagina176_imagem2.webp';
import clock10_40 from '../assets/images/pagina176_imagem3.webp';
import clock10_45 from '../assets/images/pagina176_imagem4.webp';
import peopleImage from '../assets/images/pagina176_imagem5.webp';

const Pagina176 = () => {
  const [selectedClock, setSelectedClock] = useState('10:30');

  const handleShowClock = (time) => {
    setSelectedClock(time);
  };

  const getClockImage = () => {
    switch (selectedClock) {
      case '10:30': return clock10_30;
      case '10:35': return clock10_35;
      case '10:40': return clock10_40;
      case '10:45': return clock10_45;
      default: return clock10_30;
    }
  };

  return (
    <div className={styles["page176__container"]}>

      <div className={styles["page176__content-row"]}>
        {/* Texto lado esquerdo */}
        <div className={styles["page176__left-content"]}>
          <div className={styles["page176__header"]}>
            <div className={styles["page176__system-title"]}>Sistema Digital</div>
            <h1 className={styles["page176__main-title"]}>How to Ask and Tell the Time</h1>
            <p className={styles["page176__subtitle"]}>Como Perguntar e Dizer as Horas</p>
          </div>

          <div className={styles["page176__examples"]}>

            {/* 10:30 */}
            <div className={styles["page176__example-block"]}>
              <p>A: What time is it?</p>
              <p
                className={styles["page176__text-red"]}
                onClick={() => handleShowClock('10:30')}
              >
                B: It’s ten thirty
              </p>
            </div>

            {/* 10:35 */}
            <div className={styles["page176__example-block"]}>
              <p>A: What time is it?</p>
              <p
                className={styles["page176__text-red"]}
                onClick={() => handleShowClock('10:35')}
              >
                B: It’s ten thirty-five
              </p>
            </div>

            {/* 10:40 */}
            <div className={styles["page176__example-block"]}>
              <p>A: What time is it?</p>
              <p
                className={styles["page176__text-red"]}
                onClick={() => handleShowClock('10:40')}
              >
                B: It’s ten forty
              </p>
            </div>

            {/* 10:45 */}
            <div className={styles["page176__example-block"]}>
              <p>A: What time is it?</p>
              <p
                className={styles["page176__text-red"]}
                onClick={() => handleShowClock('10:45')}
              >
                B: It’s ten forty-five
              </p>
            </div>
          </div>
        </div>

        {/* Relógio lado direito */}
        <div className={styles["page176__clock-container"]}>
          <img src={getClockImage()} alt="Clock" className={styles["page176__clock-image"]} />
        </div>
      </div>

      {/* Imagem de pessoas */}
      <div className={styles["page176__container-image"]}>
      <img src={peopleImage} alt="People talking" className={styles["page176__people-image"]} />
    </div>
    </div>
  );
};

export default Pagina176;
