import React, { useState } from 'react';

import styles from './pagina68.module.css';

import correct_icon from '../assets/icons/correct_icon.webp';
import wrong_icon from '../assets/icons/wrong_icon.webp';
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import CarolJohnImage from '../assets/images/pagina68_imagem1.webp';

import global_learning_le_e from '../assets/audios/global_learning_le_e.mp3';
import global_learning_le_p from '../assets/audios/global_learning_le_p.mp3';
import pg68_audio1e from "../assets/audios/pg68_audio1e.mp3";
import pg68_audio1p from "../assets/audios/pg68_audio1p.mp3";
import pg68_audio2e from "../assets/audios/pg68_audio2e.mp3";
import pg68_audio2p from "../assets/audios/pg68_audio2p.mp3";
import pg68_audio3e from "../assets/audios/pg68_audio3e.mp3";
import pg68_audio4e from "../assets/audios/pg68_audio4e.mp3";
import pg68_audio5e from "../assets/audios/pg68_audio5e.mp3";
import pg68_audio6e from "../assets/audios/pg68_audio6e.mp3";
import pg68_audio7e from "../assets/audios/pg68_audio7e.mp3";
import pg68_audio8e from "../assets/audios/pg68_audio8e.mp3";
import pg68_audio9e from "../assets/audios/pg68_audio9e.mp3";
import pg68_audio10e from "../assets/audios/pg68_audio10e.mp3";
import pg68_audio11e from "../assets/audios/pg68_audio11e.mp3";
import pg68_audio12e from "../assets/audios/pg68_audio12e.mp3";
import pg68_audio13e from "../assets/audios/pg68_audio13e.mp3";
import pg68_audio14e from "../assets/audios/pg68_audio14e.mp3";
import pg68_audio15e from "../assets/audios/pg68_audio15e.mp3";
import pg68_audio3p from "../assets/audios/pg68_audio3p.mp3";
import pg68_audio4p from "../assets/audios/pg68_audio4p.mp3";
import pg68_audio5p from "../assets/audios/pg68_audio5p.mp3";
import pg68_audio6p from "../assets/audios/pg68_audio6p.mp3";
import pg68_audio7p from "../assets/audios/pg68_audio7p.mp3";
import pg68_audio8p from "../assets/audios/pg68_audio8p.mp3";
import pg68_audio9p from "../assets/audios/pg68_audio9p.mp3";
import pg68_audio10p from "../assets/audios/pg68_audio10p.mp3";
import pg68_audio11p from "../assets/audios/pg68_audio11p.mp3";
import pg68_audio12p from "../assets/audios/pg68_audio12p.mp3";
import pg68_audio13p from "../assets/audios/pg68_audio13p.mp3";
import pg68_audio14p from "../assets/audios/pg68_audio14p.mp3";
import pg68_audio15p from "../assets/audios/pg68_audio15p.mp3";

const allowedAnswers = [

    [
        'Hey, John. What is your phone number?',
        'Hey, John. What’s your phone number?',
        'Hey John. What is your phone number?',
        'Hey John. What’s your phone number',
        'John what is your phone number?',
        'John what’s your phone number?',
        'John. What is your phone number?',
        'John. What’s your phone number?',
        'What’s your phone number?',
        'What is your phone number?',
        'What’s your phone number?',
        'What’s your phone number',
        'What’s your number?',
        'What is your number?'
    ],

    [
        '355-6937?',
        '3556937?',
    ],

    [
        'Ok. What’s your email address?',
        'Ok. What is your email address?',
        'What is your email address?',
        'What’s your email address?',
    ],

    [
        'Thanks',
        'thanks',
        'Thanks.',
        'thanks.',
    ],
];

