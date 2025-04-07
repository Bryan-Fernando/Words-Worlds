import React, { useState } from 'react';

import styles from './pagina125.module.css';

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

const Pagina125 = () => {
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

    const handleCheckClick = () => {
        const newResults = inputValues.map((value, index) => {
            if (!correctAnswers[index]) return false;

            const isCorrect = value.trim().toLowerCase() === correctAnswers[index].toLowerCase();

            return isCorrect;
        });
        setResults(newResults);
    };


    const handleInputChange = (value, index) => {
        const newValues = [...inputValues];
        newValues[index] = value;
        setInputValues(newValues);
    };

    return (
        <div className={styles["page125__container"]}>
            <header className={styles["page125__header"]}>
                <h1 className={styles["page125__title"]}>
                    Grammar - <spam className={styles["page125__text-black"]}>Would</spam>
                    <img
                        src={eng_audio_icon}
                        alt="English audio"
                        className={styles["page125__header-icon"]}
                        onClick={() => playAudio("global_learning_le_e")}
                    />
                    <img
                        src={ptbr_audio_icon}
                        alt="Portuguese audio"
                        className={styles["page125__header-icon"]}
                        onClick={() => playAudio("global_learning_le_p")}
                    />
                </h1>
            </header>
            <main className={styles["page125__main"]}>

                <div className={styles.pg125tabelaNegativaContainer}>
                    <div className={styles.pg125tableHeaderNegativa}>NEGATIVE FORM (-)</div>
                    <table className={styles.pg125styledTableNegativa}>
                        <thead className={styles.pg125Thead}>
                            <tr className={styles.pg125celulatable}>
                                <th>Introdução</th>
                                <th>Sujeito</th>
                                <th>Verbo <br /> Auxiliar</th>
                                <th> <span style={{ color: 'red' }}>Not</span> <br />Advérbio</th>
                                <th>Verbo(s)</th>
                                <th>Objeto <br /> Complemento</th>
                            </tr>
                            <tr className={styles.pg125celulatable}>
                                <th className={styles["page125__celulacolor"]}></th>
                                <th className={styles["page125__celulacolor"]}>I</th>
                                <th className={styles["page125__celulacolor"]}>wouldn’t</th>
                                <th className={styles["page125__celulacolor"]}></th>
                                <th className={styles["page125__celulacolor"]}>like</th>
                                <th className={styles["page125__celulacolor"]}>a sandwich, please.</th>
                            </tr>
                        </thead>
                    </table>
                </div>

                <div className={styles["page125__container-textoa"]}>
                    <h3><spam style={{ color: '#A61C28' }}>3 -</spam> Would - Negative</h3>
                    <p>• ( <spam className={styles["page125_text-Bolder"]}>I would not go out in this heavy rain.</spam> ) <br /> Eu <spam className={styles["highlight"]}>não sairia</spam> nessa chuva forte.</p>
                    <p>• ( <spam className={styles["page125_text-Bolder"]}>She wouldn’t go to the movies because she is working on Saturday.</spam> ) <br /> Ela <spam className={styles["highlight"]}> não</spam>iria ao cinema porque ela está trabalhando aos sábados.</p>
                </div>

                <aside className={styles.pg125Aside}>
                    <div className={styles.pg125Asidecontainer}>
                        <div className={styles.pg125AsideNotes1}>
                            <p>Nota:</p>
                        </div>
                        <div className={styles.pg125AsideNotes2}>
                            <p>• <spam className={styles["highlight"]}>Would </spam> é uma palavra especial que usamos para sermos gentis ou falar sobre o que
                            queremos.</p>
                            <p>• Usamos “would“ para expressar o que queremos ou preferimos de forma mais educada. </p>
                            <p>• Usado também para <span className={styles["highlight"]}>Pedidos</span>, <spam className={styles["highlight"]}>Solicitações</spam> e <spam className={styles["highlight"]}>Ofertas</spam>.</p>
                        </div>
                    </div>
                </aside>

                <div>
                    <div className={styles["page125__titulo-table"]}>
                        <h3>Forma Contraída: Interrogativa Negativa</h3>
                    </div>
                    <div className={styles.pg125tabelaAfirmativaContainer}>
                        <div className={styles.pg125tableHeaderAfirmativa}>Forma contraída: Aﬁrmativa</div>
                        <table className={styles.pg125styledTableAfirmativa}>
                            <thead className={styles.pg125Thead}>
                                <tr className={styles.pg125celulatable}>
                                    <th>Introdução</th>
                                    <th>Sujeito</th>
                                    <th>Verbo <br /> Auxiliar</th>
                                    <th>Advérbio</th>
                                    <th>Verbo(s)</th>
                                    <th>Objeto <br /> Complemento</th>
                                </tr>
                                <tr className={styles.pg125celulatable}>
                                    <th className={styles["page125__celulacolor"]}></th>
                                    <th className={styles["page125__celulacolor"]}>I‘</th>
                                    <th className={styles["page125__celulacolor"]}>d</th>
                                    <th className={styles["page125__celulacolor"]}></th>
                                    <th className={styles["page125__celulacolor"]}>like</th>
                                    <th className={styles["page125__celulacolor"]}>a sandwich, please.</th>
                                </tr>
                                <tr className={styles.pg125celulatable}>
                                    <th className={styles["page125__celulacolor"]}></th>
                                    <th className={styles["page125__celulacolor"]}>I</th>
                                    <th className={styles["page125__celulacolor"]}>would</th>
                                    <th className={styles["page125__celulacolor"]}></th>
                                    <th className={styles["page125__celulacolor"]}>like</th>
                                    <th className={styles["page125__celulacolor"]}>a sandwich, please.</th>
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