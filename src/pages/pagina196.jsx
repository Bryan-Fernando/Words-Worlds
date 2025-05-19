import React from 'react';
import styles from './pagina196.module.css';

const Pagina196 = () => {
    const dialogue = {
        title: 'Japan Travel',
        conversations: [
            {
                speaker: 'John',
                text: 'Where would you like to travel to?',
                translation: 'Para onde você gostaria de viajar?'
            },
            {
                speaker: 'Mary',
                text: 'Oh, I would love to visit Japan.',
                translation: 'Ah, eu adoraria visitar o Japão.'
            },
            {
                speaker: 'John',
                text: 'That sounds amazing. I would go there just for the sushi!',
                translation: 'Isso parece incrível. Eu iria só pelo sushi!'
            },
            {
                speaker: 'Mary',
                text: 'And the cherry blossoms... I would never stop taking pictures.',
                translation: 'E as cerejeiras... eu nunca pararia de tirar fotos.'
            },
            {
                speaker: 'John',
                text: 'I think I would learn a bit of Japanese before going.',
                translation: 'Acho que eu aprenderia um pouco de japonês antes de ir.'
            },
            {
                speaker: 'Mary',
                text: 'Good idea! That would make the trip even better.',
                translation: 'Boa ideia! Isso tornaria a viagem ainda melhor.'
            },
        ]
    };

    return (
        <div className={styles.page196__container}>
            <header className={styles.page196__header}>
                <h1 className={styles.page196__title}>
                    Dialogues
                    <span className={styles.page196__listen}>
                        Listen and Repeat 🎧
                    </span>
                </h1>
                <h2 className={styles.page196__subtitle}>
                    Real-Life – Conversation Listening Pronunciation Practice
                </h2>
            </header>

            <main className={styles.page196__main}>
                <section className={styles.page196__dialogue_section}>
                    <div className={styles.page196__dialogue_content}>
                        <h3 className={styles.page196__dialogue_title}>
                            {dialogue.title}
                        </h3>
                        <div className={styles.page196__conversation}>
                            {dialogue.conversations.map((conv, index) => (
                                <div key={index} className={styles.page196__dialogue_line}>
                                    <p className={`${styles.page196__speaker} ${
                                        conv.speaker === 'John' ? styles.page196__john : styles.page196__mary
                                    }`}>
                                        {conv.speaker}:
                                    </p>
                                    <p className={`${styles.page196__text} ${
                                        conv.speaker === 'John' ? styles.page196__john_text : styles.page196__mary_text
                                    }`}>
                                        {conv.text}
                                    </p>
                                    <p className={styles.page196__translation}>
                                        ({conv.translation})
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className={styles.page196__images}>
                    <div className={styles.page196__cherry_blossoms} />
                    <div className={styles.page196__japan_night} />
                </section>
            </main>
        </div>
    );
};

export default Pagina196;