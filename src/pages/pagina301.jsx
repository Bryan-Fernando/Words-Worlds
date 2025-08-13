import React, { useState } from "react";
import styles from "./pagina301.module.css";

import img1 from "../assets/images/pagina301 imagen1.webp";
import img2 from "../assets/images/pagina301 imagen2.webp";

const Pagina301 = () => {
  const [userAnswers, setUserAnswers] = useState({
    answer1: "",
    answer2: "",
    answer3: "",
    answer4: "",
    answer5: "",
  });
  const [showResults, setShowResults] = useState(false);

  // Respostas corretas
  const correctAnswers = {
    answer1: "Where",
    answer2: "What",
    answer3: "Who",
    answer4: "When",
    answer5: "What",
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

      {/* Exercício Fill in the blanks */}
      <section className={styles.exerciseSection}>
        <div className={styles.exerciseContainer}>
          <div className={styles.exerciseImageRight}>
            {/* antes: <div className={styles.graySquare}></div> */}
            <img src={img1} alt="People at night inside a tent" />
          </div>
          <div className={styles.exerciseContent}>
            <h2 className={styles.exerciseTitle}>
              6. Fill in the blanks with the correct question word:&nbsp;
              <span className={styles.questionWords}>What</span>
              <span className={styles.dash}>–</span>
              <span className={styles.questionWords}>When</span>
              <span className={styles.dash}>–</span>
              <span className={styles.questionWords}>Who</span>
              <span className={styles.dash}>–</span>
              <span className={styles.questionWords}>What</span>
              <span className={styles.dash}>–</span>
              <span className={styles.questionWords}>Where</span>
            </h2>

            <div className={styles.questionsContainer}>
              <div className={styles.questionLine}>
                <span className={styles.questionLetter}>a)</span>
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
                  placeholder="_____"
                />{" "}
                should we go on vacation?
                {showResults && (
                  <div className={styles.feedback}>
                    {isCorrect("answer1") ? (
                      <span className={styles.correctFeedback}>✓ Correto</span>
                    ) : (
                      <span className={styles.incorrectFeedback}>
                        ✗ Incorreto - Resposta: "Where"
                      </span>
                    )}
                  </div>
                )}
              </div>

              <div className={styles.questionLine}>
                <span className={styles.questionLetter}>b)</span>
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
                  placeholder="_____"
                />{" "}
                should he say in his speech?
                {showResults && (
                  <div className={styles.feedback}>
                    {isCorrect("answer2") ? (
                      <span className={styles.correctFeedback}>✓ Correto</span>
                    ) : (
                      <span className={styles.incorrectFeedback}>
                        ✗ Incorreto - Resposta: "What"
                      </span>
                    )}
                  </div>
                )}
              </div>

              <div className={styles.questionLine}>
                <span className={styles.questionLetter}>c)</span>
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
                  placeholder="_____"
                />{" "}
                should I invite to the party?
                {showResults && (
                  <div className={styles.feedback}>
                    {isCorrect("answer3") ? (
                      <span className={styles.correctFeedback}>✓ Correto</span>
                    ) : (
                      <span className={styles.incorrectFeedback}>
                        ✗ Incorreto - Resposta: "Who"
                      </span>
                    )}
                  </div>
                )}
              </div>

              <div className={styles.questionLine}>
                <span className={styles.questionLetter}>d)</span>
                <input
                  type="text"
                  className={`${styles.inputBox} ${
                    showResults
                      ? isCorrect("answer4")
                        ? styles.correct
                        : styles.incorrect
                      : ""
                  }`}
                  value={userAnswers.answer4}
                  onChange={(e) => handleInputChange("answer4", e.target.value)}
                  placeholder="_____"
                />{" "}
                should they arrive at the airport?
                {showResults && (
                  <div className={styles.feedback}>
                    {isCorrect("answer4") ? (
                      <span className={styles.correctFeedback}>✓ Correto</span>
                    ) : (
                      <span className={styles.incorrectFeedback}>
                        ✗ Incorreto - Resposta: "When"
                      </span>
                    )}
                  </div>
                )}
              </div>

              <div className={styles.questionLine}>
                <span className={styles.questionLetter}>e)</span>
                <input
                  type="text"
                  className={`${styles.inputBox} ${
                    showResults
                      ? isCorrect("answer5")
                        ? styles.correct
                        : styles.incorrect
                      : ""
                  }`}
                  value={userAnswers.answer5}
                  onChange={(e) => handleInputChange("answer5", e.target.value)}
                  placeholder="_____"
                />{" "}
                should I wear to the interview?
                {showResults && (
                  <div className={styles.feedback}>
                    {isCorrect("answer5") ? (
                      <span className={styles.correctFeedback}>✓ Correto</span>
                    ) : (
                      <span className={styles.incorrectFeedback}>
                        ✗ Incorreto - Resposta: "What"
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

      {/* Segundo quadrado cinza na área verde indicada */}
      <section className={styles.exerciseSection2}>
        <div className={styles.exerciseContainer}>
          <div className={styles.exerciseImageRight}>
            {/* antes: <div className={styles.graySquare}></div> */}
            <img src={img2} alt="Two people in winter clothes" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pagina301;
