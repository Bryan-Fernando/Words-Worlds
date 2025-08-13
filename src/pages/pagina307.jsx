import React from "react";
import styles from "./pagina307.module.css";

const pagina307 = () => {
    return (
        <div className={styles.container}>
            <div className={styles.pageContainer}>
                <header className={styles.header}>
                    <h1 className={styles.headerTitle}>Grammar</h1>
                </header>
                
                <main className={styles.mainContent}>
                    {/* Seção Present Continuous */}
                    <section className={styles.grammarSection}>
                        <div className={styles.grammarHeader}>
                            <h2 className={styles.grammarTitle}>Present Continuous / Progressive Form</h2>
                        </div>
                        <div className={styles.grammarContent}>
                            <p className={styles.description}>
                                The Present Continuous ( or Progressive ) tense is used to describe:
                            </p>
                            <ul className={styles.usageList}>
                                <li>• <span className={styles.redText}> Actions happening now </span> </li>
                                <li>• <span className={styles.redText}> Temporary actions or situations </span> </li>
                                <li>• <span className={styles.redText}> Planned future arrangements (with time or date) </span> </li>
                            </ul>
                        </div>
                    </section>

                    {/* Seção Gerúndio */}
                    <section className={styles.grammarSection}>
                        <div className={styles.grammarHeader}>
                            <h2 className={styles.grammarTitle}>Gerúndio - Forma do Presente Contínuo / Progressivo</h2>
                        </div>
                        <div className={styles.grammarContent}>
                            <p className={styles.description}>
                                Usado para indicar ações que estão:
                            </p>
                            <ul className={styles.usageList}>
                                <li>• <span className={styles.redText}>Ações acontecendo agora</span> </li>
                                <li>• <span className={styles.redText}>Ações ou situações temporárias</span> </li>
                                <li>• <span className={styles.redText}>Compromissos futuros planejados (com horário ou data)</span> </li>
                            </ul>
                        </div>
                    </section>

                    {/* Seção Structure */}
                    <section className={styles.structureSection}>
                        <div className={styles.structureHeader}>
                            <h3 className={styles.structureTitle}> <span className={styles.structureRed}>Structure</span> / Estrutura</h3>
                        </div>
                        <div className={styles.structureContent}>
                            <div className={styles.structureRow}>
                                <span className={styles.structureItem}><span className={styles.structureRed}>To Be</span> - Estar</span>
                                <span className={styles.structureItemEsp}></span>
                                <span className={styles.structureItem}></span>
                                <span className={styles.structureItem}></span>
                                <span className={styles.structureItem}>Forma Simples <br/> Verbo Principal</span>
                            </div>
                            <div className={styles.structureExample}>
                                <span className={styles.structureItem}>Presente Simples</span>
                                <span className={styles.structureItemEsp}></span>
                                <span className={styles.redText}>+</span>
                                <span className={styles.structureItemEsp}></span>
                                <span className={styles.redText}>( watch )</span>
                                <span className={styles.structureItem}></span>
                                <span className={styles.redText}>+</span>
                                <span className={styles.structureItem}></span>
                                <span className={styles.redText}>ING</span>
                            </div>
                        </div>
                    </section>

                    {/* Seção de Nota */}
                    <section className={styles.noteBox}>
                        <div className={styles.noteHeader}>
                            <h4 className={styles.noteTitle}>Nota: 🔔</h4>
                        </div>
                        <div className={styles.noteContent}>
                            <p>
                                Nem todos os verbos podem ser usados no gerúndio contínuo, como os verbos de estado ( <span className={styles.redText}> like, love, know, need, believe </span> ).
                            </p>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default pagina307;