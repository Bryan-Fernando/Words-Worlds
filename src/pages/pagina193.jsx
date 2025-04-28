import React from 'react';
import styles from './pagina193.module.css';

const Pagina193 = () => {
    const questionWords = [
        { word: 'How many times', translation: 'Quantas vezes' },
        { word: 'How many times a day', translation: 'Quantas vezes por dia' },
        { word: 'How many times a week', translation: 'Quantas vezes por semana' },
        { word: 'How many times a month', translation: 'Quantas vezes por mês' },
        { word: 'How many times a year', translation: 'Quantas vezes por ano' }
    ];

    const tableData = [
        {
            questionWord: 'How many times a month',
            wordTranslation: 'Quantas vezes por mês',
            subject: 'you',
            translation: 'você',
            verb: 'go',
            verbTranslation: 'iria',
            complement: 'to relax?',
            complementTranslation: 'ao spa só para relaxar?'
        },
        {
            questionWord: 'How many times a month',
            wordTranslation: 'Quantas vezes por mês',
            subject: 'it',
            translation: 'ele',
            verb: 'need',
            verbTranslation: 'precisaria',
            complement: 'maintenance?',
            complementTranslation: 'de manutenção?'
        },
        {
            questionWord: 'How many times a month',
            wordTranslation: 'Quantas vezes por mês',
            subject: 'they',
            translation: 'eles/elas',
            verb: 'organize',
            verbTranslation: 'organizariam',
            complement: 'events?',
            complementTranslation: 'eventos?'
        }
    ];

    return (
        <div className={styles.page193__container}>
            <header className={styles.page193__header}>
                <h1 className={styles.page193__title}>Grammar - <span className={styles.page193__title_black}>Question Words</span></h1>
            </header>

            <main className={styles.page193__main}>
                <section className={styles.page193__vocabulary}>
                    <div className={styles.page193__vocabulary_grid}>
                        {questionWords.map((item, index) => (
                            <div key={index} className={styles.page193__vocabulary_card}>
                                <div className={styles.page193__word}>{item.word}</div>
                                <div className={styles.page193__translation}>{item.translation}</div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className={styles.page193__tableSection}>
                    <div className={styles.page193__tableTitle}>
                        Question Words
                    </div>
                    <div className={styles.page193__subtitleSection}>
                        Interrogative Form
                    </div>
                    <table className={styles.page193__table}>
                        <thead>
                            <tr>
                                <th>Question Word</th>
                                <th>Aux. Verb</th>
                                <th>Subject</th>
                                <th>Adv</th>
                                <th>Verb(s)</th>
                                <th>Object Complement</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((item, index) => (
                                <tr key={index}>
                                    <td>
                                        {item.questionWord}
                                        <div className={styles.page193__translation}>{item.wordTranslation}</div>
                                    </td>
                                    <td>would</td>
                                    <td>
                                        {item.subject}
                                        <div className={styles.page193__translation}>{item.translation}</div>
                                    </td>
                                    <td></td>
                                    <td>
                                        {item.verb}
                                        <div className={styles.page193__translation}>{item.verbTranslation}</div>
                                    </td>
                                    <td>
                                        {item.complement}
                                        <div className={styles.page193__translation}>{item.complementTranslation}</div>
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

export default Pagina193;