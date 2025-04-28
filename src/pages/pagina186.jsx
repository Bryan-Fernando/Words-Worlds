import React from 'react';
import styles from './pagina186.module.css';

const Pagina186 = () => {
    const questionWords = [
        { word: 'Whose', translation: 'De quem (posse)' },
        { word: 'What kind of', translation: 'Que tipo de / espécie de' },
        { word: 'What type of', translation: 'Que tipo de / espécie de' },
        { word: 'What sort of', translation: 'Que tipo de / espécie de' }
    ];

    const tableData = [
        {
            questionWord: 'Whose',
            wordTranslation: 'De quem',
            subject: 'it',
            translation: 'seria',
            verb: 'be to cancel',
            verbTranslation: 'seria cancelar',
            complement: 'the trip?',
            complementTranslation: 'a viagem?'
        },
        {
            questionWord: 'What kind of',
            wordTranslation: 'Que tipo de',
            subject: 'we',
            translation: 'nós',
            verb: 'take',
            verbTranslation: 'levaríamos',
            complement: 'to the party?',
            complementTranslation: 'para a festa?'
        },
        {
            questionWord: 'What type of',
            wordTranslation: 'Que tipo de',
            subject: 'you',
            translation: 'você',
            verb: 'wear',
            verbTranslation: 'usaria',
            complement: 'to a social event?',
            complementTranslation: 'para um evento social?'
        },
        {
            questionWord: 'What sort of',
            wordTranslation: 'Que tipo de',
            subject: 'he',
            translation: 'ele',
            verb: 'play',
            verbTranslation: 'tocaria',
            complement: 'at the concert?',
            complementTranslation: 'no show?'
        }
    ];

    return (
        <div className={styles.page186__container}>
            <header className={styles.page186__header}>
                <h1 className={styles.page186__title}>Grammar - <span className={styles.page186__title_black}>Question Words</span></h1>
            </header>

            <main className={styles.page186__main}>
                <section className={styles.page186__vocabulary}>
                    <div className={styles.page186__vocabulary_grid}>
                        {questionWords.map((item, index) => (
                            <div key={index} className={styles.page186__vocabulary_card}>
                                <div className={styles.page186__word}>{item.word}</div>
                                <div className={styles.page186__translation}>{item.translation}</div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className={styles.page186__tableSection}>
                    <div className={styles.page186__tableTitle}>
                        Question Words
                    </div>
                    <div className={styles.page186__subtitleSection}>
                        Interrogative Form
                    </div>
                    <table className={styles.page186__table}>
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
                                        <div className={styles.page186__translation}>{item.wordTranslation}</div>
                                    </td>
                                    <td>would</td>
                                    <td>
                                        {item.subject}
                                        <div className={styles.page186__translation}>{item.translation}</div>
                                    </td>
                                    <td></td>
                                    <td>
                                        {item.verb}
                                        <div className={styles.page186__translation}>{item.verbTranslation}</div>
                                    </td>
                                    <td>
                                        {item.complement}
                                        <div className={styles.page186__translation}>{item.complementTranslation}</div>
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

export default Pagina186;