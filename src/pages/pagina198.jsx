import React from 'react';
import styles from './pagina198.module.css';

const Pagina198 = () => {
    const dialogue = {
        title: 'Concert Plans',
        conversations: [
            {
                speaker: 'Ava',
                text: 'I heard The Kicks are playing downtown this weekend.',
                translation: 'Ouvi dizer que os Kicks vão tocar no centro da cidade neste fim de semana.'
            },
            {
                speaker: 'Leo',
                text: 'Really? I would love to see them live!',
                translation: 'Sério? Eu adoraria vê-los ao vivo!'
            },
            {
                speaker: 'Ava',
                text: 'I would scream so loud...',
                translation: 'Eu gritaria tão alto...'
            },
            {
                speaker: 'Leo',
                text: 'I would lose my voice! Let\'s grab those tickets later!',
                translation: 'Eu perderia minha voz! Vamos pegar esses ingressos mais tarde!'
            }
        ]
    };

    return (
        <div className={styles.page198__container}>
            <header className={styles.page198__header}>
                <h1 className={styles.page198__title}>
                    Dialogues
                    <span className={styles.page198__listen}>
                        Listen and Repeat 🎧
                    </span>
                </h1>
                <h2 className={styles.page198__subtitle}>
                    Real-Life – Conversation Listening Pronunciation Practice
                </h2>
            </header>

            <main className={styles.page198__main}>
                <section className={styles.page198__dialogue_section}>
                    <div className={styles.page198__dialogue_content}>
                        <h3 className={styles.page198__dialogue_title}>
                            {dialogue.title}
                        </h3>
                        <div className={styles.page198__conversation}>
                            {dialogue.conversations.map((conv, index) => (
                                <div key={index} className={styles.page198__dialogue_line}>
                                    <p className={`${styles.page198__speaker} ${
                                        conv.speaker === 'Ava' ? styles.page198__ava : styles.page198__leo
                                    }`}>
                                        {conv.speaker}:
                                    </p>
                                    <p className={`${styles.page198__text} ${
                                        conv.speaker === 'Ava' ? styles.page198__ava_text : styles.page198__leo_text
                                    }`}>
                                        {conv.text}
                                    </p>
                                    <p className={styles.page198__translation}>
                                        ({conv.translation})
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className={styles.page198__images}>
                    <div className={styles.page198__stage_image} />
                    <div className={styles.page198__crowd_image} />
                </section>
            </main>
        </div>
    );
};

export default Pagina198;