import React, { useState } from 'react';
import styles from './pagina320.module.css';

const Pagina320 = () => {
  const questions = [
    {
      id: 1,
      text: "She __________________ a book right now.",
      options: ["is read", "is reading", "are reading"],
      correctAnswer: "is reading"
    },
    {
      id: 2,
      text: "We __________________ dinner at the moment.",
      options: ["are eating", "is eating", "am eating"],
      correctAnswer: "are eating"
    },
    {
      id: 3,
      text: "They __________________ soccer in the park.",
      options: ["is playing", "are playing", "am playing"],
      correctAnswer: "are playing"
    },
    {
      id: 4,
      text: "I __________________ to the teacher now.",
      options: ["is talking", "am talking", "are talking"],
      correctAnswer: "am talking"
    },
    {
      id: 5,
      text: "It __________________ outside, so take an umbrella.",
      options: ["are raining", "is raining", "am raining"],
      correctAnswer: "is raining"
    }
  ];

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);

  const handleOptionSelect = (questionId, option) => {
    if (showResults) return;
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: option
    }));
  };

  const checkAnswers = () => {
    if (Object.keys(selectedAnswers).length < questions.length) {
      alert('Por favor, responda todas as questões antes de verificar!');
      return;
    }
    
    let correct = 0;
    questions.forEach(question => {
      if (selectedAnswers[question.id] === question.correctAnswer) {
        correct++;
      }
    });
    
    setCorrectCount(correct);
    setShowResults(true);
  };

  const resetExercise = () => {
    setSelectedAnswers({});
    setShowResults(false);
    setCorrectCount(0);
  };

  const isCorrectAnswer = (questionId, option) => {
    if (!showResults) return null;
    const question = questions.find(q => q.id === questionId);
    return question.correctAnswer === option;
  };

  return (
    <div className={styles.container}>
      
      <div className={styles.mainContent}>
        <h1 className={styles.exerciseTitle}>Exercise:</h1>
        
        <div className={styles.exerciseSection}>
          <h2 className={styles.exerciseSubtitle}>1. Multiple-Choice Statements (Choose the correct form of the verb).</h2>
          
          <div className={styles.questionsContainer}>
            {questions.map((question) => (
              <div key={question.id} className={styles.questionBlock}>
                <div className={styles.questionText}>
                  <span className={styles.questionNumber}>{question.id}.</span>
                  <span>{question.text.split('__________________')[0]}</span>
                  <span className={styles.blankLine}></span>
                  <span>{question.text.split('__________________')[1]}</span>
                </div>
                <div className={styles.optionsContainer}>
                  {question.options.map((option, index) => (
                    <div key={index} className={styles.optionItem}>
                      <label className={`${styles.optionLabel} ${
                        showResults
                          ? isCorrectAnswer(question.id, option)
                            ? styles.correct
                            : selectedAnswers[question.id] === option
                            ? styles.incorrect
                            : ''
                          : ''
                      }`}>
                        <input
                          type="radio"
                          name={`question-${question.id}`}
                          value={option}
                          checked={selectedAnswers[question.id] === option}
                          onChange={() => handleOptionSelect(question.id, option)}
                          disabled={showResults}
                          className={styles.optionInput}
                        />
                        {String.fromCharCode(97 + index)}) {option}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className={styles.buttonsContainer}>
            {!showResults ? (
              <button
                className={styles.checkButton}
                onClick={checkAnswers}
                disabled={Object.keys(selectedAnswers).length < questions.length}
              >
                Check Answers
              </button>
            ) : (
              <div className={styles.resultsContainer}>
                <p className={styles.resultsText}>You got {correctCount} out of {questions.length} correct!</p>
                <button
                  className={styles.resetButton}
                  onClick={resetExercise}
                >
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

export default Pagina320;