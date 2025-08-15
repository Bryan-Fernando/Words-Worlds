import React, { useState, useRef } from 'react';

import styles from './pagina34.module.css';

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
import pg34Audio1 from '../assets/audios/pg34_audio1.mp3';
import pg34Audio2 from '../assets/audios/pg34_audio2.mp3';
import pg34Audio3 from '../assets/audios/pg34_audio3.mp3';
import pg34Audio4 from '../assets/audios/pg34_audio4.mp3';
import pg34Audio2_1 from '../assets/audios/pg34_audio2_1.mp3';
import pg34Audio3_1 from '../assets/audios/pg34_audio3_1.mp3';
import pg34Audio4_1 from '../assets/audios/pg34_audio4_1.mp3';
import traducaoAudio1 from '../assets/audios/pg34_trad1.mp3';
import traducaoAudio2 from '../assets/audios/pg34_trad2.mp3';
import traducaoAudio3 from '../assets/audios/pg34_trad3.mp3';
import traducaoAudio4 from '../assets/audios/pg34_trad4.mp3';
import pg5Audio2 from '../assets/audios/pg5_audio2.mp3';
import traducao5Audio2 from '../assets/audios/pg5_trad2.mp3';
import pg26Audio2 from '../assets/audios/pg26_audio2.mp3';
import pg9Audio1 from '../assets/audios/pg9_audio1.mp3';
import pg26Audio2_1 from '../assets/audios/pg26_audio2_1.mp3';
import pg9Audio1_1 from '../assets/audios/pg9_audio1_1.mp3';
import traducao9Audio1 from '../assets/audios/pg9_trad1.mp3';
import traducao26Audio2 from '../assets/audios/pg26_trad2.mp3';
import pg30Audio1 from '../assets/audios/pg30_audio1.mp3';
import pg30Audio1_1 from '../assets/audios/pg30_audio1_1.mp3';
import traducao30Audio1 from '../assets/audios/pg30_trad1.mp3';



