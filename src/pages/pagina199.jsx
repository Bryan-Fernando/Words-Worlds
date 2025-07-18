import React, { useRef } from 'react';
import styles from './pagina199.module.css';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';

import audio1e from '../assets/audios/pg199_audio1e.mp3';
import audio2e from '../assets/audios/pg199_audio2e.mp3';

const Pagina199 = () => {
    const currentAudio = useRef(null);

    const playAudio = (audioId) => {
        const audioMap = {
            pg199_audio1e: audio1e,
            pg199_audio2e: audio2e,
        };

        if (currentAudio.current) {
            currentAudio.current.pause();
            currentAudio.current.currentTime = 0;
        }

        const audio = new Audio(audioMap[audioId]);
        currentAudio.current = audio;
        audio.play();
    };

    return (
        <div className={styles.container}>
            <div className={styles.pageContainer}>
                <header className={styles.header}>
                    <h1 className={styles.headerTitle}>Grammar</h1>
                    <div className={styles.headerContent}>
                        <h2 className={styles.headerSubtitle}>
                            <span className={styles.modalVerb}>Can</span>
                            <span className={styles.subtitle}> – Modal Verb</span>
                            <img
                                src={eng_audio_icon}
                                alt="Audio English"
                                className={styles.page199__audio_icon}
                                onClick={() => playAudio('pg199_audio1e')}
                            />
                        </h2>
                        <div className={styles.simplePresent}>
                            Simple Present – Presente do Indicativo
                            <img
                                src={eng_audio_icon}
                                alt="Audio English"
                                className={styles.page199__audio_icon}
                                onClick={() => playAudio('pg199_audio2e')}
                            />
                        </div>
                    </div>
                </header>

                <main className={styles.mainContent}>
                    <section className={styles.canExplanation}>
                        <p className={styles.canText}>
                            <span className={styles.modalVerb}>Can</span> é um verbo auxiliar/modal versátil usado no Present Simple (presente do indicativo) com os significados de <strong>poder</strong>, <strong>saber</strong> ou <strong>conseguir</strong>, dependendo do contexto. É utilizado para expressar ou falar de:
                        </p>
                    </section>

                    <section className={styles.usageBox}>
                        <ul className={styles.usageList}>
                            <li>Conselhos</li>
                            <li>Sugestões</li>
                            <li>Habilidades</li>
                            <li>Capacidade</li>
                            <li>Conhecimento</li>
                            <li>Pedidos / Solicitações (Negados)</li>
                            <li>Permissão</li>
                        </ul>
                    </section>

                    <div className={styles.noteBox}>
                        <div className={styles.noteTitle}>
                            Nota
                        </div>
                        <div className={styles.noteContent}>
                            <p>Não necessariamente na ordem acima</p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Pagina199;
