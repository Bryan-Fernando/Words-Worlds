import React from 'react';
import styles from './pagina180.module.css';

const Pagina180 = () => {
    return (
        <div className={styles.page180__container}>
            <header className={styles.page180__header}>
                <h1 className={styles.page180__title}>Grammar - Would</h1>
            </header>

            <main className={styles.page180__main}>
                <section className={styles.page180__explanation}>
                    <h2 className={styles.page180__subtitle}>Would - Futuro do Pretérito</h2>
                    <p className={styles.page180__text}>
                        O <span className={styles.page180__highlight}>Would</span> é um <span className={styles.page180__highlight}>verbo modal/auxiliar</span> que usamos para expressar ações no futuro do pretérito (terminação <span className={styles.page180__highlight}>ria</span> em português).
                    </p>
                </section>

                <section className={styles.page180__tableSection}>
                    <div className={styles.page180__tableTitle}>
                        Affirmative Form
                    </div>
                    <table className={styles.page180__table}>
                        <thead>
                            <tr>
                                <th>
                                    Subject
                                    <div className={styles.page180__translation}>Sujeito</div>
                                </th>
                                <th>Aux. Verb</th>
                                <th>Contraction</th>
                                <th>
                                    Verb(s)
                                    <div className={styles.page180__translation}>Verbo(s)</div>
                                </th>
                                <th>
                                    Object Complement
                                    <div className={styles.page180__translation}>Complemento</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                {
                                    pronoun: 'I',
                                    translation: 'Eu',
                                    verb: 'study',
                                    verbTranslation: 'estudaria',
                                    complement: 'English',
                                    complementTranslation: 'inglês'
                                },
                                {
                                    pronoun: 'He',
                                    translation: 'Ele',
                                    verb: 'play',
                                    verbTranslation: 'jogaria',
                                    complement: 'soccer',
                                    complementTranslation: 'futebol'
                                },
                                {
                                    pronoun: 'She',
                                    translation: 'Ela',
                                    verb: 'travel',
                                    verbTranslation: 'viajaria',
                                    complement: 'to Paris',
                                    complementTranslation: 'para Paris'
                                },
                                {
                                    pronoun: 'It',
                                    translation: 'Isso',
                                    verb: 'work',
                                    verbTranslation: 'funcionaria',
                                    complement: 'well',
                                    complementTranslation: 'bem'
                                },
                                {
                                    pronoun: 'We',
                                    translation: 'Nós',
                                    verb: 'dance',
                                    verbTranslation: 'dançaríamos',
                                    complement: 'together',
                                    complementTranslation: 'juntos'
                                },
                                {
                                    pronoun: 'You',
                                    translation: 'Você',
                                    verb: 'sing',
                                    verbTranslation: 'cantaria',
                                    complement: 'beautifully',
                                    complementTranslation: 'lindamente'
                                },
                                {
                                    pronoun: "Y'all",
                                    translation: 'Vocês',
                                    verb: 'cook',
                                    verbTranslation: 'cozinhariam',
                                    complement: 'dinner',
                                    complementTranslation: 'o jantar'
                                },
                                {
                                    pronoun: 'They',
                                    translation: 'Eles/Elas',
                                    verb: 'watch',
                                    verbTranslation: 'assistiriam',
                                    complement: 'movies',
                                    complementTranslation: 'filmes'
                                }
                            ].map((item) => (
                                <tr key={item.pronoun}>
                                    <td>
                                        {item.pronoun}
                                        <div className={styles.page180__translation}>
                                            {item.translation}
                                        </div>
                                    </td>
                                    <td>would</td>
                                    <td>{`'d`}</td>
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