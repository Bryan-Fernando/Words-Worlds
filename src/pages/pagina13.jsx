import React, { useState, useRef } from 'react';
import styles from './pagina13.module.css';

import campainha from '../assets/icons/campainha.png';
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';
import white_play_icon from '../assets/icons/white_play_icon.png'

import global_verbo_to_be from '../assets/audios/global_verbo_to_be.mp3';
import global_grammar from '../assets/audios/global_grammar.mp3';
import global_simple_present from '../assets/audios/global_simple_present.mp3';

import bell from '../assets/audios/bell.mp3';
import interrogativa_negativaAudio from '../assets/audios/interrogativa_n.mp3';
import verbo_auxiliarAudio from '../assets/audios/verbo_auxiliar.mp3';
import sujeitoAudio from '../assets/audios/sujeito.mp3';
import adverbioAudio from '../assets/audios/adverbio.mp3';
import verboAudio from '../assets/audios/verbo.mp3';
import objeto_complemento_audio from '../assets/audios/objeto_complemento.mp3';
import traducaoAudio from '../assets/audios/traducao.mp3';
import pg13Audio1 from '../assets/audios/pg13_audio1.mp3';
import pg13Audio2 from '../assets/audios/pg13_audio2.mp3';
import pg13Audio3 from '../assets/audios/pg13_audio3.mp3';
import traducaoAudio1 from '../assets/audios/pg13_trad1.mp3';
import traducaoAudio2 from '../assets/audios/pg13_trad2.mp3';
import traducaoAudio3 from '../assets/audios/pg13_trad3.mp3';
import pg13IconNotes from '../assets/icons/notes_icon.webp';

