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
import pg106_audio1 from '../assets/audios/pg106_audio1.mp3';
import pg106_audio2 from '../assets/audios/pg106_audio2.mp3';
import pg106_audio3 from '../assets/audios/pg106_audio3.mp3';
import pg106_audio4 from '../assets/audios/pg106_audio4.mp3';
import pg106_audio5 from '../assets/audios/pg106_audio5.mp3';
import pg106_audio6 from '../assets/audios/pg106_audio6.mp3';
import pg106_audio7 from '../assets/audios/pg106_audio7.mp3';
import pg106_trad1 from '../assets/audios/pg106_trad1.mp3';
import pg106_trad2 from '../assets/audios/pg106_trad2.mp3';
import pg106_trad3 from '../assets/audios/pg106_trad3.mp3';
import pg106_trad4 from '../assets/audios/pg106_trad4.mp3';
import pg106_trad5 from '../assets/audios/pg106_trad5.mp3';
import pg106_trad6 from '../assets/audios/pg106_trad6.mp3';
import pg106_trad7 from '../assets/audios/pg106_trad7.mp3';


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
            <div className={styles.pg106Container}>
                <header className={styles.pg106Header}>
                    <h1 className={styles.pg8AudioText}
                        onClick={() => playAudio(global_grammar)} style={{ cursor: 'pointer' }}>
                        Grammar
                    </h1>
                    <h2 className={styles.pg8AudioText}
                        onClick={() => playAudio(global_simple_present_main)}
                        style={{ cursor: 'pointer' }}>
                        Simple Present - Main verbs
                        <br />
                       <span style={{ color: 'black', fontSize: '3rem', position: 'relative', bottom: '1rem'} }> Presente simples - Verbos principais</span>
                    </h2>
                </header>
                <main className={styles.pg106Main}>
                    <div>
                        <div
                            className={styles.pg106TableHeader}
                            onClick={() => playAudio(afirmativaAudio)}
                            style={{ cursor: 'pointer' }}
                        >
                            AFFIRMATIVE
                        </div>
                        <table className={styles.pg106StyledTable}>
                            <colgroup>
                                <col className={styles.pg106Sujeito} />
                                <col className={styles.pg106verbo_auxiliar} />
                                <col className={styles.pg106Adverbio} />
                                <col className={styles.pg106Verbo} />
                                <col className={styles.pg106ObjetivoComplemento} />
                                <col className={styles.pg106Traducao} />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th onClick={() => playAudio(sujeitoAudio)} style={{ cursor: 'pointer' }}>Subject</th>
                                    <th onClick={() => playAudio(verbo_auxiliarAudio)} style={{ cursor: 'pointer' }}>
                                        Auxiliary <br /> Verb
                                    </th>
                                    <th onClick={() => playAudio(adverbioAudio)} style={{ cursor: 'pointer' }}>Adverb</th>
                                    <th onClick={() => playAudio(verboAudio)} style={{ cursor: 'pointer' }}>Verb(s)</th>
                                    <th onClick={() => playAudio(objeto_complemento_audio)} style={{ cursor: 'pointer' }}>
                                        Object <br /> Complement
                                    </th>
                                    <th onClick={() => playAudio(traducaoAudio)} style={{ cursor: 'pointer' }}>Translation</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { subject: "I", verb: "work", complement: "on Mondays", audio: pg106_audio1, translation: "Eu trabalho às segundas-feiras", tradAudio: pg106_trad1 },                                    
                                ].map((row, index) => (
                                    <tr key={index} onClick={() => playAudio(row.audio)} style={{ cursor: 'pointer' }}>
                                        <td className={styles.pg106Sujeito} style={{ textAlign: 'center' }}>{row.subject}</td>
                                        <td className={styles.pg106verbo_auxiliar}></td>
                                        <td className={styles.pg106Adverbio}></td>
                                        <td className={styles.pg106Verbo}>{row.verb}</td>
                                        <td className={styles.pg106ObjetivoComplemento}>{row.complement}</td>
                                        <td className={styles.pg106Traducao} onClick={(e) => { e.stopPropagation(); playAudio(row.tradAudio); }}>
                                            {row.translation}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>

                        </table>
                        <table className={styles.pg106StyledTable}>
                            <colgroup>
                                <col className={styles.pg106Sujeito} />
                                <col className={styles.pg106verbo_auxiliar} />
                                <col className={styles.pg106Adverbio} />
                                <col className={styles.pg106Verbo} />
                                <col className={styles.pg106ObjetivoComplemento} />
                                <col className={styles.pg106Traducao} />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th onClick={() => playAudio(sujeitoAudio)} style={{ cursor: 'pointer' }}>Subject</th>
                                    <th onClick={() => playAudio(verbo_auxiliarAudio)} style={{ cursor: 'pointer' }}>
                                        Auxiliary <br /> Verb
                                    </th>
                                    <th onClick={() => playAudio(adverbioAudio)} style={{ cursor: 'pointer' }}>Adverb</th>
                                    <th onClick={() => playAudio(verboAudio)} style={{ cursor: 'pointer' }}>Verb(s)</th>
                                    <th onClick={() => playAudio(objeto_complemento_audio)} style={{ cursor: 'pointer' }}>
                                        Object  <br /> Complement
                                    </th>
                                    <th onClick={() => playAudio(traducaoAudio)} style={{ cursor: 'pointer' }}>Translation</th>
                                </tr>
                            </thead>
                            <tbody>
                                {inputValues.map((row, rowIndex) => (
                                    <tr key={rowIndex}>
                                        {row.map((value, colIndex) => (
                                            <td key={colIndex}>
                                                <textarea
                                                    id={`input-${rowIndex}-${colIndex}`}
                                                    className={styles.pg106InputCell}
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
                <aside className={styles.pg106Aside}>
                    <div className={styles.pg106AsideNotes1A}>
                        <p>Word Bank</p>
                    </div>
                    <div className={styles.pg106AsideNotes2A}>
                        <p>To work  <br />
                            Trabalhar/Funcionar.
                        </p>
                    </div>
                </aside>
                <aside className={styles.pg106Aside}>
                    <div className={styles.pg106AsideNotes1B}>
                        <img className={styles.pg106AsideImgNotesB} src={pg106IconNotes} alt="" />
                        <p>NOTE:</p>
                    </div>
                    <div className={styles.pg106AsideNotes2B}>
                        <p>Acrescentar “s” somente nos verbos com os pronomes he / she / it.<br />
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
