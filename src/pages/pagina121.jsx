import React, { useState } from 'react';

import styles from './pagina121.module.css';

import correct_icon from '../assets/icons/correct_icon.webp';
import wrong_icon from '../assets/icons/wrong_icon.webp';
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import global_learning_le_e from '../assets/audios/global_learning_le_e.mp3';
import global_learning_le_p from '../assets/audios/global_learning_le_p.mp3';
import pg121_audio1e from '../assets/audios/pg94_audio1e.mp3';
import pg121_audio1p from '../assets/audios/pg94_audio1p.mp3';
import pg121_audio2 from '../assets/audios/pg94_audio2.mp3';
import pg121_audio3 from '../assets/audios/pg94_audio3.mp3';
import pg121_audio4 from '../assets/audios/pg94_audio4.mp3';
import pg121_audio5 from '../assets/audios/pg94_audio5.mp3';
import pg121_audio6 from '../assets/audios/pg94_audio6.mp3';
import pg121_audio7 from '../assets/audios/pg94_audio7.mp3';
import pg121_audio8 from '../assets/audios/pg94_audio8.mp3';
import pg121_audio9 from '../assets/audios/pg94_audio9.mp3';
import pg121_audio10 from '../assets/audios/pg94_audio10.mp3';
import pg121_audio11 from '../assets/audios/pg94_audio11.mp3';

const Pagina121 = () => {
    const [inputValues, setInputValues] = useState(Array(6).fill(''));
    const [results, setResults] = useState(Array(6).fill(null));

    const correctAnswers = [
        'She is cooking dinner in the kitchen.',
        'We are waiting for the bus.',
        'He is sleeping because he is tired.',
        'They are travelling for their honeymoon.',
        'The students are studying for the final exam.'
    ];

    const audioMap = {
        global_learning_le_e,
        global_learning_le_p,
        pg121_audio1e,
        pg121_audio1p,
        pg121_audio2,
        pg121_audio3,
        pg121_audio4,
        pg121_audio5,
        pg121_audio6,
        pg121_audio7,
        pg121_audio8,
        pg121_audio9,
        pg121_audio10,
        pg121_audio11
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
        const newResults = inputValues.map((value, index) => {
            if (!correctAnswers[index]) return false;

            const isCorrect = value.trim().toLowerCase() === correctAnswers[index].toLowerCase();

            return isCorrect;
        });
        setResults(newResults);
    };


    const handleInputChange = (value, index) => {
        const newValues = [...inputValues];
        newValues[index] = value;
        setInputValues(newValues);
    };

    return (
        <div className={styles["page120__container"]}>
            <header className={styles["page121__header"]}>
                <h1 className={styles["page121__title"]}>
                    Learning Language Exercises
                    <img
                        src={eng_audio_icon}
                        alt="English audio"
                        className={styles["page121__header-icon"]}
                        onClick={() => playAudio("global_learning_le_e")}
                    />
                    <img
                        src={ptbr_audio_icon}
                        alt="Portuguese audio"
                        className={styles["page121__header-icon"]}
                        onClick={() => playAudio("global_learning_le_p")}
                    />
                </h1>
            </header>
            <main className={styles["page121__main"]}>
                <div className={styles["page121__content-flex"]}>
                    <div className={styles["page121__questions-container"]}>
                        <h2 className={styles["page121__questions-title"]}>
                        <span className={styles["page121__text-red"]}>2. Match the Sentence Halves</span>
                        <br /> Match the first part of the sentence (Column A) with the correct ending (Column B).  
                            <img
                                src={eng_audio_icon}
                                alt="English audio"
                                className={styles["page121__header-icon"]}
                                onClick={() => playAudio("pg121_audio1e")}
                            />
                            <img
                                src={ptbr_audio_icon}
                                alt="Portuguese audio"
                                className={styles["page121__header-icon"]}
                                onClick={() => playAudio("pg121_audio1p")}
                            />
                        </h2>

                        <div className={styles["page121_container-coluns"]}>
                            <div className={styles["page121_container-colunsa"]}>
                                <p>1. She is cooking</p>
                                <p>2. We are waiting</p>
                                <p>3. He is sleeping</p>
                                <p>4. They are travelling</p>
                                <p>5. The students are studying</p>
                            </div>
                            <div className={styles["page121_container-colunsb"]}>
                                <p>a) because he is tired.</p>
                                <p>b) for the bus.</p>
                                <p>c) dinner in the kitchen.</p>
                                <p>d) for the ﬁnal exam.</p>
                                <p>e) for their honeymoon.</p>
                            </div>
                        </div>
                        
                        {[
                            "She is cooking",
                            "We are waiting",
                            "He is sleeping",
                            "They are travelling?",
                            "The students are studying"
                        ].map((question, index) => {
                            const answerAudio = `pg121_audio${index + 2}`;
                            const inputAudio = `pg121_audio${index + 7}`;

                            return (
                                <div key={index} className={styles["page121__question"]}>
                                    <div className={styles["page121__input-container"]}>
                                        <input
                                            type="text"
                                            value={inputValues[index]}
                                            onChange={(e) => handleInputChange(e.target.value, index)}
                                            className={styles["page121__input-box"]}
                                        />
                                        <img
                                            src={eng_audio_icon}
                                            alt="Audio Icon"
                                            className={styles["page121__additional-icon"]}
                                            onClick={() => playAudio(inputAudio)}
                                        />
                                        {results[index] !== null ? (
                                            <img
                                                src={results[index] ? correct_icon : wrong_icon}
                                                alt={results[index] ? "Correct" : "Incorrect"}
                                                className={styles["page121__checkmark-image"]}
                                                style={{ display: "inline-block" }}
                                            />
                                        ) : (
                                            <span className={styles["page121__placeholder"]}></span>
                                        )}

                                    </div>
                                    <span
                                        className={styles["page121__question-text"]}
                                        onClick={() => playAudio(answerAudio)}
                                    >
                                        <em>{question}</em>
                                    </span>
                                </div>
                            );
                        })}

                        <button className={styles["page121__button--check"]} onClick={handleCheckClick}>
                            <em>Check</em>
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Pagina121;