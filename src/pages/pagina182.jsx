import React from 'react';
import styles from './pagina182.module.css';

const Pagina182 = () => {
    return (
        <div className={styles.page182__container}>
            <header className={styles.page182__header}>
                <h1 className={styles.page182__title}>Grammar - <span className={styles.page182__title_black}>Would</span></h1>
            </header>

            <main className={styles.page182__main}>
                <aside className={styles.page182__aside}>
                    <div className={styles.page182__aside_container}>
                        <div className={styles.page182__aside_header}>
                            <p><strong>Would - Futuro do Pretérito</strong></p>
                        </div>
                        <div className={styles.page182__aside_content}>
                            <p className={styles.page182__text}>
                                O <span className={styles.page182__highlight}>Would</span> é um <span className={styles.page182__highlight}>verbo modal/auxiliar</span> que não tem uma tradução
                                exata, mas que coloca o verbo principal no futuro do pretérito com a terminação de <span className={styles.page182__highlight}>ria</span> em português.
                            </p>
                        </div>
                    </div>
                </aside>

                <section className={styles.page182__tableSection}>
                    <div className={styles.page182__tableTitle}>
                        Interrogative Form
                    </div>
                    <table className={styles.page182__table}>
                        <thead>
                            <tr>
                                <th><div className={styles.page182__translation}>Full Form</div>
                                    Aux. Verb</th>
                                <th>
                                    Subject
                                    <div className={styles.page182__translation}>Sujeito</div>
                                </th>
                                <th>Adv / <div className={styles.page182__translation}>Not</div></th>
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
                                    subject: 'I',
                                    translation: 'Eu',
                                    verb: 'be',
                                    verbTranslation: 'seria',
                                    complement: 'a good teacher one day?',
                                    complementTranslation: 'uma boa professora um dia?'
                                },
                                {
                                    subject: 'he',
                                    translation: 'Ele',
                                    verb: 'help',
                                    verbTranslation: 'nos ajudaria',
                                    complement: 'us with the homework?',
                                    complementTranslation: 'com a tarefa de casa ?'
                                },
                                {
                                    subject: 'she',
                                    translation: 'Ela',
                                    verb: 'forgive',
                                    verbTranslation: 'me',
                                    complement: 'me?',
                                    complementTranslation: 'perdoaria?'
                                },
                                {
                                    subject: 'it',
                                    translation: '-',
                                    verb: 'be',
                                    verbTranslation: 'Seria',
                                    complement: 'enough ?',
                                    complementTranslation: 'suficiente ?'
                                },
                                {
                                    subject: 'we',
                                    translation: 'Nós',
                                    verb: 'need to finish',
                                    verbTranslation: 'precisaríamos para terminar',
                                    complement: 'more time this project?',
                                    complementTranslation: 'de mais tempo o projeto ?'
                                },
                                {
                                    subject: 'you',
                                    translation: 'Você',
                                    verb: 'be',
                                    verbTranslation: 'estaria',
                                    complement: 'okay with that?',
                                    complementTranslation: 'de acordo com isso?'
                                },
                                {
                                    subject: 'y’all',
                                    translation: 'Vocês',
                                    verb: 'like',
                                    verbTranslation: 'gostariam',
                                    complement: 'some coffee?',
                                    complementTranslation: 'de um café?'
                                },
                                {
                                    subject: 'they',
                                    translation: 'Eles / Elas',
                                    verb: 'accept',
                                    verbTranslation: 'aceitariam',
                                    complement: 'the offer?',
                                    complementTranslation: 'a oferta?'
                                }
                            ].map((item, index) => (
                                <tr key={index}>
                                    <td><div className={styles.page182__translation}>would</div></td>
                                    <td>
                                        {item.subject}
                                        <div className={styles.page182__translation}>
                                            {item.translation}
                                        </div>
                                    </td>
                                    <td></td>
                                    <td>
                                        {item.verb}
                                        <div className={styles.page182__translation}>{item.verbTranslation}</div>
                                    </td>
                                    <td>
                                        {item.complement}
                                        <div className={styles.page182__translation}>{item.complementTranslation}</div>
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

export default Pagina182;