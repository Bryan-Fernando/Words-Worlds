import React, { useState } from "react";
import styles from "./pagina325.module.css";

const Pagina325 = () => {
  const [userAnswers, setUserAnswers] = useState({
    story1_1: "", story1_2: "", story1_3: "", story1_4: "", story1_5: "", story1_6: "",
    story2_1: "", story2_2: "", story2_3: "", story2_4: "", story2_5: "", story2_6: "",
    story3_1: "", story3_2: "", story3_3: "", story3_4: "", story3_5: "",
    story4_1: "", story4_2: "", story4_3: "", story4_4: "", story4_5: "",
    story5_1: "", story5_2: "", story5_3: "", story5_4: ""
  });
  const [showResults, setShowResults] = useState(false);

  // Respostas corretas
  const correctAnswers = {
    story1_1: "am sitting", story1_2: "is watching", story1_3: "are not preparing", 
    story1_4: "is cooking", story1_5: "is sleeping",
    story2_1: "are playing", story2_2: "am not playing", story2_3: "am studying", 
    story2_4: "is riding", story2_5: "is reading",
    story3_1: "are going", story3_2: "are not planning", story3_3: "am already packing", 
    story3_4: "are flying", story3_5: "am looking forward",
    story4_1: "is raining", story4_2: "are waiting", story4_3: "am talking", 
    story4_4: "are not bringing", story4_5: "are getting",
    story5_1: "are working", story5_2: "are creating", story5_3: "is contributing", 
    story5_4: "are not having"
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
              {/* Story 1 */}
              <div className={styles.storySection}>
                <h3 className={styles.storyTitle}>Story 1:</h3>
                <div className={styles.storyText}>
                  Right now, I{" "}
                  <input
                    type="text"
                    className={`${styles.inputBox} ${
                      showResults
                        ? isCorrect("story1_1")
                          ? styles.correct
                          : styles.incorrect
                        : ""
                    }`}
                    value={userAnswers.story1_1}
                    onChange={(e) => handleInputChange("story1_1", e.target.value)}
                    placeholder="(sit)"
                  />{" "}
                  in my room, and my brother{" "}
                  <input
                    type="text"
                    className={`${styles.inputBox} ${
                      showResults
                        ? isCorrect("story1_2")
                          ? styles.correct
                          : styles.incorrect
                        : ""
                    }`}
                    value={userAnswers.story1_2}
                    onChange={(e) => handleInputChange("story1_2", e.target.value)}
                    placeholder="(watch)"
                  />{" "}
                  TV in the living room. We{" "}
                  <input
                    type="text"
                    className={`${styles.inputBox} ${
                      showResults
                        ? isCorrect("story1_3")
                          ? styles.correct
                          : styles.incorrect
                        : ""
                    }`}
                    value={userAnswers.story1_3}
                    onChange={(e) => handleInputChange("story1_3", e.target.value)}
                    placeholder="(not/prepare)"
                  />{" "}
                  for school yet. My mom{" "}
                  <input
                    type="text"
                    className={`${styles.inputBox} ${
                      showResults
                        ? isCorrect("story1_4")
                          ? styles.correct
                          : styles.incorrect
                        : ""
                    }`}
                    value={userAnswers.story1_4}
                    onChange={(e) => handleInputChange("story1_4", e.target.value)}
                    placeholder="(cook)"
                  />{" "}
                  dinner in the kitchen. The cat{" "}
                  <input
                    type="text"
                    className={`${styles.inputBox} ${
                      showResults
                        ? isCorrect("story1_5")
                          ? styles.correct
                          : styles.incorrect
                        : ""
                    }`}
                    value={userAnswers.story1_5}
                    onChange={(e) => handleInputChange("story1_5", e.target.value)}
                    placeholder="(sleep)"
                  />{" "}
                  on the sofa.
                </div>
              </div>

              {/* Story 2 */}
              <div className={styles.storySection}>
                <h3 className={styles.storyTitle}>Story 2:</h3>
                <div className={styles.storyText}>
                  At the moment, my friends{" "}
                  <input
                    type="text"
                    className={`${styles.inputBox} ${
                      showResults
                        ? isCorrect("story2_1")
                          ? styles.correct
                          : styles.incorrect
                        : ""
                    }`}
                    value={userAnswers.story2_1}
                    onChange={(e) => handleInputChange("story2_1", e.target.value)}
                    placeholder="(play)"
                  />{" "}
                  soccer at the park. I{" "}
                  <input
                    type="text"
                    className={`${styles.inputBox} ${
                      showResults
                        ? isCorrect("story2_2")
                          ? styles.correct
                          : styles.incorrect
                        : ""
                    }`}
                    value={userAnswers.story2_2}
                    onChange={(e) => handleInputChange("story2_2", e.target.value)}
                    placeholder="(not/play)"
                  />{" "}
                  because I{" "}
                  <input
                    type="text"
                    className={`${styles.inputBox} ${
                      showResults
                        ? isCorrect("story2_3")
                          ? styles.correct
                          : styles.incorrect
                        : ""
                    }`}
                    value={userAnswers.story2_3}
                    onChange={(e) => handleInputChange("story2_3", e.target.value)}
                    placeholder="(study)"
                  />{" "}
                  for my exams. My sister{" "}
                  <input
                    type="text"
                    className={`${styles.inputBox} ${
                      showResults
                        ? isCorrect("story2_4")
                          ? styles.correct
                          : styles.incorrect
                        : ""
                    }`}
                    value={userAnswers.story2_4}
                    onChange={(e) => handleInputChange("story2_4", e.target.value)}
                    placeholder="(ride)"
                  />{" "}
                  her bike outside, and my dad{" "}
                  <input
                    type="text"
                    className={`${styles.inputBox} ${
                      showResults
                        ? isCorrect("story2_5")
                          ? styles.correct
                          : styles.incorrect
                        : ""
                    }`}
                    value={userAnswers.story2_5}
                    onChange={(e) => handleInputChange("story2_5", e.target.value)}
                    placeholder="(read)"
                  />{" "}
                  the newspaper.
                </div>
              </div>

              {/* Story 3 */}
              <div className={styles.storySection}>
                <h3 className={styles.storyTitle}>Story 3:</h3>
                <div className={styles.storyText}>
                  We{" "}
                  <input
                    type="text"
                    className={`${styles.inputBox} ${
                      showResults
                        ? isCorrect("story3_1")
                          ? styles.correct
                          : styles.incorrect
                        : ""
                    }`}
                    value={userAnswers.story3_1}
                    onChange={(e) => handleInputChange("story3_1", e.target.value)}
                    placeholder="(go)"
                  />{" "}
                  on vacation next week. My parents{" "}
                  <input
                    type="text"
                    className={`${styles.inputBox} ${
                      showResults
                        ? isCorrect("story3_2")
                          ? styles.correct
                          : styles.incorrect
                        : ""
                    }`}
                    value={userAnswers.story3_2}
                    onChange={(e) => handleInputChange("story3_2", e.target.value)}
                    placeholder="(not/plan)"
                  />{" "}
                  to work, and I{" "}
                  <input
                    type="text"
                    className={`${styles.inputBox} ${
                      showResults
                        ? isCorrect("story3_3")
                          ? styles.correct
                          : styles.incorrect
                        : ""
                    }`}
                    value={userAnswers.story3_3}
                    onChange={(e) => handleInputChange("story3_3", e.target.value)}
                    placeholder="(already/pack)"
                  />{" "}
                  my bags. We{" "}
                  <input
                    type="text"
                    className={`${styles.inputBox} ${
                      showResults
                        ? isCorrect("story3_4")
                          ? styles.correct
                          : styles.incorrect
                        : ""
                    }`}
                    value={userAnswers.story3_4}
                    onChange={(e) => handleInputChange("story3_4", e.target.value)}
                    placeholder="(fly)"
                  />{" "}
                  to Italy, and I{" "}
                  <input
                    type="text"
                    className={`${styles.inputBox} ${
                      showResults
                        ? isCorrect("story3_5")
                          ? styles.correct
                          : styles.incorrect
                        : ""
                    }`}
                    value={userAnswers.story3_5}
                    onChange={(e) => handleInputChange("story3_5", e.target.value)}
                    placeholder="(look forward)"
                  />{" "}
                  to the trip.
                </div>
              </div>

              {/* Story 4 */}
              <div className={styles.storySection}>
                <h3 className={styles.storyTitle}>Story 4:</h3>
                <div className={styles.storyText}>
                  It{" "}
                  <input
                    type="text"
                    className={`${styles.inputBox} ${
                      showResults
                        ? isCorrect("story4_1")
                          ? styles.correct
                          : styles.incorrect
                        : ""
                    }`}
                    value={userAnswers.story4_1}
                    onChange={(e) => handleInputChange("story4_1", e.target.value)}
                    placeholder="(rain)"
                  />{" "}
                  heavily outside. My friends{" "}
                  <input
                    type="text"
                    className={`${styles.inputBox} ${
                      showResults
                        ? isCorrect("story4_2")
                          ? styles.correct
                          : styles.incorrect
                        : ""
                    }`}
                    value={userAnswers.story4_2}
                    onChange={(e) => handleInputChange("story4_2", e.target.value)}
                    placeholder="(wait)"
                  />{" "}
                  for the bus, and I{" "}
                  <input
                    type="text"
                    className={`${styles.inputBox} ${
                      showResults
                        ? isCorrect("story4_3")
                          ? styles.correct
                          : styles.incorrect
                        : ""
                    }`}
                    value={userAnswers.story4_3}
                    onChange={(e) => handleInputChange("story4_3", e.target.value)}
                    placeholder="(talk)"
                  />{" "}
                  to them on the phone. They{" "}
                  <input
                    type="text"
                    className={`${styles.inputBox} ${
                      showResults
                        ? isCorrect("story4_4")
                          ? styles.correct
                          : styles.incorrect
                        : ""
                    }`}
                    value={userAnswers.story4_4}
                    onChange={(e) => handleInputChange("story4_4", e.target.value)}
                    placeholder="(not/bring)"
                  />{" "}
                  an umbrella, so they{" "}
                  <input
                    type="text"
                    className={`${styles.inputBox} ${
                      showResults
                        ? isCorrect("story4_5")
                          ? styles.correct
                          : styles.incorrect
                        : ""
                    }`}
                    value={userAnswers.story4_5}
                    onChange={(e) => handleInputChange("story4_5", e.target.value)}
                    placeholder="(get)"
                  />{" "}
                  wet.
                </div>
              </div>

              {/* Story 5 */}
              <div className={styles.storySection}>
                <h3 className={styles.storyTitle}>Story 5:</h3>
                <div className={styles.storyText}>
                  My classmates and I{" "}
                  <input
                    type="text"
                    className={`${styles.inputBox} ${
                      showResults
                        ? isCorrect("story5_1")
                          ? styles.correct
                          : styles.incorrect
                        : ""
                    }`}
                    value={userAnswers.story5_1}
                    onChange={(e) => handleInputChange("story5_1", e.target.value)}
                    placeholder="(work)"
                  />{" "}
                  on a project. We{" "}
                  <input
                    type="text"
                    className={`${styles.inputBox} ${
                      showResults
                        ? isCorrect("story5_2")
                          ? styles.correct
                          : styles.incorrect
                        : ""
                    }`}
                    value={userAnswers.story5_2}
                    onChange={(e) => handleInputChange("story5_2", e.target.value)}
                    placeholder="(create)"
                  />{" "}
                  a presentation and everyone{" "}
                  <input
                    type="text"
                    className={`${styles.inputBox} ${
                      showResults
                        ? isCorrect("story5_3")
                          ? styles.correct
                          : styles.incorrect
                        : ""
                    }`}
                    value={userAnswers.story5_3}
                    onChange={(e) => handleInputChange("story5_3", e.target.value)}
                    placeholder="(contribute)"
                  />{" "}
                  their ideas. We{" "}
                  <input
                    type="text"
                    className={`${styles.inputBox} ${
                      showResults
                        ? isCorrect("story5_4")
                          ? styles.correct
                          : styles.incorrect
                        : ""
                    }`}
                    value={userAnswers.story5_4}
                    onChange={(e) => handleInputChange("story5_4", e.target.value)}
                    placeholder="(not/have)"
                  />{" "}
                  any difficulties so far.
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

export default Pagina325;
