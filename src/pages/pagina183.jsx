import React from 'react';
import styles from './pagina183.module.css';

const Pagina183 = () => {
    return (
        <div className={styles.page183__container}>
            <header className={styles.page183__header}>
                <h1 className={styles.page183__title}>Grammar - Would</h1>
            </header>

            <main className={styles.page183__main}>
                <section className={styles.page183__explanation}>
                    <h2 className={styles.page183__subtitle}>Would - Futuro do Pretérito</h2>
                    <p className={styles.page183__text}>
                        O <span className={styles.page183__highlight}>Would</span> é um <span className={styles.page183__highlight}>verbo modal/auxiliar</span> que usamos para expressar ações no futuro do pretérito (terminação <span className={styles.page183__highlight}>ria</span> em português).
                    </p>
                </section>

                <section className={styles.page183__tableSection}>
                    <div className={styles.page183__tableTitle}>
                        Negative Interrogative Form
                    </div>
                    <div className={styles.page183__subtitleSection}>
                        Contraction Form
                    </div>
                    <table className={styles.page183__table}>
                        <thead>
                            <tr>
                                <th>Aux. Verb</th>
                                <th>
                                    Subject
                                    <div className={styles.page183__translation}>Sujeito</div>
                                </th>
                                <th>Adv / Not</th>
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
                                    subject: 'you',
                                    translation: 'você',
                                    verb: 'want to know',
                                    verbTranslation: 'não gostaria de saber',
                                    complement: 'the truth?',
                                    complementTranslation: 'a verdade?'
                                },
                                {
                                    subject: 'he',
                                    translation: 'ele',
                                    verb: 'like to go',
                                    verbTranslation: 'não gostaria de ir',
                                    complement: 'to the beach?',
                                    complementTranslation: 'à praia?'
                                },
                                {
                                    subject: 'they',
                                    translation: 'eles',
                                    verb: 'prefer to stay',
                                    verbTranslation: 'não prefeririam ficar',
                                    complement: 'at home?',
                                    complementTranslation: 'em casa?'
                                },
                                {
                                    subject: 'we',
                                    translation: 'nós',
                                    verb: 'take to travel',
                                    verbTranslation: 'não levaríamos para viajar',
                                    complement: 'by train?',
                                    complementTranslation: 'de trem?'
                                },
                                {
                                    subject: 'she',
                                    translation: 'ela',
                                    verb: 'need to study',
                                    verbTranslation: 'não precisaria estudar',
                                    complement: 'for the test?',
                                    complementTranslation: 'para a prova?'
                                }
                            ].map((item, index) => (
                                <tr key={index}>
                                    <td>Wouldn't</td>
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