import React, { useState } from "react";
import styles from "./pagina303.module.css";

import img1 from "../assets/images/pagina303 imagen1.webp";
import img2 from "../assets/images/pagina303 imagen2.webp";

const Pagina303 = () => {
  const [userAnswers, setUserAnswers] = useState({
    answer1: "",
    answer2: "",
    answer3: "",
    answer4: "",
    answer5: "",
    answer6: "",
  });
  const [showResults, setShowResults] = useState(false);

  // Respostas corretas
  const correctAnswers = {
    answer1: "Who",
    answer2: "When",
    answer3: "What",
    answer4: "When",
    answer5: "What",
    answer6: "Why",
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
            <img src={img1} alt="Big Ben and London street" />
          </div>
          <div className={styles.exerciseContent}>
            <h2 className={styles.exerciseTitle}>
              7. Fill in the blanks with the correct question word:&nbsp;
              <span className={styles.questionWords}>What</span>
              <span className={styles.dash}>–</span>
              <span className={styles.questionWords}>When</span>
              <span className={styles.dash}>–</span>
              <span className={styles.questionWords}>Why</span>
              <span className={styles.dash}>–</span>
              <span className={styles.questionWords}>Why</span>
              <span className={styles.dash}>–</span>
              <span className={styles.questionWords}>What Time</span>
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
                should I call for help?
                {showResults && (
                  <div className={styles.feedback}>
                    {isCorrect("answer1") ? (
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
                shouldn't we go to the mall now?
                {showResults && (
                  <div className={styles.feedback}>
                    {isCorrect("answer2") ? (
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
                should he eat for breakfast?
                {showResults && (
                  <div className={styles.feedback}>
                    {isCorrect("answer3") ? (
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
                should they visit in London?
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
                should she study in this evening?
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

              <div className={styles.questionLine}>
                <span className={styles.questionLetter}>f)</span>
                <input
                  type="text"
                  className={`${styles.inputBox} ${
                    showResults
                      ? isCorrect("answer6")
                        ? styles.correct
                        : styles.incorrect
                      : ""
                  }`}
                  value={userAnswers.answer6}
                  onChange={(e) => handleInputChange("answer6", e.target.value)}
                  placeholder="_____"
                />{" "}
                shouldn't you tell her the truth?
                {showResults && (
                  <div className={styles.feedback}>
                    {isCorrect("answer6") ? (
                      <span className={styles.correctFeedback}>✓ Correto</span>
                    ) : (
                      <span className={styles.incorrectFeedback}>
                        ✗ Incorreto - Resposta: "Why"
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
            <img src={img2} alt="Breakfast on a table" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pagina303;
