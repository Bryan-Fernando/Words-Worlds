import React, { useState, useRef } from 'react';

import styles from './pagina107.module.css';

import pg10IconNotes from '../assets/icons/notes_icon.webp';

import negativaAudio from '../assets/audios/negativa.mp3';
import sujeitoAudio from '../assets/audios/sujeito.mp3';
import global_grammar from '../assets/audios/global_grammar.mp3';
import global_simple_present from '../assets/audios/global_simple_present.mp3';
import verbo_auxiliarAudio from '../assets/audios/verbo_auxiliar.mp3';
import adverbioAudio from '../assets/audios/adverbio.mp3';
import verboAudio from '../assets/audios/verbo.mp3';
import objeto_complemento_audio from '../assets/audios/objeto_complemento.mp3';
import traducaoAudio from '../assets/audios/traducao.mp3';

import pg107_audio2 from '../assets/audios/pg107_audio2.mp3';
import pg107_audio3 from '../assets/audios/pg107_audio3.mp3';

import pg107_trad2 from '../assets/audios/pg107_trad2.mp3';
import pg107_trad3 from '../assets/audios/pg107_trad3.mp3';


const Pagina107 = () => {
    const [inputValues, setInputValues] = useState(
        Array(3).fill(Array(6).fill(''))
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
            <div className={styles["page107__container"]}>
                <header className={styles["page107__header"]}>
                    <h1
                        className={styles["page107__audio-text"]}
                        onClick={() => playAudio(global_grammar)}
                        style={{ cursor: 'pointer' }}
                    >
                        Grammar
                    </h1>
                    <h2
                        className={styles["page107__audio-text"]}
                        onClick={() => playAudio(global_simple_present)}
                        style={{ color: 'black', cursor: 'pointer' }}
                    >
                        Simple Present (Presente Simples)
                    </h2>
                </header>
                <main className={styles["page107__main"]}>
                    <div>
                        <div
                            className={styles["page107__table--header"]}
                            onClick={() => playAudio(negativaAudio)}
                            style={{ cursor: 'pointer' }}
                        >
                            NEGATIVE
                        </div>
                        <table className={styles["page107__styled--table"]}>
                            <colgroup>
                                <col className={styles["page107__subject"]} />
                                <col className={styles["page107__auxiliary--verb"]} />
                                <col className={styles["page107__adverb"]} />
                                <col className={styles["page107__verb"]} />
                                <col className={styles["page107__object--complement"]} />
                                <col className={styles["page107__translation"]} />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th
                                        onClick={() => playAudio(sujeitoAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Subject
                                    </th>
                                    <th
                                        onClick={() => playAudio(verbo_auxiliarAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Auxiliary <br /> Verb
                                    </th>
                                    <th
                                        onClick={() => playAudio(adverbioAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <span style={{ color: 'red' }}>'Not'</span> <br /> Adverb
                                    </th>
                                    <th
                                        onClick={() => playAudio(verboAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Verb(s)
                                    </th>
                                    <th
                                        onClick={() => playAudio(objeto_complemento_audio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Object <br /> Complement
                                    </th>
                                    <th
                                        onClick={() => playAudio(traducaoAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Translation
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { subject: "He", aux: "does", adv: "not", verb: "work", obj: "every day", trad: "Ele não trabalha todos os dias", audio: pg107_audio2, tradAudio: pg107_trad2 },
                                    { subject: "She", aux: "doesn't", adv: "", verb: "work", obj: "at home", trad: "Ela não trabalha em casa", audio: pg107_audio3, tradAudio: pg107_trad3 },
                                ].map((row, index) => (
                                    <tr key={index} onClick={() => playAudio(row.audio)} style={{ cursor: 'pointer' }}>
                                        <td className={styles["page107__subject"]}>{row.subject}</td>
                                        <td className={styles["page107__auxiliary--verb"]}>{row.aux}</td>
                                        <td className={styles["page107__adverb"]}>{row.adv}</td>
                                        <td className={styles["page107__verb"]}>{row.verb}</td>
                                        <td className={styles["page107__object--complement"]}>{row.obj}</td>
                                        <td
                                            className={styles["page107__translation"]}
                                            onClick={(e) => { e.stopPropagation(); playAudio(row.tradAudio); }}
                                        >
                                            {row.trad}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <table className={styles["page107__styled--table"]}>
                            <colgroup>
                                <col className={styles["page107__subject"]} />
                                <col className={styles["page107__auxiliary--verb"]} />
                                <col className={styles["page107__adverb"]} />
                                <col className={styles["page107__verb"]} />
                                <col className={styles["page107__object--complement"]} />
                                <col className={styles["page107__translation"]} />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th
                                        onClick={() => playAudio(sujeitoAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Subject
                                    </th>
                                    <th
                                        onClick={() => playAudio(verbo_auxiliarAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Auxiliary <br /> Verb
                                    </th>
                                    <th
                                        onClick={() => playAudio(adverbioAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        'Not' <br /> Adverb
                                    </th>
                                    <th
                                        onClick={() => playAudio(verboAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Verb(s)
                                    </th>
                                    <th
                                        onClick={() => playAudio(objeto_complemento_audio)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Object <br /> Complement
                                    </th>
                                    <th
                                        onClick={() => playAudio(traducaoAudio)}
                                        style={{ cursor: 'pointer' }}
                                    >
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
                                                    className={styles["page107__input--cell"]}
                                                    value={value}
                                                    rows="1"
                                                    onChange={(e) => handleInputChange(rowIndex, colIndex, e)}
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

                <aside className={styles["page107__aside"]}>
                    <div className={styles["page107__aside--notes1--a"]}>
                        <p>Word Bank</p>
                    </div>
                    <div className={styles["page107__aside--notes2--a"]}>
                        <p>That way <br />
                            Dessa forma.
                            <br />
                            Hard <br />
                            Muito.
                        </p>
                    </div>
                </aside>

                <aside className={styles["page107__aside"]}>
                    <div className={styles["page107__aside--notes1--b"]}>
                        <img className={styles["page107__aside--img--notes--b"]} src={pg10IconNotes} alt="" />
                        <p>NOTE</p>
                    </div>
                    <div className={styles["page107__aside--notes2--b"]}>
                        <p>Don’t = Do not <br />Doesn’t = Does not</p>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default Pagina107;
