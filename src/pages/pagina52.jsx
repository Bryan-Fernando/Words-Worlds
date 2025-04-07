import React, { useRef } from 'react';

import styles from './pagina52.module.css';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import pagina52_imagem1 from '../assets/images/pagina52_imagem1.webp';
import pagina52_imagem2 from '../assets/images/pagina52_imagem2.webp';
import pagina52_imagem3 from '../assets/images/pagina52_imagem3.webp';
import pagina52_imagem4 from '../assets/images/pagina52_imagem4.webp';
import pagina52_imagem5 from '../assets/images/pagina52_imagem5.webp';
import pagina52_imagem6 from '../assets/images/pagina52_imagem6.webp';

import audio1e from '../assets/audios/pg50_audio1e.mp3';
import audio1p from '../assets/audios/pg50_audio1p.mp3';
import audio2h from '../assets/audios/pg52_audio2H.mp3';
import audio1 from '../assets/audios/pg52_audio1.mp3';
import audio2 from '../assets/audios/pg52_audio2.mp3';
import audio3 from '../assets/audios/pg52_audio3.mp3';
import audio4 from '../assets/audios/pg52_audio4.mp3';
import audio5 from '../assets/audios/pg52_audio5.mp3';
import audio6 from '../assets/audios/pg52_audio6.mp3';
import audio2p from '../assets/audios/pg52_audio2p.mp3';
import audio3p from '../assets/audios/pg52_audio3p.mp3';
import audio4p from '../assets/audios/pg52_audio4p.mp3';
import audio5p from '../assets/audios/pg52_audio5p.mp3';
import audio6p from '../assets/audios/pg52_audio6p.mp3';
import audio7p from '../assets/audios/pg52_audio7p.mp3';

