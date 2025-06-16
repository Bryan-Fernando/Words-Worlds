import React from 'react';
import styles from './pagina266.module.css';

const Pagina266 = () => {
    return (
        <div className={styles.container}>
            <div className={styles.pageContainer}>
                <div className={styles.columnContainer}>
                    <header className={styles.header}>
                        <h1 className={styles.headerTitle}>Summary</h1>
                        <h2 className={styles.subTitle}>Short Adjectives</h2>
                    </header>

                    <main className={styles.mainContent}>
                        <div className={styles.namesBox}>
                            <p>• <em>Maria, Pedro, João, Anne and Brenda.</em></p>
                        </div>

                        <div className={styles.comparisonBlock}>
                            <div className={styles.blockHeader}>
                                <span className={styles.colorSubTitle}>
                                    1 - Comparativo (de <strong>igualdade</strong>): <strong>tão <span className={styles.sublinharSubTitle}>adjetivo</span> quanto</strong>
                                </span>
                            </div>
                            <div className={styles.exampleBox}>
                                <p>• Maria is <span className={styles.translation}>as <span className={styles.sublinhar} >tall</span> as</span> Pedro.</p>
                                <p>• Maria é <span className={styles.translation}>tão <span className={styles.sublinhar} >alta</span> quanto Pedro.</span></p>
                            </div>
                        </div>

                        <div className={styles.comparisonBlock}>
                            <div className={styles.blockHeader}>
                                <span className={styles.colorSubTitle}>
                                    2 - Comparativo (de <strong>superioridade</strong>): <strong>mais <span className={styles.sublinharSubTitle}>adjetivo</span> do que</strong>
                                </span>
                            </div>
                            <div className={styles.exampleBox}>
                                <p>• João is tall<span className={styles.translation}>er than</span> Maria and Pedro.</p>
                                <p>• João é <span className={styles.translation}>mais alto do que </span>Maria e Pedro.</p>
                            </div>
                        </div>

                        <div className={styles.comparisonBlock}>
                            <div className={styles.blockHeader}>
                                <span className={styles.colorSubTitle}>
                                    3 - Superlativo (de <strong>inferioridade</strong>): <strong>o/a mais <span className={styles.sublinharSubTitle}>adjetivo</span></strong>
                                </span>
                            </div>
                            <div className={styles.exampleBox}>
                                <p>• Anne is <span className={styles.translation}>the</span> short<span className={styles.translation}>est</span> of the group.</p>
                                <p>• Anne é<span className={styles.translation}> a mais baixa </span>do grupo.</p>
                            </div>
                        </div>

                        <div className={styles.comparisonBlock}>
                            <div className={styles.blockHeader}>
                                <span className={styles.colorSubTitle}>4 - Superlativo (de <strong>superioridade</strong>): <strong>o/a mais <span className={styles.sublinharSubTitle}>adjetivo</span></strong></span>
                            </div>
                            <div className={styles.exampleBox}>
                                <p>• Brenda is <span className={styles.translation}>the </span>tall<span className={styles.translation}>est</span> of them all.</p>
                                <p>• Brenda é<span className={styles.translation}> a mais alta </span>de todas.</p>
                                
                            </div>
                        </div>

                        <div className={styles.imagePlaceholder}>
                            {/* Imagem será adicionada aqui */}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Pagina266;