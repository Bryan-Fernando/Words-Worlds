import React, { useState } from 'react';

import styles from './pagina99.module.css';

import wrong_icon from '../assets/icons/wrong_icon.webp';
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';
import slow_audio_icon from '../assets/icons/slow_audio_icon.webp';
import correct_icon from '../assets/icons/correct_icon.webp';

import pagina99_imagem1 from '../assets/images/pagina99_imagem1.webp';

import global_learning_le_e from '../assets/audios/global_learning_le_e.mp3';
import global_learning_le_p from '../assets/audios/global_learning_le_p.mp3';
import pg99_audio1e from '../assets/audios/pg99_audio1e.mp3';
import pg99_audio1p from '../assets/audios/pg99_audio1p.mp3';
import pg99_audio2 from '../assets/audios/pg99_audio2.mp3';
import pg99_audio3 from '../assets/audios/pg99_audio3.mp3';
import pg99_audio4 from '../assets/audios/pg99_audio4.mp3';
import pg99_audio5 from '../assets/audios/pg99_audio5.mp3';
import pg99_audio6 from '../assets/audios/pg99_audio6.mp3';
import pg99_audio7e from '../assets/audios/pg99_audio7e.mp3';
import pg99_audio7p from '../assets/audios/pg99_audio7p.mp3';
import pg99_audio8 from '../assets/audios/pg99_audio8.mp3';
import pg99_audio9 from '../assets/audios/pg99_audio9.mp3';
import pg99_audio10 from '../assets/audios/pg99_audio10.mp3';
import pg99_audio11 from '../assets/audios/pg99_audio11.mp3';
import pg99_audio12 from '../assets/audios/pg99_audio12.mp3';
import pg99_audio13e from '../assets/audios/pg99_audio13e.mp3';
import pg99_audio13p from '../assets/audios/pg99_audio13p.mp3';
import pg99_audio14 from '../assets/audios/pg99_audio14.mp3';
import pg99_audio15 from '../assets/audios/pg99_audio15.mp3';
import pg99_audio16 from '../assets/audios/pg99_audio16.mp3';
import pg99_audio17 from '../assets/audios/pg99_audio17.mp3';
import pg99_audio2p from '../assets/audios/pg99_audio2p.mp3';
import pg99_audio3p from '../assets/audios/pg99_audio3p.mp3';
import pg99_audio4p from '../assets/audios/pg99_audio4p.mp3';
import pg99_audio5p from '../assets/audios/pg99_audio5p.mp3';
import pg99_audio6p from '../assets/audios/pg99_audio6p.mp3';
import pg99_audio8p from '../assets/audios/pg99_audio8p.mp3';
import pg99_audio9p from '../assets/audios/pg99_audio9p.mp3';
import pg99_audio10p from '../assets/audios/pg99_audio10p.mp3';
import pg99_audio11p from '../assets/audios/pg99_audio11p.mp3';
import pg99_audio12p from '../assets/audios/pg99_audio12p.mp3';
import pg99_audio14p from '../assets/audios/pg99_audio14p.mp3';
import pg99_audio15p from '../assets/audios/pg99_audio15p.mp3';
import pg99_audio16p from '../assets/audios/pg99_audio16p.mp3';
import pg99_audio17p from '../assets/audios/pg99_audio17p.mp3';


const audioMap = {
    global_learning_le_e,
    global_learning_le_p,
    pg99_audio1e,
    pg99_audio1p,
    pg99_audio2,
    pg99_audio3,
    pg99_audio4,
    pg99_audio5,
    pg99_audio6,
    pg99_audio7e,
    pg99_audio7p,
    pg99_audio8,
    pg99_audio9,
    pg99_audio10,
    pg99_audio11,
    pg99_audio12,
    pg99_audio13e,
    pg99_audio13p,
    pg99_audio14,
    pg99_audio15,
    pg99_audio16,
    pg99_audio17,
    pg99_audio2p,
    pg99_audio3p,
    pg99_audio4p,
    pg99_audio5p,
    pg99_audio6p,
    pg99_audio8p,
    pg99_audio9p,
    pg99_audio10p,
    pg99_audio11p,
    pg99_audio12p,
    pg99_audio14p,
    pg99_audio15p,
    pg99_audio16p,
    pg99_audio17p,
};


