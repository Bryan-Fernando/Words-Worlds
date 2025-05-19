import React, { useState } from 'react';

import styles from './pagina74.module.css';

import correct_icon from '../assets/icons/correct_icon.webp';
import wrong_icon from '../assets/icons/wrong_icon.webp';
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';
import pg74IconNotes from '../assets/icons/notes_icon.webp';
import slow_audio_icon from '../assets/icons/slow_audio_icon.webp';

import pagina74_imagem1 from '../assets/images/pagina74_imagem1.webp';
import pagina74_imagem2 from '../assets/images/pagina74_imagem2.webp';

import global_learning_le_e from '../assets/audios/global_learning_le_e.mp3';
import global_learning_le_p from '../assets/audios/global_learning_le_p.mp3';
import global_affirmativee from '../assets/audios/global_affirmativee.mp3';
import global_affirmativep from '../assets/audios/global_affirmativep.mp3';
import global_negativee from '../assets/audios/global_negativee.mp3';
import global_negativep from '../assets/audios/global_negativep.mp3';
import pg74_audio1 from '../assets/audios/pg74_audio1.mp3';
import pg74_audio2 from '../assets/audios/pg74_audio2.mp3';
import pg74_audio3 from '../assets/audios/pg74_audio3.mp3';
import pg74_audio4 from '../assets/audios/pg74_audio4.mp3';
import pg74_audio5 from '../assets/audios/pg74_audio5.mp3';
import pg74_audio6 from '../assets/audios/pg74_audio6.mp3';
import pg74_audio7 from '../assets/audios/pg74_audio7.mp3';
import pg74_audio8 from '../assets/audios/pg74_audio8.mp3';
import pg74_audio9 from '../assets/audios/pg74_audio9.mp3';
import pg74_audio10 from '../assets/audios/pg74_audio10.mp3';
import pg74_audio1p from '../assets/audios/pg74_audio1p.mp3';
import pg74_audio2p from '../assets/audios/pg74_audio2p.mp3';
import pg74_audio3p from '../assets/audios/pg74_audio3p.mp3';
import pg74_audio4p from '../assets/audios/pg74_audio4p.mp3';
import pg74_audio5p from '../assets/audios/pg74_audio5p.mp3';
import pg74_audio6p from '../assets/audios/pg74_audio6p.mp3';
import pg74_audio7p from '../assets/audios/pg74_audio7p.mp3';
import pg74_audio8p from '../assets/audios/pg74_audio8p.mp3';
import pg74_audio9p from '../assets/audios/pg74_audio9p.mp3';
import pg74_audio10p from '../assets/audios/pg74_audio10p.mp3';

const audioMap = {
    global_learning_le_e,
    global_learning_le_p,
    global_affirmativee,
    global_affirmativep,
    global_negativee,
    global_negativep,
    pg74_audio1,
    pg74_audio2,
    pg74_audio3,
    pg74_audio4,
    pg74_audio5,
    pg74_audio6,
    pg74_audio7,
    pg74_audio8,
    pg74_audio9,
    pg74_audio10,
    pg74_audio1p,
    pg74_audio2p,
    pg74_audio3p,
    pg74_audio4p,
    pg74_audio5p,
    pg74_audio6p,
    pg74_audio7p,
    pg74_audio8p,
    pg74_audio9p,
    pg74_audio10p,

};


