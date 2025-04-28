import React from 'react';
import styles from './pagina197.module.css';

const Pagina197 = () => {
    const dialogue = {
        title: 'Dessert Order',
        conversations: [
            {
                speaker: 'Server',
                text: 'Would you like to see the dessert menu?',
                translation: 'Gostaria de ver o cardápio de sobremesas?'
            },
            {
                speaker: 'Customer',
                text: 'Yes, I would love to. What do you recommend?',
                translation: 'Sim, adoraria. O que você recomenda?'
            }
        ]
    };

    return (
        <div className={styles.page197__container}>
            <header className={styles.page197__header}>
                <h1 className={styles.page197__title}>
                    Dialogues
                    <span className={styles.page197__listen}>
                        Listen and Repeat 🎧
                    </span>
                </h1>
                <h2 className={styles.page197__subtitle}>
                    Real-Life – Conversation Listening Pronunciation Practice
                </h2>
            </header>

            <main className={styles.page197__main}>
                <section className={styles.page197__dialogue_section}>
                    <div className={styles.page197__dialogue_content}>
                        <h3 className={styles.page197__dialogue_title}>
                            {dialogue.title}
                        </h3>
                        <div className={styles.page197__conversation}>
                            {dialogue.conversations.map((conv, index) => (
                                <div key={index} className={styles.page197__dialogue_line}>
                                    <p className={`${styles.page197__speaker} ${
                                        conv.speaker === 'Server' ? styles.page197__server : styles.page197__customer
                                    }`}>
                                        {conv.speaker}:
                                    </p>
                                    <p className={`${styles.page197__text} ${
                                        conv.speaker === 'Server' ? styles.page197__server_text : styles.page197__customer_text
                                    }`}>
                                        {conv.text}
                                    </p>
                                    <p className={styles.page197__translation}>
                                        ({conv.translation})
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className={styles.page197__images}>
                    <div className={styles.page197__chocolate_mousse} />
                    <div className={styles.page197__apple_pie} />
                </section>
            </main>
        </div>
    );
};

export default Pagina197;