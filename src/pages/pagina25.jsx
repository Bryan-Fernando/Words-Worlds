import React, { useState, useRef } from 'react';

import styles from './pagina25.module.css';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';
import white_play_icon from '../assets/icons/white_play_icon.png'

import global_verbo_to_be from '../assets/audios/global_verbo_to_be.mp3';
import global_grammar from '../assets/audios/global_grammar.mp3';
import global_simple_present from '../assets/audios/global_simple_present.mp3';
import interrogativa_nAudio from '../assets/audios/interrogativa_n.mp3';
import verbo_auxiliarAudio from '../assets/audios/verbo_auxiliar.mp3';
import sujeitoAudio from '../assets/audios/sujeito.mp3';
import adverbioAudio from '../assets/audios/adverbio.mp3';
import verboAudio from '../assets/audios/verbo.mp3';
import objeto_complemento_audio from '../assets/audios/objeto_complemento.mp3';
import traducaoAudio from '../assets/audios/traducao.mp3';
import pg25Audio1 from '../assets/audios/pg25_audio1.mp3';
import pg25Audio2 from '../assets/audios/pg25_audio2.mp3';
import pg25Audio3 from '../assets/audios/pg25_audio3.mp3';
import pg25Audio4 from '../assets/audios/pg25_audio4.mp3';
import traducaoAudio1 from '../assets/audios/pg25_trad1.mp3';
import traducaoAudio2 from '../assets/audios/pg25_trad2.mp3';
import traducaoAudio3 from '../assets/audios/pg25_trad3.mp3';
import traducaoAudio4 from '../assets/audios/pg25_trad4.mp3';

