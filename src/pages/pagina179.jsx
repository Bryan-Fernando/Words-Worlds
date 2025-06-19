import React from 'react';
import styles from './pagina179.module.css';

import clock1 from '../assets/images/pagina179_imagem1.webp'; // Primeiro relógio (vermelho)
import clockYellow from '../assets/images/pagina178_imagem2.webp'; // Relógio amarelo que se repete

const Pagina179 = () => {
  return (
    <div className={styles["page179__container"]}>

      {/* Header */}
      <div className={styles["page179__header"]}>
        <div className={styles["page179__system-title"]}>Sistema Analógico</div>
        <h1 className={styles["page179__main-title"]}>How to Ask and Tell the Time</h1>
        <p className={styles["page179__subtitle"]}>Como Perguntar e Dizer as Horas</p>
      </div>

 

      {/* Exemplos */}
      <div className={styles["page179__examples"]}>

        {/* 10:00 */}
        <div className={styles["page179__example-block"]}>
          <div>
            <p><strong>A:</strong> What time is it ?</p>
            <p className={styles["page179__text-red"]}><strong>B:</strong> It’s ten o’clock</p>
          </div>
          <img src={clock1} alt="Clock 10:00" className={styles["page179__image"]} />
        </div>

        {/* 10:05 */}
        <div className={styles["page179__example-block"]}>
          <div>
            <p><strong>A:</strong> What time is it ?</p>
            <p className={styles["page179__text-red"]}><strong>B:</strong> It’s five past / after ten</p>
          </div>
          <img src={clockYellow} alt="Clock 10:05" className={styles["page179__image"]} />
        </div>

        {/* 10:10 */}
        <div className={styles["page179__example-block"]}>
          <div>
            <p><strong>A:</strong> What time is it ?</p>
            <p className={styles["page179__text-red"]}><strong>B:</strong> It’s ten past / after ten</p>
          </div>
          <img src={clockYellow} alt="Clock 10:10" className={styles["page179__image"]} />
        </div>

        {/* 10:15 */}
        <div className={styles["page179__example-block"]}>
          <div>
            <p><strong>A:</strong> What time is it ?</p>
            <p className={styles["page179__text-red"]}><strong>B:</strong> It’s quarter past / after ten.</p>
            <p className={styles["page179__text-red"]}><strong>B:</strong> It’s fifteen past / after ten.</p>
          </div>
          <img src={clockYellow} alt="Clock 10:15" className={styles["page179__image"]} />
        </div>

        {/* 10:20 */}
        <div className={styles["page179__example-block"]}>
          <div>
            <p><strong>A:</strong> What time is it ?</p>
            <p className={styles["page179__text-red"]}><strong>B:</strong> It’s twenty past / after ten.</p>
          </div>
          <img src={clockYellow} alt="Clock 10:20" className={styles["page179__image"]} />
        </div>

      </div>

    </div>
  );
};

export default Pagina179;
