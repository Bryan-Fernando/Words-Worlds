import React, { useState } from "react";
import styles from "./pagina300.module.css";

// Import da imagem
import img1 from "../assets/images/pagina300 imagen1.webp";

const Pagina300 = () => {
  const [userAnswers, setUserAnswers] = useState({
    answer1: "",
    answer2: ""
  });
  const [showResults, setShowResults] = useState(false);

  // Respostas corretas
  const correctAnswers = {
    answer1: "should",
    answer2: "should"
  };

  const handleInputChange = (field, value) => {
    setUserAnswers(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleCheck = () => {
    setShowResults(true);
  };

  const isCorrect = (field) => {
    return userAnswers[field].toLowerCase().trim() === correctAnswers[field];
  };

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.exercisesTitle}>Exercises</h1>

      {/* Exercício Dialogue Completion */}
      <section className={styles.exerciseSection}>
        <div className={styles.exerciseContainer}>
          <div className={styles.exerciseContent}>
            <h2 className={styles.exerciseTitle}>5. Dialogue Completion</h2>
            <p className={styles.exerciseInstruction}>
              Fill in the blanks using "should" or "shouldn't".
            </p>
            
            <div className={styles.dialogueContainer}>
              <div className={styles.dialogueLine} data-speaker="A">
                <span className={styles.speaker} data-speaker="A">A:</span> I have a sore throat.
              </div>
              
              <div className={styles.dialogueLine} data-speaker="B">
                <span className={styles.speaker} data-speaker="B">B:</span> You 
                <input
                  type="text"
                  className={`${styles.inputBox} ${
                    showResults ? 
                      (isCorrect('answer1') ? styles.correct : styles.incorrect) : 
                      ''
                  }`}
                  value={userAnswers.answer1}
                  onChange={(e) => handleInputChange('answer1', e.target.value)}
                  placeholder="_____"
                /> drink hot tea.
                {showResults && (
                  <div className={styles.feedback}>
                    {isCorrect('answer1') ? (
                      <span className={styles.correctFeedback}>✓ Correto</span>
                    ) : (
                      <span className={styles.incorrectFeedback}>
                        ✗ Incorreto - Resposta: "should"
                      </span>
                    )}
                  </div>
                )}
              </div>
              
              <div className={styles.dialogueLine} data-speaker="A">
                <span className={styles.speaker} data-speaker="A">A:</span> And what about cold drinks?
              </div>
              
              <div className={styles.dialogueLine} data-speaker="B">
                <span className={styles.speaker} data-speaker="B">B:</span> You 
                <input
                  type="text"
                  className={`${styles.inputBox} ${
                    showResults ? 
                      (isCorrect('answer2') ? styles.correct : styles.incorrect) : 
                      ''
                  }`}
                  value={userAnswers.answer2}
                  onChange={(e) => handleInputChange('answer2', e.target.value)}
                  placeholder="_____"
                /> avoid them.
                {showResults && (
                  <div className={styles.feedback}>
                    {isCorrect('answer2') ? (
                      <span className={styles.correctFeedback}>✓ Correto</span>
                    ) : (
                      <span className={styles.incorrectFeedback}>
                        ✗ Incorreto - Resposta: "should"
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

          <div className={styles.exerciseImageLeft}>
            <img src={img1} alt="Person drinking hot tea" className={styles.exerciseImage} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pagina300;
  