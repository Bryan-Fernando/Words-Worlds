import React, { useRef } from 'react';

import styles from './pagina124.module.css';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';

import global_grammar_wo from '../assets/audios/global_grammar_wo.mp3';
import pg124_audio1e from '../assets/audios/pg124_audio1e.mp3';
import pg124_audio2e from '../assets/audios/pg124_audio2e.mp3';
import pg124_audio3e from '../assets/audios/pg124_audio3e.mp3';
import pg124_audio4e from '../assets/audios/pg124_audio4e.mp3';

const Pagina124 = () => {
    const currentAudioRef = useRef(null);

    const audioMap = {
        global_grammar_wo,
        pg124_audio1e,
        pg124_audio2e,
        pg124_audio3e,
        pg124_audio4e
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
        <div className={styles["page124__container"]}>
            <header className={styles["page124__header"]}>
                <h1 className={styles["page124__title"]}>
                    Grammar - <span className={styles["page124__text-black"]}>Would</span>
                    <img
                        src={eng_audio_icon}
                        alt="English audio"
                        className={styles["page124__header-icon"]}
                        onClick={() => playAudio("global_grammar_wo")}
                    />
                </h1>
            </header>
            <main className={styles["page124__main"]}>
                <aside className={styles.pg124Aside}>
                    <div className={styles.pg124Asidecontainer}>
                        <div className={styles.pg124AsideNotes1}>
                            <p>Would - Futuro do Pretérito</p>
                        </div>
                        <div className={styles.pg124AsideNotes2}>
                            <p>
                                <span style={{ color: 'red' }}>"Would"</span> é um
                                <span style={{ color: 'red' }}> Verbo Modal / Auxiliar </span> que não tem uma tradução
                                exata, mas que coloca o verbo principal no futuro do pretérito
                                com a terminação de <span style={{ color: 'red' }}>"ria"</span>.
                                <span style={{ color: 'red' }}>"Would"</span> é um
                                <span style={{ color: 'red' }}> Verbo Modal / Auxiliar </span> que não tem uma tradução
                                exata, mas que coloca o verbo principal no futuro do pretérito
                                com a terminação de <span style={{ color: 'red' }}>"ria"</span>.
                            </p>
                        </div>
                    </div>
                </aside>

                <div className={styles["page124__table-interrogative-container"]}>
                    <div className={styles["page124__table-header-interrogative"]}>INTERROGATIVE FORM (?)</div>
                    <table className={styles["page124__styled-table-interrogative"]}>
                        <thead className={styles["page124__thead"]}>
                            <tr className={styles["page124__table-row"]}>
                                <th>Palavras <br /> Interrogativas</th>
                                <th>Verbo <br /> Auxiliar</th>
                                <th>Sujeito</th>
                                <th><span className={styles["highlight"]}>Not</span> <br />Advérbio</th>
                                <th>Verbo(s)</th>
                                <th>Objeto <br /> Complemento</th>
                            </tr>
                            <tr className={styles["page124__table-row"]}>
                                <th className={styles["page124__celulacolor"]}></th>
                                <th className={styles["page124__celulacolor"]}
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => playAudio("pg124_audio1e")}>Would</th>
                                <th className={styles["page124__celulacolor"]}
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => playAudio("pg124_audio1e")}>you</th>
                                <th className={styles["page124__celulacolor"]}></th>
                                <th className={styles["page124__celulacolor"]}
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => playAudio("pg124_audio1e")}>like</th>
                                <th
                                    className={styles["page124__celulacolor"]}
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => playAudio("pg124_audio1e")}
                                >
                                    some tea ?
                                </th>
                            </tr>
                        </thead>
                    </table>
                </div>

                <div className={styles["page124__container-textoa"]}>
                    <h3>Exemplos:</h3>
                    <p>
                        • ( <span className={styles["page124_text-Bolder"]}>Would you like some tea ?</span> )
                        <img
                            src={eng_audio_icon}
                            alt="English audio"
                            className={styles["page124__additional-icon"]}
                            onClick={() => playAudio("pg124_audio1e")}
                        /> Você <span className={styles["highlight"]}>gostaria</span> de um pouco de chá ?

                    </p>
                    <p>
                        • ( <span className={styles["page124_text-Bolder"]}>Would you help me, please ?</span> )
                        <img
                            src={eng_audio_icon}
                            alt="English audio"
                            className={styles["page124__additional-icon"]}
                            onClick={() => playAudio("pg124_audio2e")}
                            style={{ cursor: 'pointer', marginLeft: '8px' }}
                        />
                        Você <span className={styles["highlight"]}>me ajudaria</span>, por favor ?

                    </p>
                </div>

                <div className={styles.pg124tabelaAfirmativaContainer}>
                    <div className={styles.pg124tableHeaderAfirmativa}>AFIRMATIVE FORM (+)</div>
                    <table className={styles.pg124styledTableAfirmativa}>
                        <thead className={styles.pg124Thead}>
                            <tr className={styles.pg124celulatable}>
                                <th>Introdução</th>
                                <th>Sujeito</th>
                                <th>Verbo <br /> Auxiliar</th>
                                <th>Advérbio</th>
                                <th>Verbo(s)</th>
                                <th>Objeto <br /> Complemento</th>
                            </tr>
                            <tr className={styles.pg124celulatable}>
                                <th className={styles["page124__celulacolor"]}>I</th>
                                <th className={styles["page124__celulacolor"]} style={{ cursor: 'pointer' }}
                                    onClick={() => playAudio("pg124_audio3e")}></th>
                                <th className={styles["page124__celulacolor"]} style={{ cursor: 'pointer' }}
                                    onClick={() => playAudio("pg124_audio3e")}>would</th>
                                <th className={styles["page124__celulacolor"]}></th>
                                <th className={styles["page124__celulacolor"]} style={{ cursor: 'pointer' }}
                                    onClick={() => playAudio("pg124_audio3e")}>like</th>
                                <th
                                    className={styles["page124__celulacolor"]}
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => playAudio("pg124_audio3e")}
                                >
                                    a sandwich, please.
                                </th>
                            </tr>
                        </thead>
                    </table>
                </div>

                <div className={styles["page124__container-textoa"]}>
                    <h3>Exemplos:</h3>
                    <p>
                        • ( <span className={styles["page124_text-Bolder"]}>I would like a sandwich, please.</span> )
                        <img
                            src={eng_audio_icon}
                            alt="English audio"
                            className={styles["page124__additional-icon"]}
                            onClick={() => playAudio("pg124_audio3e")}
                            style={{ cursor: 'pointer', marginLeft: '8px' }}
                        />
                        Eu <span className={styles["highlight"]}>gostaria</span> de um sanduíche, por favor

                    </p>
                    <p>
                        • ( <span className={styles["page124_text-Bolder"]}>She would like to go to the park.</span> )
                        <img
                            src={eng_audio_icon}
                            alt="English audio"
                            className={styles["page124__additional-icon"]}
                            onClick={() => playAudio("pg124_audio4e")}
                            style={{ cursor: 'pointer', marginLeft: '8px' }}
                        />
                        Ela <span className={styles["highlight"]}>gostaria</span> de ir ao parque.

                    </p>
                </div>
            </main>
        </div>
    );
};

export default Pagina124;
