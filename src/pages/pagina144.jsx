import React, { useRef } from 'react';
import styles from './pagina144.module.css';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import pagina144_imagem1 from '../assets/images/pagina144_imagem1.webp';

import pg144_audio1e from '../assets/audios/pg144_audio1e.mp3';
import pg144_audio1p from '../assets/audios/pg144_audio1p.mp3';
import pg144_audio2e from '../assets/audios/pg144_audio2e.mp3';
import pg144_audio2p from '../assets/audios/pg144_audio2p.mp3';
import pg144_audio3e from '../assets/audios/pg144_audio3e.mp3';
import pg144_audio3p from '../assets/audios/pg144_audio3p.mp3';
import pg144_audio4e from '../assets/audios/pg144_audio4e.mp3';
import pg144_audio4p from '../assets/audios/pg144_audio4p.mp3';
import pg144_audio5e from '../assets/audios/pg144_audio5e.mp3';
import pg144_audio5p from '../assets/audios/pg144_audio5p.mp3';
import pg143_audio1e from '../assets/audios/pg143_audio1e.mp3';
import pg143_audio1p from '../assets/audios/pg143_audio1p.mp3';


const Pagina144 = () => {
    const currentAudioRef = useRef(null);

    const audioMap = {
        pg144_audio1e,
        pg144_audio1p,
        pg144_audio2e,
        pg144_audio2p,
        pg144_audio3e,
        pg144_audio3p,
        pg144_audio4e,
        pg144_audio4p,
        pg144_audio5e,
        pg144_audio5p,
        pg143_audio1e,
        pg143_audio1p,
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
        <span className={styles["page144__icons-container"]}>
            <img
                src={eng_audio_icon}
                alt="English Audio"
                className={styles["page144__icon"]}
                onClick={() => playAudio(engKey)}
            />
            <img
                src={ptbr_audio_icon}
                alt="Portuguese Audio"
                className={styles["page144__icon"]}
                onClick={() => playAudio(ptKey)}
            />
        </span>
    );

    return (
        <div className={styles["page144"]}>
            <h1 className={styles["page144__title"]}>
                Dialogues {renderIcons('pg143_audio1e', 'pg143_audio1p')}
            </h1>

            <section className={styles["page144__section"]}>
                <h2 className={styles["page144__subtitle"]}>
                    4. Something Happening Around Now (Not Exactly Right Now) {renderIcons('pg144_audio1e', 'pg144_audio1p')}
                </h2>

                <div className={styles["page144__dialogue"]}>
                    <div className={styles["page144__dialogue__text"]}>
                        <p><strong>Anna:</strong> I am reading a great book these days. {renderIcons('pg144_audio2e', 'pg144_audio2p')}</p>
                        <p>
                            <span className={styles["page144__dialogue--person2"]}>
                                <strong>Mike:</strong> Really? What's it about? {renderIcons('pg144_audio3e', 'pg144_audio3p')}
                            </span>
                        </p>
                        <p><strong>Anna:</strong> It's a mystery novel. I am really enjoying it! {renderIcons('pg144_audio4e', 'pg144_audio4p')}</p>
                        <p>
                            <span className={styles["page144__dialogue--person2"]}>
                                <strong>Mike:</strong> Sounds interesting! {renderIcons('pg144_audio5e', 'pg144_audio5p')}
                            </span>
                        </p>
                    </div>
                    <img
                        src={pagina144_imagem1}
                        alt="Person reading a book"
                        className={styles["page144__image"]}
                    />
                </div>
            </section>
        </div>
    );
};

export default Pagina144;
