import React from 'react';
import styles from './pagina203.module.css';

const Pagina203 = () => {
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
                            <em className={styles.exampleTitle}>Prohibition</em>
                            <span className={styles.separator}>/</span>
                            <em className={styles.titleTranslation}>Proibição</em>
                        </div>
                        <div className={styles.exampleBox}>
                            <div className={styles.exampleRow}>
                                <span>You</span>
                                <span className={styles.highlight}>can't</span>
                                <span>—</span>
                                <span className={styles.verbCell}>park</span>
                                <span className={styles.objectCell}>here</span>
                            </div>
                            <div className={styles.exampleRow}>
                                <span>Você</span>
                                <span className={styles.highlight}>não pode</span>
                                <span>—</span>
                                <span className={styles.verbCell}>estacionar</span>
                                <span className={styles.objectCell}>aqui</span>
                            </div>
                        </div>
                    </section>

                    <section className={`${styles.exampleSection} ${styles.fiveColumnSection}`}>
                        <div className={styles.sectionHeader}>
                            <em className={styles.exampleTitle}>Advice</em>
                            <span className={styles.separator}>/</span>
                            <em className={styles.titleTranslation}>Conselho</em>
                        </div>
                        <div className={styles.exampleBox}>
                            <div className={styles.exampleRow}>
                                <span>You</span>
                                <span className={styles.highlight}>can't</span>
                                <span className={styles.highlight}>always</span>
                                <span className={styles.verbCell}>get want</span>
                                <span className={styles.objectCell}>what you</span>
                            </div>
                            <div className={styles.exampleRow}>
                                <span>Você</span>
                                <span className={styles.highlight}>nem</span>
                                <span className={styles.highlight}>sempre</span>
                                <span className={styles.verbCell}>pode conseguir quer</span>
                                <span className={styles.objectCell}>o que você</span>
                            </div>
                        </div>
                    </section>

                    <section className={styles.imagesSection}>
                        <div className={styles.imagePlaceholder}>
                            {/* <img 
                                src="/imagens_reference/no-parking.jpg" 
                                alt="No Parking Fire Lane sign" 
                                className={styles.exampleImage}
                            /> */}
                        </div>
                        <div className={styles.imagePlaceholder}>
                            {/* <img 
                                src="/imagens_reference/office-meeting.jpg" 
                                alt="People talking at office desk" 
                                className={styles.exampleImage}
                            /> */}
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default Pagina203;