const Pagina25 = () => {
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
            <div className={styles["page25__container"]}>
                <header className={styles["page25__header"]}>
                    <h1 className={styles["page25__audio-text"]}>
                        Grammar
                        <img
                            src={eng_audio_icon}
                            alt="English Audio"
                            className={styles["page25__icon"]}
                            onClick={() => playAudio(global_grammar)}
                        />
                    </h1>
                    <h2 className={styles["page25__audio-text"]} style={{ color: "black" }}>
                        Simple Present (Presente Simples)
                        <img
                            src={eng_audio_icon}
                            alt="English Audio"
                            className={styles["page25__icon"]}
                            onClick={() => playAudio(global_simple_present)}
                        />
                    </h2>
                    <h3 className={styles["page25__audio-text"]}>
                        Verbo To Be (Ser, Estar, Ou Ter Somente Para Idade)
                        <img
                            src={ptbr_audio_icon}
                            alt="Portuguese Audio"
                            className={styles["page25__icon"]}
                            onClick={() => playAudio(global_verbo_to_be)}
                        />
                    </h3>
                </header>
                <main className={styles["page25__main"]}>
                    <div>
                        <div
                            className={styles["page25__table--header"]}
                            onClick={() => playAudio(interrogativa_nAudio)}
                            style={{ cursor: "pointer" }}
                        >
                            <img
                                src={white_play_icon}
                                alt="White icon"
                                className={styles["page25__icon--left"]}
                            />
                            NEGATIVE INTERROGATIVE
                        </div>
                        <table className={styles["page25__table"]}>
                            <colgroup>
                                <col className={styles["page25__subject"]} />
                                <col className={styles["page25__auxiliary--verb"]} />
                                <col className={styles["page25__adverb"]} />
                                <col className={styles["page25__verb"]} />
                                <col className={styles["page25__objective--complement"]} />
                                <col className={styles["page25__translation"]} />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th onClick={() => playAudio(verbo_auxiliarAudio)} style={{ cursor: "pointer" }}>
                                        Auxiliary <br /> Verb
                                    </th>
                                    <th onClick={() => playAudio(sujeitoAudio)} style={{ cursor: "pointer" }}>Subject</th>
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
                                    <td
                                        className={styles["page25__auxiliary--verb"]}
                                        onClick={() => playAudio(pg25Audio1)}
                                        style={{ cursor: "pointer", textAlign: "center" }}
                                    >
                                        Is
                                    </td>
                                    <td
                                        className={styles["page25__subject"]}
                                        onClick={() => playAudio(pg25Audio1)}
                                        style={{ cursor: "pointer", textAlign: "center" }}
                                    >
                                        it
                                    </td>
                                    <td
                                        className={styles["page25__adverb"]}
                                        onClick={() => playAudio(pg25Audio1)}
                                        style={{ cursor: "pointer", textAlign: "center", color: "red" }}
                                    >
                                       not
                                    </td>
                                    <td className={styles["page25__verb"]}></td>
                                    <td
                                        className={styles["page25__objective--complement"]}
                                        onClick={() => playAudio(pg25Audio1)}
                                        style={{ cursor: "pointer" }}
                                    >
                                        a Ford 68?
                                    </td>
                                    <td
                                        className={styles["page25__translation"]}
                                        onClick={() => playAudio(traducaoAudio1)}
                                        style={{ cursor: "pointer" }}
                                    >
                                        <span style={{ color: "red" }}>Não</span> é um Ford 68?
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        className={styles["page25__auxiliary--verb"]}
                                        onClick={() => playAudio(pg25Audio3)}
                                        style={{ cursor: "pointer", textAlign: "center", color: "red" }}
                                    >
                                        Isn't
                                    </td>
                                    <td
                                        className={styles["page25__subject"]}
                                        onClick={() => playAudio(pg25Audio3)}
                                        style={{ cursor: "pointer", textAlign: "center" }}
                                    >
                                        it
                                    </td>
                                    <td className={styles["page25__adverb"]}></td>
                                    <td className={styles["page25__verb"]}></td>
                                    <td
                                        className={styles["page25__objective--complement"]}
                                        onClick={() => playAudio(pg25Audio3)}
                                        style={{ cursor: "pointer" }}
                                    >
                                        ok?
                                    </td>
                                    <td
                                        className={styles["page25__translation"]}
                                        onClick={() => playAudio(traducaoAudio3)}
                                        style={{ cursor: "pointer" }}
                                    >
                                        <span style={{ color: "red" }}>Não</span> está tudo bem?
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        className={styles["page25__auxiliary--verb"]}
                                        onClick={() => playAudio(pg25Audio4)}
                                        style={{ cursor: "pointer", textAlign: "center", color: "red" }}
                                    >
                                        Isn't
                                    </td>
                                    <td
                                        className={styles["page25__subject"]}
                                        onClick={() => playAudio(pg25Audio4)}
                                        style={{ cursor: "pointer", textAlign: "center" }}
                                    >
                                        it
                                    </td>
                                    <td className={styles["page25__adverb"]}></td>
                                    <td className={styles["page25__verb"]}></td>
                                    <td
                                        className={styles["page25__objective--complement"]}
                                        onClick={() => playAudio(pg25Audio4)}
                                        style={{ cursor: "pointer" }}
                                    >
                                        3 years old?
                                    </td>
                                    <td
                                        className={styles["page25__translation"]}
                                        onClick={() => playAudio(traducaoAudio4)}
                                        style={{ cursor: "pointer" }}
                                    >
                                        <span style={{ color: "red" }}>Não</span> tem 3 anos?
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        className={styles["page25__auxiliary--verb"]}
                                        onClick={() => playAudio(pg25Audio2)}
                                        style={{ cursor: "pointer", textAlign: "center", color: "red" }}
                                    >
                                        Ain't
                                    </td>
                                    <td
                                        className={styles["page25__subject"]}
                                        onClick={() => playAudio(pg25Audio2)}
                                        style={{ cursor: "pointer", textAlign: "center" }}
                                    >
                                        it
                                    </td>
                                    <td className={styles["page25__adverb"]}></td>
                                    <td className={styles["page25__verb"]}></td>
                                    <td
                                        className={styles["page25__objective--complement"]}
                                        onClick={() => playAudio(pg25Audio2)}
                                        style={{ cursor: "pointer" }}
                                    >
                                        next to the library?
                                    </td>
                                    <td
                                        className={styles["page25__translation"]}
                                        onClick={() => playAudio(traducaoAudio2)}
                                        style={{ cursor: "pointer" }}
                                    >
                                        <span style={{ color: "red" }}>Não</span> está ao lado da biblioteca?
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table className={styles["page25__table"]}>
                            <colgroup>
                                <col className={styles["page25__subject"]} />
                                <col className={styles["page25__auxiliary--verb"]} />
                                <col className={styles["page25__adverb"]} />
                                <col className={styles["page25__verb"]} />
                                <col className={styles["page25__objective--complement"]} />
                                <col className={styles["page25__translation"]} />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th onClick={() => playAudio(verbo_auxiliarAudio)} style={{ cursor: "pointer" }}>
                                        Auxiliary <br /> Verb
                                    </th>
                                    <th onClick={() => playAudio(sujeitoAudio)} style={{ cursor: "pointer" }}>Subject</th>
                                    <th onClick={() => playAudio(adverbioAudio)} style={{ cursor: "pointer" }}>
                                        <span style={{ color: "red" }}>'Not'</span> <br /> Adverb
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
                                                    className={styles["page25__input--cell"]}
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

export default Pagina25;
