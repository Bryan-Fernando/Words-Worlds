import React from 'react';
import styles from './pagina220.module.css';

const Pagina220 = () => {
  const sentences = [
    {
      id: 1,
      text: "He can cook"
    },
    {
      id: 2,
      text: "She can ride a bike"
    },
    {
      id: 3,
      text: "They can play the piano"
    },
    {
      id: 4,
      text: "The dog can catch the ball."
    }
  ];

  const images = [
    { id: "A", alt: "Piano playing" },
    { id: "B", alt: "Dog catching ball" },
    { id: "C", alt: "Man cooking" },
    { id: "D", alt: "Woman riding bike" }
  ];

  return (
    <div className={styles.pg220Container}>
      <h1 className={styles.pg220Title}>Exercises</h1>

      <div className={styles.pg220ExerciseSection}>
        <h2 className={styles.pg220ExerciseTitle}>7. Match pictures to sentences</h2>
        
        <div className={styles.pg220SentencesContainer}>
          {sentences.map((sentence) => (
            <div key={sentence.id} className={styles.pg220Line}>
              <span className={styles.pg220Number}>{sentence.id}.</span>
              <span className={styles.pg220Text}>{sentence.text}</span>
            </div>
          ))}
        </div>

        <div className={styles.pg220ImagesGrid}>
          {images.map((image) => (
            <div key={image.id} className={styles.pg220ImageContainer}>
              <div className={styles.pg220ImagePlaceholder}></div>
              <span className={styles.pg220ImageLabel}>{image.id}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.pg220AnswerSection}>
        <h2 className={styles.pg220AnswerTitle}>Check - Answer Key</h2>
        <p className={styles.pg220Answer}>1-C, 2-D, 3-A, 4-B</p>
      </div>
    </div>
  );
};

export default Pagina220;