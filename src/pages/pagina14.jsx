import React, { useState, useRef } from 'react';

import styles from './pagina14.module.css';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';
import white_play_icon from '../assets/icons/white_play_icon.png'

import global_verbo_to_be from '../assets/audios/global_verbo_to_be.mp3';
import global_grammar from '../assets/audios/global_grammar.mp3';
import global_simple_present from '../assets/audios/global_simple_present.mp3';
import afirmativaAudio from '../assets/audios/afirmativa.mp3';
import sujeitoAudio from '../assets/audios/sujeito.mp3';
import verbo_auxiliarAudio from '../assets/audios/verbo_auxiliar.mp3';
import adverbioAudio from '../assets/audios/adverbio.mp3';
import verboAudio from '../assets/audios/verbo.mp3';
import objeto_complemento_audio from '../assets/audios/objeto_complemento.mp3';
import traducaoAudio from '../assets/audios/traducao.mp3';
import pg14Audio1 from '../assets/audios/pg14_audio1.mp3';
import pg14Audio2 from '../assets/audios/pg14_audio2.mp3';
import pg14Audio3 from '../assets/audios/pg14_audio3.mp3';
import traducaoAudio1 from '../assets/audios/pg14_trad1.mp3';
import traducaoAudio2 from '../assets/audios/pg14_trad2.mp3';
import traducaoAudio3 from '../assets/audios/pg14_trad3.mp3';

