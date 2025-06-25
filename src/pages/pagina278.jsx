import React from 'react';
import styles from './pagina278.module.css';

import clockYellow from '../assets/images/pagina178_imagem2.webp';
import conversationImage from '../assets/images/pagina278_imagem1.webp';

const Pagina278 = () => {
  return (
    <div className={styles["page278__container"]}>

      {/* Header */}
      <div className={styles["page278__header"]}>
        <div className={styles["page278__system-title"]}>Sistema Analógico</div>
        <h1 className={styles["page278__main-title"]}>How to Ask and Tell the Time</h1>
        <p className={styles["page278__subtitle"]}>Como Perguntar e Dizer as Horas</p>
      </div>

      {/* Exemplos de horários */}
      <div className={styles["page278__examples"]}>

        {/* 10:25 */}
        <div className={styles["page278__example-block"]}>
          <div>
            <p><strong>A:</strong> What time is it ?</p>
            <p className={styles["page278__text-red"]}><strong>B:</strong> It’s twenty-five past / after ten.</p>
          </div>
          <img src={clockYellow} alt="Clock 10:25" className={styles["page278__image"]} />
        </div>

        {/* 10:30 */}
        <div className={styles["page278__example-block"]}>
          <div>
            <p><strong>A:</strong> What time is it ?</p>
            <p className={styles["page278__text-red"]}><strong>B:</strong> It’s half past ten.</p>
          </div>
          <img src={clockYellow} alt="Clock 10:30" className={styles["page278__image"]} />
        </div>

      </div>

      {/* Conversa com balões */}
      <div className={styles["page278__conversation"]}>
        <div className={styles["page278__speech-left"]}>
          Could you tell me the time, please?
        </div>
        <div className={styles["page278__speech-right"]}>
          Sure, it’s 20 past 10.<br /> (20 after 10)
        </div>
        <img src={conversationImage} alt="People talking" className={styles["page278__conversation-image"]} />
      </div>

    </div>
  );
};

export default Pagina278;
