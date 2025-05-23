import React, { useState } from 'react';

import styles from './pagina86.module.css';

import pagina86_imagem1 from '../assets/images/pagina86_imagem1.webp';
import pagina86_imagem2 from '../assets/images/pagina86_imagem2.webp';
import pagina86_imagem3 from '../assets/images/pagina86_imagem3.webp';
import pagina86_imagem4 from '../assets/images/pagina86_imagem4.webp';

import global_grammar from '../assets/audios/global_grammar.mp3';
import pg86_audio1 from '../assets/audios/pg86_audio1.mp3';
import pg86_audio2 from '../assets/audios/pg86_audio2.mp3';
import pg86_audio3 from '../assets/audios/pg86_audio3.mp3';
import pg86_audio4 from '../assets/audios/pg86_audio4.mp3';
import pg86_audio5 from '../assets/audios/pg86_audio5.mp3';


const Pagina86 = () => {

    const audioMap = {
        global_grammar,
        pg86_audio1,
        pg86_audio2,
        pg86_audio3,
        pg86_audio4,
        pg86_audio5
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
        <div className={styles["page86__container"]}>
            <header className={styles["page86__header"]}>
                <h1
                    className={styles["page86__header--title"]}
                    onClick={() => playAudio("global_grammar")}
                    style={{ cursor: "pointer" }}
                >
                    Grammar
                </h1>
                <div>
                    <h2
                        className={styles["page86__header--subtitle"]}
                        onClick={() => playAudio("pg86_audio1")}
                        style={{ cursor: "pointer" }}
                    >
                        Definite article THE
                    </h2>
                    <p className={styles["page86__description"]}>
                        O artigo definido <span style={{ color: '#A61C28' }}>“THE / the“</span>  é usado antes de substantivos cuja tradução pode ser
                        <span style={{ color: '#A61C28' }}> “o - a - os - as“.</span>
                    </p>
                </div>
            </header>

            <main className={styles["page86__main"]}>
                <div className={styles["page86__table--images--container"]}>
                    <div className={styles["page86__table--afirmativa--container"]}>
                        <div className={styles["page86__table--header--afirmativa"]}>AFIRMATIVA</div>
                        <table className={styles["page86__styled--table--afirmativa"]}>
                            <thead className={styles["page86__thead"]}>
                                <tr className={styles["page86__cell--table"]}>
                                    <th>Introdução</th>
                                    <th>Sujeito</th>
                                    <th>Verbo <br /> Auxiliar</th>
                                    <th>Advérbio</th>
                                    <th>Verbo(s)</th>
                                    <th>Objeto <br /> Complemento</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                    <div className={styles["page86__images--container"]}>
                        <div className={styles["page86__images--row"]}>
                            <div className={styles["page86__image-item"]}>
                                <img className={styles["page86__image"]} src={pagina86_imagem1} alt="" />
                                <p
                                    className={styles["page86__text--red"]}
                                    onClick={() => playAudio("pg86_audio2")}
                                >
                                    The cat is sleeping on the bed.
                                </p>
                                <p className={styles["page86__text--black"]}>
                                    <span style={{ color: '#A61C28' }}>O</span> gato está dormindo na cama.
                                </p>
                            </div>
                            <div className={styles["page86__image-item"]}>
                                <img className={styles["page86__image"]} src={pagina86_imagem2} alt="" />
                                <p
                                    className={styles["page86__text--red"]}
                                    onClick={() => playAudio("pg86_audio3")}
                                >
                                    Please, pass me the book.
                                </p>
                                <p className={styles["page86__text--black"]}>
                                    Por favor, passe-me <span style={{ color: '#A61C28' }}>o</span> livro.
                                </p>
                            </div>
                        </div>
                        <div className={styles["page86__images--row"]}>
                            <div className={styles["page86__image-item"]}>
                                <img className={styles["page86__image"]} src={pagina86_imagem3} alt="" />
                                <p
                                    className={styles["page86__text--red"]}
                                    onClick={() => playAudio("pg86_audio4")}
                                >
                                    The dogs are playing in the park.
                                </p>
                                <p className={styles["page86__text--black"]}>
                                    <span style={{ color: '#A61C28' }}>Os</span> cachorros estão brincando no parque.
                                </p>
                            </div>
                            <div className={styles["page86__image-item"]}>
                                <img className={styles["page86__image"]} src={pagina86_imagem4} alt="" />
                                <p
                                    className={styles["page86__text--red"]}
                                    onClick={() => playAudio("pg86_audio5")}
                                >
                                    The flowers in the garden are beautiful.
                                </p>
                                <p className={styles["page86__text--black"]}>
                                    <span style={{ color: '#A61C28' }}>As</span> flores no jardim estão lindas.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Pagina86;
