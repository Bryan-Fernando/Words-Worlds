import React, { useState, useRef } from 'react';

import styles from './pagina109.module.css';

import global_grammar from '../assets/audios/global_grammar.mp3';
import global_simple_present from '../assets/audios/global_simple_present.mp3';
import interrogativa_negativaAudio from '../assets/audios/interrogativa_n.mp3';
import verbo_auxiliarAudio from '../assets/audios/verbo_auxiliar.mp3';
import sujeitoAudio from '../assets/audios/sujeito.mp3';
import adverbioAudio from '../assets/audios/adverbio.mp3';
import verboAudio from '../assets/audios/verbo.mp3';
import objeto_complemento_audio from '../assets/audios/objeto_complemento.mp3';
import traducaoAudio from '../assets/audios/traducao.mp3';

import pg109_audio2 from '../assets/audios/pg109_audio2.mp3';
import pg109_audio3 from '../assets/audios/pg109_audio3.mp3';

import pg109_trad2 from '../assets/audios/pg109_trad2.mp3';
import pg109_trad3 from '../assets/audios/pg109_trad3.mp3';



const Pagina140 = () => {
    const [inputValues, setInputValues] = useState(
        Array(6).fill(Array(6).fill(''))
    );
    const currentAudioRef = useRef(null);

    const playAudio = (audioFile) => {
        if (currentAudioRef.current) {
            currentAudioRef.current.pause();
            currentAudioRef.current.currentTime = 0;
        }

        const audio = new Audio(audioFile);
        currentAudioRef.current = audio;
        audio.play();
    };

    const handleInputChange = (rowIndex, colIndex, e) => {
        const newValue = e.target.value;
        const updatedValues = inputValues.map((row, i) =>
            row.map((value, j) => (i === rowIndex && j === colIndex ? newValue : value))
        );
        setInputValues(updatedValues);
    };

    return (
        <div>
            <div className={styles["page109__container"]}>
                <header className={styles["page109__header"]}>
                    <h1
                        className={styles["page109__audio-text"]}
                        onClick={() => playAudio(global_grammar)}
                        style={{ cursor: 'pointer' }}
                    >
                        Grammar
                    </h1>
                    <h2
                        className={styles["page109__audio-text"]}
                        onClick={() => playAudio(global_simple_present)}
                        style={{ color: 'black', cursor: 'pointer' }}
                    >
                        Simple Present (Presente Simples)
                    </h2>
                </header>
                <main className={styles["page109__main"]}>
                    <div>
                        <div
                            className={styles["page109__table--header"]}
                            onClick={() => playAudio(interrogativa_negativaAudio)}
                            style={{ cursor: 'pointer' }}
                        >
                            NEGATIVE INTERROGATIVE
                        </div>
                        <table className={styles["page109__styled--table"]}>
                            <colgroup>
                                <col className={styles["page109__subject"]} />
                                <col className={styles["page109__auxiliary--verb"]} />
                                <col className={styles["page109__adverb"]} />
                                <col className={styles["page109__verb"]} />
                                <col className={styles["page109__object--complement"]} />
                                <col className={styles["page109__translation"]} />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th onClick={() => playAudio(verbo_auxiliarAudio)} style={{ cursor: 'pointer' }}>
                                        Auxiliary <br /> Verb
                                    </th>
                                    <th onClick={() => playAudio(sujeitoAudio)} style={{ cursor: 'pointer' }}>
                                        Subject
                                    </th>
                                    <th onClick={() => playAudio(adverbioAudio)} style={{ cursor: 'pointer' }}>
                                        'Not'<br /> Adverb
                                    </th>
                                    <th onClick={() => playAudio(verboAudio)} style={{ cursor: 'pointer' }}>
                                        Verb(s)
                                    </th>
                                    <th onClick={() => playAudio(objeto_complemento_audio)} style={{ cursor: 'pointer' }}>
                                        Object <br /> Complement
                                    </th>
                                    <th onClick={() => playAudio(traducaoAudio)} style={{ cursor: 'pointer' }}>
                                        Translation
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { verboAux: "Doesn't", sujeito: "he", adverbio: "", verbo: "work", complemento: "every day?", audio: pg109_audio2, tradAudio: pg109_trad2, traducao: "Ele não trabalha todos os dias?" },
                                    { verboAux: "Doesn't", sujeito: "she", adverbio: "", verbo: "work", complemento: "at home?", audio: pg109_audio3, tradAudio: pg109_trad3, traducao: "Ela não trabalha em casa?" },
                                ].map((linha, index) => (
                                    <tr key={index} onClick={() => playAudio(linha.audio)} style={{ cursor: 'pointer' }}>
                                        <td className={styles["page109__auxiliary--verb"]}>{linha.verboAux}</td>
                                        <td className={styles["page109__subject"]}>{linha.sujeito}</td>
                                        <td className={styles["page109__adverb"]}>{linha.adverbio}</td>
                                        <td className={styles["page109__verb"]}>{linha.verbo}</td>
                                        <td className={styles["page109__object--complement"]}>{linha.complemento}</td>
                                        <td className={styles["page109__translation"]} onClick={(e) => { e.stopPropagation(); playAudio(linha.tradAudio); }}>
                                            {linha.traducao}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <table className={styles["page109__styled--table"]}>
                            <colgroup>
                                <col className={styles["page109__subject"]} />
                                <col className={styles["page109__auxiliary--verb"]} />
                                <col className={styles["page109__adverb"]} />
                                <col className={styles["page109__verb"]} />
                                <col className={styles["page109__object--complement"]} />
                                <col className={styles["page109__translation"]} />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th onClick={() => playAudio(verbo_auxiliarAudio)} style={{ cursor: 'pointer' }}>
                                        Auxiliary <br /> Verb
                                    </th>
                                    <th onClick={() => playAudio(sujeitoAudio)} style={{ cursor: 'pointer' }}>Subject</th>
                                    <th onClick={() => playAudio(adverbioAudio)} style={{ cursor: 'pointer' }}>'Not'<br /> Adverb</th>
                                    <th onClick={() => playAudio(verboAudio)} style={{ cursor: 'pointer' }}>Verb(s)</th>
                                    <th onClick={() => playAudio(objeto_complemento_audio)} style={{ cursor: 'pointer' }}>
                                        Object <br /> Complement
                                    </th>
                                    <th onClick={() => playAudio(traducaoAudio)} style={{ cursor: 'pointer' }}>Translation</th>
                                </tr>
                            </thead>
                            <tbody>
                                {inputValues.map((row, rowIndex) => (
                                    <tr key={rowIndex}>
                                        {row.map((value, colIndex) => (
                                            <td key={colIndex}>
                                                <textarea
                                                    className={styles["page109__input--cell"]}
                                                    value={value}
                                                    onChange={(e) => handleInputChange(rowIndex, colIndex, e)}
                                                    rows="1"
                                                    style={{
                                                        resize: 'none',
                                                        overflowWrap: 'break-word',
                                                        wordWrap: 'break-word',
                                                    }}
                                                />
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Pagina140;
