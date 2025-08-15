import React, { useState, useRef } from 'react';

import styles from './pagina23.module.css';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';
import white_play_icon from '../assets/icons/white_play_icon.png'

import global_verbo_to_be from '../assets/audios/global_verbo_to_be.mp3';
import global_grammar from '../assets/audios/global_grammar.mp3';
import global_simple_present from '../assets/audios/global_simple_present.mp3';
import negativaAudio from '../assets/audios/negativa.mp3';
import sujeitoAudio from '../assets/audios/sujeito.mp3';
import verbo_auxiliarAudio from '../assets/audios/verbo_auxiliar.mp3';
import adverbioAudio from '../assets/audios/adverbio.mp3';
import verboAudio from '../assets/audios/verbo.mp3';
import objeto_complemento_audio from '../assets/audios/objeto_complemento.mp3';
import traducaoAudio from '../assets/audios/traducao.mp3';
import pg23Audio1 from '../assets/audios/pg23_audio1.mp3';
import pg23Audio2 from '../assets/audios/pg23_audio2.mp3';
import pg23Audio3 from '../assets/audios/pg23_audio3.mp3';
import pg23Audio4 from '../assets/audios/pg23_audio4.mp3';
import traducaoAudio1 from '../assets/audios/pg23_trad1.mp3';
import traducaoAudio2 from '../assets/audios/pg23_trad2.mp3';
import traducaoAudio3 from '../assets/audios/pg23_trad3.mp3';
import traducaoAudio4 from '../assets/audios/pg23_trad4.mp3';

