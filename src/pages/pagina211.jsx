import React from 'react';
import styles from './pagina211.module.css';

const Pagina211 = () => {
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
                    </section>

                    <section className={styles.grammarSection}>
                        <div className={styles.grammarHeader}>
                            <h2 className={styles.grammarTitle}>Interrogative Form</h2>
                        </div>
                        <div className={styles.grammarContent}>
                            <div className={styles.grammarRow}>
                                <span>Aux. Verb</span>
                                <span>Subject</span>
                                <span>Adv</span>
                                <span>Verb</span>
                                <span>Object / Complement</span>
                            </div>
                        </div>
                    </section>

                    <section className={styles.tableContent}>
                        <div className={styles.tableGroup}>
                            <div className={styles.tableRow}>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>Can</span>
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>we</span>
                                    <span className={styles.pg213Black}>Nós</span>
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Dash}>—</span>
                                    <span className={styles.pg213Dash}>—</span>
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>travel</span>
                                    <span className={styles.pg213Black}>podemos viajar</span>
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>by train?</span>
                                    <span className={styles.pg213Black}>de trem?</span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.tableGroup}>
                            <div className={styles.tableRow}>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>Can</span>
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>you(sg)</span>
                                    <span className={styles.pg213Black}>Você</span>
                                    <span className={styles.pg213Black}>Você</span>
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Dash}>—</span>
                                    <span className={styles.pg213Dash}>—</span>
                                    <span className={styles.pg213Dash}>—</span>
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>read</span>
                                    <span className={styles.pg213Black}>pode ler</span>
                                    <span className={styles.pg213Black}>consegue ler</span>
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>this text?</span>
                                    <span className={styles.pg213Black}>esse texto?</span>
                                    <span className={styles.pg213Black}>esse texto?</span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.tableGroup}>
                            <div className={styles.tableRow}>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>Can</span>
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>y'all(pl)</span>
                                    <span className={styles.pg213Black}>Vocês</span>
                                    <span className={styles.pg213Black}>Vocês</span>
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Dash}>—</span>
                                    <span className={styles.pg213Dash}>—</span>
                                    <span className={styles.pg213Dash}>—</span>
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>finish</span>
                                    <span className={styles.pg213Black}>podem terminar</span>
                                    <span className={styles.pg213Black}>conseguem terminar</span>
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>the project today?</span>
                                    <span className={styles.pg213Black}>o projeto hoje?</span>
                                    <span className={styles.pg213Black}>o projeto hoje?</span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.tableGroup}>
                            <div className={styles.tableRow}>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>Can</span>
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>they</span>
                                    <span className={styles.pg213Black}>Eles / Elas</span>
                                    <span className={styles.pg213Black}>Eles / Elas</span>
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Dash}>—</span>
                                    <span className={styles.pg213Dash}>—</span>
                                    <span className={styles.pg213Dash}>—</span>
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>see</span>
                                    <span className={styles.pg213Black}>podem ver</span>
                                    <span className={styles.pg213Black}>conseguem ver</span>
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>the stars from there?</span>
                                    <span className={styles.pg213Black}>as estrelas de lá?</span>
                                    <span className={styles.pg213Black}>as estrelas de lá?</span>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default Pagina211;
