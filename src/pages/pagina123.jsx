import React, { useState, useRef } from 'react';

import styles from './pagina123.module.css';

import pagina233_imagem1 from '../assets/images/pagina233_imagem1.jpg';
import pagina233_imagem2 from '../assets/images/pagina233_imagem2.jpg';

import correct_icon from '../assets/icons/correct_icon.webp';
import wrong_icon from '../assets/icons/wrong_icon.webp';
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import global_learning_le_e from '../assets/audios/global_learning_le_e.mp3';
import global_learning_le_p from '../assets/audios/global_learning_le_p.mp3';
import pg123_audio1e from '../assets/audios/pg123_audio1e.mp3';
import pg123_audio2e from '../assets/audios/pg123_audio2e.mp3';
import pg123_audio3e from '../assets/audios/pg123_audio3e.mp3';
import pg123_audio4e from '../assets/audios/pg123_audio4e.mp3';
import pg123_audio5e from '../assets/audios/pg123_audio5e.mp3';
import pg123_audio6e from '../assets/audios/pg123_audio6e.mp3';

const Pagina123 = () => {
    const [inputValues, setInputValues] = useState(Array(6).fill(''));
    const [results, setResults] = useState(Array(6).fill(null));

    const correctAnswers = [
        'The children are playing in the park.',
        'Dogs are playing on the beach.',
        'She is talking to her friend right now.',
        'He is playing the guitar in his room.',
        'They are walking to the library now.'
    ];

    const audioMap = {
        global_learning_le_e,
        global_learning_le_p,
        pg123_audio1e,
        pg123_audio2e,
        pg123_audio3e,
        pg123_audio4e,
        pg123_audio5e,
        pg123_audio6e
    };    

    const currentAudioRef = useRef(null);

    const playAudio = (audioKey) => {
        if (currentAudioRef.current) {
            currentAudioRef.current.pause();
            currentAudioRef.current.currentTime = 0;
        }
        if (audioMap[audioKey]) {
            const audio = new Audio(audioMap[audioKey]);
            currentAudioRef.current = audio;
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
        <div className={styles["page122__container"]}>
            <header className={styles["page123__header"]}>
                <h1 className={styles["page123__title"]}>
                    Learning Language Exercises
                    <img
                        src={eng_audio_icon}
                        alt="English audio"
                        className={styles["page123__header-icon"]}
                        onClick={() => playAudio("global_learning_le_e")}
                    />
                    <img
                        src={ptbr_audio_icon}
                        alt="Portuguese audio"
                        className={styles["page123__header-icon"]}
                        onClick={() => playAudio("global_learning_le_p")}
                    />
                </h1>
            </header>
            <main className={styles["page123__main"]}>
                <div className={styles["page123__content-flex"]}>
                    <div className={styles["page123__questions-container"]}>
                        <h2 className={styles["page123__questions-title"]}>
                        <span className={styles["page123__text-red"]}>4. Sentence Ordering</span>
                        <br /> ( Put the words in the correct order to form a sentence )   
                            <img
                                src={eng_audio_icon}
                                alt="English audio"
                                className={styles["page123__header-icon"]}
                                onClick={() => playAudio("pg123_audio1e")}
                            />
                            <img
                                src={ptbr_audio_icon}
                                alt="Portuguese audio"
                                className={styles["page123__header-icon"]}
                            />
                        </h2>

                        {[
                            "1. (are / the children / playing / in the park)",
                            "2. (on the beach / playing / dogs / are)",
                            "3. (talking / right now / she / is / to her friend)",
                            "4. (playing / the guitar / he / is / in his room)",
                            "5. (to the library / they / walking / are / now)"
                        ].map((question, index) => {
                            const answerAudio = `pg123_audio${index + 2}e`;
                            

                            return (
                                <div key={index} className={styles["page123__question"]}>
                                    <div className={styles["page123__input-container"]}>
                                        <input
                                            type="text"
                                            value={inputValues[index]}
                                            onChange={(e) => handleInputChange(e.target.value, index)}
                                            className={styles["page123__input-box"]}
                                        />
                                        <img
                                            src={eng_audio_icon}
                                            alt="Audio Icon"
                                            className={styles["page123__additional-icon"]}
                                            onClick={() => playAudio(answerAudio)}
                                        />
                                        {results[index] !== null ? (
                                            <img
                                                src={results[index] ? correct_icon : wrong_icon}
                                                alt={results[index] ? "Correct" : "Incorrect"}
                                                className={styles["page123__checkmark-image"]}
                                                style={{ display: "inline-block" }}
                                            />
                                        ) : (
                                            <span className={styles["page123__placeholder"]}></span>
                                        )}

                                    </div>
                                    <span
                                        className={styles["page123__question-text"]}
                                        onClick={() => playAudio(answerAudio)}
                                    >
                                        <em>{question}</em>
                                    </span>
                                </div>
                            );
                        })}

                        <button className={styles["page123__button--check"]} onClick={handleCheckClick}>
                            <em>Check</em>
                        </button>
                    </div>
                </div>
                <div className={styles["page123__container-image"]}>
                        <div className={styles["page123__container-imagea"]}>
                            <img className={styles["page123__image"]} src={pagina233_imagem1} alt="" />
                        </div>
                        <div className={styles["page123__container-imagea"]}>
                            <img className={styles["page123__image"]} src={pagina233_imagem2} alt="" />
                        </div>
                </div>
            </main>
        </div>
    );
};

export default Pagina123;
