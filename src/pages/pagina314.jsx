import React from 'react';
import styles from './pagina314.module.css';

import imgDialogo1 from "../assets/images/pagina314 imagen1.webp";
import imgDialogo2 from "../assets/images/pagina314 imagen2.webp";

const Pagina314 = () => {
  return (
    <div className={styles.container}>
      {/* Conteúdo principal */}
      <div className={styles.mainContent}>
        {/* Cabeçalho */}
        <div className={styles.header}>
          <h1 className={styles.dialoguesTitle}>Dialogues</h1>
        </div>

        {/* Seção Interrogative Form */}
        <section className={styles.grammarSection}>
          <div className={styles.grammarHeader}>
            <h2 className={styles.grammarTitle}>Interrogative Form</h2>
          </div>
          <div className={styles.grammarContent}>
            <div className={styles.grammarRow}>
              <span className={styles.headerCell}>Palavras<br/>Interrogativas</span>
              <span className={styles.headerCell}>Aux.<br/>Verb</span>
              <span className={styles.headerCell}>Subject</span>
              <span className={styles.headerCell}>Adv</span>
              <span className={styles.headerCell}>Main Verb<br/>+ ING</span>
              <span className={styles.headerCell}>Object<br/>Complement</span>
            </div>
          </div>
        </section>

        {/* Exemplo da tabela */}
        <div className={styles.exampleTable}>
          <div className={styles.exampleRow}>
            <div className={styles.exampleCell}>What time</div>
            <div className={styles.exampleCell}>are</div>
            <div className={styles.exampleCell}>you</div>
            <div className={styles.exampleCell}></div>
            <div className={styles.exampleCell}>leaving</div>
            <div className={styles.exampleCell}>tomorrow?</div>
          </div>
        </div>

        {/* Diálogos */}
        <div className={styles.dialoguesSection}>
          {/* Primeiro diálogo */}
          <div className={styles.dialogueBlock}>
            <div className={styles.imageContainer}>
              <img src={imgDialogo1} alt="Leaving tomorrow" className={styles.dialogueImage} />
            </div>
            <div className={styles.dialogueContent}>
              <div className={styles.dialogueLine}>
                <span className={styles.speaker}>A</span>
                <span className={styles.englishText}>What time are you leaving tomorrow ?</span>
              </div>
              <div className={styles.portugueseText}>Que horas você vai sair amanhã?</div>
              
              <div className={styles.dialogueLine}>
                <span className={styles.speaker}>B</span>
                <span className={styles.englishText}>I am leaving at 9:00 a.m.</span>
              </div>
              <div className={styles.portugueseText}>Eu vou sair às 9h.</div>
              
              <div className={styles.dialogueLine}>
                <span className={styles.speaker}>A</span>
                <span className={styles.englishText}>Where are you going ?</span>
              </div>
              <div className={styles.portugueseText}>Aonde você vai?</div>
              
              <div className={styles.dialogueLine}>
                <span className={styles.speaker}>B</span>
                <span className={styles.englishText}>I am visiting my grandparents for the weekend.</span>
              </div>
              <div className={styles.portugueseText}>Eu vou visitar meus avós no fim de semana.</div>
            </div>
          </div>

          {/* Segundo diálogo */}
          <div className={styles.dialogueBlock}>
            <div className={styles.dialogueContent}>
              <div className={styles.dialogueLine}>
                <span className={styles.speaker}>A</span>
                <span className={styles.englishText}>Why are you wearing a jacket ?</span>
              </div>
              <div className={styles.portugueseText}>Por que você está usando uma jaqueta?</div>
              
              <div className={styles.dialogueLine}>
                <span className={styles.speaker}>B</span>
                <span className={styles.englishText}>I am feeling cold.</span>
              </div>
              <div className={styles.portugueseText}>Eu estou com frio.</div>
              
              <div className={styles.dialogueLine}>
                <span className={styles.speaker}>A</span>
                <span className={styles.englishText}>It's not that cold today.</span>
              </div>
              <div className={styles.portugueseText}>Não está tão frio hoje.</div>
              
              <div className={styles.dialogueLine}>
                <span className={styles.speaker}>B</span>
                <span className={styles.englishText}>I am getting over a cold, so I just want to stay warm.</span>
              </div>
              <div className={styles.portugueseText}>Eu estou me recuperando de um resfriado, só quero ficar agasalhado.</div>
            </div>
            <div className={styles.imageContainer}>
              <img src={imgDialogo2} alt="Wearing jacket" className={styles.dialogueImage} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagina314;