import React, { useRef } from 'react';
import styles from './pagina287.module.css';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';

import audio1e from '../assets/audios/pg287_audio1e.mp3';
import audio2e from '../assets/audios/pg287_audio2e.mp3';
import audio3e from '../assets/audios/pg287_audio3e.mp3';
import audio4e from '../assets/audios/pg287_audio4e.mp3';
import audio5e from '../assets/audios/pg287_audio5e.mp3';
import audio6e from '../assets/audios/pg287_audio6e.mp3';
import audio7e from '../assets/audios/pg287_audio7e.mp3';
import audio8e from '../assets/audios/pg287_audio8e.mp3';
import audio9e from '../assets/audios/pg287_audio9e.mp3';
import audio10e from '../assets/audios/pg287_audio10e.mp3';

const Pagina287 = () => {

    const currentAudio = useRef(null);

    const playAudio = (id) => {
        if (currentAudio.current) {
            currentAudio.current.pause();
            currentAudio.current.currentTime = 0;
        }
        const audio = new Audio(audioMap[id]);
        currentAudio.current = audio;
        audio.play();
    };

    const audioMap = {
        'pg287_audio1e': audio1e,
        'pg287_audio2e': audio2e,
        'pg287_audio3e': audio3e,
        'pg287_audio4e': audio4e,
        'pg287_audio5e': audio5e,
        'pg287_audio6e': audio6e,
        'pg287_audio7e': audio7e,
        'pg287_audio8e': audio8e,
        'pg287_audio9e': audio9e,
        'pg287_audio10e': audio10e,
    };

    return (
        <div className={styles["page287__container"]}>
            <h1 className={styles["page287__title"]}>
                Uso de <span className={styles["page287__red"]}>at</span> para Falar e Perguntar as Horas
            </h1>

            {/* Nota inicial */}
            <div className={styles["page287__note-block"]}>
                <p>● Quando estamos <span className={styles["page287__italic-red"]}>apenas perguntando ou dizendo as horas</span>, <strong>não</strong> usamos <span className={styles["page287__red"]}>at</span>.</p>
                <p>● Quando falamos de um horário específico <strong>para um evento ou compromisso</strong>, usamos <span className={styles["page287__red"]}>at</span>.</p>
            </div>

            {/* Bloco 1 */}
            <div className={styles["page287__box"]}>
                <div className={styles["page287__box-column"]}>
                    <p><strong>1. Perguntando / Dizendo as Horas Atuais - Não usar <span className={styles["page287__red"]}>at</span></strong></p>
                    <p className={styles["page287__red"]}>
                        <em>What time is it?</em>
                        <img
                            src={eng_audio_icon}
                            alt=""
                            className={styles["page287__audio-icon"]}
                            onClick={() => playAudio("pg287_audio1e")}
                        />
                    </p>

                    <p className={styles["page287__italic-blue"]}>
                        <em>It is 3 o’clock.</em>
                        <img
                            src={eng_audio_icon}
                            alt=""
                            className={styles["page287__audio-icon"]}
                            onClick={() => playAudio("pg287_audio2e")}
                        />
                    </p>

                    <p className={styles["page287__red"]}>
                        <em>It is half past ten.</em>
                        <img
                            src={eng_audio_icon}
                            alt=""
                            className={styles["page287__audio-icon"]}
                            onClick={() => playAudio("pg287_audio3e")}
                        />
                    </p>

                    <p className={`${styles["page287__error-text"]} ${styles["page287__red"]}`}>
                        <em>Errado: It is at 3 o’clock.</em>
                        <img
                            src={eng_audio_icon}
                            alt=""
                            className={styles["page287__audio-icon"]}
                            onClick={() => playAudio("pg287_audio4e")}
                        />
                    </p>
                </div>
                <div className={styles["page287__box-column"]}>
                    <br />
                    <p>→ Que horas são?</p>
                    <p>→ São 3 horas.</p>
                    <p>→ São 10 e meia.</p>
                    <p>→ São às 3 horas</p>
                </div>
            </div>

            {/* Bloco 2 */}
            <div className={styles["page287__box"]}>
                <div className={styles["page287__box-column"]}>
                    <p><strong>2. Horários de Compromissos / Eventos - Usar <span className={styles["page287__red"]}>at</span></strong></p>
                    <p className={styles["page287__red"]}>
                        <em>What time does the <span className={styles["page287__link"]}>movie</span> start?</em>
                        <img
                            src={eng_audio_icon}
                            alt=""
                            className={styles["page287__audio-icon"]}
                            onClick={() => playAudio("pg287_audio5e")}
                        />
                    </p>

                    <p className={styles["page287__italic-blue"]}>
                        <em>It starts at 7:00.</em>
                        <img
                            src={eng_audio_icon}
                            alt=""
                            className={styles["page287__audio-icon"]}
                            onClick={() => playAudio("pg287_audio6e")}
                        />
                    </p>

                    <p className={styles["page287__red"]}>
                        <em>The meeting is at 2:30.</em>
                        <img
                            src={eng_audio_icon}
                            alt=""
                            className={styles["page287__audio-icon"]}
                            onClick={() => playAudio("pg287_audio7e")}
                        />
                    </p>

                    <p className={styles["page287__red"]}>
                        <em>The train arrives at noon.</em>
                        <img
                            src={eng_audio_icon}
                            alt=""
                            className={styles["page287__audio-icon"]}
                            onClick={() => playAudio("pg287_audio8e")}
                        />
                    </p>
                </div>
                <div className={styles["page287__box-column"]}>
                    <br />
                    <p>→ Que horas começa o filme?</p>
                    <p>→ Começa às 7:00.</p>
                    <p>→ A reunião é às 2:30.</p>
                    <p>→ O trem chega ao meio-dia.</p>
                </div>
            </div>

            {/* Tabela Resumo */}
            <div>
                <div className={styles["page287__summary-title"]}>Resumo</div>
                <table className={styles["page287__table"]}>
                    <thead>
                        <tr>
                            <th>Situação</th>
                            <th>Usa at?</th>
                            <th>Exemplo (inglês)</th>
                            <th>Tradução</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Perguntar / Dizer a hora atual</td>
                            <td><span className={styles["page287__red"]}>Não</span></td>
                            <td
                                onClick={() => playAudio("pg287_audio9e")}
                                style={{ cursor: "pointer" }}
                            >
                                It is 5 o’clock
                            </td>

                            <td>São 5 horas <span className={styles["page287__italic-red"]}>(sem at)</span></td>
                        </tr>
                        <tr>
                            <td>Horário de evento</td>
                            <td><span className={styles["page287__italic-blue"]}>Sim</span></td>
                            <td
                                onClick={() => playAudio("pg287_audio10e")}
                                style={{ cursor: "pointer" }}
                            >
                                At 8:00
                            </td>

                            <td>Às 8 horas <span className={styles["page287__italic-blue"]}>(Com at)</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Pagina287;
