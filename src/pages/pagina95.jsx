import React, { useState } from 'react';

import styles from './pagina95.module.css';

import correct_icon from '../assets/icons/correct_icon.webp';
import wrong_icon from '../assets/icons/wrong_icon.webp';
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import pg95_audio1e from '../assets/audios/pg95_audio1e.mp3';
import pg95_audio1p from '../assets/audios/pg95_audio1p.mp3';
import pg95_audio2 from '../assets/audios/pg95_audio2.mp3';
import pg95_audio3 from '../assets/audios/pg95_audio3.mp3';
import pg95_audio4 from '../assets/audios/pg95_audio4.mp3';
import pg95_audio5 from '../assets/audios/pg95_audio5.mp3';
import pg95_audio6 from '../assets/audios/pg95_audio6.mp3';
import pg95_audio7 from '../assets/audios/pg95_audio7.mp3';
import pg95_audio8 from '../assets/audios/pg95_audio8.mp3';
import pg95_audio9 from '../assets/audios/pg95_audio9.mp3';
import pg95_audio10 from '../assets/audios/pg95_audio10.mp3';
import pg95_audio11 from '../assets/audios/pg95_audio11.mp3';
import pg95_audio12 from '../assets/audios/pg95_audio12.mp3';
import pg95_audio13 from '../assets/audios/pg95_audio13.mp3';
import pg95_audio14 from '../assets/audios/pg95_audio14.mp3';
import pg95_audio15 from '../assets/audios/pg95_audio15.mp3';
import pg95_audio16 from '../assets/audios/pg95_audio16.mp3';
import pg95_audio2p from '../assets/audios/pg95_audio2p.mp3';
import pg95_audio3p from '../assets/audios/pg95_audio3p.mp3';
import pg95_audio4p from '../assets/audios/pg95_audio4p.mp3';
import pg95_audio5p from '../assets/audios/pg95_audio5p.mp3';
import pg95_audio6p from '../assets/audios/pg95_audio6p.mp3';
import pg95_audio7p from '../assets/audios/pg95_audio7p.mp3';
import pg95_audio8p from '../assets/audios/pg95_audio8p.mp3';
import pg95_audio9p from '../assets/audios/pg95_audio9p.mp3';
import pg95_audio10p from '../assets/audios/pg95_audio10p.mp3';
import pg95_audio11p from '../assets/audios/pg95_audio11p.mp3';
import pg95_audio12p from '../assets/audios/pg95_audio12p.mp3';
import pg95_audio13p from '../assets/audios/pg95_audio13p.mp3';
import pg95_audio14p from '../assets/audios/pg95_audio14p.mp3';
import pg95_audio15p from '../assets/audios/pg95_audio15p.mp3';
import pg95_audio16p from '../assets/audios/pg95_audio16p.mp3';

