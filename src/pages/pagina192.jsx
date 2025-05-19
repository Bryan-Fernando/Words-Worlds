import React from 'react';
import styles from './pagina192.module.css';

const Pagina192 = () => {
    const questionWords = [
        { word: 'How many times', translation: 'Quantas vezes' },
        { word: 'How many times a day', translation: 'Quantas vezes por dia' },
        { word: 'How many times a week', translation: 'Quantas vezes por semana' },
        { word: 'How many times a month', translation: 'Quantas vezes por mês' },
        { word: 'How many times a year', translation: 'Quantas vezes por ano' }
    ];

    const tableData = [
        {
            questionWord: 'How many times a week',
            wordTranslation: 'Quantas vezes por semana',
            subject: 'you',
            translation: 'você',
            verb: 'study',
            verbTranslation: 'estudaria',
            complement: 'English?',
            complementTranslation: 'inglês?'
        },
        {
            questionWord: 'How many times a week',
            wordTranslation: 'Quantas vezes por semana',
            subject: 'it',
            translation: '',
            verb: 'happen?',
            verbTranslation: 'aconteceria?',
            complement: '',
            complementTranslation: ''
        },
        {
            questionWord: 'How many times a week',
            wordTranslation: 'Quantas vezes por semana',
            subject: 'they',
            translation: 'eles/elas',
            verb: 'play',
            verbTranslation: 'jogariam',
            complement: 'soccer?',
            complementTranslation: 'futebol?'
        }
    ];

    return (
        <div className={styles.page192__container}>
            <header className={styles.page192__header}>
                <h1 className={styles.page192__title}>Grammar - <span className={styles.page192__title_black}>Question Words</span></h1>
            </header>

            <main className={styles.page192__main}>
                <section className={styles.page192__vocabulary}>
                    <div className={styles.page192__vocabulary_grid}>
                        {questionWords.map((item, index) => (
                            <div key={index} className={styles.page192__vocabulary_card}>
                                <div className={styles.page192__word}>{item.word}</div>
                                <div className={styles.page192__translation}>{item.translation}</div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className={styles.page192__tableSection}>
                    <div className={styles.page192__tableTitle}>
                        Question Words
                    </div>
                    <div className={styles.page192__subtitleSection}>
                        Interrogative Form
                    </div>
                    <table className={styles.page192__table}>
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
                                        <div className={styles.page192__translation}>{item.wordTranslation}</div>
                                    </td>
                                    <td><div className={styles.page192__translationBlue}>would</div></td>
                                    <td>
                                        {item.subject}
                                        <div className={styles.page192__translation}>{item.translation}</div>
                                    </td>
                                    <td></td>
                                    <td>
                                        {item.verb}
                                        <div className={styles.page192__translation}>{item.verbTranslation}</div>
                                    </td>
                                    <td>
                                        {item.complement}
                                        <div className={styles.page192__translation}>{item.complementTranslation}</div>
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

export default Pagina192;