import React, { useState, useRef } from 'react';
import styles from './pagina11.module.css';

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
import pg11Audio1 from '../assets/audios/pg11_audio1.mp3';
import pg11Audio2 from '../assets/audios/pg11_audio2.mp3';
import pg11Audio3 from '../assets/audios/pg11_audio3.mp3';
import traducaoAudio1 from '../assets/audios/pg11_trad1.mp3';
import traducaoAudio2 from '../assets/audios/pg11_trad2.mp3';
import traducaoAudio3 from '../assets/audios/pg11_trad3.mp3';
import pg11IconNotes from '../assets/icons/notes_icon.webp';

const Pagina11 = () => {
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
            <div className={styles["page11__container"]}>
                <header className={styles["page11__header"]}>
                    <h1 className={styles["page11__audio-text"]}>
                        Grammar
                        <img
                            src={eng_audio_icon}
                            alt="English Audio"
                            className={styles["page11__icon"]}
                            onClick={() => playAudio(global_grammar)}
                        />
                    </h1>

                    <h2 className={styles["page11__audio-text"]} style={{ color: "black" }}>
                        Simple Present (Presente Simples)
                        <img
                            src={eng_audio_icon}
                            alt="English Audio"
                            className={styles["page11__icon"]}
                            onClick={() => playAudio(global_simple_present)}
                        />
                    </h2>

                    <h3 className={styles["page11__audio-text"]}>
                        Verbo To Be (Ser, Estar, Ou Ter Somente Para Idade)
                        
                    </h3>
                </header>

                <main className={styles["page11__main"]}>
                    <div>
                        <div
                            className={styles["page11__table-header"]}
                            onClick={() => playAudio(afirmativaAudio)}
                            style={{ cursor: "pointer" }}
                        >
                            <img
                                src={white_play_icon}
                                alt="White icon"
                                className={styles["page11__icon-left"]}
                            />
                            AFFIRMATIVE
                        </div>

                        <table className={styles["page11__table"]}>
                            <colgroup>
                                <col className={styles["page11__table-subject"]} />
                                <col className={styles["page11__table-auxiliary"]} />
                                <col className={styles["page11__table-adverb"]} />
                                <col className={styles["page11__table-verb"]} />
                                <col className={styles["page11__table-complement"]} />
                                <col className={styles["page11__table-translation"]} />
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
                                    <td className={styles["page11__table-subject"]} style={{ textAlign: "center" }}>
                                        You and Pedro
                                    </td>
                                    <td className={styles["page11__table-auxiliary"]} style={{ textAlign: "center" }}>
                                        are
                                    </td>
                                    <td className={styles["page11__table-adverb"]}></td>
                                    <td className={styles["page11__table-verb"]}></td>
                                    <td className={styles["page11__table-complement"]}>
                                        great students{" "}
                                        <img
                                            src={eng_audio_icon}
                                            alt="Play English sentence"
                                            className={styles["page11__icon"]}
                                            onClick={() => playAudio(pg11Audio1)}
                                        />
                                    </td>
                                    <td className={styles["page11__table-translation"]}>
                                        Você e Pedro são ótimos alunos.{" "}
                                        <img
                                            src={ptbr_audio_icon}
                                            alt="Reproduzir tradução em português"
                                            className={styles["page11__icon"]}
                                            onClick={() => playAudio(traducaoAudio1)}
                                        />
                                    </td>
                                </tr>

                                <tr>
                                    <td className={styles["page11__table-subject"]} style={{ textAlign: "center" }}>
                                        You all
                                    </td>
                                    <td className={styles["page11__table-auxiliary"]} style={{ textAlign: "center" }}>
                                        are
                                    </td>
                                    <td className={styles["page11__table-adverb"]}></td>
                                    <td className={styles["page11__table-verb"]}></td>
                                    <td className={styles["page11__table-complement"]}>
                                        in class B{" "}
                                        <img
                                            src={eng_audio_icon}
                                            alt="Play English sentence"
                                            className={styles["page11__icon"]}
                                            onClick={() => playAudio(pg11Audio2)}
                                        />
                                    </td>
                                    <td className={styles["page11__table-translation"]}>
                                        Vocês todos estão na sala de aula (turma/classe) B.{" "}
                                        <img
                                            src={ptbr_audio_icon}
                                            alt="Reproduzir tradução em português"
                                            className={styles["page11__icon"]}
                                            onClick={() => playAudio(traducaoAudio2)}
                                        />
                                    </td>
                                </tr>

                                <tr>
                                    <td className={styles["page11__table-subject"]} style={{ textAlign: "center" }}>
                                        All of You
                                    </td>
                                    <td className={styles["page11__table-auxiliary"]} style={{ textAlign: "center" }}>
                                        are
                                    </td>
                                    <td className={styles["page11__table-adverb"]}></td>
                                    <td className={styles["page11__table-verb"]}></td>
                                    <td className={styles["page11__table-complement"]}>
                                        12 years old{" "}
                                        <img
                                            src={eng_audio_icon}
                                            alt="Play English sentence"
                                            className={styles["page11__icon"]}
                                            onClick={() => playAudio(pg11Audio3)}
                                        />
                                    </td>
                                    <td className={styles["page11__table-translation"]}>
                                        Todos vocês têm 12 anos de idade.{" "}
                                        <img
                                            src={ptbr_audio_icon}
                                            alt="Reproduzir tradução em português"
                                            className={styles["page11__icon"]}
                                            onClick={() => playAudio(traducaoAudio3)}
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <table className={styles["page11__table"]}>
                            <colgroup>
                                <col className={styles["page11__table-subject"]} />
                                <col className={styles["page11__table-auxiliary"]} />
                                <col className={styles["page11__table-adverb"]} />
                                <col className={styles["page11__table-verb"]} />
                                <col className={styles["page11__table-complement"]} />
                                <col className={styles["page11__table-translation"]} />
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
                                                    id={`input-${rowIndex}-${colIndex}`}
                                                    className={styles["page11__table-input"]}
                                                    value={value}
                                                    rows="1"
                                                    onChange={(e) => handleInputChange(rowIndex, colIndex, e)}
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

                <aside className={styles["page11__aside"]}>
                    <div className={styles["page11__aside-notes1"]}>
                        <img
                            className={styles["page11__aside-img-notes"]}
                            src={pg11IconNotes}
                            alt=""
                        />
                        <p>NOTE: Forma simples / Coloquial</p>
                    </div>
                    <div className={styles["page11__aside-notes2"]}>
                        <p>y’all = contração de you + all</p>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default Pagina11;
