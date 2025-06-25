import React, { useRef } from 'react';
import styles from './pagina143.module.css';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import pagina143_imagem1 from '../assets/images/pagina143_imagem1.webp';
import pagina143_imagem2 from '../assets/images/pagina143_imagem2.webp';
import pagina143_imagem3 from '../assets/images/pagina143_imagem3.webp';
import pagina143_imagem4 from '../assets/images/pagina143_imagem4.webp';
import pagina143_imagem5 from '../assets/images/pagina143_imagem5.webp';

import pg143_audio1e from '../assets/audios/pg143_audio1e.mp3';
import pg143_audio2e from '../assets/audios/pg143_audio2e.mp3';
import pg143_audio3e from '../assets/audios/pg143_audio3e.mp3';
import pg143_audio4e from '../assets/audios/pg143_audio4e.mp3';
import pg143_audio5e from '../assets/audios/pg143_audio5e.mp3';
import pg143_audio6e from '../assets/audios/pg143_audio6e.mp3';
import pg143_audio7e from '../assets/audios/pg143_audio7e.mp3';
import pg143_audio8e from '../assets/audios/pg143_audio8e.mp3';
import pg143_audio9e from '../assets/audios/pg143_audio9e.mp3';
import pg143_audio10e from '../assets/audios/pg143_audio10e.mp3';
import pg143_audio11e from '../assets/audios/pg143_audio11e.mp3';
import pg143_audio12e from '../assets/audios/pg143_audio12e.mp3';
import pg143_audio13e from '../assets/audios/pg143_audio13e.mp3';
import pg143_audio14e from '../assets/audios/pg143_audio14e.mp3';
import pg143_audio15e from '../assets/audios/pg143_audio15e.mp3';
import pg143_audio16e from '../assets/audios/pg143_audio16e.mp3';
import pg143_audio17e from '../assets/audios/pg143_audio17e.mp3';
import pg143_audio18e from '../assets/audios/pg143_audio18e.mp3';
import pg143_audio19e from '../assets/audios/pg143_audio19e.mp3';
import pg143_audio20e from '../assets/audios/pg143_audio20e.mp3';
import pg143_audio21e from '../assets/audios/pg143_audio21e.mp3';
import pg143_audio22e from '../assets/audios/pg143_audio22e.mp3';
import pg143_audio23e from '../assets/audios/pg143_audio23e.mp3';
import pg143_audio24e from '../assets/audios/pg143_audio24e.mp3';
import pg143_audio25e from '../assets/audios/pg143_audio25e.mp3';

import pg143_audio1p from '../assets/audios/pg143_audio1p.mp3';
import pg143_audio2p from '../assets/audios/pg143_audio2p.mp3';
import pg143_audio3p from '../assets/audios/pg143_audio3p.mp3';
import pg143_audio4p from '../assets/audios/pg143_audio4p.mp3';
import pg143_audio5p from '../assets/audios/pg143_audio5p.mp3';
import pg143_audio6p from '../assets/audios/pg143_audio6p.mp3';
import pg143_audio7p from '../assets/audios/pg143_audio7p.mp3';
import pg143_audio8p from '../assets/audios/pg143_audio8p.mp3';
import pg143_audio9p from '../assets/audios/pg143_audio9p.mp3';
import pg143_audio10p from '../assets/audios/pg143_audio10p.mp3';
import pg143_audio11p from '../assets/audios/pg143_audio11p.mp3';
import pg143_audio12p from '../assets/audios/pg143_audio12p.mp3';
import pg143_audio13p from '../assets/audios/pg143_audio13p.mp3';
import pg143_audio14p from '../assets/audios/pg143_audio14p.mp3';
import pg143_audio15p from '../assets/audios/pg143_audio15p.mp3';
import pg143_audio16p from '../assets/audios/pg143_audio16p.mp3';
import pg143_audio17p from '../assets/audios/pg143_audio17p.mp3';
import pg143_audio18p from '../assets/audios/pg143_audio18p.mp3';
import pg143_audio19p from '../assets/audios/pg143_audio19p.mp3';
import pg143_audio20p from '../assets/audios/pg143_audio20p.mp3';
import pg143_audio21p from '../assets/audios/pg143_audio21p.mp3';
import pg143_audio22p from '../assets/audios/pg143_audio22p.mp3';
import pg143_audio23p from '../assets/audios/pg143_audio23p.mp3';
import pg143_audio24p from '../assets/audios/pg143_audio24p.mp3';
import pg143_audio25p from '../assets/audios/pg143_audio25p.mp3';

