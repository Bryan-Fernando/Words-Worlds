import React from 'react';
import styles from './pagina265.module.css';

const Pagina265 = () => {
    return (
        <div className={styles.container}>
            <div className={styles.pageContainer}>
                <div className={styles.columnContainer}>
                    <header className={styles.header}>
                        <h1 className={styles.headerTitle}>
                            <span className={styles.grammarText}>Grammar</span>
                            <span className={styles.dashText}> - </span>
                            <span className={styles.adjectivesText}>Adjectives</span>
                        </h1>
                    </header>

                    <main className={styles.mainContent}>
                        <section className={styles.adjectivesSection}>
                            <div className={styles.columnContainer}>
                                <section className={styles.grammarSection}>
                                    <div className={styles.grammarHeader}>
                                        <h2 className={styles.grammarTitle}>Short Adjectives</h2>
                                    </div>
                                    <div className={styles.grammarContent}>
                                        <div className={styles.grammarRow}>
                                            <span>English</span>
                                            <span>Português</span>
                                        </div>
                                    </div>
                                </section>
                                <div className={styles.tableContent}>
                                    <div className={styles.row}>
                                        <span>tall</span>
                                        <span>alto</span>
                                    </div>
                                    <div className={styles.row}>
                                        <span>short</span>
                                        <span>baixo / curto</span>
                                    </div>
                                    <div className={styles.row}>
                                        <span>big</span>
                                        <span>grande</span>
                                    </div>
                                    <div className={styles.row}>
                                        <span>small</span>
                                        <span>pequeno</span>
                                    </div>
                                    <div className={styles.row}>
                                        <span>fast</span>
                                        <span>rápido</span>
                                    </div>
                                    <div className={styles.row}>
                                        <span>slow</span>
                                        <span>devagar / lento</span>
                                    </div>
                                    <div className={styles.row}>
                                        <span>old</span>
                                        <span>velho</span>
                                    </div>
                                    <div className={styles.row}>
                                        <span>young</span>
                                        <span>jovem</span>
                                    </div>
                                    <div className={styles.row}>
                                        <span>easy</span>
                                        <span>fácil</span>
                                    </div>
                                    <div className={styles.row}>
                                        <span>fun</span>
                                        <span>engraçado</span>
                                    </div>
                                    <div className={styles.row}>
                                        <span>nice</span>
                                        <span>legal / gentil</span>
                                    </div>
                                    <div className={styles.row}>
                                        <span>late</span>
                                        <span>atrasado / tarde</span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.columnContainer}>
                                <section className={styles.grammarSection}>
                                    <div className={styles.grammarHeader}>
                                        <h2 className={styles.grammarTitle}>Long Adjectives</h2>
                                    </div>
                                    <div className={styles.grammarContent}>
                                        <div className={styles.grammarRow}>
                                            <span>English</span>
                                            <span>Português</span>
                                        </div>
                                    </div>
                                </section>
                                <div className={styles.tableContent}>
                                    <div className={styles.row}>
                                        <span>beautiful</span>
                                        <span>bonito / lindo</span>
                                    </div>
                                    <div className={styles.row}>
                                        <span>intelligent</span>
                                        <span>inteligente</span>
                                    </div>
                                    <div className={styles.row}>
                                        <span>expensive</span>
                                        <span>caro</span>
                                    </div>
                                    <div className={styles.row}>
                                        <span>interesting</span>
                                        <span>interessante</span>
                                    </div>
                                    <div className={styles.row}>
                                        <span>comfortable</span>
                                        <span>confortável</span>
                                    </div>
                                    <div className={styles.row}>
                                        <span>difficult</span>
                                        <span>difícil</span>
                                    </div>
                                    <div className={styles.row}>
                                        <span>dangerous</span>
                                        <span>perigoso</span>
                                    </div>
                                    <div className={styles.row}>
                                        <span>important</span>
                                        <span>importante</span>
                                    </div>
                                    <div className={styles.row}>
                                        <span>popular</span>
                                        <span>popular</span>
                                    </div>
                                    <div className={styles.row}>
                                        <span>delicious</span>
                                        <span>delicioso</span>
                                    </div>
                                    <div className={styles.row}>
                                        <span>generous</span>
                                        <span>generoso</span>
                                    </div>
                                    <div className={styles.row}>
                                        <span>fabulous</span>
                                        <span>fabuloso</span>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Pagina265;