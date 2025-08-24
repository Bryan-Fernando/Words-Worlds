import React, { useRef } from 'react';

import styles from './pagina57.module.css';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import pagina57_imagem1 from '../assets/images/pagina57_imagem1.webp';
import pagina57_imagem2 from '../assets/images/pagina57_imagem2.webp';

import pg57_audio1e from '../assets/audios/pg57_audio1e.mp3';
import pg57_audio1p from '../assets/audios/pg57_audio1p.mp3';
import pg57_audio2 from '../assets/audios/pg57_audio2.mp3';
import pg57_audio3 from '../assets/audios/pg57_audio3.mp3';
import pg57_audio4 from '../assets/audios/pg57_audio4.mp3';
import pg57_audio5 from '../assets/audios/pg57_audio5.mp3';
import pg57_audio6 from '../assets/audios/pg57_audio6.mp3';
import pg57_audio7 from '../assets/audios/pg57_audio7.mp3';
import pg57_audio8 from '../assets/audios/pg57_audio8.mp3';
import pg57_audio9 from '../assets/audios/pg57_audio9.mp3';
import pg57_audio10 from '../assets/audios/pg57_audio10.mp3';
import pg57_audio11 from '../assets/audios/pg57_audio11.mp3';
import pg57_audio12 from '../assets/audios/pg57_audio12.mp3';
import pg57_audio13 from '../assets/audios/pg57_audio13.mp3';
import pg57_audio14 from '../assets/audios/pg57_audio14.mp3';
import pg57_audio15 from '../assets/audios/pg57_audio15.mp3';
import pg57_audio16 from '../assets/audios/pg57_audio16.mp3';
import pg57_audio17 from '../assets/audios/pg57_audio17.mp3';
import pg57_audio18 from '../assets/audios/pg57_audio18.mp3';
import pg57_audio19 from '../assets/audios/pg57_audio19.mp3';
import pg57_audio20 from '../assets/audios/pg57_audio20.mp3';
import pg57_audio21 from '../assets/audios/pg57_audio21.mp3';
import pg57_audio22 from '../assets/audios/pg57_audio22.mp3';
import pg57_audio23 from '../assets/audios/pg57_audio23.mp3';
import pg57_audio24 from '../assets/audios/pg57_audio24.mp3';
import pg57_audio25 from '../assets/audios/pg57_audio25.mp3';
import pg57_audio26 from '../assets/audios/pg57_audio26.mp3';
import pg57_audio27 from '../assets/audios/pg57_audio27.mp3';
import pg57_audio28 from '../assets/audios/pg57_audio28.mp3';
import pg57_audio29 from '../assets/audios/pg57_audio29.mp3';
import pg57_audio30 from '../assets/audios/pg57_audio30.mp3';
import pg57_audio31 from '../assets/audios/pg57_audio31.mp3';
import pg57_audio32 from '../assets/audios/pg57_audio32.mp3';
import pg57_audio33 from '../assets/audios/pg57_audio33.mp3';
import pg57_audio34 from '../assets/audios/pg57_audio34.mp3';
import pg57_audio35 from '../assets/audios/pg57_audio35.mp3';
import pg57_audio36 from '../assets/audios/pg57_audio36.mp3';
import pg57_audio37 from '../assets/audios/pg57_audio37.mp3';
import pg57_audio38 from '../assets/audios/pg57_audio38.mp3';
import pg57_audio39 from '../assets/audios/pg57_audio39.mp3';
import pg57_audio40 from '../assets/audios/pg57_audio40.mp3';
import pg57_audio41 from '../assets/audios/pg57_audio41.mp3';
import pg57_audio42 from '../assets/audios/pg57_audio42.mp3';
import pg57_audio43 from '../assets/audios/pg57_audio43.mp3';
import pg57_audio44 from '../assets/audios/pg57_audio44.mp3';
import pg57_audio45 from '../assets/audios/pg57_audio45.mp3';
import pg57_audio46 from '../assets/audios/pg57_audio46.mp3';
import pg57_audio47 from '../assets/audios/pg57_audio47.mp3';
import pg57_audio48 from '../assets/audios/pg57_audio48.mp3';
import pg57_audio49 from '../assets/audios/pg57_audio49.mp3';
import pg57_audio50 from '../assets/audios/pg57_audio50.mp3';
import pg57_audio51 from '../assets/audios/pg57_audio51.mp3';
import pg57_audio52 from '../assets/audios/pg57_audio52.mp3';
import pg57_audio53 from '../assets/audios/pg57_audio53.mp3';
import pg57_audio54 from '../assets/audios/pg57_audio54.mp3';
import pg57_audio55 from '../assets/audios/pg57_audio55.mp3';

