import React, { useRef } from 'react';
import styles from './pagina195.module.css';

import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';

import audio1e from '../assets/audios/pg195_audio1e.mp3';
import audio1p from '../assets/audios/pg195_audio1p.mp3';
import audio2e from '../assets/audios/pg195_audio2e.mp3';
import audio3e from '../assets/audios/pg195_audio3e.mp3';
import audio4e from '../assets/audios/pg195_audio4e.mp3';
import audio5e from '../assets/audios/pg195_audio5e.mp3';
import audio6e from '../assets/audios/pg195_audio6e.mp3';
import audio7e from '../assets/audios/pg195_audio7e.mp3';
import audio8e from '../assets/audios/pg195_audio8e.mp3';
import audio9e from '../assets/audios/pg195_audio9e.mp3';
import audio10e from '../assets/audios/pg195_audio10e.mp3';
import audio11e from '../assets/audios/pg195_audio11e.mp3';
import audio12e from '../assets/audios/pg195_audio12e.mp3';
import audio13e from '../assets/audios/pg195_audio13e.mp3';
import audio14e from '../assets/audios/pg195_audio14e.mp3';

const Pagina195 = () => {
    const currentAudio = useRef(null);

    const playAudio = (audioId) => {
        const audioMap = {
            'pg195_audio1e': audio1e,
            'pg195_audio1p': audio1p,
            'pg195_audio2e': audio2e,
            'pg195_audio3e': audio3e,
            'pg195_audio4e': audio4e,
            'pg195_audio5e': audio5e,
            'pg195_audio6e': audio6e,
            'pg195_audio7e': audio7e,
            'pg195_audio8e': audio8e,
            'pg195_audio9e': audio9e,
            'pg195_audio10e': audio10e,
            'pg195_audio11e': audio11e,
            'pg195_audio12e': audio12e,
            'pg195_audio13e': audio13e,
            'pg195_audio14e': audio14e,
        };

        if (currentAudio.current) {
            currentAudio.current.pause();
            currentAudio.current.currentTime = 0;
        }

        const audio = new Audio(audioMap[audioId]);
        currentAudio.current = audio;
        audio.play();
    };

    const dialogues = [
        {
            title: 'Restaurant Scene',
            audioId: 'pg195_audio2e',
            conversations: [
                {
                    speaker: 'Waiter',
                    text: 'Hello! What would you like to drink?',
                    translation: 'Olá! O que você gostaria de beber?',
                    audioId: 'pg195_audio3e'
                },
                {
                    speaker: 'Emma',
                    text: 'I would like a lemonade, please.',
                    translation: 'Eu gostaria de uma limonada, por favor.',
                    audioId: 'pg195_audio4e'
                },
                {
                    speaker: 'Waiter',
                    text: 'And to eat ?',
                    translation: 'E para comer?',
                    audioId: 'pg195_audio5e'
                },
                {
                    speaker: 'Emma',
                    text: 'I would like a sandwich.',
                    translation: 'Eu gostaria de um sanduíche.',
                    audioId: 'pg195_audio6e'
                },
                {
                    speaker: 'Waiter',
                    text: 'Great! Anything else ?',
                    translation: 'Ótimo! Mais alguma coisa?',
                    audioId: 'pg195_audio7e'
                },
                {
                    speaker: 'Emma',
                    text: 'No, thank you.',
                    translation: 'Não, obrigada.',
                    audioId: 'pg195_audio8e'
                },
            ]
        },
        {
            title: 'Soccer Scene',
            audioId: 'pg195_audio9e',
            conversations: [
                {
                    speaker: 'Liam',
                    text: 'Hi, Anna! Would you like to play soccer?',
                    translation: 'Oi, Anna! Você gostaria de jogar futebol?',
                    audioId: 'pg195_audio10e'
                },
                {
                    speaker: 'Anna',
                    text: 'Yes! I would love to.',
                    translation: 'Sim! Eu adoraria jogar.',
                    audioId: 'pg195_audio11e'
                },
                {
                    speaker: 'Liam',
                    text: "Great! Let's go to the park.",
                    translation: 'Ótimo! Vamos ao parque.',
                    audioId: 'pg195_audio12e'
                },
                {
                    speaker: 'Anna',
                    text: 'Sure! But ﬁrst, would you help me carry my bag ?',
                    translation: 'Claro! Mas antes, você poderia me ajudar a carregar minha bolsa?',
                    audioId: 'pg195_audio13e'
                },
                {
                    speaker: 'Liam',
                    text: "Of course !",
                    translation: 'Claro!',
                    audioId: 'pg195_audio14e'
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
                    <img
                        src={eng_audio_icon}
                        alt="Audio English"
                        className={styles.page195__audio_icon}
                        onClick={() => playAudio('pg195_audio1e')}
                    />
                    <img
                        src={ptbr_audio_icon}
                        alt="Audio Portuguese"
                        className={styles.page195__audio_icon}
                        onClick={() => playAudio('pg195_audio1p')}
                    />
                </h2>
            </header>

            <main className={styles.page195__main}>
                {dialogues.map((dialogue, index) => (
                    <section key={index} className={styles.page195__dialogue_section}>
                        <div className={styles.page195__dialogue_content}>
                            <h3 className={styles.page195__dialogue_title}>
                                {dialogue.title}
                                {dialogue.audioId && (
                                    <img
                                        src={eng_audio_icon}
                                        alt="Audio English"
                                        className={styles.page195__audio_icon}
                                        onClick={() => playAudio(dialogue.audioId)}
                                    />
                                )}
                            </h3>
                            <div className={styles.page195__conversation}>
                                {dialogue.conversations.map((conv, convIndex) => (
                                    <div key={convIndex} className={styles.page195__dialogue_line}>
                                        <p className={styles.page195__speaker}>
                                            {conv.speaker}:
                                        </p>
                                        <p className={styles.page195__text}>
                                            {conv.text}
                                            {conv.audioId && (
                                                <img
                                                    src={eng_audio_icon}
                                                    alt="Audio English"
                                                    className={styles.page195__audio_icon}
                                                    onClick={() => playAudio(conv.audioId)}
                                                />
                                            )}
                                        </p>
                                        <p className={styles.page195__translation}>
                                            ({conv.translation})
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={styles.page195__image_container}>
                            {index === 0 && <div className={styles.page195__restaurant_image} />}
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
