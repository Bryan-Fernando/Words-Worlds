import React, { useRef } from 'react';

import styles from './pagina50.module.css';

import iconeE from '../assets/icons/eng_audio_icon.webp';
import iconeP from '../assets/icons/ptbr_audio_icon.webp';

import pagina50_imagem1 from '../assets/images/pagina50_imagem1.webp';
import pagina50_imagem3 from '../assets/images/pagina50_imagem3.webp';
import pagina50_imagem5 from '../assets/images/pagina50_imagem5.webp';
import pagina50_imagem7 from '../assets/images/pagina50_imagem7.webp';
import pagina50_imagem2 from '../assets/images/pagina50_imagem2.webp';
import pagina50_imagem4 from '../assets/images/pagina50_imagem4.webp';
import pagina50_imagem6 from '../assets/images/pagina50_imagem6.webp';
import pagina50_imagem8 from '../assets/images/pagina50_imagem8.webp';

import pg50_audio1e from '../assets/audios/pg50_audio1e.mp3';
import pg50_audio1p from '../assets/audios/pg50_audio1p.mp3';
import pg50_audio2_1e from '../assets/audios/pg50_audio2_1e.mp3';
import pg50_audio2_2e from '../assets/audios/pg50_audio2_2e.mp3';
import pg50_audio3_1e from '../assets/audios/pg50_audio3_1e.mp3';
import pg50_audio3_2e from '../assets/audios/pg50_audio3_2e.mp3';
import pg50_audio4_1e from '../assets/audios/pg50_audio4_1e.mp3';
import pg50_audio4_2e from '../assets/audios/pg50_audio4_2e.mp3';
import pg50_audio5_1e from '../assets/audios/pg50_audio5_1e.mp3';
import pg50_audio5_2e from '../assets/audios/pg50_audio5_2e.mp3';
import pg50_audio6_1e from '../assets/audios/pg50_audio6_1e.mp3';
import pg50_audio6_2e from '../assets/audios/pg50_audio6_2e.mp3';
import pg50_audio7_1e from '../assets/audios/pg50_audio7_1e.mp3';
import pg50_audio7_2e from '../assets/audios/pg50_audio7_2e.mp3';
import pg50_audio8_1e from '../assets/audios/pg50_audio8_1e.mp3';
import pg50_audio8_2e from '../assets/audios/pg50_audio8_2e.mp3';
import pg50_audio9_1e from '../assets/audios/pg50_audio9_1e.mp3';
import pg50_audio9_2e from '../assets/audios/pg50_audio9_2e.mp3';
import pg50_audio2p from '../assets/audios/pg50_audio2p.mp3';
import pg50_audio3p from '../assets/audios/pg50_audio3p.mp3';
import pg50_audio4p from '../assets/audios/pg50_audio4p.mp3';
import pg50_audio5p from '../assets/audios/pg50_audio5p.mp3';
import pg50_audio6p from '../assets/audios/pg50_audio6p.mp3';
import pg50_audio7p from '../assets/audios/pg50_audio7p.mp3';
import pg50_audio8p from '../assets/audios/pg50_audio8p.mp3';
import pg50_audio9p from '../assets/audios/pg50_audio9p.mp3';