const pagina74 = () => {
    const [inputValues, setInputValues] = useState(Array(10).fill(''));
    const [results, setResults] = useState(Array(10).fill(null));
    const [isSpeedReduced, setIsSpeedReduced] = useState({});

    const correctAnswers = [
        'is', 'is', 'is', 'is', 'are',
        'is not', 'are not', 'is not', 'is not', 'is not'
    ];


    const handleCheckClick = () => {
        const newResults = inputValues.map((value, index) =>
            value.trim() === correctAnswers[index]
        );
        setResults(newResults);
    };


    const handleInputChange = (value, index) => {
        setInputValues((prevValues) => {
            const newValues = [...prevValues];
            newValues[index] = value;
            return newValues;
        });
    };

    const playAudio = (audioKey) => {
        if (audioMap[audioKey]) {
            const audio = new Audio(audioMap[audioKey]);

            const speed = isSpeedReduced[audioKey] ? 0.6 : 1;
            audio.playbackRate = speed;

            audio.play().catch((error) => console.error("Erro ao reproduzir o áudio:", error));
        } else {
            console.warn(`Áudio não encontrado para: ${audioKey}`);
        }
    };

    const toggleSpeedReduction = (audioKey) => {
        setIsSpeedReduced((prevState) => ({
            ...prevState,
            [audioKey]: !prevState[audioKey]
        }));
    };


    return (
        <div className={styles["page74__container"]}>
            <header className={styles["page74__header"]}>
                <h1 className={styles["page74__h1"]}>
                    Learning Language Exercises
                    <img
                        src={eng_audio_icon}
                        alt="English audio"
                        className={styles["page74__header-icon"]}
                        onClick={() => playAudio("global_learning_le_e")}
                    />
                    <img
                        src={ptbr_audio_icon}
                        alt="Portuguese audio"
                        className={styles["page74__header-icon"]}
                        onClick={() => playAudio("global_learning_le_p")}
                    />
                </h1>
                <h2 className={styles["page74__h2"]}>
                    Complete the sentences in the Simple Present Form of Verb Be <br /> Complete as frases no Presente Simples do verbo "To Be" (ser/estar).
                </h2>
            </header>
            <main className={styles["page74__main"]}>
                <div className={styles["page74__tabela-afirmativa-container"]}>
                    <div className={styles["page74__table-header-afirmativa"]}>AFIRMATIVA</div>
                    <table className={styles["page74__styled-table-afirmativa"]}>
                        <thead className={styles["page74__thead"]}>
                            <tr className={styles["page74__celula-table"]}>
                                <th>Introdução</th>
                                <th>Sujeito</th>
                                <th>Verbo <br /> Auxiliar</th>
                                <th>Advérbio</th>
                                <th>Verbo(s)</th>
                                <th>Objeto <br /> Complemento</th>
                            </tr>
                        </thead>
                    </table>
                </div>
                <div className={styles["page74__container-questoes"]}>
                    <div className={styles["page74__questions1"]}>
                        <p className={styles["page74__a-titulo-question"]}>
                            Affirmative:
                            <img
                                src={eng_audio_icon}
                                alt="English audio"
                                className={styles["page74__header-icon"]}
                                onClick={() => playAudio("global_affirmativee")}
                            />
                            <img
                                src={ptbr_audio_icon}
                                alt="Portuguese audio"
                                className={styles["page74__header-icon"]}
                                onClick={() => playAudio("global_affirmativep")}
                            />
                        </p>
                        {[
                            "The weather ____ beautiful today.",
                            "My cat ____ playful in the morning.",
                            "Mary ____ my best friend.",
                            "This book ____ interesting.",
                            "The flowers ____ blooming in the garden."
                        ].map((question, index) => {
                            const audioKey = `page74_audio${index + 1}`;

                            return (
                                <div key={index} className={styles["page74__question"]}>
                                    <span>
                                        <em>
                                            <strong>{String.fromCharCode(97 + index)}.</strong> {question.split('____')[0]}
                                        </em>
                                    </span>
                                    <div className={styles["page74__input-container"]}>
                                        <input
                                            type="text"
                                            value={inputValues[index]}
                                            onChange={(e) => handleInputChange(e.target.value, index)}
                                            className={styles["page74__input-box"]}
                                        />
                                    </div>
                                    <span><em>{question.split('____')[1]}</em></span>
                                    <div className={styles["page74__icons-container"]}>
                                        {results[index] !== null && (
                                            <img
                                                src={results[index] ? correct_icon : wrong_icon}
                                                alt={results[index] ? "Correct" : "Incorrect"}
                                                className={styles["page74__checkmark-image"]}
                                            />
                                        )}
                                        <img
                                            src={eng_audio_icon}
                                            alt="Audio Icon"
                                            className={styles["page74__additional-icon"]}
                                            onClick={() => playAudio(audioKey)}
                                        />
                                        <img
                                            src={ptbr_audio_icon}
                                            alt="Portuguese Audio"
                                            className={styles["page74__additional-icon"]}
                                            onClick={() => playAudio(`${audioKey}p`)}
                                        />
                                        <img
                                            src={slow_audio_icon}
                                            alt="Volume Reduced Icon"
                                            className={`${styles["page74__additional-icon"]} ${isSpeedReduced[audioKey] ? styles["page74__pulsing"] : ''}`}
                                            onClick={() => toggleSpeedReduction(audioKey)}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className={styles["page74__container-imagem"]}>
                        <img className={styles["page74__imagem"]} src={pagina74_imagem1} alt="" />
                    </div>
                </div>
                <aside className={styles["page74__aside"]}>
                    <div className={styles["page74__aside-container"]}>
                        <div className={styles["page74__aside-notes1"]}>
                            <img className={styles["page74__aside-img-notes"]} src={pg74IconNotes} alt="" />
                            <p>Study Note</p>
                        </div>
                        <div className={styles["page74__aside-notes2"]}>
                            <p>
                                In these sentences, "is" is used with singular subjects (the weather, my cat, Sarah, this book)
                                while "are" is used with plural subjects (the flowers).
                            </p>
                        </div>
                    </div>
                </aside>
                <div className={styles["page74__tabela-negativa-container"]}>
                    <div className={styles["page74__table-header-negativa"]}>NEGATIVA</div>
                    <table className={styles["page74__styled-table-negativa"]}>
                        <thead className={styles["page74__thead"]}>
                            <tr className={styles["page74__celula-table"]}>
                                <th>Introdução</th>
                                <th>Sujeito</th>
                                <th>Verbo <br /> Auxiliar</th>
                                <th><span style={{ color: 'red' }}>Not</span> <br />Advérbio</th>
                                <th>Verbo(s)</th>
                                <th>Objeto <br /> Complemento</th>
                            </tr>
                        </thead>
                    </table>
                </div>


                <div className={styles["page74__container-questoes"]}>

                    <div className={styles["page74__questions2"]}>
                        <p className={styles["page74__a-titulo-question"]}>
                            Negative:
                            <img
                                src={eng_audio_icon}
                                alt="English audio"
                                className={styles["page74__header-icon"]}
                                onClick={() => playAudio("global_negativee")}
                            />
                            <img
                                src={ptbr_audio_icon}
                                alt="Portuguese audio"
                                className={styles["page74__header-icon"]}
                                onClick={() => playAudio("global_negativep")}
                            />
                        </p>

                        {[
                            "My dog ____ aggressive.",
                            "The children ____ quiet during class.",
                            "The sky ____ clear at night.",
                            "This restaurant ____ expensive.",
                            "The movie ____ boring."
                        ].map((question, index) => {
                            const audioKey = `page74_audio${index + 6}`;

                            return (
                                <div key={index + 5} className={styles["page74__question"]}>
                                    <span>
                                        <em>
                                            <strong>{String.fromCharCode(102 + index)}.</strong> {question.split('____')[0]}
                                        </em>
                                    </span>
                                    <div className={styles["page74__input-container"]}>
                                        <input
                                            type="text"
                                            value={inputValues[index + 5]}
                                            onChange={(e) => handleInputChange(e.target.value, index + 5)}
                                            className={styles["page74__input-box"]}
                                        />
                                    </div>
                                    <span><em>{question.split('____')[1]}</em></span>
                                    <div className={styles["page74__icons-container"]}>
                                        {results[index + 5] !== null && (
                                            <img
                                                src={results[index + 5] ? correct_icon : wrong_icon}
                                                alt={results[index + 5] ? "Correct" : "Incorrect"}
                                                className={styles["page74__checkmark-image"]}
                                            />
                                        )}
                                        <img
                                            src={eng_audio_icon}
                                            alt="Audio Icon"
                                            className={styles["page74__additional-icon"]}
                                            onClick={() => playAudio(audioKey)}
                                        />
                                        <img
                                            src={ptbr_audio_icon}
                                            alt="Portuguese Audio"
                                            className={styles["page74__additional-icon"]}
                                            onClick={() => playAudio(`${audioKey}p`)}
                                        />
                                        <img
                                            src={slow_audio_icon}
                                            alt="Volume Reduced Icon"
                                            className={`${styles["page74__additional-icon"]} ${isSpeedReduced[audioKey] ? styles["page74__pulsing"] : ''}`}
                                            onClick={() => toggleSpeedReduction(audioKey)}
                                        />
                                    </div>
                                </div>
                            );
                        })}

                    </div>
                    <div className={styles["page74__container-imagem"]}>
                        <img className={styles["page74__imagem"]} src={pagina74_imagem2} alt="" />
                    </div>
                </div>
                <aside className={styles["page74__aside"]}>
                    <div className={styles["page74__aside-container"]}>
                        <div className={styles["page74__aside-notes1"]}>
                            <img className={styles["page74__aside-img-notes"]} src={pg74IconNotes} alt="" />
                            <p>Study Note</p>
                        </div>
                        <div className={styles["page74__aside-notes2"]}>
                            <p>
                                <span style={{ color: '#8a1720' }}>"Not"</span> is used to form negative sentences. The verb "be" is conjugated as <span style={{ color: '#8a1720' }}> "am not"</span> for the first
                                person singular (I), <span style={{ color: '#8a1720' }}>"is not"</span> for singular subjects (my dog, the sky, this restaurant, the movie),
                                and <span style={{ color: '#8a1720' }}>"are not"</span> for plural subjects (the children)
                            </p>
                        </div>
                    </div>
                </aside>
                <button className={styles["page74__check-button"]} onClick={handleCheckClick}><em>Check</em></button>

            </main>
        </div>
    );
};

export default pagina74;
