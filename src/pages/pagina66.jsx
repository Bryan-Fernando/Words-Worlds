import React, { useRef } from 'react';
import styles from './pagina66.module.css';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';

import pg66_audio1e from '../assets/audios/pg66_audio1e.mp3';
import pg66_audio2e from '../assets/audios/pg66_audio2e.mp3';
import pg66_audio3e from '../assets/audios/pg66_audio3e.mp3';
import pg66_audio4e from '../assets/audios/pg66_audio4e.mp3';
import pg66_audio5e from '../assets/audios/pg66_audio5e.mp3';
import pg66_audio6e from '../assets/audios/pg66_audio6e.mp3';
import pg66_audio7e from '../assets/audios/pg66_audio7e.mp3';
import pg66_audio8e from '../assets/audios/pg66_audio8e.mp3';
import pg66_audio9e from '../assets/audios/pg66_audio9e.mp3';
import pg66_audio10e from '../assets/audios/pg66_audio10e.mp3';
import pg66_audio11e from '../assets/audios/pg66_audio11e.mp3';
import pg66_audio12e from '../assets/audios/pg66_audio12e.mp3';
import pg66_audio13e from '../assets/audios/pg66_audio13e.mp3';
import pg66_audio14e from '../assets/audios/pg66_audio14e.mp3';
import pg66_audio15e from '../assets/audios/pg66_audio15e.mp3';
import pg66_audio16e from '../assets/audios/pg66_audio16e.mp3';
import pg66_audio17e from '../assets/audios/pg66_audio17e.mp3';
import pg66_audio18e from '../assets/audios/pg66_audio18e.mp3';
import pg66_audio19e from '../assets/audios/pg66_audio19e.mp3';
import pg66_audio20e from '../assets/audios/pg66_audio20e.mp3';
import pg66_audio21e from '../assets/audios/pg66_audio21e.mp3';
import pg66_audio22e from '../assets/audios/pg66_audio22e.mp3';
import pg66_audio23e from '../assets/audios/pg66_audio23e.mp3';
import pg66_audio24e from '../assets/audios/pg66_audio24e.mp3';
import pg66_audio25e from '../assets/audios/pg66_audio25e.mp3';
import pg66_audio26e from '../assets/audios/pg66_audio26e.mp3';
import pg66_audio27e from '../assets/audios/pg66_audio27e.mp3';
import pg66_audio28e from '../assets/audios/pg66_audio28e.mp3';
import pg66_audio29e from '../assets/audios/pg66_audio29e.mp3';

const audioMap = {
    pg66_audio1e,
    pg66_audio2e,
    pg66_audio3e,
    pg66_audio4e,
    pg66_audio5e,
    pg66_audio6e,
    pg66_audio7e,
    pg66_audio8e,
    pg66_audio9e,
    pg66_audio10e,
    pg66_audio11e,
    pg66_audio12e,
    pg66_audio13e,
    pg66_audio14e,
    pg66_audio15e,
    pg66_audio16e,
    pg66_audio17e,
    pg66_audio18e,
    pg66_audio19e,
    pg66_audio20e,
    pg66_audio21e,
    pg66_audio22e,
    pg66_audio23e,
    pg66_audio24e,
    pg66_audio25e,
    pg66_audio26e,
    pg66_audio27e,
    pg66_audio28e,
    pg66_audio29e,
};

