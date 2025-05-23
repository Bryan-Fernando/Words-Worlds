import React, { useRef } from 'react';

import styles from './pagina51.module.css';

import iconeE from '../assets/icons/eng_audio_icon.webp';
import iconeP from '../assets/icons/ptbr_audio_icon.webp';

import pagina51_imagem1 from '../assets/images/pagina51_imagem1.webp';
import pagina51_imagem2 from '../assets/images/pagina51_imagem2.webp';
import pagina51_imagem3 from '../assets/images/pagina51_imagem3.webp';
import pagina51_imagem4 from '../assets/images/pagina51_imagem4.webp';
import pagina51_imagem5 from '../assets/images/pagina51_imagem5.webp';
import pagina51_imagem6 from '../assets/images/pagina51_imagem6.webp';
import pagina51_imagem7 from '../assets/images/pagina51_imagem7.webp';

import pg50_audio1e from '../assets/audios/pg50_audio1e.mp3';
import pg50_audio1p from '../assets/audios/pg50_audio1p.mp3';
import pg51_audio2_1e from '../assets/audios/pg51_audio2_1e.mp3';
import pg51_audio2_2e from '../assets/audios/pg51_audio2_2e.mp3';
import pg51_audio3_1e from '../assets/audios/pg51_audio3_1e.mp3';
import pg51_audio3_2e from '../assets/audios/pg51_audio3_2e.mp3';
import pg51_audio4_1e from '../assets/audios/pg51_audio4_1e.mp3';
import pg51_audio4_2e from '../assets/audios/pg51_audio4_2e.mp3';
import pg51_audio5_1e from '../assets/audios/pg51_audio5_1e.mp3';
import pg51_audio5_2e from '../assets/audios/pg51_audio5_2e.mp3';
import pg51_audio6_1e from '../assets/audios/pg51_audio6_1e.mp3';
import pg51_audio6_2e from '../assets/audios/pg51_audio6_2e.mp3';
import pg51_audio7_1e from '../assets/audios/pg51_audio7_1e.mp3';
import pg51_audio7_2e from '../assets/audios/pg51_audio7_2e.mp3';
import pg51_audio8_1e from '../assets/audios/pg51_audio8_1e.mp3';
import pg51_audio8_2e from '../assets/audios/pg51_audio8_2e.mp3';
import pg51_audio2p from '../assets/audios/pg51_audio2p.mp3';
import pg51_audio3p from '../assets/audios/pg51_audio3p.mp3';
import pg51_audio4p from '../assets/audios/pg51_audio4p.mp3';
import pg51_audio5p from '../assets/audios/pg51_audio5p.mp3';
import pg51_audio6p from '../assets/audios/pg51_audio6p.mp3';
import pg51_audio7p from '../assets/audios/pg51_audio7p.mp3';
import pg51_audio8p from '../assets/audios/pg51_audio8p.mp3';

