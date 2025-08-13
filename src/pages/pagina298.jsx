import React, { useState } from "react";
import styles from "./pagina298.module.css";

import img1 from "../assets/images/pagina298 imagen1.webp"; // carro quebrado
import img2 from "../assets/images/pagina298 imagen2.webp"; // prato de comida

const Pagina298 = () => {
  // Estado para armazenar as conexões feitas pelo usuário
  const [connections, setConnections] = useState({});
  const [showResults, setShowResults] = useState(false);

  // Respostas corretas
  const correctAnswers = {
    1: "b", // I have a headache -> You should go to the doctor
    2: "d", // My car is broken -> You should take it to the mechanic
    3: "c", // She's always late -> She should wake up earlier
    4: "a"  // I want to lose weight -> You should eat healthier
  };

  // Função para conectar itens
  const handleConnection = (leftIndex, rightLetter) => {
    setConnections(prev => ({
      ...prev,
      [leftIndex]: rightLetter
    }));
  };

  // Função para verificar respostas
  const handleCheck = () => {
    setShowResults(true);
  };

  // Função para verificar se a conexão está correta
  const isCorrect = (leftIndex) => {
    return connections[leftIndex] === correctAnswers[leftIndex];
  };

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.exercisesTitle}>Exercises</h1>

      {/* Exercício Match Columns */}
      <section className={styles.exerciseSection}>
        <h2 className={styles.exerciseTitle}>3. Match columns</h2>
        
        <div className={styles.matchContainer}>
          {/* Coluna da esquerda */}
          <div className={styles.leftColumn}>
            {[
              "1. I have a headache.",
              "2. My car is broken.",
              "3. She's always late.",
              "4. I want to lose weight."
            ].map((item, index) => (
              <div 
                key={index + 1} 
                className={`${styles.leftItem} ${
                  showResults ? 
                    (isCorrect(index + 1) ? styles.correct : styles.incorrect) : 
                    ''
                }`}
              >
                {item}
              </div>
            ))}
          </div>

          {/* Área de conexões */}
          <div className={styles.connectionsArea}>
            {Object.entries(connections).map(([leftIndex, rightLetter]) => (
              <div key={leftIndex} className={styles.connectionLine}>
                {leftIndex} → {rightLetter}
              </div>
            ))}
          </div>

          {/* Coluna da direita */}
          <div className={styles.rightColumn}>
            {[
              { letter: "a", text: "You should eat healthier." },
              { letter: "b", text: "You should go to the doctor." },
              { letter: "c", text: "She should wake up earlier." },
              { letter: "d", text: "You should take it to the mechanic." }
            ].map((item) => (
              <div key={item.letter} className={styles.rightItem}>
                <span className={styles.letterLabel}>{item.letter}.</span> {item.text}
              </div>
            ))}
          </div>
        </div>

        {/* Área de seleção */}
        <div className={styles.selectionArea}>
          <h3>Make your connections:</h3>
          {[1, 2, 3, 4].map(leftIndex => (
            <div key={leftIndex} className={styles.selectionRow}>
              <span>Question {leftIndex}:</span>
              <select 
                value={connections[leftIndex] || ""}
                onChange={(e) => handleConnection(leftIndex, e.target.value)}
                className={styles.selectBox}
              >
                <option value="">Select answer</option>
                <option value="a">a</option>
                <option value="b">b</option>
                <option value="c">c</option>
                <option value="d">d</option>
              </select>
            </div>
          ))}
        </div>

        <button className={styles.checkButton} onClick={handleCheck}>
          Check
        </button>
      </section>

      {/* Imagens no final */}
      <div className={styles.imagesContainer}>
        <div className={styles.imageLeft}>
          <img src={img1} alt="Man looking at car engine" />
        </div>
        <div className={styles.imageRight}>
          <img src={img2} alt="Healthy breakfast plate" />
        </div>
      </div>
    </div>
  );
};

export default Pagina298;
