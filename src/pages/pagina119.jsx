import React, { useRef } from 'react';
import styles from './pagina119.module.css';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import pagina118_imagem1 from '../assets/images/pagina119_imagem1.gif';

// Áudios inglês
import pg119_audio1 from '../assets/audios/pg119_audio1.mp3';
import pg119_audio2 from '../assets/audios/pg119_audio2.mp3';
import pg119_audio3 from '../assets/audios/pg119_audio3.mp3';
import pg119_audio4 from '../assets/audios/pg119_audio4.mp3';
import pg119_audio5 from '../assets/audios/pg119_audio5.mp3';
import pg119_audio6 from '../assets/audios/pg119_audio6.mp3';
import pg119_audio7 from '../assets/audios/pg119_audio7.mp3';
import pg119_audio8 from '../assets/audios/pg119_audio8.mp3';
import pg119_audio9 from '../assets/audios/pg119_audio9.mp3';
import pg119_audio10 from '../assets/audios/pg119_audio10.mp3';
import pg119_audio11 from '../assets/audios/pg119_audio11.mp3';
import pg119_audio12 from '../assets/audios/pg119_audio12.mp3';
import pg119_audio13 from '../assets/audios/pg119_audio13.mp3';
import pg119_audio14 from '../assets/audios/pg119_audio14.mp3';
import pg119_audio15 from '../assets/audios/pg119_audio15.mp3';
import pg119_audio16 from '../assets/audios/pg119_audio16.mp3';
import pg119_audio17 from '../assets/audios/pg119_audio17.mp3';
import pg119_audio18 from '../assets/audios/pg119_audio18.mp3';
import pg119_audio19 from '../assets/audios/pg119_audio19.mp3';
import pg119_audio20 from '../assets/audios/pg119_audio20.mp3';
import pg119_audio21 from '../assets/audios/pg119_audio21.mp3';
import pg119_audio22 from '../assets/audios/pg119_audio22.mp3';

// Áudios português
import pg119_audio1p from '../assets/audios/pg119_audio1p.mp3';
import pg119_audio2p from '../assets/audios/pg119_audio2p.mp3';
import pg119_audio3p from '../assets/audios/pg119_audio3p.mp3';
import pg119_audio4p from '../assets/audios/pg119_audio4p.mp3';
import pg119_audio5p from '../assets/audios/pg119_audio5p.mp3';
import pg119_audio6p from '../assets/audios/pg119_audio6p.mp3';
import pg119_audio7p from '../assets/audios/pg119_audio7p.mp3';
import pg119_audio8p from '../assets/audios/pg119_audio8p.mp3';
import pg119_audio9p from '../assets/audios/pg119_audio9p.mp3';
import pg119_audio10p from '../assets/audios/pg119_audio10p.mp3';
import pg119_audio11p from '../assets/audios/pg119_audio11p.mp3';
import pg119_audio12p from '../assets/audios/pg119_audio12p.mp3';
import pg119_audio13p from '../assets/audios/pg119_audio13p.mp3';
import pg119_audio14p from '../assets/audios/pg119_audio14p.mp3';
import pg119_audio15p from '../assets/audios/pg119_audio15p.mp3';
import pg119_audio16p from '../assets/audios/pg119_audio16p.mp3';
import pg119_audio17p from '../assets/audios/pg119_audio17p.mp3';
import pg119_audio18p from '../assets/audios/pg119_audio18p.mp3';
import pg119_audio19p from '../assets/audios/pg119_audio19p.mp3';
import pg119_audio20p from '../assets/audios/pg119_audio20p.mp3';
import pg119_audio21p from '../assets/audios/pg119_audio21p.mp3';

const audioMap = {
    pg119_audio1, pg119_audio2, pg119_audio3, pg119_audio4, pg119_audio5,
    pg119_audio6, pg119_audio7, pg119_audio8, pg119_audio9, pg119_audio10,
    pg119_audio11, pg119_audio12, pg119_audio13, pg119_audio14, pg119_audio15,
    pg119_audio16, pg119_audio17, pg119_audio18, pg119_audio19, pg119_audio20,
    pg119_audio21, pg119_audio22,

    pg119_audio1p, pg119_audio2p, pg119_audio3p, pg119_audio4p, pg119_audio5p,
    pg119_audio6p, pg119_audio7p, pg119_audio8p, pg119_audio9p, pg119_audio10p,
    pg119_audio11p, pg119_audio12p, pg119_audio13p, pg119_audio14p, pg119_audio15p,
    pg119_audio16p, pg119_audio17p, pg119_audio18p, pg119_audio19p, pg119_audio20p,
    pg119_audio21p
};