const Pagina66 = () => {
    const currentAudioRef = useRef(null);

    const playAudio = (audioKey) => {
        if (currentAudioRef.current) {
            currentAudioRef.current.pause();
            currentAudioRef.current.currentTime = 0;
        }
        const audioSrc = audioMap[audioKey];
        if (audioSrc) {
            const audio = new Audio(audioSrc);
            currentAudioRef.current = audio;
            audio.play();
        }
    };

    return (
        <div className={styles["page66__container"]}>
            <header className={styles["page66__header"]}>
                <h1 className={styles["page66__grammar-title"]}>Grammar:</h1>
                <h2 className={styles["page66__header--en"]}>
                    Common Main Verbs (Base Form) – English & Portuguese
                </h2>
                <h3 className={styles["page66__header--pt"]}>
                    Verbos Principais Comuns (Forma Base) – Inglês e Português
                </h3>
                <h4 className={styles["page66__infinitive"]}>Infinitivo</h4>
            </header>

            <main className={styles["page66__main"]}>
                {/* Bloco A-B-C */}
                <div className={styles["page66__labels"]}>
                    <span className={styles["page66__label--leftA"]}>A</span>
                    <span className={styles["page66__label--centerB"]}>B</span>
                    <span className={styles["page66__label--rightC"]}>C</span>
                </div>
                <section className={styles["page66__block"]}>
                    <div className={styles["page66__columns--3"]}>
                        {/* Coluna A */}
                        <div className={styles["page66__column"]}>
                            <div className={styles["page66__row"]}>
                                <span className={styles["page66__english"]}>
                                    to ask
                                    <img
                                        src={eng_audio_icon}
                                        alt="Play Audio"
                                        className={styles["page66__audio-icon"]}
                                        onClick={() => playAudio("pg66_audio1e")}
                                    />
                                </span>
                                <span>perguntar / fazer perguntas</span>
                            </div>
                            <div className={styles["page66__row"]}>
                                <span className={styles["page66__english"]}>
                                    to answer
                                    <img
                                        src={eng_audio_icon}
                                        alt="Play Audio"
                                        className={styles["page66__audio-icon"]}
                                        onClick={() => playAudio("pg66_audio2e")}
                                    />
                                </span>
                                <span>responder</span>
                            </div>
                            <div className={styles["page66__row"]}>
                                <span className={styles["page66__english"]}>
                                    to arrive
                                    <img
                                        src={eng_audio_icon}
                                        alt="Play Audio"
                                        className={styles["page66__audio-icon"]}
                                        onClick={() => playAudio("pg66_audio3e")}
                                    />
                                </span>
                                <span>chegar</span>
                            </div>
                        </div>
                        {/* Coluna B */}
                        <div className={styles["page66__column"]}>
                            <div className={styles["page66__row"]}>
                                <span className={styles["page66__english"]}>
                                    to buy
                                    <img
                                        src={eng_audio_icon}
                                        alt="Play Audio"
                                        className={styles["page66__audio-icon"]}
                                        onClick={() => playAudio("pg66_audio4e")}
                                    />
                                </span>
                                <span>comprar</span>
                            </div>
                            <div className={styles["page66__row"]}>
                                <span className={styles["page66__english"]}>
                                    to bring
                                    <img
                                        src={eng_audio_icon}
                                        alt="Play Audio"
                                        className={styles["page66__audio-icon"]}
                                        onClick={() => playAudio("pg66_audio5e")}
                                    />
                                </span>
                                <span>trazer</span>
                            </div>
                            <div className={styles["page66__row"]}>
                                <span className={styles["page66__english"]}>
                                    to begin
                                    <img
                                        src={eng_audio_icon}
                                        alt="Play Audio"
                                        className={styles["page66__audio-icon"]}
                                        onClick={() => playAudio("pg66_audio6e")}
                                    />
                                </span>
                                <span>começar</span>
                            </div>
                            <div className={styles["page66__row"]}>
                                <div className={styles["page66__to-be-en"]}>
                                    to be
                                    <img
                                        src={eng_audio_icon}
                                        alt="Play Audio"
                                        className={styles["page66__audio-icon"]}
                                        onClick={() => playAudio("pg66_audio7e")}
                                    />
                                </div>
                                <div className={styles["page66__to-be-pt"]}>
                                    ser / estar / ter somente para idade
                                </div>
                            </div>
                        </div>
                        {/* Coluna C */}
                        <div className={styles["page66__column"]}>
                            <div className={styles["page66__row"]}>
                                <span className={styles["page66__english"]}>
                                    to call
                                    <img
                                        src={eng_audio_icon}
                                        alt="Play Audio"
                                        className={styles["page66__audio-icon"]}
                                        onClick={() => playAudio("pg66_audio8e")}
                                    />
                                </span>
                                <div>
                                    <span>chamar</span>
                                    <br />
                                    <span className={styles["page66__highlight--red"]}>ligar / telefonar para</span>
                                </div>
                            </div>
                            <div className={styles["page66__row"]}>
                                <span className={styles["page66__english"]}>
                                    to come
                                    <img
                                        src={eng_audio_icon}
                                        alt="Play Audio"
                                        className={styles["page66__audio-icon"]}
                                        onClick={() => playAudio("pg66_audio9e")}
                                    />
                                </span>
                                <span>vir</span>
                            </div>
                            <div className={styles["page66__row"]}>
                                <span className={styles["page66__english"]}>
                                    to cook
                                    <img
                                        src={eng_audio_icon}
                                        alt="Play Audio"
                                        className={styles["page66__audio-icon"]}
                                        onClick={() => playAudio("pg66_audio10e")}
                                    />
                                </span>
                                <span>cozinhar</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Bloco D-E-F-G */}
                <div className={styles["page66__labels"]}>
                    <span className={styles["page66__label--leftD"]}>D</span>
                    <span className={styles["page66__label--centerE"]}>E</span>
                    <span className={styles["page66__label--centerF"]}>F</span>
                    <span className={styles["page66__label--rightG"]}>G</span>
                </div>
                <section className={styles["page66__block"]}>
                    <div className={styles["page66__columns--4"]}>
                        <div className={styles["page66__column"]}>
                            <div className={styles["page66__row"]}>
                                <span className={styles["page66__english"]}>
                                    to dance
                                    <img
                                        src={eng_audio_icon}
                                        alt="Play Audio"
                                        className={styles["page66__audio-icon"]}
                                        onClick={() => playAudio("pg66_audio11e")}
                                    />
                                </span>
                                <span>dançar</span>
                            </div>
                            <div className={styles["page66__row"]}>
                                <span className={styles["page66__english"]}>
                                    to do
                                    <img
                                        src={eng_audio_icon}
                                        alt="Play Audio"
                                        className={styles["page66__audio-icon"]}
                                        onClick={() => playAudio("pg66_audio12e")}
                                    />
                                </span>
                                <span>fazer</span>
                            </div>
                            <div className={styles["page66__row"]}>
                                <span className={styles["page66__english"]}>
                                    to drink
                                    <img
                                        src={eng_audio_icon}
                                        alt="Play Audio"
                                        className={styles["page66__audio-icon"]}
                                        onClick={() => playAudio("pg66_audio13e")}
                                    />
                                </span>
                                <span>beber</span>
                            </div>
                        </div>
                        <div className={styles["page66__column"]}>
                            <div className={styles["page66__row"]}>
                                <span className={styles["page66__english"]}>
                                    to eat
                                    <img
                                        src={eng_audio_icon}
                                        alt="Play Audio"
                                        className={styles["page66__audio-icon"]}
                                        onClick={() => playAudio("pg66_audio14e")}
                                    />
                                </span>
                                <span>comer</span>
                            </div>
                            <div className={styles["page66__row"]}>
                                <span className={styles["page66__english"]}>
                                    to enjoy
                                    <img
                                        src={eng_audio_icon}
                                        alt="Play Audio"
                                        className={styles["page66__audio-icon"]}
                                        onClick={() => playAudio("pg66_audio15e")}
                                    />
                                </span>
                                <span>aproveitar / gostar muito / apreciar / curtir</span>
                            </div>
                        </div>
                        <div className={styles["page66__column"]}>
                            <div className={styles["page66__row"]}>
                                <span className={styles["page66__english"]}>
                                    to find
                                    <img
                                        src={eng_audio_icon}
                                        alt="Play Audio"
                                        className={styles["page66__audio-icon"]}
                                        onClick={() => playAudio("pg66_audio16e")}
                                    />
                                </span>
                                <span>encontrar / achar</span>
                            </div>
                            <div className={styles["page66__row"]}>
                                <span className={styles["page66__english"]}>
                                    to finish
                                    <img
                                        src={eng_audio_icon}
                                        alt="Play Audio"
                                        className={styles["page66__audio-icon"]}
                                        onClick={() => playAudio("pg66_audio17e")}
                                    />
                                </span>
                                <span>terminar / acabar</span>
                            </div>
                        </div>
                        <div className={styles["page66__column"]}>
                            <div className={styles["page66__row"]}>
                                <span className={styles["page66__english"]}>
                                    to go
                                    <img
                                        src={eng_audio_icon}
                                        alt="Play Audio"
                                        className={styles["page66__audio-icon"]}
                                        onClick={() => playAudio("pg66_audio18e")}
                                    />
                                </span>
                                <span>ir</span>
                            </div>
                            <div className={styles["page66__row"]}>
                                <span className={styles["page66__english"]}>
                                    to give
                                    <img
                                        src={eng_audio_icon}
                                        alt="Play Audio"
                                        className={styles["page66__audio-icon"]}
                                        onClick={() => playAudio("pg66_audio19e")}
                                    />
                                </span>
                                <span>dar</span>
                            </div>
                            <div className={styles["page66__row"]}>
                                <span className={styles["page66__english"]}>
                                    to get
                                    <img
                                        src={eng_audio_icon}
                                        alt="Play Audio"
                                        className={styles["page66__audio-icon"]}
                                        onClick={() => playAudio("pg66_audio20e")}
                                    />
                                </span>
                                <span>
                                    obter / conseguir / ter –{" "}
                                    <span style={{ color: "#A61C28" }}>( etc )</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Bloco H-L-M-N */}
                <div className={styles["page66__labels"]}>
                    <span className={styles["page66__label--leftH"]}>H</span>
                    <span className={styles["page66__label--centerL"]}>L</span>
                    <span className={styles["page66__label--centerM"]}>M</span>
                    <span className={styles["page66__label--rightN"]}>N</span>
                </div>
                <section className={styles["page66__block"]}>
                    <div className={styles["page66__columns--4"]}>
                        <div className={styles["page66__column"]}>
                            <div className={styles["page66__row"]}>
                                <span className={styles["page66__english"]}>
                                    to have
                                    <img
                                        src={eng_audio_icon}
                                        alt="Play Audio"
                                        className={styles["page66__audio-icon"]}
                                        onClick={() => playAudio("pg66_audio21e")}
                                    />
                                </span>
                                <span>ter / possuir</span>
                            </div>
                            <div className={styles["page66__row"]}>
                                <span className={styles["page66__english"]}>
                                    to help
                                    <img
                                        src={eng_audio_icon}
                                        alt="Play Audio"
                                        className={styles["page66__audio-icon"]}
                                        onClick={() => playAudio("pg66_audio22e")}
                                    />
                                </span>
                                <span>ajudar / socorrer</span>
                            </div>
                            <div className={styles["page66__row"]}>
                                <span className={styles["page66__english"]}>
                                    to hear
                                    <img
                                        src={eng_audio_icon}
                                        alt="Play Audio"
                                        className={styles["page66__audio-icon"]}
                                        onClick={() => playAudio("pg66_audio23e")}
                                    />
                                </span>
                                <span>ouvir</span>
                            </div>
                        </div>
                        <div className={styles["page66__column"]}>
                            <div className={styles["page66__row"]}>
                                <span className={styles["page66__english"]}>
                                    to like
                                    <img
                                        src={eng_audio_icon}
                                        alt="Play Audio"
                                        className={styles["page66__audio-icon"]}
                                        onClick={() => playAudio("pg66_audio24e")}
                                    />
                                </span>
                                <span>gostar</span>
                            </div>
                            <div className={styles["page66__row"]}>
                                <span className={styles["page66__english"]}>
                                    to live
                                    <img
                                        src={eng_audio_icon}
                                        alt="Play Audio"
                                        className={styles["page66__audio-icon"]}
                                        onClick={() => playAudio("pg66_audio25e")}
                                    />
                                </span>
                                <span>viver</span>
                            </div>
                            <div className={styles["page66__row"]}>
                                <span className={styles["page66__english"]}>
                                    to look
                                    <img
                                        src={eng_audio_icon}
                                        alt="Play Audio"
                                        className={styles["page66__audio-icon"]}
                                        onClick={() => playAudio("pg66_audio26e")}
                                    />
                                </span>
                                <span>olhar</span>
                            </div>
                        </div>
                        <div className={styles["page66__column"]}>
                            <div className={styles["page66__row"]}>
                                <span className={styles["page66__english"]}>
                                    to make
                                    <img
                                        src={eng_audio_icon}
                                        alt="Play Audio"
                                        className={styles["page66__audio-icon"]}
                                        onClick={() => playAudio("pg66_audio27e")}
                                    />
                                </span>
                                <span>fazer</span>
                            </div>
                            <div className={styles["page66__row"]}>
                                <span className={styles["page66__english"]}>
                                    to meet
                                    <img
                                        src={eng_audio_icon}
                                        alt="Play Audio"
                                        className={styles["page66__audio-icon"]}
                                        onClick={() => playAudio("pg66_audio28e")}
                                    />
                                </span>
                                <span>encontrar / conhecer</span>
                            </div>
                        </div>
                        <div className={styles["page66__column"]}>
                            <div className={styles["page66__row"]}>
                                <span className={styles["page66__english"]}>
                                    to need
                                    <img
                                        src={eng_audio_icon}
                                        alt="Play Audio"
                                        className={styles["page66__audio-icon"]}
                                        onClick={() => playAudio("pg66_audio29e")}
                                    />
                                </span>
                                <span>precisar / necessitar</span>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Pagina66;
