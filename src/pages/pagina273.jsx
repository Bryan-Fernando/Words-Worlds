import React, { useState } from 'react';
import styles from './pagina273.module.css';
import correctIcon from '../assets/icons/correct_icon.webp';
import wrongIcon from '../assets/icons/wrong_icon.webp';

const questions = [
  {
    prompt: "a) Beautiful (superlativo de superioridade)",
    answer: "she is the most beautiful girl in the school"
  },
  {
    prompt: "b) Fast (comparativo de igualdade)",
    answer: "my car is as fast as yours"
  },
  {
    prompt: "c) Boring (comparativo de inferioridade)",
    answer: "this movie is less boring than the other one"
  }
];

const normalize = (str) =>
  str.trim().replace(/\s+/g, ' ').toLowerCase();

const Pagina273 = () => {
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
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>
          <span className={styles.grammarRed}>Grammar</span> -{' '}
          <span className={styles.grammarBold}>Adjectives</span>
        </h1>
      </header>

      <p className={styles.instruction}>
        <strong>6.</strong> Make a sentence using the given adjective:
      </p>

      <div className={styles.questionBox}>
        <main className={styles.main}>
          {questions.map((q, index) => (
            <div key={index} className={styles.question}>
              <span className={styles.prompt}>{q.prompt}</span>
              <div className={styles.inputWrapper}>
                <input
                  type="text"
                  value={inputs[index]}
                  onChange={(e) => handleInputChange(e.target.value, index)}
                  className={styles.input}
                />
                {results[index] !== null && (
                  <img
                    src={results[index] ? correctIcon : wrongIcon}
                    alt={results[index] ? 'Correct' : 'Incorrect'}
                    className={styles.resultIcon}
                  />
                )}
              </div>
            </div>
          ))}
        </main>
      </div>

      <div className={styles.checkContainer}>
        <button className={styles.checkButton} onClick={handleCheckClick}>
          Check
        </button>
      </div>
    </div>
  );
};

export default Pagina273;
