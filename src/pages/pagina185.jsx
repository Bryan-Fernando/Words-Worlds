import React from 'react';
import styles from './pagina185.module.css';

const Pagina185 = () => {
    const questionWords = [
        { word: 'Why', translation: 'Por que (em perguntas)' },
        { word: 'Who', translation: 'Quem' },
        { word: 'Which', translation: 'Que, qual, quais (opção)' },
        { word: 'What size', translation: 'Que tamanho / Qual tamanho' }
    ];

    const tableData = [
        {
            questionWord: 'Who',
            wordTranslation: 'Quem',
            subject: 'she',
            translation: 'ela',
            verb: 'invite',
            verbTranslation: 'convidaria',
            complement: 'to the wedding?',
            complementTranslation: 'para o casamento?'
        },
        {
            questionWord: 'Why',
            wordTranslation: 'Por que',
            subject: 'I',
            translation: 'eu',
            verb: 'lie',
            verbTranslation: 'mentiria',
            complement: 'to you?',
            complementTranslation: 'para você?'
        },
        {
            questionWord: 'Which',
            wordTranslation: 'Qual',
            subject: 'you',
            translation: 'você',
            verb: 'recommend',
            verbTranslation: 'recomendaria',
            complement: 'the book or the movie?',
            complementTranslation: 'o livro ou o filme?'
        },
        {
            questionWord: 'What size',
            wordTranslation: 'Qual tamanho',
            subject: 'it',
            translation: '',
            verb: 'be washing?',
            verbTranslation: 'seria de lavar?',
            complement: 'after',
            complementTranslation: 'o tamanho depois'
        }
    ];

    return (
        <div className={styles.page185__container}>
            <header className={styles.page185__header}>
                <h1 className={styles.page185__title}>Grammar - <span className={styles.page185__title_black}>Question Words</span></h1>
            </header>

            <main className={styles.page185__main}>
                <section className={styles.page185__vocabulary}>
                    <div className={styles.page185__vocabulary_grid}>
                        {questionWords.map((item, index) => (
                            <div key={index} className={styles.page185__vocabulary_card}>
                                <div className={styles.page185__word}>{item.word}</div>
                                <div className={styles.page185__translation}>{item.translation}</div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className={styles.page185__tableSection}>
                    <div className={styles.page185__tableTitle}>
                        Question Words
                    </div>
                    <div className={styles.page185__subtitleSection}>
                        Interrogative Form
                    </div>
                    <table className={styles.page185__table}>
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
                                        <div className={styles.page185__translation}>{item.wordTranslation}</div>
                                    </td>
                                    <td><div className={styles.page185__translationBlue}>would</div></td>
                                    <td>
                                        {item.subject}
                                        <div className={styles.page185__translation}>{item.translation}</div>
                                    </td>
                                    <td></td>
                                    <td>
                                        {item.verb}
                                        <div className={styles.page185__translation}>{item.verbTranslation}</div>
                                    </td>
                                    <td>
                                        {item.complement}
                                        <div className={styles.page185__translation}>{item.complementTranslation}</div>
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

export default Pagina185;