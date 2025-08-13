import React from "react";
import styles from "./pagina308.module.css";

const pagina308 = () => {
    return (
        <div className={styles.container}>
            <div className={styles.pageContainer}>
                <header className={styles.header}>
                    <h1 className={styles.headerTitle}>Grammar</h1>
                </header>
                
                <main className={styles.mainContent}>
                    {/* Seção Affirmative Form */}
                    <section className={styles.grammarSection}>
                        <div className={styles.grammarHeader}>
                            <h2 className={styles.grammarTitle}>Affirmative Form</h2>
                        </div>
                        <div className={styles.grammarContent}>
                            <div className={styles.grammarRow}>
                                <span className={styles.redText}>Subject</span>
                                <span className={styles.redText}>Aux. Verb<br/><span className={styles.blueText}>Be - S. Present</span></span>
                                <span className={styles.redText}>Adv</span>
                                <span className={styles.redText}>Main Verb<br/><span className={styles.blueText}>Verb + ING</span></span>
                                <span className={styles.redText}>Object<br/>Complement</span>
                            </div>
                        </div>
                    </section>

                    {/* Tabelas de exemplos */}
                    <section className={styles.tableContent}>
                        {/* I */}
                        <div className={styles.tableGroup}>
                            <div className={styles.tableRow}>
                                <div className={styles.tableCell}>
                                    <span className={styles.redText}>I</span>
                                    <span className={styles.blackText}>Eu</span>
                                </div>
                                <div className={styles.tableCell}>
                                    <span className={styles.redText}>am</span>
                                    <span className={styles.blackText}>estou</span>
                                </div>
                                <div className={styles.tableCell}></div>
                                <div className={styles.tableCell}>
                                    <span className={styles.redText}>watching</span>
                                    <span className={styles.blackText}>assistindo</span>
                                </div>
                                <div className={styles.tableCell}>
                                    <span className={styles.redText}>tv</span>
                                    <span className={styles.blackText}>televisão</span>
                                </div>
                            </div>
                        </div>

                        {/* He, She, It */}
                        <div className={styles.tableGroup}>
                            <div className={styles.tableRow}>
                                <div className={styles.tableCell}>
                                    <span className={styles.redText}>He</span>
                                    <span className={styles.blackText}>Ele</span>
                                </div>
                                <div className={styles.tableCell}>
                                    <span className={styles.redText}>is</span>
                                    <span className={styles.blackText}>está</span>
                                </div>
                                <div className={styles.tableCell}></div>
                                <div className={styles.tableCell}>
                                    <span className={styles.redText}>eating</span>
                                    <span className={styles.blackText}>comendo</span>
                                </div>
                                <div className={styles.tableCell}>
                                    <span className={styles.redText}>pizza</span>
                                    <span className={styles.blackText}>pizza</span>
                                </div>
                            </div>
                            <div className={styles.tableRow}>
                                <div className={styles.tableCell}>
                                    <span className={styles.redText}>She</span>
                                    <span className={styles.blackText}>Ela</span>
                                </div>
                                <div className={styles.tableCell}>
                                    <span className={styles.redText}>is</span>
                                    <span className={styles.blackText}>está</span>
                                </div>
                                <div className={styles.tableCell}></div>
                                <div className={styles.tableCell}>
                                    <span className={styles.redText}>studying</span>
                                    <span className={styles.blackText}>estudando</span>
                                </div>
                                <div className={styles.tableCell}>
                                    <span className={styles.redText}>for the test</span>
                                    <span className={styles.blackText}>para a prova</span>
                                </div>
                            </div>
                            <div className={styles.tableRow}>
                                <div className={styles.tableCell}>
                                    <span className={styles.redText}>It</span>
                                    <span className={styles.blackText}>Está</span>
                                </div>
                                <div className={styles.tableCell}>
                                    <span className={styles.redText}>is</span>
                                </div>
                                <div className={styles.tableCell}></div>
                                <div className={styles.tableCell}>
                                    <span className={styles.redText}>raining</span>
                                    <span className={styles.blackText}>chovendo</span>
                                </div>
                                <div className={styles.tableCell}>
                                    <span className={styles.redText}>hard</span>
                                    <span className={styles.blackText}>forte</span>
                                </div>
                            </div>
                        </div>

                        {/* We, You, They */}
                        <div className={styles.tableGroup}>
                            <div className={styles.tableRow}>
                                <div className={styles.tableCell}>
                                    <span className={styles.redText}>We</span>
                                    <span className={styles.blackText}>Nós</span>
                                </div>
                                <div className={styles.tableCell}>
                                    <span className={styles.redText}>are</span>
                                    <span className={styles.blackText}>estamos</span>
                                </div>
                                <div className={styles.tableCell}></div>
                                <div className={styles.tableCell}>
                                    <span className={styles.redText}>working</span>
                                    <span className={styles.blackText}>trabalhando</span>
                                </div>
                                <div className={styles.tableCell}>
                                    <span className={styles.redText}>on the project till Saturday</span>
                                    <span className={styles.blackText}>no projeto até sábado</span>
                                </div>
                            </div>
                            <div className={styles.tableRow}>
                                <div className={styles.tableCell}>
                                    <span className={styles.redText}>You <span className={styles.blueText}>(sg)</span></span>
                                    <span className={styles.blackText}>Você</span>
                                </div>
                                <div className={styles.tableCell}>
                                    <span className={styles.redText}>are</span>
                                    <span className={styles.blackText}>está</span>
                                </div>
                                <div className={styles.tableCell}></div>
                                <div className={styles.tableCell}>
                                    <span className={styles.redText}>doing</span>
                                    <span className={styles.blackText}>fazendo</span>
                                </div>
                                <div className={styles.tableCell}>
                                    <span className={styles.redText}>a good job</span>
                                    <span className={styles.blackText}>um bom trabalho</span>
                                </div>
                            </div>
                            <div className={styles.tableRow}>
                                <div className={styles.tableCell}>
                                    <span className={styles.redText}>You guys <span className={styles.blueText}>(pl)</span></span>
                                    <span className={styles.blackText}>Vocês</span>
                                </div>
                                <div className={styles.tableCell}>
                                    <span className={styles.redText}>are</span>
                                    <span className={styles.blackText}>estão</span>
                                </div>
                                <div className={styles.tableCell}></div>
                                <div className={styles.tableCell}>
                                    <span className={styles.redText}>learning</span>
                                    <span className={styles.blackText}>aprendendo</span>
                                </div>
                                <div className={styles.tableCell}>
                                    <span className={styles.redText}>fast</span>
                                    <span className={styles.blackText}>rápido</span>
                                </div>
                            </div>
                            <div className={styles.tableRow}>
                                <div className={styles.tableCell}>
                                    <span className={styles.redText}>They</span>
                                    <span className={styles.blackText}>Eles / Elas</span>
                                </div>
                                <div className={styles.tableCell}>
                                    <span className={styles.redText}>are</span>
                                    <span className={styles.blackText}>estão</span>
                                </div>
                                <div className={styles.tableCell}></div>
                                <div className={styles.tableCell}>
                                    <span className={styles.redText}>playing</span>
                                    <span className={styles.blackText}>jogando</span>
                                </div>
                                <div className={styles.tableCell}>
                                    <span className={styles.redText}>soccer</span>
                                    <span className={styles.blackText}>futebol</span>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default pagina308;