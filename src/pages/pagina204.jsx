import React from 'react';
import styles from './pagina204.module.css';

const Pagina204 = () => {
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
                                <span>Adv</span>
                                <span>Verb</span>
                                <span>Object / Complement</span>
                            </div>
                        </div>
                    </section>

                    <section className={styles.exampleSection}>
                        <div className={styles.sectionHeader}>
                            <em className={styles.exampleTitle}>Requests</em>
                            <span className={styles.separator}>/</span>
                            <em className={styles.titleTranslation}>Solicitações ou Pedidos</em>
                        </div>
                        <div className={styles.exampleBox}>
                            <div className={styles.exampleRow}>
                                <span>Can</span>
                                <span>you</span>
                                <span>—</span>
                                <span className={styles.verbCell}>help</span>
                                <span>me with this project?</span>

                            </div>
                            <div className={styles.exampleRow}>
                                <span>Você</span>
                                <span>pode</span>
                                <span>—</span>
                                <span className={styles.verbCell}>me ajudar</span>
                                <span>com este projeto?</span>

                            </div>
                        </div>
                    </section>

                    <section className={styles.exampleSection}>
                        <div className={styles.sectionHeader}>
                            <em className={styles.exampleTitle}>Ability</em>
                            <span className={styles.separator}>/</span>
                            <em className={styles.titleTranslation}>Habilidade</em>
                        </div>
                        <div className={styles.exampleBox}>
                            <div className={styles.exampleRow}>
                                <span>Can</span>
                                <span>she</span>
                                <span>—</span>
                                <span className={styles.verbCell}>drive</span>
                                <span>a car?</span>

                            </div>
                            <div className={styles.exampleRow}>
                                <span>Ela</span>
                                <span>sabe</span>
                                <span>—</span>
                                <span className={styles.verbCell}>dirigir</span>
                                <span>um carro?</span>

                            </div>
                        </div>
                    </section>

                    <section className={styles.imagesSection}>
                        <div className={styles.imagePlaceholder}>
                            { /*  <img 
                                src="/imagens_reference/helping-child.jpg" 
                                alt="Person helping child with poster" 
                                className={styles.exampleImage}
                            />*/}
                        </div>
                        <div className={styles.imagePlaceholder}>
                            { /* < img 
                                src="/imagens_reference/driving-car.jpg" 
                                alt="Person driving car with GPS" 
                                className={styles.exampleImage}
                            /> */}
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default Pagina204;