import React, { useState, useEffect } from 'react';

import { useLocation } from 'react-router-dom';

import styles from './pagina37.module.css';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import portugueseng_audio_icon from '../assets/icons/ptbr_audio_icon.webp';
import slow_audio_icon from '../assets/icons/slow_audio_icon.webp';
import correct_icon from '../assets/icons/correct_icon.webp';
import wrong_icon from '../assets/icons/wrong_icon.webp';

import Pagina37_e1 from '../assets/audios/pg37_e1.mp3';
import Pagina37_e2 from '../assets/audios/pg37_e2.mp3';
import Pagina37_e3 from '../assets/audios/pg37_e3.mp3';
import Pagina37_e4 from '../assets/audios/pg37_e4.mp3';
import Pagina37_e5 from '../assets/audios/pg37_e5.mp3';
import Pagina37_e6 from '../assets/audios/pg37_e6.mp3';
import Pagina37_e7 from '../assets/audios/pg37_e7.mp3';
import Pagina37_e8 from '../assets/audios/pg37_e8.mp3';
import Pagina37_p1 from '../assets/audios/pagina37_p1.mp3';
import Pagina37_p2 from '../assets/audios/pagina37_p2.mp3';
import Pagina37_p3 from '../assets/audios/pagina37_p3.mp3';
import Pagina37_p4 from '../assets/audios/pagina37_p4.mp3';
import Pagina37_p5 from '../assets/audios/pagina37_p5.mp3';
import Pagina37_p6 from '../assets/audios/pagina37_p6.mp3';
import Pagina37_p7 from '../assets/audios/pagina37_p7.mp3';
import Pagina37_p8 from '../assets/audios/pagina37_p8.mp3';

const audios = {
    english: [
        new Audio(Pagina37_e1),
        new Audio(Pagina37_e2),
        new Audio(Pagina37_e3),
        new Audio(Pagina37_e4),
        new Audio(Pagina37_e5),
        new Audio(Pagina37_e6),
        new Audio(Pagina37_e7),
        new Audio(Pagina37_e8),
    ],
    portuguese: [
        new Audio(Pagina37_p1),
        new Audio(Pagina37_p2),
        new Audio(Pagina37_p3),
        new Audio(Pagina37_p4),
        new Audio(Pagina37_p5),
        new Audio(Pagina37_p6),
        new Audio(Pagina37_p7),
        new Audio(Pagina37_p8),
    ],
};

function Pagina37() {
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

export default Pagina37;
