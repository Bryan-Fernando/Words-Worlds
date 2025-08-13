import React, { useState } from "react";
import styles from "./pagina322.module.css";

// Importando imagens
import img1 from "../assets/images/pagina322 imagen1.webp"; // cachorro dormindo
import img2 from "../assets/images/pagina322 imagen2.webp"; // mulher tomando café
import img3 from "../assets/images/pagina322 imagen3.webp"; // escrevendo carta
import img4 from "../assets/images/pagina322 imagen4.webp"; // mulher com fone na rua
import img5 from "../assets/images/pagina322 imagen5.webp"; // jogando basquete

const Pagina322 = () => {
  // Definição das frases e suas correspondências corretas
  const sentences = [
    { id: "A", text: "She is drinking coffee.", correctMatch: 2 },
    { id: "B", text: "They are playing basketball.", correctMatch: 4 },
    { id: "C", text: "The dog is sleeping on the floor.", correctMatch: 1 },
    { id: "D", text: "He is writing a letter.", correctMatch: 3 },
    { id: "E", text: "We are cooking dinner.", correctMatch: 5 },
  ];

  // Estado para armazenar as respostas do usuário
  const [userAnswers, setUserAnswers] = useState({
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
  });

  // Estado para controlar a exibição dos resultados
  const [showResults, setShowResults] = useState(false);

  // Função para lidar com a seleção de uma resposta
  const handleAnswerChange = (imageId, sentenceId) => {
    if (showResults) return;

    setUserAnswers((prev) => ({
      ...prev,
      [imageId]: sentenceId,
    }));
  };

  // Função para verificar as respostas
  const checkAnswers = () => {
    // Verificar se todas as imagens têm uma resposta selecionada
    const allAnswered = Object.values(userAnswers).every(
      (answer) => answer !== ""
    );

    if (!allAnswered) {
      alert(
        "Por favor, complete todas as correspondências antes de verificar!"
      );
      return;
    }

    setShowResults(true);
  };

  // Função para reiniciar o exercício
  const resetExercise = () => {
    setUserAnswers({
      1: "",
      2: "",
      3: "",
      4: "",
      5: "",
    });
    setShowResults(false);
  };

  // Função para verificar se uma resposta está correta
  const isCorrect = (imageId, sentenceId) => {
    if (!showResults) return null;

    const sentence = sentences.find((s) => s.id === sentenceId);
    return sentence?.correctMatch === imageId;
  };

  // Função para obter a classe CSS baseada no estado da resposta
  const getAnswerClass = (imageId, sentenceId) => {
    if (!showResults) return "";
    return isCorrect(imageId, sentenceId) ? styles.correct : styles.incorrect;
  };

  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <h1 className={styles.exerciseTitle}>Exercise</h1>
        <h2 className={styles.exerciseSubtitle}>
          2. Matching Exercises (Match the sentence with the correct
          image/description)
        </h2>

        <div className={styles.exerciseSection}>
          <p className={styles.exerciseInstructions}>
            Match the sentence (A-E) with the correct picture or description
            (1-5):
          </p>

          <div className={styles.imagesContainer}>
            {[1, 2, 3, 4, 5].map((imageId) => (
              <div key={imageId} className={styles.imageBox}>
                <div className={styles.imageFrame}>
                  <img
                    src={
                      imageId === 1
                        ? img1
                        : imageId === 2
                        ? img2
                        : imageId === 3
                        ? img3
                        : imageId === 4
                        ? img4
                        : img5
                    }
                    alt={`Exercise image ${imageId}`}
                    className={styles.exerciseImage}
                  />
                </div>

                <div className={styles.imagePlaceholder}></div>
                <div className={styles.answerInput}>
                  <input
                    type="text"
                    className={`${styles.placeHereInput} ${
                      userAnswers[imageId]
                        ? getAnswerClass(imageId, userAnswers[imageId])
                        : ""
                    }`}
                    value={userAnswers[imageId]}
                    placeholder="Place here"
                    readOnly
                    onClick={() => {}} // Placeholder para evento de clique
                  />
                </div>
              </div>
            ))}
          </div>

          <div className={styles.sentencesContainer}>
            <p className={styles.sentencesTitle}>Sentences:</p>
            <div className={styles.sentencesList}>
              {sentences.map((sentence) => (
                <div
                  key={sentence.id}
                  className={`${styles.sentenceItem} ${
                    userAnswers[sentence.correctMatch] === sentence.id
                      ? styles.selected
                      : ""
                  }`}
                  onClick={() => {
                    // Encontrar a primeira imagem sem resposta ou substituir a última selecionada
                    const availableImageId =
                      Object.entries(userAnswers).find(
                        ([id, val]) => val === ""
                      )?.[0] ||
                      Object.keys(userAnswers)[
                        Object.keys(userAnswers).length - 1
                      ];

                    if (availableImageId) {
                      handleAnswerChange(
                        parseInt(availableImageId),
                        sentence.id
                      );
                    }
                  }}
                >
                  <span className={styles.sentenceId}>{sentence.id})</span>{" "}
                  {sentence.text}
                </div>
              ))}
            </div>
          </div>

          <div className={styles.buttonsContainer}>
            {!showResults ? (
              <button className={styles.checkButton} onClick={checkAnswers}>
                Check Answers
              </button>
            ) : (
              <div className={styles.resultsContainer}>
                <p className={styles.resultsText}>
                  {
                    Object.entries(userAnswers).filter(
                      ([imageId, sentenceId]) =>
                        isCorrect(parseInt(imageId), sentenceId)
                    ).length
                  }{" "}
                  out of 5 correct!
                </p>
                <button className={styles.resetButton} onClick={resetExercise}>
                  Try Again
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagina322;
