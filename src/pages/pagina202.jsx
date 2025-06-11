import React from 'react';
import styles from './pagina202.module.css';

const Pagina202 = () => {
    return (
        <div className={styles.container}>
            <div className={styles.pageContainer}>
                <header className={styles.header}>
                    <h1 className={styles.headerTitle}>Examples</h1>
                </header>

                <main className={styles.mainContent}>
                    <section className={styles.grammarSection}>
                        <div className={styles.grammarHeader}>
                            <h2 className={styles.grammarTitle}>Negative Form</h2>
                        </div>
                        <div className={styles.grammarContent}>
                            <div className={styles.grammarRow}>
                                <span>Subject</span>
                                <span>Aux. Verb</span>
                                <span>Not</span>
                                <span>Verb</span>
                                <span>Object / Complement</span>
                            </div>
                        </div>
                    </section>

                    <section className={styles.exampleSection}>
                        <div className={styles.sectionHeader}>
                            <em className={styles.exampleTitle}>Availability</em>
                            <span className={styles.separator}>/</span>
                            <em className={styles.titleTranslation}>Disponibilidade</em>
                        </div>
                        <div className={styles.exampleBox}>
                            <div className={styles.exampleRow}>
                                <span>They</span>
                                <span className={styles.highlight}>can't</span>
                                <span>—</span>
                                <span className={styles.verbCell}>come</span>
                                <span className={styles.objectCell}>to the meeting</span>
                            </div>
                            <div className={styles.exampleRow}>
                                <span>Eles</span>
                                <span className={styles.highlight}>não podem</span>
                                <span>—</span>
                                <span className={styles.verbCell}>vir</span>
                                <span className={styles.objectCell}>à reunião</span>
                            </div>
                        </div>
                    </section>

                    <section className={styles.exampleSection}>
                        <div className={styles.sectionHeader}>
                            <em className={styles.exampleTitle}>Requests</em>
                            <span className={styles.separator}>/</span>
                            <em className={styles.titleTranslation}>Solicitações ou Pedidos</em>
                            <span className={styles.separator}>(</span>
                            <em className={styles.exampleTitle}>Recusados</em>
                            <span className={styles.separator}>)</span>
                        </div>
                        <div className={styles.exampleBox}>
                            <div className={styles.exampleRow}>
                                <span>We</span>
                                <span className={styles.highlight}>can't</span>
                                <span>—</span>
                                <span className={styles.verbCell}>help</span>
                                <span className={styles.objectCell}>you right now</span>
                            </div>
                            <div className={styles.exampleRow}>
                                <span>Nós</span>
                                <span className={styles.highlight}>não podemos</span>
                                <span>—</span>
                                <span className={styles.verbCell}>te ajudar</span>
                                <span className={styles.objectCell}>agora</span>
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

export default Pagina202;