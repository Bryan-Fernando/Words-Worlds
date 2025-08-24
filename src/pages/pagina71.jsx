import React, { useState } from 'react';

import styles from './pagina71.module.css';

import campainha from '../assets/icons/campainha.png';
import correct_icon from '../assets/icons/correct_icon.webp';
import wrong_icon from '../assets/icons/wrong_icon.webp';
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import pagina71_imagem1 from '../assets/images/pagina71_imagem1.webp';
import pagina71_imagem2 from '../assets/images/pagina71_imagem2.webp';

import bell from '../assets/audios/bell.mp3';
import global_learning_le_e from '../assets/audios/global_learning_le_e.mp3';
import global_learning_le_p from '../assets/audios/global_learning_le_p.mp3';
import global_reading_compe from '../assets/audios/global_reading_compe.mp3';
import global_reading_compp from '../assets/audios/global_reading_compp.mp3';
import pg71_audio1_1 from "../assets/audios/pg71_audio1_1.mp3";
import pg71_audio1_2 from "../assets/audios/pg71_audio1_2.mp3";
import pg71_audio1_3 from "../assets/audios/pg71_audio1_3.mp3";
import pg71_audio1_4 from "../assets/audios/pg71_audio1_4.mp3";
import pg71_audio1_5 from "../assets/audios/pg71_audio1_5.mp3";
import pg71_audio1_6 from "../assets/audios/pg71_audio1_6.mp3";
import pg71_audio1_7 from "../assets/audios/pg71_audio1_7.mp3";
import pg71_audio1_8 from "../assets/audios/pg71_audio1_8.mp3";
import pg71_audio1_9 from "../assets/audios/pg71_audio1_9.mp3";
import pg71_audio2_1 from "../assets/audios/pg71_audio2_1.mp3";
import pg71_audio2_2 from "../assets/audios/pg71_audio2_2.mp3";
import pg71_audio2_3 from "../assets/audios/pg71_audio2_3.mp3";
import pg71_audio2_4 from "../assets/audios/pg71_audio2_4.mp3";
import pg71_audio2_5 from "../assets/audios/pg71_audio2_5.mp3";
import pg71_audio2_6 from "../assets/audios/pg71_audio2_6.mp3";
import pg71_audio2_7 from "../assets/audios/pg71_audio2_7.mp3";
import pg71_audio2_8 from "../assets/audios/pg71_audio2_8.mp3";
import pg71_audio2_9 from "../assets/audios/pg71_audio2_9.mp3";
import pg71_audio3e from "../assets/audios/pg71_audio3e.mp3";
import pg71_audio3p from "../assets/audios/pg71_audio3p.mp3";
import pg71_audio4e from "../assets/audios/pg71_audio4e.mp3";
import pg71_audio4p from "../assets/audios/pg71_audio4p.mp3";
import pg71_audio5 from "../assets/audios/pg71_audio5.mp3";
import pg71_audio6 from "../assets/audios/pg71_audio6.mp3";
import pg71_audio7 from "../assets/audios/pg71_audio7.mp3";
import pg71_audio8 from "../assets/audios/pg71_audio8.mp3";
import pg71_audio9 from "../assets/audios/pg71_audio9.mp3";
import pg71_audio10 from "../assets/audios/pg71_audio10.mp3";
import pg71_audio5p from "../assets/audios/pg71_audio5p.mp3";
import pg71_audio6p from "../assets/audios/pg71_audio6p.mp3";
import pg71_audio7p from "../assets/audios/pg71_audio7p.mp3";
import pg71_audio8p from "../assets/audios/pg71_audio8p.mp3";
import pg71_audio9p from "../assets/audios/pg71_audio9p.mp3";
import pg71_audio10p from "../assets/audios/pg71_audio10p.mp3";
import pg71_audio11e from "../assets/audios/pg71_audio11e.mp3";
import pg71_audio11p from "../assets/audios/pg71_audio11p.mp3";
import pg71_audio12 from "../assets/audios/pg71_audio12.mp3";
import pg71_audio13 from "../assets/audios/pg71_audio13.mp3";
import pg71_audio14 from "../assets/audios/pg71_audio14.mp3";
import pg71_audio15 from "../assets/audios/pg71_audio15.mp3";
import pg71_audio16 from "../assets/audios/pg71_audio16.mp3";
import pg71_audio17 from "../assets/audios/pg71_audio17.mp3";
import pg71_audio18 from "../assets/audios/pg71_audio18.mp3";
import pg71_audio12p from "../assets/audios/pg71_audio12p.mp3";
import pg71_audio13p from "../assets/audios/pg71_audio13p.mp3";
import pg71_audio14p from "../assets/audios/pg71_audio14p.mp3";
import pg71_audio15p from "../assets/audios/pg71_audio15p.mp3";
import pg71_audio16p from "../assets/audios/pg71_audio16p.mp3";
import pg71_audio17p from "../assets/audios/pg71_audio17p.mp3";
import pg71_audio18p from "../assets/audios/pg71_audio18p.mp3";
import pg71_audio19 from "../assets/audios/pg71_audio19.mp3";
import pg71_audio20 from "../assets/audios/pg71_audio20.mp3";
import pg71_audio21 from "../assets/audios/pg71_audio21.mp3";
import pg71_audio22 from "../assets/audios/pg71_audio22.mp3";
import pg71_audio23 from "../assets/audios/pg71_audio23.mp3";
import pg71_audio24 from "../assets/audios/pg71_audio24.mp3";
import pg71_audio25 from "../assets/audios/pg71_audio25.mp3";
import pg71_audio26 from "../assets/audios/pg71_audio26.mp3";
import pg71_audio27 from "../assets/audios/pg71_audio27.mp3";
import pg71_audio28 from "../assets/audios/pg71_audio28.mp3";
import pg71_audio29 from "../assets/audios/pg71_audio29.mp3";
import pg71_audio30 from "../assets/audios/pg71_audio30.mp3";
import pg71_audio31 from "../assets/audios/pg71_audio31.mp3";
import pg71_audio19p from "../assets/audios/pg71_audio19p.mp3";
import pg71_audio20p from "../assets/audios/pg71_audio20p.mp3";
import pg71_audio21p from "../assets/audios/pg71_audio21p.mp3";
import pg71_audio22p from "../assets/audios/pg71_audio22p.mp3";
import pg71_audio23p from "../assets/audios/pg71_audio23p.mp3";
import pg71_audio24p from "../assets/audios/pg71_audio24p.mp3";
import pg71_audio25p from "../assets/audios/pg71_audio25p.mp3";
import pg71_audio26p from "../assets/audios/pg71_audio26p.mp3";
import pg71_audio27p from "../assets/audios/pg71_audio27p.mp3";
import pg71_audio28p from "../assets/audios/pg71_audio28p.mp3";
import pg71_audio29p from "../assets/audios/pg71_audio29p.mp3";
import pg71_audio30p from "../assets/audios/pg71_audio30p.mp3";
import pg71_audio31p from "../assets/audios/pg71_audio31p.mp3";
import pg71_audio32e from "../assets/audios/pg71_audio32e.mp3";
import pg71_audio33e from "../assets/audios/pg71_audio33e.mp3";
import pg71_audio34e from "../assets/audios/pg71_audio34e.mp3";
import pg71_audio35e from "../assets/audios/pg71_audio35e.mp3";
import pg71_audio36e from "../assets/audios/pg71_audio36e.mp3";
import pg71_audio37e from "../assets/audios/pg71_audio37e.mp3";
import pg71_audio38e from "../assets/audios/pg71_audio38e.mp3";
import pg71_audio39e from "../assets/audios/pg71_audio39e.mp3";
import pg71_audio40e from "../assets/audios/pg71_audio40e.mp3";

