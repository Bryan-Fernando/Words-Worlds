import React, { useState } from "react";
import styles from "./pagina299.module.css";

// Import da imagem
import img1 from "../assets/images/pagina299 imagen1.webp";

const Pagina299 = () => {
  const [showCheck, setShowCheck] = useState(false);
  const [userAnswers, setUserAnswers] = useState({
    a: "",
    b: "",
    c: "",
    d: ""
  });

  // Respostas corretas (true = certo, false = errado)
  const correctAnswers = {
    a: false, // You should to sleep earlier. (ERRADO)
    b: false, // She shouldn't eats too much sugar. (ERRADO)
    c: true,  // We should help our neighbors. (CERTO)
    d: false  // They shoulds be here now. (ERRADO)
  };

  // Correções para mostrar quando errado
  const corrections = {
    a: "You should sleep earlier.",
    b: "She shouldn't eat too much sugar.",
    c: "Correct",
    d: "They should be here now."
  };

  // Frases originais
  const originalSentences = {
    a: "You should to sleep earlier.",
    b: "She shouldn't eats too much sugar.",
    c: "We should help our neighbors.",
    d: "They shoulds be here now."
  };

  const handleAnswerChange = (letter, value) => {
    setUserAnswers(prev => ({
      ...prev,
      [letter]: value
    }));
  };

  const handleCheck = () => {
    setShowCheck(true);
  };

  const isCorrectAnswer = (letter) => {
    const userAnswer = userAnswers[letter];
    const correctAnswer = correctAnswers[letter];
    return (userAnswer === "certo" && correctAnswer) || (userAnswer === "errado" && !correctAnswer);
  };

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.exercisesTitle}>Exercises</h1>

      {/* Exercício Correct the mistakes */}
      <section className={styles.exerciseSection}>
        <div className={styles.exerciseContainer}>
          <div className={styles.exerciseContent}>
            <h2 className={styles.exerciseTitle}>4. Correct the mistakes</h2>
            
            <div className={styles.questionsContainer}>
              {Object.entries(originalSentences).map(([letter, sentence]) => (
                <div key={letter} className={styles.questionRow}>
                  <div className={styles.questionText}>
                    <span className={styles.questionLetter}>{letter})</span> {sentence}
                  </div>
                  
                  <div className={styles.selectionContainer}>
                    <select
                      className={styles.selectBox}
                      value={userAnswers[letter]}
                      onChange={(e) => handleAnswerChange(letter, e.target.value)}
                    >
                      <option value="">Selecione uma opção</option>
                      <option value="certo">Certo</option>
                      <option value="errado">Errado</option>
                    </select>
                    
                    {showCheck && (
                      <div className={styles.answerFeedback}>
                        <div className={`${styles.userResult} ${
                          isCorrectAnswer(letter) ? styles.correctResult : styles.incorrectResult
                        }`}>
                          {isCorrectAnswer(letter) ? "✓ Correto" : "✗ Incorreto"}
                        </div>
                        <div className={styles.correctAnswer}>
                          <strong>Resposta correta:</strong> {corrections[letter]}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <button className={styles.checkButton} onClick={handleCheck}>
              Check
            </button>
          </div>

          <div className={styles.exerciseImageRight}>
            <img src={img1} alt="Person eating a dessert" className={styles.exerciseImage} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pagina299;
