import React, { useRef } from 'react';
import styles from './pagina196.module.css';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import audio1e from '../assets/audios/pg196_audio1e.mp3';
import audio2e from '../assets/audios/pg196_audio2e.mp3';
import audio3e from '../assets/audios/pg196_audio3e.mp3';
import audio4e from '../assets/audios/pg196_audio4e.mp3';
import audio5e from '../assets/audios/pg196_audio5e.mp3';
import audio6e from '../assets/audios/pg196_audio6e.mp3';
import audio7e from '../assets/audios/pg196_audio7e.mp3';
import audio8e from '../assets/audios/pg196_audio8e.mp3';

import audio1p from '../assets/audios/pg195_audio1p.mp3'; // Apenas esse é reutilizado da pg195

const Pagina196 = () => {
    const currentAudio = useRef(null);

    const playAudio = (audioId) => {
        const audioMap = {
            pg196_audio1e: audio1e,
            pg195_audio1p: audio1p,
            pg196_audio2e: audio2e,
            pg196_audio3e: audio3e,
            pg196_audio4e: audio4e,
            pg196_audio5e: audio5e,
            pg196_audio6e: audio6e,
            pg196_audio7e: audio7e,
            pg196_audio8e: audio8e,
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
        title: 'Japan Travel',
        audioId: 'pg196_audio2e',
        conversations: [
            {
                speaker: 'John',
                text: 'Where would you like to travel to?',
                translation: 'Para onde você gostaria de viajar?',
                audioId: 'pg196_audio3e'
            },
            {
                speaker: 'Mary',
                text: 'Oh, I would love to visit Japan.',
                translation: 'Ah, eu adoraria visitar o Japão.',
                audioId: 'pg196_audio4e'
            },
            {
                speaker: 'John',
                text: 'That sounds amazing. I would go there just for the sushi!',
                translation: 'Isso parece incrível. Eu iria só pelo sushi!',
                audioId: 'pg196_audio5e'
            },
            {
                speaker: 'Mary',
                text: 'And the cherry blossoms... I would never stop taking pictures.',
                translation: 'E as cerejeiras... eu nunca pararia de tirar fotos.',
                audioId: 'pg196_audio6e'
            },
            {
                speaker: 'John',
                text: 'I think I would learn a bit of Japanese before going.',
                translation: 'Acho que eu aprenderia um pouco de japonês antes de ir.',
                audioId: 'pg196_audio7e'
            },
            {
                speaker: 'Mary',
                text: 'Good idea! That would make the trip even better.',
                translation: 'Boa ideia! Isso tornaria a viagem ainda melhor.',
                audioId: 'pg196_audio8e'
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
                    <img
                        src={eng_audio_icon}
                        alt="Audio English"
                        className={styles.page196__audio_icon}
                        onClick={() => playAudio('pg196_audio1e')}
                    />
                    <img
                        src={ptbr_audio_icon}
                        alt="Audio Portuguese"
                        className={styles.page196__audio_icon}
                        onClick={() => playAudio('pg195_audio1p')}
                    />
                </h2>
            </header>

            <main className={styles.page196__main}>
                <section className={styles.page196__dialogue_section}>
                    <div className={styles.page196__dialogue_content}>
                        <h3 className={styles.page196__dialogue_title}>
                            {dialogue.title}
                            {dialogue.audioId && (
                                <img
                                    src={eng_audio_icon}
                                    alt="Audio English"
                                    className={styles.page196__audio_icon}
                                    onClick={() => playAudio(dialogue.audioId)}
                                />
                            )}
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
                                        {conv.audioId && (
                                            <img
                                                src={eng_audio_icon}
                                                alt="Audio English"
                                                className={styles.page196__audio_icon}
                                                onClick={() => playAudio(conv.audioId)}
                                            />
                                        )}
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
