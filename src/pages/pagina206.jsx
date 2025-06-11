import React from 'react';
import styles from './pagina206.module.css';

const Pagina206 = () => {
    return (
        <div className={styles.container}>
            <div className={styles.pageContainer}>
                <header className={styles.header}>
                    <h1 className={styles.headerTitle}>Grammar</h1>
                </header>

                <main className={styles.mainContent}>
                    <section className={styles.grammarIntro}>
                        <div className={styles.modalVerb}>
                            <h2><span>Can</span><span> - Modal Verb</span></h2>
                            <p><span>Can</span><span> - Verbo Modal</span></p>
                        </div>

                        <div className={styles.tenseBox}>
                            <p><strong>Simple Present - </strong>Presente do Indicativo</p>
                        </div>

                        <div className={styles.explanationBox}>
                            <p><span>Can</span> é um verbo auxiliar ou modal que significa <strong>poder, saber ou conseguir</strong> e só pode ser usado / conjugado no presente simples.</p>
                        </div>
                    </section>

                    <section className={styles.grammarSection}>
                        <div className={styles.grammarHeader}>
                            <h2 className={styles.grammarTitle}>Affirmative Form</h2>
                        </div>
                        <div className={styles.grammarContent}>
                            <div className={styles.grammarRow}>
                                <span>Subject</span>
                                <span>Aux. Verb</span>
                                <span>Adv</span>
                                <span>Verb</span>
                                <span>Object / Complement</span>
                            </div>
                        </div>
                    </section>

                    <section className={styles.translationSection}>
                      
                        <div className={styles.translationContent}>
                            <div className={styles.translationColumn}>
                                <span className={`${styles.translationItem} ${styles.red}`}>I</span>
                                <span className={`${styles.translationItem} ${styles.black}`}>Eu</span>
                                <span className={`${styles.translationItem} ${styles.black}`}>Eu</span>
                                <span className={`${styles.translationItem} ${styles.black}`}>Eu</span>
                            </div>
                            <div className={styles.translationColumn}>
                                <span className={`${styles.translationItem} ${styles.red}`}>can</span>
                                <span className={`${styles.translationItem} ${styles.black}`}>sei</span>
                                <span className={`${styles.translationItem} ${styles.black}`}>posso</span>
                                <span className={`${styles.translationItem} ${styles.black}`}>consigo</span>
                            </div>
                            <div className={styles.translationColumn}>
                                <span className={`${styles.translationItem} ${styles.red}`}>—</span>
                                <span className={`${styles.translationItem} ${styles.black}`}>—</span>
                                <span className={`${styles.translationItem} ${styles.black}`}>—</span>
                                <span className={`${styles.translationItem} ${styles.black}`}>—</span>
                            </div>
                            <div className={styles.translationColumn}>
                                <span className={`${styles.translationItem} ${styles.red}`}>play</span>
                                <span className={`${styles.translationItem} ${styles.black}`}>tocar</span>
                                <span className={`${styles.translationItem} ${styles.black}`}>tocar</span>
                                <span className={`${styles.translationItem} ${styles.black}`}>tocar</span>
                            </div>
                            <div className={styles.translationColumn}>
                                <span className={`${styles.translationItem} ${styles.red}`}>the piano</span>
                                <span className={`${styles.translationItem} ${styles.black}`}>piano</span>
                                <span className={`${styles.translationItem} ${styles.black}`}>piano</span>
                                <span className={`${styles.translationItem} ${styles.black}`}>piano</span>
                            </div>
                        </div>
                    </section>

                    <section className={styles.tableContent}>
                        <div className={styles.tableGroup}>
                            {/* bloco do "He" */}
                            <div className={styles.tableRow}>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>He</span>
                                    <span className={styles.pg213Black}>Ele</span>
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>can</span>
                                    <span className={styles.pg213Black}>pode</span>
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Dash}>—</span>
                                    <span className={styles.pg213Dash}>—</span>
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>stay</span>
                                    <span className={styles.pg213Black}>ficar</span>
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>at Danny's</span>
                                    <span className={styles.pg213Black}>na casa do Danny</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.tableGroup}>
                            {/* bloco do "She" */}
                            <div className={styles.tableRow}>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>She</span>
                                    <span className={styles.pg213Black}>Ela</span>
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>can</span>
                                    <span className={styles.pg213Black}>sabe</span>
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Dash}>—</span>
                                    <span className={styles.pg213Dash}>—</span>
                                  
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>speak</span>
                                    <span className={styles.pg213Black}>falar</span>
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>three languages</span>
                                    <span className={styles.pg213Black}>três idiomas</span>
                                </div>
                            </div>
                            <div className={styles.tableRow}>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Black}>Ela</span>
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Black}>pode</span>
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Dash}>—</span>
                           
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Black}>falar</span>
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Black}>três idiomas</span>
                                </div>
                            </div>
                            <div className={styles.tableRow}>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Black}>Ela</span>
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Black}>consegue</span>
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Dash}>—</span>
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Black}>falar</span>
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Black}>três idiomas</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.tableGroup}>
                            {/* bloco do "It" */}
                            <div className={styles.tableRow}>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>It</span>
                                    <span className={styles.pg213Black}></span>
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>can</span>
                                    <span className={styles.pg213Black}>pode</span>
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Dash}>—</span>
                                    <span className={styles.pg213Dash}>—</span>
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>be</span>
                                    <span className={styles.pg213Black}>ser</span>
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>dangerous</span>
                                    <span className={styles.pg213Black}>perigoso</span>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default Pagina206;
