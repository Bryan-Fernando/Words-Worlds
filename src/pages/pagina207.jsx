import React from 'react';
import styles from './pagina207.module.css';

const Pagina207 = () => {
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

                    <section className={styles.tableContent}>
                        <div className={styles.tableGroup}>
                            {/* bloco do "He" */}
                            <div className={styles.tableRow}>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>We</span>
                                    <span className={styles.pg213Black}>Nós</span>
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>can</span>
                                    <span className={styles.pg213Black}>podemos</span>
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Dash}>—</span>
                                    <span className={styles.pg213Dash}>—</span>
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>visit</span>
                                    <span className={styles.pg213Black}>visitar</span>
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>my sister in Lisbon.</span>
                                    <span className={styles.pg213Black}>minha irmã em Lisboa.</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.tableGroup}>

                            <div className={styles.tableRow}>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>You <span className={styles.blueText}>(sg)</span></span>
                                    
                                    <span className={styles.pg213Black}>Você</span>
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
                                    <span className={styles.pg213Red}>meet</span>
                                    <span className={styles.pg213Black}>me encontrar</span>
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>me tomorrow afternoon</span>
                                    <span className={styles.pg213Black}>amanhã à tarde</span>
                                </div>
                            </div>


                        </div>
                        <div className={styles.tableGroup}>
                            {/* bloco do "It" */}
                            <div className={styles.tableRow}>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>Y'all <span className={styles.blueText}>(pl)</span></span>

                                    <span className={styles.pg213Black}>Vocês</span>
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>can</span>
                                    <span className={styles.pg213Black}>sabem</span>
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Dash}>—</span>
                                    <span className={styles.pg213Dash}>—</span>
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>cook</span>
                                    <span className={styles.pg213Black}>cozinhar</span>
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>really wel</span>
                                    <span className={styles.pg213Black}>muito bem</span>
                                </div>
                            </div>

                        </div>
                        <div className={styles.tableGroup}>
                            <div className={styles.tableRow}>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>They</span>
                                    <span className={styles.pg213Black}>Eles/Elas</span>
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>can</span>
                                    <span className={styles.pg213Black}>sabem</span>
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Dash}>—</span>
                                    <span className={styles.pg213Dash}>—</span>
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>read</span>
                                    <span className={styles.pg213Black}>ler</span>
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>Chinese</span>
                                    <span className={styles.pg213Black}>chinês</span>
                                </div>


                            </div> <div className={styles.tableRow}>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Black}>Eles/Elas</span>
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Black}>podem</span>
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Dash}>—</span>
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Black}>ler</span>
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Black}>chinês</span>
                                </div>


                            </div> <div className={styles.tableRow}>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Black}>Eles/Elas</span>
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Black}>conseguem</span>
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Dash}>—</span>
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Black}>ler</span>
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Black}>chinês</span>
                                </div>
                            </div>
                        </div>







                    </section>




                </main>
            </div>
        </div>
    );
};

export default Pagina207;