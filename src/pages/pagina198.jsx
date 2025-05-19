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
                text: 'Me too. I would buy the tickets right now if I had my wallet.',
                translation: 'Eu também. Eu compraria os ingressos agora mesmo se estivesse com minha carteira.'
            },
            {
                speaker: 'Leo',
                text: 'Same here. I would even skip work just to go!',
                translation: 'Idem. Eu até faltaria ao trabalho só pra ir!'
            },
            {
                speaker: 'Ava',
                text: 'That’s serious dedication. I would scream so loud during “Midnight Run.',
                translation: 'Fala sério. Eu gritaria tanto durante “Midnight Run.'
            },
            {
                speaker: 'Leo',
                text: 'I would lose my voice by the end of the concert. Totally worth it.',
                translation: 'Eu sairia rouco até o ﬁm do show, mas ia valer a pena.'
            },
            {
                speaker: 'Ava',
                text: 'I would say it’s the best way to spend a Saturday night.',
                translation: 'Eu diria que é a melhor forma de passar um sábado à noite.'
            },
            {
                speaker: 'Leo',
                text: 'No doubt. Let’s grab those tickets later?',
                translation: 'Sem dúvida. Vamos comprar os ingressos mais tarde?'
            },
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