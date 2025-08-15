import React, { useState, useRef } from 'react';
import styles from './pagina12.module.css';

import campainha from '../assets/icons/campainha.png';
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';
import white_play_icon from '../assets/icons/white_play_icon.png'

import global_verbo_to_be from '../assets/audios/global_verbo_to_be.mp3';
import global_grammar from '../assets/audios/global_grammar.mp3';
import global_simple_present from '../assets/audios/global_simple_present.mp3';

import bell from '../assets/audios/bell.mp3';
import interrogativa_audio from '../assets/audios/interrogativa_a.mp3';
import verbo_auxiliarAudio from '../assets/audios/verbo_auxiliar.mp3';
import sujeitoAudio from '../assets/audios/sujeito.mp3';
import adverbioAudio from '../assets/audios/adverbio.mp3';
import verboAudio from '../assets/audios/verbo.mp3';
import objeto_complemento_audio from '../assets/audios/objeto_complemento.mp3';
import traducaoAudio from '../assets/audios/traducao.mp3';
import pg12Audio1 from '../assets/audios/pg12_audio1.mp3';
import pg12Audio2 from '../assets/audios/pg12_audio2.mp3';
import pg12Audio3 from '../assets/audios/pg12_audio3.mp3';
import traducaoAudio1 from '../assets/audios/pg12_trad1.mp3';
import traducaoAudio2 from '../assets/audios/pg12_trad2.mp3';
import traducaoAudio3 from '../assets/audios/pg12_trad3.mp3';
import pg12IconNotes from '../assets/icons/notes_icon.webp';