const Pagina52 = () => {
    const audioMap = {
        'pg52_audio1e': audio1e,
        'pg52_audio1p': audio1p,
        'pg52_audio2H': audio2h,
        'pg52_audio1': audio1,
        'pg52_audio2': audio2,
        'pg52_audio3': audio3,
        'pg52_audio4': audio4,
        'pg52_audio5': audio5,
        'pg52_audio6': audio6,
        'pg52_audio2p': audio2p,
        'pg52_audio3p': audio3p,
        'pg52_audio4p': audio4p,
        'pg52_audio5p': audio5p,
        'pg52_audio6p': audio6p,
        'pg52_audio7p': audio7p,
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
            <div className={styles["page52__container"]}>
                <header className={styles["page52__header"]}>
                    <h1 className={styles["page52__header--h1"]}>
                        Grammar - Demonstrative Pronouns
                        <img src={eng_audio_icon} alt="English Audio" className={styles["page52__icon"]} onClick={() => playAudio('pg52_audio1e')} />
                        <img src={ptbr_audio_icon} alt="Portuguese Audio" className={styles["page52__icon"]} onClick={() => playAudio('pg52_audio1p')} />
                    </h1>
                    <div className={styles["page52__header--h2-h3"]}>
                        <h2 className={styles["page52__header--h2"]}>
                            That = Aquele / Aquela
                        </h2>
                    </div>
                </header>
                <main className={styles["page52__main"]}>
                    <div className={styles["page52__container--1"]}>
                        <div>
                            <div className={styles["page52__div--1-container-1"]}>
                                <img src={pagina52_imagem1} alt="Imagem 1" className={styles["page52__img"]} />
                            </div>
                            <p className={styles["page52__paragrafo--div"]}>
                                <span>That is your office</span>
                                <img
                                    src={eng_audio_icon}
                                    alt="English Audio"
                                    className={styles["page52__icon"]}
                                    onClick={() => playAudio('pg52_audio1')}
                                />
                                <img
                                    src={ptbr_audio_icon}
                                    alt="Portuguese Audio"
                                    className={styles["page52__icon"]}
                                    onClick={() => playAudio('pg52_audio2p')}
                                />
                            </p>
                        </div>
                        <div>
                            <div className={styles["page52__div--2-container-1"]}>
                                <img src={pagina52_imagem3} alt="Imagem 2" className={styles["page52__img"]} />
                            </div>
                            <p className={styles["page52__paragrafo--div"]}>
                                <span>That is my brother John</span> in the green shirt and brown pants.
                                <img
                                    src={eng_audio_icon}
                                    alt="English Audio"
                                    className={styles["page52__icon"]}
                                    onClick={() => playAudio('pg52_audio2')}
                                />
                                <img
                                    src={ptbr_audio_icon}
                                    alt="Portuguese Audio"
                                    className={styles["page52__icon"]}
                                    onClick={() => playAudio('pg52_audio3p')}
                                />
                            </p>
                        </div>
                        <div>
                            <div className={styles["page52__div--3-container-1"]}>
                                <img src={pagina52_imagem5} alt="Imagem 3" className={styles["page52__img"]} />
                            </div>
                            <p className={styles["page52__paragrafo--div"]}>
                                <span>That is my sister Joan</span> and my cousin Maria.
                                <img
                                    src={eng_audio_icon}
                                    alt="English Audio"
                                    className={styles["page52__icon"]}
                                    onClick={() => playAudio('pg52_audio3')}
                                />
                                <img
                                    src={ptbr_audio_icon}
                                    alt="Portuguese Audio"
                                    className={styles["page52__icon"]}
                                    onClick={() => playAudio('pg52_audio4p')}
                                />
                            </p>
                        </div>
                    </div>

                    <div className={styles["page52__container--2"]}>
                        <div>
                            <div className={styles["page52__div--1-container-2"]}>
                                <img src={pagina52_imagem2} alt="Imagem 4" className={styles["page52__img"]} />
                            </div>
                            <p className={styles["page52__paragrafo--div"]}>
                                <span>That is Mr. Batista</span>, the new director.
                                <img
                                    src={eng_audio_icon}
                                    alt="English Audio"
                                    className={styles["page52__icon"]}
                                    onClick={() => playAudio('pg52_audio4')}
                                />
                                <img
                                    src={ptbr_audio_icon}
                                    alt="Portuguese Audio"
                                    className={styles["page52__icon"]}
                                    onClick={() => playAudio('pg52_audio5p')}
                                />
                            </p>
                        </div>
                        <div>
                            <div className={styles["page52__div--2-container-2"]}>
                                <img src={pagina52_imagem4} alt="Imagem 5" className={styles["page52__img"]} />
                            </div>
                            <p className={styles["page52__paragrafo--div"]}>
                                <span>That is my cousin Gary</span>.
                                <img
                                    src={eng_audio_icon}
                                    alt="English Audio"
                                    className={styles["page52__icon"]}
                                    onClick={() => playAudio('pg52_audio5')}
                                />
                                <img
                                    src={ptbr_audio_icon}
                                    alt="Portuguese Audio"
                                    className={styles["page52__icon"]}
                                    onClick={() => playAudio('pg52_audio6p')}
                                />
                            </p>
                        </div>
                        <div>
                            <div className={styles["page52__div--3-container-2"]}>
                                <img src={pagina52_imagem6} alt="Imagem 6" className={styles["page52__img"]} />
                            </div>
                            <p className={styles["page52__paragrafo--div"]}>
                                <span>That is my sister Julia</span> <br />in the yellow blouse and blue skirt.
                                <img
                                    src={eng_audio_icon}
                                    alt="English Audio"
                                    className={styles["page52__icon"]}
                                    onClick={() => playAudio('pg52_audio6')}
                                />
                                <img
                                    src={ptbr_audio_icon}
                                    alt="Portuguese Audio"
                                    className={styles["page52__icon"]}
                                    onClick={() => playAudio('pg52_audio7p')}
                                />
                            </p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Pagina52;
