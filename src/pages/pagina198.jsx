import React, { useRef } from 'react';
import styles from './pagina198.module.css';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import audio1e from '../assets/audios/pg198_audio1e.mp3';
import audio2e from '../assets/audios/pg198_audio2e.mp3';
import audio3e from '../assets/audios/pg198_audio3e.mp3';
import audio4e from '../assets/audios/pg198_audio4e.mp3';
import audio5e from '../assets/audios/pg198_audio5e.mp3';
import audio6e from '../assets/audios/pg198_audio6e.mp3';
import audio7e from '../assets/audios/pg198_audio7e.mp3';
import audio8e from '../assets/audios/pg198_audio8e.mp3';
import audio9e from '../assets/audios/pg198_audio9e.mp3';
import audio10e from '../assets/audios/pg198_audio10e.mp3';

import audio1p from '../assets/audios/pg195_audio1p.mp3'; // Reutilizado

const Pagina198 = () => {
    const currentAudio = useRef(null);

    const playAudio = (audioId) => {
        const audioMap = {
            pg198_audio1e: audio1e,
            pg195_audio1p: audio1p,
            pg198_audio2e: audio2e,
            pg198_audio3e: audio3e,
            pg198_audio4e: audio4e,
            pg198_audio5e: audio5e,
            pg198_audio6e: audio6e,
            pg198_audio7e: audio7e,
            pg198_audio8e: audio8e,
            pg198_audio9e: audio9e,
            pg198_audio10e: audio10e,
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
        title: 'Concert Plans',
        audioId: 'pg198_audio2e',
        conversations: [
            {
                speaker: 'Ava',
                text: 'I heard The Kicks are playing downtown this weekend.',
                translation: 'Ouvi dizer que os Kicks vão tocar no centro da cidade neste fim de semana.',
                audioId: 'pg198_audio3e'
            },
            {
                speaker: 'Leo',
                text: 'Really? I would love to see them live!',
                translation: 'Sério? Eu adoraria vê-los ao vivo!',
                audioId: 'pg198_audio4e'
            },
            {
                speaker: 'Ava',
                text: 'Me too. I would buy the tickets right now if I had my wallet.',
                translation: 'Eu também. Eu compraria os ingressos agora mesmo se estivesse com minha carteira.',
                audioId: 'pg198_audio5e'
            },
            {
                speaker: 'Leo',
                text: 'Same here. I would even skip work just to go!',
                translation: 'Idem. Eu até faltaria ao trabalho só pra ir!',
                audioId: 'pg198_audio6e'
            },
            {
                speaker: 'Ava',
                text: 'That’s serious dedication. I would scream so loud during “Midnight Run.',
                translation: 'Fala sério. Eu gritaria tanto durante “Midnight Run.',
                audioId: 'pg198_audio7e'
            },
            {
                speaker: 'Leo',
                text: 'I would lose my voice by the end of the concert. Totally worth it.',
                translation: 'Eu sairia rouco até o ﬁm do show, mas ia valer a pena.',
                audioId: 'pg198_audio8e'
            },
            {
                speaker: 'Ava',
                text: 'I would say it’s the best way to spend a Saturday night.',
                translation: 'Eu diria que é a melhor forma de passar um sábado à noite.',
                audioId: 'pg198_audio9e'
            },
            {
                speaker: 'Leo',
                text: 'No doubt. Let’s grab those tickets later?',
                translation: 'Sem dúvida. Vamos comprar os ingressos mais tarde?',
                audioId: 'pg198_audio10e'
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
                    <img
                        src={eng_audio_icon}
                        alt="Audio English"
                        className={styles.page198__audio_icon}
                        onClick={() => playAudio('pg198_audio1e')}
                    />
                    <img
                        src={ptbr_audio_icon}
                        alt="Audio Portuguese"
                        className={styles.page198__audio_icon}
                        onClick={() => playAudio('pg195_audio1p')}
                    />
                </h2>
            </header>

            <main className={styles.page198__main}>
                <section className={styles.page198__dialogue_section}>
                    <div className={styles.page198__dialogue_content}>
                        <h3 className={styles.page198__dialogue_title}>
                            {dialogue.title}
                            {dialogue.audioId && (
                                <img
                                    src={eng_audio_icon}
                                    alt="Audio English"
                                    className={styles.page198__audio_icon}
                                    onClick={() => playAudio(dialogue.audioId)}
                                />
                            )}
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
                                        {conv.audioId && (
                                            <img
                                                src={eng_audio_icon}
                                                alt="Audio English"
                                                className={styles.page198__audio_icon}
                                                onClick={() => playAudio(conv.audioId)}
                                            />
                                        )}
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
