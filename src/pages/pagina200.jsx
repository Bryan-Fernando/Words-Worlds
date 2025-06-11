import React from 'react';
import styles from './pagina200.module.css';

const Pagina200 = () => {
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
                            <em className={styles.exampleTitle}>Advice</em>
                            <span className={styles.separator}>/</span>
                            <em className={styles.titleTranslation}>Conselho</em>
                        </div>
                        <div className={styles.exampleBox}>
                            <div className={styles.exampleRow}>
                                <span>You</span>
                                <span className={styles.highlight}>can</span>
                                <span>—</span>
                                <span className={styles.verbCell}>talk</span>
                                <span className={styles.objectCell}>to a doctor about your symptoms</span>
                            </div>
                            <div className={styles.exampleRow}>
                                <span>Você</span>
                                <span className={styles.highlight}>pode</span>
                                <span>—</span>
                                <span className={styles.verbCell}>falar</span>
                                <span className={styles.objectCell}>com um médico sobre seus sintomas</span>
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
                                <span>You</span>
                                <span className={styles.highlight}>can</span>
                                <span>—</span>
                                <span className={styles.verbCell}>take</span>
                                <span className={styles.objectCell}>a different route to avoid traffic</span>
                            </div>
                            <div className={styles.exampleRow}>
                                <span>Você</span>
                                <span className={styles.highlight}>pode</span>
                                <span>—</span>
                                <span className={styles.verbCell}>pegar</span>
                                <span className={styles.objectCell}>um caminho diferente para evitar o trânsito</span>
                            </div>
                        </div>
                    </section>

                    <section className={styles.imagesSection}>
                        <div className={styles.imagePlaceholder}>
                            {/* Imagem 1 será adicionada aqui */}
                        </div>
                        <div className={styles.imagePlaceholder}>
                            {/* Imagem 2 será adicionada aqui */}
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default Pagina200;