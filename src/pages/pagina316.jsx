import React from 'react';
import styles from './pagina316.module.css';

import img1 from "../assets/images/pagina316 imagen1.webp";
import img2 from "../assets/images/pagina316 imagen2.webp";
import img3 from "../assets/images/pagina316 imagen3.webp";

const Pagina316 = () => {
  return (
    <div className={styles.container}>
      
      <h1 className={styles.dialoguesTitle}>Dialogues</h1>

      <div className={styles.dialoguesSection}>

        <div className={styles.dialogueBlock}>
          <div className={styles.dialogueContent}>
            <div className={styles.dialogueLine}>
              <span className={styles.speaker}>A</span>
              <span className={styles.englishText}>Is it raining outside ?</span>
            </div>
            <div className={styles.portugueseText}>Está chovendo lá fora?</div>

            <div className={styles.dialogueLine}>
              <span className={styles.speaker}>B</span>
              <span className={styles.englishText}>Yes, it is raining heavily.</span>
            </div>
            <div className={styles.portugueseText}>Sim, está chovendo muito.</div>

            <div className={styles.dialogueLine}>
              <span className={styles.speaker}>A</span>
              <span className={styles.englishText}>
                I was thinking of going for a walk, but I guess I can't now.
              </span>
            </div>
            <div className={styles.portugueseText}>
              Eu estava pensando em fazer uma caminhada, mas acho que não dá agora
            </div>

            <div className={styles.dialogueLine}>
              <span className={styles.speaker}>B</span>
              <span className={styles.englishText}>
                You'd better take an umbrella if you still want to go.
              </span>
            </div>
            <div className={styles.portugueseText}>
              Seria melhor você levar um guarda-chuva se ainda quiser ir.
            </div>
          </div>

          <div className={styles.imageContainer}>
            <img
              src={img1}
              alt="Rainy window scene"
              className={styles.dialogueImage}
            />
          </div>
        </div>

        <div className={styles.dialogueBlock}>
          <div className={styles.imageContainer}>
            <img
              src={img2}
              alt="Beach houses scene"
              className={styles.dialogueImage}
            />
          </div>

          <div className={styles.dialogueContent}>
            <div className={styles.dialogueLine}>
              <span className={styles.speaker}>A</span>
              <span className={styles.englishText}>Are they moving to a new house ?</span>
            </div>
            <div className={styles.portugueseText}>Eles estão se mudando para uma nova casa?</div>

            <div className={styles.dialogueLine}>
              <span className={styles.speaker}>B</span>
              <span className={styles.englishText}>Yes, they are moving next week.</span>
            </div>
            <div className={styles.portugueseText}>Sim, eles vão se mudar na próxima semana.</div>

            <div className={styles.dialogueLine}>
              <span className={styles.speaker}>A</span>
              <span className={styles.englishText}>Where are they moving to ?</span>
            </div>
            <div className={styles.portugueseText}>Para onde eles estão se mudando?</div>

            <div className={styles.dialogueLine}>
              <span className={styles.speaker}>B</span>
              <span className={styles.englishText}>They are moving to a place near the beach.</span>
            </div>
            <div className={styles.portugueseText}>
              Eles estão se mudando para um lugar perto da praia.
            </div>
          </div>
        </div>

        <div className={styles.dialogueBlock}>
          <div className={styles.dialogueContent}>
            <div className={styles.dialogueLine}>
              <span className={styles.speaker}>A</span>
              <span className={styles.englishText}>Is he working from home today ?</span>
            </div>
            <div className={styles.portugueseText}>Ele está trabalhando de casa hoje?</div>

            <div className={styles.dialogueLine}>
              <span className={styles.speaker}>B</span>
              <span className={styles.englishText}>No, he is going to the office.</span>
            </div>
            <div className={styles.portugueseText}>Não, ele vai para o escritório.</div>

            <div className={styles.dialogueLine}>
              <span className={styles.speaker}>A</span>
              <span className={styles.englishText}>
                I thought he usually works from home on Fridays.
              </span>
            </div>
            <div className={styles.portugueseText}>
              Eu pensei que ele geralmente trabalha de casa às sextas-feiras.
            </div>

            <div className={styles.dialogueLine}>
              <span className={styles.speaker}>B</span>
              <span className={styles.englishText}>
                He is attending an important meeting today.
              </span>
            </div>
            <div className={styles.portugueseText}>
              Ele está participando de uma reunião importante hoje.
            </div>
          </div>

          <div className={styles.imageContainer}>
            <img
              src={img3}
              alt="Office meeting scene"
              className={styles.dialogueImage}
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Pagina316;
