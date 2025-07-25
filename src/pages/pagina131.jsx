import React, { useState, useRef } from 'react';

import styles from './pagina106.module.css';

import pg106IconNotes from '../assets/icons/notes_icon.webp';

import global_grammar from '../assets/audios/global_grammar.mp3';
import global_simple_present_main from '../assets/audios/global_simple_present_main.mp3';
import afirmativaAudio from '../assets/audios/afirmativa.mp3';
import sujeitoAudio from '../assets/audios/sujeito.mp3';
import verbo_auxiliarAudio from '../assets/audios/verbo_auxiliar.mp3';
import adverbioAudio from '../assets/audios/adverbio.mp3';
import verboAudio from '../assets/audios/verbo.mp3';
import objeto_complemento_audio from '../assets/audios/objeto_complemento.mp3';
import traducaoAudio from '../assets/audios/traducao.mp3';
import pg106_audio2 from '../assets/audios/pg106_audio2.mp3';
import pg106_audio3 from '../assets/audios/pg106_audio3.mp3';
import pg106_trad2 from '../assets/audios/pg106_trad2.mp3';
import pg106_trad3 from '../assets/audios/pg106_trad3.mp3';



const Pagina106 = () => {
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
            <div className={styles["page106__container"]}>
    <header className={styles["page106__header"]}>
        <h1
            className={styles["page106__audio-text"]}
            onClick={() => playAudio(global_grammar)}
            style={{ cursor: 'pointer' }}
        >
            Grammar
        </h1>
        <h2
            className={styles["page106__audio-text"]}
            onClick={() => playAudio(global_simple_present_main)}
            style={{ cursor: 'pointer' }}
        >
            Simple Present - Main verbs
            <br />
            <span style={{ color: 'black', fontSize: '3rem', position: 'relative', bottom: '1rem' }}>
                Presente simples - Verbos principais
            </span>
        </h2>
    </header>

    <main className={styles["page106__main"]}>
        <div>
            <div
                className={styles["page106__table--header"]}
                onClick={() => playAudio(afirmativaAudio)}
                style={{ cursor: 'pointer' }}
            >
                AFFIRMATIVE
            </div>
            <table className={styles["page106__styled--table"]}>
                <colgroup>
                    <col className={styles["page106__sujeito"]} />
                    <col className={styles["page106__verbo--auxiliar"]} />
                    <col className={styles["page106__adverbio"]} />
                    <col className={styles["page106__verbo"]} />
                    <col className={styles["page106__objetivo--complemento"]} />
                    <col className={styles["page106__traducao"]} />
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
                            Adverb
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
                        { subject: "He", verb: "works", complement: "on Tuesdays", audio: pg106_audio2, translation: "Ele trabalha às terças-feiras", tradAudio: pg106_trad2 },
                        { subject: "She", verb: "works", complement: "on Wednesdays", audio: pg106_audio3, translation: "Ela trabalha às quartas-feiras", tradAudio: pg106_trad3 },
                    ].map((row, index) => (
                        <tr key={index} onClick={() => playAudio(row.audio)} style={{ cursor: 'pointer' }}>
                            <td className={styles["page106__sujeito"]} style={{ textAlign: 'center' }}>
                                {row.subject}
                            </td>
                            <td className={styles["page106__verbo--auxiliar"]}></td>
                            <td className={styles["page106__adverbio"]}></td>
                            <td className={styles["page106__verbo"]} style={{ color: '#A61C28' }}>
                                {row.verb}
                            </td>
                            <td className={styles["page106__objetivo--complemento"]}>{row.complement}</td>
                            <td
                                className={styles["page106__traducao"]}
                                onClick={(e) => { e.stopPropagation(); playAudio(row.tradAudio); }}
                            >
                                {row.translation}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <table className={styles["page106__styled--table"]}>
                <colgroup>
                    <col className={styles["page106__sujeito"]} />
                    <col className={styles["page106__verbo--auxiliar"]} />
                    <col className={styles["page106__adverbio"]} />
                    <col className={styles["page106__verbo"]} />
                    <col className={styles["page106__objetivo--complemento"]} />
                    <col className={styles["page106__traducao"]} />
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
                            Adverb
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
                                        className={styles["page106__input--cell"]}
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

    <aside className={styles["page106__aside"]}>
        <div className={styles["page106__aside--notes1--a"]}>
            <p>Word Bank</p>
        </div>
        <div className={styles["page106__aside--notes2--a"]}>
            <p>To work <br />
                Trabalhar/Funcionar.
            </p>
        </div>
    </aside>

    <aside className={styles["page106__aside"]}>
        <div className={styles["page106__aside--notes1--b"]}>
            <img className={styles["page106__aside--img--notes--b"]} src={pg106IconNotes} alt="" />
            <p>NOTE:</p>
        </div>
        <div className={styles["page106__aside--notes2--b"]}>
            <p>
                Acrescentar “s” somente nos verbos com os pronomes he / she / it.<br />
                USO: Para falar de ações cotidianas, hábitos, verdades, fatos, características; descrever
                ações em geral.
            </p>
        </div>
    </aside>
</div>

        </div>
    );
};

export default Pagina106;