const Pagina13 = () => {
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
            <div className={styles["page13__container"]}>
                <header className={styles["page13__header"]}>
                    <h1 className={styles["page13__audio-text"]}>
                        Grammar
                        <img
                            src={eng_audio_icon}
                            alt="English Audio"
                            className={styles["page13__icon"]}
                            onClick={() => playAudio(global_grammar)}
                        />
                    </h1>
                    <h2 className={styles["page13__audio-text"]} style={{ color: "black" }}>
                        Simple Present (Presente Simples)
                        <img
                            src={eng_audio_icon}
                            alt="English Audio"
                            className={styles["page13__icon"]}
                            onClick={() => playAudio(global_simple_present)}
                        />
                    </h2>
                    <h3 className={styles["page13__audio-text"]}>
                        Verbo To Be (Ser, Estar, Ou Ter Somente Para Idade)
                        <img
                            src={ptbr_audio_icon}
                            alt="Portuguese Audio"
                            className={styles["page13__icon"]}
                            onClick={() => playAudio(global_verbo_to_be)}
                        />
                    </h3>
                </header>
                <main className={styles["page13__main"]}>
                    <div>
                        <div
                            className={styles["page13__table-header"]}
                            onClick={() => playAudio(interrogativa_negativaAudio)}
                            style={{ cursor: "pointer" }}
                        >
                            <img
                                src={white_play_icon}
                                alt="White icon"
                                className={styles["page13__icon-left"]}
                            />
                            NEGATIVE INTERROGATIVE
                        </div>
                        <table className={styles["page13__table"]}>
                            <colgroup>
                                <col className={styles["page13__table-subject"]} />
                                <col className={styles["page13__table-auxiliary"]} />
                                <col className={styles["page13__table-adverb"]} />
                                <col className={styles["page13__table-verb"]} />
                                <col className={styles["page13__table-complement"]} />
                                <col className={styles["page13__table-translation"]} />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th onClick={() => playAudio(verbo_auxiliarAudio)} style={{ cursor: "pointer" }}>
                                        Auxiliary <br /> Verb
                                    </th>
                                    <th onClick={() => playAudio(sujeitoAudio)} style={{ cursor: "pointer" }}>Subject</th>
                                    <th onClick={() => playAudio(adverbioAudio)} style={{ cursor: "pointer" }}><span style={{ color: "red" }}><span style={{ color: "red" }}>'Not'</span></span><br /> Adverb</th>
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
                                        className={styles["page13__table-auxiliary"]}
                                        onClick={() => playAudio(pg13Audio1)}
                                        style={{ cursor: "pointer", textAlign: "center" }}
                                    >
                                        Are
                                    </td>
                                    <td
                                        className={styles["page13__table-subject"]}
                                        onClick={() => playAudio(pg13Audio1)}
                                        style={{ cursor: "pointer", textAlign: "center" }}
                                    >
                                        you
                                    </td>
                                    <td
                                        className={styles["page13__table-adverb"]}
                                        onClick={() => playAudio(pg13Audio1)}
                                        style={{ cursor: "pointer", textAlign: "center", color: "red"  }}
                                    >
                                       not
                                    </td>
                                    <td className={styles["page13__table-verb"]}></td>
                                    <td
                                        className={styles["page13__table-complement"]}
                                        onClick={() => playAudio(pg13Audio1)}
                                        style={{ cursor: "pointer" }}
                                    >
                                        the new director?
                                    </td>
                                    <td
                                        className={styles["page13__table-translation"]}
                                        onClick={() => playAudio(traducaoAudio1)}
                                        style={{ cursor: "pointer" }}
                                    >
                                        Você <span style={{ color: "red" }}>não</span> é o novo diretor?
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        className={styles["page13__table-auxiliary"]}
                                        onClick={() => playAudio(pg13Audio2)}
                                        style={{ cursor: "pointer", textAlign: "center", color: "red"   }}
                                    >
                                        Aren't
                                    </td>
                                    <td
                                        className={styles["page13__table-subject"]}
                                        onClick={() => playAudio(pg13Audio2)}
                                        style={{ cursor: "pointer", textAlign: "center" }}
                                    >
                                        you
                                    </td>
                                    <td className={styles["page13__table-adverb"]}></td>
                                    <td className={styles["page13__table-verb"]}></td>
                                    <td
                                        className={styles["page13__table-complement"]}
                                        onClick={() => playAudio(pg13Audio2)}
                                        style={{ cursor: "pointer" }}
                                    >
                                        in class 2-B?
                                    </td>
                                    <td
                                        className={styles["page13__table-translation"]}
                                        onClick={() => playAudio(traducaoAudio2)}
                                        style={{ cursor: "pointer" }}
                                    >
                                        Você <span style={{ color: "red" }}>não</span> está na sala de aula (turma/classe) 2-B?
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        className={styles["page13__table-auxiliary"]}
                                        onClick={() => playAudio(pg13Audio3)}
                                        style={{ cursor: "pointer", textAlign: "center", color: "red"   }}
                                    >
                                        Ain't
                                    </td>
                                    <td
                                        className={styles["page13__table-subject"]}
                                        onClick={() => playAudio(pg13Audio3)}
                                        style={{ cursor: "pointer", textAlign: "center" }}
                                    >
                                        you
                                    </td>
                                    <td className={styles["page13__table-adverb"]}></td>
                                    <td className={styles["page13__table-verb"]}></td>
                                    <td
                                        className={styles["page13__table-complement"]}
                                        onClick={() => playAudio(pg13Audio3)}
                                        style={{ cursor: "pointer" }}
                                    >
                                        only 12 years old?
                                    </td>
                                    <td
                                        className={styles["page13__table-translation"]}
                                        onClick={() => playAudio(traducaoAudio3)}
                                        style={{ cursor: "pointer" }}
                                    >
                                        Você <span style={{ color: "red" }}>não</span> tem apenas 12 anos?
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <aside className={styles["page13__aside"]}>
                            <div className={styles["page13__new-aside-notes1"]}>
                                <img className={styles["page13__aside-img"]} onClick={() => playAudio(bell)} src={campainha} alt="" />
                                <p>NOTE: RING THE BELL AND READ CAREFULLY - PLEASE!</p>
                            </div>
                            <div className={styles["page13__new-aside-notes2"]}>
                                <p style={{ fontSize: "2rem" }}>
                                   Na tradução em português <span style={{ fontWeight: "bold", color: "red" }}>não</span> na forma <span style={{ fontWeight: "bold", color: "red" }}>negativa </span> ou <span style={{ fontWeight: "bold", color: "red" }}>interrogativa negativa,</span> vem sempre após o sujeito.
                                
                                    
                                </p>
                            </div>
                        </aside>

                        <table className={styles["page13__table"]}>
                            <colgroup>
                                <col className={styles["page13__table-subject"]} />
                                <col className={styles["page13__table-auxiliary"]} />
                                <col className={styles["page13__table-adverb"]} />
                                <col className={styles["page13__table-verb"]} />
                                <col className={styles["page13__table-complement"]} />
                                <col className={styles["page13__table-translation"]} />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th onClick={() => playAudio(verbo_auxiliarAudio)} style={{ cursor: "pointer" }}>
                                        Auxiliary <br /> Verb
                                    </th>
                                    <th onClick={() => playAudio(sujeitoAudio)} style={{ cursor: "pointer" }}>Subject</th>
                                    <th onClick={() => playAudio(adverbioAudio)} style={{ cursor: "pointer" }}><span style={{ color: "red" }}><span style={{ color: "red" }}>'Not'</span></span><br /> Adverb</th>
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
                                                    className={styles["page13__table-input"]}
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
                <aside className={styles["page13__aside"]}>
                    <div className={styles["page13__aside-notes1"]}>
                        <img className={styles["page13__aside-img-notes"]} src={pg13IconNotes} alt="" />
                        <p>NOTE: Usam a mesma terminação verbal “Are“, “Aren’t“:</p>
                    </div>
                    <div className={styles["page13__aside-notes2"]}>
                        <p>
                            You <br />
                            You all <br />
                            You and Mary
                        </p>
                        <p>
                            Você <br />
                            Vocês todos <br />
                            Você e Mary
                        </p>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default Pagina13;
