import React, { useState } from "react";
import styles from "./pagina324.module.css";
import correct_icon from '../assets/icons/correct_icon.webp';
import wrong_icon from '../assets/icons/wrong_icon.webp';

const Pagina324 = () => {
  const [userAnswers, setUserAnswers] = useState(['', '', '', '', '', '', '', '', '', '']);
  const [showResults, setShowResults] = useState(false);

  const exercises = [
    {
      id: "a",
      words: "are / children / the / playing / in the park"
    },
    {
      id: "b",
      words: "is / the / sleeping / dog / under the table"
    },
    {
      id: "c",
      words: "talking / right now / she / to / is / her friend"
    },
    {
      id: "d",
      words: "playing / the guitar / he / is / in his room"
    },
    {
      id: "e",
      words: "to the library / they / walking / are / now"
    },
    {
      id: "f",
      words: "are / dinner / having / we / at the restaurant"
    },
    {
      id: "g",
      words: "raining / it / is / today"
    },
    {
      id: "h",
      words: "working / you / on / are / the project?"
    },
    {
      id: "i",
      words: "making / they / noise / a lot of / are"
    },
    {
      id: "j",
      words: "for the exam / studying / I / am / now"
    }
  ];

  const answers = [
    {
      id: "a",
      answer: "The children are playing in the park"
    },
    {
      id: "b",
      answer: "The dog is sleeping under the table"
    },
    {
      id: "c",
      answer: "She is talking to her friend right now"
    },
    {
      id: "d",
      answer: "He is playing the guitar in his room"
    },
    {
      id: "e",
      answer: "They are walking to the library now"
    },
    {
      id: "f",
      answer: "We are having dinner at the restaurant"
    },
    {
      id: "g",
      answer: "It is raining today"
    },
    {
      id: "h",
      answer: "Are you working on the project?"
    },
    {
      id: "i",
      answer: "They are making a lot of noise"
    },
    {
      id: "j",
      answer: "I am studying for the exam now"
    }
  ];

  const handleInputChange = (index, value) => {
    const newAnswers = [...userAnswers];
    newAnswers[index] = value;
    setUserAnswers(newAnswers);
  };

  const handleCheck = () => {
    setShowResults(true);
  };

  const handleReset = () => {
    setUserAnswers(['', '', '', '', '', '', '', '', '', '']);
    setShowResults(false);
  };

  const normalizeAnswer = (answer) => {
    return answer.trim().toLowerCase().replace(/[.,!?]/g, '');
  };

  const isCorrect = (index) => {
    return normalizeAnswer(userAnswers[index]) === normalizeAnswer(answers[index].answer);
  };

  return (
    <div className={styles.container}>
      
      <div className={styles.mainContent}>
        <h1 className={styles.exerciseTitle}>Exercise</h1>
        <h2 className={styles.exerciseSubtitle}>
          3. Sentence Ordering (Put the words in the correct order to form a sentence)
        </h2>

        <div className={styles.exerciseSection}>
          <div className={styles.wordsBox}>
            {exercises.map((exercise, index) => (
              <div key={exercise.id} className={styles.wordLine}>
                <span className={styles.number}>{exercise.id}.</span>
                <span className={styles.words}>{exercise.words}</span>
                <div className={styles.inputContainer}>
                  <input
                    type="text"
                    value={userAnswers[index]}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                    className={`${styles.input} ${
                      showResults
                        ? isCorrect(index)
                          ? styles.correct
                          : styles.incorrect
                        : ""
                    }`}
                    placeholder="Type your answer"
                    disabled={showResults}
                  />
                  {showResults && (
                    <img
                      src={isCorrect(index) ? correct_icon : wrong_icon}
                      alt={isCorrect(index) ? "Correct" : "Incorrect"}
                      className={styles.resultIcon}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className={styles.buttonsContainer}>
            {!showResults ? (
              <button
                className={styles.checkButton}
                onClick={handleCheck}
                disabled={userAnswers.some(answer => !answer.trim())}
              >
                Check
              </button>
            ) : (
              <div className={styles.resultsContainer}>
                <p className={styles.resultsText}>
                  {userAnswers.filter((_, index) => isCorrect(index)).length} out of 10 correct!
                </p>
                <button
                  className={styles.resetButton}
                  onClick={handleReset}
                >
                  Reset
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Pagina324;