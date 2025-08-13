import React, { useState } from "react";
import styles from "./pagina326.module.css";

const Pagina326 = () => {
  const [userAnswers, setUserAnswers] = useState({
    story6_1: "", story6_2: "", story6_3: "", story6_4: "", story6_5: "",
    story7_1: "", story7_2: "", story7_3: "", story7_4: "", story7_5: "",
    story8_1: "", story8_2: "", story8_3: "", story8_4: "", story8_5: "",
    story9_1: "", story9_2: "", story9_3: "", story9_4: "", story9_5: "",
    story10_1: "", story10_2: "", story10_3: "", story10_4: "", story10_5: "", story10_6: ""
  });
  const [showResults, setShowResults] = useState(false);

  // Respostas corretas
  const correctAnswers = {
    story6_1: "is barking", story6_2: "are coming", story6_3: "are running", 
    story6_4: "am not going", story6_5: "am reading",
    story7_1: "is celebrating", story7_2: "are arriving", story7_3: "are having", 
    story7_4: "is baking", story7_5: "is decorating",
    story8_1: "are practicing", story8_2: "is helping", story8_3: "are watching", 
    story8_4: "are not nervous", story8_5: "are enjoying",
    story9_1: "am planning", story9_2: "is working", story9_3: "am inviting", 
    story9_4: "are setting up", story9_5: "are bringing",
    story10_1: "is moving", story10_2: "is packing", story10_3: "are helping", 
    story10_4: "is not sure", story10_5: "wants", story10_6: "is looking forward"
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

      {/* Exercício Gap-Fill Stories */}
      <section className={styles.exerciseSection}>
        <div className={styles.exerciseContainer}>
          
          <div className={styles.exerciseContent}>
            <h2 className={styles.exerciseTitle}>
              4. Gap-Fill Stories (Fill in the blanks with the Present Continuous form of the verbs)
            </h2>

            <div className={styles.questionsContainer}>
              {/* Story 6 */}
              <div className={styles.storySection}>
                <h3 className={styles.storyTitle}>Story 6:</h3>
                <div className={styles.storyText}>
                  Right now, my dog{" "}
                  <input
                    type="text"
                    className={`${styles.inputBox} ${
                      showResults
                        ? isCorrect("story6_1")
                          ? styles.correct
                          : styles.incorrect
                        : ""
                    }`}
                    value={userAnswers.story6_1}
                    onChange={(e) => handleInputChange("story6_1", e.target.value)}
                    placeholder="(bark)"
                  />{" "}
                  at the mailman. My neighbors{" "}
                  <input
                    type="text"
                    className={`${styles.inputBox} ${
                      showResults
                        ? isCorrect("story6_2")
                          ? styles.correct
                          : styles.incorrect
                        : ""
                    }`}
                    value={userAnswers.story6_2}
                    onChange={(e) => handleInputChange("story6_2", e.target.value)}
                    placeholder="(come)"
                  />{" "}
                  home, and their kids{" "}
                  <input
                    type="text"
                    className={`${styles.inputBox} ${
                      showResults
                        ? isCorrect("story6_3")
                          ? styles.correct
                          : styles.incorrect
                        : ""
                    }`}
                    value={userAnswers.story6_3}
                    onChange={(e) => handleInputChange("story6_3", e.target.value)}
                    placeholder="(run)"
                  />{" "}
                  around the yard. I{" "}
                  <input
                    type="text"
                    className={`${styles.inputBox} ${
                      showResults
                        ? isCorrect("story6_4")
                          ? styles.correct
                          : styles.incorrect
                        : ""
                    }`}
                    value={userAnswers.story6_4}
                    onChange={(e) => handleInputChange("story6_4", e.target.value)}
                    placeholder="(not/go)"
                  />{" "}
                  outside because I{" "}
                  <input
                    type="text"
                    className={`${styles.inputBox} ${
                      showResults
                        ? isCorrect("story6_5")
                          ? styles.correct
                          : styles.incorrect
                        : ""
                    }`}
                    value={userAnswers.story6_5}
                    onChange={(e) => handleInputChange("story6_5", e.target.value)}
                    placeholder="(read)"
                  />{" "}
                  a book.
                </div>
              </div>

              {/* Story 7 */}
              <div className={styles.storySection}>
                <h3 className={styles.storyTitle}>Story 7:</h3>
                <div className={styles.storyText}>
                  Today my family{" "}
                  <input
                    type="text"
                    className={`${styles.inputBox} ${
                      showResults
                        ? isCorrect("story7_1")
                          ? styles.correct
                          : styles.incorrect
                        : ""
                    }`}
                    value={userAnswers.story7_1}
                    onChange={(e) => handleInputChange("story7_1", e.target.value)}
                    placeholder="(celebrate)"
                  />{" "}
                  my birthday. My friends{" "}
                  <input
                    type="text"
                    className={`${styles.inputBox} ${
                      showResults
                        ? isCorrect("story7_2")
                          ? styles.correct
                          : styles.incorrect
                        : ""
                    }`}
                    value={userAnswers.story7_2}
                    onChange={(e) => handleInputChange("story7_2", e.target.value)}
                    placeholder="(arrive)"
                  />{" "}
                  in the afternoon, and we{" "}
                  <input
                    type="text"
                    className={`${styles.inputBox} ${
                      showResults
                        ? isCorrect("story7_3")
                          ? styles.correct
                          : styles.incorrect
                        : ""
                    }`}
                    value={userAnswers.story7_3}
                    onChange={(e) => handleInputChange("story7_3", e.target.value)}
                    placeholder="(have)"
                  />{" "}
                  a small party. My mom{" "}
                  <input
                    type="text"
                    className={`${styles.inputBox} ${
                      showResults
                        ? isCorrect("story7_4")
                          ? styles.correct
                          : styles.incorrect
                        : ""
                    }`}
                    value={userAnswers.story7_4}
                    onChange={(e) => handleInputChange("story7_4", e.target.value)}
                    placeholder="(bake)"
                  />{" "}
                  a cake, and my dad{" "}
                  <input
                    type="text"
                    className={`${styles.inputBox} ${
                      showResults
                        ? isCorrect("story7_5")
                          ? styles.correct
                          : styles.incorrect
                        : ""
                    }`}
                    value={userAnswers.story7_5}
                    onChange={(e) => handleInputChange("story7_5", e.target.value)}
                    placeholder="(decorate)"
                  />{" "}
                  the house.
                </div>
              </div>

              {/* Story 8 */}
              <div className={styles.storySection}>
                <h3 className={styles.storyTitle}>Story 8:</h3>
                <div className={styles.storyText}>
                  The students{" "}
                  <input
                    type="text"
                    className={`${styles.inputBox} ${
                      showResults
                        ? isCorrect("story8_1")
                          ? styles.correct
                          : styles.incorrect
                        : ""
                    }`}
                    value={userAnswers.story8_1}
                    onChange={(e) => handleInputChange("story8_1", e.target.value)}
                    placeholder="(practice)"
                  />{" "}
                  for their school play. The teacher{" "}
                  <input
                    type="text"
                    className={`${styles.inputBox} ${
                      showResults
                        ? isCorrect("story8_2")
                          ? styles.correct
                          : styles.incorrect
                        : ""
                    }`}
                    value={userAnswers.story8_2}
                    onChange={(e) => handleInputChange("story8_2", e.target.value)}
                    placeholder="(help)"
                  />{" "}
                  them with their lines, and the parents{" "}
                  <input
                    type="text"
                    className={`${styles.inputBox} ${
                      showResults
                        ? isCorrect("story8_3")
                          ? styles.correct
                          : styles.incorrect
                        : ""
                    }`}
                    value={userAnswers.story8_3}
                    onChange={(e) => handleInputChange("story8_3", e.target.value)}
                    placeholder="(watch)"
                  />{" "}
                  from the back of the room. They{" "}
                  <input
                    type="text"
                    className={`${styles.inputBox} ${
                      showResults
                        ? isCorrect("story8_4")
                          ? styles.correct
                          : styles.incorrect
                        : ""
                    }`}
                    value={userAnswers.story8_4}
                    onChange={(e) => handleInputChange("story8_4", e.target.value)}
                    placeholder="(not/nervous)"
                  />{" "}
                  because they{" "}
                  <input
                    type="text"
                    className={`${styles.inputBox} ${
                      showResults
                        ? isCorrect("story8_5")
                          ? styles.correct
                          : styles.incorrect
                        : ""
                    }`}
                    value={userAnswers.story8_5}
                    onChange={(e) => handleInputChange("story8_5", e.target.value)}
                    placeholder="(enjoy)"
                  />{" "}
                  the process.
                </div>
              </div>

              {/* Story 9 */}
              <div className={styles.storySection}>
                <h3 className={styles.storyTitle}>Story 9:</h3>
                <div className={styles.storyText}>
                  I{" "}
                  <input
                    type="text"
                    className={`${styles.inputBox} ${
                      showResults
                        ? isCorrect("story9_1")
                          ? styles.correct
                          : styles.incorrect
                        : ""
                    }`}
                    value={userAnswers.story9_1}
                    onChange={(e) => handleInputChange("story9_1", e.target.value)}
                    placeholder="(plan)"
                  />{" "}
                  a surprise party for my best friend. While she{" "}
                  <input
                    type="text"
                    className={`${styles.inputBox} ${
                      showResults
                        ? isCorrect("story9_2")
                          ? styles.correct
                          : styles.incorrect
                        : ""
                    }`}
                    value={userAnswers.story9_2}
                    onChange={(e) => handleInputChange("story9_2", e.target.value)}
                    placeholder="(work)"
                  />{" "}
                  I{" "}
                  <input
                    type="text"
                    className={`${styles.inputBox} ${
                      showResults
                        ? isCorrect("story9_3")
                          ? styles.correct
                          : styles.incorrect
                        : ""
                    }`}
                    value={userAnswers.story9_3}
                    onChange={(e) => handleInputChange("story9_3", e.target.value)}
                    placeholder="(invite)"
                  />{" "}
                  all her friends. We{" "}
                  <input
                    type="text"
                    className={`${styles.inputBox} ${
                      showResults
                        ? isCorrect("story9_4")
                          ? styles.correct
                          : styles.incorrect
                        : ""
                    }`}
                    value={userAnswers.story9_4}
                    onChange={(e) => handleInputChange("story9_4", e.target.value)}
                    placeholder="(set up)"
                  />{" "}
                  everything, and my friends{" "}
                  <input
                    type="text"
                    className={`${styles.inputBox} ${
                      showResults
                        ? isCorrect("story9_5")
                          ? styles.correct
                          : styles.incorrect
                        : ""
                    }`}
                    value={userAnswers.story9_5}
                    onChange={(e) => handleInputChange("story9_5", e.target.value)}
                    placeholder="(bring)"
                  />{" "}
                  the decorations.
                </div>
              </div>

              {/* Story 10 */}
              <div className={styles.storySection}>
                <h3 className={styles.storyTitle}>Story 10:</h3>
                <div className={styles.storyText}>
                  My cousin{" "}
                  <input
                    type="text"
                    className={`${styles.inputBox} ${
                      showResults
                        ? isCorrect("story10_1")
                          ? styles.correct
                          : styles.incorrect
                        : ""
                    }`}
                    value={userAnswers.story10_1}
                    onChange={(e) => handleInputChange("story10_1", e.target.value)}
                    placeholder="(move)"
                  />{" "}
                  to a new city next week. Right now, he{" "}
                  <input
                    type="text"
                    className={`${styles.inputBox} ${
                      showResults
                        ? isCorrect("story10_2")
                          ? styles.correct
                          : styles.incorrect
                        : ""
                    }`}
                    value={userAnswers.story10_2}
                    onChange={(e) => handleInputChange("story10_2", e.target.value)}
                    placeholder="(pack)"
                  />{" "}
                  his things, and his friends{" "}
                  <input
                    type="text"
                    className={`${styles.inputBox} ${
                      showResults
                        ? isCorrect("story10_3")
                          ? styles.correct
                          : styles.incorrect
                        : ""
                    }`}
                    value={userAnswers.story10_3}
                    onChange={(e) => handleInputChange("story10_3", e.target.value)}
                    placeholder="(help)"
                  />{" "}
                  him. He{" "}
                  <input
                    type="text"
                    className={`${styles.inputBox} ${
                      showResults
                        ? isCorrect("story10_4")
                          ? styles.correct
                          : styles.incorrect
                        : ""
                    }`}
                    value={userAnswers.story10_4}
                    onChange={(e) => handleInputChange("story10_4", e.target.value)}
                    placeholder="(not/sure)"
                  />{" "}
                  if he{" "}
                  <input
                    type="text"
                    className={`${styles.inputBox} ${
                      showResults
                        ? isCorrect("story10_5")
                          ? styles.correct
                          : styles.incorrect
                        : ""
                    }`}
                    value={userAnswers.story10_5}
                    onChange={(e) => handleInputChange("story10_5", e.target.value)}
                    placeholder="(want)"
                  />{" "}
                  to leave, but he{" "}
                  <input
                    type="text"
                    className={`${styles.inputBox} ${
                      showResults
                        ? isCorrect("story10_6")
                          ? styles.correct
                          : styles.incorrect
                        : ""
                    }`}
                    value={userAnswers.story10_6}
                    onChange={(e) => handleInputChange("story10_6", e.target.value)}
                    placeholder="(look forward)"
                  />{" "}
                  to new opportunities.
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
                    {Object.keys(correctAnswers).filter(key => isCorrect(key)).length} out of {Object.keys(correctAnswers).length} correct!
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pagina326;
