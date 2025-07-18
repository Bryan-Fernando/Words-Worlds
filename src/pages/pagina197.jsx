import React, { useRef } from 'react';
import styles from './pagina197.module.css';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import audio1e from '../assets/audios/pg197_audio1e.mp3';
import audio2e from '../assets/audios/pg197_audio2e.mp3';
import audio3e from '../assets/audios/pg197_audio3e.mp3';
import audio4e from '../assets/audios/pg197_audio4e.mp3';
import audio5e from '../assets/audios/pg197_audio5e.mp3';
import audio6e from '../assets/audios/pg197_audio6e.mp3';
import audio7e from '../assets/audios/pg197_audio7e.mp3';

import audio1p from '../assets/audios/pg195_audio1p.mp3'; // Reutilizado

const Pagina197 = () => {
    const currentAudio = useRef(null);

    const playAudio = (audioId) => {
        const audioMap = {
            pg197_audio1e: audio1e,
            pg195_audio1p: audio1p,
            pg197_audio2e: audio2e,
            pg197_audio3e: audio3e,
            pg197_audio4e: audio4e,
            pg197_audio5e: audio5e,
            pg197_audio6e: audio6e,
            pg197_audio7e: audio7e,
        };

        if (currentAudio.current) {
            currentAudio.current.pause();
            currentAudio.current.currentTime = 0;
        }

        const audio = new Audio(audioMap[audioId]);
        currentAudio.current = audio;
        audio.play();
    };

    const dialogue = {
        title: 'Dessert Order',
        audioId: 'pg197_audio2e',
        conversations: [
            {
                speaker: 'Server',
                text: 'Would you like to see the dessert menu?',
                translation: 'Gostaria de ver o cardápio de sobremesas?',
                audioId: 'pg197_audio3e'
            },
            {
                speaker: 'Customer',
                text: 'Yes, I would love to. What do you recommend?',
                translation: 'Sim, adoraria. O que você recomenda?',
                audioId: 'pg197_audio4e'
            },
            {
                speaker: 'Server',
                text: 'I would recommend our chocolate mousse or the apple pie. Both are very popular.',
                translation: 'Eu recomendaria nossa mousse de chocolate ou a torta de maçã. As duas são muito populares.',
                audioId: 'pg197_audio5e'
            },
            {
                speaker: 'Customer',
                text: 'That sounds good! I think I would go for the chocolate mousse.',
                translation: 'Parece ótimo! Acho que vou querer a mousse de chocolate.',
                audioId: 'pg197_audio6e'
            },
            {
                speaker: 'Server',
                text: 'Excellent choice. I’ll bring that right out for you.',
                translation: 'Excelente escolha. Já vou trazer para você.',
                audioId: 'pg197_audio7e'
            },
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
                    <img
                        src={eng_audio_icon}
                        alt="Audio English"
                        className={styles.page197__audio_icon}
                        onClick={() => playAudio('pg197_audio1e')}
                    />
                    <img
                        src={ptbr_audio_icon}
                        alt="Audio Portuguese"
                        className={styles.page197__audio_icon}
                        onClick={() => playAudio('pg195_audio1p')}
                    />
                </h2>
            </header>

            <main className={styles.page197__main}>
                <section className={styles.page197__dialogue_section}>
                    <div className={styles.page197__dialogue_content}>
                        <h3 className={styles.page197__dialogue_title}>
                            {dialogue.title}
                            {dialogue.audioId && (
                                <img
                                    src={eng_audio_icon}
                                    alt="Audio English"
                                    className={styles.page197__audio_icon}
                                    onClick={() => playAudio(dialogue.audioId)}
                                />
                            )}
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
                                        {conv.audioId && (
                                            <img
                                                src={eng_audio_icon}
                                                alt="Audio English"
                                                className={styles.page197__audio_icon}
                                                onClick={() => playAudio(conv.audioId)}
                                            />
                                        )}
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
