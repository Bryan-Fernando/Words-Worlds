import React, { useState, useRef } from 'react';

import styles from './pagina125.module.css';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';

import global_grammar_wo from '../assets/audios/global_grammar_wo.mp3';
import pg125_audio1e from '../assets/audios/pg125_audio1e.mp3';
import pg125_audio1_2e from '../assets/audios/pg125_audio1_2e.mp3';
import pg125_audio2e from '../assets/audios/pg125_audio2e.mp3';
import pg125_audio3e from '../assets/audios/pg125_audio3e.mp3';
import pg125_audio4e from '../assets/audios/pg125_audio4e.mp3';
import pg125_audio5e from '../assets/audios/pg125_audio5e.mp3';
import pg125_audio6e from '../assets/audios/pg125_audio6e.mp3';

const Pagina125 = () => {
    const currentAudioRef = useRef(null);

    const audioMap = {
        global_grammar_wo,
        pg125_audio1e,
        pg125_audio1_2e,
        pg125_audio2e,
        pg125_audio3e,
        pg125_audio4e,
        pg125_audio5e,
        pg125_audio6e
    };

    const playAudio = (audioKey) => {
        if (currentAudioRef.current) {
            currentAudioRef.current.pause();
            currentAudioRef.current.currentTime = 0;
        }

        if (audioMap[audioKey]) {
            const audio = new Audio(audioMap[audioKey]);
            currentAudioRef.current = audio;
            audio.play().catch((error) => console.error("Erro ao reproduzir o áudio:", error));
        } else {
            console.warn(`Áudio não encontrado para: ${audioKey}`);
        }
    };

    return (
        <div className={styles["page125__container"]}>
            <header className={styles["page125__header"]}>
                <h1 className={styles["page125__title"]}>
                    Grammar - <span className={styles["page125__text-black"]}>Would</span>
                    <img
                        src={eng_audio_icon}
                        alt="English audio"
                        className={styles["page125__header-icon"]}
                        onClick={() => playAudio("global_grammar_wo")}
                    />
                </h1>
            </header>

            <main className={styles["page125__main"]}>
                {/* NEGATIVE FORM */}
                <div className={styles.pg125tabelaNegativaContainer}>
                    <div className={styles.pg125tableHeaderNegativa}>NEGATIVE FORM (-)</div>
                    <table className={styles.pg125styledTableNegativa}>
                        <thead className={styles.page125Thead}>
                            <tr className={styles.pg125celulatable}>
                                <th>Introdução</th>
                                <th>Sujeito</th>
                                <th>Verbo <br /> Auxiliar</th>
                                <th><span style={{ color: 'red' }}>Not</span> <br />Advérbio</th>
                                <th>Verbo(s)</th>
                                <th>Objeto <br /> Complemento</th>
                                <th>Tradução</th>
                            </tr>

                            {/* Linha 1 (contraída) – único ícone no “to Lisbon.” */}
                            <tr className={styles.pg125celulatable}>
                                <th className={styles["page125__celulacolor"]}></th>
                                <th className={styles["page125__celulacolor"]}>I</th>
                                <th className={styles["page125__celulacolor"]}>wouldn’t</th>
                                <th className={styles["page125__celulacolor"]}></th>
                                <th className={styles["page125__celulacolor"]}>like to move</th>
                                <th className={styles["page125__celulacolor"]}>
                                    to Lisbon.
                                    <img
                                        src={eng_audio_icon}
                                        alt="Play row audio"
                                        className={styles["page125__additional-icon"]}
                                        onClick={() => playAudio("pg125_audio1e")}
                                    />
                                </th>
                                <th className={styles["page125__celulacolor"]}>
                                    Eu não gostaria de <br /> me mudar para Lisboa.
                                </th>
                            </tr>

                            {/* Linha 2 (forma longa) – único ícone no “to Lisbon.” */}
                            <tr className={styles.pg125celulatable}>
                                <th className={styles["page125__celulacolor"]}></th>
                                <th className={styles["page125__celulacolor"]}>I</th>
                                <th className={styles["page125__celulacolor"]}>would</th>
                                <th className={styles["page125__celulacolor"]}>not</th>
                                <th className={styles["page125__celulacolor"]}>like to move</th>
                                <th className={styles["page125__celulacolor"]}>
                                    to Lisbon.
                                    <img
                                        src={eng_audio_icon}
                                        alt="Play row audio"
                                        className={styles["page125__additional-icon"]}
                                        onClick={() => playAudio("pg125_audio1_2e")}
                                    />
                                </th>
                                <th className={styles["page125__celulacolor"]}>
                                    Eu não gostaria de <br /> me mudar para Lisboa.
                                </th>
                            </tr>
                        </thead>
                    </table>
                </div>

                {/* Texto e exemplos */}
                <div className={styles["page125__container-textoa"]}>
                    <h3 style={{ display: 'flex', alignItems: 'center' }}>
                        <span style={{ color: '#A61C28' }}>3 -</span> Would - Negative Form
                        <img
                            src={eng_audio_icon}
                            alt="English audio"
                            className={styles["page125__additional-icon"]}
                            onClick={() => playAudio("pg125_audio2e")}
                        />
                    </h3>
                    <p>
                        • ( <span className={styles["page125_text-Bolder"]}>I would not go out in this heavy rain.</span> )
                        <img
                            src={eng_audio_icon}
                            alt="English audio"
                            className={styles["page125__additional-icon"]}
                            onClick={() => playAudio("pg125_audio3e")}
                        /> <br />
                        Eu <span className={styles["highlight"]}>não sairia</span> nessa chuva forte.
                    </p>
                    <p>
                        • ( <span className={styles["page125_text-Bolder"]}>
                            She wouldn’t go to the movies because she is working on Saturday.
                        </span> )
                        <img
                            src={eng_audio_icon}
                            alt="English audio"
                            className={styles["page125__additional-icon"]}
                            onClick={() => playAudio("pg125_audio4e")}
                        /> <br />
                        Ela <span className={styles["highlight"]}>não</span> iria ao cinema porque ela está trabalhando aos sábados.
                    </p>
                </div>

                {/* Aside / Notas */}
                <aside className={styles.pg125Aside}>
                    <div className={styles.pg125Asidecontainer}>
                        <div className={styles.pg125AsideNotes1}>
                            <p>Nota:</p>
                        </div>
                        <div className={styles.pg125AsideNotes2}>
                            <p>
                                • <span className={styles["highlight"]}>Would </span> é uma palavra especial que usamos para sermos gentis ou falar sobre o que queremos. <br />
                                • Usamos “would“ para expressar o que queremos ou preferimos de forma mais educada. <br />
                                • Usado também para <span className={styles["highlight"]}>Pedidos</span>, <span className={styles["highlight"]}>Solicitações</span> e <span className={styles["highlight"]}>Ofertas</span>.
                            </p>
                        </div>
                    </div>
                </aside>

                {/* Forma Contraída: Afirmativa */}
                <div>
                    <div className={styles["page125__titulo-table"]}>
                        <h3>Forma Contraída: Afirmativa</h3>
                    </div>

                    <div className={styles.pg125tabelaAfirmativaContainer}>
                        <div className={styles.pg125tableHeaderAfirmativa}>Forma contraída: Aﬁrmativa</div>
                        <table className={styles.pg125styledTableAfirmativa}>
                            <thead className={styles.page125Thead}>
                                <tr className={styles.pg125celulatable}>
                                    <th>Introdução</th>
                                    <th>Sujeito</th>
                                    <th>Verbo <br /> Auxiliar</th>
                                    <th>Advérbio</th>
                                    <th>Verbo(s)</th>
                                    <th>Objeto <br /> Complemento</th>
                                    <th>Tradução</th>
                                </tr>

                                {/* Linha 1 (afirmativa completa) – ícone no objeto */}
                                <tr className={styles.pg125celulatable}>
                                    <th className={styles["page125__celulacolor"]}></th>
                                    <th className={styles["page125__celulacolor"]}>I</th>
                                    <th className={styles["page125__celulacolor"]}>would</th>
                                    <th className={styles["page125__celulacolor"]}></th>
                                    <th className={styles["page125__celulacolor"]}>like</th>
                                    <th className={styles["page125__celulacolor"]}>
                                        a ham and cheese sandwich.
                                        <img
                                            src={eng_audio_icon}
                                            alt="Play row audio"
                                            className={styles["page125__additional-icon"]}
                                            onClick={() => playAudio("pg125_audio6e")}
                                        />
                                    </th>
                                    <th className={styles["page125__celulacolor"]}>Eu gostaria de um misto</th>
                                </tr>

                                {/* Linha 2 (I’d) – ícone no objeto */}
                                <tr className={styles.pg125celulatable}>
                                    <th className={styles["page125__celulacolor"]}></th>
                                    <th className={styles["page125__celulacolor"]}>I‘d</th>
                                    <th className={styles["page125__celulacolor"]}>-</th>
                                    <th className={styles["page125__celulacolor"]}></th>
                                    <th className={styles["page125__celulacolor"]}>like</th>
                                    <th className={styles["page125__celulacolor"]}>
                                        a ham and cheese sandwich.
                                        <img
                                            src={eng_audio_icon}
                                            alt="Play row audio"
                                            className={styles["page125__additional-icon"]}
                                            onClick={() => playAudio("pg125_audio5e")}
                                        />
                                    </th>
                                    <th className={styles["page125__celulacolor"]}>
                                        Eu gostaria de um misto de <br /> presunto e queijo.
                                    </th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Pagina125;
