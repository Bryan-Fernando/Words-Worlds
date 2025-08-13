import React from 'react';
import styles from './pagina317.module.css';

import img1 from "../assets/images/pagina317 imagen1.webp";
import img2 from "../assets/images/pagina317 imagen2.webp";
import img3 from "../assets/images/pagina317 imagen3.webp";

const Pagina317 = () => {
  return (
    <div className={styles.container}>
      {/* Conteúdo principal */}
      <div className={styles.mainContent}>
        {/* Título */}
        <h1 className={styles.dialoguesTitle}>Dialogues</h1>

        {/* Seção de diálogos */}
        <div className={styles.dialoguesSection}>
          {/* 1) Estudando (imagem à esquerda) */}
          <div className={styles.dialogueBlock}>
            <div className={styles.imageContainer}>
              <img
                src={img1} // estudantes conversando no campus
                alt="Students studying outside"
                className={styles.dialogueImage}
              />
            </div>

            <div className={styles.dialogueContent}>
              <div className={styles.dialogueLine}>
                <span className={styles.speaker}>A</span>
                <span className={styles.englishText}>What are you doing right now ?</span>
              </div>
              <div className={styles.portugueseText}>O que você está fazendo agora?</div>

              <div className={styles.dialogueLine}>
                <span className={styles.speaker}>B</span>
                <span className={styles.englishText}>I am studying for my English test.</span>
              </div>
              <div className={styles.portugueseText}>Eu estou estudando para a prova de inglês.</div>

              <div className={styles.dialogueLine}>
                <span className={styles.speaker}>A</span>
                <span className={styles.englishText}>How long are you going to study today ?</span>
              </div>
              <div className={styles.portugueseText}>Por quanto tempo você vai estudar hoje?</div>

              <div className={styles.dialogueLine}>
                <span className={styles.speaker}>B</span>
                <span className={styles.englishText}>I am planning to study for three more hours.</span>
              </div>
              <div className={styles.portugueseText}>Eu estou planejando estudar por mais três horas.</div>
            </div>
          </div>

          {/* 2) Festa (imagem à direita) */}
          <div className={styles.dialogueBlock}>
            <div className={styles.dialogueContent}>
              <div className={styles.dialogueLine}>
                <span className={styles.speaker}>A</span>
                <span className={styles.englishText}>Are you coming to the party tonight ?</span>
              </div>
              <div className={styles.portugueseText}>Você vai à festa hoje à noite?</div>

              <div className={styles.dialogueLine}>
                <span className={styles.speaker}>B</span>
                <span className={styles.englishText}>Yes, I am coming with my friends.</span>
              </div>
              <div className={styles.portugueseText}>Sim, eu vou com meus amigos.</div>

              <div className={styles.dialogueLine}>
                <span className={styles.speaker}>A</span>
                <span className={styles.englishText}>What time are you leaving ?</span>
              </div>
              <div className={styles.portugueseText}>Que horas vocês vão sair ?</div>

              <div className={styles.dialogueLine}>
                <span className={styles.speaker}>B</span>
                <span className={styles.englishText}>
                  We are leaving at 7 p.m., so we'll be there by 7:30.
                </span>
              </div>
              <div className={styles.portugueseText}>
                Nós vamos sair às 19h, portanto chegaremos por volta das 19h30.
              </div>
            </div>

            <div className={styles.imageContainer}>
              <img
                src={img2} // grupo de amigos na festa
                alt="Party scene with friends"
                className={styles.dialogueImage}
              />
            </div>
          </div>

          {/* 3) O Rei Leão (imagem à esquerda) */}
          <div className={styles.dialogueBlock}>
            <div className={styles.imageContainer}>
              <img
                src={img3} // cena do Rei Leão
                alt="The Lion King scene"
                className={styles.dialogueImage}
              />
            </div>

            <div className={styles.dialogueContent}>
              <div className={styles.dialogueLine}>
                <span className={styles.speaker}>A</span>
                <span className={styles.englishText}>Why is she crying ?</span>
              </div>
              <div className={styles.portugueseText}>Por que ela está chorando?</div>

              <div className={styles.dialogueLine}>
                <span className={styles.speaker}>B</span>
                <span className={styles.englishText}>She is watching a sad movie.</span>
              </div>
              <div className={styles.portugueseText}>Ela está assistindo a um filme triste.</div>

              <div className={styles.dialogueLine}>
                <span className={styles.speaker}>A</span>
                <span className={styles.englishText}>Oh no, what movie is she watching ?</span>
              </div>
              <div className={styles.portugueseText}>Poxa, qual filme ela está assistindo?</div>

              <div className={styles.dialogueLine}>
                <span className={styles.speaker}>B</span>
                <span className={styles.englishText}>She is watching "The Lion King".</span>
              </div>
              <div className={styles.portugueseText}>Ela está assistindo "O Rei Leão."</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Pagina317;
