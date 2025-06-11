import React from 'react';
import styles from './pagina205.module.css';

const Pagina205 = () => {
    return (
        <div className={styles.container}>
            <div className={styles.pageContainer}>
                <header className={styles.header}>
                    <h1 className={styles.headerTitle}>Examples</h1>
                </header>

                <main className={styles.mainContent}>
                    <section className={styles.grammarSection}>
                        <div className={styles.grammarHeader}>
                            <h2 className={styles.grammarTitle}>Interrogative Form</h2>
                        </div>
                        <div className={styles.grammarContent}>
                            <div className={styles.grammarRow}>
                                <span>Aux. Verb</span>
                                <span>Subject</span>
                                <span>Verb</span>
                                <span>Adv</span>
                                <span>Object / Complement</span>
                            </div>
                        </div>
                    </section>

                    <section className={styles.exampleSection}>
                        <div className={styles.sectionHeader}>
                            <em className={styles.exampleTitle}>Permission</em>
                            <span className={styles.separator}>/</span>
                            <em className={styles.titleTranslation}>Permissão</em>
                        </div>
                        <div className={styles.exampleBox}>
                            <div className={styles.exampleRow}>
                                <span>Can</span>
                                <span>we</span>
                                <span>—</span>
                                <span className={styles.verbCell}>leave</span>
                                <span className={styles.objectCell}>early today?</span>
                            </div>
                            <div className={styles.exampleRow}>
                                <span>Nós</span>
                                <span>podemos</span>
                                <span>—</span>
                                <span className={styles.verbCell}>sair</span>
                                <span className={styles.objectCell}>mais cedo hoje?</span>
                            </div>
                        </div>
                    </section>

                    <section className={styles.exampleSection}>
                        <div className={styles.sectionHeader}>
                            <em className={styles.exampleTitle}>Suggestions</em>
                            <span className={styles.separator}>/</span>
                            <em className={styles.titleTranslation}>Sugestões</em>
                        </div>
                        <div className={styles.exampleBox}>
                            <div className={styles.exampleRow}>
                                <span>Can</span>
                                <span>I</span>
                                <span>—</span>
                                <span className={styles.verbCell}>give</span>
                                <span className={styles.objectCell}>you some advice?</span>
                            </div>
                            <div className={styles.exampleRow}>
                                <span>Eu</span>
                                <span>posso</span>
                                <span>—</span>
                                <span className={styles.verbCell}>te dar</span>
                                <span className={styles.objectCell}>um conselho?</span>
                            </div>
                        </div>
                    </section>

                    <section className={styles.imagesSection}>
                        <div className={styles.imagePlaceholder}>
                            {/* <img 
                                src="/imagens_reference/leaving-early.jpg" 
                                alt="Person walking down stairs with bag" 
                                className={styles.exampleImage}
                            /> */}
                        </div>
                        <div className={styles.imagePlaceholder}>
                            {/* <img 
                                src="/imagens_reference/giving-advice.jpg" 
                                alt="Women working together at laptop" 
                                className={styles.exampleImage}
                            /> */}
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default Pagina205;