const Pagina51 = () => {
    const audioMap = {
        pg50_audio1e,
        pg50_audio1p,
        pg51_audio2_1e,
        pg51_audio2_2e,
        pg51_audio3_1e,
        pg51_audio3_2e,
        pg51_audio4_1e,
        pg51_audio4_2e,
        pg51_audio5_1e,
        pg51_audio5_2e,
        pg51_audio6_1e,
        pg51_audio6_2e,
        pg51_audio7_1e,
        pg51_audio7_2e,
        pg51_audio8_1e,
        pg51_audio8_2e,
        pg51_audio2p,
        pg51_audio3p,
        pg51_audio4p,
        pg51_audio5p,
        pg51_audio6p,
        pg51_audio7p,
        pg51_audio8p,
    };

    const currentAudio = useRef(null);

    const playAudio = (audioId) => {
        if (currentAudio.current) {
            currentAudio.current.pause();
            currentAudio.current.currentTime = 0;
        }

        const audio = new Audio(audioMap[audioId]);
        currentAudio.current = audio;
        audio.play();
    };

    return (
        <div>
            <div className={styles["page51__container"]}>
                <header className={styles["page51__header"]}>
                    <h1 className={styles["page51__header--h1"]}>
                        Grammar - Demonstrative Pronouns
                        <img
                            src={iconeE}
                            alt="English Audio"
                            className={styles["page51__icon"]}
                            onClick={() => playAudio('pg50_audio1e')}
                        />
                        <img
                            src={iconeP}
                            alt="Portuguese Audio"
                            className={styles["page51__icon"]}
                            onClick={() => playAudio('pg50_audio1p')}
                        />
                    </h1>
                    <div className={styles["page51__header--h2-h3"]}>
                        <h2 className={styles["page51__header--h2"]}>
                            This = Este / Esta / Esse / Essa
                        </h2>
                    </div>
                </header>
                <main className={styles["page51__main"]}>
                    <div className={styles["page51__container--1"]}>
                        <div>
                            <div className={styles["page51__div--1-container-1"]}>
                                <img src={pagina51_imagem1} alt="Imagem 1" className={styles["page51__img"]} />
                            </div>
                            <p className={styles["page51__paragrafo--div"]}>
                                <span onClick={() => playAudio('pg51_audio2_1e')}><strong>Best Friend</strong></span><br />
                                <span onClick={() => playAudio('pg51_audio2_2e')}>This is my best friend, Alex.</span>
                                <span>
                                    <img
                                        src={iconeP}
                                        alt="Portuguese Audio"
                                        className={styles["page51__icon"]}
                                        onClick={() => playAudio('pg51_audio2p')}
                                    />
                                </span>
                            </p>
                        </div>
                        <div>
                            <div className={styles["page51__div--2-container-1"]}>
                                <img src={pagina51_imagem3} alt="Imagem 3" className={styles["page51__img"]} />
                            </div>
                            <p className={styles["page51__paragrafo--div"]}>
                                <span onClick={() => playAudio('pg51_audio3_1e')}><strong>Work Friend</strong></span><br />
                                <span onClick={() => playAudio('pg51_audio3_2e')}>This is my work friend, James. He is very helpful and kind.</span>
                                <span>
                                    <img
                                        src={iconeP}
                                        alt="Portuguese Audio"
                                        className={styles["page51__icon"]}
                                        onClick={() => playAudio('pg51_audio3p')}
                                    />
                                </span>
                            </p>
                        </div>
                        <div>
                            <div className={styles["page51__div--3-container-1"]}>
                                <img src={pagina51_imagem5} alt="Imagem 5" className={styles["page51__img"]} />
                            </div>
                            <p className={styles["page51__paragrafo--div"]}>
                                <span onClick={() => playAudio('pg51_audio4_1e')}><strong>Gym Friend</strong></span><br />
                                <span onClick={() => playAudio('pg51_audio4_2e')}>This is my gym friend, David. He motivates me to stay fit.</span>
                                <span>
                                    <img
                                        src={iconeP}
                                        alt="Portuguese Audio"
                                        className={styles["page51__icon"]}
                                        onClick={() => playAudio('pg51_audio4p')}
                                    />
                                </span>
                            </p>
                        </div>
                        <div>
                            <div className={styles["page51__div--4-container-1"]}>
                                <img src={pagina51_imagem7} alt="Imagem 4" className={styles["page51__img"]} />
                            </div>
                            <p className={styles["page51__paragrafo--div"]}>
                                <span onClick={() => playAudio('pg51_audio5_1e')}><strong>Online Friend</strong></span><br />
                                <span onClick={() => playAudio('pg51_audio5_2e')}>This is my online friend, Sam.</span>
                                <span>
                                    <img
                                        src={iconeP}
                                        alt="Portuguese Audio"
                                        className={styles["page51__icon"]}
                                        onClick={() => playAudio('pg51_audio5p')}
                                    />
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className={styles["page51__container--2"]}>
                        <div>
                            <div className={styles["page51__div--1-container-2"]}>
                                <img src={pagina51_imagem2} alt="Imagem 5" className={styles["page51__img"]} />
                            </div>
                            <p className={styles["page51__paragrafo--div"]}>
                                <span onClick={() => playAudio('pg51_audio6_1e')}><strong>School Friend</strong></span><br />
                                <span onClick={() => playAudio('pg51_audio6_2e')}>This is my school friend, Emma. She is very good at math.</span>
                                <span>
                                    <img
                                        src={iconeP}
                                        alt="Portuguese Audio"
                                        className={styles["page51__icon"]}
                                        onClick={() => playAudio('pg51_audio6p')}
                                    />
                                </span>
                            </p>
                        </div>
                        <div>
                            <div className={styles["page51__div--2-container-2"]}>
                                <img src={pagina51_imagem4} alt="Imagem 6" className={styles["page51__img"]} />
                            </div>
                            <p className={styles["page51__paragrafo--div"]}>
                                <span onClick={() => playAudio('pg51_audio7_1e')}><strong>Neighbor Friend</strong></span><br />
                                <span onClick={() => playAudio('pg51_audio7_2e')}>This is my neighbor friend, Sarah. We often go jogging together.</span>
                                <span>
                                    <img
                                        src={iconeP}
                                        alt="Portuguese Audio"
                                        className={styles["page51__icon"]}
                                        onClick={() => playAudio('pg51_audio7p')}
                                    />
                                </span>
                            </p>
                        </div>
                        <div>
                            <div className={styles["page51__div--3-container-2"]}>
                                <img src={pagina51_imagem6} alt="Imagem 7" className={styles["page51__img"]} />
                            </div>
                            <p className={styles["page51__paragrafo--div"]}>
                                <span onClick={() => playAudio('pg51_audio8_1e')}><strong>College Friend</strong></span><br />
                                <span onClick={() => playAudio('pg51_audio8_2e')}>This is my college friend, Rachel.</span>
                                <span>
                                    <img
                                        src={iconeP}
                                        alt="Portuguese Audio"
                                        className={styles["page51__icon"]}
                                        onClick={() => playAudio('pg51_audio8p')}
                                    />
                                </span>
                            </p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Pagina51;
