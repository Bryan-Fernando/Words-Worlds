import React, { useState } from 'react';
import styles from './pagina318.module.css';

const Pagina318 = () => {
  const [answers, setAnswers] = useState({
    // Forma Afirmativa
    q1: '',
    q2: '',
    q3: '',
    q4: '',
    q5: '',
    q6: '',
    q7: '',
    q8: '',
    q9: '',
    q10: '',
    // Forma Negativa
    n1: '',
    n2: '',
    n3: '',
    n4: '',
    n5: '',
    n6: '',
    n7: '',
    n8: '',
    n9: '',
    n10: ''
  });
  const [showResults, setShowResults] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);

  const correctAnswers = {
    q1: 'am watching',
    q2: 'are playing',
    q3: 'is studying',
    q4: 'are cooking',
    q5: 'is reading',
    q6: 'are running',
    q7: 'are traveling',
    q8: 'am not sleeping',
    q9: 'are waiting',
    q10: 'is raining',
    n1: 'am not watching',
    n2: 'are not playing',
    n3: 'is not cooking',
    n4: 'are not visiting',
    n5: 'is not studying',
    n6: 'is not running',
    n7: 'am not working',
    n8: 'are not wearing',
    n9: 'are not sleeping',
    n10: 'is not snowing'
  };

  const handleInputChange = (questionId, value) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const isCorrect = (questionId) => {
    return answers[questionId].toLowerCase().trim() === correctAnswers[questionId].toLowerCase();
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
        <h1 className={styles.exercisesTitle}>Exercises:</h1>
        
        {/* Instrução */}
        <div className={styles.instructionBox}>
          <p className={styles.instructionText}>
            "Fill-in-the-blanks with the correct form of the verb in parenthesis using the Present Continuous tense in the affirmative form."
          </p>
        </div>

        {/* Tabela Forma Afirmativa */}
        <div className={styles.tableSection}>
          <div className={styles.tableHeader}>
            <span className={styles.headerText}>Forma Afirmativa</span>
          </div>
          
          <div className={styles.tableContent}>
            <div className={styles.tableHeaderRow}>
              <span className={styles.tableHeaderCell}>Subject</span>
              <span className={styles.tableHeaderCell}>Aux. Verb</span>
              <span className={styles.tableHeaderCell}>Adv</span>
              <span className={styles.tableHeaderCell}>Verb (s)</span>
              <span className={styles.tableHeaderCell}>Object Complement</span>
            </div>
            
            {/* Questões 1-10 */}
            <div className={styles.questionRow}>
              <span className={styles.questionNumber}>1.</span>
              <span className={styles.questionText}>I</span>
              <input 
                type="text" 
                className={`${styles.answerInput} ${showResults ? (isCorrect('q1') ? styles.correct : styles.incorrect) : ''}`}
                value={answers.q1}
                onChange={(e) => handleInputChange('q1', e.target.value)}
              />
              <span className={styles.questionText}>(watch) a movie right now.</span>
              {showResults && (
                <div className={styles.feedback}>
                  {isCorrect('q1') ? (
                    <span className={styles.correctFeedback}>✓ Correto</span>
                  ) : (
                    <span className={styles.incorrectFeedback}>✗ Incorreto</span>
                  )}
                </div>
              )}
            </div>
            
            <div className={styles.questionRow}>
              <span className={styles.questionNumber}>2.</span>
              <span className={styles.questionText}>They</span>
              <input 
                type="text" 
                className={`${styles.answerInput} ${showResults ? (isCorrect('q2') ? styles.correct : styles.incorrect) : ''}`}
                value={answers.q2}
                onChange={(e) => handleInputChange('q2', e.target.value)}
              />
              <span className={styles.questionText}>(play) soccer in the park at the moment.</span>
              {showResults && (
                <div className={styles.feedback}>
                  {isCorrect('q2') ? (
                    <span className={styles.correctFeedback}>✓ Correto</span>
                  ) : (
                    <span className={styles.incorrectFeedback}>✗ Incorreto</span>
                  )}
                </div>
              )}
            </div>
            
            <div className={styles.questionRow}>
              <span className={styles.questionNumber}>3.</span>
              <span className={styles.questionText}>She</span>
              <input 
                type="text" 
                className={`${styles.answerInput} ${showResults ? (isCorrect('q3') ? styles.correct : styles.incorrect) : ''}`}
                value={answers.q3}
                onChange={(e) => handleInputChange('q3', e.target.value)}
              />
              <span className={styles.questionText}>(study) for her exam this evening.</span>
              {showResults && (
                <div className={styles.feedback}>
                  {isCorrect('q3') ? (
                    <span className={styles.correctFeedback}>✓ Correto</span>
                  ) : (
                    <span className={styles.incorrectFeedback}>✗ Incorreto</span>
                  )}
                </div>
              )}
            </div>
            
            <div className={styles.questionRow}>
              <span className={styles.questionNumber}>4.</span>
              <span className={styles.questionText}>We</span>
              <input 
                type="text" 
                className={`${styles.answerInput} ${showResults ? (isCorrect('q4') ? styles.correct : styles.incorrect) : ''}`}
                value={answers.q4}
                onChange={(e) => handleInputChange('q4', e.target.value)}
              />
              <span className={styles.questionText}>(cook) dinner in the kitchen.</span>
              {showResults && (
                <div className={styles.feedback}>
                  {isCorrect('q4') ? (
                    <span className={styles.correctFeedback}>✓ Correto</span>
                  ) : (
                    <span className={styles.incorrectFeedback}>✗ Incorreto</span>
                  )}
                </div>
              )}
            </div>
            
            <div className={styles.questionRow}>
              <span className={styles.questionNumber}>5.</span>
              <span className={styles.questionText}>He</span>
              <input 
                type="text" 
                className={`${styles.answerInput} ${showResults ? (isCorrect('q5') ? styles.correct : styles.incorrect) : ''}`}
                value={answers.q5}
                onChange={(e) => handleInputChange('q5', e.target.value)}
              />
              <span className={styles.questionText}>(read) a new book these days.</span>
              {showResults && (
                <div className={styles.feedback}>
                  {isCorrect('q5') ? (
                    <span className={styles.correctFeedback}>✓ Correto</span>
                  ) : (
                    <span className={styles.incorrectFeedback}>✗ Incorreto</span>
                  )}
                </div>
              )}
            </div>
            
            <div className={styles.questionRow}>
              <span className={styles.questionNumber}>6.</span>
              <span className={styles.questionText}>The children</span>
              <input 
                type="text" 
                className={`${styles.answerInput} ${showResults ? (isCorrect('q6') ? styles.correct : styles.incorrect) : ''}`}
                value={answers.q6}
                onChange={(e) => handleInputChange('q6', e.target.value)}
              />
              <span className={styles.questionText}>(run) around the playground.</span>
              {showResults && (
                <div className={styles.feedback}>
                  {isCorrect('q6') ? (
                    <span className={styles.correctFeedback}>✓ Correto</span>
                  ) : (
                    <span className={styles.incorrectFeedback}>✗ Incorreto</span>
                  )}
                </div>
              )}
            </div>
            
            <div className={styles.questionRow}>
              <span className={styles.questionNumber}>7.</span>
              <span className={styles.questionText}>My parents</span>
              <input 
                type="text" 
                className={`${styles.answerInput} ${showResults ? (isCorrect('q7') ? styles.correct : styles.incorrect) : ''}`}
                value={answers.q7}
                onChange={(e) => handleInputChange('q7', e.target.value)}
              />
              <span className={styles.questionText}>(travel) to Brazil next week.</span>
              {showResults && (
                <div className={styles.feedback}>
                  {isCorrect('q7') ? (
                    <span className={styles.correctFeedback}>✓ Correto</span>
                  ) : (
                    <span className={styles.incorrectFeedback}>✗ Incorreto</span>
                  )}
                </div>
              )}
            </div>
            
            <div className={styles.questionRow}>
              <span className={styles.questionNumber}>8.</span>
              <span className={styles.questionText}>I</span>
              <input 
                type="text" 
                className={`${styles.answerInput} ${showResults ? (isCorrect('q8') ? styles.correct : styles.incorrect) : ''}`}
                value={answers.q8}
                onChange={(e) => handleInputChange('q8', e.target.value)}
              />
              <span className={styles.questionText}>(sleep) because I am too excited.</span>
              {showResults && (
                <div className={styles.feedback}>
                  {isCorrect('q8') ? (
                    <span className={styles.correctFeedback}>✓ Correto</span>
                  ) : (
                    <span className={styles.incorrectFeedback}>✗ Incorreto</span>
                  )}
                </div>
              )}
            </div>
            
            <div className={styles.questionRow}>
              <span className={styles.questionNumber}>9.</span>
              <span className={styles.questionText}>You</span>
              <input 
                type="text" 
                className={`${styles.answerInput} ${showResults ? (isCorrect('q9') ? styles.correct : styles.incorrect) : ''}`}
                value={answers.q9}
                onChange={(e) => handleInputChange('q9', e.target.value)}
              />
              <span className={styles.questionText}>(wait) for the bus, aren't you.</span>
              {showResults && (
                <div className={styles.feedback}>
                  {isCorrect('q9') ? (
                    <span className={styles.correctFeedback}>✓ Correto</span>
                  ) : (
                    <span className={styles.incorrectFeedback}>✗ Incorreto</span>
                  )}
                </div>
              )}
            </div>
            
            <div className={styles.questionRow}>
              <span className={styles.questionNumber}>10.</span>
              <span className={styles.questionText}>It</span>
              <input 
                type="text" 
                className={`${styles.answerInput} ${showResults ? (isCorrect('q10') ? styles.correct : styles.incorrect) : ''}`}
                value={answers.q10}
                onChange={(e) => handleInputChange('q10', e.target.value)}
              />
              <span className={styles.questionText}>(rain) outside, so don't forget your umbrella.</span>
              {showResults && (
                <div className={styles.feedback}>
                  {isCorrect('q10') ? (
                    <span className={styles.correctFeedback}>✓ Correto</span>
                  ) : (
                    <span className={styles.incorrectFeedback}>✗ Incorreto</span>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Instrução para forma negativa */}
        <div className={styles.instructionBox}>
          <p className={styles.instructionText}>
            "Fill-in-the-blanks with the correct form of the verb in parenthesis using the Present Continuous tense in the negative form."
          </p>
        </div>

        {/* Questões forma negativa */}
        <div className={styles.negativeSection}>
          <div className={styles.questionRow}>
            <span className={styles.questionNumber}>1.</span>
            <span className={styles.questionText}>I</span>
            <input 
              type="text" 
              className={`${styles.answerInput} ${showResults ? (isCorrect('n1') ? styles.correct : styles.incorrect) : ''}`}
              value={answers.n1}
              onChange={(e) => handleInputChange('n1', e.target.value)}
            />
            <span className={styles.questionText}>(not/watch) TV right now.</span>
            {showResults && (
              <div className={styles.feedback}>
                {isCorrect('n1') ? (
                  <span className={styles.correctFeedback}>✓ Correto</span>
                ) : (
                  <span className={styles.incorrectFeedback}>✗ Incorreto</span>
                )}
              </div>
            )}
          </div>
          
          <div className={styles.questionRow}>
            <span className={styles.questionNumber}>2.</span>
            <span className={styles.questionText}>They</span>
            <input 
              type="text" 
              className={`${styles.answerInput} ${showResults ? (isCorrect('n2') ? styles.correct : styles.incorrect) : ''}`}
              value={answers.n2}
              onChange={(e) => handleInputChange('n2', e.target.value)}
            />
            <span className={styles.questionText}>(not/play) tennis at the moment.</span>
            {showResults && (
              <div className={styles.feedback}>
                {isCorrect('n2') ? (
                  <span className={styles.correctFeedback}>✓ Correto</span>
                ) : (
                  <span className={styles.incorrectFeedback}>✗ Incorreto</span>
                )}
              </div>
            )}
          </div>
          
          <div className={styles.questionRow}>
            <span className={styles.questionNumber}>3.</span>
            <span className={styles.questionText}>She</span>
            <input 
              type="text" 
              className={`${styles.answerInput} ${showResults ? (isCorrect('n3') ? styles.correct : styles.incorrect) : ''}`}
              value={answers.n3}
              onChange={(e) => handleInputChange('n3', e.target.value)}
            />
            <span className={styles.questionText}>(not/cook) dinner tonight.</span>
            {showResults && (
              <div className={styles.feedback}>
                {isCorrect('n3') ? (
                  <span className={styles.correctFeedback}>✓ Correto</span>
                ) : (
                  <span className={styles.incorrectFeedback}>✗ Incorreto</span>
                )}
              </div>
            )}
          </div>
          
          <div className={styles.questionRow}>
            <span className={styles.questionNumber}>4.</span>
            <span className={styles.questionText}>We</span>
            <input 
              type="text" 
              className={`${styles.answerInput} ${showResults ? (isCorrect('n4') ? styles.correct : styles.incorrect) : ''}`}
              value={answers.n4}
              onChange={(e) => handleInputChange('n4', e.target.value)}
            />
            <span className={styles.questionText}>(not/visit) the museum this weekend.</span>
            {showResults && (
              <div className={styles.feedback}>
                {isCorrect('n4') ? (
                  <span className={styles.correctFeedback}>✓ Correto</span>
                ) : (
                  <span className={styles.incorrectFeedback}>✗ Incorreto</span>
                )}
              </div>
            )}
          </div>
          
          <div className={styles.questionRow}>
            <span className={styles.questionNumber}>5.</span>
            <span className={styles.questionText}>He</span>
            <input 
              type="text" 
              className={`${styles.answerInput} ${showResults ? (isCorrect('n5') ? styles.correct : styles.incorrect) : ''}`}
              value={answers.n5}
              onChange={(e) => handleInputChange('n5', e.target.value)}
            />
            <span className={styles.questionText}>(not/study) for his test today.</span>
            {showResults && (
              <div className={styles.feedback}>
                {isCorrect('n5') ? (
                  <span className={styles.correctFeedback}>✓ Correto</span>
                ) : (
                  <span className={styles.incorrectFeedback}>✗ Incorreto</span>
                )}
              </div>
            )}
          </div>
          
          <div className={styles.questionRow}>
            <span className={styles.questionNumber}>6.</span>
            <span className={styles.questionText}>The dog</span>
            <input 
              type="text" 
              className={`${styles.answerInput} ${showResults ? (isCorrect('n6') ? styles.correct : styles.incorrect) : ''}`}
              value={answers.n6}
              onChange={(e) => handleInputChange('n6', e.target.value)}
            />
            <span className={styles.questionText}>(not/run) in the yard.</span>
            {showResults && (
              <div className={styles.feedback}>
                {isCorrect('n6') ? (
                  <span className={styles.correctFeedback}>✓ Correto</span>
                ) : (
                  <span className={styles.incorrectFeedback}>✗ Incorreto</span>
                )}
              </div>
            )}
          </div>
          
          <div className={styles.questionRow}>
            <span className={styles.questionNumber}>7.</span>
            <span className={styles.questionText}>I</span>
            <input 
              type="text" 
              className={`${styles.answerInput} ${showResults ? (isCorrect('n7') ? styles.correct : styles.incorrect) : ''}`}
              value={answers.n7}
              onChange={(e) => handleInputChange('n7', e.target.value)}
            />
            <span className={styles.questionText}>(not/work) on the project today.</span>
            {showResults && (
              <div className={styles.feedback}>
                {isCorrect('n7') ? (
                  <span className={styles.correctFeedback}>✓ Correto</span>
                ) : (
                  <span className={styles.incorrectFeedback}>✗ Incorreto</span>
                )}
              </div>
            )}
          </div>
          
          <div className={styles.questionRow}>
            <span className={styles.questionNumber}>8.</span>
            <span className={styles.questionText}>You</span>
            <input 
              type="text" 
              className={`${styles.answerInput} ${showResults ? (isCorrect('n8') ? styles.correct : styles.incorrect) : ''}`}
              value={answers.n8}
              onChange={(e) => handleInputChange('n8', e.target.value)}
            />
            <span className={styles.questionText}>(not/wear) a jacket, are you ?</span>
            {showResults && (
              <div className={styles.feedback}>
                {isCorrect('n8') ? (
                  <span className={styles.correctFeedback}>✓ Correto</span>
                ) : (
                  <span className={styles.incorrectFeedback}>✗ Incorreto</span>
                )}
              </div>
            )}
          </div>
          
          <div className={styles.questionRow}>
            <span className={styles.questionNumber}>9.</span>
            <span className={styles.questionText}>The kids</span>
            <input 
              type="text" 
              className={`${styles.answerInput} ${showResults ? (isCorrect('n9') ? styles.correct : styles.incorrect) : ''}`}
              value={answers.n9}
              onChange={(e) => handleInputChange('n9', e.target.value)}
            />
            <span className={styles.questionText}>(not/sleep) in their room.</span>
            {showResults && (
              <div className={styles.feedback}>
                {isCorrect('n9') ? (
                  <span className={styles.correctFeedback}>✓ Correto</span>
                ) : (
                  <span className={styles.incorrectFeedback}>✗ Incorreto</span>
                )}
              </div>
            )}
          </div>
          
          <div className={styles.questionRow}>
            <span className={styles.questionNumber}>10.</span>
            <span className={styles.questionText}>It</span>
            <input 
              type="text" 
              className={`${styles.answerInput} ${showResults ? (isCorrect('n10') ? styles.correct : styles.incorrect) : ''}`}
              value={answers.n10}
              onChange={(e) => handleInputChange('n10', e.target.value)}
            />
            <span className={styles.questionText}>(not/snow) outside, right now.</span>
            {showResults && (
              <div className={styles.feedback}>
                {isCorrect('n10') ? (
                  <span className={styles.correctFeedback}>✓ Correto</span>
                ) : (
                  <span className={styles.incorrectFeedback}>✗ Incorreto</span>
                )}
              </div>
            )}
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
          138
        </div>
      </div>
    </div>
  );
};

export default Pagina318;
