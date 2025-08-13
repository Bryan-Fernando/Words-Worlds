import React from 'react';
import styles from './pagina267.module.css';

const Pagina267 = () => {
    return (
        <div className={styles.page267__container}>
            <div className={styles.page267__pageContainer}>
                <header className={styles.page267__header}>
                    <h1 className={styles.page267__headerTitle}>Summary</h1>
                    <h2 className={styles.page267__subTitle}>Long Adjectives</h2>
                </header>

                <main className={styles.page267__mainContent}>
                    <div className={styles.page267__contentRow}>
                        {/* Coluna da esquerda - textos */}
                        <div className={styles.page267__blocksColumn}>
                            <div className={styles.page267__namesBox}>
                                <p>• <em>New York, São Paulo, Tokyo, Paris, Lima</em></p>
                            </div>

                            <div className={styles.page267__comparisonBlock}>
                                <div className={styles.page267__blockHeader}>
                                    <span className={styles.page267__colorSubTitle}>1 - Comparativo (igualdade): <strong>tão <span className={styles.page267__sublinharSubTitle}>adjetivo</span> quanto</strong></span>
                                </div>
                                <div className={styles.page267__exampleBox}>
                                    <p>• Paris is <span className={styles.page267__translation}>as <span className={styles.page267__sublinhar}>expensive</span> as</span> Tokyo.</p>
                                    <p>• Paris é <span className={styles.page267__translation}>tão cara quanto</span> Tokyo.</p>
                                </div>
                            </div>

                            <div className={styles.page267__comparisonBlock}>
                                <div className={styles.page267__blockHeader}>
                                    <span className={styles.page267__colorSubTitle}>2 - Comparativo (superioridade): <strong>mais <span className={styles.page267__sublinharSubTitle}>adjetivo</span> do que</strong></span>
                                </div>
                                <div className={styles.page267__exampleBox}>
                                    <p>• New York is <span className={styles.page267__translation}>more <span className={styles.page267__sublinhar}>expensive</span> than</span> São Paulo.</p>
                                    <p>• Nova York é <span className={styles.page267__translation}>mais cara do que</span> São Paulo.</p>
                                </div>
                            </div>

                            <div className={styles.page267__comparisonBlock}>
                                <div className={styles.page267__blockHeader}>
                                    <span className={styles.page267__colorSubTitle}>3 - Superlativo (inferioridade): <strong>o/a menos <span className={styles.page267__sublinharSubTitle}>adjetivo</span></strong></span>
                                </div>
                                <div className={styles.page267__exampleBox}>
                                    <p>• Lima is the <span className={styles.page267__translation}>least <span className={styles.page267__sublinhar}>expensive</span></span> city.</p>
                                    <p>• Lima é a cidade <span className={styles.page267__translation}>menos cara</span>.</p>
                                </div>
                            </div>

                            <div className={styles.page267__comparisonBlock}>
                                <div className={styles.page267__blockHeader}>
                                    <span className={styles.page267__colorSubTitle}>4 - Superlativo (superioridade): <strong>o/a mais <span className={styles.page267__sublinharSubTitle}>adjetivo</span></strong></span>
                                </div>
                                <div className={styles.page267__exampleBox}>
                                    <p>• New York is the <span className={styles.page267__translation}>most <span className={styles.page267__sublinhar}>expensive</span></span> city.</p>
                                    <p>• Nova York é a cidade <span className={styles.page267__translation}>mais cara</span>.</p>
                                </div>
                            </div>
                        </div>

                        {/* Coluna direita com imagens verticais */}
                        <div className={styles.imagesColumn}>
                            <div className={styles.imageContainer}>
                                <div className={styles.imagePlaceholder}>
                                    <img 
                                        src="/src/assets/images/pagina267 imagen 1.webp" 
                                        alt="São Paulo" 
                                        className={styles.responsiveImage} 
                                    />
                                </div>
                                <p className={styles.caption}>São Paulo</p>
                            </div>
                            <div className={styles.imageContainer}>
                                <div className={styles.imagePlaceholder}>
                                    <img 
                                        src="/src/assets/images/pagina267 imagen 2.webp" 
                                        alt="Paris" 
                                        className={styles.responsiveImage} 
                                    />
                                </div>
                                <p className={styles.caption}>Paris</p>
                            </div>
                        </div>
                    </div>

                    {/* Imagens horizontais abaixo */}
                    <div className={styles.imageRow}>
                        <div className={styles.imageContainer}>
                            <div className={styles.imagePlaceholder}>
                                <img 
                                    src="/src/assets/images/pagina267 imagen 3.webp" 
                                    alt="New York" 
                                    className={styles.responsiveImage} 
                                />
                            </div>
                            <p className={styles.caption}>New York</p>
                        </div>
                        <div className={styles.imageContainer}>
                            <div className={styles.imagePlaceholder}>
                                <img 
                                    src="/src/assets/images/pagina267 imagen 4.webp" 
                                    alt="Tokyo" 
                                    className={styles.responsiveImage} 
                                />
                            </div>
                            <p className={styles.caption}>Tokyo</p>
                        </div>
                        <div className={styles.imageContainer}>
                            <div className={styles.imagePlaceholder}>
                                <img 
                                    src="/src/assets/images/pagina267 imagen 5.webp" 
                                    alt="Lima" 
                                    className={styles.responsiveImage} 
                                />
                            </div>
                            <p className={styles.caption}>Lima</p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Pagina267;
