import React from 'react';
import styles from './pagina266.module.css';

const Pagina266 = () => {
    return (
        <div className={styles.page266__container}>
            <div className={styles.page266__pageContainer}>
                <div className={styles.page266__columnContainer}>
                    <header className={styles.page266__header}>
                        <h1 className={styles.page266__headerTitle}>Summary</h1>
                        <h2 className={styles.page266__subTitle}>Short Adjectives</h2>
                    </header>

                    <main className={styles.page266__mainContent}>
                        <div className={styles.page266__namesBox}>
                            <p>• <em>Maria, Pedro, João, Anne and Brenda.</em></p>
                        </div>

                        <div className={styles.page266__comparisonBlock}>
                            <div className={styles.page266__blockHeader}>
                                <span className={styles.page266__colorSubTitle}>
                                    1 - Comparativo (de <strong>igualdade</strong>): <strong>tão <span className={styles.page266__sublinharSubTitle}>adjetivo</span> quanto</strong>
                                </span>
                            </div>
                            <div className={styles.page266__exampleBox}>
                                <p>• Maria is <span className={styles.page266__translation}>as <span className={styles.page266__sublinhar} >tall</span> as</span> Pedro.</p>
                                <p>• Maria é <span className={styles.page266__translation}>tão <span className={styles.page266__sublinhar} >alta</span> quanto Pedro.</span></p>
                            </div>
                        </div>

                        <div className={styles.page266__comparisonBlock}>
                            <div className={styles.page266__blockHeader}>
                                <span className={styles.page266__colorSubTitle}>
                                    2 - Comparativo (de <strong>superioridade</strong>): <strong>mais <span className={styles.page266__sublinharSubTitle}>adjetivo</span> do que</strong>
                                </span>
                            </div>
                            <div className={styles.page266__exampleBox}>
                                <p>• João is tall<span className={styles.page266__translation}>er than</span> Maria and Pedro.</p>
                                <p>• João é <span className={styles.page266__translation}>mais alto do que </span>Maria e Pedro.</p>
                            </div>
                        </div>

                        <div className={styles.page266__comparisonBlock}>
                            <div className={styles.page266__blockHeader}>
                                <span className={styles.page266__colorSubTitle}>
                                    3 - Superlativo (de <strong>inferioridade</strong>): <strong>o/a mais <span className={styles.page266__sublinharSubTitle}>adjetivo</span></strong>
                                </span>
                            </div>
                            <div className={styles.page266__exampleBox}>
                                <p>• Anne is <span className={styles.page266__translation}>the</span> short<span className={styles.page266__translation}>est</span> of the group.</p>
                                <p>• Anne é<span className={styles.page266__translation}> a mais baixa </span>do grupo.</p>
                            </div>
                        </div>

                        <div className={styles.page266__comparisonBlock}>
                            <div className={styles.page266__blockHeader}>
                                <span className={styles.page266__colorSubTitle}>4 - Superlativo (de <strong>superioridade</strong>): <strong>o/a mais <span className={styles.page266__sublinharSubTitle}>adjetivo</span></strong></span>
                            </div>
                            <div className={styles.page266__exampleBox}>
                                <p>• Brenda is <span className={styles.page266__translation}>the </span>tall<span className={styles.page266__translation}>est</span> of them all.</p>
                                <p>• Brenda é<span className={styles.page266__translation}> a mais alta </span>de todas.</p>
                                
                            </div>
                        </div>

                        <div className={styles.imagePlaceholder}>
                            <img 
                                src="/src/assets/images/pagina266 imagen1.webp" 
                                alt="Comparação de adjetivos" 
                                style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
                            />
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Pagina266;