const Pagina23 = () => {
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
            <div className={styles["page23__container"]}>
                <header className={styles["page23__header"]}>
                    <h1 className={styles["page23__audio-text"]}>
                        Grammar
                        <img
                            src={eng_audio_icon}
                            alt="English Audio"
                            className={styles["page23__icon"]}
                            onClick={() => playAudio(global_grammar)}
                        />
                    </h1>
                    <h2 className={styles["page23__audio-text"]} style={{ color: "black" }}>
                        Simple Present (Presente Simples)
                        <img
                            src={eng_audio_icon}
                            alt="English Audio"
                            className={styles["page23__icon"]}
                            onClick={() => playAudio(global_simple_present)}
                        />
                    </h2>
                    <h3 className={styles["page23__audio-text"]}>
                        Verbo To Be (Ser, Estar, Ou Ter Somente Para Idade)
                    </h3>
                </header>
                <main className={styles["page23__main"]}>
                    <div>
                        <div
                            className={styles["page23__table-header"]}
                            onClick={() => playAudio(negativaAudio)}
                            style={{ cursor: "pointer" }}
                        >
                            <img
                                src={white_play_icon}
                                alt="White icon"
                                className={styles["page23__icon--left"]}
                            />
                            NEGATIVE
                        </div>
                        <table className={styles["page23__table"]}>
                            <colgroup>
                                <col className={styles["page23__subject"]} />
                                <col className={styles["page23__auxiliary-verb"]} />
                                <col className={styles["page23__adverb"]} />
                                <col className={styles["page23__verb"]} />
                                <col className={styles["page23__objective-complement"]} />
                                <col className={styles["page23__translation"]} />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th onClick={() => playAudio(sujeitoAudio)} style={{ cursor: "pointer" }}>Subject</th>
                                    <th onClick={() => playAudio(verbo_auxiliarAudio)} style={{ cursor: "pointer" }}>
                                        Auxiliary <br /> Verb
                                    </th>
                                    <th onClick={() => playAudio(adverbioAudio)} style={{ cursor: "pointer" }}>
                                        <span style={{ color: "red" }}>'Not'</span><br /> Adverb
                                    </th>
                                    <th onClick={() => playAudio(verboAudio)} style={{ cursor: "pointer" }}>Verb(s)</th>
                                    <th onClick={() => playAudio(objeto_complemento_audio)} style={{ cursor: "pointer" }}>
                                        Object <br /> Complement
                                    </th>
                                    <th onClick={() => playAudio(traducaoAudio)} style={{ cursor: "pointer" }}>Translation</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className={styles["page23__subject"]} style={{ textAlign: "center" }}>It</td>
                                    <td className={styles["page23__auxiliary-verb"]} style={{ textAlign: "center" }}>is</td>
                                    <td className={styles["page23__adverb"]} style={{ textAlign: "center", color: "red" }}>not</td>
                                    <td className={styles["page23__verb"]}></td>
                                    <td className={styles["page23__objective-complement"]}>
                                        (hot){" "}
                                        <img
                                            src={eng_audio_icon}
                                            alt="Play English sentence"
                                            className={styles["page23__icon"]}
                                            onClick={() => playAudio(pg23Audio1)}
                                        />
                                    </td>
                                    <td className={styles["page23__translation"]}>
                                        <span style={{ color: "red" }}>Não</span> está quente{" "}
                                        <img
                                            src={ptbr_audio_icon}
                                            alt="Play Portuguese translation"
                                            className={styles["page23__icon"]}
                                            onClick={() => playAudio(traducaoAudio1)}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td className={styles["page23__subject"]} style={{ textAlign: "center" }}>It</td>
                                    <td className={styles["page23__auxiliary-verb"]} style={{ textAlign: "center" }}>is</td>
                                    <td className={styles["page23__adverb"]} style={{ textAlign: "center", color: "red" }}>not</td>
                                    <td className={styles["page23__verb"]}></td>
                                    <td className={styles["page23__objective-complement"]}>
                                        (next to the library){" "}
                                        <img
                                            src={eng_audio_icon}
                                            alt="Play English sentence"
                                            className={styles["page23__icon"]}
                                            onClick={() => playAudio(pg23Audio2)}
                                        />
                                    </td>
                                    <td className={styles["page23__translation"]}>
                                        <span style={{ color: "red" }}>Não</span> é / Fica ao lado da biblioteca{" "}
                                        <img
                                            src={ptbr_audio_icon}
                                            alt="Play Portuguese translation"
                                            className={styles["page23__icon"]}
                                            onClick={() => playAudio(traducaoAudio2)}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td className={styles["page23__subject"]} style={{ textAlign: "center" }}>It</td>
                                    <td className={styles["page23__auxiliary-verb"]} style={{ textAlign: "center", color: "red" }}>isn't</td>
                                    <td className={styles["page23__adverb"]}></td>
                                    <td className={styles["page23__verb"]}></td>
                                    <td className={styles["page23__objective-complement"]}>
                                        (3 years old){" "}
                                        <img
                                            src={eng_audio_icon}
                                            alt="Play English sentence"
                                            className={styles["page23__icon"]}
                                            onClick={() => playAudio(pg23Audio4)}
                                        />
                                    </td>
                                    <td className={styles["page23__translation"]}>
                                        <span style={{ color: "red" }}>Não</span> tem 3 anos{" "}
                                        <img
                                            src={ptbr_audio_icon}
                                            alt="Play Portuguese translation"
                                            className={styles["page23__icon"]}
                                            onClick={() => playAudio(traducaoAudio4)}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td className={styles["page23__subject"]} style={{ textAlign: "center" }}>It</td>
                                    <td className={styles["page23__auxiliary-verb"]} style={{ textAlign: "center", color: "red" }}>ain't</td>
                                    <td className={styles["page23__adverb"]}></td>
                                    <td className={styles["page23__verb"]}></td>
                                    <td className={styles["page23__objective-complement"]}>
                                        (okay){" "}
                                        <img
                                            src={eng_audio_icon}
                                            alt="Play English sentence"
                                            className={styles["page23__icon"]}
                                            onClick={() => playAudio(pg23Audio3)}
                                        />
                                    </td>
                                    <td className={styles["page23__translation"]}>
                                        <span style={{ color: "red" }}>Não</span> está bem{" "}
                                        <img
                                            src={ptbr_audio_icon}
                                            alt="Play Portuguese translation"
                                            className={styles["page23__icon"]}
                                            onClick={() => playAudio(traducaoAudio3)}
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <table className={styles["page23__table"]}>
                            <colgroup>
                                <col className={styles["page23__subject"]} />
                                <col className={styles["page23__auxiliary-verb"]} />
                                <col className={styles["page23__adverb"]} />
                                <col className={styles["page23__verb"]} />
                                <col className={styles["page23__objective-complement"]} />
                                <col className={styles["page23__translation"]} />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th onClick={() => playAudio(sujeitoAudio)} style={{ cursor: "pointer" }}>Subject</th>
                                    <th onClick={() => playAudio(verbo_auxiliarAudio)} style={{ cursor: "pointer" }}>
                                        Auxiliary <br /> Verb
                                    </th>
                                    <th onClick={() => playAudio(adverbioAudio)} style={{ cursor: "pointer" }}>
                                        <span style={{ color: "red" }}>'Not'</span><br /> Adverb
                                    </th>
                                    <th onClick={() => playAudio(verboAudio)} style={{ cursor: "pointer" }}>Verb(s)</th>
                                    <th onClick={() => playAudio(objeto_complemento_audio)} style={{ cursor: "pointer" }}>
                                        Object <br /> Complement
                                    </th>
                                    <th onClick={() => playAudio(traducaoAudio)} style={{ cursor: "pointer" }}>Translation</th>
                                </tr>
                            </thead>
                            <tbody>
                                {inputValues.map((row, rowIndex) => (
                                    <tr key={rowIndex}>
                                        {row.map((value, colIndex) => (
                                            <td key={colIndex}>
                                                <textarea
                                                    className={styles["page23__input-cell"]}
                                                    value={value}
                                                    onChange={(e) => handleInputChange(rowIndex, colIndex, e)}
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

export default Pagina23;
