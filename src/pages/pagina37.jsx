import React, { useState, useEffect } from 'react';

import { useLocation } from 'react-router-dom';

import styles from './pagina37.module.css';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import portugueseng_audio_icon from '../assets/icons/ptbr_audio_icon.webp';
import slow_audio_icon from '../assets/icons/slow_audio_icon.webp';
import correct_icon from '../assets/icons/correct_icon.webp';
import wrong_icon from '../assets/icons/wrong_icon.webp';

import pg37_audio1e from '../assets/audios/pg37_audio1e.mp3';
import pg37_audio2e from '../assets/audios/pg37_audio2e.mp3';
import pg37_audio3e from '../assets/audios/pg37_audio3e.mp3';
import pg37_audio4e from '../assets/audios/pg37_audio4e.mp3';
import pg37_audio5e from '../assets/audios/pg37_audio5e.mp3';
import pg37_audio6e from '../assets/audios/pg37_audio6e.mp3';
import pg37_audio7e from '../assets/audios/pg37_audio7e.mp3';
import pg37_audio8e from '../assets/audios/pg37_audio8e.mp3';
import pg37_audio1p from '../assets/audios/pg37_audio1p.mp3';
import pg37_audio2p from '../assets/audios/pg37_audio2p.mp3';
import pg37_audio3p from '../assets/audios/pg37_audio3p.mp3';
import pg37_audio4p from '../assets/audios/pg37_audio4p.mp3';
import pg37_audio5p from '../assets/audios/pg37_audio5p.mp3';
import pg37_audio6p from '../assets/audios/pg37_audio6p.mp3';
import pg37_audio7p from '../assets/audios/pg37_audio7p.mp3';
import pg37_audio8p from '../assets/audios/pg37_audio8p.mp3';

const audios = {
    english: [
        new Audio(pg37_audio1e),
        new Audio(pg37_audio2e),
        new Audio(pg37_audio3e),
        new Audio(pg37_audio4e),
        new Audio(pg37_audio5e),
        new Audio(pg37_audio6e),
        new Audio(pg37_audio7e),
        new Audio(pg37_audio8e),
    ],
    portuguese: [
        new Audio(pg37_audio1p),
        new Audio(pg37_audio2p),
        new Audio(pg37_audio3p),
        new Audio(pg37_audio4p),
        new Audio(pg37_audio5p),
        new Audio(pg37_audio6p),
        new Audio(pg37_audio7p),
        new Audio(pg37_audio8p),
    ],
};

function pg37() {
    const location = useLocation();
    const { respostasUsuario, resultado } = location.state || {};
    const [isSpeedReduced, setIsSpeedReduced] = useState(false);
    const [playingAudio, setPlayingAudio] = useState(null);

    const respostasCorretas = [
        'There is a bird in the nest',
        "There aren't any clouds in the sky",
        'There are three books on the shelf',
        "There aren't many people at the party",
        'There is a pencil on the table',
        'There is a couch in the living room',
        "There isn't any milk in the fridge",
        "There isn't a grocery store in this neighborhood",
    ];

    const playAudio = (index, language) => {
        if (playingAudio) {
            playingAudio.pause();
            playingAudio.currentTime = 0;
        }

        const audioToPlay = audios[language][index];

        setTimeout(() => {
            audioToPlay.play();
            setPlayingAudio(audioToPlay);

            audioToPlay.onended = () => {
                setPlayingAudio(null);
            };
        }, 700);
    };

    const reduzirVelocidade = () => {
        Object.keys(audios).forEach((language) => {
            audios[language].forEach((audio) => {
                audio.playbackRate = isSpeedReduced ? 1 : 0.75;
            });
        });
        setIsSpeedReduced(!isSpeedReduced);
    };

    const correctCount = resultado.filter(Boolean).length;
    const totalCount = respostasCorretas.length;
    const percentage = (correctCount / totalCount) * 100;

    return (
        <div className={styles["page37__container"]}>
            <header className={styles["page37__header"]}>
                <h1 className={styles["page37__title"]}>Answers</h1>
                <h2 className={styles["page37__instruction"]}>
                    Para reduzir a velocidade da reprodução para 0.75x, clique no{' '}
                    <span className={styles["page37__speed--container"]}>
                        <img
                            src={slow_audio_icon}
                            className={styles["page37__volumeng--audio--icon"]}
                            alt="Speed icon"
                        />
                    </span>
                </h2>
            </header>

            <main className={styles["page37__main"]}>
                <div className={styles["page37__list--respostas"]}>
                    {respostasCorretas.map((respostaCorreta, index) => (
                        <div key={index} className={styles["page37__resposta--item"]}>
                            <input
                                type="text"
                                className={styles["page37__input"]}
                                value={respostasUsuario[index]?.join(' ') || ''}
                                readOnly
                            />
                            <img
                                src={resultado[index] ? correct_icon : wrong_icon}
                                alt={resultado[index] ? 'Correct' : 'Incorrect'}
                                className={`${styles["page37__status"]} ${resultado[index] ? styles["page37__status--correto"] : styles["page37__status--errado"]}`}
                            />
                            {resultado[index] && (
                                <>
                                    <img
                                        className={styles["page37__audio--icon"]}
                                        src={eng_audio_icon}
                                        alt="Play English Audio"
                                        onClick={() => playAudio(index, 'english')}
                                    />
                                    <img
                                        className={styles["page37__audio--icon"]}
                                        src={portugueseng_audio_icon}
                                        alt="Play Portuguese Audio"
                                        onClick={() => playAudio(index, 'portuguese')}
                                    />
                                    <img
                                        className={styles["page37__volumeng--audio--icon"]}
                                        src={slow_audio_icon}
                                        alt="Toggle Speed"
                                        onClick={reduzirVelocidade}
                                    />
                                </>
                            )}
                        </div>
                    ))}
                </div>
                <div className={styles["page37__percentual--acertos"]}>
                    <span>{Math.round(percentage)}% Out of 100</span>
                </div>
            </main>
        </div>
    );
}

export default pg37;