const Pagina12 = () => {
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
            <div className={styles["page12__container"]}>
                <header className={styles["page12__header"]}>
                    <h1 className={styles["page12__audio-text"]}>
                        Grammar
                        <img
                            src={eng_audio_icon}
                            alt="English Audio"
                            className={styles["page12__icon"]}
                            onClick={() => playAudio(global_grammar)}
                        />
                    </h1>

                    <h2 className={styles["page12__audio-text"]} style={{ color: "black" }}>
                        Simple Present (Presente Simples)
                        <img
                            src={eng_audio_icon}
                            alt="English Audio"
                            className={styles["page12__icon"]}
                            onClick={() => playAudio(global_simple_present)}
                        />
                    </h2>

                    <h3 className={styles["page12__audio-text"]}>
                        Verbo To Be (Ser, Estar, Ou Ter Somente Para Idade)
                        
                    </h3>
                </header>

                <main className={styles["page12__main"]}>
                    <div>
                        <div
                            className={styles["page12__table-header"]}
                            onClick={() => playAudio(interrogativa_audio)}
                            style={{ cursor: "pointer" }}
                        >
                            <img
                                src={white_play_icon}
                                alt="White icon"
                                className={styles["page12__icon-left"]}
                            />
                            AFFIRMATIVE INTERROGATIVE
                        </div>

                        <table className={styles["page12__table"]}>
                            <colgroup>
                                <col className={styles["page12__table-auxiliary"]} />
                                <col className={styles["page12__table-subject"]} />
                                <col className={styles["page12__table-adverb"]} />
                                <col className={styles["page12__table-verb"]} />
                                <col className={styles["page12__table-complement"]} />
                                <col className={styles["page12__table-translation"]} />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th onClick={() => playAudio(verbo_auxiliarAudio)} style={{ cursor: "pointer" }}>
                                        Auxiliary <br /> Verb
                                    </th>
                                    <th onClick={() => playAudio(sujeitoAudio)} style={{ cursor: "pointer" }}>
                                        Subject
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
                                    <td className={styles["page12__table-auxiliary"]} style={{ textAlign: "center" }}>
                                        Are
                                    </td>
                                    <td className={styles["page12__table-subject"]} style={{ textAlign: "center" }}>
                                        you
                                    </td>
                                    <td className={styles["page12__table-adverb"]}></td>
                                    <td className={styles["page12__table-verb"]}></td>
                                    <td className={styles["page12__table-complement"]}>
                                        the new director?{" "}
                                        <img
                                            src={eng_audio_icon}
                                            alt="Play English sentence"
                                            className={styles["page12__icon"]}
                                            onClick={() => playAudio(pg12Audio1)}
                                        />
                                    </td>
                                    <td className={styles["page12__table-translation"]}>
                                        Você é o novo diretor?{" "}
                                        <img
                                            src={ptbr_audio_icon}
                                            alt="Reproduzir tradução em português"
                                            className={styles["page12__icon"]}
                                            onClick={() => playAudio(traducaoAudio1)}
                                        />
                                    </td>
                                </tr>

                                <tr>
                                    <td className={styles["page12__table-auxiliary"]} style={{ textAlign: "center" }}>
                                        Are
                                    </td>
                                    <td className={styles["page12__table-subject"]} style={{ textAlign: "center" }}>
                                        you
                                    </td>
                                    <td className={styles["page12__table-adverb"]}></td>
                                    <td className={styles["page12__table-verb"]}></td>
                                    <td className={styles["page12__table-complement"]}>
                                        in class 2-B?{" "}
                                        <img
                                            src={eng_audio_icon}
                                            alt="Play English sentence"
                                            className={styles["page12__icon"]}
                                            onClick={() => playAudio(pg12Audio2)}
                                        />
                                    </td>
                                    <td className={styles["page12__table-translation"]}>
                                        Você está na sala de aula (turma/classe) 2-B?{" "}
                                        <img
                                            src={ptbr_audio_icon}
                                            alt="Reproduzir tradução em português"
                                            className={styles["page12__icon"]}
                                            onClick={() => playAudio(traducaoAudio2)}
                                        />
                                    </td>
                                </tr>

                                <tr>
                                    <td className={styles["page12__table-auxiliary"]} style={{ textAlign: "center" }}>
                                        Are
                                    </td>
                                    <td className={styles["page12__table-subject"]} style={{ textAlign: "center" }}>
                                        you
                                    </td>
                                    <td className={styles["page12__table-adverb"]}></td>
                                    <td className={styles["page12__table-verb"]}></td>
                                    <td className={styles["page12__table-complement"]}>
                                        only 12 years old?{" "}
                                        <img
                                            src={eng_audio_icon}
                                            alt="Play English sentence"
                                            className={styles["page12__icon"]}
                                            onClick={() => playAudio(pg12Audio3)}
                                        />
                                    </td>
                                    <td className={styles["page12__table-translation"]}>
                                        Você tem apenas 12 anos?{" "}
                                        <img
                                            src={ptbr_audio_icon}
                                            alt="Reproduzir tradução em português"
                                            className={styles["page12__icon"]}
                                            onClick={() => playAudio(traducaoAudio3)}
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <aside className={styles["page12__aside"]}>
                            <div className={styles["page12__new-aside-notes1"]}>
                                <img
                                    className={styles["page12__aside-img"]}
                                    onClick={() => playAudio(bell)}
                                    src={campainha}
                                    alt=""
                                />
                                <p>NOTE: RING THE BELL AND READ CAREFULLY - PLEASE!</p>
                            </div>
                            <div className={styles["page12__new-aside-notes2"]}>
                                <p style={{ fontSize: "2rem" }}>
                                    Na forma interrogativa, não esquecer que o{" "}
                                    <span style={{ fontWeight: "bold" }}>verbo auxiliar</span> troca
                                    de lugar com o <span style={{ fontWeight: "bold" }}>sujeito</span>
                                </p>
                            </div>
                        </aside>

                        <table className={styles["page12__table"]}>
                            <colgroup>
                                <col className={styles["page12__table-subject"]} />
                                <col className={styles["page12__table-auxiliary"]} />
                                <col className={styles["page12__table-adverb"]} />
                                <col className={styles["page12__table-verb"]} />
                                <col className={styles["page12__table-complement"]} />
                                <col className={styles["page12__table-translation"]} />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th onClick={() => playAudio(verbo_auxiliarAudio)} style={{ cursor: "pointer" }}>
                                        Auxiliary <br /> Verb
                                    </th>
                                    <th onClick={() => playAudio(sujeitoAudio)} style={{ cursor: "pointer" }}>
                                        Subject
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
                                                    className={styles["page12__table-input"]}
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

                <aside className={styles["page12__aside"]}>
                    <div className={styles["page12__aside-notes1"]}>
                        <img
                            className={styles["page12__aside-img-notes"]}
                            src={pg12IconNotes}
                            alt=""
                        />
                        <p>NOTE: Usam a mesma terminação verbal “Are“, “Aren’t“:</p>
                    </div>
                    <div className={styles["page12__aside-notes2"]}>
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

export default Pagina12;