const Pagina57 = () => {

    const audioMap = {
        pg57_audio1e,
        pg57_audio1p,
        pg57_audio2,
        pg57_audio3,
        pg57_audio4,
        pg57_audio5,
        pg57_audio6,
        pg57_audio7,
        pg57_audio8,
        pg57_audio9,
        pg57_audio10,
        pg57_audio11,
        pg57_audio12,
        pg57_audio13,
        pg57_audio14,
        pg57_audio15,
        pg57_audio16,
        pg57_audio17,
        pg57_audio18,
        pg57_audio19,
        pg57_audio20,
        pg57_audio21,
        pg57_audio22,
        pg57_audio23,
        pg57_audio24,
        pg57_audio25,
        pg57_audio26,
        pg57_audio27,
        pg57_audio28,
        pg57_audio29,
        pg57_audio30,
        pg57_audio31,
        pg57_audio32,
        pg57_audio33,
        pg57_audio34,
        pg57_audio35,
        pg57_audio36,
        pg57_audio37,
        pg57_audio38,
        pg57_audio39,
        pg57_audio40,
        pg57_audio41,
        pg57_audio42,
        pg57_audio43,
        pg57_audio44,
        pg57_audio45,
        pg57_audio46,
        pg57_audio47,
        pg57_audio48,
        pg57_audio49,
        pg57_audio50,
        pg57_audio51,
        pg57_audio52,
        pg57_audio53,
        pg57_audio54,
        pg57_audio55
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
            <div className={styles["page57__container"]}>
                <header className={styles["page57__header"]}>
                    <h1 className={styles["page57__title"]}>
                        Asking and Giving <br /> Personal - Information
                        <img
                            src={eng_audio_icon}
                            alt="English Audio"
                            className={styles["page57__icon"]}
                            onClick={() => playAudio('pg57_audio1e')}
                        />
                        <img
                            src={ptbr_audio_icon}
                            alt="Portuguese Audio"
                            className={styles["page57__icon"]}
                            onClick={() => playAudio('pg57_audio1p')}
                        />
                    </h1>
                    <h1 className={styles["page57__title"]}>Vocabulary: Numbers 0-10</h1>
                </header>
                <main className={styles["page57__main"]}>
                    <div className={styles["page57__numbers"]}>
                        {[...Array(11)].map((_, index) => (
                            <div key={index} onClick={() => playAudio(`pg57_audio${index + 2}`)} style={{ cursor: 'pointer' }}>
                                <div className={styles["page57__number-box"]}>
                                    <p>{index}</p>
                                </div>
                                <p>{["zero (oh)", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"][index]}</p>
                            </div>
                        ))}
                    </div>

                    <div className={styles["page57__contacts"]}>
                        <div className={styles["page57__contacts-content"]}>
                            <div>
                                <h2 className={styles["page57__title--phone"]}>
                                    Phone numbers and email addresses
                                    <img
                                        src={eng_audio_icon}
                                        alt="English Audio"
                                        className={styles["page57__icon"]}
                                        onClick={() => playAudio('pg57_audio13')}
                                    />
                                </h2>
                            </div>

                            <p>
                                Ana: Hey, Julie. What’s your cell phone number?
                                <img
                                    src={eng_audio_icon}
                                    alt="English Audio"
                                    className={styles["page57__icon"]}
                                    onClick={() => playAudio('pg57_audio14')}
                                />
                                <br />

                                Julie: It’s 308-187-0745.
                                <img
                                    src={eng_audio_icon}
                                    alt="English Audio"
                                    className={styles["page57__icon"]}
                                    onClick={() => playAudio('pg57_audio15')}
                                />
                                <br />

                                Ana: What’s your email address?
                                <img
                                    src={eng_audio_icon}
                                    alt="English Audio"
                                    className={styles["page57__icon"]}
                                    onClick={() => playAudio('pg57_audio16')}
                                />
                                <br />

                                Julie: It’s <span className={styles["page57__email"]}>julie@gmail.com.</span>
                                <img
                                    src={eng_audio_icon}
                                    alt="English Audio"
                                    className={styles["page57__icon"]}
                                    onClick={() => playAudio('pg57_audio17')}
                                />
                                <br />

                                Ana: Thanks!
                                <img
                                    src={eng_audio_icon}
                                    alt="English Audio"
                                    className={styles["page57__icon"]}
                                    onClick={() => playAudio('pg57_audio18')}
                                />
                            </p>

                            <div className={styles["page57__gray-box"]} style={{ fontWeight: "bold" }}>
                                <p>Nos endereços de email:</p>
                                <ul>
                                    <li>
                                        ‘‘.’’ = ‘‘dot’’
                                        <img
                                            src={eng_audio_icon}
                                            alt="English Audio"
                                            className={styles["page57__icon"]}
                                            onClick={() => playAudio('pg57_audio53')}
                                        />
                                    </li>
                                    <li>
                                        ‘‘@’’ = ‘‘at’’
                                        <img
                                            src={eng_audio_icon}
                                            alt="English Audio"
                                            className={styles["page57__icon"]}
                                            onClick={() => playAudio('pg57_audio54')}
                                        />
                                    </li>
                                    <li>
                                        ‘‘_’’ = ‘‘underscore’’
                                        <img
                                            src={eng_audio_icon}
                                            alt="English Audio"
                                            className={styles["page57__icon"]}
                                            onClick={() => playAudio('pg57_audio55')}
                                        />
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <img className={styles["page57__image"]} src={pagina57_imagem1} alt="Duas pessoas conversando" />
                    </div>

                    <h2 className={styles["page57__title--alphabet"]}>
                        Vocabulary: The alphabet
                        <img
                            src={eng_audio_icon}
                            alt="English Audio"
                            className={styles["page57__icon"]}
                            onClick={() => playAudio('pg57_audio19')}
                        />
                    </h2>

                    <div className={styles["page57__alphabet"]}>
                        <div className={styles["page57__letters"]}>
                            {[...'ABCDEFGHIJKLM'].map((letter, index) => (
                                <div key={letter} onClick={() => playAudio(`pg57_audio${20 + index}`)} style={{ cursor: 'pointer' }}>
                                    <div className={styles["page57__letter-box"]}>
                                        <p>{letter}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className={styles["page57__letters"]}>
                            {[...'NOPQRSTUVWXYZ'].map((letter, index) => (
                                <div key={letter} onClick={() => playAudio(`pg57_audio${33 + index}`)} style={{ cursor: 'pointer' }}>
                                    <div className={styles["page57__letter-box"]}>
                                        <p>{letter}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={styles["page57__spelling"]}>
                        <div className={styles["page57__spelling-content"]}>
                            <div>
                                <h2 className={styles["page57__title--spelling"]}>
                                    Spelling names / Soletrando (Escrevendo) nomes
                                    <img
                                        src={eng_audio_icon}
                                        alt="English Audio"
                                        className={styles["page57__icon"]}
                                        onClick={() => playAudio('pg57_audio46')}
                                    />
                                </h2>
                            </div>
                            <p>
                                John: Hello. My name is John Black.
                                <img
                                    src={eng_audio_icon}
                                    alt="English Audio"
                                    className={styles["page57__icon"]}
                                    onClick={() => playAudio('pg57_audio47')}
                                />
                                <br />

                                Clerk: How do you spell your first name?
                                <img
                                    src={eng_audio_icon}
                                    alt="English Audio"
                                    className={styles["page57__icon"]}
                                    onClick={() => playAudio('pg57_audio48')}
                                />
                                <br />

                                John:
                                <span className={styles["page57__spelling-word"]}>
                                    J-O-H-N
                                    <img
                                        src={eng_audio_icon}
                                        alt="English Audio"
                                        className={styles["page57__icon"]}
                                        onClick={() => playAudio('pg57_audio49')}
                                    />
                                </span>
                                <br />

                                Clerk: And how do you spell your last name?
                                <img
                                    src={eng_audio_icon}
                                    alt="English Audio"
                                    className={styles["page57__icon"]}
                                    onClick={() => playAudio('pg57_audio50')}
                                />
                                <br />

                                John:
                                <span className={styles["page57__spelling-word"]}>
                                    B-L-A-C-K.
                                    <img
                                        src={eng_audio_icon}
                                        alt="English Audio"
                                        className={styles["page57__icon"]}
                                        onClick={() => playAudio('pg57_audio51')}
                                    />
                                </span>
                            </p>
                        </div>
                        <img className={styles["page57__image"]} src={pagina57_imagem2} alt="Pessoa sendo atendida" />
                    </div>


                </main>
                <div className={styles["page57__alphabet"]}>
                    <div className={styles["page57__letters"]}>
                        {[...'ABCDEFGHIJKLM'].map((letter, index) => (
                            <div key={letter} onClick={() => playAudio(`pg57_audio${20 + index}`)} style={{ cursor: 'pointer' }}>
                                <div className={styles["page57__letter-box"]}>
                                    <p>{letter.toLowerCase()}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={styles["page57__letters"]}>
                        {[...'NOPQRSTUVWXYZ'].map((letter, index) => (
                            <div key={letter} onClick={() => playAudio(`pg57_audio${33 + index}`)} style={{ cursor: 'pointer' }}>
                                <div className={styles["page57__letter-box"]}>
                                    <p>{letter.toLowerCase()}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Pagina57;
