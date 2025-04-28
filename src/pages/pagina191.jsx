import React from 'react';
import styles from './pagina191.module.css';

const Pagina191 = () => {
    const questionWords = [
        { word: 'How many times', translation: 'Quantas vezes' },
        { word: 'How many times a day', translation: 'Quantas vezes por dia' },
        { word: 'How many times a week', translation: 'Quantas vezes por semana' },
        { word: 'How many times a month', translation: 'Quantas vezes por mês' },
        { word: 'How many times a year', translation: 'Quantas vezes por ano' }
    ];

    const tableData = [
        {
            questionWord: 'How many times a day',
            wordTranslation: 'Quantas vezes por dia',
            subject: 'she',
            translation: 'ela',
            verb: 'check',
            verbTranslation: 'verificaria',
            complement: 'social media?',
            complementTranslation: 'as redes sociais?'
        },
        {
            questionWord: 'How many times a day',
            wordTranslation: 'Quantas vezes por dia',
            subject: 'it',
            translation: 'isso',
            verb: 'beep',
            verbTranslation: 'apitaria',
            complement: 'with notifications?',
            complementTranslation: 'com notificações?'
        },
        {
            questionWord: 'How many times a day',
            wordTranslation: 'Quantas vezes por dia',
            subject: 'they',
            translation: 'eles/elas',
            verb: 'call',
            verbTranslation: 'ligariam',
            complement: 'the office?',
            complementTranslation: 'para o escritório?'
        }
    ];

    return (
        <div className={styles.page191__container}>
            <header className={styles.page191__header}>
                <h1 className={styles.page191__title}>Grammar - <span className={styles.page191__title_black}>Question Words</span></h1>
            </header>

            <main className={styles.page191__main}>
                <section className={styles.page191__vocabulary}>
                    <div className={styles.page191__vocabulary_grid}>
                        {questionWords.map((item, index) => (
                            <div key={index} className={styles.page191__vocabulary_card}>
                                <div className={styles.page191__word}>{item.word}</div>
                                <div className={styles.page191__translation}>{item.translation}</div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className={styles.page191__tableSection}>
                    <div className={styles.page191__tableTitle}>
                        Question Words
                    </div>
                    <div className={styles.page191__subtitleSection}>
                        Interrogative Form
                    </div>
                    <table className={styles.page191__table}>
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
                                        <div className={styles.page191__translation}>{item.wordTranslation}</div>
                                    </td>
                                    <td>would</td>
                                    <td>
                                        {item.subject}
                                        <div className={styles.page191__translation}>{item.translation}</div>
                                    </td>
                                    <td></td>
                                    <td>
                                        {item.verb}
                                        <div className={styles.page191__translation}>{item.verbTranslation}</div>
                                    </td>
                                    <td>
                                        {item.complement}
                                        <div className={styles.page191__translation}>{item.complementTranslation}</div>
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

export default Pagina191;