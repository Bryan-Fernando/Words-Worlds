import React, { useState } from 'react';
import styles from './pagina274.module.css';
import correctIcon from '../assets/icons/correct_icon.webp';
import wrongIcon from '../assets/icons/wrong_icon.webp';

const questions = [
  {
    textBefore: "Tom: That was the ",
    textAfter: " game ever! (exciting)",
    answer: "most exciting",
    speaker: "tom"
  },
  {
    textBefore: "Lily: I agree! And this stadium is ",
    textAfter: " than the old one. (big)",
    answer: "bigger",
    speaker: "lily"
  },
  {
    textBefore: "Tom: Also, the players were ",
    textAfter: " than last year. (strong)",
    answer: "stronger",
    speaker: "tom"
  },
  {
    textBefore: "Lily: Yes, and the weather was ",
    textAfter: " too! (good)",
    answer: "better",
    speaker: "lily"
  }
];

const normalize = (str) => str.trim().replace(/\s+/g, ' ').toLowerCase();

const Pagina274 = () => {
  const [inputs, setInputs] = useState(Array(questions.length).fill(''));
  const [results, setResults] = useState(Array(questions.length).fill(null));

  const handleInputChange = (value, index) => {
    const updated = [...inputs];
    updated[index] = value;
    setInputs(updated);
  };

  const handleCheckClick = () => {
    const evaluated = inputs.map((input, i) =>
      normalize(input) === normalize(questions[i].answer)
    );
    setResults(evaluated);
  };

  return (
    <div className={styles.page274__container}>
      <header className={styles.page274__header}>
        <h1>
          <span className={styles.page274__grammarRed}>Grammar</span> -{' '}
          <span className={styles.page274__grammarBold}>Adjectives</span>
        </h1>
      </header>

      <p className={styles.page274__instruction}>
        <strong>7.</strong> Complete the dialogue using the correct form of the adjectives:
      </p>

      <div className={styles.page274__dialogueBox}>
        {questions.map((q, index) => {
          const isCorrect = results[index] === true;
          const speakerClass = q.speaker === "tom" ? styles.page274__tomText : styles.page274__lilyText;
          const inputClass =
            isCorrect && q.speaker === "tom"
              ? styles.page274__inputTomCorrect
              : isCorrect && q.speaker === "lily"
              ? styles.page274__inputLilyCorrect
              : styles.page274__input;

          return (
            <div key={index} className={styles.page274__line}>
              <span className={speakerClass}>{q.textBefore}</span>

              <input
                type="text"
                value={inputs[index]}
                onChange={(e) => handleInputChange(e.target.value, index)}
                className={inputClass}
              />

              <span className={speakerClass}>{q.textAfter}</span>

              {results[index] !== null && (
                <img
                  src={results[index] ? correctIcon : wrongIcon}
                  alt={results[index] ? "Correct" : "Incorrect"}
                  className={styles.page274__resultIcon}
                />
              )}
            </div>
          );
        })}
      </div>

      <div className={styles.page274__checkContainer}>
        <button className={styles.page274__checkButton} onClick={handleCheckClick}>
          Check
        </button>
      </div>
    </div>
  );
};

export default Pagina274;
