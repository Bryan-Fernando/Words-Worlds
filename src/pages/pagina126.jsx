import React, { useRef } from 'react';

import styles from './pagina126.module.css';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';

import global_grammar_wo from '../assets/audios/global_grammar_wo.mp3';
import pg126_audio1e from '../assets/audios/pg126_audio1e.mp3';
import pg126_audio2e from '../assets/audios/pg126_audio2e.mp3';
import pg126_audio3e from '../assets/audios/pg126_audio3e.mp3';
import pg126_audio4e from '../assets/audios/pg126_audio4e.mp3';

const Pagina126 = () => {
    const currentAudioRef = useRef(null);

    const audioMap = {
        global_grammar_wo,
        pg126_audio1e,
        pg126_audio2e,
        pg126_audio3e,
        pg126_audio4e
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
        <div className={styles["page126__container"]}>
            <header className={styles["page126__header"]}>
                <h1 className={styles["page126__title"]}>
                    Grammar - <span className={styles["page126__text-black"]}>Would</span>
                    <img
                        src={eng_audio_icon}
                        alt="English audio"
                        className={styles["page126__header-icon"]}
                        onClick={() => playAudio("global_grammar_wo")}
                    />
                </h1>
            </header>

            <main className={styles["page126__main"]}>
                {/* NEGATIVE FORM TABLE */}
                <div className={styles.pg126tabelaNegativaContainer}>
                    <div className={styles["page126__titulo-table"]}>
                        <h3>Forma Contraída: Negativa</h3>
                    </div>
                    <div className={styles.pg126tableHeaderNegativa}>NEGATIVE FORM (-)</div>
                    <table className={styles.pg126styledTableNegativa}>
                        <thead className={styles.page126__thead}>
                            <tr className={styles.pg126celulatable}>
                                <th>Introdução</th>
                                <th>Sujeito</th>
                                <th>Verbo <br /> Auxiliar</th>
                                <th><span style={{ color: 'red' }}>Not</span> <br /> Advérbio</th>
                                <th>Verbo(s)</th>
                                <th>Objeto / Complemento</th>
                                <th>Tradução</th>
                            </tr>
                            <tr className={styles.pg126celulatable}>
                                <th className={styles["page126__celulacolor"]}></th>
                                <th className={styles["page126__celulacolor"]} style={{ cursor: 'pointer' }} onClick={() => playAudio("pg126_audio1e")}>I</th>
                                <th className={styles["page126__celulacolor"]} style={{ cursor: 'pointer' }} onClick={() => playAudio("pg126_audio1e")}>wouldn’t</th>
                                <th className={styles["page126__celulacolor"]}></th>
                                <th className={styles["page126__celulacolor"]} style={{ cursor: 'pointer' }} onClick={() => playAudio("pg126_audio1e")}>go out</th>
                                <th className={styles["page126__celulacolor"]} style={{ cursor: 'pointer' }} onClick={() => playAudio("pg126_audio1e")}>in this heavy rain.</th>
                                <th className={styles["page126__celulacolor"]}>Eu não sairia <br /> nessa chuva forte.</th>
                            </tr>
                            <tr className={styles.pg126celulatable}>
                                <th className={styles["page126__celulacolor"]}></th>
                                <th className={styles["page126__celulacolor"]} style={{ cursor: 'pointer' }} onClick={() => playAudio("pg126_audio2e")}>I</th>
                                <th className={styles["page126__celulacolor"]} style={{ cursor: 'pointer' }} onClick={() => playAudio("pg126_audio2e")}>would</th>
                                <th className={styles["page126__celulacolor"]} style={{ cursor: 'pointer' }} onClick={() => playAudio("pg126_audio2e")}>not</th>
                                <th className={styles["page126__celulacolor"]} style={{ cursor: 'pointer' }} onClick={() => playAudio("pg126_audio2e")}>go out</th>
                                <th className={styles["page126__celulacolor"]} style={{ cursor: 'pointer' }} onClick={() => playAudio("pg126_audio2e")}>in this heavy rain. (Antiquado)</th>
                                <th className={styles["page126__celulacolor"]}>Eu não sairia <br /> nessa chuva forte. <br /> (forma antiquada)</th>
                            </tr>
                        </thead>
                    </table>
                </div>

                {/* INTERROGATIVE NEGATIVE FORM TABLE */}
                <div className={styles.pg126tabelaNegativaContainer}>
                    <div className={styles["page126__titulo-table2"]}>
                        <h3>Forma Contraída: Interrogativa Negativa</h3>
                    </div>
                    <div className={styles.pg126tableHeaderNegativa}>INTERROGATIVE NEGATIVE FORM (?)</div>
                    <table className={styles.pg126styledTableNegativa}>
                        <thead className={styles.page126__thead}>
                            <tr className={styles.pg126celulatable}>
                                <th>Palavras Interrogativas</th>
                                <th>Verbo Auxiliar</th>
                                <th>Sujeito</th>
                                <th><span style={{ color: 'red' }}>Not</span> Advérbio</th>
                                <th>Verbo(s)</th>
                                <th>Objeto / Complemento</th>
                                <th>Tradução</th>
                            </tr>
                            <tr className={styles.pg126celulatable}>
                                <th className={styles["page126__celulacolor"]}></th>
                                <th className={styles["page126__celulacolor"]} style={{ cursor: 'pointer' }} onClick={() => playAudio("pg126_audio3e")}>Wouldn’t</th>
                                <th className={styles["page126__celulacolor"]} style={{ cursor: 'pointer' }} onClick={() => playAudio("pg126_audio3e")}>you</th>
                                <th className={styles["page126__celulacolor"]}></th>
                                <th className={styles["page126__celulacolor"]} style={{ cursor: 'pointer' }} onClick={() => playAudio("pg126_audio3e")}>like</th>
                                <th className={styles["page126__celulacolor"]} style={{ cursor: 'pointer' }} onClick={() => playAudio("pg126_audio3e")}>some tea?</th>
                                <th className={styles["page126__celulacolor"]}>Você não gostaria de um pouco de chá?</th>
                            </tr>
                            <tr className={styles.pg126celulatable}>
                                <th className={styles["page126__celulacolor"]}></th>
                                <th className={styles["page126__celulacolor"]} style={{ cursor: 'pointer' }} onClick={() => playAudio("pg126_audio4e")}>Would</th>
                                <th className={styles["page126__celulacolor"]} style={{ cursor: 'pointer' }} onClick={() => playAudio("pg126_audio4e")}>you</th>
                                <th className={styles["page126__celulacolor"]} style={{ cursor: 'pointer' }} onClick={() => playAudio("pg126_audio4e")}>not</th>
                                <th className={styles["page126__celulacolor"]} style={{ cursor: 'pointer' }} onClick={() => playAudio("pg126_audio4e")}>like</th>
                                <th className={styles["page126__celulacolor"]} style={{ cursor: 'pointer' }} onClick={() => playAudio("pg126_audio4e")}>some tea?</th>
                                <th className={styles["page126__celulacolor"]}>Você não gostaria de um pouco de chá? (forma antiquada)</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </main>
        </div>
    );
};

export default Pagina126;
