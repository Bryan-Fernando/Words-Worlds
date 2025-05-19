import React from 'react';
import styles from './pagina195.module.css';

const Pagina195 = () => {
    const dialogues = [
        {
            title: 'Restaurant Scene',
            conversations: [
                {
                    speaker: 'Waiter',
                    text: 'Hello! What would you like to drink?',
                    translation: 'Olá! O que você gostaria de beber?'
                },
                {
                    speaker: 'Emma',
                    text: 'I would like a lemonade, please.',
                    translation: 'Eu gostaria de uma limonada, por favor.'
                },
                {
                    speaker: 'Waiter',
                    text: 'And to eat ?',
                    translation: 'E para comer?'
                },
                {
                    speaker: 'Emma',
                    text: 'I would like a sandwich.',
                    translation: 'Eu gostaria de um sanduíche.'
                },
                {
                    speaker: 'Waiter',
                    text: 'Great! Anything else ?',
                    translation: 'Ótimo! Mais alguma coisa?'
                },
                {
                    speaker: 'Emma',
                    text: 'No, thank you.',
                    translation: 'Não, obrigada.'
                },
            ]
        },
        {
            title: 'Soccer Scene',
            conversations: [
                {
                    speaker: 'Liam',
                    text: 'Hi, Anna! Would you like to play soccer?',
                    translation: 'Oi, Anna! Você gostaria de jogar futebol?'
                },
                {
                    speaker: 'Anna',
                    text: 'Yes! I would love to.',
                    translation: 'Sim! Eu adoraria jogar.'
                },
                {
                    speaker: 'Liam',
                    text: "Great! Let's go to the park.",
                    translation: 'Ótimo! Vamos ao parque.'
                },
                {
                    speaker: 'Anna',
                    text: 'Sure! But ﬁrst, would you help me carry my bag ?',
                    translation: 'Claro! Mas antes, você poderia me ajudar a carregar minha bolsa?'
                },
                {
                    speaker: 'Liam',
                    text: "Of course !",
                    translation: 'Claro!'
                },
            ]
        }
    ];

    return (
        <div className={styles.page195__container}>
            <header className={styles.page195__header}>
                <h1 className={styles.page195__title}>
                    Dialogues
                    <span className={styles.page195__listen}>
                        Listen and Repeat 🎧
                    </span>
                </h1>
                <h2 className={styles.page195__subtitle}>
                    Real-Life Conversation Listening Pronunciation Practice
                </h2>
            </header>

            <main className={styles.page195__main}>
                {dialogues.map((dialogue, index) => (
                    <section key={index} className={styles.page195__dialogue_section}>
                        <div className={styles.page195__dialogue_content}>
                            <h3 className={styles.page195__dialogue_title}>
                                {dialogue.title}
                            </h3>
                            <div className={styles.page195__conversation}>
                                {dialogue.conversations.map((conv, convIndex) => (
                                    <div key={convIndex} className={styles.page195__dialogue_line}>
                                        <p className={styles.page195__speaker}>
                                            {conv.speaker}:
                                        </p>
                                        <p className={styles.page195__text}>
                                            {conv.text}
                                        </p>
                                        <p className={styles.page195__translation}>
                                            ({conv.translation})
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={styles.page195__image_container}>
                            {index === 0 ? (
                                <div className={styles.page195__restaurant_image} />
                            ) : null}
                        </div>
                    </section>
                ))}
                 <section className={styles.page195__soccer_images}>
                    <div className={styles.page195__car_image} />
                    <div className={styles.page195__soccer_image} />
                </section>
            </main>
        </div>
    );
};

export default Pagina195;