import React from 'react';
import styles from './pagina315.module.css';

import img from "../assets/images/pagina315 imagen1.webp";

const Pagina315 = () => {
  return (
    <div className={styles.container}>
        
      {/* Conteúdo principal */}
      <div className={styles.mainContent}>
        {/* Título */}
        <h1 className={styles.dialoguesTitle}>Dialogues</h1>

        {/* Seção de diálogos */}
        <div className={styles.dialoguesSection}>
          <div className={styles.dialogueBlock}>
            {/* Imagem */}
            <div className={styles.imageContainer}>
              <img
                src={img} 
                alt="Café restaurant scene" 
                className={styles.dialogueImage}
              />
            </div>

            {/* Conteúdo do diálogo */}
            <div className={styles.dialogueContent}>
              <div className={styles.dialogueLine}>
                <span className={styles.speaker}>A</span>
                <span className={styles.englishText}>Are we meeting them later ?</span>
              </div>
              <div className={styles.portugueseText}>Nós vamos encontrar eles mais tarde?</div>

              <div className={styles.dialogueLine}>
                <span className={styles.speaker}>B</span>
                <span className={styles.englishText}>Yes, we are meeting at the café.</span>
              </div>
              <div className={styles.portugueseText}>Sim, nós vamos nos encontrar no café.</div>

              <div className={styles.dialogueLine}>
                <span className={styles.speaker}>A</span>
                <span className={styles.englishText}>What time are they coming ?</span>
              </div>
              <div className={styles.portugueseText}>Que horas eles vão chegar?</div>

              <div className={styles.dialogueLine}>
                <span className={styles.speaker}>B</span>
                <span className={styles.englishText}>They are arriving around 5:00 p.m.</span>
              </div>
              <div className={styles.portugueseText}>Eles vão chegar por volta das 17h.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagina315;