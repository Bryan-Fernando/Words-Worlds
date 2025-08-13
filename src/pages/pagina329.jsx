import React, { useState } from "react";
import styles from "./pagina329.module.css";

// 👇 adicione estes imports (ajuste o caminho/nomes se necessário)
import imgBusStop from "../assets/images/pagina329 imagen1.jpeg";
import imgLibrary from "../assets/images/pagina329 imagen2.jpeg";

const Pagina329 = () => {
  const [userAnswers, setUserAnswers] = useState({
    ex1_simple: "",
    ex1_continuous: "",
    ex2_simple: "",
    ex2_continuous: "",
    ex3_simple: "",
    ex3_continuous: "",
    ex4_simple: "",
    ex4_continuous: "",
    ex5_simple: "",
    ex5_continuous: "",
  });
  const [showResults, setShowResults] = useState(false);

  // Respostas corretas
  const correctAnswers = {
    ex1_simple: "She reads books.",
    ex1_continuous: "She is reading a book.",
    ex2_simple: "They watch TV every evening.",
    ex2_continuous: "They are watching TV right now.",
    ex3_simple: "I cook dinner every day.",
    ex3_continuous: "I am cooking dinner at the moment.",
    ex4_simple: "He cleans the house on weekends.",
    ex4_continuous: "He is cleaning the house now.",
    ex5_simple: "We listen to music in the car.",
    ex5_continuous: "We are listening to music right now.",
  };

  // Prompts para cada exercício
  const prompts = {
    ex1: "(She / read / book)",
    ex2: "(They / watch / TV)",
    ex3: "(I / cook / dinner)",
    ex4: "(He / clean / the house)",
    ex5: "(We / listen / to music)",
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
        <h1 className={styles.exerciseNumber}>Exercise 3:</h1>
        <h2 className={styles.exerciseTitle}>Create Sentences</h2>
        <p className={styles.exerciseInstructions}>
          Write one sentence in the <span className={styles.redtext}>Simple Present</span> and one in the Present Continuous
          for each of the following prompts:
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
            <div className={styles.promptText}>{prompts.ex1}</div>
            <div className={styles.sentenceInputs}>
              <div className={styles.inputGroup}>
                <label className={styles.inputLabel}>Simple Present:</label>
                <input
                  type="text"
                  className={`${styles.sentenceInput} ${
                    showResults
                      ? isCorrect("ex1_simple")
                        ? styles.correct
                        : styles.incorrect
                      : ""
                  }`}
                  value={userAnswers.ex1_simple}
                  onChange={(e) => handleInputChange("ex1_simple", e.target.value)}
                  placeholder="Write a sentence in Simple Present"
                />
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.inputLabel}>Present Continuous:</label>
                <input
                  type="text"
                  className={`${styles.sentenceInput} ${
                    showResults
                      ? isCorrect("ex1_continuous")
                        ? styles.correct
                        : styles.incorrect
                      : ""
                  }`}
                  value={userAnswers.ex1_continuous}
                  onChange={(e) => handleInputChange("ex1_continuous", e.target.value)}
                  placeholder="Write a sentence in Present Continuous"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Exercício 2 */}
        <div className={styles.exerciseItem}>
          <span className={styles.exerciseNumber2}>2.</span>
          <div className={styles.exerciseText}>
            <div className={styles.promptText}>{prompts.ex2}</div>
            <div className={styles.sentenceInputs}>
              <div className={styles.inputGroup}>
                <label className={styles.inputLabel}>Simple Present:</label>
                <input
                  type="text"
                  className={`${styles.sentenceInput} ${
                    showResults
                      ? isCorrect("ex2_simple")
                        ? styles.correct
                        : styles.incorrect
                      : ""
                  }`}
                  value={userAnswers.ex2_simple}
                  onChange={(e) => handleInputChange("ex2_simple", e.target.value)}
                  placeholder="Write a sentence in Simple Present"
                />
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.inputLabel}>Present Continuous:</label>
                <input
                  type="text"
                  className={`${styles.sentenceInput} ${
                    showResults
                      ? isCorrect("ex2_continuous")
                        ? styles.correct
                        : styles.incorrect
                      : ""
                  }`}
                  value={userAnswers.ex2_continuous}
                  onChange={(e) => handleInputChange("ex2_continuous", e.target.value)}
                  placeholder="Write a sentence in Present Continuous"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Exercício 3 */}
        <div className={styles.exerciseItem}>
          <span className={styles.exerciseNumber2}>3.</span>
          <div className={styles.exerciseText}>
            <div className={styles.promptText}>{prompts.ex3}</div>
            <div className={styles.sentenceInputs}>
              <div className={styles.inputGroup}>
                <label className={styles.inputLabel}>Simple Present:</label>
                <input
                  type="text"
                  className={`${styles.sentenceInput} ${
                    showResults
                      ? isCorrect("ex3_simple")
                        ? styles.correct
                        : styles.incorrect
                      : ""
                  }`}
                  value={userAnswers.ex3_simple}
                  onChange={(e) => handleInputChange("ex3_simple", e.target.value)}
                  placeholder="Write a sentence in Simple Present"
                />
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.inputLabel}>Present Continuous:</label>
                <input
                  type="text"
                  className={`${styles.sentenceInput} ${
                    showResults
                      ? isCorrect("ex3_continuous")
                        ? styles.correct
                        : styles.incorrect
                      : ""
                  }`}
                  value={userAnswers.ex3_continuous}
                  onChange={(e) => handleInputChange("ex3_continuous", e.target.value)}
                  placeholder="Write a sentence in Present Continuous"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Exercício 4 */}
        <div className={styles.exerciseItem}>
          <span className={styles.exerciseNumber2}>4.</span>
          <div className={styles.exerciseText}>
            <div className={styles.promptText}>{prompts.ex4}</div>
            <div className={styles.sentenceInputs}>
              <div className={styles.inputGroup}>
                <label className={styles.inputLabel}>Simple Present:</label>
                <input
                  type="text"
                  className={`${styles.sentenceInput} ${
                    showResults
                      ? isCorrect("ex4_simple")
                        ? styles.correct
                        : styles.incorrect
                      : ""
                  }`}
                  value={userAnswers.ex4_simple}
                  onChange={(e) => handleInputChange("ex4_simple", e.target.value)}
                  placeholder="Write a sentence in Simple Present"
                />
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.inputLabel}>Present Continuous:</label>
                <input
                  type="text"
                  className={`${styles.sentenceInput} ${
                    showResults
                      ? isCorrect("ex4_continuous")
                        ? styles.correct
                        : styles.incorrect
                      : ""
                  }`}
                  value={userAnswers.ex4_continuous}
                  onChange={(e) => handleInputChange("ex4_continuous", e.target.value)}
                  placeholder="Write a sentence in Present Continuous"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Exercício 5 */}
        <div className={styles.exerciseItem}>
          <span className={styles.exerciseNumber2}>5.</span>
          <div className={styles.exerciseText}>
            <div className={styles.promptText}>{prompts.ex5}</div>
            <div className={styles.sentenceInputs}>
              <div className={styles.inputGroup}>
                <label className={styles.inputLabel}>Simple Present:</label>
                <input
                  type="text"
                  className={`${styles.sentenceInput} ${
                    showResults
                      ? isCorrect("ex5_simple")
                        ? styles.correct
                        : styles.incorrect
                      : ""
                  }`}
                  value={userAnswers.ex5_simple}
                  onChange={(e) => handleInputChange("ex5_simple", e.target.value)}
                  placeholder="Write a sentence in Simple Present"
                />
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.inputLabel}>Present Continuous:</label>
                <input
                  type="text"
                  className={`${styles.sentenceInput} ${
                    showResults
                      ? isCorrect("ex5_continuous")
                        ? styles.correct
                        : styles.incorrect
                      : ""
                  }`}
                  value={userAnswers.ex5_continuous}
                  onChange={(e) => handleInputChange("ex5_continuous", e.target.value)}
                  placeholder="Write a sentence in Present Continuous"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Imagens */}
      <div className={styles.imagesContainer}>
        <div className={styles.imageBox}>
          <img
            src={imgBusStop}
            alt="couple watching a movie"
            className={styles.exerciseImage}
          />
        </div>
        <div className={styles.imageBox}>
          <img
            src={imgLibrary}
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

export default Pagina329;
