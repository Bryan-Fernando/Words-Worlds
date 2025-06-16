import React from 'react';
import styles from './pagina267.module.css';

const Pagina267 = () => {
    return (
        <div className={styles.container}>
            <div className={styles.pageContainer}>
                <header className={styles.header}>
                    <h1 className={styles.headerTitle}>Summary</h1>
                    <h2 className={styles.subTitle}>Long Adjectives</h2>
                </header>

                <main className={styles.mainContent}>
                    <div className={styles.contentRow}>
                        {/* Coluna da esquerda - textos */}
                        <div className={styles.blocksColumn}>
                            <div className={styles.namesBox}>
                                <p>• <em>New York, São Paulo, Tokyo, Paris, Lima</em></p>
                            </div>

                            <div className={styles.comparisonBlock}>
                                <div className={styles.blockHeader}>
                                    <span className={styles.colorSubTitle}>1 - Comparativo (igualdade): <strong>tão <span className={styles.sublinharSubTitle}>adjetivo</span> quanto</strong></span>
                                </div>
                                <div className={styles.exampleBox}>
                                    <p>• Paris is <span className={styles.translation}>as <span className={styles.sublinhar}>expensive</span> as</span> Tokyo.</p>
                                    <p>• Paris é <span className={styles.translation}>tão cara quanto</span> Tokyo.</p>
                                </div>
                            </div>

                            <div className={styles.comparisonBlock}>
                                <div className={styles.blockHeader}>
                                    <span className={styles.colorSubTitle}>2 - Comparativo (superioridade): <strong>mais <span className={styles.sublinharSubTitle}>adjetivo</span> do que</strong></span>
                                </div>
                                <div className={styles.exampleBox}>
                                    <p>• New York is <span className={styles.translation}>more <span className={styles.sublinhar}>expensive</span> than</span> São Paulo.</p>
                                    <p>• Nova York é <span className={styles.translation}>mais cara do que</span> São Paulo.</p>
                                </div>
                            </div>

                            <div className={styles.comparisonBlock}>
                                <div className={styles.blockHeader}>
                                    <span className={styles.colorSubTitle}>3 - Superlativo (inferioridade): <strong>o/a menos <span className={styles.sublinharSubTitle}>adjetivo</span></strong></span>
                                </div>
                                <div className={styles.exampleBox}>
                                    <p>• Lima is the <span className={styles.translation}>least <span className={styles.sublinhar}>expensive</span></span> city.</p>
                                    <p>• Lima é a cidade <span className={styles.translation}>menos cara</span>.</p>
                                </div>
                            </div>

                            <div className={styles.comparisonBlock}>
                                <div className={styles.blockHeader}>
                                    <span className={styles.colorSubTitle}>4 - Superlativo (superioridade): <strong>o/a mais <span className={styles.sublinharSubTitle}>adjetivo</span></strong></span>
                                </div>
                                <div className={styles.exampleBox}>
                                    <p>• New York is the <span className={styles.translation}>most <span className={styles.sublinhar}>expensive</span></span> city.</p>
                                    <p>• Nova York é a cidade <span className={styles.translation}>mais cara</span>.</p>
                                </div>
                            </div>
                        </div>

                        {/* Coluna direita com imagens verticais */}
                        <div className={styles.imagesColumn}>
                            <div className={styles.imageContainer}>
                                <div className={styles.imagePlaceholder}></div>
                                <p className={styles.caption}>São Paulo</p>
                            </div>
                            <div className={styles.imageContainer}>
                                <div className={styles.imagePlaceholder}></div>
                                <p className={styles.caption}>Paris</p>
                            </div>
                        </div>
                    </div>

                    {/* Imagens horizontais abaixo */}
                    <div className={styles.imageRow}>
                        {['New York', 'Tokyo', 'Lima'].map(city => (
                            <div className={styles.imageContainer} key={city}>
                                <div className={styles.imagePlaceholder}></div>
                                <p className={styles.caption}>{city}</p>
                            </div>
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Pagina267;
