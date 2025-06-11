import React from 'react';
import styles from './pagina201.module.css';

const Pagina201 = () => {
    return (
        <div className={styles.container}>
            <div className={styles.pageContainer}>
                <header className={styles.header}>
                    <h1 className={styles.headerTitle}>Examples</h1>
                </header>

                <main className={styles.mainContent}>
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

                    <section className={styles.exampleSection}>
                        <div className={styles.sectionHeader}>
                            <em className={styles.exampleTitle}>Capacity</em>
                            <span className={styles.separator}>/</span>
                            <em className={styles.titleTranslation}>Capacidade</em>
                        </div>
                        <div className={styles.exampleBox}>
                            <div className={styles.exampleRow}>
                                <span>this car</span>
                                <span className={styles.highlight}>can</span>
                                <span>—</span>
                                <span className={styles.verbCell}>seat</span>
                                <span className={styles.objectCell}>five people</span>
                            </div>
                            <div className={styles.exampleRow}>
                                <span>Esse carro</span>
                                <span className={styles.highlight}>pode consegue</span>
                                <span>—</span>
                                <span className={styles.verbCell}>acomodar</span>
                                <span className={styles.objectCell}>cinco pessoas</span>
                            </div>
                        </div>
                    </section>

                    <section className={styles.exampleSection}>
                        <div className={styles.sectionHeader}>
                            <em className={styles.exampleTitle}>Knowledge</em>
                            <span className={styles.separator}>/</span>
                            <em className={styles.titleTranslation}>Conhecimento</em>
                        </div>
                        <div className={styles.exampleBox}>
                            <div className={styles.exampleRow}>
                                <span>He</span>
                                <span className={styles.highlight}>can</span>
                                <span>—</span>
                                <span className={styles.verbCell}>solve</span>
                                <span className={styles.objectCell}>complex math problems</span>
                            </div>
                            <div className={styles.exampleRow}>
                                <span>Ele</span>
                                <span className={styles.highlight}>pode <br />consegue <br />sabe</span>
                                <span>—</span>
                                <span className={styles.verbCell}>solucionar / resolver</span>
                                <span className={styles.objectCell}>problemas matematicos complexos</span>
                            </div>
                        </div>
                    </section>

                    <section className={styles.imagesSection}>
                        <div className={styles.imagePlaceholder}></div>
                        <div className={styles.imagePlaceholder}></div>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default Pagina201;