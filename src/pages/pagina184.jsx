import React from 'react';
import styles from './pagina184.module.css';

const Pagina184 = () => {
    const questionWords = [
        { word: 'What', translation: 'O que, que, qual, quais' },
        { word: 'Where', translation: 'Onde, aonde' },
        { word: 'When', translation: 'Quando' },
        { word: 'What time', translation: 'Que horas' }
    ];

    const tableData = [
        {
            questionWord: 'What',
            wordTranslation: 'O que',
            subject: 'Wallace',
            translation: 'Wallace',
            verb: 'prefer to eat',
            verbTranslation: 'preferiria comer',
            complement: 'fish or chicken?',
            complementTranslation: 'peixe ou frango?'
        },
        {
            questionWord: 'Where',
            wordTranslation: 'Onde',
            subject: 'I',
            translation: 'eu',
            verb: 'find',
            verbTranslation: 'encontraria',
            complement: 'that book?',
            complementTranslation: 'aquele livro?'
        },
        {
            questionWord: 'When',
            wordTranslation: 'Quando',
            subject: 'Melissa',
            translation: 'ela',
            verb: 'start working',
            verbTranslation: 'começaria a trabalhar',
            complement: 'at Credisis?',
            complementTranslation: 'na Credisis?'
        },
        {
            questionWord: 'What time',
            wordTranslation: 'Que horas',
            subject: 'we',
            translation: 'nós',
            verb: 'need to wake up',
            verbTranslation: 'precisaríamos acordar',
            complement: '?',
            complementTranslation: '?'
        }
    ];

    return (
        <div className={styles.page184__container}>
            <header className={styles.page184__header}>
                <h1 className={styles.page184__title}>Grammar - <span className={styles.page184__title_black}>Question Words</span></h1>
            </header>

            <main className={styles.page184__main}>
                <section className={styles.page184__vocabulary}>
                    <div className={styles.page184__vocabulary_grid}>
                        {questionWords.map((item, index) => (
                            <div key={index} className={styles.page184__vocabulary_card}>
                                <div className={styles.page184__word}>{item.word}</div>
                                <div className={styles.page184__translation}>{item.translation}</div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className={styles.page184__tableSection}>
                    <div className={styles.page184__tableTitle}>
                        Question Words
                    </div>
                    <div className={styles.page184__subtitleSection}>
                        Interrogative Form
                    </div>
                    <table className={styles.page184__table}>
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
                                        <div className={styles.page184__translation}>{item.wordTranslation}</div>
                                    </td>
                                    <td>would</td>
                                    <td>
                                        {item.subject}
                                        <div className={styles.page184__translation}>{item.translation}</div>
                                    </td>
                                    <td></td>
                                    <td>
                                        {item.verb}
                                        <div className={styles.page184__translation}>{item.verbTranslation}</div>
                                    </td>
                                    <td>
                                        {item.complement}
                                        <div className={styles.page184__translation}>{item.complementTranslation}</div>
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

export default Pagina184;