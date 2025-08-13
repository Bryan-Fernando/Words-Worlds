import React, { useState } from "react";
import styles from "./pagina305.module.css";

// imagem
import img1 from "../assets/images/pagina305 imagen1.webp";

const Pagina305 = () => {
  const [userAnswers, setUserAnswers] = useState({
    answer1: "",
    answer2: "",
    answer3: "",
  });
  const [showResults, setShowResults] = useState(false);

  // Respostas corretas
  const correctAnswers = {
    answer1: "What should I do?",
    answer2: "Where should she go?",
    answer3: "How shouldn't we help them?",
  };

  const handleInputChange = (field, value) => {
    setUserAnswers((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleCheck = () => {
    setShowResults(true);
  };

  const isCorrect = (field) => {
    return (
      userAnswers[field].toLowerCase().trim() ===
      correctAnswers[field].toLowerCase()
    );
  };

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.exercisesTitle}>Exercises</h1>

      {/* Exercício Correct the mistakes */}
      <section className={styles.exerciseSection}>
        <div className={styles.exerciseContainer}>
          <div className={styles.exerciseImageLeft}>
            {/* antes: <div className={styles.graySquare}></div> */}
            <img src={img1} alt="People talking" className={styles.exerciseImage} />
          </div>
          
          <div className={styles.exerciseContent}>
            <h2 className={styles.exerciseTitle}>
              9. Correct the mistakes:
            </h2>

            <div className={styles.questionsContainer}>
              <div className={styles.questionLine}>
                <div className={styles.questionHeader}>
                  <span className={styles.questionLetter}>a)</span>
                  <span className={styles.questionText}>What should I to do?</span>
                </div>
                <input
                  type="text"
                  className={`${styles.inputBox} ${
                    showResults
                      ? isCorrect("answer1")
                        ? styles.correct
                        : styles.incorrect
                      : ""
                  }`}
                  value={userAnswers.answer1}
                  onChange={(e) => handleInputChange("answer1", e.target.value)}
                  placeholder="Write the correct sentence..."
                />
                {showResults && (
                  <div className={styles.feedback}>
                    {isCorrect("answer1") ? (
                      <span className={styles.correctFeedback}>✓ Correto</span>
                    ) : (
                      <span className={styles.incorrectFeedback}>
                        ✗ Incorreto
                      </span>
                    )}
                  </div>
                )}
              </div>

              <div className={styles.questionLine}>
                <div className={styles.questionHeader}>
                  <span className={styles.questionLetter}>b)</span>
                  <span className={styles.questionText}>Where should she goes?</span>
                </div>
                <input
                  type="text"
                  className={`${styles.inputBox} ${
                    showResults
                      ? isCorrect("answer2")
                        ? styles.correct
                        : styles.incorrect
                      : ""
                  }`}
                  value={userAnswers.answer2}
                  onChange={(e) => handleInputChange("answer2", e.target.value)}
                  placeholder="Write the correct sentence..."
                />
                {showResults && (
                  <div className={styles.feedback}>
                    {isCorrect("answer2") ? (
                      <span className={styles.correctFeedback}>✓ Correto</span>
                    ) : (
                      <span className={styles.incorrectFeedback}>
                        ✗ Incorreto
                      </span>
                    )}
                  </div>
                )}
              </div>

              <div className={styles.questionLine}>
                <div className={styles.questionHeader}>
                  <span className={styles.questionLetter}>c)</span>
                  <span className={styles.questionText}>How shouldn't we helps them?</span>
                </div>
                <input
                  type="text"
                  className={`${styles.inputBox} ${
                    showResults
                      ? isCorrect("answer3")
                        ? styles.correct
                        : styles.incorrect
                      : ""
                  }`}
                  value={userAnswers.answer3}
                  onChange={(e) => handleInputChange("answer3", e.target.value)}
                  placeholder="Write the correct sentence..."
                />
                {showResults && (
                  <div className={styles.feedback}>
                    {isCorrect("answer3") ? (
                      <span className={styles.correctFeedback}>✓ Correto</span>
                    ) : (
                      <span className={styles.incorrectFeedback}>
                        ✗ Incorreto
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>

            <button className={styles.checkButton} onClick={handleCheck}>
              Check
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pagina305;
