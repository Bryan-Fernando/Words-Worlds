import React from 'react';
import styles from './pagina75.module.css';

const Pagina75 = () => {
    return (
        <div className={styles["page75__container"]}>
            <header className={styles["page75__header"]}>
                <h1 className={styles["page75__grammar-title"]}>Grammar:</h1>
                <h2 className={styles["page75__header--en"]}>
                    Common Main Verbs (Base Form) – English & Portuguese
                </h2>
                <h3 className={styles["page75__header--pt"]}>
                    Verbos Principais Comuns (Forma Base) – Inglês e Português
                </h3>
                <h4 className={styles["page75__infinitive"]}>Infinitivo</h4>
            </header>

            <main className={styles["page75__main"]}>

                {/* Bloco O-P-R-S */}
                <div className={styles["page75__labels"]}>
                    <span className={styles["page75__label--leftO"]}>O</span>
                    <span className={styles["page75__label--centerP"]}>P</span>
                    <span className={styles["page75__label--centerR"]}>R</span>
                    <span className={styles["page75__label--rightS"]}>S</span>
                </div>
                <section className={styles["page75__block"]}>
                    <div className={styles["page75__columns--4"]}>
                        <div className={styles["page75__column"]}>
                            <div className={styles["page75__row"]}><span className={styles["page75__english"]}>to open</span><span>abrir</span></div>
                        </div>
                        <div className={styles["page75__column"]}>
                            <div className={styles["page75__row"]}><span className={styles["page75__english"]}>to play</span><span>jogar <br /> tocar (instrumento musical) <br /> brincar</span></div>
                        </div>
                        <div className={styles["page75__column"]}>
                            <div className={styles["page75__row"]}><span className={styles["page75__english"]}>to read</span><span>ler</span></div>
                            <div className={styles["page75__row"]}><span className={styles["page75__english"]}>to run</span><span>correr<br />administrar</span></div>
                        </div>
                        <div className={styles["page75__column"]}>
                            <div className={styles["page75__row"]}><span className={styles["page75__english"]}>to say</span><span>dizer</span></div>
                            <div className={styles["page75__row"]}><span className={styles["page75__english"]}>to see</span><span>ver</span></div>
                            <div className={styles["page75__row"]}><span className={styles["page75__english"]}>to sing</span><span>cantar</span></div>
                            <div className={styles["page75__row"]}><span className={styles["page75__english"]}>to speak</span><span>falar</span></div>
                            <div className={styles["page75__row"]}><span className={styles["page75__english"]}>to study</span><span>estudar</span></div>
                        </div>
                    </div>
                </section>

                {/* Bloco T-U-W */}
                <div className={styles["page75__labels"]}>
                    <span className={styles["page75__label--leftT"]}>T</span>
                    <span className={styles["page75__label--centerU"]}>U</span>
                    <span className={styles["page75__label--rightW"]}>W</span>
                </div>
                <section className={styles["page75__block"]}>
                    <div className={styles["page75__columns--3"]}>
                        <div className={styles["page75__column"]}>
                            <div className={styles["page75__row"]}><span className={styles["page75__english"]}>to take</span><span>pegar<br />levar<br />fazer cursos<br />tomar medicamentos</span></div>
                            <div className={styles["page75__row"]}><span className={styles["page75__english"]}>to talk</span><span>conversar</span></div>
                            <div className={styles["page75__row"]}><span className={styles["page75__english"]}>to teach</span><span>ensinar</span></div>
                            <div className={styles["page75__row"]}><span className={styles["page75__english"]}>to tell</span><span>contar<br />dizer</span></div>
                            <div className={styles["page75__row"]}><span className={styles["page75__english"]}>to think</span><span>pensar</span></div>
                            <div className={styles["page75__row"]}><span className={styles["page75__english"]}>to travel</span><span>viajar</span></div>
                            <div className={styles["page75__row"]}><span className={styles["page75__english"]}>to try</span><span>tentar<br />experimentar</span></div>
                        </div>
                        <div className={styles["page75__column"]}>
                            <div className={styles["page75__row"]}><span className={styles["page75__english"]}>to use</span><span>usar</span></div>
                        </div>
                        <div className={styles["page75__column"]}>
                            <div className={styles["page75__row"]}><span className={styles["page75__english"]}>to wait</span><span>esperar<br />aguardar</span></div>
                            <div className={styles["page75__row"]}><span className={styles["page75__english"]}>to walk</span><span>caminhar<br />andar</span></div>
                            <div className={styles["page75__row"]}><span className={styles["page75__english"]}>to want</span><span>querer</span></div>
                            <div className={styles["page75__row"]}><span className={styles["page75__english"]}>to watch</span><span>assistir</span></div>
                            <div className={styles["page75__row"]}><span className={styles["page75__english"]}>to work</span><span>trabalhar<br />funcionar</span></div>
                            <div className={styles["page75__row"]}><span className={styles["page75__english"]}>to write</span><span>escrever</span></div>
                        </div>
                    </div>
                </section>

            </main>
        </div>
    );
};

export default Pagina75;
