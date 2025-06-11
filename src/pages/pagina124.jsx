import React, { useState } from 'react';

import styles from './pagina124.module.css';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import global_learning_le_e from '../assets/audios/global_learning_le_e.mp3';
import global_learning_le_p from '../assets/audios/global_learning_le_p.mp3';
import pg124_audio1e from '../assets/audios/pg94_audio1e.mp3';
import pg124_audio1p from '../assets/audios/pg94_audio1p.mp3';
import pg124_audio2 from '../assets/audios/pg94_audio2.mp3';
import pg124_audio3 from '../assets/audios/pg94_audio3.mp3';
import pg124_audio4 from '../assets/audios/pg94_audio4.mp3';
import pg124_audio5 from '../assets/audios/pg94_audio5.mp3';
import pg124_audio6 from '../assets/audios/pg94_audio6.mp3';
import pg124_audio7 from '../assets/audios/pg94_audio7.mp3';
import pg124_audio8 from '../assets/audios/pg94_audio8.mp3';
import pg124_audio9 from '../assets/audios/pg94_audio9.mp3';
import pg124_audio10 from '../assets/audios/pg94_audio10.mp3';
import pg124_audio11 from '../assets/audios/pg94_audio11.mp3';

const Pagina124 = () => {
    const [inputValues, setInputValues] = useState(Array(6).fill(''));
    const [results, setResults] = useState(Array(6).fill(null));

    const audioMap = {
        global_learning_le_e,
        global_learning_le_p,
        pg124_audio1e,
        pg124_audio1p,
        pg124_audio2,
        pg124_audio3,
        pg124_audio4,
        pg124_audio5,
        pg124_audio6,
        pg124_audio7,
        pg124_audio8,
        pg124_audio9,
        pg124_audio10,
        pg124_audio11
    };

    const playAudio = (audioKey) => {
        if (audioMap[audioKey]) {
            const audio = new Audio(audioMap[audioKey]);
            audio.play().catch((error) => console.error("Erro ao reproduzir o áudio:", error));
        } else {
            console.warn(`Áudio não encontrado para: ${audioKey}`);
        }
    };

    return (
        <div className={styles["page124__container"]}>
            <header className={styles["page124__header"]}>
                <h1 className={styles["page124__title"]}>
                    Grammar - <spam className={styles["page124__text-black"]}>Would</spam>
                    <img
                        src={eng_audio_icon}
                        alt="English audio"
                        className={styles["page124__header-icon"]}
                        onClick={() => playAudio("global_learning_le_e")}
                    />
                    <img
                        src={ptbr_audio_icon}
                        alt="Portuguese audio"
                        className={styles["page124__header-icon"]}
                        onClick={() => playAudio("global_learning_le_p")}
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
                                “Would“ é um Verbo Modal / Auxiliar que não tem uma tradução
                                exata, mas que coloca o verbo principal no futuro do pretérito
                                com a terminação de “ria“.“Would“ é um Verbo Modal / Auxiliar que não tem uma tradução
                                exata, mas que coloca o verbo principal no futuro do pretérito
                                com a terminação de “ria“.
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
                                <th className={styles["page124__celulacolor"]}>Would</th>
                                <th className={styles["page124__celulacolor"]}>you</th>
                                <th className={styles["page124__celulacolor"]}></th>
                                <th className={styles["page124__celulacolor"]}>like</th>
                                <th className={styles["page124__celulacolor"]}>some tea ?</th>
                            </tr>
                        </thead>
                    </table>
                </div>

                <div className={styles["page124__container-textoa"]}>
                    <h3>Exemplos:</h3>
                    <p>• ( <spam className={styles["page124_text-Bolder"]}>Would you like some tea ?</spam> ) Você <spam className={styles["highlight"]}>gostaria</spam> de um pouco de chá ?</p>
                    <p>• ( <spam className={styles["page124_text-Bolder"]}>Would you help me, please ?</spam> ) Você <spam className={styles["highlight"]}>me ajudaria</spam>, por favor ?</p>
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
                                <th className={styles["page124__celulacolor"]}></th>
                                <th className={styles["page124__celulacolor"]}>would</th>
                                <th className={styles["page124__celulacolor"]}></th>
                                <th className={styles["page124__celulacolor"]}>like</th>
                                <th className={styles["page124__celulacolor"]}>a sandwich, please.</th>
                            </tr>
                        </thead>
                    </table>
                </div>

                <div className={styles["page124__container-textoa"]}>
                    <h3>Exemplos:</h3>
                    <p>• ( <spam className={styles["page124_text-Bolder"]}>would like a sandwich, please.</spam> ) Eu <spam className={styles["highlight"]}>gostaria</spam> de um sanduíche, por
                    favor</p>
                    <p>• ( <spam className={styles["page124_text-Bolder"]}>She would like to go to the park.</spam> ) Ela <spam className={styles["highlight"]}>gostaria</spam> de ir ao parque.</p>
                </div>
            </main>
        </div>
    );
};

export default Pagina124;