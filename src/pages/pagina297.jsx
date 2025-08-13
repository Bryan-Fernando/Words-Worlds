import React, { useState, useRef } from "react";
import styles from "./pagina297.module.css";

import correct_icon from "../assets/icons/correct_icon.webp";
import wrong_icon from "../assets/icons/wrong_icon.webp";

import img1 from "../assets/images/pagina297 imagen1.webp";
import img2 from "../assets/images/pagina297 imagen2.webp";
import img3 from "../assets/images/pagina297 imagen3.webp";

const Pagina297 = () => {
  const [inputValues1, setInputValues1] = useState(Array(5).fill(""));
  const [results1, setResults1] = useState(Array(5).fill(null));
  const [inputValues2, setInputValues2] = useState(Array(3).fill(""));
  const [results2, setResults2] = useState(Array(3).fill(null));

  const currentAudioRef = useRef(null);

  const correctAnswers1 = [
    "shouldn't",
    "should",
    "shouldn't",
    "should",
    "shouldn't",
  ];
  const correctAnswers2 = ["should", "should", "should"];

  const handleInputChange1 = (value, index) => {
    const newValues = [...inputValues1];
    newValues[index] = value;
    setInputValues1(newValues);
  };

  const handleInputChange2 = (value, index) => {
    const newValues = [...inputValues2];
    newValues[index] = value;
    setInputValues2(newValues);
  };

  const handleCheckClick1 = () => {
    const newResults = inputValues1.map(
      (val, i) => val.trim().toLowerCase() === correctAnswers1[i].toLowerCase()
    );
    setResults1(newResults);
  };

  const handleCheckClick2 = () => {
    const newResults = inputValues2.map(
      (val, i) => val.trim().toLowerCase() === correctAnswers2[i].toLowerCase()
    );
    setResults2(newResults);
  };

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.exercisesTitle}>Exercises</h1>

      {/* Primeiro exercício */}
      <section className={styles.exerciseSection}>
        <div className={styles.exerciseContainer}>
          <div className={styles.exerciseImageLeft}>
            <img src={img1} alt="Students studying outdoors" />
          </div>
          <div className={styles.exerciseContent}>
            <h2 className={styles.exerciseTitle1}>
              1. Fill in the blanks using "should / shouldn't":
            </h2>
            <div className={styles.questionsContainer}>
              {[
                "a) You ____ eat so much candy.",
                "b) She ____ see a doctor.",
                "c) We ____ be rude to others.",
                "d) They ____ study for the test.",
                "e) He ____ smoke. It's bad for his health.",
              ].map((question, index) => {
                const parts = question.split("____");
                return (
                  <div key={index} className={styles.questionRow}>
                    <span className={styles.questionText}>
                      <span className={styles.questionLetter}>
                        {parts[0].charAt(0)}
                      </span>
                      {parts[0].slice(1)}
                    </span>
                    <input
                      type="text"
                      value={inputValues1[index]}
                      onChange={(e) => handleInputChange1(e.target.value, index)}
                      className={styles.inputBox}
                    />
                    <span className={styles.questionText}>{parts[1]}</span>
                    {results1[index] !== null && (
                      <img
                        src={results1[index] ? correct_icon : wrong_icon}
                        alt={results1[index] ? "Correct" : "Incorrect"}
                        className={styles.resultIcon}
                      />
                    )}
                  </div>
                );
              })}
            </div>
            <button className={styles.checkButton} onClick={handleCheckClick1}>
              Check
            </button>
          </div>
        </div>
      </section>

      {/* Imagem central */}
      <div className={styles.secondExerciseImageContainer}>
        <img src={img2} alt="Doctor on the phone" />
      </div>

      {/* Segundo exercício */}
      <section className={styles.exerciseSection}>
        <div className={styles.exerciseContainer}>
          <div className={styles.exerciseContent}>
            <h2 className={styles.exerciseTitle}>2. Choose the correct option:</h2>
            <div className={styles.questionsContainer}>
              {[
                "a) You look tired. You _____ go to bed. Options: should, shouldn't",
                "b) It's raining. We _____ take an umbrella. Options: should, shouldn't",
                "c) He is always late. He _____ wake up earlier. Options: should, shouldn't",
              ].map((question, index) => {
                const parts = question.split("_____");
                const options = parts[1].split("Options:")[1].trim();
                return (
                  <div key={index} className={styles.questionRow}>
                    <span className={styles.questionText}>{parts[0]}</span>
                    <input
                      type="text"
                      value={inputValues2[index]}
                      onChange={(e) => handleInputChange2(e.target.value, index)}
                      className={styles.inputBox}
                    />
                    <span className={styles.questionText}>
                      {parts[1].split("Options:")[0]}
                    </span>
                    <span className={styles.optionsText}>
                      <span className={styles.blueText}>Options:</span> {options}
                    </span>
                    {results2[index] !== null && (
                      <img
                        src={results2[index] ? correct_icon : wrong_icon}
                        alt={results2[index] ? "Correct" : "Incorrect"}
                        className={styles.resultIcon}
                      />
                    )}
                  </div>
                );
              })}
            </div>
            <button className={styles.checkButton} onClick={handleCheckClick2}>
              Check
            </button>
          </div>
        </div>
        <div className={styles.exerciseImageRight}>
          <img src={img3} alt="People walking with an umbrella" />
        </div>
      </section>
    </div>
  );
};

export default Pagina297;