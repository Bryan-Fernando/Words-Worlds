import React, { useState } from 'react';
import styles from './pagina319.module.css';

const Pagina319 = () => {
  const [answers, setAnswers] = useState({
    // Primeira seção - Forma Interrogativa Básica
    q1_1: '', q1_2: '',
    q2_1: '', q2_2: '',
    q3_1: '', q3_2: '',
    q4_1: '', q4_2: '',
    q5_1: '', q5_2: '',
    q6_1: '', q6_2: '',
    q7_1: '', q7_2: '',
    q8_1: '', q8_2: '',
    q9_1: '', q9_2: '',
    q10_1: '', q10_2: '',
    // Segunda seção - Forma Interrogativa com Palavras Interrogativas
    i1_1: '', i1_2: '',
    i2_1: '', i2_2: '',
    i3_1: '', i3_2: '',
    i4_1: '', i4_2: '',
    i5_1: '', i5_2: '',
    i6_1: '', i6_2: '',
    i7_1: '', i7_2: '',
    i8_1: '', i8_2: '',
    i9_1: '', i9_2: '',
    i10_1: '', i10_2: ''
  });
  const [showResults, setShowResults] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);

  const correctAnswers = {
    // Primeira seção - Forma Interrogativa Básica
    q1_1: 'Are', q1_2: 'watching',
    q2_1: 'Are', q2_2: 'playing',
    q3_1: 'Is', q3_2: 'studying',
    q4_1: 'Are', q4_2: 'cooking',
    q5_1: 'Is', q5_2: 'reading',
    q6_1: 'Are', q6_2: 'running',
    q7_1: 'Are', q7_2: 'traveling',
    q8_1: 'Am', q8_2: 'doing',
    q9_1: 'Are', q9_2: 'waiting',
    q10_1: 'Is', q10_2: 'raining',
    // Segunda seção - Forma Interrogativa com Palavras Interrogativas
    i1_1: 'are', i1_2: 'doing',
    i2_1: 'are', i2_2: 'going',
    i3_1: 'is', i3_2: 'crying',
    i4_1: 'is', i4_2: 'talking',
    i5_1: 'are', i5_2: 'eating',
    i6_1: 'are', i6_2: 'visiting',
    i7_1: 'are', i7_2: 'running',
    i8_1: 'are', i8_2: 'wearing',
    i9_1: 'are', i9_2: 'meeting',
    i10_1: 'is', i10_2: 'raining'
  };

  const handleInputChange = (questionId, value) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const isCorrect = (questionId) => {
    // Verifica se a resposta existe antes de chamar toLowerCase()
    return answers[questionId] && answers[questionId].toLowerCase().trim() === correctAnswers[questionId].toLowerCase();
  };

  const checkAnswers = () => {
    let correct = 0;
    Object.keys(correctAnswers).forEach(key => {
      if (isCorrect(key)) {
        correct++;
      }
    });
    setCorrectCount(correct);
    setShowResults(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        {/* Título */}
        <h1 className={styles.exercisesTitle}>Exercise:</h1>
        
        {/* Instrução */}
        <div className={styles.instructionBox}>
          <p className={styles.instructionText}>
            "Fill-in-the-blanks with the correct form of the verb in parentheses using the Present Continuous tense in the interrogative form."
          </p>
        </div>

        {/* Tabela Forma Interrogativa */}
        <div className={styles.tableSection}>
          <div className={styles.tableHeader}>
            <span className={styles.headerText}>Forma Interrogativa</span>
          </div>
          
          <div className={styles.tableContent}>
            <div className={styles.tableHeaderRow}>
              <span className={styles.tableHeaderCell}>Palavras Interrogativas</span>
              <span className={styles.tableHeaderCell}>Verbo Auxiliar</span>
              <span className={styles.tableHeaderCell}>Sujeito</span>
              <span className={styles.tableHeaderCell}>'Not' Advérbio</span>
              <span className={styles.tableHeaderCell}>Verbo(s)</span>
              <span className={styles.tableHeaderCell}>Objeto Complemento</span>
            </div>
            
            {/* Questões 1-10 */}
            <div className={styles.questionRow}>
              <span className={styles.questionNumber}>1.</span>
              <input 
                type="text" 
                className={`${styles.answerInput} ${showResults ? (isCorrect('q1_1') ? styles.correct : styles.incorrect) : ''}`}
                value={answers.q1_1}
                onChange={(e) => handleInputChange('q1_1', e.target.value)}
              />
              <span className={styles.questionText}>you</span>
              <input 
                type="text" 
                className={`${styles.answerInput} ${showResults ? (isCorrect('q1_2') ? styles.correct : styles.incorrect) : ''}`}
                value={answers.q1_2}
                onChange={(e) => handleInputChange('q1_2', e.target.value)}
              />
              <span className={styles.questionText}>(watch) a movie right now?</span>
              {showResults && (
                <div className={styles.feedback}>
                  {isCorrect('q1_1') && isCorrect('q1_2') ? (
                    <span className={styles.correctFeedback}>✓ Correto</span>
                  ) : (
                    <span className={styles.incorrectFeedback}>✗ Incorreto</span>
                  )}
                </div>
              )}
            </div>
            
            <div className={styles.questionRow}>
              <span className={styles.questionNumber}>2.</span>
              <input 
                type="text" 
                className={`${styles.answerInput} ${showResults ? (isCorrect('q2_1') ? styles.correct : styles.incorrect) : ''}`}
                value={answers.q2_1}
                onChange={(e) => handleInputChange('q2_1', e.target.value)}
              />
              <span className={styles.questionText}>they</span>
              <input 
                type="text" 
                className={`${styles.answerInput} ${showResults ? (isCorrect('q2_2') ? styles.correct : styles.incorrect) : ''}`}
                value={answers.q2_2}
                onChange={(e) => handleInputChange('q2_2', e.target.value)}
              />
              <span className={styles.questionText}>(play) football in the park?</span>
              {showResults && (
                <div className={styles.feedback}>
                  {isCorrect('q2_1') && isCorrect('q2_2') ? (
                    <span className={styles.correctFeedback}>✓ Correto</span>
                  ) : (
                    <span className={styles.incorrectFeedback}>✗ Incorreto</span>
                  )}
                </div>
              )}
            </div>
            
            <div className={styles.questionRow}>
              <span className={styles.questionNumber}>3.</span>
              <input 
                type="text" 
                className={`${styles.answerInput} ${showResults ? (isCorrect('q3_1') ? styles.correct : styles.incorrect) : ''}`}
                value={answers.q3_1}
                onChange={(e) => handleInputChange('q3_1', e.target.value)}
              />
              <span className={styles.questionText}>she</span>
              <input 
                type="text" 
                className={`${styles.answerInput} ${showResults ? (isCorrect('q3_2') ? styles.correct : styles.incorrect) : ''}`}
                value={answers.q3_2}
                onChange={(e) => handleInputChange('q3_2', e.target.value)}
              />
              <span className={styles.questionText}>(study) for her exam this week?</span>
              {showResults && (
                <div className={styles.feedback}>
                  {isCorrect('q3_1') && isCorrect('q3_2') ? (
                    <span className={styles.correctFeedback}>✓ Correto</span>
                  ) : (
                    <span className={styles.incorrectFeedback}>✗ Incorreto</span>
                  )}
                </div>
              )}
            </div>
            
            <div className={styles.questionRow}>
              <span className={styles.questionNumber}>4.</span>
              <input 
                type="text" 
                className={`${styles.answerInput} ${showResults ? (isCorrect('q4_1') ? styles.correct : styles.incorrect) : ''}`}
                value={answers.q4_1}
                onChange={(e) => handleInputChange('q4_1', e.target.value)}
              />
              <span className={styles.questionText}>we</span>
              <input 
                type="text" 
                className={`${styles.answerInput} ${showResults ? (isCorrect('q4_2') ? styles.correct : styles.incorrect) : ''}`}
                value={answers.q4_2}
                onChange={(e) => handleInputChange('q4_2', e.target.value)}
              />
              <span className={styles.questionText}>(cook) dinner together tonight?</span>
              {showResults && (
                <div className={styles.feedback}>
                  {isCorrect('q4_1') && isCorrect('q4_2') ? (
                    <span className={styles.correctFeedback}>✓ Correto</span>
                  ) : (
                    <span className={styles.incorrectFeedback}>✗ Incorreto</span>
                  )}
                </div>
              )}
            </div>
            
            <div className={styles.questionRow}>
              <span className={styles.questionNumber}>5.</span>
              <input 
                type="text" 
                className={`${styles.answerInput} ${showResults ? (isCorrect('q5_1') ? styles.correct : styles.incorrect) : ''}`}
                value={answers.q5_1}
                onChange={(e) => handleInputChange('q5_1', e.target.value)}
              />
              <span className={styles.questionText}>he</span>
              <input 
                type="text" 
                className={`${styles.answerInput} ${showResults ? (isCorrect('q5_2') ? styles.correct : styles.incorrect) : ''}`}
                value={answers.q5_2}
                onChange={(e) => handleInputChange('q5_2', e.target.value)}
              />
              <span className={styles.questionText}>(read) a book these days?</span>
              {showResults && (
                <div className={styles.feedback}>
                  {isCorrect('q5_1') && isCorrect('q5_2') ? (
                    <span className={styles.correctFeedback}>✓ Correto</span>
                  ) : (
                    <span className={styles.incorrectFeedback}>✗ Incorreto</span>
                  )}
                </div>
              )}
            </div>
            
            <div className={styles.questionRow}>
              <span className={styles.questionNumber}>6.</span>
              <input 
                type="text" 
                className={`${styles.answerInput} ${showResults ? (isCorrect('q6_1') ? styles.correct : styles.incorrect) : ''}`}
                value={answers.q6_1}
                onChange={(e) => handleInputChange('q6_1', e.target.value)}
              />
              <span className={styles.questionText}>the children</span>
              <input 
                type="text" 
                className={`${styles.answerInput} ${showResults ? (isCorrect('q6_2') ? styles.correct : styles.incorrect) : ''}`}
                value={answers.q6_2}
                onChange={(e) => handleInputChange('q6_2', e.target.value)}
              />
              <span className={styles.questionText}>(run) around the playground?</span>
              {showResults && (
                <div className={styles.feedback}>
                  {isCorrect('q6_1') && isCorrect('q6_2') ? (
                    <span className={styles.correctFeedback}>✓ Correto</span>
                  ) : (
                    <span className={styles.incorrectFeedback}>✗ Incorreto</span>
                  )}
                </div>
              )}
            </div>
            
            <div className={styles.questionRow}>
              <span className={styles.questionNumber}>7.</span>
              <input 
                type="text" 
                className={`${styles.answerInput} ${showResults ? (isCorrect('q7_1') ? styles.correct : styles.incorrect) : ''}`}
                value={answers.q7_1}
                onChange={(e) => handleInputChange('q7_1', e.target.value)}
              />
              <span className={styles.questionText}>your parents</span>
              <input 
                type="text" 
                className={`${styles.answerInput} ${showResults ? (isCorrect('q7_2') ? styles.correct : styles.incorrect) : ''}`}
                value={answers.q7_2}
                onChange={(e) => handleInputChange('q7_2', e.target.value)}
              />
              <span className={styles.questionText}>(travel) to Brazil next month?</span>
              {showResults && (
                <div className={styles.feedback}>
                  {isCorrect('q7_1') && isCorrect('q7_2') ? (
                    <span className={styles.correctFeedback}>✓ Correto</span>
                  ) : (
                    <span className={styles.incorrectFeedback}>✗ Incorreto</span>
                  )}
                </div>
              )}
            </div>
            
            <div className={styles.questionRow}>
              <span className={styles.questionNumber}>8.</span>
              <input 
                type="text" 
                className={`${styles.answerInput} ${showResults ? (isCorrect('q8_1') ? styles.correct : styles.incorrect) : ''}`}
                value={answers.q8_1}
                onChange={(e) => handleInputChange('q8_1', e.target.value)}
              />
              <span className={styles.questionText}>I</span>
              <input 
                type="text" 
                className={`${styles.answerInput} ${showResults ? (isCorrect('q8_2') ? styles.correct : styles.incorrect) : ''}`}
                value={answers.q8_2}
                onChange={(e) => handleInputChange('q8_2', e.target.value)}
              />
              <span className={styles.questionText}>(do) something wrong?</span>
              {showResults && (
                <div className={styles.feedback}>
                  {isCorrect('q8_1') && isCorrect('q8_2') ? (
                    <span className={styles.correctFeedback}>✓ Correto</span>
                  ) : (
                    <span className={styles.incorrectFeedback}>✗ Incorreto</span>
                  )}
                </div>
              )}
            </div>
            
            <div className={styles.questionRow}>
              <span className={styles.questionNumber}>9.</span>
              <input 
                type="text" 
                className={`${styles.answerInput} ${showResults ? (isCorrect('q9_1') ? styles.correct : styles.incorrect) : ''}`}
                value={answers.q9_1}
                onChange={(e) => handleInputChange('q9_1', e.target.value)}
              />
              <span className={styles.questionText}>you</span>
              <input 
                type="text" 
                className={`${styles.answerInput} ${showResults ? (isCorrect('q9_2') ? styles.correct : styles.incorrect) : ''}`}
                value={answers.q9_2}
                onChange={(e) => handleInputChange('q9_2', e.target.value)}
              />
              <span className={styles.questionText}>(wait) for someone?</span>
              {showResults && (
                <div className={styles.feedback}>
                  {isCorrect('q9_1') && isCorrect('q9_2') ? (
                    <span className={styles.correctFeedback}>✓ Correto</span>
                  ) : (
                    <span className={styles.incorrectFeedback}>✗ Incorreto</span>
                  )}
                </div>
              )}
            </div>
            
            <div className={styles.questionRow}>
              <span className={styles.questionNumber}>10.</span>
              <input 
                type="text" 
                className={`${styles.answerInput} ${showResults ? (isCorrect('q10_1') ? styles.correct : styles.incorrect) : ''}`}
                value={answers.q10_1}
                onChange={(e) => handleInputChange('q10_1', e.target.value)}
              />
              <span className={styles.questionText}>it</span>
              <input 
                type="text" 
                className={`${styles.answerInput} ${showResults ? (isCorrect('q10_2') ? styles.correct : styles.incorrect) : ''}`}
                value={answers.q10_2}
                onChange={(e) => handleInputChange('q10_2', e.target.value)}
              />
              <span className={styles.questionText}>(rain) outside right now?</span>
              {showResults && (
                <div className={styles.feedback}>
                  {isCorrect('q10_1') && isCorrect('q10_2') ? (
                    <span className={styles.correctFeedback}>✓ Correto</span>
                  ) : (
                    <span className={styles.incorrectFeedback}>✗ Incorreto</span>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Instrução para segunda seção */}
        <div className={styles.instructionBox}>
          <p className={styles.instructionText}>
            "Fill-in-the-blanks with the correct form of the verb in parentheses using the Present Continuous tense in the interrogative form."
          </p>
        </div>

        {/* Segunda seção - Forma Interrogativa com Palavras Interrogativas */}
        <div className={styles.tableSection}>
          <div className={styles.tableHeader}>
            <span className={styles.headerText}>Forma Interrogativa</span>
          </div>
          
          <div className={styles.tableContent}>
            <div className={styles.tableHeaderRow}>
              <span className={styles.tableHeaderCell}>Palavras Interrogativas</span>
              <span className={styles.tableHeaderCell}>Verbo Auxiliar</span>
              <span className={styles.tableHeaderCell}>Sujeito</span>
              <span className={styles.tableHeaderCell}>'Not' Advérbio</span>
              <span className={styles.tableHeaderCell}>Verbo(s)</span>
              <span className={styles.tableHeaderCell}>Objeto Complemento</span>
            </div>
            
            {/* Questões 1-10 com palavras interrogativas */}
            <div className={styles.questionRow}>
              <span className={styles.questionNumber}>1.</span>
              <span className={styles.questionText}>What</span>
              <input 
                type="text" 
                className={`${styles.answerInput} ${showResults ? (isCorrect('i1') ? styles.correct : styles.incorrect) : ''}`}
                value={answers.i1}
                onChange={(e) => handleInputChange('i1', e.target.value)}
              />
              <span className={styles.questionText}>(do) right now?</span>
              {showResults && (
                <div className={styles.feedback}>
                  {isCorrect('i1') ? (
                    <span className={styles.correctFeedback}>✓ Correto</span>
                  ) : (
                    <span className={styles.incorrectFeedback}>✗ Incorreto</span>
                  )}
                </div>
              )}
            </div>
            
            <div className={styles.questionRow}>
              <span className={styles.questionNumber}>2.</span>
              <span className={styles.questionText}>Where</span>
              <input 
                type="text" 
                className={`${styles.answerInput} ${showResults ? (isCorrect('i2') ? styles.correct : styles.incorrect) : ''}`}
                value={answers.i2}
                onChange={(e) => handleInputChange('i2', e.target.value)}
              />
              <span className={styles.questionText}>(go) this evening?</span>
              {showResults && (
                <div className={styles.feedback}>
                  {isCorrect('i2') ? (
                    <span className={styles.correctFeedback}>✓ Correto</span>
                  ) : (
                    <span className={styles.incorrectFeedback}>✗ Incorreto</span>
                  )}
                </div>
              )}
            </div>
            
            <div className={styles.questionRow}>
              <span className={styles.questionNumber}>3.</span>
              <span className={styles.questionText}>Why</span>
              <input 
                type="text" 
                className={`${styles.answerInput} ${showResults ? (isCorrect('i3') ? styles.correct : styles.incorrect) : ''}`}
                value={answers.i3}
                onChange={(e) => handleInputChange('i3', e.target.value)}
              />
              <span className={styles.questionText}>(cry) at the moment?</span>
              {showResults && (
                <div className={styles.feedback}>
                  {isCorrect('i3') ? (
                    <span className={styles.correctFeedback}>✓ Correto</span>
                  ) : (
                    <span className={styles.incorrectFeedback}>✗ Incorreto</span>
                  )}
                </div>
              )}
            </div>
            
            <div className={styles.questionRow}>
              <span className={styles.questionNumber}>4.</span>
              <span className={styles.questionText}>Who</span>
              <input 
                type="text" 
                className={`${styles.answerInput} ${showResults ? (isCorrect('i4') ? styles.correct : styles.incorrect) : ''}`}
                value={answers.i4}
                onChange={(e) => handleInputChange('i4', e.target.value)}
              />
              <span className={styles.questionText}>(talk) to on the phone?</span>
              {showResults && (
                <div className={styles.feedback}>
                  {isCorrect('i4') ? (
                    <span className={styles.correctFeedback}>✓ Correto</span>
                  ) : (
                    <span className={styles.incorrectFeedback}>✗ Incorreto</span>
                  )}
                </div>
              )}
            </div>
            
            <div className={styles.questionRow}>
              <span className={styles.questionNumber}>5.</span>
              <span className={styles.questionText}>What</span>
              <input 
                type="text" 
                className={`${styles.answerInput} ${showResults ? (isCorrect('i5') ? styles.correct : styles.incorrect) : ''}`}
                value={answers.i5}
                onChange={(e) => handleInputChange('i5', e.target.value)}
              />
              <span className={styles.questionText}>we</span>
              <input 
                type="text" 
                className={`${styles.answerInput} ${showResults ? (isCorrect('i5') ? styles.correct : styles.incorrect) : ''}`}
                value={answers.i5}
                onChange={(e) => handleInputChange('i5', e.target.value)}
              />
              <span className={styles.questionText}>(eat) for dinner tonight?</span>
              {showResults && (
                <div className={styles.feedback}>
                  {isCorrect('i5') ? (
                    <span className={styles.correctFeedback}>✓ Correto</span>
                  ) : (
                    <span className={styles.incorrectFeedback}>✗ Incorreto</span>
                  )}
                </div>
              )}
            </div>
            
            <div className={styles.questionRow}>
              <span className={styles.questionNumber}>6.</span>
              <span className={styles.questionText}>When</span>
              <input 
                type="text" 
                className={`${styles.answerInput} ${showResults ? (isCorrect('i6') ? styles.correct : styles.incorrect) : ''}`}
                value={answers.i6}
                onChange={(e) => handleInputChange('i6', e.target.value)}
              />
              <span className={styles.questionText}>you parents</span>
              <input 
                type="text" 
                className={`${styles.answerInput} ${showResults ? (isCorrect('i6') ? styles.correct : styles.incorrect) : ''}`}
                value={answers.i6}
                onChange={(e) => handleInputChange('i6', e.target.value)}
              />
              <span className={styles.questionText}>(visit) us?</span>
              {showResults && (
                <div className={styles.feedback}>
                  {isCorrect('i6') ? (
                    <span className={styles.correctFeedback}>✓ Correto</span>
                  ) : (
                    <span className={styles.incorrectFeedback}>✗ Incorreto</span>
                  )}
                </div>
              )}
            </div>
            
            <div className={styles.questionRow}>
              <span className={styles.questionNumber}>7.</span>
              <span className={styles.questionText}>Why</span>
              <input 
                type="text" 
                className={`${styles.answerInput} ${showResults ? (isCorrect('i7') ? styles.correct : styles.incorrect) : ''}`}
                value={answers.i7}
                onChange={(e) => handleInputChange('i7', e.target.value)}
              />
              <span className={styles.questionText}>the children</span>
              <input 
                type="text" 
                className={`${styles.answerInput} ${showResults ? (isCorrect('i7') ? styles.correct : styles.incorrect) : ''}`}
                value={answers.i7}
                onChange={(e) => handleInputChange('i7', e.target.value)}
              />
              <span className={styles.questionText}>(run) aound the house?</span>
              {showResults && (
                <div className={styles.feedback}>
                  {isCorrect('i7') ? (
                    <span className={styles.correctFeedback}>✓ Correto</span>
                  ) : (
                    <span className={styles.incorrectFeedback}>✗ Incorreto</span>
                  )}
                </div>
              )}
            </div>
            
            <div className={styles.questionRow}>
              <span className={styles.questionNumber}>8.</span>
              <span className={styles.questionText}>What</span>
              <input 
                type="text" 
                className={`${styles.answerInput} ${showResults ? (isCorrect('i8') ? styles.correct : styles.incorrect) : ''}`}
                value={answers.i8}
                onChange={(e) => handleInputChange('i8', e.target.value)}
              />
              <span className={styles.questionText}>you</span>
              <input 
                type="text" 
                className={`${styles.answerInput} ${showResults ? (isCorrect('i8') ? styles.correct : styles.incorrect) : ''}`}
                value={answers.i8}
                onChange={(e) => handleInputChange('i8', e.target.value)}
              />
              <span className={styles.questionText}>(wear) to the party?</span>
              {showResults && (
                <div className={styles.feedback}>
                  {isCorrect('i8') ? (
                    <span className={styles.correctFeedback}>✓ Correto</span>
                  ) : (
                    <span className={styles.incorrectFeedback}>✗ Incorreto</span>
                  )}
                </div>
              )}
            </div>
            
            <div className={styles.questionRow}>
              <span className={styles.questionNumber}>9.</span>
              <span className={styles.questionText}>Who</span>
              <input 
                type="text" 
                className={`${styles.answerInput} ${showResults ? (isCorrect('i9') ? styles.correct : styles.incorrect) : ''}`}
                value={answers.i9}
                onChange={(e) => handleInputChange('i9', e.target.value)}
              />
              <span className={styles.questionText}>they</span>
              <input 
                type="text" 
                className={`${styles.answerInput} ${showResults ? (isCorrect('i9') ? styles.correct : styles.incorrect) : ''}`}
                value={answers.i9}
                onChange={(e) => handleInputChange('i9', e.target.value)}
              />
              <span className={styles.questionText}>(meet) at the café?</span>
              {showResults && (
                <div className={styles.feedback}>
                  {isCorrect('i9') ? (
                    <span className={styles.correctFeedback}>✓ Correto</span>
                  ) : (
                    <span className={styles.incorrectFeedback}>✗ Incorreto</span>
                  )}
                </div>
              )}
            </div>
            
            <div className={styles.questionRow}>
              <span className={styles.questionNumber}>10.</span>
              <span className={styles.questionText}>Where</span>
              <input 
                type="text" 
                className={`${styles.answerInput} ${showResults ? (isCorrect('i10') ? styles.correct : styles.incorrect) : ''}`}
                value={answers.i10}
                onChange={(e) => handleInputChange('i10', e.target.value)}
              />
              <span className={styles.questionText}>it</span>
              <input 
                type="text" 
                className={`${styles.answerInput} ${showResults ? (isCorrect('i10') ? styles.correct : styles.incorrect) : ''}`}
                value={answers.i10}
                onChange={(e) => handleInputChange('i10', e.target.value)}
              />
              <span className={styles.questionText}>(rain) right now?</span>
              {showResults && (
                <div className={styles.feedback}>
                  {isCorrect('i10') ? (
                    <span className={styles.correctFeedback}>✓ Correto</span>
                  ) : (
                    <span className={styles.incorrectFeedback}>✗ Incorreto</span>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Botão para verificar respostas */}
        <div className={styles.checkButtonContainer}>
          <button className={styles.checkButton} onClick={checkAnswers}>
            Verificar Respostas
          </button>
          {showResults && (
            <div className={styles.resultsContainer}>
              <p className={styles.resultsText}>Você acertou {correctCount} de {Object.keys(correctAnswers).length} questões!</p>
            </div>
          )}
        </div>

        {/* Número da página */}
        <div className={styles.pageNumber}>
          139
        </div>
      </div>
    </div>
  );
};

export default Pagina319;
