import React from "react";
import styles from "./pagina341.module.css";

const pagina341 = () => {
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
                            <h2 className={styles.grammarTitle}>Negative Interrogative Form</h2>
                        </div>
                        <div className={styles.grammarContent}>
                            <div className={styles.grammarRow}>
                                <span>Palavras interrogativas</span>
                                <span>Aux. Verb</span>
                                <span>Subject</span>
                                <span>Verb (s)</span>
                                <span>Object Complement</span>
                            </div>
                        </div>
                    </section>

                    <section className={styles.tableContent}>
                        <div className={styles.tableGroup}>
                            {/* bloco do "we" */}
                            <div className={styles.tableRow}>
                                <div className={styles.pg338Cell}>
                                    <span className={styles.pg338Red}>—</span>
                                </div>
                                <div className={styles.pg338Cell}>
                                    <span className={styles.pg338Red}>Won't</span>
                                </div>
                                <div className={styles.pg338Cell}>
                                    <span className={styles.pg338Red}>we</span>
                                    <span className={styles.pg338Black}>Nós</span>
                                    <span className={styles.pg338Black}>Nós</span>
                                </div>
                                <div className={styles.pg338Cell}>
                                    <span className={styles.pg338Red}>close</span>
                                    <span><span className={styles.blueText}>não</span> <span className={styles.pg338Black}>fecharemos</span></span>
                                    <span><span className={styles.blueText}>não</span> <span className={styles.pg338Black}>vamos fechar</span></span>
                                </div>
                                <div className={styles.pg338Cell}>
                                    <span className={styles.pg338Red}>the store at 5:00 p.m?</span>
                                    <span className={styles.pg338Black}>a loja às 17 horas?</span>
                                    <span className={styles.pg338Black}>a loja às 17 horas?</span>
                                </div>
                            </div>
                        </div>
                    

                        <div className={styles.tableGroup}>
                            {/* bloco do "you (sg)" */}
                            <div className={styles.tableRow}>
                               <div className={styles.pg338Cell}>
                                    <span className={styles.pg338Red}>—</span>
                                </div>
                                <div className={styles.pg338Cell}>
                                    <span className={styles.pg338Red}>Won't</span>
                                </div>
                                <div className={styles.pg338Cell}>
                                    <span className={styles.pg338Red}>you <span className={styles.blueText}>( sg )</span></span>
                                    <span className={styles.pg338Black}>Você</span>
                                    <span className={styles.pg338Black}>Você</span>
                                </div>
                                <div className={styles.pg338Cell}>
                                    <span className={styles.pg338Red}>need</span>
                                    <span><span className={styles.blueText}>não</span> <span className={styles.pg338Black}>precisará</span></span>
                                    <span><span className={styles.blueText}>não</span> <span className={styles.pg338Black}>vai precisar</span></span>
                                </div>
                                <div className={styles.pg338Cell}>
                                    <span className={styles.pg338Red}>a jacket?</span>
                                    <span className={styles.pg338Black}>de uma jaqueta?</span>
                                    <span className={styles.pg338Black}>de uma jaqueta?</span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.tableGroup}>
                            {/* bloco do "you all (pl)" */}
                            <div className={styles.tableRow}>
                                 <div className={styles.pg338Cell}>
                                    <span className={styles.pg338Red}>—</span>
                                </div>
                                <div className={styles.pg338Cell}>
                                    <span className={styles.pg338Red}>Won't</span>
                                </div>
                                <div className={styles.pg338Cell}>
                                    <span className={styles.pg338Red}>you all <span className={styles.blueText}>( pl )</span></span>
                                    <span className={styles.pg338Black}>Vocês</span>
                                    <span className={styles.pg338Black}>Vocês</span>
                                </div>
                                <div className={styles.pg338Cell}>
                                    <span className={styles.pg338Red}>need to work</span>
                                    <span><span className={styles.blueText}>não</span> <span className={styles.pg338Black}>precisarão trabalhar</span></span>
                                    <span><span className={styles.blueText}>não</span> <span className={styles.pg338Black}>vão precisar trabalhar</span></span>
                                </div>
                                <div className={styles.pg338Cell}>
                                    <span className={styles.pg338Red}>on the weekend?</span>
                                    <span className={styles.pg338Black}>no fim de semana?</span>
                                    <span className={styles.pg338Black}>no fim de semana?</span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.tableGroup}>
                            {/* bloco do "they" */}
                            <div className={styles.tableRow}>
                                <div className={styles.pg338Cell}>
                                    <span className={styles.pg338Red}>—</span>
                                </div>
                                <div className={styles.pg338Cell}>
                                    <span className={styles.pg338Red}>Won't</span>
                                </div>
                                <div className={styles.pg338Cell}>
                                    <span className={styles.pg338Red}>they</span>
                                    <span className={styles.pg338Black}>Eles / Elas</span>
                                    <span className={styles.pg338Black}>Eles / Elas</span>
                                </div>
                                <div className={styles.pg338Cell}>
                                    <span className={styles.pg338Red}>have to go to work</span>
                                    <span><span className={styles.blueText}>não</span> <span className={styles.pg338Black}>terão que ir trabalhar</span></span>
                                    <span><span className={styles.blueText}>não</span> <span className={styles.pg338Black}>vão ter que ir trabalhar</span></span>
                                </div>
                                <div className={styles.pg338Cell}>
                                    <span className={styles.pg338Red}>at 7:00 a.m?</span>
                                    <span className={styles.pg338Black}>às 7:00 da manhã?</span>
                                    <span className={styles.pg338Black}>às 7:00 da manhã?</span>
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

export default pagina341;
