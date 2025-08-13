import React, { useState } from "react";
import styles from "./pagina330.module.css";

import img1 from "../assets/images/pagina330 imagen1.webp";
import img2 from "../assets/images/pagina330 imagen2.webp";

const Pagina330 = () => {
  const [userAnswers, setUserAnswers] = useState({
    ex1: "",
    ex2: "",
    ex3: "",
    ex4: "",
    ex5: "",
  });
  const [showResults, setShowResults] = useState(false);

  // Respostas corretas
  const correctAnswers = {
    ex1: "are you doing",
    ex2: "am reading",
    ex3: "read",
    ex4: "am doing",
    ex5: "have",
  };

  // Texto original do diálogo
  const dialogueText = {
    line1: "John: Hi, Anne! What _____________ right now?",
    line2: "Anne: Hi, John! I _____________ a book. I usually",
    line3: "_____________ in the evening, but today I _____________ it",
    line4: "earlier.",
    line5: "John: Cool! Do you want to go for a walk later?",
    line6: "Anne: Sure! But I can't stay out too long because I _____________ an important",
    line7: "meeting tomorrow.",
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
      correctAnswers[field].toLowerCase().trim()
    );
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.exerciseHeader}>
        <h1 className={styles.exerciseNumber}>Exercise 4:</h1>
        <h2 className={styles.exerciseTitle}>Complete the Dialogue</h2>
        <p className={styles.exerciseInstructions}>
          Use either the <span className={styles.redtext}>Simple Present</span> or Present Continuous to complete this dialogue.
        </p>
      </div>

      {/* Tabela Forma Afirmativa */}
      <div className={styles.tableContainer}>
        <div className={styles.tableHeader}>Forma Afirmativa</div>
        <table className={styles.grammarTable}>
          <thead>
            <tr>
              <th>
                <p>Sujeito</p>
              </th>
              <th>
                <p>Verbo Auxiliar</p>
              </th>
              <th>
                <p>Advérbio</p>
              </th>
              <th>
                <p>Verbo(s)</p>
              </th>
              <th>
                <p>Objeto Complemento</p>
              </th>
            </tr>
          </thead>
        </table>
      </div>

      {/* Diálogo */}
      <div className={styles.dialogueContainer}>
        <div className={styles.dialogue}>
          <p className={styles.dialogueLine}>
            John: Hi, Anne! What{" "}
            <input
              type="text"
              className={`${styles.dialogueInput} ${
                showResults
                  ? isCorrect("ex1")
                    ? styles.correct
                    : styles.incorrect
                  : ""
              }`}
              value={userAnswers.ex1}
              onChange={(e) => handleInputChange("ex1", e.target.value)}
              placeholder="(you / do)"
            />{" "}
            right now?
          </p>
          <p className={styles.dialogueLine}>
            Anne: Hi, John! I{" "}
            <input
              type="text"
              className={`${styles.dialogueInput} ${
                showResults
                  ? isCorrect("ex2")
                    ? styles.correct
                    : styles.incorrect
                  : ""
              }`}
              value={userAnswers.ex2}
              onChange={(e) => handleInputChange("ex2", e.target.value)}
              placeholder="(read)"
            />{" "}
            a book. I usually{" "}
            <input
              type="text"
              className={`${styles.dialogueInput} ${
                showResults
                  ? isCorrect("ex3")
                    ? styles.correct
                    : styles.incorrect
                  : ""
              }`}
              value={userAnswers.ex3}
              onChange={(e) => handleInputChange("ex3", e.target.value)}
              placeholder="(read)"
            />{" "}
            in the evening, but today I{" "}
            <input
              type="text"
              className={`${styles.dialogueInput} ${
                showResults
                  ? isCorrect("ex4")
                    ? styles.correct
                    : styles.incorrect
                  : ""
              }`}
              value={userAnswers.ex4}
              onChange={(e) => handleInputChange("ex4", e.target.value)}
              placeholder="(do)"
            />{" "}
            it earlier.
          </p>
          <p className={styles.dialogueLine}>John: Cool! Do you want to go for a walk later?</p>
          <p className={styles.dialogueLine}>
            Anne: Sure! But I can't stay out too long because I{" "}
            <input
              type="text"
              className={`${styles.dialogueInput} ${
                showResults
                  ? isCorrect("ex5")
                    ? styles.correct
                    : styles.incorrect
                  : ""
              }`}
              value={userAnswers.ex5}
              onChange={(e) => handleInputChange("ex5", e.target.value)}
              placeholder="(have)"
            />{" "}
            an important meeting tomorrow.
          </p>
        </div>
      </div>

      {/* Imagens */}
      <div className={styles.imagesContainer}>
        <div className={styles.imageBox}>
          <img
            src={img1}
            alt="couple watching a movie"
            className={styles.exerciseImage}
          />
        </div>
        <div className={styles.imageBox}>
          <img
            src={img2}
            alt="man washing his hands"
            className={styles.exerciseImage}
          />
        </div>
      </div>


      {/* Botão de verificação */}
      <div className={styles.checkButtonContainer}>
        <button className={styles.checkButton} onClick={handleCheck}>
          Check Answers
        </button>
      </div>

      {/* Feedback geral */}
      {showResults && (
        <div className={styles.resultsContainer}>
          <h3 className={styles.resultsTitle}>Results:</h3>
          <div className={styles.resultsText}>
            {Object.keys(correctAnswers).filter((key) => isCorrect(key)).length}{" "}
            out of {Object.keys(correctAnswers).length} correct!
          </div>
        </div>
      )}
    </div>
  );
};

export default Pagina330;
