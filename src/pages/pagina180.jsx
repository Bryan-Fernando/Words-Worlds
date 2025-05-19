import React from 'react';
import styles from './pagina180.module.css';

const Pagina180 = () => {
    return (
        <div className={styles.page180__container}>
            <header className={styles.page180__header}>
                <h1 className={styles.page180__title}>Grammar - Would</h1>
            </header>

            <main className={styles.page180__main}>
                <aside className={styles.page180__aside}>
                    <div className={styles.page180__aside_container}>
                        <div className={styles.page180__aside_header}>
                            <p><strong>Would - Futuro do Pretérito</strong></p>
                        </div>
                        <div className={styles.page180__aside_content}>
                            <p className={styles.page180__text}>
                                O <span className={styles.page180__highlight}>Would</span> é um <span className={styles.page181__highlight}>verbo modal/auxiliar</span> que não tem uma tradução
                                exata, mas que coloca o verbo principal no futuro do pretérito com a terminação de <span className={styles.page180__highlight}>ria</span> em português.
                            </p>
                        </div>
                    </div>
                </aside>

                <section className={styles.page180__tableSection}>
                    <div className={styles.page180__tableTitle}>
                        Affirmative Form
                    </div>
                    <table className={styles.page180__table}>
                        <thead>
                            <tr>
                                <th>
                                    <div className={styles.page180__translation}>Full Form</div>
                                    <div>Subject</div>
                                </th>
                                <th>Aux. Verb</th>
                                <th><div className={styles.page180__translation}>Contraction</div></th>
                                <th>
                                    Verb(s)
                                </th>
                                <th>
                                    Object Complement

                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                {
                                    pronoun: 'I',
                                    translation: 'Eu',
                                    verb: 'like',
                                    verbTranslation: 'gostaria',
                                    complement: 'a sandwich, please',
                                    complementTranslation: 'de um sanduíche, por favor',
                                    contraction: "I'd"
                                },
                                {
                                    pronoun: 'He',
                                    translation: 'Ele',
                                    verb: 'prefer',
                                    verbTranslation: 'preferiria',
                                    complement: 'a coffee',
                                    complementTranslation: 'um café',
                                    contraction: "He'd"
                                },
                                {
                                    pronoun: 'She',
                                    translation: 'Ela',
                                    verb: 'like to go',
                                    verbTranslation: 'gostaria de ir',
                                    complement: 'to the park',
                                    complementTranslation: 'ao parque',
                                    contraction: "She'd"
                                },
                                {
                                    pronoun: 'It',
                                    translation: '-',
                                    verb: 'be',
                                    verbTranslation: 'Seria',
                                    complement: 'a great gift',
                                    complementTranslation: 'um ótimo presente',
                                    contraction: "It'd"
                                },
                                {
                                    pronoun: 'We',
                                    translation: 'Nós',
                                    verb: 'like to travel',
                                    verbTranslation: 'gostaríamos de viajar',
                                    complement: 'by train',
                                    complementTranslation: 'de trem',
                                    contraction: "We'd"
                                },
                                {
                                    pronoun: 'You',
                                    translation: 'Você',
                                    verb: 'enjoy watching',
                                    verbTranslation: 'adoraria assistir',
                                    complement: 'this movie',
                                    complementTranslation: 'esse filme',
                                    contraction: "You'd"
                                },
                                {
                                    pronoun: "Y'all",
                                    translation: 'Vocês',
                                    verb: 'enjoy watching',
                                    verbTranslation: 'adorariam assistir',
                                    complement: 'this movie',
                                    complementTranslation: 'esse filme',
                                    contraction: "Y'all'd"
                                },
                                {
                                    pronoun: 'They',
                                    translation: 'Eles/Elas',
                                    verb: 'love to visit',
                                    verbTranslation: 'adorariam visitar',
                                    complement: 'Brazil one day',
                                    complementTranslation: 'o Brasil um dia',
                                    contraction: "They'd"
                                }
                            ].map((item) => (
                                <tr key={item.pronoun}>
                                    <td>
                                        {item.pronoun}
                                        <div className={styles.page180__translation}>
                                            {item.translation}
                                        </div>
                                    </td>
                                    <td><div className={styles.page180__translation}>would</div></td>
                                    <td className={styles.page180__translation}>{item.contraction}</td>
                                    <td>
                                        {item.verb}
                                        <div className={styles.page180__translation}>{item.verbTranslation}</div>
                                    </td>
                                    <td>
                                        {item.complement}
                                        <div className={styles.page180__translation}>{item.complementTranslation}</div>
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

export default Pagina180;