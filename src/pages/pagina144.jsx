import React, { useRef } from 'react';
import styles from './pagina144.module.css';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import pagina144_imagem1 from '../assets/images/pagina144_imagem1.webp';


const Pagina144 = () => {
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
                Dialogues {renderIcons('pg144_audio1', 'pg144_audio1p')}
            </h1>

            <section className={styles["page144__section"]}>
                <h2 className={styles["page144__subtitle"]}>
                    4. Something Happening Around Now (Not Exactly Right Now) {renderIcons('pg144_audio2', 'pg144_audio2p')}
                </h2>

                <div className={styles["page144__dialogue"]}>
                    <div className={styles["page144__dialogue__text"]}>
                        <p><strong>Anna:</strong> I am reading a great book these days. {renderIcons('pg144_audio3', 'pg144_audio3p')}</p>
                        <p>
                            <span className={styles["page144__dialogue--person2"]}>
                                <strong>Mike:</strong> Really? What's it about? {renderIcons('pg144_audio4', 'pg144_audio4p')}
                            </span>
                        </p>
                        <p><strong>Anna:</strong> It's a mystery novel. I am really enjoying it! {renderIcons('pg144_audio5', 'pg144_audio5p')}</p>
                        <p>
                            <span className={styles["page144__dialogue--person2"]}>
                                <strong>Mike:</strong> Sounds interesting! {renderIcons('pg144_audio6', 'pg144_audio6p')}
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
