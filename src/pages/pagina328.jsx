import React, { useState } from "react";
import styles from "./pagina328.module.css";

// 👇 adicione estes imports (ajuste o caminho/nomes se necessário)
import imgBusStop from "../assets/images/pagina328 imagen1.webp";
import imgLibrary from "../assets/images/pagina328 imagen2.webp";

const Pagina328 = () => {
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
    ex1: "She is studying at the library right now.",
    ex2: "I usually go to work by bus.",
    ex3: "They play soccer every weekend.",
    ex4: "He goes to the gym every day.",
    ex5: "You always write the same things in your notebook.",
  };

  // Frases originais com erros
  const originalSentences = {
    ex1: "She studies at the library right now.",
    ex2: "I am usually going to work by bus.",
    ex3: "They are playing soccer every weekend.",
    ex4: "He is going to the gym every day.",
    ex5: "You are always writing the same things in your notebook.",
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
        <h1 className={styles.exerciseNumber}>Exercise 2:</h1>
        <h2 className={styles.exerciseTitle}>Correct the Mistake</h2>
        <p className={styles.exerciseInstructions}>
          Each sentence below has one mistake. Identify it and correct the
          sentence.
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

      {/* Exercícios */}
      <div className={styles.exercisesContainer}>
        {/* Exercício 1 */}
        <div className={styles.exerciseItem}>
          <span className={styles.exerciseNumber2}>1.</span>
          <div className={styles.exerciseText}>
            {originalSentences.ex1}
            <div className={styles.correctionLine}>
              <input
                type="text"
                className={`${styles.correctionInput} ${
                  showResults
                    ? isCorrect("ex1")
                      ? styles.correct
                      : styles.incorrect
                    : ""
                }`}
                value={userAnswers.ex1}
                onChange={(e) => handleInputChange("ex1", e.target.value)}
                placeholder="Write the corrected sentence"
              />
            </div>
          </div>
        </div>

        {/* Exercício 2 */}
        <div className={styles.exerciseItem}>
          <span className={styles.exerciseNumber2}>2.</span>
          <div className={styles.exerciseText}>
            {originalSentences.ex2}
            <div className={styles.correctionLine}>
              <input
                type="text"
                className={`${styles.correctionInput} ${
                  showResults
                    ? isCorrect("ex2")
                      ? styles.correct
                      : styles.incorrect
                    : ""
                }`}
                value={userAnswers.ex2}
                onChange={(e) => handleInputChange("ex2", e.target.value)}
                placeholder="Write the corrected sentence"
              />
            </div>
          </div>
        </div>

        {/* Exercício 3 */}
        <div className={styles.exerciseItem}>
          <span className={styles.exerciseNumber2}>3.</span>
          <div className={styles.exerciseText}>
            {originalSentences.ex3}
            <div className={styles.correctionLine}>
              <input
                type="text"
                className={`${styles.correctionInput} ${
                  showResults
                    ? isCorrect("ex3")
                      ? styles.correct
                      : styles.incorrect
                    : ""
                }`}
                value={userAnswers.ex3}
                onChange={(e) => handleInputChange("ex3", e.target.value)}
                placeholder="Write the corrected sentence"
              />
            </div>
          </div>
        </div>

        {/* Exercício 4 */}
        <div className={styles.exerciseItem}>
          <span className={styles.exerciseNumber2}>4.</span>
          <div className={styles.exerciseText}>
            {originalSentences.ex4}
            <div className={styles.correctionLine}>
              <input
                type="text"
                className={`${styles.correctionInput} ${
                  showResults
                    ? isCorrect("ex4")
                      ? styles.correct
                      : styles.incorrect
                    : ""
                }`}
                value={userAnswers.ex4}
                onChange={(e) => handleInputChange("ex4", e.target.value)}
                placeholder="Write the corrected sentence"
              />
            </div>
          </div>
        </div>

        {/* Exercício 5 */}
        <div className={styles.exerciseItem}>
          <span className={styles.exerciseNumber2}>5.</span>
          <div className={styles.exerciseText}>
            {originalSentences.ex5}
            <div className={styles.correctionLine}>
              <input
                type="text"
                className={`${styles.correctionInput} ${
                  showResults
                    ? isCorrect("ex5")
                      ? styles.correct
                      : styles.incorrect
                    : ""
                }`}
                value={userAnswers.ex5}
                onChange={(e) => handleInputChange("ex5", e.target.value)}
                placeholder="Write the corrected sentence"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Imagens */}
      <div className={styles.imagesContainer}>
        <div className={styles.imageBox}>
          <img
            src={imgBusStop}
            alt="People waiting for the bus at a stop"
            className={styles.exerciseImage}
          />
        </div>
        <div className={styles.imageBox}>
          <img
            src={imgLibrary}
            alt="Students studying at the library"
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

export default Pagina328;