const pagina95 = () => {
    const [inputValues, setInputValues] = useState({
        questions1: Array(10).fill(''),
        questions2: Array(10).fill(''),
        questions3: Array(10).fill(''),
        shortAnswers1: Array(10).fill(''),
        shortAnswers2: Array(10).fill(''),
        shortAnswers3: Array(10).fill(''),
    });

    const [results, setResults] = useState({
        questions1: Array(10).fill(null),
        questions2: Array(10).fill(null),
        questions3: Array(10).fill(null),
        shortAnswers1: Array(10).fill(null),
        shortAnswers2: Array(10).fill(null),
        shortAnswers3: Array(10).fill(null),
    });


    const audioMap = {
        pg95_audio1e,
        pg95_audio1p,
        pg95_audio2,
        pg95_audio3,
        pg95_audio4,
        pg95_audio5,
        pg95_audio6,
        pg95_audio7,
        pg95_audio8,
        pg95_audio9,
        pg95_audio10,
        pg95_audio11,
        pg95_audio12,
        pg95_audio13,
        pg95_audio14,
        pg95_audio15,
        pg95_audio16,
        pg95_audio2p,
        pg95_audio3p,
        pg95_audio4p,
        pg95_audio5p,
        pg95_audio6p,
        pg95_audio7p,
        pg95_audio8p,
        pg95_audio9p,
        pg95_audio10p,
        pg95_audio11p,
        pg95_audio12p,
        pg95_audio13p,
        pg95_audio14p,
        pg95_audio15p,
        pg95_audio16p
    };


    const correctAnswers = {
        questions1: [
            ["Does", "like"],
            ["Do", "play"],
            ["Do", "work"],
            ["Do", "watch"],
            ["Do", "speak"]
        ],
        questions2: [
            ["Does", "read"],
            ["Do", "exercise"],
            ["Does", "drink"],
            ["Does", "arrive"],
            ["Do", "listen"]
        ],
        questions3: [
            ["Does", "drink"],
            ["Do", "like"],
            ["Does", "enjoy"],
            ["Do", "want"],
            ["Do", "love"]
        ],
        shortAnswers1: [
            ["Yes, she does.", "No, she doesn't."],
            ["Yes, they do.", "No, they don't."],
            ["Yes, he does.", "No, he doesn't."],
            ["Yes, they do.", "No, they don't."],
            ["Yes, I do.", "No, I don't."]
        ],
        shortAnswers2: [
            ["Yes, she does.", "No, she doesn't."],
            ["Yes, they do.", "No, they don't."],
            ["Yes, he does.", "No, he doesn't."],
            ["Yes, it does.", "No, it doesn't."],
            ["Yes, I do.", "No, I don't."]
        ],
        shortAnswers3: [
            ["Yes, she does.", "No, she doesn't."],
            ["Yes, they do.", "No, they don't."],
            ["Yes, he does.", "No, he doesn't."],
            ["Yes, they do.", "No, they don't."],
            ["Yes, I do.", "No, I don't."]
        ]
    };


    const handleInputChange = (value, index, questionGroup) => {
        setInputValues((prevState) => {
            const updatedValues = [...prevState[questionGroup]];
            updatedValues[index] = value;  // Atualiza o valor na posição correta
            return {
                ...prevState,
                [questionGroup]: updatedValues,
            };
        });
    };




    const playAudio = (audioKey) => {
        if (audioMap[audioKey]) {
            const audio = new Audio(audioMap[audioKey]);
            audio.play().catch((error) => console.error("Erro ao reproduzir o áudio:", error));
        } else {
            console.warn(`Áudio não encontrado para: ${audioKey}`);
        }
    };

    const handleCheckClick = () => {
        setResults((prevResults) => ({
            questions1: inputValues.questions1.map((input, idx) => {
                const answerIndex = Math.floor(idx / 2);
                const expectedAnswer = correctAnswers.questions1[answerIndex] || [];
                return input.trim().toLowerCase() === (expectedAnswer[idx % 2] || "").toLowerCase();
            }),

            questions2: inputValues.questions2.map((input, idx) => {
                const answerIndex = Math.floor(idx / 2);
                const expectedAnswer = correctAnswers.questions2[answerIndex] || [];
                return input.trim().toLowerCase() === (expectedAnswer[idx % 2] || "").toLowerCase();
            }),

            questions3: inputValues.questions3.map((input, idx) => {
                const answerIndex = Math.floor(idx / 2);
                const expectedAnswer = correctAnswers.questions3[answerIndex] || [];
                return input.trim().toLowerCase() === (expectedAnswer[idx % 2] || "").toLowerCase();
            }),

            shortAnswers1: inputValues.shortAnswers1.map((input, idx) => {
                // Acessando as respostas afirmativa e negativa diretamente
                const [affirmativeAnswer, negativeAnswer] = correctAnswers.shortAnswers1[Math.floor(idx / 2)] || [];
                return input.trim().toLowerCase() === affirmativeAnswer.toLowerCase() || input.trim().toLowerCase() === negativeAnswer.toLowerCase();
            }),

            shortAnswers2: inputValues.shortAnswers2.map((input, idx) => {
                const [affirmativeAnswer, negativeAnswer] = correctAnswers.shortAnswers2[Math.floor(idx / 2)] || [];
                return input.trim() === affirmativeAnswer || input.trim() === negativeAnswer;
            }),

            shortAnswers3: inputValues.shortAnswers3.map((input, idx) => {

                const [affirmativeAnswer, negativeAnswer] = correctAnswers.shortAnswers3[Math.floor(idx / 2)] || [];
                return input.trim() === affirmativeAnswer || input.trim() === negativeAnswer;
            }),
        }));
    };

    return (
        <div className={styles["page95__container"]}>
            <main className={styles["page95__main"]}>
                <div className={styles["page95__table--interrogativa--container"]}>
                    <div className={styles["page95__table--header--interrogativa"]}>INTERROGATIVA</div>
                    <table className={styles["page95__styled--table--interrogativa"]}>
                        <thead className={styles["page95__thead"]}>
                            <tr className={styles["page95__cell--table"]}>
                                <th>Palavras <br /> Interrogativas</th>
                                <th>Verbo <br /> Auxiliar</th>
                                <th>Sujeito</th>
                                <th><span style={{ color: '#A61C28' }}>Not</span> <br />Advérbio</th>
                                <th>Verbo(s)</th>
                                <th>Objeto <br /> Complemento</th>
                            </tr>
                        </thead>
                    </table>
                </div>

                {/* Questões 1 */}
                <div className={styles["page95__container--questoes"]}>
                    <div className={styles["page95__questions--1"]}>
                        <div className={styles["page95__question"]}>
                            <span>
                                <p style={{ color: '#A61C28', fontWeight: 'bold'}}> 2. Form questions using an auxiliary verb (do or does) in the present simple, followed by the main verb in its base form. Then, provide short answers using 'do / does' or 'don't / doesn't'.
                        
                                    <img
                                        src={eng_audio_icon}
                                        alt="English audio"
                                        className={styles["page95__header--icon"]}
                                        onClick={() => playAudio("pg95_audio1e")}
                                    />
                                    <br /> <br />
                                    <p style={{ color: 'black', fontWeight: 'bold'}}>Forme perguntas usando um verbo auxiliar (do ou does) no presente simples, seguido pelo verbo principal em sua forma base. Em seguida, forneça respostas curtas usando "do / does" ou "don't / doesn't". 
                                        <br />
       
                                    </p>
                                    
                                    <span style={{color: '#0A3282'}}>Exemplo de respostas curtas: Yes<span style={{color: 'red'}}>,</span> she does<span style={{color: 'red'}}>.</span> No<span style={{color: 'red'}}>,</span> she doesn't<span style={{color: 'red'}}>.</span></span> <br /> <br />

                                    <span style={{fontSize: '2rem', textAlign: 'left', fontWeight: 'bold', color: '#A61C28'}}>1.</span>
                                </p>
                                
                                <em className={styles["page95__question--text"]}><strong>a.</strong>
                                    <input
                                        type="text"
                                        value={inputValues.questions1[0]}
                                        onChange={(e) => handleInputChange(e.target.value, 0, 'questions1')}
                                        className={styles["page95__input--box--small"]}
                                    />
                                    she
                                    <input
                                        type="text"
                                        value={inputValues.questions1[1]}
                                        onChange={(e) => handleInputChange(e.target.value, 1, 'questions1')}
                                        className={styles["page95__input--box--small"]}
                                    />
                                    ice cream? (like)

                                    {/* Ícone Único para Validar Ambos os Inputs */}
                                    {results.questions1[0] !== null && results.questions1[1] !== null && (
                                        <img
                                            src={results.questions1[0] && results.questions1[1] ? correct_icon : wrong_icon}
                                            alt={results.questions1[0] && results.questions1[1] ? "Correct" : "Incorrect"}
                                            className={styles["page95__checkmark--image"]}
                                        />
                                    )}

                                    <img
                                        src={eng_audio_icon}
                                        alt="Audio Icon"
                                        className={styles["page95__additional--icon"]}
                                        onClick={() => playAudio("pg95_audio2")}
                                    />
                                    <img
                                        src={ptbr_audio_icon}
                                        alt="Audio Icon"
                                        className={styles["page95__additional--icon"]}
                                        onClick={() => playAudio("pg95_audio2p")}
                                    />
                                </em>
                            </span>
                        </div>

                        {/* Repete para as demais perguntas */}
                        {[1, 2, 3, 4].map((index) => (
                            <div key={index} className={styles["page95__question"]}>
                                <span className={styles["page95__question--text"]}>
                                    <em><strong>{String.fromCharCode(97 + index)}.</strong>
                                        <input
                                            type="text"
                                            value={inputValues.questions1[index * 2]}
                                            onChange={(e) => handleInputChange(e.target.value, index * 2, 'questions1')}
                                            className={styles["page95__input--box--small"]}
                                        />
                                        {index === 3 ? "the children" : index === 4 ? "you" : "they"}
                                        <input
                                            type="text"
                                            value={inputValues.questions1[index * 2 + 1]}
                                            onChange={(e) => handleInputChange(e.target.value, index * 2 + 1, 'questions1')}
                                            className={styles["page95__input--box--small"]}
                                        />
                                        {index === 0 ? "ice cream?" : index === 1 ? "basketball on Saturdays? (play)" : index === 2 ? "on Sundays? (work)" : index === 3 ? "TV in the evening? (watch)" : "Spanish? (speak)"}

                                        {/* Ícone Único de Verificação */}
                                        {results.questions1[index * 2] !== null && results.questions1[index * 2 + 1] !== null && (
                                            <img
                                                src={results.questions1[index * 2] && results.questions1[index * 2 + 1] ? correct_icon : wrong_icon}
                                                alt={results.questions1[index * 2] && results.questions1[index * 2 + 1] ? "Correct" : "Incorrect"}
                                                className={styles["page95__checkmark--image"]}
                                            />
                                        )}

                                        <img
                                            src={eng_audio_icon}
                                            alt="Audio Icon"
                                            className={styles["page95__additional--icon"]}
                                            onClick={() => playAudio(`pg95_audio${index + 2}`)}
                                        />
                                        <img
                                            src={ptbr_audio_icon}
                                            alt="Audio Icon"
                                            className={styles["page95__additional--icon"]}
                                            onClick={() => playAudio(`pg95_audio${index + 2}p`)}
                                        />
                                    </em>
                                </span>
                            </div>
                        ))}

                    </div>

                    {/* Short Answers (right side) */}
                    <div className={styles["page95__short-answers--header"]}>
                        <h2>Short Answers</h2>
                        <table className={styles["page95__styled--table--short-answers"]}>
                            <thead>
                                <tr>
                                    <th><p>Affirmative</p></th>
                                    <th><p>Negative</p></th>
                                </tr>
                            </thead>
                            <tbody>
                                {Array.from({ length: 5 }).map((_, index) => {
                                    // Acessando diretamente as respostas afirmativa e negativa
                                    const [affirmativeAnswer, negativeAnswer] = correctAnswers.shortAnswers1[index] || [];

                                    return (
                                        <tr key={index} >
                                            <td >
                                                <input
                                                    type="text"
                                                    value={inputValues.shortAnswers1[index * 2]} // Acessa a resposta afirmativa
                                                    onChange={(e) => handleInputChange(e.target.value, index * 2, 'shortAnswers1')}
                                                    className={styles["page95__input--box--column"]}
                                                />
                                                {results.shortAnswers1[index * 2] !== null && (
                                                    <img
                                                        src={results.shortAnswers1[index * 2] ? correct_icon : wrong_icon}
                                                        alt={results.shortAnswers1[index * 2] ? "Correct" : "Incorrect"}
                                                        className={styles["page95__checkmark--image"]}
                                                    />
                                                )}
                                            </td>
                                            <td>
                                                <input
                                                    type="text"
                                                    value={inputValues.shortAnswers1[index * 2 + 1]} // Acessa a resposta negativa
                                                    onChange={(e) => handleInputChange(e.target.value, index * 2 + 1, 'shortAnswers1')}
                                                    className={styles["page95__input--box--column"]}
                                                />
                                                {results.shortAnswers1[index * 2 + 1] !== null && (
                                                    <img
                                                        src={results.shortAnswers1[index * 2 + 1] ? correct_icon : wrong_icon}
                                                        alt={results.shortAnswers1[index * 2 + 1] ? "Correct" : "Incorrect"}
                                                        className={styles["page95__checkmark--image"]}
                                                    />
                                                )}
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Questões 2 */}
                
                <div className={styles["page95__container--questoes"]}>
                
                    <div className={styles["page95__questions--2"]}>
                    <span style={{fontSize: '2rem', textAlign: 'left', fontWeight: 'bold', color: '#A61C28'}}>2.</span>
                        {[
                            "she __ before going to bed? (read)",
                            "they __ every morning? (exercice)",
                            "he __ coffee in the morning? (drink)",
                            "the bus __ on time? (arrive)",
                            "you __ to music while working? (listen)",
                        ].map((question, index) => {
                            const audioKey = `pg95_audio${index + 7}`;
                            const audioKeyP = `pg95_audio${index + 7}p`;
                            const isCorrect =
                                results.questions2[index * 2] === true &&
                                results.questions2[index * 2 + 1] === true;

                            return (
                                <div key={index} className={styles["page95__question"]}>
                                    <span className={styles["page95__question--text"]}>
                                        <em>
                                            <strong>{String.fromCharCode(97 + index)}.</strong>
                                            <input
                                                type="text"
                                                value={inputValues.questions2[index * 2]}
                                                onChange={(e) =>
                                                    handleInputChange(e.target.value, index * 2, 'questions2')
                                                }
                                                className={styles["page95__input--box--small"]}
                                            />
                                            {question.split('__')[0]}
                                            <input
                                                type="text"
                                                value={inputValues.questions2[index * 2 + 1]}
                                                onChange={(e) =>
                                                    handleInputChange(e.target.value, index * 2 + 1, 'questions2')
                                                }
                                                className={styles["page95__input--box--small"]}
                                            />
                                            {question.split('__')[1]}
                                        </em>

                                        {/* Ícone de validação único para ambos os inputs */}
                                        {results.questions2[index * 2] !== null &&
                                            results.questions2[index * 2 + 1] !== null && (
                                                <img
                                                    src={isCorrect ? correct_icon : wrong_icon}
                                                    alt={isCorrect ? "Correct" : "Incorrect"}
                                                    className={styles["page95__checkmark--image"]}
                                                />
                                            )}

                                        {/* Ícone de áudio */}
                                        <img
                                            src={eng_audio_icon}
                                            alt="Audio Icon"
                                            className={styles["page95__additional--icon"]}
                                            onClick={() => playAudio(audioKey)}
                                        />
                                        <img
                                            src={ptbr_audio_icon}
                                            alt="Audio Icon"
                                            className={styles["page95__additional--icon"]}
                                            onClick={() => playAudio(audioKeyP)}
                                        />
                                    </span>
                                </div>
                            );
                        })}
                    </div>

                    {/* Short Answers (right side) */}
                    <div className={styles["page95__short-answers"]}>
                        <table className={styles["page95__styled--table--short-answers"]}>
                            <thead></thead>
                            <tbody>
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <tr key={index}>
                                        <td>
                                            <input
                                                type="text"
                                                value={inputValues.shortAnswers2[index * 2]}
                                                onChange={(e) => handleInputChange(e.target.value, index * 2, 'shortAnswers2')}
                                                className={styles["page95__input--box--column"]}
                                            />
                                            {results.shortAnswers2[index * 2] !== null && (
                                                <img
                                                    src={results.shortAnswers2[index * 2] ? correct_icon : wrong_icon}
                                                    alt={results.shortAnswers2[index * 2] ? "Correct" : "Incorrect"}
                                                    className={styles["page95__checkmark--image"]}
                                                />
                                            )}
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                value={inputValues.shortAnswers2[index * 2 + 1]}
                                                onChange={(e) => handleInputChange(e.target.value, index * 2 + 1, 'shortAnswers2')}
                                                className={styles["page95__input--box--column"]}
                                            />
                                            {results.shortAnswers2[index * 2 + 1] !== null && (
                                                <img
                                                    src={results.shortAnswers2[index * 2 + 1] ? correct_icon : wrong_icon}
                                                    alt={results.shortAnswers2[index * 2 + 1] ? "Correct" : "Incorrect"}
                                                    className={styles["page95__checkmark--image"]}
                                                />
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Questões 3 */}
                <div className={styles["page95__container--questoes"]}>
                    <div className={styles["page95__questions--3"]}>
                    <span style={{fontSize: '2rem', textAlign: 'left', fontWeight: 'bold', color: '#A61C28'}}>3.</span>
                        {[
                            "she __ tea? (drink)",
                            "they __ to watch movies on weekends? (like)",
                            "he __ playing video games? (enjoy)",
                            "the children __ pizza for dinner? (want)",
                            "you __ going to the beach? (love)",
                        ].map((question, index) => {
                            const audioKey = `pg95_audio${index + 12}`;
                            const audioKeyP = `pg95_audio${index + 12}p`;
                            const isCorrect =
                                results.questions3[index * 2] === true &&
                                results.questions3[index * 2 + 1] === true;

                            return (
                                <div key={index} className={styles["page95__question"]}>
                                    <span className={styles["page95__question--text"]}>
                                        <em>
                                            <strong>{String.fromCharCode(97 + index)}.</strong>
                                            <input
                                                type="text"
                                                value={inputValues.questions3[index * 2]}
                                                onChange={(e) =>
                                                    handleInputChange(e.target.value, index * 2, 'questions3')
                                                }
                                                className={styles["page95__input--box--small"]}
                                            />
                                            {question.split('__')[0]}
                                            <input
                                                type="text"
                                                value={inputValues.questions3[index * 2 + 1]}
                                                onChange={(e) =>
                                                    handleInputChange(e.target.value, index * 2 + 1, 'questions3')
                                                }
                                                className={styles["page95__input--box--small"]}
                                            />
                                            {question.split('__')[1]}
                                        </em>

                                        {/* Ícone de validação único para ambos os inputs */}
                                        {results.questions3[index * 2] !== null &&
                                            results.questions3[index * 2 + 1] !== null && (
                                                <img
                                                    src={isCorrect ? correct_icon : wrong_icon}
                                                    alt={isCorrect ? "Correct" : "Incorrect"}
                                                    className={styles["page95__checkmark--image"]}
                                                />
                                            )}

                                        {/* Ícone de áudio */}
                                        <img
                                            src={eng_audio_icon}
                                            alt="Audio Icon"
                                            className={styles["page95__additional--icon"]}
                                            onClick={() => playAudio(audioKey)}
                                        />
                                        <img
                                            src={ptbr_audio_icon}
                                            alt="Audio Icon"
                                            className={styles["page95__additional--icon"]}
                                            onClick={() => playAudio(audioKeyP)}
                                        />
                                    </span>
                                </div>
                            );
                        })}
                    </div>

                    {/* Short Answers (right side) */}
                    <div className={styles["page95__short-answers"]}>
                        <table className={styles["page95__styled--table--short-answers"]}>
                            <thead></thead>
                            <tbody>
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <tr key={index}>
                                        <td>
                                            <input
                                                type="text"
                                                value={inputValues.shortAnswers3[index * 2]}
                                                onChange={(e) => handleInputChange(e.target.value, index * 2, 'shortAnswers3')}
                                                className={styles["page95__input--box--column"]}
                                            />
                                            {results.shortAnswers3[index * 2] !== null && (
                                                <img
                                                    src={results.shortAnswers3[index * 2] ? correct_icon : wrong_icon}
                                                    alt={results.shortAnswers3[index * 2] ? "Correct" : "Incorrect"}
                                                    className={styles["page95__checkmark--image"]}
                                                />
                                            )}
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                value={inputValues.shortAnswers3[index * 2 + 1]}
                                                onChange={(e) => handleInputChange(e.target.value, index * 2 + 1, 'shortAnswers3')}
                                                className={styles["page95__input--box--column"]}
                                            />
                                            {results.shortAnswers3[index * 2 + 1] !== null && (
                                                <img
                                                    src={results.shortAnswers3[index * 2 + 1] ? correct_icon : wrong_icon}
                                                    alt={results.shortAnswers3[index * 2 + 1] ? "Correct" : "Incorrect"}
                                                    className={styles["page95__checkmark--image"]}
                                                />
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
            <button className={styles["page95__button--check"]} onClick={handleCheckClick}>
                <em>Check</em>
            </button>
        </div>
    );
};

export default pagina95;