const Pagina119 = () => {
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
        <span className={styles["page119__icons-container"]}>
            <img
                src={eng_audio_icon}
                alt="English Audio"
                className={styles["page119__icon"]}
                onClick={() => playAudio(engKey)}
            />
            <img
                src={ptbr_audio_icon}
                alt="Portuguese Audio"
                className={styles["page119__icon"]}
                onClick={() => playAudio(ptKey)}
            />
        </span>
    );

    return (
        <div className={styles["page119__container"]}>
            <header className={styles["page119__header"]}>
                <h1 className={styles["page119__header--h1"]}>
                    Real-life Conversation {renderIcons('pg119_audio1', 'pg119_audio1p')}
                </h1>
                <div className={styles["page119__header--divider"]}>
                    <div className={styles["page119__header--icon"]}></div>
                    <h2 className={styles["page119__subtitle"]}>
                        1. Present Simple Tense
                    </h2>
                    <p className={styles["page119__subtext"]}>
                        Presente Simples
                    </p>
                </div>
            </header>

            <main className={styles["page119__main"]}>
                <div className={styles["page119__frame--text"]}>
                    <p>
                        Story/Dialogue Idea: “A day in My Life“ {renderIcons('pg119_audio3', 'pg119_audio2p')}
                        Characters: John and Sarah {renderIcons('pg119_audio4', 'pg119_audio3p')}
                        <br />
                        Setting: A café, talking about daily routines {renderIcons('pg119_audio5', 'pg119_audio4p')}
                    </p>
                </div>

                <div className={styles["page119__container--text"]}>
                    <h3>Dialogue: {renderIcons('pg119_audio6', 'pg119_audio5p')}</h3>
                    <p>John: Hi, Sarah! How are you? {renderIcons('pg119_audio7', 'pg119_audio6p')}</p>
                    <p className={styles["page119__text--red"]}>
                        Sarah: I’m great, John! How about you? {renderIcons('pg119_audio8', 'pg119_audio7p')}
                    </p>
                    <p>John: I’m good too. So, what’s your typical day like? {renderIcons('pg119_audio9', 'pg119_audio8p')}</p>
                    <p className={styles["page119__text--red"]}>
                        Sarah: Well, I usually wake up at 6:30 in the morning. {renderIcons('pg119_audio10', 'pg119_audio9p')}
                        I make coffee and eat breakfast. {renderIcons('pg119_audio11', 'pg119_audio10p')}
                        Then, I leave for work at 8 a.m. {renderIcons('pg119_audio12', 'pg119_audio11p')}
                    </p>
                    <p>John: Do you walk to work? {renderIcons('pg119_audio13', 'pg119_audio12p')}</p>
                    <p className={styles["page119__text--red"]}>
                        Sarah: No, I take the bus. {renderIcons('pg119_audio14', 'pg119_audio13p')}
                        It’s faster. {renderIcons('pg119_audio15', 'pg119_audio14p')}
                        I work from 9 a.m. to 5 p.m. {renderIcons('pg119_audio16', 'pg119_audio15p')}
                        After work, I sometimes go to the gym or watch TV at home. {renderIcons('pg119_audio17', 'pg119_audio16p')}
                        What about you? {renderIcons('pg119_audio18', 'pg119_audio17p')}
                    </p>
                    <p>
                        John: My routine is similar. {renderIcons('pg119_audio19', 'pg119_audio18p')}
                        I wake up at 7 a.m., have breakfast, and drive to work. {renderIcons('pg119_audio20', 'pg119_audio19p')}
                        I work until 6 p.m. In the evenings, I like to cook dinner and read a book before going to bed. {renderIcons('pg119_audio21', 'pg119_audio20p')}
                    </p>
                </div>

                <div className={styles["page119__frame--text--gray"]}>
                    <p>
                        <span className={styles["page119__title--bold"]}>Focus:</span> Routine actions, habits, and frequency adverbs like “usually“ and “sometimes“ {renderIcons('pg119_audio22', 'pg119_audio21p')}
                    </p>
                </div>

                <div className={styles["page119__container--image"]}>
                    <img className={styles["page119__image"]} src={pagina118_imagem1} alt="Conversation Scene" />
                </div>
            </main>
        </div>
    );
};

export default Pagina119;
