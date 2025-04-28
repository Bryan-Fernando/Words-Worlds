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
                                O <span className={styles.page182__highlight}>Would</span> é um <span className={styles.page182__highlight}>verbo modal/auxiliar</span> que usamos para expressar ações no futuro do pretérito (terminação <span className={styles.page182__highlight}>ria</span> em português).
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
                                <th>Aux. Verb</th>
                                <th>
                                    Subject
                                    <div className={styles.page182__translation}>Sujeito</div>
                                </th>
                                <th>Adv / Not</th>
                                <th>
                                    Verb(s)
                                    <div className={styles.page182__translation}>Verbo(s)</div>
                                </th>
                                <th>
                                    Object Complement
                                    <div className={styles.page182__translation}>Complemento</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                {
                                    subject: 'you',
                                    translation: 'você',
                                    verb: 'help',
                                    verbTranslation: 'ajudaria',
                                    complement: 'with the homework?',
                                    complementTranslation: 'com a tarefa de casa?'
                                },
                                {
                                    subject: 'he',
                                    translation: 'ele',
                                    verb: 'need to finish',
                                    verbTranslation: 'precisaria terminar',
                                    complement: 'the project today?',
                                    complementTranslation: 'o projeto hoje?'
                                },
                                {
                                    subject: 'they',
                                    translation: 'eles',
                                    verb: 'like',
                                    verbTranslation: 'gostariam',
                                    complement: 'to travel abroad?',
                                    complementTranslation: 'de viajar para o exterior?'
                                },
                                {
                                    subject: 'we',
                                    translation: 'nós',
                                    verb: 'have to study',
                                    verbTranslation: 'teríamos que estudar',
                                    complement: 'for the test?',
                                    complementTranslation: 'para a prova?'
                                },
                                {
                                    subject: 'she',
                                    translation: 'ela',
                                    verb: 'want',
                                    verbTranslation: 'quereria',
                                    complement: 'to join us?',
                                    complementTranslation: 'se juntar a nós?'
                                }
                            ].map((item, index) => (
                                <tr key={index}>
                                    <td>Would</td>
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