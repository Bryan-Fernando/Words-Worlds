import React, { useState, useRef } from 'react';

import styles from './pagina29.module.css';

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
import pg29Audio1 from '../assets/audios/pg29_audio1.mp3';
import pg29Audio2 from '../assets/audios/pg29_audio2.mp3';
import pg29Audio3 from '../assets/audios/pg29_audio3.mp3';
import traducaoAudio1 from '../assets/audios/pg29_trad1.mp3';
import traducaoAudio2 from '../assets/audios/pg29_trad2.mp3';
import traducaoAudio3 from '../assets/audios/pg29_trad3.mp3';

const Pagina29 = () => {
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
            <div className={styles["page29__container"]}>
                <header className={styles["page29__header"]}>
                    <h1 className={styles["page29__audio--text"]}>
                        Grammar
                        <img
                            src={eng_audio_icon}
                            alt="English Audio"
                            className={styles["page29__icon"]}
                            onClick={() => playAudio(global_grammar)}
                        />
                    </h1>
                    <h2 className={styles["page29__audio--text"]} style={{ color: "black" }}>
                        Simple Present (Presente Simples)
                        <img
                            src={eng_audio_icon}
                            alt="English Audio"
                            className={styles["page29__icon"]}
                            onClick={() => playAudio(global_simple_present)}
                        />
                    </h2>
                    <h3 className={styles["page29__audio--text"]}>
                        Verbo To Be (Ser, Estar, Ou Ter Somente Para Idade)
                    </h3>
                </header>

                <main className={styles["page29__main"]}>
                    <div>
                        <div
                            className={styles["page29__table--header"]}
                            onClick={() => playAudio(interrogativa_nAudio)}
                            style={{ cursor: "pointer" }}
                        >
                            <img
                                src={white_play_icon}
                                alt="White icon"
                                className={styles["page29__icon--left"]}
                            />
                            NEGATIVE INTERROGATIVE
                        </div>

                        <table className={styles["page29__table"]}>
                            <colgroup>
                                <col className={styles["page29__auxiliary--verb"]} />
                                <col className={styles["page29__subject"]} />
                                <col className={styles["page29__adverb"]} />
                                <col className={styles["page29__verb"]} />
                                <col className={styles["page29__objective--complement"]} />
                                <col className={styles["page29__translation"]} />
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
                                    <td className={styles["page29__auxiliary--verb"]} style={{ textAlign: "center" }}>Are</td>
                                    <td className={styles["page29__subject"]} style={{ textAlign: "center" }}>we</td>
                                    <td className={styles["page29__adverb"]} style={{ textAlign: "center", color: "red" }}>not</td>
                                    <td className={styles["page29__verb"]}></td>
                                    <td className={styles["page29__objective--complement"]}>
                                        good students?{" "}
                                        <img
                                            src={eng_audio_icon}
                                            alt="Play English"
                                            className={styles["page29__icon"]}
                                            onClick={() => playAudio(pg29Audio1)}
                                        />
                                    </td>
                                    <td className={styles["page29__translation"]}>
                                        <span style={{ color: "red" }}>Não</span> somos bons alunos?{" "}
                                        <img
                                            src={ptbr_audio_icon}
                                            alt="Play Portuguese"
                                            className={styles["page29__icon"]}
                                            onClick={() => playAudio(traducaoAudio1)}
                                        />
                                    </td>
                                </tr>

                                <tr>
                                    <td className={styles["page29__auxiliary--verb"]} style={{ textAlign: "center", color: "red" }}>Aren't</td>
                                    <td className={styles["page29__subject"]} style={{ textAlign: "center" }}>we</td>
                                    <td className={styles["page29__adverb"]}></td>
                                    <td className={styles["page29__verb"]}></td>
                                    <td className={styles["page29__objective--complement"]}>
                                        late?{" "}
                                        <img
                                            src={eng_audio_icon}
                                            alt="Play English"
                                            className={styles["page29__icon"]}
                                            onClick={() => playAudio(pg29Audio2)}
                                        />
                                    </td>
                                    <td className={styles["page29__translation"]}>
                                        <span style={{ color: "red" }}>Não</span> estamos atrasados?{" "}
                                        <img
                                            src={ptbr_audio_icon}
                                            alt="Play Portuguese"
                                            className={styles["page29__icon"]}
                                            onClick={() => playAudio(traducaoAudio2)}
                                        />
                                    </td>
                                </tr>

                                <tr>
                                    <td className={styles["page29__auxiliary--verb"]} style={{ textAlign: "center", color: "red" }}>Ain't</td>
                                    <td className={styles["page29__subject"]} style={{ textAlign: "center" }}>we</td>
                                    <td className={styles["page29__adverb"]}></td>
                                    <td className={styles["page29__verb"]}></td>
                                    <td className={styles["page29__objective--complement"]}>
                                        4 and 5 years old?{" "}
                                        <img
                                            src={eng_audio_icon}
                                            alt="Play English"
                                            className={styles["page29__icon"]}
                                            onClick={() => playAudio(pg29Audio3)}
                                        />
                                    </td>
                                    <td className={styles["page29__translation"]}>
                                        <span style={{ color: "red" }}>Não</span> temos 4 e 5 anos?{" "}
                                        <img
                                            src={ptbr_audio_icon}
                                            alt="Play Portuguese"
                                            className={styles["page29__icon"]}
                                            onClick={() => playAudio(traducaoAudio3)}
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <table className={styles["page29__table"]}>
                            <colgroup>
                                <col className={styles["page29__subject"]} />
                                <col className={styles["page29__auxiliary--verb"]} />
                                <col className={styles["page29__adverb"]} />
                                <col className={styles["page29__verb"]} />
                                <col className={styles["page29__objective--complement"]} />
                                <col className={styles["page29__translation"]} />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th onClick={() => playAudio(verbo_auxiliarAudio)} style={{ cursor: "pointer" }}>
                                        Auxiliary <br /> Verb
                                    </th>
                                    <th onClick={() => playAudio(sujeitoAudio)} style={{ cursor: "pointer" }}>Subject</th>
                                    <th onClick={() => playAudio(adverbioAudio)} style={{ cursor: "pointer" }}>
                                        <span style={{ color: "red" }}>'Not'</span> <br />Adverb
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
                                                    className={styles["page29__input--cell"]}
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

export default Pagina29;
