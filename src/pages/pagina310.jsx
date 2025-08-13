import React from "react";
import styles from "./pagina310.module.css";

const pagina310 = () => {
    return (
        <div className={styles.container}>
            <div className={styles.pageContainer}>
                <header className={styles.header}>
                    <h1 className={styles.headerTitle}>Grammar</h1>
                </header>
                
                <main className={styles.mainContent}>
                    {/* Seção Interrogative Form */}
                    <section className={styles.grammarSection}>
                        <div className={styles.grammarHeader}>
                            <h2 className={styles.grammarTitle}>Interrogative Form</h2>
                        </div>
                        <div className={styles.grammarContent}>
                            <div className={styles.grammarRow}>
                                <span className={styles.redText}>Aux. Verb<br/><span className={styles.blueText}>Be - S. Present</span></span>
                                <span className={styles.redText}>Subject</span>
                                <span className={styles.redText}>Adv</span>
                                <span className={styles.redText}>Main Verb<br/><span className={styles.blueText}>Verb + ING</span></span>
                                <span className={styles.redText}>Object<br/>Complement</span>
                            </div>
                        </div>
                    </section>

                    {/* Tabelas de exemplos */}
                    <section className={styles.tableContent}>
                        {/* Am I */}
                        <div className={styles.tableGroup}>
                            <div className={styles.tableRow}>
                                <div className={styles.tableCell}>
                                    <span className={styles.redText}>Am</span>
                                    <span className={styles.blackText}>Eu</span>
                                </div>
                                <div className={styles.tableCell}>
                                    <span className={styles.redText}>I</span>
                                    <span className={styles.blackText}>estou</span>
                                </div>
                                <div className={styles.tableCell}></div>
                                <div className={styles.tableCell}>
                                    <span className={styles.redText}>speaking</span>
                                    <span className={styles.blackText}>assistindo</span>
                                </div>
                                <div className={styles.tableCell}>
                                    <span className={styles.redText}>too fast?</span>
                                    <span className={styles.blackText}>televisão?</span>
                                </div>
                            </div>
                        </div>

                        {/* Is he, she, it */}
                        <div className={styles.tableGroup}>
                            <div className={styles.tableRow}>
                                <div className={styles.tableCell}>
                                    <span className={styles.redText}>Is</span>
                                    <span className={styles.blackText}>Ele</span>
                                </div>
                                <div className={styles.tableCell}>
                                    <span className={styles.redText}>he</span>
                                    <span className={styles.blackText}>está</span>
                                </div>
                                <div className={styles.tableCell}></div>
                                <div className={styles.tableCell}>
                                    <span className={styles.redText}>eating lunch</span>
                                    <span className={styles.blackText}>almoçando</span>
                                </div>
                                <div className={styles.tableCell}>
                                    <span className={styles.redText}>now?</span>
                                    <span className={styles.blackText}>agora?</span>
                                </div>
                            </div>
                            <div className={styles.tableRow}>
                                <div className={styles.tableCell}>
                                    <span className={styles.redText}>Is</span>
                                    <span className={styles.blackText}>Ela</span>
                                </div>
                                <div className={styles.tableCell}>
                                    <span className={styles.redText}>she</span>
                                    <span className={styles.blackText}>está</span>
                                </div>
                                <div className={styles.tableCell}></div>
                                <div className={styles.tableCell}>
                                    <span className={styles.redText}>studying</span>
                                    <span className={styles.blackText}>estudando</span>
                                </div>
                                <div className={styles.tableCell}>
                                    <span className={styles.redText}>for the test?</span>
                                    <span className={styles.blackText}>para a prova?</span>
                                </div>
                            </div>
                            <div className={styles.tableRow}>
                                <div className={styles.tableCell}>
                                    <span className={styles.redText}>Is</span>
                                    <span className={styles.blackText}>Está</span>
                                </div>
                                <div className={styles.tableCell}>
                                    <span className={styles.redText}>it</span>
                                </div>
                                <div className={styles.tableCell}></div>
                                <div className={styles.tableCell}>
                                    <span className={styles.redText}>raining</span>
                                    <span className={styles.blackText}>chovendo</span>
                                </div>
                                <div className={styles.tableCell}>
                                    <span className={styles.redText}>outside?</span>
                                    <span className={styles.blackText}>lá fora?</span>
                                </div>
                            </div>
                        </div>

                        {/* Are we, you, they */}
                        <div className={styles.tableGroup}>
                            <div className={styles.tableRow}>
                                <div className={styles.tableCell}>
                                    <span className={styles.redText}>Are</span>
                                    <span className={styles.blackText}>Nós</span>
                                </div>
                                <div className={styles.tableCell}>
                                    <span className={styles.redText}>we</span>
                                    <span className={styles.blackText}>vamos</span>
                                </div>
                                <div className={styles.tableCell}></div>
                                <div className={styles.tableCell}>
                                    <span className={styles.redText}>going</span>
                                </div>
                                <div className={styles.tableCell}>
                                    <span className={styles.redText}>to the park today?</span>
                                    <span className={styles.blackText}>ao parque hoje?</span>
                                </div>
                            </div>
                            <div className={styles.tableRow}>
                                <div className={styles.tableCell}>
                                    <span className={styles.redText}>Are <span className={styles.blueText}>(sg)</span></span>
                                    <span className={styles.blackText}>Você</span>
                                </div>
                                <div className={styles.tableCell}>
                                    <span className={styles.redText}>you</span>
                                    <span className={styles.blackText}>está</span>
                                </div>
                                <div className={styles.tableCell}></div>
                                <div className={styles.tableCell}>
                                    <span className={styles.redText}>reading</span>
                                    <span className={styles.blackText}>lendo</span>
                                </div>
                                <div className={styles.tableCell}>
                                    <span className={styles.redText}>this book?</span>
                                    <span className={styles.blackText}>esse livro?</span>
                                </div>
                            </div>
                            <div className={styles.tableRow}>
                                <div className={styles.tableCell}>
                                    <span className={styles.redText}>Are <span className={styles.blueText}>(pl)</span></span>
                                    <span className={styles.blackText}>Vocês</span>
                                </div>
                                <div className={styles.tableCell}>
                                    <span className={styles.redText}>you guys</span>
                                    <span className={styles.blackText}>estão</span>
                                </div>
                                <div className={styles.tableCell}></div>
                                <div className={styles.tableCell}>
                                    <span className={styles.redText}>learning</span>
                                    <span className={styles.blackText}>aprendendo</span>
                                </div>
                                <div className={styles.tableCell}>
                                    <span className={styles.redText}>English together?</span>
                                    <span className={styles.blackText}>inglês juntos?</span>
                                </div>
                            </div>
                            <div className={styles.tableRow}>
                                <div className={styles.tableCell}>
                                    <span className={styles.redText}>Are</span>
                                    <span className={styles.blackText}>Eles / Elas</span>
                                </div>
                                <div className={styles.tableCell}>
                                    <span className={styles.redText}>they</span>
                                    <span className={styles.blackText}>estão</span>
                                </div>
                                <div className={styles.tableCell}></div>
                                <div className={styles.tableCell}>
                                    <span className={styles.redText}>travelling</span>
                                    <span className={styles.blackText}>viajando</span>
                                </div>
                                <div className={styles.tableCell}>
                                    <span className={styles.redText}>this week?</span>
                                    <span className={styles.blackText}>essa semana?</span>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default pagina310;