const Pagina71 = () => {
    const correctAnswers = [
        "She is Karen Brandon.",
        "She is from Portugal.",
        "Lisbon is her home city.",
        "She is 19.",
        "Her email address is karen@mail.com",
        "Her phone number is 403728930.",
        "He is Leo Santander.",
        "He's Brazilian.",
        "He's from Paraty.",
        "He's married.",
        "He's 27.",
        "His email is leo@mail.com.",
        "His cell phone number is 991212341265."
    ];

    const audioMap = {
        global_learning_le_e,
        global_learning_le_p,
        global_reading_compe,
        global_reading_compp,
        pg71_audio1_1,
        pg71_audio1_2,
        pg71_audio1_3,
        pg71_audio1_4,
        pg71_audio1_5,
        pg71_audio1_6,
        pg71_audio1_7,
        pg71_audio1_8,
        pg71_audio1_9,
        pg71_audio2_1,
        pg71_audio2_2,
        pg71_audio2_3,
        pg71_audio2_4,
        pg71_audio2_5,
        pg71_audio2_6,
        pg71_audio2_7,
        pg71_audio2_8,
        pg71_audio2_9,
        pg71_audio3e,
        pg71_audio3p,
        pg71_audio4e,
        pg71_audio4p,
        pg71_audio5,
        pg71_audio6,
        pg71_audio7,
        pg71_audio8,
        pg71_audio9,
        pg71_audio10,
        pg71_audio5p,
        pg71_audio6p,
        pg71_audio7p,
        pg71_audio8p,
        pg71_audio9p,
        pg71_audio10p,
        pg71_audio11e,
        pg71_audio11p,
        pg71_audio12,
        pg71_audio13,
        pg71_audio14,
        pg71_audio15,
        pg71_audio16,
        pg71_audio17,
        pg71_audio18,
        pg71_audio12p,
        pg71_audio13p,
        pg71_audio14p,
        pg71_audio15p,
        pg71_audio16p,
        pg71_audio17p,
        pg71_audio18p,
        pg71_audio19,
        pg71_audio20,
        pg71_audio21,
        pg71_audio22,
        pg71_audio23,
        pg71_audio24,
        pg71_audio25,
        pg71_audio26,
        pg71_audio27,
        pg71_audio28,
        pg71_audio29,
        pg71_audio30,
        pg71_audio31,
        pg71_audio19p,
        pg71_audio20p,
        pg71_audio21p,
        pg71_audio22p,
        pg71_audio23p,
        pg71_audio24p,
        pg71_audio25p,
        pg71_audio26p,
        pg71_audio27p,
        pg71_audio28p,
        pg71_audio29p,
        pg71_audio30p,
        pg71_audio31p,
        bell,
        pg71_audio32e,
        pg71_audio33e,
        pg71_audio34e,
        pg71_audio35e,
        pg71_audio36e,
        pg71_audio37e,
        pg71_audio38e,
        pg71_audio39e,
        pg71_audio40e,
    };

    const [userAnswers, setUserAnswers] = useState(Array(13).fill(''));
    const [results, setResults] = useState(Array(13).fill(null));
    const [showAnswersKey, setShowAnswersKey] = useState(false);

    const handleInputChange = (value, index) => {
        const newAnswers = [...userAnswers];
        newAnswers[index] = value;
        setUserAnswers(newAnswers);
    };

    const handleCheckClick = () => {
        const newResults = userAnswers.map((answer, index) => {
            return answer.trim().toLowerCase() === correctAnswers[index].trim().toLowerCase()
                ? correct_icon
                : wrong_icon;
        });
        setResults(newResults);
    };

    const handleReset = () => {
        setUserAnswers(Array(13).fill(''));
        setResults(Array(13).fill(null));
        setShowAnswersKey(false);
    };

    const playAudio = (audioKey) => {
        const audioSrc = audioMap[audioKey];
        if (audioSrc) {
            const audio = new Audio(audioSrc);
            audio.play();
        } else {
            console.warn(`Áudio não encontrado para: ${audioKey}`);
        }
    };

    return (
        <div className={styles["page71__container"]}>
            <header className={styles["page71__header"]}>
                <h1 className={styles["page71__header--h1"]}>
                    Learning Language Exercises
                    <img
                        src={eng_audio_icon}
                        alt="English audio"
                        className={styles["page71__audio-icon"]}
                        onClick={() => playAudio('global_learning_le_e')}
                    />
                    <img
                        src={ptbr_audio_icon}
                        alt="Portuguese audio"
                        className={styles["page71__audio-icon"]}
                        onClick={() => playAudio('global_learning_le_p')}
                    />
                </h1>

                <h2 className={styles["page71__header--h2"]}>
                    Reading Comprehension
                    <img
                        src={eng_audio_icon}
                        alt="English audio"
                        className={styles["page71__audio-icon"]}
                        onClick={() => playAudio('global_reading_compe')}
                    />
                    <img
                        src={ptbr_audio_icon}
                        alt="Portuguese audio"
                        className={styles["page71__audio-icon"]}
                        onClick={() => playAudio('global_reading_compp')}
                    />
                </h2>
            </header>

            <main className={styles["page71__main"]}>
                <div className={styles["page71__section"]}>
                    <div className={styles["page71__person-container"]}>
                        <div className={styles["page71__person-info"]}>
                            <img src={pagina71_imagem1} alt="Karen Brandon" className={styles["page71__image"]} />
                            <div>
                                <p className={`${styles["page71__person-text--english"]} ${styles["page71__clickable-text"]}`}>
                                    <span onClick={() => playAudio('pg71_audio1_1')}>I’m Karen Brandon. </span>
                                    <span onClick={() => playAudio('pg71_audio1_2')}>I’m from Portugal. </span>
                                    <span onClick={() => playAudio('pg71_audio1_3')}>Lisbon is my home.</span>
                                    <span onClick={() => playAudio('pg71_audio1_4')}>It’s an amazing city.</span>
                                    <span onClick={() => playAudio('pg71_audio1_5')}>I am an English student.</span>
                                    <span onClick={() => playAudio('pg71_audio1_6')}>I’m 19.</span>
                                    <span onClick={() => playAudio('pg71_audio1_7')}>My email is karen@mail.com </span>
                                    <span onClick={() => playAudio('pg71_audio1_8')}>and my phone number is </span>
                                    <span onClick={() => playAudio('pg71_audio1_9')}>403 - 728930.</span>
                                </p>
                                <p className={styles["page71__person-text--portuguese"]}>Eu sou Karen Brandon. Sou de Portugal. Lisboa é minha casa. É uma cidade incrível. Sou estudante de inglês. Tenho 19 anos. Meu e-mail é karen@mail.com e meu número de telefone é 403 - 728930.</p>
                            </div>
                        </div>
                        <div className={styles["page71__person-info"]}>
                            <img src={pagina71_imagem2} alt="Leo Santander" className={styles["page71__image"]} />
                            <div>
                                <p className={`${styles["page71__person-text--english"]} ${styles["page71__clickable-text"]}`}>
                                    <span onClick={() => playAudio('pg71_audio2_1')}>Hi there. I’m Leo Santander. </span>
                                    <span onClick={() => playAudio('pg71_audio2_2')}>I’m Brazilian. </span>
                                    <span onClick={() => playAudio('pg71_audio2_3')}>I’m from Paraty, but I’m now in Rio. </span>
                                    <span onClick={() => playAudio('pg71_audio2_4')}>I’m an entrepreneur. </span>
                                    <span onClick={() => playAudio('pg71_audio2_5')}>I have a small company. </span>
                                    <span onClick={() => playAudio('pg71_audio2_6')}>I’m married. </span>
                                    <span onClick={() => playAudio('pg71_audio2_7')}>I’m 27 years old. </span>
                                    <span onClick={() => playAudio('pg71_audio2_8')}>My email is leo@mail.com, </span>
                                    <span onClick={() => playAudio('pg71_audio2_9')}>and my cell phone number is 99 12 1234 - 1265</span>
                                </p>
                                <p className={styles["page71__person-text--portuguese"]}>Olá, eu sou Leo Santander. Sou brasileiro. Sou de Paraty, mas estou agora no Rio. Sou empreendedor. Tenho uma pequena empresa. Sou casado. Tenho 27 anos. Meu e-mail é leo@mail.com e meu número de celular é 55 12 1234-1265.</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles["page71__another-header"]}>
                        <h1 className={styles["page71__header--h1"]}>
                            Learning Language Exercises
                            <img
                                src={eng_audio_icon}
                                alt="English audio"
                                className={styles["page71__audio-icon"]}
                                onClick={() => playAudio('global_learning_le_e')}
                            />
                            <img
                                src={ptbr_audio_icon}
                                alt="Portuguese audio"
                                className={styles["page71__audio-icon"]}
                                onClick={() => playAudio('global_learning_le_p')}
                            />
                        </h1>
                        <div>
                            <h2 className={styles["page71__header--h2"]}>
                                Read the Statements and give complete answers according to the texts. <br />
                                <img
                                    src={eng_audio_icon}
                                    alt="English audio"
                                    className={styles["page71__audio-icon"]}
                                    onClick={() => playAudio('pg71_audio3e')}
                                />
                                <img
                                    src={ptbr_audio_icon}
                                    alt="Portuguese audio"
                                    className={styles["page71__audio-icon"]}
                                    onClick={() => playAudio('pg71_audio3p')}
                                />
                            </h2>
                        </div>
                    </div>

                    <p className={styles["page71__question-text"]}>
                        Questions about Karen Brandon.
                        <img
                            src={eng_audio_icon}
                            alt="English audio"
                            className={styles["page71__audio-icon"]}
                            onClick={() => playAudio('pg71_audio4e')}
                        />
                        <img
                            src={ptbr_audio_icon}
                            alt="Portuguese audio"
                            className={styles["page71__audio-icon"]}
                            onClick={() => playAudio('pg71_audio4p')}
                        />
                    </p>

                    <div className={styles["page71__question-list"]}>
                        {["Who is she?", "Where is she from?", "What is her home city?", "How old is she?", "What is her email address?", "What is her phone number?"].map((question, index) => (
                            <div key={index} className={styles["page71__question-item"]}>
                                <p className={styles["page71__question"]}>
                                    {String.fromCharCode(97 + index)}. {question}
                                    <img
                                        src={eng_audio_icon}
                                        alt="English audio"
                                        className={styles["page71__audio-icon"]}
                                        onClick={() => playAudio(`pg71_audio${index + 5}`)}
                                    />
                                    <img
                                        src={ptbr_audio_icon}
                                        alt="Portuguese audio"
                                        className={styles["page71__audio-icon"]}
                                        onClick={() => playAudio(`pg71_audio${index + 5}p`)}
                                    />
                                </p>
                                <input
                                    type="text"
                                    className={styles["page71__input"]}
                                    value={userAnswers[index]}
                                    onChange={(e) => handleInputChange(e.target.value, index)}
                                />
                                <img
                                    src={eng_audio_icon}
                                    alt="English audio"
                                    className={styles["page71__audio-icon-input"]}
                                    onClick={() => playAudio(`pg71_audio${index + 19}`)}
                                />
                                <img
                                    src={ptbr_audio_icon}
                                    alt="Portuguese audio"
                                    className={styles["page71__audio-icon-input"]}
                                    onClick={() => playAudio(`pg71_audio${index + 19}p`)}
                                />

                                {results[index] && (
                                    <div className={styles["page71__check-container"]}>
                                        <img src={results[index]} alt="result" className={styles["page71__checkmark-image"]} />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                    <p className={styles["page71__question-text"]}>
                        Questions about Leo Santander.
                        <img
                            src={eng_audio_icon}
                            alt="English audio"
                            className={styles["page71__audio-icon"]}
                            onClick={() => playAudio('pg71_audio11e')}
                        />
                        <img
                            src={ptbr_audio_icon}
                            alt="Portuguese audio"
                            className={styles["page71__audio-icon"]}
                            onClick={() => playAudio('pg71_audio11p')}
                        />
                    </p>

                    <div className={styles["page71__question-list"]}>
                        {["Who is he?", "What is his nationality?", "Where is he from?", "Is he married or single?", "How old is he?", "What is his email address?", "What is his cell phone number?"].map((question, index) => (
                            <div key={index + 6} className={styles["page71__question-item"]}>
                                <p className={styles["page71__question"]}>
                                    {String.fromCharCode(97 + index + 6)}. {question}
                                    <img
                                        src={eng_audio_icon}
                                        alt="English audio"
                                        className={styles["page71__audio-icon"]}
                                        onClick={() => playAudio(`pg71_audio${index + 12}`)}
                                    />
                                    <img
                                        src={ptbr_audio_icon}
                                        alt="Portuguese audio"
                                        className={styles["page71__audio-icon"]}
                                        onClick={() => playAudio(`pg71_audio${index + 12}p`)}
                                    />
                                </p>
                                <input
                                    type="text"
                                    className={styles["page71__input"]}
                                    value={userAnswers[index + 6]}
                                    onChange={(e) => handleInputChange(e.target.value, index + 6)}
                                />
                                <img
                                    src={eng_audio_icon}
                                    alt="English audio"
                                    className={styles["page71__audio-icon-input"]}
                                    onClick={() => playAudio(`pg71_audio${index + 25}`)}
                                />
                                <img
                                    src={ptbr_audio_icon}
                                    alt="Portuguese audio"
                                    className={styles["page71__audio-icon-input"]}
                                    onClick={() => playAudio(`pg71_audio${index + 25}p`)}
                                />
                                {results[index + 6] && (
                                    <div className={styles["page71__check-container"]}>
                                        <img src={results[index + 6]} alt="result" className={styles["page71__checkmark-image"]} />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className={styles["page71__buttons-container"]}>
                        <button className={styles["page71__check-button"]} onClick={handleCheckClick}>Check</button>
                        <button className={styles["page71__reset-button"]} onClick={handleReset}>Reset</button>
                        <button
                            className={styles["page71__answersKey-button"]}
                            onClick={() => setShowAnswersKey(v => !v)}
                            aria-expanded={showAnswersKey}
                            aria-controls="answers-key-box"
                        >
                            Answers Key
                        </button>
                    </div>

                    {showAnswersKey && (
                        <div
                            id="answers-key-box"
                            className={styles["page71__answersKey-box"]}
                            role="region"
                            aria-label="Gabarito completo"
                        >
                            {correctAnswers.map((texto, i) => (
                                <div key={i} className={styles["page71__answersKey-item"]}>
                                    <span className={styles["page71__answersKey-num"]}>{i + 1}.</span>
                                    <span className={styles["page71__answersKey-text"]}>{texto}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </main>

            <aside className={styles["page71__word-bank"]}>
                <div className={styles["page71__word-bank-container"]}>
                    <div className={styles["page71__word-bank-header"]}>
                        <img className={styles["page71__aside-img"]} onClick={() => playAudio("bell")} src={campainha} alt="" />
                        <p>Work Bank</p>
                    </div>
                    <div className={styles["page71__word-bank-content"]}>
                        <div className={styles["page71__word-row"]}>
                            <div className={styles["page71__word-column"]}>
                                <p>
                                    <strong>
                                        Hello/Hi
                                        <img
                                            src={eng_audio_icon}
                                            alt="English Audio"
                                            className={styles["page71__icon"]}
                                            onClick={() => playAudio('pg71_audio32e')}
                                        />
                                    </strong>
                                    <span>Olá/Oi</span>
                                </p>
                                <p>
                                    <strong>
                                        Good morning
                                        <img
                                            src={eng_audio_icon}
                                            alt="English Audio"
                                            className={styles["page71__icon"]}
                                            onClick={() => playAudio('pg71_audio33e')}
                                        />
                                    </strong>
                                    <span>Bom dia</span>
                                </p>
                            </div>
                            <div className={styles["page71__word-column"]}>
                                <p>
                                    <strong>
                                        Good afternoon
                                        <img
                                            src={eng_audio_icon}
                                            alt="English Audio"
                                            className={styles["page71__icon"]}
                                            onClick={() => playAudio('pg71_audio34e')}
                                        />
                                    </strong>
                                    <span>Boa tarde</span>
                                </p>
                                <p>
                                    <strong>
                                        Good evening
                                        <img
                                            src={eng_audio_icon}
                                            alt="English Audio"
                                            className={styles["page71__icon"]}
                                            onClick={() => playAudio('pg71_audio35e')}
                                        />
                                    </strong>
                                    <span>Boa noite</span>
                                </p>
                            </div>
                            <div className={styles["page71__word-column"]}>
                                <p>
                                    <strong>
                                        Bye
                                        <img
                                            src={eng_audio_icon}
                                            alt="English Audio"
                                            className={styles["page71__icon"]}
                                            onClick={() => playAudio('pg71_audio36e')}
                                        />
                                    </strong>
                                    <span>Tchau</span>
                                </p>
                                <p>
                                    <strong>
                                        Goodbye
                                        <img
                                            src={eng_audio_icon}
                                            alt="English Audio"
                                            className={styles["page71__icon"]}
                                            onClick={() => playAudio('pg71_audio37e')}
                                        />
                                    </strong>
                                    <span>Adeus</span>
                                </p>
                                <p>
                                    <strong>
                                        See you (see ya)
                                        <img
                                            src={eng_audio_icon}
                                            alt="English Audio"
                                            className={styles["page71__icon"]}
                                            onClick={() => playAudio('pg71_audio38e')}
                                        />
                                    </strong>
                                    <span>Até logo</span>
                                </p>
                            </div>
                            <div className={styles["page71__word-column"]}>
                                <p>
                                    <strong>
                                        See you later
                                        <img
                                            src={eng_audio_icon}
                                            alt="English Audio"
                                            className={styles["page71__icon"]}
                                            onClick={() => playAudio('pg71_audio39e')}
                                        />
                                    </strong>
                                    <span>Até mais tarde</span>
                                </p>
                                <p>
                                    <strong>
                                        Good night
                                        <img
                                            src={eng_audio_icon}
                                            alt="English Audio"
                                            className={styles["page71__icon"]}
                                            onClick={() => playAudio('pg71_audio40e')}
                                        />
                                    </strong>
                                    <span>Boa noite</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    );
};

export default Pagina71;

