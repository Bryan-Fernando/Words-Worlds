import React, { useState } from "react";
import styles from "./pagina327.module.css";

// 👇 importe suas imagens
import imgLaptop from "../assets/images/pagina327 imagen1.webp";
import imgTennis from "../assets/images/pagina327 imagen2.webp";

const Pagina327 = () => {
  const [userAnswers, setUserAnswers] = useState({
    ex1_1: "", ex1_2: "",
    ex2_1: "", ex2_2: "",
    ex3_1: "", ex3_2: "",
    ex4_1: "", ex4_2: "",
    ex5_1: "", ex5_2: "",
  });
  const [showResults, setShowResults] = useState(false);

  const correctAnswers = {
    ex1_1: "works",
    ex1_2: "is working",
    ex2_1: "don't like",
    ex2_2: "am eating",
    ex3_1: "play",
    ex3_2: "are playing",
    ex4_1: "speaks",
    ex4_2: "is speaking",
    ex5_1: "go",
    ex5_2: "are staying",
  };

  const handleInputChange = (field, value) =>
    setUserAnswers(prev => ({ ...prev, [field]: value }));

  const handleCheck = () => setShowResults(true);

  const isCorrect = (field) =>
    userAnswers[field].toLowerCase().trim() ===
    correctAnswers[field].toLowerCase();

  return (
    <div className={styles.pageContainer}>
      <div className={styles.exerciseHeader}>
        <h1 className={styles.exerciseNumber}>Exercise 1:</h1>
        <h2 className={styles.exerciseTitle}>Choose the Correct Form</h2>
        <p className={styles.exerciseInstructions}>
          Fill in the blanks with the correct form of the verb in parentheses
          <br />
          <span className={styles.formsNote}>
            (<span className={styles.redtext}> Simple Present </span> or Present Continuous).
          </span>
        </p>
      </div>

      {/* Tabela */}
      <div className={styles.tableContainer}>
        <div className={styles.tableHeader}>Forma Afirmativa</div>
        <table className={styles.grammarTable}>
          <thead>
            <tr>
              <th><p>Sujeito</p></th>
              <th><p>Verbo Auxiliar</p></th>
              <th><p>Advérbio</p></th>
              <th><p>Verbo(s)</p></th>
              <th><p>Objeto Complemento</p></th>
            </tr>
          </thead>
        </table>
      </div>

      {/* Exercícios */}
      <div className={styles.exercisesContainer}>
        {/* 1 */}
        <div className={styles.exerciseItem}>
          <span className={styles.exerciseNumber2}>1.</span>
          <div className={styles.exerciseText}>
            He usually{" "}
            <input
              type="text"
              className={`${styles.inputBox} ${showResults ? (isCorrect("ex1_1") ? styles.correct : styles.incorrect) : ""}`}
              value={userAnswers.ex1_1}
              onChange={(e) => handleInputChange("ex1_1", e.target.value)}
              placeholder="(work)"
            />{" "}
            at a bank, but this week he{" "}
            <input
              type="text"
              className={`${styles.inputBox} ${showResults ? (isCorrect("ex1_2") ? styles.correct : styles.incorrect) : ""}`}
              value={userAnswers.ex1_2}
              onChange={(e) => handleInputChange("ex1_2", e.target.value)}
              placeholder="(work)"
            />{" "}
            from home.
          </div>
        </div>

        {/* 2 */}
        <div className={styles.exerciseItem}>
          <span className={styles.exerciseNumber2}>2.</span>
          <div className={styles.exerciseText}>
            I{" "}
            <input
              type="text"
              className={`${styles.inputBox} ${showResults ? (isCorrect("ex2_1") ? styles.correct : styles.incorrect) : ""}`}
              value={userAnswers.ex2_1}
              onChange={(e) => handleInputChange("ex2_1", e.target.value)}
              placeholder="(not like)"
            />{" "}
            chocolate, but I{" "}
            <input
              type="text"
              className={`${styles.inputBox} ${showResults ? (isCorrect("ex2_2") ? styles.correct : styles.incorrect) : ""}`}
              value={userAnswers.ex2_2}
              onChange={(e) => handleInputChange("ex2_2", e.target.value)}
              placeholder="(eat)"
            />{" "}
            a piece now because it's a special occasion.
          </div>
        </div>

        {/* 3 */}
        <div className={styles.exerciseItem}>
          <span className={styles.exerciseNumber2}>3.</span>
          <div className={styles.exerciseText}>
            They{" "}
            <input
              type="text"
              className={`${styles.inputBox} ${showResults ? (isCorrect("ex3_1") ? styles.correct : styles.incorrect) : ""}`}
              value={userAnswers.ex3_1}
              onChange={(e) => handleInputChange("ex3_1", e.target.value)}
              placeholder="(play)"
            />{" "}
            football every Saturday, but today they{" "}
            <input
              type="text"
              className={`${styles.inputBox} ${showResults ? (isCorrect("ex3_2") ? styles.correct : styles.incorrect) : ""}`}
              value={userAnswers.ex3_2}
              onChange={(e) => handleInputChange("ex3_2", e.target.value)}
              placeholder="(play)"
            />{" "}
            tennis.
          </div>
        </div>

        {/* 4 */}
        <div className={styles.exerciseItem}>
          <span className={styles.exerciseNumber2}>4.</span>
          <div className={styles.exerciseText}>
            She{" "}
            <input
              type="text"
              className={`${styles.inputBox} ${showResults ? (isCorrect("ex4_1") ? styles.correct : styles.incorrect) : ""}`}
              value={userAnswers.ex4_1}
              onChange={(e) => handleInputChange("ex4_1", e.target.value)}
              placeholder="(speak)"
            />{" "}
            five languages, but right now she{" "}
            <input
              type="text"
              className={`${styles.inputBox} ${showResults ? (isCorrect("ex4_2") ? styles.correct : styles.incorrect) : ""}`}
              value={userAnswers.ex4_2}
              onChange={(e) => handleInputChange("ex4_2", e.target.value)}
              placeholder="(speak)"
            />{" "}
            in Spanish.
          </div>
        </div>

        {/* 5 */}
        <div className={styles.exerciseItem}>
          <span className={styles.exerciseNumber2}>5.</span>
          <div className={styles.exerciseText}>
            We{" "}
            <input
              type="text"
              className={`${styles.inputBox} ${showResults ? (isCorrect("ex5_1") ? styles.correct : styles.incorrect) : ""}`}
              value={userAnswers.ex5_1}
              onChange={(e) => handleInputChange("ex5_1", e.target.value)}
              placeholder="(go)"
            />{" "}
            to the gym every morning, but this week we{" "}
            <input
              type="text"
              className={`${styles.inputBox} ${showResults ? (isCorrect("ex5_2") ? styles.correct : styles.incorrect) : ""}`}
              value={userAnswers.ex5_2}
              onChange={(e) => handleInputChange("ex5_2", e.target.value)}
              placeholder="(stay)"
            />{" "}
            at home.
          </div>
        </div>
      </div>

      {/* Imagens */}
      <div className={styles.imagesContainer}>
        <div className={styles.imageBox}>
          <img src={imgLaptop} alt="Man working from home" className={styles.exerciseImage} />
        </div>
        <div className={styles.imageBox}>
          <img src={imgTennis} alt="Boy playing tennis" className={styles.exerciseImage} />
        </div>
      </div>

      {/* Botões/Resultados */}
      <div className={styles.checkButtonContainer}>
        <button className={styles.checkButton} onClick={handleCheck}>
          Check Answers
        </button>
      </div>

      {showResults && (
        <div className={styles.resultsContainer}>
          <h3 className={styles.resultsTitle}>Results:</h3>
          <div className={styles.resultsText}>
            {Object.keys(correctAnswers).filter((k) => isCorrect(k)).length} out of{" "}
            {Object.keys(correctAnswers).length} correct!
          </div>
        </div>
      )}
    </div>
  );
};

export default Pagina327;