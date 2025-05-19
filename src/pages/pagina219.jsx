import React from 'react';
import styles from './pagina219.module.css';

const Pagina219 = () => {
  const leftColumn = [
    {
      id: 1,
      text: "Can you play"
    },
    {
      id: 2,
      text: "Can she open"
    },
    {
      id: 3,
      text: "Can they visit"
    },
    {
      id: 4,
      text: "Can he use"
    }
  ];

  const rightColumn = [
    {
      id: "a",
      text: "the window, please?"
    },
    {
      id: "b",
      text: "the museum today?"
    },
    {
      id: "c",
      text: "the computer?"
    },
    {
      id: "d",
      text: "the piano?"
    }
  ];

  return (
    <div className={styles.pg219Container}>
      <h1 className={styles.pg219Title}>Exercises</h1>

      <div className={styles.pg219ExerciseSection}>
        <h2 className={styles.pg219ExerciseTitle}>6. Match columns</h2>
        
        <div className={styles.pg219ColumnsContainer}>
          <div className={styles.pg219Column}>
            {leftColumn.map((item) => (
              <div key={item.id} className={styles.pg219Item}>
                <span className={styles.pg219Number}>{item.id}.</span>
                <span className={styles.pg219Text}>{item.text}</span>
              </div>
            ))}
          </div>

          <div className={styles.pg219Column}>
            {rightColumn.map((item) => (
              <div key={item.id} className={styles.pg219Item}>
                <span className={styles.pg219Letter}>{item.id}.</span>
                <span className={styles.pg219Text}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.pg219AnswerSection}>
        <h2 className={styles.pg219AnswerTitle}>Check - Answer Key</h2>
        <div className={styles.pg219AnswerColumns}>
          <div className={styles.pg219Column}>
            {leftColumn.map((item) => (
              <div key={item.id} className={styles.pg219Item}>
                <span className={styles.pg219Number}>{item.id}.</span>
                <span className={styles.pg219Text}>{item.text}</span>
              </div>
            ))}
          </div>

          <div className={styles.pg219Column}>
            <div className={styles.pg219Item}><span className={styles.pg219Letter}>d.</span><span className={styles.pg219Text}>the piano?</span></div>
            <div className={styles.pg219Item}><span className={styles.pg219Letter}>a.</span><span className={styles.pg219Text}>the window, please?</span></div>
            <div className={styles.pg219Item}><span className={styles.pg219Letter}>b.</span><span className={styles.pg219Text}>the museum today?</span></div>
            <div className={styles.pg219Item}><span className={styles.pg219Letter}>c.</span><span className={styles.pg219Text}>the computer?</span></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagina219;
