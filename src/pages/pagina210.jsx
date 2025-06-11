import React from 'react';
import styles from './pagina210.module.css';

const Pagina210 = () => {
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
                                <span>Aux. Verb</span>
                                <span>Subject</span>
                                <span>Adv</span>
                                <span>Verb</span>
                                <span>Object / Complement</span>
                            </div>
                        </div>
                    </section>

                    <section className={styles.translationSection}>

                        <div className={styles.translationContent}>
                            <div className={styles.translationColumn}>
                                <span className={`${styles.translationItem} ${styles.red}`}>can</span>
                              
                            </div>
                            <div className={styles.translationColumn}>
                                <span className={`${styles.translationItem} ${styles.red}`}>It</span>
                                <span className={`${styles.translationItem} ${styles.black}`}>Eu</span>
                                
                                
                            </div>
                            <div className={styles.translationColumn}>
                                <span className={`${styles.translationItem} ${styles.red}`}>—</span>
                                <span className={`${styles.translationItem} ${styles.black}`}>—</span>
                            </div>
                            <div className={styles.translationColumn}>
                                <span className={`${styles.translationItem} ${styles.red}`}>clean</span>
                                <span className={`${styles.translationItem} ${styles.black}`}>posso limpar</span>
                            </div>
                            <div className={styles.translationColumn}>
                                <span className={`${styles.translationItem} ${styles.red}`}>the kitchen now?</span>
                                <span className={`${styles.translationItem} ${styles.black}`}>a cozinha agora?</span>


                            </div>
                        </div>
                    </section>

                    <section className={styles.tableContent}>
                        <div className={styles.tableGroup}>
                            {/* bloco do "He" */}
                            <div className={styles.tableRow}>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>can</span>
                             
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>he</span>                              
                                    <span className={styles.pg213Black}>Ele</span>
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Dash}>—</span>
                                    <span className={styles.pg213Dash}>—</span>
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>help</span>
                                    <span className={styles.pg213Black}>pode nos ajudar?</span>
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>us?</span>
                             
                                </div>
                            </div>
                        </div>
                        <div className={styles.tableGroup}>

                            <div className={styles.tableRow}>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>Can</span>                                                                  
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>She</span>
                                    <span className={styles.pg213Black}>Ela</span>
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Dash}>—</span>
                                    <span className={styles.pg213Dash}>—</span>                             
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>understand</span>
                                    <span className={styles.pg213Black}>consegue entender</span>
                                  
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>Spanihs?</span>
                                    <span className={styles.pg213Black}>espanhol?</span>
                                   
                                </div>




                            </div>


                        </div>
                        <div className={styles.tableGroup}>
                            {/* bloco do "It" */}
                            <div className={styles.tableRow}>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>Can</span>
                                    
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>it</span>
                                    <span className={styles.pg213Black}>-</span>
                                               
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Dash}>—</span>
                                    <span className={styles.pg213Dash}>—</span>
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>be</span>
                                    <span className={styles.pg213Black}>Pode ser</span>
                          
                                </div>
                                <div className={styles.pg213Cell}>
                                    <span className={styles.pg213Red}>true?</span>
                                    <span className={styles.pg213Black}>verdade?</span>
                            
                                </div>
                            </div>

                        </div>








                    </section>
                    <div className={styles.noteBox}>
                        <div className={styles.noteTitle}>
                            Nota
                        </div>
                        <div className={styles.noteContent}>
                            <div className={styles.noteRow}>
                                <span>Full Form</span>
                                <span>Contracted Form</span>
                            </div>
                            <div className={styles.noteFormula}>
                               <span> Can + not = Can’t</span>
                            </div>
                        </div>
                    </div>




                </main>
            </div>
        </div>
    );
};

export default Pagina210;