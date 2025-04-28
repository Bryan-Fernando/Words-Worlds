import React from 'react';
import styles from './pagina189.module.css';

const Pagina189 = () => {
    const questionWords = [
        { word: 'How much', translation: 'Quanto / quanta / quanto de (substantivos incontáveis)' },
        { word: 'How many', translation: 'Quantos / quantas (substantivos contáveis)' },
        { word: 'How long', translation: 'Quanto tempo (duração total de algo — início ao fim)' },
        { word: 'How much longer', translation: 'Quanto tempo mais / ainda (tempo restante até algo terminar ou acontecer)' }
    ];

    const tableData = [
        {
            questionWord: 'How much',
            wordTranslation: 'Quanto',
            subject: 'you',
            translation: 'você',
            verb: 'spend',
            verbTranslation: 'gastaria',
            complement: 'on a birthday gift?',
            complementTranslation: 'em um presente de aniversário?'
        },
        {
            questionWord: 'How many',
            wordTranslation: 'Quantos',
            subject: 'Bryan',
            translation: 'Bryan',
            verb: 'read',
            verbTranslation: 'leria',
            complement: 'in a month?',
            complementTranslation: 'em um mês?'
        },
        {
            questionWord: 'How long',
            wordTranslation: 'Quanto tempo',
            subject: 'you',
            translation: 'você',
            verb: 'stay',
            verbTranslation: 'ficaria',
            complement: 'in Brazil?',
            complementTranslation: 'no Brasil?'
        },
        {
            questionWord: 'How much longer',
            wordTranslation: 'Quanto tempo a mais',
            subject: 'it',
            translation: 'isso',
            verb: 'take',
            verbTranslation: 'levaria',
            complement: 'to update the system?',
            complementTranslation: 'para atualizar o sistema?'
        }
    ];

    return (
        <div className={styles.page189__container}>
            <header className={styles.page189__header}>
                <h1 className={styles.page189__title}>Grammar - <span className={styles.page189__title_black}>Question Words</span></h1>
            </header>

            <main className={styles.page189__main}>
                <section className={styles.page189__vocabulary}>
                    <div className={styles.page189__vocabulary_grid}>
                        {questionWords.map((item, index) => (
                            <div key={index} className={styles.page189__vocabulary_card}>
                                <div className={styles.page189__word}>{item.word}</div>
                                <div className={styles.page189__translation}>{item.translation}</div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className={styles.page189__tableSection}>
                    <div className={styles.page189__tableTitle}>
                        Question Words
                    </div>
                    <div className={styles.page189__subtitleSection}>
                        Interrogative Form
                    </div>
                    <table className={styles.page189__table}>
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
                                        <div className={styles.page189__translation}>{item.wordTranslation}</div>
                                    </td>
                                    <td>would</td>
                                    <td>
                                        {item.subject}
                                        <div className={styles.page189__translation}>{item.translation}</div>
                                    </td>
                                    <td></td>
                                    <td>
                                        {item.verb}
                                        <div className={styles.page189__translation}>{item.verbTranslation}</div>
                                    </td>
                                    <td>
                                        {item.complement}
                                        <div className={styles.page189__translation}>{item.complementTranslation}</div>
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

export default Pagina189;