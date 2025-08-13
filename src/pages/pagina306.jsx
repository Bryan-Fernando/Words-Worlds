import React, { useState } from "react";
import styles from "./pagina306.module.css";
import imgBottom from "../assets/images/pagina306 imagen1.webp"; // nova imagem

const Pagina306 = () => {
  const [userAnswers, setUserAnswers] = useState({
    answer1: "",
    answer2: "",
  });
  const [showResults, setShowResults] = useState(false);

  const correctAnswers = {
    answer1: "What",
    answer2: "what",
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

      <section className={styles.exerciseSection}>
        <div className={styles.exerciseContainer}>
          <div className={styles.exerciseContent}>
            <h2 className={styles.exerciseTitle}>
              10. Complete the dialogue:
            </h2>

            <div className={styles.questionsContainer}>
              <div className={styles.dialogueLine}>
                <span className={styles.speakerBlue}>A:</span>
                <span className={styles.dialogueTextBlue}>I'm feeling tired.</span>
              </div>
              
              <div className={styles.questionLine}>
                <span className={styles.speakerBlue}>A:</span>
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
                  placeholder=""
                />
                <span className={styles.dialogueTextBlue}>should I do?</span>
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

              <div className={styles.dialogueLine}>
                <span className={styles.speaker}>B:</span>
                <span className={styles.dialogueText}>I think you should rest.</span>
              </div>
              
              <div className={styles.questionLine}>
                <span className={styles.speakerBlue}>A:</span>
                <span className={styles.dialogueTextBlue}>And </span>
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
                  placeholder=""
                />
                <span className={styles.dialogueTextBlue}>shouldn't I do?</span>
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

              <div className={styles.dialogueLine}>
                <span className={styles.speaker}>B:</span>
                <span className={styles.dialogueText}>You shouldn't stay up all night.</span>
              </div>
            </div>

            <button className={styles.checkButton} onClick={handleCheck}>
              Check
            </button>
          </div>

          <div className={styles.exerciseImageRight}></div>
        </div>
      </section>
      
      <div className={styles.bottomImageContainer}>
        <img
          src={imgBottom}
          alt="Two men walking in front of a building"
          className={styles.exerciseImage}
        />
      </div>
    </div>
  );
};

export default Pagina306;