const Pagina50 = () => {
    const audioMap = {
        pg50_audio1e,
        pg50_audio1p,
        pg50_audio2_1e,
        pg50_audio2_2e,
        pg50_audio3_1e,
        pg50_audio3_2e,
        pg50_audio4_1e,
        pg50_audio4_2e,
        pg50_audio5_1e,
        pg50_audio5_2e,
        pg50_audio6_1e,
        pg50_audio6_2e,
        pg50_audio7_1e,
        pg50_audio7_2e,
        pg50_audio8_1e,
        pg50_audio8_2e,
        pg50_audio9_1e,
        pg50_audio9_2e,
        pg50_audio2p,
        pg50_audio3p,
        pg50_audio4p,
        pg50_audio5p,
        pg50_audio6p,
        pg50_audio7p,
        pg50_audio8p,
        pg50_audio9p
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
            <div className={styles["page50__container"]}>
                <header className={styles["page50__header"]}>
                    <div className={styles["page50__header--container"]}>
                        <h1 className={styles["page50__header--h1"]}>
                            Grammar - Demonstrative Pronouns
                            <img
                                src={iconeE}
                                alt="English Audio"
                                className={styles["page50__icon"]}
                                onClick={() => playAudio('pg50_audio1e')}
                            />
                            <img
                                src={iconeP}
                                alt="Portuguese Audio"
                                className={styles["page50__icon"]}
                                onClick={() => playAudio('pg50_audio1p')}
                            />
                        </h1>
                    </div>
                    <div className={styles["page50__header--h2-h3"]}>
                        <h2 className={styles["page50__header--h2"]}>
                            This = Este / Esta / Esse / Essa
                        </h2>
                    </div>
                </header>

                <main className={styles["page50__main"]}>
                    <div className={styles["page50__container--1"]}>
                        <div>
                            <div className={styles["page50__div--1-container-1"]}>
                                <img src={pagina50_imagem1} alt="Imagem 1" className={styles["page50__img"]} />
                            </div>
                            <p className={styles["page50__paragrafo--div"]}>
                                <span onClick={() => playAudio('pg50_audio2_1e')}><strong style={{ fontSize: '3rem' }}>Mother</strong></span> <br />
                                <span onClick={() => playAudio('pg50_audio2_2e')}>This is my mother, Susan. She is a teacher</span>
                                <img
                                    src={iconeP}
                                    alt="Portuguese Audio"
                                    className={styles["page50__icon"]}
                                    onClick={() => playAudio('pg50_audio2p')}
                                />
                            </p>
                        </div>
                        <div>
                            <div className={styles["page50__div--2-container-1"]}>
                                <img src={pagina50_imagem3} alt="Imagem 3" className={styles["page50__img"]} />
                            </div>
                            <p className={styles["page50__paragrafo--div"]}>
                                <span onClick={() => playAudio('pg50_audio3_1e')}><strong style={{ fontSize: '3rem' }}>Sister</strong></span> <br />
                                <span onClick={() => playAudio('pg50_audio3_2e')}>This is my sister, Emily. She is a student.</span>
                                <img
                                    src={iconeP}
                                    alt="Portuguese Audio"
                                    className={styles["page50__icon"]}
                                    onClick={() => playAudio('pg50_audio3p')}
                                />
                            </p>
                        </div>
                        <div>
                            <div className={styles["page50__div--3-container-1"]}>
                                <img src={pagina50_imagem5} alt="Imagem 5" className={styles["page50__img"]} />
                            </div>
                            <p className={styles["page50__paragrafo--div"]}>
                                <span onClick={() => playAudio('pg50_audio4_1e')}><strong style={{ fontSize: '3rem' }}>Grandmother</strong> </span><br />
                                <span onClick={() => playAudio('pg50_audio4_2e')}>This is my grandmother, Mary. She loves gardening.</span>
                                <img
                                    src={iconeP}
                                    alt="Portuguese Audio"
                                    className={styles["page50__icon"]}
                                    onClick={() => playAudio('pg50_audio4p')}
                                />
                            </p>
                        </div>
                        <div>
                            <div className={styles["page50__div--4-container-1"]}>
                                <img src={pagina50_imagem7} alt="Imagem 7" className={styles["page50__img"]} />
                            </div>
                            <p className={styles["page50__paragrafo--div"]}>
                                <span onClick={() => playAudio('pg50_audio5_1e')}><strong style={{ fontSize: '3rem' }}>Aunt</strong> </span><br />
                                <span onClick={() => playAudio('pg50_audio5_2e')}>This is my aunt, Linda. She is a talented artist.</span>
                                <img
                                    src={iconeP}
                                    alt="Portuguese Audio"
                                    className={styles["page50__icon"]}
                                    onClick={() => playAudio('pg50_audio5p')}
                                />
                            </p>
                        </div>
                    </div>

                    <div className={styles["page50__container--2"]}>
                        <div>
                            <div className={styles["page50__div--1-container-2"]}>
                                <img src={pagina50_imagem2} alt="Imagem 2" className={styles["page50__img"]} />
                            </div>
                            <p className={styles["page50__paragrafo--div"]}>
                                <span onClick={() => playAudio('pg50_audio6_1e')}><strong style={{ fontSize: '3rem' }}>Father</strong></span> <br />
                                <span onClick={() => playAudio('pg50_audio6_2e')}>This is my father, John. He is an engineer.</span>
                                <img
                                    src={iconeP}
                                    alt="Portuguese Audio"
                                    className={styles["page50__icon"]}
                                    onClick={() => playAudio('pg50_audio6p')}
                                />
                            </p>
                        </div>
                        <div>
                            <div className={styles["page50__div--2-container-2"]}>
                                <img src={pagina50_imagem4} alt="Imagem 4" className={styles["page50__img"]} />
                            </div>
                            <p className={styles["page50__paragrafo--div"]}>
                                <span onClick={() => playAudio('pg50_audio7_1e')}><strong style={{ fontSize: '3rem' }}>Brother</strong></span> <br />
                                <span onClick={() => playAudio('pg50_audio7_2e')}>This is my brother, Michael. He is a doctor.</span>
                                <img
                                    src={iconeP}
                                    alt="Portuguese Audio"
                                    className={styles["page50__icon"]}
                                    onClick={() => playAudio('pg50_audio7p')}
                                />
                            </p>
                        </div>
                        <div>
                            <div className={styles["page50__div--3-container-2"]}>
                                <img src={pagina50_imagem6} alt="Imagem 6" className={styles["page50__img"]} />
                            </div>
                            <p className={styles["page50__paragrafo--div"]}>
                                <span onClick={() => playAudio('pg50_audio8_1e')}><strong style={{ fontSize: '3rem' }}>Grandfather</strong> </span><br />
                                <span onClick={() => playAudio('pg50_audio8_2e')}>This is my grandfather, Robert. He enjoys fishing.</span>
                                <img
                                    src={iconeP}
                                    alt="Portuguese Audio"
                                    className={styles["page50__icon"]}
                                    onClick={() => playAudio('pg50_audio8p')}
                                />
                            </p>
                        </div>
                        <div>
                            <div className={styles["page50__div--4-container-2"]}>
                                <img src={pagina50_imagem8} alt="Imagem 8" className={styles["page50__img"]} />
                            </div>
                            <p className={styles["page50__paragrafo--div"]}>
                                <span onClick={() => playAudio('pg50_audio9_1e')}><strong style={{ fontSize: '3rem' }}>Uncle</strong> </span><br />
                                <span onClick={() => playAudio('pg50_audio9_2e')}>This is my uncle, Peter. He loves to travel.</span>
                                <img
                                    src={iconeP}
                                    alt="Portuguese Audio"
                                    className={styles["page50__icon"]}
                                    onClick={() => playAudio('pg50_audio9p')}
                                />
                            </p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Pagina50;