const Pagina34 = () => {
    const [inputValues, setInputValues] = useState(
        Array(2).fill(Array(6).fill(''))
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
            <div className={styles["page34__container"]}>
                <header className={styles["page34__header"]}>
                    <h1 className={styles["page34__audio--text"]}>
                        Grammar
                        <img
                            src={eng_audio_icon}
                            alt="English Audio"
                            className={styles["page34__icon"]}
                            onClick={() => playAudio(global_grammar)}
                        />
                    </h1>
                    <h2 className={styles["page34__audio--text"]} style={{ color: "black" }}>
                        Simple Present (Presente Simples)
                        <img
                            src={eng_audio_icon}
                            alt="English Audio"
                            className={styles["page34__icon"]}
                            onClick={() => playAudio(global_simple_present)}
                        />
                    </h2>
                    <h3 className={styles["page34__audio--text"]}>
                        Verbo To Be (Ser, Estar, Ou Ter Somente Para Idade)
                    </h3>
                </header>

                <main className={styles["page34__main"]}>
                    <div>
                        <div
                            className={styles["page34__table--header"]}
                            onClick={() => playAudio(afirmativaAudio)}
                            style={{ cursor: "pointer" }}
                        >
                            <img
                                src={white_play_icon}
                                alt="White icon"
                                className={styles["page34__icon--left"]}
                            />
                            AFFIRMATIVE
                        </div>

                        <table className={styles["page34__table--styled"]}>
                            <colgroup>
                                <col className={styles["page34__subject"]} />
                                <col className={styles["page34__auxiliary--verb"]} />
                                <col className={styles["page34__adverb"]} />
                                <col className={styles["page34__verb"]} />
                                <col className={styles["page34__objective--complement"]} />
                                <col className={styles["page34__translation"]} />
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
                                        <span style={{ color: "red" }}>'Not'</span> <br /> Adverb
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
                                    <td style={{ textAlign: "center" }}>I</td>
                                    <td style={{ textAlign: "center" }}>am</td>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        at work
                                        <img
                                            src={eng_audio_icon}
                                            alt="English Audio"
                                            className={styles["page34__icon"]}
                                            onClick={() => playAudio(pg5Audio2)}
                                        />
                                    </td>
                                    <td>
                                        Eu estou no trabalho
                                        <img
                                            src={ptbr_audio_icon}
                                            alt="Portuguese Audio"
                                            className={styles["page34__icon"]}
                                            onClick={() => playAudio(traducao5Audio2)}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ textAlign: "center" }}>I'm</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        the Spanish teacher
                                        <img
                                            src={eng_audio_icon}
                                            alt="English Audio"
                                            className={styles["page34__icon"]}
                                            onClick={() => playAudio(pg34Audio1)}
                                        />
                                    </td>
                                    <td>
                                        Eu sou o professor de espanhol
                                        <img
                                            src={ptbr_audio_icon}
                                            alt="Portuguese Audio"
                                            className={styles["page34__icon"]}
                                            onClick={() => playAudio(traducaoAudio1)}
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <table className={styles["page34__table--styled"]}>
                            <colgroup>
                                <col className={styles["page34__subject"]} />
                                <col className={styles["page34__auxiliary--verb"]} />
                                <col className={styles["page34__adverb"]} />
                                <col className={styles["page34__verb"]} />
                                <col className={styles["page34__objective--complement"]} />
                                <col className={styles["page34__translation"]} />
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
                                        <span style={{ color: "red" }}>'Not'</span> <br /> Adverb
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
                                    <td style={{ textAlign: "center" }}>He</td>
                                    <td style={{ textAlign: "center" }}>is</td>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        at work
                                        <img
                                            src={eng_audio_icon}
                                            alt="English Audio"
                                            className={styles["page34__icon"]}
                                            onClick={() => playAudio(pg34Audio2)}
                                        />
                                    </td>
                                    <td>
                                        Ele está no trabalho
                                        <img
                                            src={ptbr_audio_icon}
                                            alt="Portuguese Audio"
                                            className={styles["page34__icon"]}
                                            onClick={() => playAudio(traducaoAudio2)}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ textAlign: "center" }}>&nbsp; He's</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        at work
                                        <img
                                            src={eng_audio_icon}
                                            alt="English Audio"
                                            className={styles["page34__icon"]}
                                            onClick={() => playAudio(pg34Audio2_1)}
                                        />
                                    </td>
                                    <td>
                                        Ele está no trabalho
                                        <img
                                            src={ptbr_audio_icon}
                                            alt="Portuguese Audio"
                                            className={styles["page34__icon"]}
                                            onClick={() => playAudio(traducaoAudio2)}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ textAlign: "center" }}>She</td>
                                    <td style={{ textAlign: "center" }}>is</td>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        27 years old
                                        <img
                                            src={eng_audio_icon}
                                            alt="English Audio"
                                            className={styles["page34__icon"]}
                                            onClick={() => playAudio(pg34Audio3)}
                                        />
                                    </td>
                                    <td>
                                        Ela tem 27 anos
                                        <img
                                            src={ptbr_audio_icon}
                                            alt="Portuguese Audio"
                                            className={styles["page34__icon"]}
                                            onClick={() => playAudio(traducaoAudio3)}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ textAlign: "center" }}>&nbsp; &nbsp;She's</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        27 years old
                                        <img
                                            src={eng_audio_icon}
                                            alt="English Audio"
                                            className={styles["page34__icon"]}
                                            onClick={() => playAudio(pg34Audio3_1)}
                                        />
                                    </td>
                                    <td>
                                        Ela tem 27 anos
                                        <img
                                            src={ptbr_audio_icon}
                                            alt="Portuguese Audio"
                                            className={styles["page34__icon"]}
                                            onClick={() => playAudio(traducaoAudio3)}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ textAlign: "center" }}>It</td>
                                    <td style={{ textAlign: "center" }}>is</td>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        sunny
                                        <img
                                            src={eng_audio_icon}
                                            alt="English Audio"
                                            className={styles["page34__icon"]}
                                            onClick={() => playAudio(pg34Audio4)}
                                        />
                                    </td>
                                    <td>
                                        Está ensolarado
                                        <img
                                            src={ptbr_audio_icon}
                                            alt="Portuguese Audio"
                                            className={styles["page34__icon"]}
                                            onClick={() => playAudio(traducaoAudio4)}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ textAlign: "center" }}>&nbsp; It's</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        sunny
                                        <img
                                            src={eng_audio_icon}
                                            alt="English Audio"
                                            className={styles["page34__icon"]}
                                            onClick={() => playAudio(pg34Audio4_1)}
                                        />
                                    </td>
                                    <td>
                                        Está ensolarado
                                        <img
                                            src={ptbr_audio_icon}
                                            alt="Portuguese Audio"
                                            className={styles["page34__icon"]}
                                            onClick={() => playAudio(traducaoAudio4)}
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <table className={styles["page34__table--styled"]}>
                            <colgroup>
                                <col className={styles["page34__subject"]} />
                                <col className={styles["page34__auxiliary--verb"]} />
                                <col className={styles["page34__adverb"]} />
                                <col className={styles["page34__verb"]} />
                                <col className={styles["page34__objective--complement"]} />
                                <col className={styles["page34__translation"]} />
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
                                        <span style={{ color: "red" }}>'Not'</span> <br /> Adverb
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
                                    <td style={{ textAlign: "center" }}>We</td>
                                    <td style={{ textAlign: "center" }}>are</td>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        at the cinema
                                        <img
                                            src={eng_audio_icon}
                                            alt="English Audio"
                                            className={styles["page34__icon"]}
                                            onClick={() => playAudio(pg26Audio2)}
                                        />
                                    </td>
                                    <td>
                                        Nós estamos no cinema
                                        <img
                                            src={ptbr_audio_icon}
                                            alt="Portuguese Audio"
                                            className={styles["page34__icon"]}
                                            onClick={() => playAudio(traducao26Audio2)}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ textAlign: "center" }}>&nbsp; We're</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        at the cinema
                                        <img
                                            src={eng_audio_icon}
                                            alt="English Audio"
                                            className={styles["page34__icon"]}
                                            onClick={() => playAudio(pg26Audio2_1)}
                                        />
                                    </td>
                                    <td>
                                        Nós estamos no cinema
                                        <img
                                            src={ptbr_audio_icon}
                                            alt="Portuguese Audio"
                                            className={styles["page34__icon"]}
                                            onClick={() => playAudio(traducao26Audio2)}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ textAlign: "center" }}>You</td>
                                    <td style={{ textAlign: "center" }}>are</td>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        the new director
                                        <img
                                            src={eng_audio_icon}
                                            alt="English Audio"
                                            className={styles["page34__icon"]}
                                            onClick={() => playAudio(pg9Audio1)}
                                        />
                                    </td>
                                    <td>
                                        Você é o novo diretor.
                                        <img
                                            src={ptbr_audio_icon}
                                            alt="Portuguese Audio"
                                            className={styles["page34__icon"]}
                                            onClick={() => playAudio(traducao9Audio1)}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ textAlign: "center" }}>&nbsp; You're</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        the new director
                                        <img
                                            src={eng_audio_icon}
                                            alt="English Audio"
                                            className={styles["page34__icon"]}
                                            onClick={() => playAudio(pg9Audio1_1)}
                                        />
                                    </td>
                                    <td>
                                        Você é o novo diretor.
                                        <img
                                            src={ptbr_audio_icon}
                                            alt="Portuguese Audio"
                                            className={styles["page34__icon"]}
                                            onClick={() => playAudio(traducao9Audio1)}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ textAlign: "center" }}>They</td>
                                    <td style={{ textAlign: "center" }}>are</td>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        from Brazil
                                        <img
                                            src={eng_audio_icon}
                                            alt="English Audio"
                                            className={styles["page34__icon"]}
                                            onClick={() => playAudio(pg30Audio1)}
                                        />
                                    </td>
                                    <td>
                                        Eles / Elas são do Brasil.
                                        <img
                                            src={ptbr_audio_icon}
                                            alt="Portuguese Audio"
                                            className={styles["page34__icon"]}
                                            onClick={() => playAudio(traducao30Audio1)}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ textAlign: "center" }}>&nbsp; They're</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        from Brazil
                                        <img
                                            src={eng_audio_icon}
                                            alt="English Audio"
                                            className={styles["page34__icon"]}
                                            onClick={() => playAudio(pg30Audio1_1)}
                                        />
                                    </td>
                                    <td>
                                        Eles / Elas são do Brasil.
                                        <img
                                            src={ptbr_audio_icon}
                                            alt="Portuguese Audio"
                                            className={styles["page34__icon"]}
                                            onClick={() => playAudio(traducao30Audio1)}
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <table className={styles["page34__table--styled"]}>
                            <colgroup>
                                <col className={styles["page34__subject"]} />
                                <col className={styles["page34__auxiliary--verb"]} />
                                <col className={styles["page34__adverb"]} />
                                <col className={styles["page34__verb"]} />
                                <col className={styles["page34__objective--complement"]} />
                                <col className={styles["page34__translation"]} />
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
                                                    className={styles["page34__input--cell"]}
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

export default Pagina34;
