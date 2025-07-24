import React from "react";
import styles from "./pagina338.module.css";

const pagina338 = () => {
    return (
        <div className={styles.container}>
            <div className={styles.pageContainer}>
                <header className={styles.header}>
                    <h1 className={styles.headerTitle}>Grammar - Simple Future</h1>
                </header>

                <main className={styles.mainContent}>
                    <section className={styles.grammarIntro}>
                        <div className={styles.willVerb}>
                            <h2><span className={styles.willBullet}></span>Will</h2>
                        </div>
                    </section>

                    <section className={styles.grammarSection}>
                        <div className={styles.grammarHeader}>
                            <h2 className={styles.grammarTitle}>Interrogative Form</h2>
                        </div>
                        <div className={styles.grammarContent}>
                            <div className={styles.grammarRow}>
                                <span>Palavras interrogativas</span>
                                <span>Aux. Verb</span>
                                <span>Subject</span>
                                <span>Verb (s)</span>
                                <span>Object / Complement</span>
                            </div>
                        </div>
                    </section>

                    <section className={styles.tableContent}>
                        <div className={styles.tableGroup}>
                            {/* bloco do "I" */}
                            <div className={styles.tableRow}>
                                <div className={styles.pg338Cell}>
                                    <span className={styles.pg338Dash}>—</span>
                                </div>
                                <div className={styles.pg338Cell}>
                                    <span className={styles.pg338Red}>Will</span>
                                </div>
                                <div className={styles.pg338Cell}>
                                    <span className={styles.pg338Red}>I</span>
                                    <span className={styles.pg338Black}>Eu</span>
                                    <span className={styles.pg338Black}>Eu</span>
                                </div>
                                <div className={styles.pg338Cell}>
                                    <span className={styles.pg338Red}>have</span>
                                    <span className={styles.pg338Black}>terei</span>
                                    <span className={styles.pg338Black}>vou ter</span>
                                </div>
                                <div className={styles.pg338Cell}>
                                    <span className={styles.pg338Red}>class tomorrow?</span>
                                    <span className={styles.pg338Black}>aula amanhã?</span>
                                    <span className={styles.pg338Black}>aula amanhã?</span>
                                </div>
                            </div>
                        </div>
                    </section>  
                    <section className={styles.tableContent}> 

                        <div className={styles.tableGroup}>
                            {/* bloco do "He" */}
                            <div className={styles.tableRow}>
                                <div className={styles.pg338Cell}>
                                    <span className={styles.pg338Dash}>—</span>
                                </div>
                                <div className={styles.pg338Cell}>
                                    <span className={styles.pg338Red}>Will</span>
                                </div>
                                <div className={styles.pg338Cell}>
                                    <span className={styles.pg338Red}>He</span>
                                    <span className={styles.pg338Black}>Ele</span>
                                    <span className={styles.pg338Black}>Ele</span>
                                </div>
                                <div className={styles.pg338Cell}>
                                    <span className={styles.pg338Red}>travel</span>
                                    <span className={styles.pg338Black}>viajará</span>
                                    <span className={styles.pg338Black}>vai viajar</span>
                                </div>
                                <div className={styles.pg338Cell}>
                                    <span className={styles.pg338Red}>next week?</span>
                                    <span className={styles.pg338Black}>na semana que vem?</span>
                                    <span className={styles.pg338Black}>na semana que vem?</span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.tableGroup}>
                            {/* bloco do "She" */}
                            <div className={styles.tableRow}>
                                <div className={styles.pg338Cell}>
                                    <span className={styles.pg338Dash}>—</span>
                                </div>
                                <div className={styles.pg338Cell}>
                                    <span className={styles.pg338Red}>Will</span>
                                </div>
                                <div className={styles.pg338Cell}>
                                    <span className={styles.pg338Red}>she</span>
                                    <span className={styles.pg338Black}>Ela</span>
                                    <span className={styles.pg338Black}>Ela</span>
                                </div>
                                <div className={styles.pg338Cell}>
                                    <span className={styles.pg338Red}>call</span>
                                    <span className={styles.pg338Black}>ligará</span>
                                    <span className={styles.pg338Black}>vai ligar</span>
                                </div>
                                <div className={styles.pg338Cell}>
                                    <span className={styles.pg338Red}>you later?</span>
                                    <span className={styles.pg338Black}>para você mais tarde?</span>
                                    <span className={styles.pg338Black}>para você mais tarde?</span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.tableGroup}>
                            {/* bloco do "It" */}
                            <div className={styles.tableRow}>
                                <div className={styles.pg338Cell}>
                                    <span className={styles.pg338Dash}>—</span>
                                </div>
                                <div className={styles.pg338Cell}>
                                    <span className={styles.pg338Red}>Will</span>
                                </div>
                                <div className={styles.pg338Cell}>
                                    <span className={styles.pg338Red}>it</span>
                                    <span className={styles.pg338Black}>-</span>
                                    <span className={styles.pg338Black}>-</span>
                                </div>
                                <div className={styles.pg338Cell}>
                                    <span className={styles.pg338Red}>open</span>
                                    <span className={styles.pg338Black}>Abrirá</span>
                                    <span className={styles.pg338Black}>Vai abrir</span>
                                </div>
                                <div className={styles.pg338Cell}>
                                    <span className={styles.pg338Red}>at 10:00 a.m.?</span>
                                    <span className={styles.pg338Black}>às 10:00 da manhã?</span>
                                    <span className={styles.pg338Black}>às 10:00 da manhã?</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className={styles.noteBox}>
                        <div className={styles.noteTitle}>
                            Nota: <span className={styles.lightIcon}>💡</span>
                        </div>
                        <div className={styles.noteContent}>
                            <div className={styles.noteFormula}>
                                <span>• Conforme a tabela acima, não se esqueça de que o verbo auxiliar troca de posição com o sujeito nas perguntas.</span>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default pagina338;
