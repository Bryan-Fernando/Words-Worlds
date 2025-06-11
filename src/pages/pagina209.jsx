import React from 'react';
import styles from './pagina209.module.css';

const Pagina209 = () => {
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
                            <h2 className={styles.grammarTitle}>Negative Form</h2>
                        </div>
                        <div className={styles.grammarContent}>
                            <div className={styles.grammarRow}>
                                <span>Subject</span>
                                <span>Aux. Verb</span>
                                <span>Adv</span>
                                <span>Verb </span>
                                
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
                                    <span className={styles.pg213Red}>can't</span>                              
                                    <span className={styles.blueText}>não <span className={styles.pg213Black}> podemos</span></span>
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Dash}>—</span>
                                    <span className={styles.pg213Dash}>—</span>
                                  
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>stay out</span>
                                    <span className={styles.pg213Black}>ficar fora</span>
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>late.</span>
                                    <span className={styles.pg213Black}>até tarde.</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.tableGroup}>

                            <div className={styles.tableRow}>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>You<span className={styles.blueText}>(sg)</span></span>
                                    <span className={styles.pg213Black}>Você</span>
                                   
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>can't</span>
                                    <span className={styles.blueText}>não <span className={styles.pg213Black}> pode</span></span>
                                    
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Dash}>—</span>
                                    <span className={styles.pg213Dash}>—</span>
                                 

                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>enter</span>
                                    <span className={styles.pg213Black}>entrar</span>
                                  
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>without a ticket</span>
                                    <span className={styles.pg213Black}>sem um ingresso</span>
                                   
                                </div>




                            </div>


                        </div>
                        <div className={styles.tableGroup}>
                            {/* bloco do "It" */}
                            <div className={styles.tableRow}>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>Y'all<span className={styles.blueText}>(pl)</span></span>
                                    <span className={styles.pg213Black}>Vocês</span>
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>can't</span>
                                    <span className={styles.blueText}>não <span className={styles.pg213Black}> podem</span></span>
                                                          
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Dash}>—</span>
                                    <span className={styles.pg213Dash}>—</span>
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>swim</span>
                                    <span className={styles.pg213Black}>nadar</span>
                                   
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>in this river</span>
                                    <span className={styles.pg213Black}>neste rio</span>
                                   
                                </div>
                            </div>

                        </div>
                        <div className={styles.tableGroup}>
                            {/* bloco do "It" */}
                            <div className={styles.tableRow}>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>they</span>
                                    <span className={styles.pg213Black}>Eles/Elas</span>
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>can't</span>
                                    <span className={styles.blueText}>não <span className={styles.pg213Black}> podem</span></span>                     
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Dash}>—</span>
                                    <span className={styles.pg213Dash}>—</span>
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>play</span>                            
                                    <span className={styles.pg213Black}>jogar</span>
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>soccer today</span>                     
                                    <span className={styles.pg213Black}>futebol hoje</span>
                                </div>
                            </div>

                        </div>








                    </section>
                   




                </main>
            </div>
        </div>
    );
};

export default Pagina209;