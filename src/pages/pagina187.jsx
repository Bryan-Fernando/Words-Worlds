import React from 'react';
import styles from './pagina187.module.css';

const Pagina187 = () => {
    const questionWords = [
        { word: 'How', translation: 'Como / Quão (adjetivo/adverbial)' },
        { word: 'How far', translation: 'Quão longe / Que distância' },
        { word: 'How old', translation: 'Quantos anos / Quão velho (somente para idade)' },
        { word: 'How often', translation: 'Com que frequência / Quão frequente' }
    ];

    const tableData = [
        {
            questionWord: 'How',
            wordTranslation: 'Como',
            subject: 'it',
            translation: 'isso',
            verb: 'work',
            verbTranslation: 'funcionaria',
            complement: 'in practice?',
            complementTranslation: 'na prática?'
        },
        {
            questionWord: 'How far',
            wordTranslation: 'Quão longe',
            subject: 'we',
            translation: 'nós',
            verb: 'have to drive',
            verbTranslation: 'teríamos que dirigir',
            complement: 'before stopping?',
            complementTranslation: 'antes de parar?'
        },
        {
            questionWord: 'How old',
            wordTranslation: 'Quantos anos',
            subject: 'Rodrigo',
            translation: 'Rodrigo',
            verb: 'be',
            verbTranslation: 'teria',
            complement: 'in 2050?',
            complementTranslation: 'em 2050?'
        },
        {
            questionWord: 'How often',
            wordTranslation: 'Com que frequência',
            subject: 'we',
            translation: 'nós',
            verb: 'meet',
            verbTranslation: 'nos encontraríamos',
            complement: 'during the course?',
            complementTranslation: 'durante o curso?'
        }
    ];

    return (
        <div className={styles.page187__container}>
            <header className={styles.page187__header}>
                <h1 className={styles.page187__title}>Grammar - <span className={styles.page187__title_black}>Question Words</span></h1>
            </header>

            <main className={styles.page187__main}>
                <section className={styles.page187__vocabulary}>
                    <div className={styles.page187__vocabulary_grid}>
                        {questionWords.map((item, index) => (
                            <div key={index} className={styles.page187__vocabulary_card}>
                                <div className={styles.page187__word}>{item.word}</div>
                                <div className={styles.page187__translation}>{item.translation}</div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className={styles.page187__tableSection}>
                    <div className={styles.page187__tableTitle}>
                        Question Words
                    </div>
                    <div className={styles.page187__subtitleSection}>
                        Interrogative Form
                    </div>
                    <table className={styles.page187__table}>
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
                                        <div className={styles.page187__translation}>{item.wordTranslation}</div>
                                    </td>
                                    <td><div className={styles.page187__translationBlue}>would</div></td>
                                    <td>
                                        {item.subject}
                                        <div className={styles.page187__translation}>{item.translation}</div>
                                    </td>
                                    <td></td>
                                    <td>
                                        {item.verb}
                                        <div className={styles.page187__translation}>{item.verbTranslation}</div>
                                    </td>
                                    <td>
                                        {item.complement}
                                        <div className={styles.page187__translation}>{item.complementTranslation}</div>
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

export default Pagina187;