const Pagina68 = () => {

    const audioMap = {
        global_learning_le_e: global_learning_le_e,
        global_learning_le_p: global_learning_le_p,
        pg68_audio1e: pg68_audio1e,
        pg68_audio1p: pg68_audio1p,
        pg68_audio2e: pg68_audio2e,
        pg68_audio2p: pg68_audio2p,
        pg68_audio3e: pg68_audio3e,
        pg68_audio4e: pg68_audio4e,
        pg68_audio5e: pg68_audio5e,
        pg68_audio6e: pg68_audio6e,
        pg68_audio7e: pg68_audio7e,
        pg68_audio8e: pg68_audio8e,
        pg68_audio9e: pg68_audio9e,
        pg68_audio10e: pg68_audio10e,
        pg68_audio11e: pg68_audio11e,
        pg68_audio12e: pg68_audio12e,
        pg68_audio13e: pg68_audio13e,
        pg68_audio14e: pg68_audio14e,
        pg68_audio15e: pg68_audio15e,
        pg68_audio3p: pg68_audio3p,
        pg68_audio4p: pg68_audio4p,
        pg68_audio5p: pg68_audio5p,
        pg68_audio6p: pg68_audio6p,
        pg68_audio7p: pg68_audio7p,
        pg68_audio8p: pg68_audio8p,
        pg68_audio9p: pg68_audio9p,
        pg68_audio10p: pg68_audio10p,
        pg68_audio11p: pg68_audio11p,
        pg68_audio12p: pg68_audio12p,
        pg68_audio13p: pg68_audio13p,
        pg68_audio14p: pg68_audio14p,
        pg68_audio15p: pg68_audio15p,

    };



    const [inputValues, setInputValues] = useState(Array(7).fill(''));
    const [results, setResults] = useState(Array(7).fill(null));

    const handleCheckClick = () => {
        const newResults = inputValues.map((value, index) => {
            if (index % 2 === 0) {
                const normalizedInput = value.trim();
                return allowedAnswers[index / 2].includes(normalizedInput);
            }
            return null;
        });
        setResults(newResults);
    };

    const handleInputChange = (value, index) => {
        const newValues = [...inputValues];
        newValues[index] = value;
        setInputValues(newValues);
    };

    const playAudio = (audioKey) => {
        const audioSrc = audioMap[audioKey];
        if (audioSrc) {
            const audio = new Audio(audioSrc);
            audio.play();
        } else {
            console.warn(`Áudio não encontrado para a chave: ${audioKey}`);
        }
    };



    return (
        <div className={styles["page68__container"]}>
            <header className={styles["page68__header"]}>
                <h1 className={styles["page68__title"]}>
                    Learning Language Exercises
                    <img
                        src={eng_audio_icon}
                        alt="English audio"
                        className={styles["page68__audio-icon"]}
                        onClick={() => playAudio('global_learning_le_e')}
                    />
                    <img
                        src={ptbr_audio_icon}
                        alt="Portuguese audio"
                        className={styles["page68__audio-icon"]}
                        onClick={() => playAudio('global_learning_le_p')}
                    />
                </h1>
                <h2 className={styles["page68__subtitle"]}>
                    Phone numbers and email addresses.
                    <img
                        src={eng_audio_icon}
                        alt="English audio"
                        className={styles["page68__audio-icon"]}
                        onClick={() => playAudio('pg68_audio1e')}
                    />
                    <img
                        src={ptbr_audio_icon}
                        alt="Portuguese audio"
                        className={styles["page68__audio-icon"]}
                        onClick={() => playAudio('pg68_audio1p')}
                    />
                </h2>

                <p className={styles["page68__instructions"]}>
                    Click on the correct word-box to complete the questions/statements.
                    <img
                        src={eng_audio_icon}
                        alt="English audio"
                        className={styles["page68__audio-icon"]}
                        onClick={() => playAudio('pg68_audio2e')}
                    />
                    <img
                        src={ptbr_audio_icon}
                        alt="Portuguese audio"
                        className={styles["page68__audio-icon"]}
                        onClick={() => playAudio('pg68_audio2p')}
                    />
                </p>
            </header>
            <aside className={styles["page68__aside"]}>
                <div className={styles["page68__aside-content"]}>
                    <div className={styles["page68__aside-note--first"]}>
                        <p >Nesse exercício você pode copiar da caixa de respostas transcrevendo, ou utilizando as teclas ctrl + c</p>
                    </div>
                </div>
            </aside>


            <main className={styles["page68__main"]}>
                <div className={styles["page68__left-side"]}>
                    <div className={styles["page68__questions-container"]}>
                        <div className={styles["page68__question"]}>
                            <label htmlFor="input1" className={styles["page68__label--carol"]}>Carol:</label>
                            <input
                                type="text"
                                value={inputValues[0]}
                                onChange={(e) => handleInputChange(e.target.value, 0)}
                                className={styles["page68__input-box"]}
                            />
                            {results[0] !== null && (
                                <img src={results[0] ? correct_icon : wrong_icon} alt={results[0] ? "Correct" : "Incorrect"} className={styles["page68__checkmark-image"]} />
                            )}
                        </div>

                        <div className={styles["page68__question"]}>
                            <label htmlFor="input2" className={styles["page68__label--john"]}>John:</label>
                            <input
                                type="text"
                                value={inputValues[1]}
                                onChange={(e) => handleInputChange(e.target.value, 1)}
                                className={styles["page68__input-box"]}
                                placeholder="It’s 355 - 6927"
                                disabled
                            />
                        </div>

                        <div className={styles["page68__question"]}>
                            <label htmlFor="input3" className={styles["page68__label--carol"]}>Carol:</label>
                            <input
                                type="text"
                                value={inputValues[2]}
                                onChange={(e) => handleInputChange(e.target.value, 2)}
                                className={styles["page68__input-box"]}
                            />
                            {results[2] !== null && (
                                <img src={results[2] ? correct_icon : wrong_icon} alt={results[2] ? "Correct" : "Incorrect"} className={styles["page68__checkmark-image"]} />
                            )}
                        </div>

                        <div className={styles["page68__question"]}>
                            <label htmlFor="input4" className={styles["page68__label--john"]}>John:</label>
                            <input
                                type="text"
                                value={inputValues[3]}
                                onChange={(e) => handleInputChange(e.target.value, 3)}
                                className={styles["page68__input-box"]}
                                placeholder="No, 355 - 6927?"
                                disabled
                            />
                        </div>

                        <div className={styles["page68__question"]}>
                            <label htmlFor="input5" className={styles["page68__label--carol"]}>Carol:</label>
                            <input
                                type="text"
                                value={inputValues[4]}
                                onChange={(e) => handleInputChange(e.target.value, 4)}
                                className={styles["page68__input-box"]}
                            />
                            {results[4] !== null && (
                                <img src={results[4] ? correct_icon : wrong_icon} alt={results[4] ? "Correct" : "Incorrect"} className={styles["page68__checkmark-image"]} />
                            )}
                        </div>

                        <div className={styles["page68__question"]}>
                            <label htmlFor="input6" className={styles["page68__label--john"]}>John:</label>
                            <input
                                type="text"
                                value={inputValues[5]}
                                onChange={(e) => handleInputChange(e.target.value, 5)}
                                className={styles["page68__input-box"]}
                                placeholder="It is john2023@email.com"
                                disabled
                            />
                        </div>

                        <div className={styles["page68__question"]}>
                            <label htmlFor="input7" className={styles["page68__label--carol"]}>Carol:</label>
                            <input
                                type="text"
                                value={inputValues[6]}
                                onChange={(e) => handleInputChange(e.target.value, 6)}
                                className={styles["page68__input-box"]}
                            />
                            {results[6] !== null && (
                                <img src={results[6] ? correct_icon : wrong_icon} alt={results[6] ? "Correct" : "Incorrect"} className={styles["page68__checkmark-image"]} />
                            )}
                        </div>

                        <button className={styles["page68__check-button"]} onClick={handleCheckClick}>Check</button>
                    </div>
                </div>

                <div className={styles["page68__right-side"]}>
                    <div className={styles["page68__image-container"]}>
                        <img src={CarolJohnImage} alt="Carol and John" className={styles["page68__image"]} />
                    </div>

                    <div className={styles["page68__answers-container"]}>
                        <p>
                            <strong>RESPOSTAS: (DEVEM SER VISÍVEIS APÓS CLICAR EM <span>‘CHECK’</span>)</strong>
                        </p>
                        <p>
                            <strong>A:</strong> Hey, John. What’s your phone number?
                            <img
                                src={eng_audio_icon}
                                alt="Play English Audio"
                                className={styles["page68__audio-icon"]}
                                onClick={() => playAudio("pg68_audio3e")}
                            />
                            <img
                                src={ptbr_audio_icon}
                                alt="Play Portuguese Audio"
                                className={styles["page68__audio-icon"]}
                                onClick={() => playAudio("pg68_audio3p")}
                            />
                        </p>

                        <p>
                            <strong>B:</strong> It is 355-6927.
                            <img
                                src={eng_audio_icon}
                                alt="Play English Audio"
                                className={styles["page68__audio-icon"]}
                                onClick={() => playAudio("pg68_audio4e")}
                            />
                            <img
                                src={ptbr_audio_icon}
                                alt="Play Portuguese Audio"
                                className={styles["page68__audio-icon"]}
                                onClick={() => playAudio("pg68_audio4p")}
                            />
                        </p>

                        <p>
                            <strong>A:</strong> 355-6937?
                            <img
                                src={eng_audio_icon}
                                alt="Play English Audio"
                                className={styles["page68__audio-icon"]}
                                onClick={() => playAudio("pg68_audio5e")}
                            />
                            <img
                                src={ptbr_audio_icon}
                                alt="Play Portuguese Audio"
                                className={styles["page68__audio-icon"]}
                                onClick={() => playAudio("pg68_audio5p")}
                            />
                        </p>

                        <p>
                            <strong>B:</strong> No, 355-6927.
                            <img
                                src={eng_audio_icon}
                                alt="Play English Audio"
                                className={styles["page68__audio-icon"]}
                                onClick={() => playAudio("pg68_audio6e")}
                            />
                            <img
                                src={ptbr_audio_icon}
                                alt="Play Portuguese Audio"
                                className={styles["page68__audio-icon"]}
                                onClick={() => playAudio("pg68_audio6p")}
                            />
                        </p>

                        <p>
                            <strong>A:</strong> Ok. What’s your email address?
                            <img
                                src={eng_audio_icon}
                                alt="Play English Audio"
                                className={styles["page68__audio-icon"]}
                                onClick={() => playAudio("pg68_audio7e")}
                            />
                            <img
                                src={ptbr_audio_icon}
                                alt="Play Portuguese Audio"
                                className={styles["page68__audio-icon"]}
                                onClick={() => playAudio("pg68_audio7p")}
                            />
                        </p>

                        <p>
                            <strong>B:</strong> It’s john2023@gmail.com
                            <img
                                src={eng_audio_icon}
                                alt="Play English Audio"
                                className={styles["page68__audio-icon"]}
                                onClick={() => playAudio("pg68_audio8e")}
                            />
                            <img
                                src={ptbr_audio_icon}
                                alt="Play Portuguese Audio"
                                className={styles["page68__audio-icon"]}
                                onClick={() => playAudio("pg68_audio8p")}
                            />
                        </p>

                        <p>
                            <strong>A:</strong> Thanks.
                            <img
                                src={eng_audio_icon}
                                alt="Play English Audio"
                                className={styles["page68__audio-icon"]}
                                onClick={() => playAudio("pg68_audio9e")}
                            />
                            <img
                                src={ptbr_audio_icon}
                                alt="Play Portuguese Audio"
                                className={styles["page68__audio-icon"]}
                                onClick={() => playAudio("pg68_audio9p")}
                            />
                        </p>

                    </div>
                </div>
            </main>

            <div className={styles["page68__container-aside"]}>
                <aside className={styles["page68__aside"]}>
                    <div className={styles["page68__aside-section"]}>
                        <h2 className={styles["page68__aside-title"]}>
                            Asking for someone’s phone number
                            <img
                                src={eng_audio_icon}
                                alt="Play English Audio"
                                className={styles["page68__audio-icon"]}
                                onClick={() => playAudio("pg68_audio10e")}
                            />
                            <img
                                src={ptbr_audio_icon}
                                alt="Play Portuguese Audio"
                                className={styles["page68__audio-icon"]}
                                onClick={() => playAudio("pg68_audio10p")}
                            />
                        </h2>
                        <ul className={styles["page68__aside-list"]}>
                            <li>
                                What’s your phone number?
                                <img
                                    src={eng_audio_icon}
                                    alt="Play English Audio"
                                    className={styles["page68__audio-icon"]}
                                    onClick={() => playAudio("pg68_audio11e")}
                                />
                                <img
                                    src={ptbr_audio_icon}
                                    alt="Play Portuguese Audio"
                                    className={styles["page68__audio-icon"]}
                                    onClick={() => playAudio("pg68_audio11p")}
                                />
                            </li>
                            <li>
                                What’s your number?
                                <img
                                    src={eng_audio_icon}
                                    alt="Play English Audio"
                                    className={styles["page68__audio-icon"]}
                                    onClick={() => playAudio("pg68_audio12e")}
                                />
                                <img
                                    src={ptbr_audio_icon}
                                    alt="Play Portuguese Audio"
                                    className={styles["page68__audio-icon"]}
                                    onClick={() => playAudio("pg68_audio12p")}
                                />
                            </li>
                        </ul>
                    </div>

                    <div className={styles["page68__aside-section"]}>
                        <h2 className={styles["page68__aside-title"]}>
                            Asking for someone’s email address
                            <img
                                src={eng_audio_icon}
                                alt="Play English Audio"
                                className={styles["page68__audio-icon"]}
                                onClick={() => playAudio("pg68_audio13e")}
                            />
                            <img
                                src={ptbr_audio_icon}
                                alt="Play Portuguese Audio"
                                className={styles["page68__audio-icon"]}
                                onClick={() => playAudio("pg68_audio13p")}
                            />
                        </h2>
                        <ul className={styles["page68__aside-list"]}>
                            <li>
                                What’s your email address?
                                <img
                                    src={eng_audio_icon}
                                    alt="Play English Audio"
                                    className={styles["page68__audio-icon"]}
                                    onClick={() => playAudio("pg68_audio14e")}
                                />
                                <img
                                    src={ptbr_audio_icon}
                                    alt="Play Portuguese Audio"
                                    className={styles["page68__audio-icon"]}
                                    onClick={() => playAudio("pg68_audio14p")}
                                />
                            </li>
                            <li>
                                What’s your email?
                                <img
                                    src={eng_audio_icon}
                                    alt="Play English Audio"
                                    className={styles["page68__audio-icon"]}
                                    onClick={() => playAudio("pg68_audio15e")}
                                />
                                <img
                                    src={ptbr_audio_icon}
                                    alt="Play Portuguese Audio"
                                    className={styles["page68__audio-icon"]}
                                    onClick={() => playAudio("pg68_audio15p")}
                                />
                            </li>
                        </ul>
                    </div>
                </aside>

            </div>
        </div>

    );
};

export default Pagina68;