const Pagina14 = () => {
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
            <div className={styles["page14__container"]}>
                <header className={styles["page14__header"]}>
                    <h1 className={styles["page14__audio-text"]}>
                        Grammar
                        <img
                            src={eng_audio_icon}
                            alt="English Audio"
                            className={styles["page14__icon"]}
                            onClick={() => playAudio(global_grammar)}
                        />
                    </h1>

                    <h2 className={styles["page14__audio-text"]} style={{ color: "black" }}>
                        Simple Present (Presente Simples)
                        <img
                            src={eng_audio_icon}
                            alt="English Audio"
                            className={styles["page14__icon"]}
                            onClick={() => playAudio(global_simple_present)}
                        />
                    </h2>

                    <h3 className={styles["page14__audio-text"]}>
                        Verbo To Be (Ser, Estar, Ou Ter Somente Para Idade)
                        
                    </h3>
                </header>

                <main className={styles["page14__main"]}>
                    <div>
                        <div
                            className={styles["page14__table-header"]}
                            onClick={() => playAudio(afirmativaAudio)}
                            style={{ cursor: "pointer" }}
                        >
                            <img
                                src={white_play_icon}
                                alt="White icon"
                                className={styles["page14__icon-left"]}
                            />
                            AFFIRMATIVE
                        </div>

                        <table className={styles["page14__table"]}>
                            <colgroup>
                                <col className={styles["page14__table-subject"]} />
                                <col className={styles["page14__table-auxiliary"]} />
                                <col className={styles["page14__table-adverb"]} />
                                <col className={styles["page14__table-verb"]} />
                                <col className={styles["page14__table-complement"]} />
                                <col className={styles["page14__table-translation"]} />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th onClick={() => playAudio(sujeitoAudio)} style={{ cursor: "pointer" }}>
                                        Subject
                                    </th>
                                    <th onClick={() => playAudio(verbo_auxiliarAudio)} style={{ cursor: "pointer" }}>
                                        Auxiliary <br /> Verb
                                    </th>
                                    <th onClick={() => playAudio(adverbioAudio)} style={{ cursor: "pointer" }}>
                                        Adverb
                                    </th>
                                    <th onClick={() => playAudio(verboAudio)} style={{ cursor: "pointer" }}>
                                        Verb(s)
                                    </th>
                                    <th onClick={() => playAudio(objeto_complemento_audio)} style={{ cursor: "pointer" }}>
                                        Object <br /> Complement
                                    </th>
                                    <th onClick={() => playAudio(traducaoAudio)} style={{ cursor: "pointer" }}>
                                        Translation
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className={styles["page14__table-subject"]} style={{ textAlign: "center" }}>
                                        He
                                    </td>
                                    <td className={styles["page14__table-auxiliary"]} style={{ textAlign: "center" }}>
                                        is
                                    </td>
                                    <td className={styles["page14__table-adverb"]}></td>
                                    <td className={styles["page14__table-verb"]}></td>
                                    <td className={styles["page14__table-complement"]}>
                                        Mr. Smith{" "}
                                        <img
                                            src={eng_audio_icon}
                                            alt="Play English sentence"
                                            className={styles["page14__icon"]}
                                            onClick={() => playAudio(pg14Audio1)}
                                        />
                                    </td>
                                    <td className={styles["page14__table-translation"]}>
                                        Ele é o senhor Smith{" "}
                                        <img
                                            src={ptbr_audio_icon}
                                            alt="Reproduzir tradução em português"
                                            className={styles["page14__icon"]}
                                            onClick={() => playAudio(traducaoAudio1)}
                                        />
                                    </td>
                                </tr>

                                <tr>
                                    <td className={styles["page14__table-subject"]} style={{ textAlign: "center" }}>
                                        He
                                    </td>
                                    <td className={styles["page14__table-auxiliary"]} style={{ textAlign: "center" }}>
                                        is
                                    </td>
                                    <td className={styles["page14__table-adverb"]}></td>
                                    <td className={styles["page14__table-verb"]}></td>
                                    <td className={styles["page14__table-complement"]}>
                                        at the bank{" "}
                                        <img
                                            src={eng_audio_icon}
                                            alt="Play English sentence"
                                            className={styles["page14__icon"]}
                                            onClick={() => playAudio(pg14Audio2)}
                                        />
                                    </td>
                                    <td className={styles["page14__table-translation"]}>
                                        Ele está no banco{" "}
                                        <img
                                            src={ptbr_audio_icon}
                                            alt="Reproduzir tradução em português"
                                            className={styles["page14__icon"]}
                                            onClick={() => playAudio(traducaoAudio2)}
                                        />
                                    </td>
                                </tr>

                                <tr>
                                    <td className={styles["page14__table-subject"]} style={{ textAlign: "center" }}>
                                        He
                                    </td>
                                    <td className={styles["page14__table-auxiliary"]} style={{ textAlign: "center" }}>
                                        is
                                    </td>
                                    <td className={styles["page14__table-adverb"]}></td>
                                    <td className={styles["page14__table-verb"]}></td>
                                    <td className={styles["page14__table-complement"]}>
                                        29 years old{" "}
                                        <img
                                            src={eng_audio_icon}
                                            alt="Play English sentence"
                                            className={styles["page14__icon"]}
                                            onClick={() => playAudio(pg14Audio3)}
                                        />
                                    </td>
                                    <td className={styles["page14__table-translation"]}>
                                        Ele tem 29 anos{" "}
                                        <img
                                            src={ptbr_audio_icon}
                                            alt="Reproduzir tradução em português"
                                            className={styles["page14__icon"]}
                                            onClick={() => playAudio(traducaoAudio3)}
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <table className={styles["page14__table"]}>
                            <colgroup>
                                <col className={styles["page14__table-subject"]} />
                                <col className={styles["page14__table-auxiliary"]} />
                                <col className={styles["page14__table-adverb"]} />
                                <col className={styles["page14__table-verb"]} />
                                <col className={styles["page14__table-complement"]} />
                                <col className={styles["page14__table-translation"]} />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th onClick={() => playAudio(sujeitoAudio)} style={{ cursor: "pointer" }}>
                                        Subject
                                    </th>
                                    <th onClick={() => playAudio(verbo_auxiliarAudio)} style={{ cursor: "pointer" }}>
                                        Auxiliary <br /> Verb
                                    </th>
                                    <th onClick={() => playAudio(adverbioAudio)} style={{ cursor: "pointer" }}>
                                        Adverb
                                    </th>
                                    <th onClick={() => playAudio(verboAudio)} style={{ cursor: "pointer" }}>
                                        Verb(s)
                                    </th>
                                    <th onClick={() => playAudio(objeto_complemento_audio)} style={{ cursor: "pointer" }}>
                                        Object <br /> Complement
                                    </th>
                                    <th onClick={() => playAudio(traducaoAudio)} style={{ cursor: "pointer" }}>
                                        Translation
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {inputValues.map((row, rowIndex) => (
                                    <tr key={rowIndex}>
                                        {row.map((value, colIndex) => (
                                            <td key={colIndex}>
                                                <textarea
                                                    value={value}
                                                    onChange={(e) => handleInputChange(rowIndex, colIndex, e)}
                                                    className={styles["page14__table-input-cell"]}
                                                    rows="1"
                                                    style={{
                                                        resize: "none",
                                                        overflowWrap: "break-word",
                                                        wordWrap: "break-word",
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

export default Pagina14;
