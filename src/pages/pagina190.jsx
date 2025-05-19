import React from 'react';
import styles from './pagina190.module.css';

const Pagina190 = () => {
    const questionWords = [
        { word: 'How many times', translation: 'Quantas vezes' },
        { word: 'How many times a day', translation: 'Quantas vezes por dia' },
        { word: 'How many times a week', translation: 'Quantas vezes por semana' },
        { word: 'How many times a month', translation: 'Quantas vezes por mês' },
        { word: 'How many times a year', translation: 'Quantas vezes por ano' }
    ];

    const tableData = [
        {
            questionWord: 'How many times',
            wordTranslation: 'Quantas vezes',
            subject: 'I',
            translation: 'eu',
            verb: 'need to call',
            verbTranslation: 'precisaria ligar',
            complement: 'before answer the phone?',
            complementTranslation: 'antes de atender o telefone?'
        },
        {
            questionWord: 'How many times',
            wordTranslation: 'Quantas vezes',
            subject: 'you',
            translation: 'você',
            verb: 'try before',
            verbTranslation: 'tentaria antes',
            complement: 'givin up',
            complementTranslation: 'de desisitr'
        },
        {
            questionWord: 'How many times',
            wordTranslation: 'Quantas vezes',
            subject: 'it',
            translation: '',
            verb: 'be necessary',
            verbTranslation: 'seria necessário',
            complement: 'to repeat the process?',
            complementTranslation: 'repetir o processo?'
        }
    ];

    return (
        <div className={styles.page190__container}>
            <header className={styles.page190__header}>
                <h1 className={styles.page190__title}>Grammar - <span className={styles.page190__title_black}>Question Words</span></h1>
            </header>

            <main className={styles.page190__main}>
                <section className={styles.page190__vocabulary}>
                    <div className={styles.page190__vocabulary_grid}>
                        {questionWords.map((item, index) => (
                            <div key={index} className={styles.page190__vocabulary_card}>
                                <div className={styles.page190__word}>{item.word}</div>
                                <div className={styles.page190__translation}>{item.translation}</div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className={styles.page190__tableSection}>
                    <div className={styles.page190__tableTitle}>
                        Question Words
                    </div>
                    <div className={styles.page190__subtitleSection}>
                        Interrogative Form
                    </div>
                    <table className={styles.page190__table}>
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
                                        <div className={styles.page190__translation}>{item.wordTranslation}</div>
                                    </td>
                                    <td><div className={styles.page190__translationBlue}>would</div></td>
                                    <td>
                                        {item.subject}
                                        <div className={styles.page190__translation}>{item.translation}</div>
                                    </td>
                                    <td></td>
                                    <td>
                                        {item.verb}
                                        <div className={styles.page190__translation}>{item.verbTranslation}</div>
                                    </td>
                                    <td>
                                        {item.complement}
                                        <div className={styles.page190__translation}>{item.complementTranslation}</div>
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

export default Pagina190;