const Pagina99 = () => {
    const [inputValues, setInputValues] = useState(
        Array(14).fill('').map((_, index) => (index >= 10 ? ['', ''] : ''))
    );
    const [results, setResults] = useState(Array(14).fill(null));
    const [isSpeedReduced, setIsSpeedReduced] = useState({});
    const [showAnswersKey, setShowAnswersKey] = useState(false);

    const correctAnswers = [
        "She doesn't like to swim in the pool",
        "They don't eat lunch together",
        "He doesn't watch TV in the evening",
        "The children don't play in the park after school",
        "I don't drink coffee in the morning",
        "doesn't like",
        "don't study",
        "doesn't play",
        "doesn't sleep",
        "don't watch",
        ["Doesn't", "like"],
        ["Don't", "play"],
        ["Doesn't", "drink"],
        ["Don't", "enjoy"]
    ];

    const normalize = (s) => (s ?? '').trim().toLowerCase();

    const handleCheckClick = () => {
        const newResults = inputValues.map((value, index) => {
            const key = correctAnswers[index];
            if (Array.isArray(key)) {
                const vArr = Array.isArray(value) ? value : [];
                return key.every((ans, subIndex) => normalize(vArr[subIndex]) === normalize(ans));
            }
            return normalize(value) === normalize(key);
        });
        setResults(newResults);
    };

    const handleReset = () => {
        setInputValues(Array(14).fill('').map((_, index) => (index >= 10 ? ['', ''] : '')));
        setResults(Array(14).fill(null));
        setShowAnswersKey(false);
    };

    const toggleAnswersKey = () => setShowAnswersKey((v) => !v);

    const handleInputChange = (value, index, subIndex = null) => {
        const newValues = [...inputValues];
        if (subIndex !== null) {
            if (!Array.isArray(newValues[index])) newValues[index] = ['', ''];
            newValues[index][subIndex] = value;
        } else {
            newValues[index] = value;
        }
        setInputValues(newValues);
    };

    const playAudio = (audioKey) => {
        if (audioMap[audioKey]) {
            const audio = new Audio(audioMap[audioKey]);
            const speed = isSpeedReduced[audioKey] ? 0.6 : 1;
            audio.playbackRate = speed;
            audio.play().catch((error) => console.error('Erro ao reproduzir o áudio:', error));
        } else {
            console.warn(`Áudio não encontrado para: ${audioKey}`);
        }
    };

    const toggleSpeedReduction = (audioKey) => {
        setIsSpeedReduced((prevState) => ({
            ...prevState,
            [audioKey]: !prevState[audioKey],
        }));
    };

    // Lista para o Answers Key (com rótulos 1.a–1.e, 2.a–2.e, 3.a–3.d)
    const answersKeyItems = [
        { label: '1.a', text: "She doesn't like to swim in the pool" },
        { label: '1.b', text: "They don't eat lunch together" },
        { label: '1.c', text: "He doesn't watch TV in the evening" },
        { label: '1.d', text: "The children don't play in the park after school" },
        { label: '1.e', text: "I don't drink coffee in the morning" },

        { label: '2.a', text: "doesn't like" },
        { label: '2.b', text: "don't study" },
        { label: '2.c', text: "doesn't play" },
        { label: '2.d', text: "doesn't sleep" },
        { label: '2.e', text: "don't watch" },

        { label: '3.a', text: "Doesn't like" },
        { label: '3.b', text: "Don't play" },
        { label: '3.c', text: "Doesn't drink" },
        { label: '3.d', text: "Don't enjoy" },
    ];

    return (
        <div className={styles['page99__container']}>
            <header className={styles['page99__header']}>
                <h1 className={styles['page99__h1']}>
                    Learning Language Exercises
                    <img
                        src={eng_audio_icon}
                        alt="English audio"
                        className={styles['page99__header-icon']}
                        onClick={() => playAudio('global_learning_le_e')}
                    />
                    <img
                        src={ptbr_audio_icon}
                        alt="Portuguese audio"
                        className={styles['page99__header-icon']}
                        onClick={() => playAudio('global_learning_le_p')}
                    />
                    <br />
                    Simple Present
                </h1>
            </header>

            <main className={styles['page99__main']}>
                <div className={styles['page99__container-imagem']}>
                    <img className={styles['page99__imagem']} src={pagina99_imagem1} alt="" />
                </div>

                <div className={styles['page99__primeiras-questoes']}>
                    <div className={styles['page99__tabela-negativa-container']}>
                        <div className={styles['page99__table-header-negativa']}>NEGATIVA</div>
                        <table className={styles['page99__styled-table-negativa']}>
                            <thead className={styles['page99__thead']}>
                                <tr className={styles['page99__table-row']}>
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

                    <p className={styles['page99__a-titulo-question']}>
                        1. Change into the <span style={{ color: 'blue' }}>negative contracted</span> form:
                        <img
                            src={eng_audio_icon}
                            alt="English audio"
                            className={styles['page99__header-icon']}
                            onClick={() => playAudio('pg99_audio1e')}
                        />
                        <img
                            src={ptbr_audio_icon}
                            alt="Portuguese audio"
                            className={styles['page99__header-icon']}
                            onClick={() => playAudio('pg99_audio1p')}
                        />
                    </p>

                    <div className={styles['page99__container-questoes']}>
                        <div className={styles['page99__questions-1']}>
                            {[
                                'She likes to swim in the pool. ____',
                                'They eat lunch together every day. ____',
                                'He watches TV in the evening. ____',
                                'The children play in the park after school. ____',
                                'I drink coffee in the morning. ____',
                            ].map((question, index) => {
                                const audioKey = `pg99_audio${index + 2}`;
                                const audioKeyP = `pg99_audio${index + 2}p`;

                                return (
                                    <div key={index} className={styles['page99__question']}>
                                        <span>
                                            <em>
                                                <strong>{String.fromCharCode(97 + index)}.</strong> {question.split('____')[0]}
                                            </em>
                                        </span>
                                        <div className={styles['page99__input-container']}>
                                            <input
                                                type="text"
                                                value={inputValues[index]}
                                                onChange={(e) => handleInputChange(e.target.value, index)}
                                                className={styles['page99__large-input-box']}
                                            />
                                        </div>
                                        <div className={styles['page99__icons-container']}>
                                            {results[index] !== null && (
                                                <img
                                                    src={results[index] ? correct_icon : wrong_icon}
                                                    alt={results[index] ? 'Correct' : 'Incorrect'}
                                                    className={styles['page99__checkmark-image']}
                                                />
                                            )}
                                            <img
                                                src={eng_audio_icon}
                                                alt="Audio Icon"
                                                className={styles['page99__additional-icon']}
                                                onClick={() => playAudio(audioKey)}
                                            />
                                            <img
                                                src={ptbr_audio_icon}
                                                alt="Audio Icon"
                                                className={styles['page99__additional-icon']}
                                                onClick={() => playAudio(audioKeyP)}
                                            />
                                            <img
                                                src={slow_audio_icon}
                                                alt="Volume Reduced Icon"
                                                className={`${styles['page99__additional-icon']} ${isSpeedReduced[audioKey] ? styles['page99__pulsing'] : ''
                                                    }`}
                                                onClick={() => toggleSpeedReduction(audioKey)}
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className={styles['page99__container-questoes']}>
                        <div className={styles['page99__questions-1']}>
                            <p className={styles['page99__a-titulo-question']}>
                                2. Fill in the blanks with the <span style={{ color: 'blue' }}>negative contracted</span> form of the verbs:
                                <img
                                    src={eng_audio_icon}
                                    alt="English audio"
                                    className={styles['page99__header-icon']}
                                    onClick={() => playAudio('pg99_audio7e')}
                                />
                                <img
                                    src={ptbr_audio_icon}
                                    alt="Portuguese audio"
                                    className={styles['page99__header-icon']}
                                    onClick={() => playAudio('pg99_audio7p')}
                                />
                            </p>

                            {[
                                'She ____ (not like) to eat spicy food.',
                                'They ____ (not study) French at school.',
                                'He ____ (not play) video games on weekdays.',
                                'The cat ____ (not sleep) on the bed.',
                                'We ____ (not watch) TV after dinner.',
                            ].map((question, index) => {
                                const audioKey = `pg99_audio${index + 8}`;
                                const audioKeyP = `pg99_audio${index + 8}p`;
                                const parts = question.split('____');

                                return (
                                    <div key={index + 5} className={styles['page99__question']}>
                                        <span>
                                            <em>
                                                <strong>{String.fromCharCode(97 + index)}.</strong> {parts[0]}
                                            </em>
                                        </span>
                                        <div className={styles['page99__input-container']}>
                                            <input
                                                type="text"
                                                value={inputValues[index + 5]}
                                                onChange={(e) => handleInputChange(e.target.value, index + 5)}
                                                className={styles['page99__input-box']}
                                            />
                                        </div>

                                        {parts.length > 1 && (
                                            <span>
                                                <em>{parts[1]}</em>
                                            </span>
                                        )}

                                        <div className={styles['page99__icons-container']}>
                                            {results[index + 5] !== null && (
                                                <img
                                                    src={results[index + 5] ? correct_icon : wrong_icon}
                                                    alt={results[index + 5] ? 'Correct' : 'Incorrect'}
                                                    className={styles['page99__checkmark-image']}
                                                />
                                            )}
                                            <img
                                                src={eng_audio_icon}
                                                alt="Audio Icon"
                                                className={styles['page99__additional-icon']}
                                                onClick={() => playAudio(audioKey)}
                                            />
                                            <img
                                                src={ptbr_audio_icon}
                                                alt="Audio Icon"
                                                className={styles['page99__additional-icon']}
                                                onClick={() => playAudio(audioKeyP)}
                                            />
                                            <img
                                                src={slow_audio_icon}
                                                alt="Volume Reduced Icon"
                                                className={`${styles['page99__additional-icon']} ${isSpeedReduced[audioKey] ? styles['page99__pulsing'] : ''
                                                    }`}
                                                onClick={() => toggleSpeedReduction(audioKey)}
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className={styles['page99__tabela-interrogativa-container']}>
                        <div className={styles['page99__table-header-interrogativa']}>INTERROGATIVA NEGATIVA</div>
                        <table className={styles['page99__styled-table-interrogativa']}>
                            <thead>
                                <tr className={styles['page99__table-row']}>
                                    <th>Verbo Auxiliar</th>
                                    <th>Sujeito</th>
                                    <th>
                                        <span style={{ color: 'red' }}>Not</span> <br /> Adverb
                                    </th>
                                    <th>Verbo(s)</th>
                                    <th>Objeto Complemento</th>
                                </tr>
                            </thead>
                        </table>
                    </div>

                    <div className={styles['page99__container-questoes']}>
                        <div className={styles['page99__questions-2']}>
                            <p className={styles['page99__a-titulo-question']}>
                                3. Form negative interrogative questions in the <span style={{ color: 'blue' }}>contracted form.</span>
                                <img
                                    src={eng_audio_icon}
                                    alt="English audio"
                                    className={styles['page99__header-icon']}
                                    onClick={() => playAudio('pg99_audio13e')}
                                />
                                <img
                                    src={ptbr_audio_icon}
                                    alt="Portuguese audio"
                                    className={styles['page99__header-icon']}
                                    onClick={() => playAudio('pg99_audio13p')}
                                />
                            </p>

                            {[
                                '____ she ____ (not like) ice cream?',
                                '____ they ____ (not play) soccer on weekends?',
                                '____ he ____ (not drink) coffee in the morning?',
                                '____ you ____ (not enjoy) watching movies?',
                            ].map((question, index) => {
                                const parts = question.split('____');
                                const audioKey = `pg99_audio${index + 14}`;
                                const audioKeyP = `pg99_audio${index + 14}p`;

                                return (
                                    <div key={index + 10} className={styles['page99__question']}>
                                        <span>
                                            <em>
                                                <strong>{String.fromCharCode(97 + index)}.</strong>
                                            </em>
                                        </span>
                                        {parts.map((part, fieldIndex) => (
                                            <React.Fragment key={fieldIndex}>
                                                {fieldIndex === 0 && (
                                                    <span className={styles['page99__spam-input']}>
                                                        <input
                                                            type="text"
                                                            value={
                                                                Array.isArray(inputValues[index + 10])
                                                                    ? inputValues[index + 10][fieldIndex] || ''
                                                                    : ''
                                                            }
                                                            onChange={(e) => handleInputChange(e.target.value, index + 10, fieldIndex)}
                                                            className={styles['page99__input-box']}
                                                        />
                                                    </span>
                                                )}
                                                {fieldIndex > 0 && fieldIndex < parts.length - 1 && (
                                                    <>
                                                        <span>{part}</span>
                                                        <span className={styles['page99__spam-input']}>
                                                            <input
                                                                type="text"
                                                                value={
                                                                    Array.isArray(inputValues[index + 10])
                                                                        ? inputValues[index + 10][fieldIndex] || ''
                                                                        : ''
                                                                }
                                                                onChange={(e) => handleInputChange(e.target.value, index + 10, fieldIndex)}
                                                                className={styles['page99__input-box']}
                                                            />
                                                        </span>
                                                    </>
                                                )}
                                                {fieldIndex === parts.length - 1 && <span>{part}</span>}
                                            </React.Fragment>
                                        ))}
                                        <div className={styles['page99__icons-container']}>
                                            {results[index + 10] !== null && (
                                                <img
                                                    src={results[index + 10] ? correct_icon : wrong_icon}
                                                    alt={results[index + 10] ? 'Correct' : 'Incorrect'}
                                                    className={styles['page99__checkmark-image']}
                                                />
                                            )}
                                            <img
                                                src={eng_audio_icon}
                                                alt="Audio Icon"
                                                className={styles['page99__additional-icon']}
                                                onClick={() => playAudio(audioKey)}
                                            />
                                            <img
                                                src={ptbr_audio_icon}
                                                alt="Audio Icon"
                                                className={styles['page99__additional-icon']}
                                                onClick={() => playAudio(audioKeyP)}
                                            />
                                            <img
                                                src={slow_audio_icon}
                                                alt="Volume Reduced Icon"
                                                className={`${styles['page99__additional-icon']} ${isSpeedReduced[audioKey] ? styles['page99__pulsing'] : ''
                                                    }`}
                                                onClick={() => toggleSpeedReduction(audioKey)}
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* AÇÕES (ordem: Check → Reset → Answers Key) */}
                <div className={styles['page99__actions']}>
                    <button className={styles['page99__check-button']} onClick={handleCheckClick}>
                        <em>Check</em>
                    </button>

                    <button className={styles['page99__reset--button']} onClick={handleReset}>
                        <em>Reset</em>
                    </button>

                    <button
                        className={styles['page99__answersKey--button']}
                        onClick={toggleAnswersKey}
                        aria-pressed={showAnswersKey ? 'true' : 'false'}
                    >
                        <em>Answers Key</em>
                    </button>
                </div>

                {showAnswersKey && (
                    <div className={styles['page99__answersKey-box']}>
                        {answersKeyItems.map((item, idx) => (
                            <div key={idx} className={styles['page99__answersKey-item']}>
                                <div className={styles['page99__answersKey-num']}>{item.label}</div>
                                <div className={styles['page99__answersKey-text']}>{item.text}</div>
                            </div>
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
};

export default Pagina99;

