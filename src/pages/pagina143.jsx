import React, { useRef } from 'react';
import styles from './pagina143.module.css';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import pagina143_imagem1 from '../assets/images/pagina143_imagem1.webp';
import pagina143_imagem2 from '../assets/images/pagina143_imagem2.webp';
import pagina143_imagem3 from '../assets/images/pagina143_imagem3.webp';
import pagina143_imagem4 from '../assets/images/pagina143_imagem4.webp';
import pagina143_imagem5 from '../assets/images/pagina143_imagem5.webp';

const Pagina143 = () => {
    const currentAudioRef = useRef(null);

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
                Dialogues {renderIcons('pg143_audio1', 'pg143_audio1p')}
            </h1>

            {/* Section A */}
            <section className={styles["page143__section"]}>
                <h2 className={styles["page143__subtitle"]}>
                    a. Actions Happening Now {renderIcons('pg143_audio2', 'pg143_audio2p')}
                </h2>

                {/* Dialogue 1 */}
                <div className={styles["page143__dialogue"]}>
                    <div className={styles["page143__dialogue__text"]}>
                        <p><strong>1. Anna:</strong> Hey, what are you doing? {renderIcons('pg143_audio3', 'pg143_audio3p')}</p>
                        <p><span className={styles["page143__dialogue--person2"]}><strong>John:</strong> I am watching a movie. {renderIcons('pg143_audio4', 'pg143_audio4p')}</span></p>
                        <p><strong>Anna:</strong> Oh, cool! What movie are you watching? {renderIcons('pg143_audio5', 'pg143_audio5p')}</p>
                        <p><span className={styles["page143__dialogue--person2"]}><strong>John:</strong> It’s a new action film. {renderIcons('pg143_audio6', 'pg143_audio6p')}</span></p>
                    </div>
                    <img src={pagina143_imagem1} alt="Imagem 1" className={styles["page143__image"]} />
                </div>

                {/* Dialogue 2 */}
                <div className={styles["page143__dialogue"]}>
                    <div className={styles["page143__dialogue__text"]}>
                        <p><strong>2. Lily:</strong> Hey, what are you doing right now? {renderIcons('pg143_audio7', 'pg143_audio7p')}</p>
                        <p><span className={styles["page143__dialogue--person2"]}><strong>Tom:</strong> I am studying for my math exam. {renderIcons('pg143_audio8', 'pg143_audio8p')}</span></p>
                        <p><strong>Lily:</strong> Oh, sorry to bother you! {renderIcons('pg143_audio9', 'pg143_audio9p')}</p>
                        <p><span className={styles["page143__dialogue--person2"]}><strong>Tom:</strong> No problem! I am just taking a short break. {renderIcons('pg143_audio10', 'pg143_audio10p')}</span></p>
                    </div>
                    <img src={pagina143_imagem2} alt="Imagem 2" className={styles["page143__image"]} />
                </div>
            </section>

            {/* Section B */}
            <section className={styles["page143__section"]}>
                <h2 className={styles["page143__subtitle"]}>
                    b. Temporary Actions {renderIcons('pg143_audio11', 'pg143_audio11p')}
                </h2>

                <div className={styles["page143__dialogue"]}>
                    <div className={styles["page143__dialogue__text"]}>
                        <p><strong>1. Emma:</strong> Why is Tom staying at a hotel? {renderIcons('pg143_audio12', 'pg143_audio12p')}</p>
                        <p><span className={styles["page143__dialogue--person2"]}><strong>Mike:</strong> He is renovating his apartment. {renderIcons('pg143_audio13', 'pg143_audio13p')}</span></p>
                    </div>
                    <img src={pagina143_imagem3} alt="Imagem 3" className={styles["page143__image"]} />
                </div>

                <div className={styles["page143__dialogue"]}>
                    <div className={styles["page143__dialogue__text"]}>
                        <p><strong>2. Emma:</strong> Why is David living with his sister? {renderIcons('pg143_audio14', 'pg143_audio14p')}</p>
                        <p><span className={styles["page143__dialogue--person2"]}><strong>Jake:</strong> He is waiting for his new apartment to be ready. {renderIcons('pg143_audio15', 'pg143_audio15p')}</span></p>
                        <p><strong>Emma:</strong> Oh, that makes sense! {renderIcons('pg143_audio16', 'pg143_audio16p')}</p>
                        <p><span className={styles["page143__dialogue--person2"]}><strong>Jake:</strong> Yeah, he is just staying there for a few weeks. {renderIcons('pg143_audio17', 'pg143_audio17p')}</span></p>
                    </div>
                </div>
            </section>

            {/* Section C */}
            <section className={styles["page143__section"]}>
                <h2 className={styles["page143__subtitle"]}>
                    c. Future Plans (Arrangements) {renderIcons('pg143_audio18', 'pg143_audio18p')}
                </h2>

                <div className={styles["page143__dialogue"]}>
                    <div className={styles["page143__dialogue__text"]}>
                        <p><strong>1. Sarah:</strong> What are you doing this weekend? {renderIcons('pg143_audio19', 'pg143_audio19p')}</p>
                        <p><span className={styles["page143__dialogue--person2"]}><strong>Mark:</strong> I am visiting my grandparents. {renderIcons('pg143_audio20', 'pg143_audio20p')}</span></p>
                        <p><strong>Sarah:</strong> That sounds nice! {renderIcons('pg143_audio21', 'pg143_audio21p')}</p>
                    </div>
                    <img src={pagina143_imagem4} alt="Imagem 4" className={styles["page143__image"]} />
                </div>

                <div className={styles["page143__dialogue"]}>
                    <div className={styles["page143__dialogue__text"]}>
                        <p><strong>2. Sophia:</strong> What are you doing this weekend? {renderIcons('pg143_audio22', 'pg143_audio22p')}</p>
                        <p><span className={styles["page143__dialogue--person2"]}><strong>James:</strong> I am going to a concert with my friends. {renderIcons('pg143_audio23', 'pg143_audio23p')}</span></p>
                        <p><strong>Sophia:</strong> That sounds fun! Who is performing? {renderIcons('pg143_audio24', 'pg143_audio24p')}</p>
                        <p><span className={styles["page143__dialogue--person2"]}><strong>James:</strong> A new band called “The Soundwaves.” {renderIcons('pg143_audio25', 'pg143_audio25p')}</span></p>
                    </div>
                    <img src={pagina143_imagem5} alt="Imagem 5" className={styles["page143__image"]} />
                </div>
            </section>
        </div>
    );
};

export default Pagina143;