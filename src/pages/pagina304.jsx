import React, { useState } from "react";
import styles from "./pagina304.module.css";

// IMAGENS
import img1 from "../assets/images/pagina304 imagen1.webp";
import img2 from "../assets/images/pagina304 imagen2.webp";

const Pagina304 = () => {
  const [userAnswers, setUserAnswers] = useState({
    answer1: "",
    answer2: "",
    answer3: "",
    answer4: "",
  });
  const [showResults, setShowResults] = useState(false);

  // Respostas corretas
  const correctAnswers = {
    answer1: "What should I wear to the party?",
    answer2: "What time should we go to the park?",
    answer3: "How often should she eat more vegetables?",
    answer4: "Who should he talk to about his problem?",
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

      {/* Exercício Make questions */}
      <section className={styles.exerciseSection}>
        <div className={styles.exerciseContainer}>
          <div className={styles.exerciseContent}>
            <h2 className={styles.exerciseTitle}>
              8. Make questions with "should" using Question Words:&nbsp;
              <span className={styles.questionWords}>What</span>
              <span className={styles.dash}>-</span>
              <span className={styles.questionWords}>Who</span>
              <span className={styles.dash}>-</span>
              <span className={styles.questionWords}>What time</span>
              <span className={styles.dash}>-</span>
              <span className={styles.questionWords}>How often</span>.
            </h2>

            <div className={styles.questionsContainer}>
              <div className={styles.questionLine}>
                <div className={styles.questionHeader}>
                  <span className={styles.questionLetter}>a)</span>
                  <span className={styles.questionText}>(I / wear / to the party)</span>
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
                  placeholder="Write your answer here..."
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
                  <span className={styles.questionText}>(we / go / to the park )</span>
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
                  placeholder="Write your answer here..."
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
                  <span className={styles.questionText}>(she / eat / more vegetables)</span>
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
                  placeholder="Write your answer here..."
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

              <div className={styles.questionLine}>
                <div className={styles.questionHeader}>
                  <span className={styles.questionLetter}>d)</span>
                  <span className={styles.questionText}>(he / talk to / about his problem)</span>
                </div>
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
                  placeholder="Write your answer here..."
                />
                {showResults && (
                  <div className={styles.feedback}>
                    {isCorrect("answer4") ? (
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
          
          <div className={styles.exerciseImageRight}>
            {/* antes: <div className={styles.graySquare}></div> */}
            <img src={img1} alt="Friends walking outdoors" className={styles.exerciseImage} />
          </div>
        </div>
      </section>

      {/* Segundo quadrado cinza */}
      <section className={styles.exerciseSection2}>
        <div className={styles.exerciseContainer}>
          <div className={styles.exerciseImageRight}>
            {/* antes: <div className={styles.graySquare}></div> */}
            <img src={img2} alt="People at a party" className={styles.exerciseImage} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pagina304;
