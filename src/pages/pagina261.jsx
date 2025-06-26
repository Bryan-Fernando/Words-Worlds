import React from 'react';
import styles from './pagina261.module.css';

const pagina261 = () => {
    return (
        <div className={styles.pageContainer}>
            <header className={styles.header}>
                <h1>
                    <span className={styles.grammar}>Grammar</span>
                    <span className={styles.dash}> - </span>
                    <span>Adjectives</span>
                </h1>
            </header>

            <div className={styles.content}>
                <div className={styles.subtitle}>
                    <h2>Adjetivos longos</h2>
                    <p>Acima de duas sílabas ou vogais</p>
                </div>

                <section className={styles.comparativeSection}>
                    <h3 className={styles.sectionTitle}>Comparativo de igualdade</h3>
                    <div className={styles.exampleBox}>
                        <div className={styles.example}>
                            <p><span className={styles.bullet}>•</span> Music is <span className={styles.redText}>as</span> <span className={styles.blackUnderlined}>important</span> <span className={styles.redText}>as</span> arts.</p>
                            <p className={styles.translation}>Música é <span className={styles.redText}>tão</span> <span className={styles.blackUnderlined}>importante</span> <span className={styles.redText}>quanto</span> artes.</p>
                        </div>
                        <div className={styles.example}>
                            <p><span className={styles.bullet}>•</span> This book is <span className={styles.redText}>as</span> <span className={styles.blackUnderlined}>interesting</span> <span className={styles.redText}>as</span> the movie.</p>
                            <p className={styles.translation}>Este livro é <span className={styles.redText}>tão</span> <span className={styles.blackUnderlined}>interessante</span> <span className={styles.redText}>quanto</span> o filme.</p>
                        </div>
                        <div className={styles.example}>
                            <p><span className={styles.bullet}>•</span> This new project is <span className={styles.redText}>as</span> challenging <span className={styles.redText}>as</span> the last one.</p>
                            <p className={styles.translation}>O novo projeto é <span className={styles.redText}>tão</span> desafiador <span className={styles.redText}>quanto</span> o anterior.</p>
                        </div>
                    </div>
                </section>

                <section className={styles.comparativeSection}>
                    <h3 className={styles.sectionTitle}>Comparativo de Superioridade</h3>
                    <div className={styles.exampleBox}>
                        <div className={styles.example}>
                            <p><span className={styles.bullet}>•</span> Physics is <span className={styles.redText}>more</span> <span className={styles.blackUnderlined}>important</span> <span className={styles.redText}>than</span> history.</p>
                            <p className={styles.translation}>Física é <span className={styles.redText}>mais</span> <span className={styles.blackUnderlined}>importante</span> <span className={styles.redText}>do que</span> história.</p>
                        </div>
                        <div className={styles.example}>
                            <p><span className={styles.bullet}>•</span> Lucas studies <span className={styles.redText}>more</span> <span className={styles.blackUnderlined}>effectively</span> <span className={styles.redText}>than</span> his classmates.</p>
                            <p className={styles.translation}>Lucas estuda de forma <span className={styles.redText}>mais</span> <span className={styles.blackUnderlined}>eficaz</span> <span className={styles.redText}>do que</span> os colegas.</p>
                        </div>
                        <div className={styles.example}>
                            <p><span className={styles.bullet}>•</span> She speaks <span className={styles.redText}>more</span> <span className={styles.blackUnderlined}>confidently</span> <span className={styles.redText}>than</span> before.</p>
                            <p className={styles.translation}>Ela fala com <span className={styles.redText}>mais</span> <span className={styles.blackUnderlined}>confiança</span> <span className={styles.redText}>do que</span> antes.</p>
                        </div>
                    </div>
                </section>

                <section className={styles.comparativeSection}>
                    <h3 className={styles.sectionTitle}>Comparativo de inferioridade</h3>
                    <div className={styles.exampleBox}>
                        <div className={styles.example}>
                            <p><span className={styles.bullet}>•</span> The X program is <span className={styles.redText}>less</span> <span className={styles.blackUnderlined}>complicated</span> <span className={styles.redText}>than</span> the Z program.</p>
                            <p className={styles.translation}>O programa X é <span className={styles.redText}>menos</span> <span className={styles.blackUnderlined}>complicado</span> <span className={styles.redText}>do que</span> o programa Z.</p>
                        </div>
                        <div className={styles.example}>
                            <p><span className={styles.bullet}>•</span> He is <span className={styles.redText}>less</span> <span className={styles.blackUnderlined}>responsible</span> <span className={styles.redText}>than</span> his sister.</p>
                            <p className={styles.translation}>Ele é <span className={styles.redText}>menos</span> <span className={styles.blackUnderlined}>responsável</span> <span className={styles.redText}>que</span> a irmã dele.</p>
                        </div>
                        <div className={styles.example}>
                            <p><span className={styles.bullet}>•</span> Our car is <span className={styles.redText}>less</span> <span className={styles.blackUnderlined}>comfortable</span> <span className={styles.redText}>than</span> theirs.</p>
                            <p className={styles.translation}>Nosso carro é <span className={styles.redText}>menos</span> <span className={styles.blackUnderlined}>confortável</span> <span className={styles.redText}>que</span> o deles.</p>
                        </div>
                    </div>
                </section>

                <section className={styles.comparativeSection}>
                    <h3 className={styles.sectionTitle}>Superlativo de Superioridade</h3>
                    <div className={styles.exampleBox}>
                        <div className={styles.example}>
                            <p><span className={styles.bullet}>•</span> Love is <span className={styles.redText}>the most</span> <span className={styles.blackUnderlined}>important</span> feeling.</p>
                            <p className={styles.translation}>O amor é o sentimento <span className={styles.redText}>mais</span> <span className={styles.blackUnderlined}>importante</span>.</p>
                        </div>
                        <div className={styles.example}>
                            <p><span className={styles.bullet}>•</span> She is <span className={styles.redText}>the most</span> <span className={styles.blackUnderlined}>intelligent</span> student in the class.</p>
                            <p className={styles.translation}>Ela é <span className={styles.redText}>a</span> aluna <span className={styles.redText}>mais</span> <span className={styles.blackUnderlined}>inteligente</span> da turma.</p>
                        </div>
                        <div className={styles.example}>
                            <p><span className={styles.bullet}>•</span> That is <span className={styles.redText}>the most</span> <span className={styles.blackUnderlined}>expensive</span> item in the store.</p>
                            <p className={styles.translation}>Aquele é <span className={styles.redText}>o</span> item <span className={styles.redText}>mais</span> <span className={styles.blackUnderlined}>caro</span> da loja.</p>
                        </div>
                    </div>
                </section>

                <section className={styles.comparativeSection}>
                    <h3 className={styles.sectionTitle}>Superlativo de inferioridade</h3>
                    <div className={styles.exampleBox}>
                        <div className={styles.example}>
                            <p><span className={styles.bullet}>•</span> Out of all the candidates, he is <span className={styles.redText}>the least</span> <span className={styles.blackUnderlined}>experienced</span> for the job.</p>
                            <p className={styles.translation}>De todos os candidatos, ele é <span className={styles.redText}>o menos</span> <span className={styles.blackUnderlined}>experiente</span> para o trabalho.</p>
                        </div>
                        <div className={styles.example}>
                            <p><span className={styles.bullet}>•</span> She is <span className={styles.redText}>the least</span> <span className={styles.blackUnderlined}>organized</span> person in the office.</p>
                            <p className={styles.translation}>Ela é <span className={styles.redText}>a</span> pessoa <span className={styles.redText}>menos</span> <span className={styles.blackUnderlined}>organizada</span> do escritório.</p>
                        </div>
                        <div className={styles.example}>
                            <p><span className={styles.bullet}>•</span> This is <span className={styles.redText}>the least</span> <span className={styles.blackUnderlined}>interesting</span> subject for me.</p>
                            <p className={styles.translation}>Esta é <span className={styles.redText}>a</span> matéria <span className={styles.redText}>menos</span> <span className={styles.blackUnderlined}>interessante</span> para mim.</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default pagina261;