import React from 'react';
import styles from './pagina194.module.css';

const Pagina194 = () => {
    const questionWords = [
        { word: 'How many times', translation: 'Quantas vezes' },
        { word: 'How many times a day', translation: 'Quantas vezes por dia' },
        { word: 'How many times a week', translation: 'Quantas vezes por semana' },
        { word: 'How many times a month', translation: 'Quantas vezes por mês' },
        { word: 'How many times a year', translation: 'Quantas vezes por ano' }
    ];

    const tableData = [
        {
            questionWord: 'How many times a year',
            wordTranslation: 'Quantas vezes por ano',
            subject: 'you',
            translation: 'você',
            verb: 'celebrate',
            verbTranslation: 'celebraria',
            complement: 'something?',
            complementTranslation: 'algo?'
        },
        {
            questionWord: 'How many times a year',
            wordTranslation: 'Quantas vezes por ano',
            subject: 'it',
            translation: '',
            verb: 'be possible to see',
            verbTranslation: 'seria possível ver',
            complement: 'that comet?',
            complementTranslation: 'aquele cometa?'
        },
        {
            questionWord: 'How many times a year',
            wordTranslation: 'Quantas vezes por ano',
            subject: 'they',
            translation: 'eles/elas',
            verb: 'have to update',
            verbTranslation: 'teriam que atualizar',
            complement: 'the software?',
            complementTranslation: 'o software?'
        }
    ];

    return (
        <div className={styles.page194__container}>
            <header className={styles.page194__header}>
                <h1 className={styles.page194__title}>Grammar - <span className={styles.page194__title_black}>Question Words</span></h1>
            </header>

            <main className={styles.page194__main}>
                <section className={styles.page194__vocabulary}>
                    <div className={styles.page194__vocabulary_grid}>
                        {questionWords.map((item, index) => (
                            <div key={index} className={styles.page194__vocabulary_card}>
                                <div className={styles.page194__word}>{item.word}</div>
                                <div className={styles.page194__translation}>{item.translation}</div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className={styles.page194__tableSection}>
                    <div className={styles.page194__tableTitle}>
                        Question Words
                    </div>
                    <div className={styles.page194__subtitleSection}>
                        Interrogative Form
                    </div>
                    <table className={styles.page194__table}>
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
                                        <div className={styles.page194__translation}>{item.wordTranslation}</div>
                                    </td>
                                    <td><div className={styles.page194__translationBlue}>would</div></td>
                                    <td>
                                        {item.subject}
                                        <div className={styles.page194__translation}>{item.translation}</div>
                                    </td>
                                    <td></td>
                                    <td>
                                        {item.verb}
                                        <div className={styles.page194__translation}>{item.verbTranslation}</div>
                                    </td>
                                    <td>
                                        {item.complement}
                                        <div className={styles.page194__translation}>{item.complementTranslation}</div>
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

export default Pagina194;