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
                                O <span className={styles.page181__highlight}>Would</span> é um <span className={styles.page181__highlight}>verbo modal/auxiliar</span> que não tem uma tradução
                                exata, mas que coloca o verbo principal no futuro do pretérito com a terminação de <span className={styles.page181__highlight}>ria</span> em português.
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
                                    <div className={styles.page181__translation}>Full Form</div>
                                    Subject
                                </th>
                                <th>Aux. Verb</th>
                                <th><div className={styles.page181__translation}>Not</div></th>
                                <th><div className={styles.page181__translation}>Contraction</div></th>
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
                                    verb: 'like to travel',
                                    verbTranslation: 'não gostaria de viajar',
                                    complement: 'by plane',
                                    complementTranslation: 'de avião',
                                    contraction: "I wouldn’t"
                                },
                                {
                                    pronoun: 'He',
                                    translation: 'Ele',
                                    verb: 'agree',
                                    verbTranslation: 'não concordaria',
                                    complement: 'with the idea',
                                    complementTranslation: 'com a ideia',
                                    contraction: "he wouldn’t"
                                },
                                {
                                    pronoun: 'She',
                                    translation: 'Ela',
                                    verb: 'forget',
                                    verbTranslation: 'não esqueceria',
                                    complement: 'your birthday',
                                    complementTranslation: 'do seu aniversário',
                                    contraction: "she wouldn’t"
                                },
                                {
                                    pronoun: 'It',
                                    translation: 'Isso',
                                    verb: 'work',
                                    verbTranslation: 'não funcionaria',
                                    complement: 'without batteries',
                                    complementTranslation: 'sem pilhas',
                                    contraction: "It wouldn’t"
                                },
                                {
                                    pronoun: 'We',
                                    translation: 'Nós',
                                    verb: 'like to travel',
                                    verbTranslation: 'não gostaríamos de viajar',
                                    complement: 'by car',
                                    complementTranslation: 'de carro',
                                    contraction: "We wouldn’t"
                                },
                                {
                                    pronoun: 'You',
                                    translation: 'Você',
                                    verb: 'like',
                                    verbTranslation: 'não gostaria',
                                    complement: 'that restaurant',
                                    complementTranslation: 'daquele restaurante',
                                    contraction: "You wouldn’t"
                                },
                                {
                                    pronoun: "Y'all",
                                    translation: 'Vocês',
                                    verb: 'like',
                                    verbTranslation: 'não gostariam ',
                                    complement: 'that restaurant',
                                    complementTranslation: 'daquele restaurante',
                                    contraction: "Y’all wouldn’t"
                                },
                                {
                                    pronoun: 'They',
                                    translation: 'Eles/Elas',
                                    verb: 'believe',
                                    verbTranslation: 'não acreditariam ',
                                    complement: 'your story',
                                    complementTranslation: 'na sua história',
                                    contraction: "They wouldn’t"
                                }
                            ].map((item) => (
                                <tr key={item.pronoun}>
                                    <td>
                                        {item.pronoun}
                                        <div className={styles.page181__translation}>
                                            {item.translation}
                                        </div>
                                    </td>
                                    <td><div className={styles.page181__translation}>would</div></td>
                                    <td><div className={styles.page181__translation}>not</div></td>
                                    <td className={styles.page181__translation}>{item.contraction}</td>
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