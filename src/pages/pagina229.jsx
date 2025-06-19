import React from 'react';
import styles from './pagina229.module.css';

import clockYellow from '../assets/images/pagina178_imagem2.webp';
import img1 from '../assets/images/pagina229_imagem1.webp';
import img2 from '../assets/images/pagina229_imagem2.webp';

const Pagina229 = () => {
  return (
    <div className={styles["page229__container"]}>

      {/* Header */}
      <div className={styles["page229__header"]}>
        <div className={styles["page229__system-title"]}>Sistema Analógico</div>
        <h1 className={styles["page229__main-title"]}>How to Ask and Tell the Time</h1>
        <p className={styles["page229__subtitle"]}>Como Perguntar e Dizer as Horas</p>
      </div>

      {/* Bloco Pergunta + Relógio */}
      <div className={styles["page229__top-example"]}>
        <div>
          <p><strong>A:</strong> What time is it ?</p>
          <p className={styles["page229__text-red"]}><strong>B:</strong> It’s five to eleven</p>
        </div>
        <img src={clockYellow} alt="Clock" className={styles["page229__image"]} />
      </div>

      {/* Bloco de imagens com balões */}
      <div className={styles["page229__image-block"]}>

        {/* Primeiro grupo */}
        <div className={styles["page229__image-wrapper"]}>
          <div className={styles["page229__speech-left"]}>
            It’s 10:45.<br />
            <span>( quarter to 11 )<br />( fifteen to 11 )</span>
          </div>
          <div className={styles["page229__speech-right-red"]}>
            What time is it ?
          </div>
          <img src={img1} alt="People asking time" className={styles["page229__conversation-image"]} />
        </div>

        {/* Segundo grupo */}
        <div className={styles["page229__image-wrapper"]}>
          <div className={styles["page229__speech-left"]}>
            Do you have the time, please ?
          </div>
          <div className={styles["page229__speech-right-red"]}>
            It’s 10:00.<br />( o’clock )
          </div>
          <img src={img2} alt="People answering time" className={styles["page229__conversation-image"]} />
        </div>

      </div>

      {/* Nota */}
      <div className={styles["page229__note"]}>
        <div className={styles["page229__note-header"]}>Nota:</div>
        <div className={styles["page229__note-content"]}>
          A partir de <strong>10:56 até 10:59</strong> é muito comum usar a expressão:<br />
          <span className={styles["page229__red-bold"]}>It’s almost eleven o’clock.</span> = São quase <span className={styles["page229__blue-bold"]}>onze horas</span>
        </div>
      </div>

    </div>
  );
};

export default Pagina229;
