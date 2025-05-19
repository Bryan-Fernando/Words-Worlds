import React from 'react';
import styles from './pagina183.module.css';

const Pagina183 = () => {
    return (
        <div className={styles.page183__container}>
            <header className={styles.page183__header}>
                <h1 className={styles.page183__title}>Grammar - Would</h1>
            </header>

            <main className={styles.page183__main}>
                <aside className={styles.page183__aside}>
                    <div className={styles.page183__aside_container}>
                        <div className={styles.page183__aside_header}>
                            <p><strong>Would - Futuro do Pretérito</strong></p>
                        </div>
                        <div className={styles.page183__aside_content}>
                            <p className={styles.page183__text}>
                                O <span className={styles.page183__highlight}>Would</span> é um <span className={styles.page183__highlight}>verbo modal/auxiliar</span> que não tem uma tradução
                                exata, mas que coloca o verbo principal no futuro do pretérito com a terminação de <span className={styles.page183__highlight}>ria</span> em português.
                            </p>
                        </div>
                    </div>
                </aside>

                <section className={styles.page183__tableSection}>
                    <div className={styles.page183__tableTitle}>
                        Negative Interrogative Form -  Contraction
                    </div>
                    <table className={styles.page183__table}>
                        <thead>
                            <tr>
                                <th>
                                    <div className={styles.page183__translation}>Contraction</div>
                                    Aux. Verb</th>
                                <th>
                                    Subject
                                </th>
                                <th>Adv / <div className={styles.page183__translation}>Not</div></th>
                                <th>
                                    Verb(s)
                                    <div className={styles.page183__translation}>Verbo(s)</div>
                                </th>
                                <th>
                                    Object Complement
                                    <div className={styles.page183__translation}>Complemento</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                {
                                    subject: 'I',
                                    translation: 'Eu',
                                    verb: 'be',
                                    verbTranslation: 'não seria',
                                    complement: 'a good leader for this team?',
                                    complementTranslation: 'um bom líder para esta equipe?'
                                },
                                {
                                    subject: 'he',
                                    translation: 'Ele',
                                    verb: 'enjoy going',
                                    verbTranslation: 'não gostaria de ir',
                                    complement: 'to the concert with us?',
                                    complementTranslation: 'ao show com a gente ?'
                                },
                                {
                                    subject: 'she',
                                    translation: 'Ela',
                                    verb: 'want to know',
                                    verbTranslation: 'não gostaria de saber',
                                    complement: 'the truth?',
                                    complementTranslation: 'a verdade?'
                                },
                                {
                                    subject: 'it',
                                    translation: '-',
                                    verb: 'take to travel',
                                    verbTranslation: 'Não levaria para viajar',
                                    complement: 'too long by bus ?',
                                    complementTranslation: 'tempo demais de ônibus ?'
                                },
                                {
                                    subject: 'we',
                                    translation: 'Nós',
                                    verb: 'have',
                                    verbTranslation: 'não nos divertiríamos',
                                    complement: 'more fun at the beach?',
                                    complementTranslation: 'mais na praia ?'
                                },
                                {
                                    subject: 'you',
                                    translation: 'Você',
                                    verb: 'prefer to stay',
                                    verbTranslation: 'não preferiria ficar',
                                    complement: 'home tonight?',
                                    complementTranslation: 'em casa esta noite?'
                                },
                                {
                                    subject: 'y’all',
                                    translation: 'Vocês ',
                                    verb: 'prefer to stay',
                                    verbTranslation: 'não prefeririam ficar ',
                                    complement: 'home tonight?',
                                    complementTranslation: 'em casa esta noite?'
                                },
                                {
                                    subject: 'they',
                                    translation: 'Eles / Elas',
                                    verb: 'notice',
                                    verbTranslation: 'não perceberiam',
                                    complement: 'the difference?',
                                    complementTranslation: 'a diferença?'
                                }
                            ].map((item, index) => (
                                <tr key={index}>
                                    <td><div className={styles.page183__translation}>would</div></td>
                                    <td>
                                        {item.subject}
                                        <div className={styles.page183__translation}>
                                            {item.translation}
                                        </div>
                                    </td>
                                    <td></td>
                                    <td>
                                        {item.verb}
                                        <div className={styles.page183__translation}>{item.verbTranslation}</div>
                                    </td>
                                    <td>
                                        {item.complement}
                                        <div className={styles.page183__translation}>{item.complementTranslation}</div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>
            </main>
        </div>
    );
};

export default Pagina183;