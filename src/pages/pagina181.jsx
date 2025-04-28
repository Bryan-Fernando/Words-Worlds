import React from 'react';
import styles from './pagina181.module.css';

const Pagina181 = () => {
    return (
        <div className={styles.page181__container}>
            <header className={styles.page181__header}>
                <h1 className={styles.page181__title}>Grammar - <span className={styles.page181__title_black}>Would</span></h1>
            </header>

            <main className={styles.page181__main}>
                <aside className={styles.page181__aside}>
                    <div className={styles.page181__aside_container}>
                        <div className={styles.page181__aside_header}>
                            <p><strong>Would - Futuro do Pretérito</strong></p>
                        </div>
                        <div className={styles.page181__aside_content}>
                            <p className={styles.page181__text}>
                                O <span className={styles.page181__highlight}>Would</span> é um <span className={styles.page181__highlight}>verbo modal/auxiliar</span> que usamos para expressar ações no futuro do pretérito (terminação <span className={styles.page181__highlight}>ria</span> em português).
                            </p>
                        </div>
                    </div>
                </aside>

                <section className={styles.page181__tableSection}>
                    <div className={styles.page181__tableTitle}>
                        Negative Form
                    </div>
                    <table className={styles.page181__table}>
                        <thead>
                            <tr>
                                <th>
                                    Subject
                                    <div className={styles.page181__translation}>Sujeito</div>
                                </th>
                                <th>Aux. Verb</th>
                                <th>Not</th>
                                <th>Contraction</th>
                                <th>
                                    Verb(s)
                                    <div className={styles.page181__translation}>Verbo(s)</div>
                                </th>
                                <th>
                                    Object Complement
                                    <div className={styles.page181__translation}>Complemento</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                {
                                    pronoun: 'I',
                                    translation: 'Eu',
                                    verb: 'like to travel',
                                    verbTranslation: 'não gostaria de viajar',
                                    complement: 'by plane',
                                    complementTranslation: 'de avião'
                                },
                                {
                                    pronoun: 'He',
                                    translation: 'Ele',
                                    verb: 'eat',
                                    verbTranslation: 'não comeria',
                                    complement: 'vegetables',
                                    complementTranslation: 'vegetais'
                                },
                                {
                                    pronoun: 'She',
                                    translation: 'Ela',
                                    verb: 'buy',
                                    verbTranslation: 'não compraria',
                                    complement: 'this car',
                                    complementTranslation: 'este carro'
                                },
                                {
                                    pronoun: 'It',
                                    translation: 'Isso',
                                    verb: 'work',
                                    verbTranslation: 'não funcionaria',
                                    complement: 'here',
                                    complementTranslation: 'aqui'
                                },
                                {
                                    pronoun: 'We',
                                    translation: 'Nós',
                                    verb: 'go',
                                    verbTranslation: 'não iríamos',
                                    complement: 'to the party',
                                    complementTranslation: 'para a festa'
                                },
                                {
                                    pronoun: 'You',
                                    translation: 'Você',
                                    verb: 'do',
                                    verbTranslation: 'não faria',
                                    complement: 'that',
                                    complementTranslation: 'isso'
                                },
                                {
                                    pronoun: "Y'all",
                                    translation: 'Vocês',
                                    verb: 'stay',
                                    verbTranslation: 'não ficariam',
                                    complement: 'at home',
                                    complementTranslation: 'em casa'
                                },
                                {
                                    pronoun: 'They',
                                    translation: 'Eles/Elas',
                                    verb: 'move',
                                    verbTranslation: 'não se mudariam',
                                    complement: 'to London',
                                    complementTranslation: 'para Londres'
                                }
                            ].map((item) => (
                                <tr key={item.pronoun}>
                                    <td>
                                        {item.pronoun}
                                        <div className={styles.page181__translation}>
                                            {item.translation}
                                        </div>
                                    </td>
                                    <td>would</td>
                                    <td>not</td>
                                    <td>{`wouldn't`}</td>
                                    <td>
                                        {item.verb}
                                        <div className={styles.page181__translation}>{item.verbTranslation}</div>
                                    </td>
                                    <td>
                                        {item.complement}
                                        <div className={styles.page181__translation}>{item.complementTranslation}</div>
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

export default Pagina181;