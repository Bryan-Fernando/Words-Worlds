import React from 'react';
import styles from './pagina279.module.css';

import clockYellow from '../assets/images/pagina178_imagem2.webp';

const Pagina279 = () => {
  return (
    <div className={styles["page279__container"]}>

      {/* Header */}
      <div className={styles["page279__header"]}>
        <div className={styles["page279__system-title"]}>Sistema Analógico</div>
        <h1 className={styles["page279__main-title"]}>How to Ask and Tell the Time</h1>
        <p className={styles["page279__subtitle"]}>Como Perguntar e Dizer as Horas</p>
      </div>

      {/* Exemplos */}
      <div className={styles["page279__examples"]}>

        {/* 10:35 */}
        <div className={styles["page279__example-block"]}>
          <div>
            <p><strong>A:</strong> What time is it ?</p>
            <p className={styles["page279__text-red"]}><strong>B:</strong> It’s twenty-five to eleven</p>
          </div>
          <img src={clockYellow} alt="Clock 10:35" className={styles["page279__image"]} />
        </div>

        {/* 10:40 */}
        <div className={styles["page279__example-block"]}>
          <div>
            <p><strong>A:</strong> What time is it ?</p>
            <p className={styles["page279__text-red"]}><strong>B:</strong> It’s twenty to eleven</p>
          </div>
          <img src={clockYellow} alt="Clock 10:40" className={styles["page279__image"]} />
        </div>

        {/* 10:45 */}
        <div className={styles["page279__example-block"]}>
          <div>
            <p><strong>A:</strong> What time is it ?</p>
            <p className={styles["page279__text-red"]}><strong>B:</strong> It’s quarter to eleven</p>
            <p className={styles["page279__text-red"]}><strong>B:</strong> It’s fifteen to eleven</p>
          </div>
          <img src={clockYellow} alt="Clock 10:45" className={styles["page279__image"]} />
        </div>

        {/* 10:50 */}
        <div className={styles["page279__example-block"]}>
          <div>
            <p><strong>A:</strong> What time is it ?</p>
            <p className={styles["page279__text-red"]}><strong>B:</strong> It’s ten to eleven</p>
          </div>
          <img src={clockYellow} alt="Clock 10:50" className={styles["page279__image"]} />
        </div>

      </div>

    </div>
  );
};

export default Pagina279;
