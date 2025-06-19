import React from 'react';
import styles from './pagina178.module.css';

import image1 from '../assets/images/pagina178_imagem1.webp';
import image2 from '../assets/images/pagina178_imagem2.webp';
import image3 from '../assets/images/pagina178_imagem3.webp';

const Pagina178 = () => {
  return (
    <div className={styles["page178__container"]}>

      {/* Header */}
      <div className={styles["page178__header"]}>
        <div className={styles["page178__system-title"]}>Sistema Analógico</div>
        <h1 className={styles["page178__main-title"]}>How to Ask and Tell the Time</h1>
        <p className={styles["page178__subtitle"]}>Como Perguntar e Dizer as Horas</p>
      </div>

      {/* Frase centralizada acima do relógio do meio */}
      <p className={styles["page178__clock-caption"]}>
        It is ______ o’clock. <br /> hora(s) (exata/s)
      </p>

      {/* Imagens dos relógios */}
      <div className={styles["page178__images"]}>
        <img src={image1} alt="Clock 1" className={styles["page178__image"]} />
        <img src={image2} alt="Clock 2" className={styles["page178__image"]} />
        <img src={image3} alt="Clock 3" className={styles["page178__image"]} />
      </div>

      {/* Blocos de texto em 2 colunas */}
      <div className={styles["page178__columns"]}>

        {/* Coluna esquerda - Lado esquerdo */}
        <div className={styles["page178__text-section"]}>
          <p>
            <span className={styles["page178__blue"]}>● Lado esquerdo do relógio</span><br />
            <span className={styles["page178__red"]}>
              Em inglês usamos os minutos <span className={styles["page178__blue"]}>(29 - 59) </span>antes das horas como em português.
            </span>
          </p>
        </div>

        {/* Coluna direita - Lado direito */}
        <div className={styles["page178__text-section"]}>
          <p>
            <span className={styles["page178__blue"]}>Lado direito do relógio</span><br />
            <span className={styles["page178__red"]}>
              ● Em inglês  </span> usamos <span className={styles["page178__red"]}>os minutos</span> <span style={{fontWeight: 'bold'}}>antes das horas</span> no sistema analógico até 30 min.<br />
              <span className={styles["page178__red"]}>Em português</span> usamos <span className={styles["page178__red"]}>as horas</span> <span style={{fontWeight: 'bold'}}>antes dos minutos.</span>
            
          </p>
        </div>

      </div>

      {/* Exemplos abaixo das colunas */}
      <div className={styles["page178__example-section"]}>
        <div className={styles["page178__columns"]}>

          {/* Exemplo lado esquerdo */}
          <div>
            <p className={styles["page178__red"]}>Exemplo:</p>
            <p>
              <span className={styles["page178__blue"]}>It is twenty to eleven.</span><br />
              <span className={styles["page178__red"]}>São vinte para as onze.</span>
            </p>
          </div>

          {/* Exemplo lado direito */}
          <div>
            <p className={styles["page178__red"]}>Exemplo:</p>
            <p>
              <span className={styles["page178__blue"]}>It is twenty past ten.</span><br />
              <span className={styles["page178__red"]}>São dez e vinte.</span>
            </p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Pagina178;
