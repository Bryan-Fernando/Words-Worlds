import React, { useState, useRef } from 'react';

import styles from './pagina121.module.css';

import correct_icon from '../assets/icons/correct_icon.webp';
import wrong_icon from '../assets/icons/wrong_icon.webp';
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import global_learning_le_e from '../assets/audios/global_learning_le_e.mp3';
import global_learning_le_p from '../assets/audios/global_learning_le_p.mp3';
import pg121_audio1e from '../assets/audios/pg121_audio1e.mp3';
import pg121_audio2e from '../assets/audios/pg121_audio2e.mp3';
import pg121_audio3e from '../assets/audios/pg121_audio3e.mp3';
import pg121_audio4e from '../assets/audios/pg121_audio4e.mp3';
import pg121_audio5e from '../assets/audios/pg121_audio5e.mp3';
import pg121_audio6e from '../assets/audios/pg121_audio6e.mp3';

import pg121_audio1p from '../assets/audios/pg121_audio1p.mp3';
import pg121_audio2p from '../assets/audios/pg121_audio2p.mp3';
import pg121_audio3p from '../assets/audios/pg121_audio3p.mp3';
import pg121_audio4p from '../assets/audios/pg121_audio4p.mp3';
import pg121_audio5p from '../assets/audios/pg121_audio5p.mp3';
import pg121_audio6p from '../assets/audios/pg121_audio6p.mp3';
const Pagina121 = () => {
    const [inputValues, setInputValues] = useState(Array(5).fill(''));
    const [results, setResults] = useState(Array(5).fill(null));
    const [showAnswersKey, setShowAnswersKey] = useState(false);
    const currentAudioRef = useRef(null);

    const correctAnswers = [
        'She is watching a movie now.',
        'We are studying for the test.',
        'He is sleeping because he is tired.',
        'They are travelling for their honeymoon.',
        'The students are studying for the final exam.'
    ];

    const audioMap = {
        global_learning_le_e,
        global_learning_le_p,
        pg121_audio1e,
        pg121_audio1p,
        pg121_audio2e,
        pg121_audio2p,
        pg121_audio3e,
        pg121_audio3p,
        pg121_audio4e,
        pg121_audio4p,
        pg121_audio5e,
        pg121_audio5p,
        pg121_audio6e,
        pg121_audio6p
    };

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

    // Aceita com ou sem ponto final (.), case-insensitive
    const handleCheckClick = () => {
        const newResults = inputValues.map((value, index) => {
            if (!correctAnswers[index]) return false;
            const user = value.trim().replace(/\.$/, '');
            const correct = correctAnswers[index].trim().replace(/\.$/, '');
            return user.toLowerCase() === correct.toLowerCase();
        });
        setResults(newResults);
    };

    const handleInputChange = (value, index) => {
        const newValues = [...inputValues];
        newValues[index] = value;
        setInputValues(newValues);
        setResults(prev => {
            const next = [...prev];
            next[index] = null;
            return next;
        });
    };

    const handleReset = () => {
        setInputValues(Array(5).fill(''));
        setResults(Array(5).fill(null));
        setShowAnswersKey(false);
        if (currentAudioRef.current) {
            currentAudioRef.current.pause();
            currentAudioRef.current.currentTime = 0;
            currentAudioRef.current = null;
        }
    };

    const toggleAnswersKey = () => setShowAnswersKey(v => !v);

    const answersKeyItems = [
        { label: '1', text: 'She is watching a movie now.' },
        { label: '2', text: 'We are studying for the test.' },
        { label: '3', text: 'He is sleeping because he is tired.' },
        { label: '4', text: 'They are travelling for their honeymoon.' },
        { label: '5', text: 'The students are studying for the final exam.' }
    ];

    return (
        <div className={styles["page121__container"]}>
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
                            <span className={styles["page121_columnA--title"]}>A</span>
                            <div className={styles["page121_container-colunsa"]}>
                                <p>1. She is cooking</p>
                                <p>2. We are waiting</p>
                                <p>3. He is sleeping</p>
                                <p>4. They are travelling</p>
                                <p>5. The students are studying</p>
                            </div>
                            <span className={styles["page121_columnB--title"]}>B</span>
                            <div className={styles["page121_container-colunsb"]}>
                                <p>a) because he is tired.</p>
                                <p>b) for the bus.</p>
                                <p>c) dinner in the kitchen.</p>
                                <p>d) for the final exam.</p>
                                <p>e) for their honeymoon.</p>
                            </div>
                        </div>

                        {[0, 1, 2, 3, 4].map((_, index) => {
                            const answerAudioEng = `pg121_audio${index + 2}e`;
                            const answerAudioPt = `pg121_audio${index + 2}p`;

                            return (
                                <div key={index} className={styles["page121__question"]}>
                                    <div className={styles["page121__input-container"]}>
                                        <input
                                            type="text"
                                            value={inputValues[index]}
                                            onChange={(e) => handleInputChange(e.target.value, index)}
                                            className={styles["page121__input-box"]}
                                        />
                                        {results[index] !== null && (
                                            <img
                                                src={results[index] ? correct_icon : wrong_icon}
                                                alt={results[index] ? "Correct" : "Incorrect"}
                                                className={styles["page121__checkmark-image"]}
                                            />
                                        )}
                                        <img
                                            src={eng_audio_icon}
                                            alt="English Audio"
                                            className={styles["page121__additional-icon"]}
                                            onClick={() => playAudio(answerAudioEng)}
                                        />
                                        <img
                                            src={ptbr_audio_icon}
                                            alt="Portuguese Audio"
                                            className={styles["page121__additional-icon"]}
                                            onClick={() => playAudio(answerAudioPt)}
                                        />
                                    </div>
                                </div>
                            );
                        })}

                        {/* Ações: Check + Reset + Answers Key */}
                        <div className={styles["page121__actions"]}>
                            <button className={styles["page121__button--check"]} onClick={handleCheckClick}>
                                <em>Check</em>
                            </button>

                            <button className={styles["page121__reset-button"]} onClick={handleReset}>
                                <em>Reset</em>
                            </button>

                            <button
                                className={styles["page121__answersKey-button"]}
                                onClick={toggleAnswersKey}
                                aria-pressed={showAnswersKey ? 'true' : 'false'}
                            >
                                <em>Answers Key</em>
                            </button>
                        </div>

                        {/* Answers Key (gabarito curto) */}
                        {showAnswersKey && (
                            <div className={styles["page121__answersKey-box"]}>
                                {answersKeyItems.map((item, idx) => (
                                    <div key={idx} className={styles["page121__answersKey-item"]}>
                                        <div className={styles["page121__answersKey-num"]}>{item.label}</div>
                                        <div className={styles["page121__answersKey-text"]}>{item.text}</div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Pagina121;