const Pagina143 = () => {
    const currentAudioRef = useRef(null);

    const audioMap = {
        pg143_audio1e, pg143_audio1p,
        pg143_audio2e, pg143_audio2p,
        pg143_audio3e, pg143_audio3p,
        pg143_audio4e, pg143_audio4p,
        pg143_audio5e, pg143_audio5p,
        pg143_audio6e, pg143_audio6p,
        pg143_audio7e, pg143_audio7p,
        pg143_audio8e, pg143_audio8p,
        pg143_audio9e, pg143_audio9p,
        pg143_audio10e, pg143_audio10p,
        pg143_audio11e, pg143_audio11p,
        pg143_audio12e, pg143_audio12p,
        pg143_audio13e, pg143_audio13p,
        pg143_audio14e, pg143_audio14p,
        pg143_audio15e, pg143_audio15p,
        pg143_audio16e, pg143_audio16p,
        pg143_audio17e, pg143_audio17p,
        pg143_audio18e, pg143_audio18p,
        pg143_audio19e, pg143_audio19p,
        pg143_audio20e, pg143_audio20p,
        pg143_audio21e, pg143_audio21p,
        pg143_audio22e, pg143_audio22p,
        pg143_audio23e, pg143_audio23p,
        pg143_audio24e, pg143_audio24p,
        pg143_audio25e, pg143_audio25p,
    };


    const playAudio = (audioKey) => {
        if (currentAudioRef.current) {
            currentAudioRef.current.pause();
            currentAudioRef.current.currentTime = 0;
        }
        const audio = new Audio(audioMap[audioKey]);
        currentAudioRef.current = audio;
        audio.play();
    };

    const renderIcons = (engKey, ptKey) => (
        <span className={styles["page143__icons-container"]}>
            <img
                src={eng_audio_icon}
                alt="English Audio"
                className={styles["page143__icon"]}
                onClick={() => playAudio(engKey)}
            />
            <img
                src={ptbr_audio_icon}
                alt="Portuguese Audio"
                className={styles["page143__icon"]}
                onClick={() => playAudio(ptKey)}
            />
        </span>
    );

    return (
        <div className={styles["page143"]}>
            <h1 className={styles["page143__title"]}>
                Dialogues {renderIcons('pg143_audio1e', 'pg143_audio1p')}
            </h1>

            {/* Section A */}
            <section className={styles["page143__section"]}>
                <h2 className={styles["page143__subtitle"]}>
                    a. Actions Happening Now {renderIcons('pg143_audio2e', 'pg143_audio2p')}
                </h2>

                {/* Dialogue 1 */}
                <div className={styles["page143__dialogue"]}>
                    <div className={styles["page143__dialogue__text"]}>
                        <p><strong>1. Anna:</strong> Hey, what are you doing? {renderIcons('pg143_audio3e', 'pg143_audio3p')}</p>
                        <p><span className={styles["page143__dialogue--person2"]}><strong>John:</strong> I am watching a movie. {renderIcons('pg143_audio4e', 'pg143_audio4p')}</span></p>
                        <p><strong>Anna:</strong> Oh, cool! What movie are you watching? {renderIcons('pg143_audio5e', 'pg143_audio5p')}</p>
                        <p><span className={styles["page143__dialogue--person2"]}><strong>John:</strong> It’s a new action film. {renderIcons('pg143_audio6e', 'pg143_audio6p')}</span></p>
                    </div>
                    <img src={pagina143_imagem1} alt="Imagem 1" className={styles["page143__image"]} />
                </div>

                {/* Dialogue 2 */}
                <div className={styles["page143__dialogue"]}>
                    <div className={styles["page143__dialogue__text"]}>
                        <p><strong>2. Lily:</strong> Hey, what are you doing right now? {renderIcons('pg143_audio7e', 'pg143_audio7p')}</p>
                        <p><span className={styles["page143__dialogue--person2"]}><strong>Tom:</strong> I am studying for my math exam. {renderIcons('pg143_audio8e', 'pg143_audio8p')}</span></p>
                        <p><strong>Lily:</strong> Oh, sorry to bother you! {renderIcons('pg143_audio9e', 'pg143_audio9p')}</p>
                        <p><span className={styles["page143__dialogue--person2"]}><strong>Tom:</strong> No problem! I am just taking a short break. {renderIcons('pg143_audio10e', 'pg143_audio10p')}</span></p>
                    </div>
                    <img src={pagina143_imagem2} alt="Imagem 2" className={styles["page143__image"]} />
                </div>
            </section>

            {/* Section B */}
            <section className={styles["page143__section"]}>
                <h2 className={styles["page143__subtitle"]}>
                    b. Temporary Actions {renderIcons('pg143_audio11e', 'pg143_audio11p')}
                </h2>

                <div className={styles["page143__dialogue"]}>
                    <div className={styles["page143__dialogue__text"]}>
                        <p><strong>1. Emma:</strong> Why is Tom staying at a hotel? {renderIcons('pg143_audio12e', 'pg143_audio12p')}</p>
                        <p><span className={styles["page143__dialogue--person2"]}><strong>Mike:</strong> He is renovating his apartment. {renderIcons('pg143_audio13e', 'pg143_audio13p')}</span></p>
                    </div>
                    <img src={pagina143_imagem3} alt="Imagem 3" className={styles["page143__image"]} />
                </div>

                <div className={styles["page143__dialogue"]}>
                    <div className={styles["page143__dialogue__text"]}>
                        <p><strong>2. Emma:</strong> Why is David living with his sister? {renderIcons('pg143_audio14e', 'pg143_audio14p')}</p>
                        <p><span className={styles["page143__dialogue--person2"]}><strong>Jake:</strong> He is waiting for his new apartment to be ready. {renderIcons('pg143_audio15e', 'pg143_audio15p')}</span></p>
                        <p><strong>Emma:</strong> Oh, that makes sense! {renderIcons('pg143_audio16e', 'pg143_audio16p')}</p>
                        <p><span className={styles["page143__dialogue--person2"]}><strong>Jake:</strong> Yeah, he is just staying there for a few weeks. {renderIcons('pg143_audio17e', 'pg143_audio17p')}</span></p>
                    </div>
                </div>
            </section>

            {/* Section C */}
            <section className={styles["page143__section"]}>
                <h2 className={styles["page143__subtitle"]}>
                    c. Future Plans (Arrangements) {renderIcons('pg143_audio18e', 'pg143_audio18p')}
                </h2>

                <div className={styles["page143__dialogue"]}>
                    <div className={styles["page143__dialogue__text"]}>
                        <p><strong>1. Sarah:</strong> What are you doing this weekend? {renderIcons('pg143_audio19e', 'pg143_audio19p')}</p>
                        <p><span className={styles["page143__dialogue--person2"]}><strong>Mark:</strong> I am visiting my grandparents. {renderIcons('pg143_audio20e', 'pg143_audio20p')}</span></p>
                        <p><strong>Sarah:</strong> That sounds nice! {renderIcons('pg143_audio21e', 'pg143_audio21p')}</p>
                    </div>
                    <img src={pagina143_imagem4} alt="Imagem 4" className={styles["page143__image"]} />
                </div>

                <div className={styles["page143__dialogue"]}>
                    <div className={styles["page143__dialogue__text"]}>
                        <p><strong>2. Sophia:</strong> What are you doing this weekend? {renderIcons('pg143_audio22e', 'pg143_audio22p')}</p>
                        <p><span className={styles["page143__dialogue--person2"]}><strong>James:</strong> I am going to a concert with my friends. {renderIcons('pg143_audio23e', 'pg143_audio23p')}</span></p>
                        <p><strong>Sophia:</strong> That sounds fun! Who is performing? {renderIcons('pg143_audio24e', 'pg143_audio24p')}</p>
                        <p><span className={styles["page143__dialogue--person2"]}><strong>James:</strong> A new band called “The Soundwaves.” {renderIcons('pg143_audio25e', 'pg143_audio25p')}</span></p>
                    </div>
                    <img src={pagina143_imagem5} alt="Imagem 5" className={styles["page143__image"]} />
                </div>
            </section>
        </div>
    );
};

export default Pagina143;