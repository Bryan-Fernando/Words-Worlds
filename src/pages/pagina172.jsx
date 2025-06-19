import React, { useState } from 'react';
import styles from './pagina172.module.css';

import clock10_00 from '../assets/images/pagina172_imagem1.webp';
import clock10_01 from '../assets/images/pagina172_imagem2.webp';
import clock10_02 from '../assets/images/pagina172_imagem3.webp';
import clock10_03 from '../assets/images/pagina172_imagem4.webp';

const Pagina172 = () => {
  const [selectedClock, setSelectedClock] = useState('10:00');

  const handleShowClock = (time) => {
    setSelectedClock(time);
  };

  const getClockImage = () => {
    switch (selectedClock) {
      case '10:00': return clock10_00;
      case '10:01': return clock10_01;
      case '10:02': return clock10_02;
      case '10:03': return clock10_03;
      default: return clock10_00;
    }
  };

  return (
    <div className={styles["page172__container"]}>

      {/* Lado esquerdo */}
      <div className={styles["page172__left-content"]}>
        <div className={styles["page172__header"]}>
          <div className={styles["page172__system-title"]}>Sistema Digital</div>
          <h1 className={styles["page172__main-title"]}>How to Ask and Tell the Time</h1>
          <p className={styles["page172__subtitle"]}>Como Perguntar e Dizer as Horas</p>
        </div>

        {/* Bloco vermelho */}
        <div className={styles["page172__red-box"]}>
          Ao indicar ( ou ao dizer ) <span className={styles["page172__red-box-strong"]}>as horas em português, o sistema digital segue o mesmo modelo do sistema digital em inglês.</span>
        </div>

        {/* Exemplos */}
        <div className={styles["page172__examples"]}>

          {/* 10:00 */}
          <div className={styles["page172__example-block"]}>
            <p><strong>A:</strong> What time is it?</p>
            <p
              className={styles["page172__text-red"]}
              onClick={() => handleShowClock('10:00')}
            >
              <strong>B:</strong> It’s ten o’clock
            </p>
          </div>

          {/* 10:01 */}
          <div className={styles["page172__example-block"]}>
            <p><strong>A:</strong> What time is it?</p>
            <p
              className={styles["page172__text-red"]}
              onClick={() => handleShowClock('10:01')}
            >
              <strong>B:</strong> It’s ten <span className={styles["page173__text-blue"]}>oh</span>  one
            </p>
          </div>

          {/* 10:02 */}
          <div className={styles["page172__example-block"]}>
            <p><strong>A:</strong> What time is it?</p>
            <p
              className={styles["page172__text-red"]}
              onClick={() => handleShowClock('10:02')}
            >
              <strong>B:</strong> It’s ten <span className={styles["page173__text-blue"]}>oh</span>  two
            </p>
          </div>

          {/* 10:03 */}
          <div className={styles["page172__example-block"]}>
            <p><strong>A:</strong> What time is it?</p>
            <p
              className={styles["page172__text-red"]}
              onClick={() => handleShowClock('10:03')}
            >
              <strong>B:</strong> It’s ten <span className={styles["page173__text-blue"]}>oh</span>  three
            </p>
          </div>
        </div>

        {/* Nota Azul */}
        <section className={styles["page172__note"]}>
          <div className={styles["page172__note-header"]}>
            Nota:
          </div>
          <div className={styles["page172__note-content"]}>
            <p>Ten <span>oh</span> one = Dez e um</p>
            <p>Na tradução, <span>oh</span> significa <span>e</span> ( para horas )</p>
          </div>
        </section>
      </div>

      {/* Imagem do relógio */}
      <div className={styles["page172__clock-container"]}>
        <img src={getClockImage()} alt="Clock" className={styles["page172__clock-image"]} />
      </div>
    </div>
  );
};

export default Pagina172;
