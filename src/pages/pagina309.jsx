import React from "react";
import styles from "./pagina309.module.css";

const pagina309 = () => {
    return (
        <div className={styles.container}>
            <div className={styles.pageContainer}>
                <header className={styles.header}>
                    <h1 className={styles.headerTitle}>Grammar</h1>
                </header>
                
                <main className={styles.mainContent}>
                    {/* Seção Negative Form */}
                    <section className={styles.grammarSection}>
                        <div className={styles.grammarHeader}>
                            <h2 className={styles.grammarTitle}>Negative Form</h2>
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
                                    <span className={styles.blackText}>não estou</span>
                                </div>
                                <div className={styles.tableCell}>
                                    <span className={styles.redText}>not</span>
                                </div>
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
                                    <span className={styles.redText}>isn't</span>
                                    <span className={styles.blackText}>não está</span>
                                </div>
                                <div className={styles.tableCell}></div>
                                <div className={styles.tableCell}>
                                    <span className={styles.redText}>eating lunch</span>
                                    <span className={styles.blackText}>almoçando</span>
                                </div>
                                <div className={styles.tableCell}>
                                    <span className={styles.redText}>now</span>
                                    <span className={styles.blackText}>agora</span>
                                </div>
                            </div>
                            <div className={styles.tableRow}>
                                <div className={styles.tableCell}>
                                    <span className={styles.redText}>She</span>
                                    <span className={styles.blackText}>Ela</span>
                                </div>
                                <div className={styles.tableCell}>
                                    <span className={styles.redText}>isn't</span>
                                    <span className={styles.blackText}>não está</span>
                                </div>
                                <div className={styles.tableCell}></div>
                                <div className={styles.tableCell}>
                                    <span className={styles.redText}>reading</span>
                                    <span className={styles.blackText}>lendo</span>
                                </div>
                                <div className={styles.tableCell}>
                                    <span className={styles.redText}>the book</span>
                                    <span className={styles.blackText}>o livro</span>
                                </div>
                            </div>
                            <div className={styles.tableRow}>
                                <div className={styles.tableCell}>
                                    <span className={styles.redText}>It</span>
                                    <span className={styles.blackText}>Não está</span>
                                </div>
                                <div className={styles.tableCell}>
                                    <span className={styles.redText}>isn't</span>
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
                                    <span className={styles.redText}>aren't</span>
                                    <span className={styles.blackText}>não estamos</span>
                                </div>
                                <div className={styles.tableCell}></div>
                                <div className={styles.tableCell}>
                                    <span className={styles.redText}>working</span>
                                    <span className={styles.blackText}>trabalhando</span>
                                </div>
                                <div className={styles.tableCell}>
                                    <span className={styles.redText}>today</span>
                                    <span className={styles.blackText}>hoje</span>
                                </div>
                            </div>
                            <div className={styles.tableRow}>
                                <div className={styles.tableCell}>
                                    <span className={styles.redText}>You <span className={styles.blueText}>(sg)</span></span>
                                    <span className={styles.blackText}>Você</span>
                                </div>
                                <div className={styles.tableCell}>
                                    <span className={styles.redText}>aren't</span>
                                    <span className={styles.blackText}>não está</span>
                                </div>
                                <div className={styles.tableCell}></div>
                                <div className={styles.tableCell}>
                                    <span className={styles.redText}>paying</span>
                                    <span className={styles.blackText}>prestando</span>
                                </div>
                                <div className={styles.tableCell}>
                                    <span className={styles.redText}>attention</span>
                                    <span className={styles.blackText}>atenção</span>
                                </div>
                            </div>
                            <div className={styles.tableRow}>
                                <div className={styles.tableCell}>
                                    <span className={styles.redText}>You all <span className={styles.blueText}>(pl)</span></span>
                                    <span className={styles.blackText}>Vocês</span>
                                </div>
                                <div className={styles.tableCell}>
                                    <span className={styles.redText}>aren't</span>
                                    <span className={styles.blackText}>não estão</span>
                                </div>
                                <div className={styles.tableCell}></div>
                                <div className={styles.tableCell}>
                                    <span className={styles.redText}>talking</span>
                                    <span className={styles.blackText}>falando</span>
                                </div>
                                <div className={styles.tableCell}>
                                    <span className={styles.redText}>too loud</span>
                                    <span className={styles.blackText}>tão alto</span>
                                </div>
                            </div>
                            <div className={styles.tableRow}>
                                <div className={styles.tableCell}>
                                    <span className={styles.redText}>They</span>
                                    <span className={styles.blackText}>Eles / Elas</span>
                                </div>
                                <div className={styles.tableCell}>
                                    <span className={styles.redText}>aren't</span>
                                    <span className={styles.blackText}>não estão</span>
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

export default pagina309;
