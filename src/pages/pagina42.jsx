import React, { useState, useRef } from 'react';

import styles from './pagina42.module.css';

import pg42IconNotes from '../assets/icons/notes_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';

import pagina42_imagem1 from '../assets/images/pagina42_imagem1.webp';
import pagina42_imagem2 from '../assets/images/pagina42_imagem2.webp';
import pagina42_imagem3 from '../assets/images/pagina42_imagem3.webp';
import pagina42_imagem4 from '../assets/images/pagina42_imagem4.webp';
import pagina42_imagem5 from '../assets/images/pagina42_imagem5.webp';
import pagina42_imagem6 from '../assets/images/pagina42_imagem6.webp';

import global_intro_e from '../assets/audios/global_intro_e.mp3';
import global_intro_p from '../assets/audios/global_intro_p.mp3';
import audio1e from '../assets/audios/pg42_audio1e.mp3';
import audio1p from '../assets/audios/pg42_audio1p.mp3';
import audio2e from '../assets/audios/pg42_audio2e.mp3';
import audio2p from '../assets/audios/pg42_audio2p.mp3';
import audio3e from '../assets/audios/pg42_audio3e.mp3';
import audio3p from '../assets/audios/pg42_audio3p.mp3';
import audio4e from '../assets/audios/pg42_audio4e.mp3';
import audio4p from '../assets/audios/pg42_audio4p.mp3';
import audio5e from '../assets/audios/pg42_audio5e.mp3';
import audio5p from '../assets/audios/pg42_audio5p.mp3';
import audio6e from '../assets/audios/pg42_audio6e.mp3';
import audio6p from '../assets/audios/pg42_audio6p.mp3';
import audio7e from '../assets/audios/pg42_audio7e.mp3';
import audio7p from '../assets/audios/pg42_audio7p.mp3';
import audio8e from '../assets/audios/pg42_audio8e.mp3';
import audio8p from '../assets/audios/pg42_audio8p.mp3';
import audio9e from '../assets/audios/pg42_audio9e.mp3';
import audio9p from '../assets/audios/pg42_audio9p.mp3';
import audio10e from '../assets/audios/pg42_audio10e.mp3';
import audio10p from '../assets/audios/pg42_audio10p.mp3';
import audio11e from '../assets/audios/pg42_audio11e.mp3';
import audio11p from '../assets/audios/pg42_audio11p.mp3';
import audio12e from '../assets/audios/pg42_audio12e.mp3';
import audio12p from '../assets/audios/pg42_audio12p.mp3';
import audio13e from '../assets/audios/pg42_audio13e.mp3';
import audio13p from '../assets/audios/pg42_audio13p.mp3';
import audio14e from '../assets/audios/pg42_audio14e.mp3';
import audio14p from '../assets/audios/pg42_audio14p.mp3';
import audio15e from '../assets/audios/pg42_audio15e.mp3';
import audio15p from '../assets/audios/pg42_audio15p.mp3';
import audio16e from '../assets/audios/pg42_audio16e.mp3';
import audio16p from '../assets/audios/pg42_audio16p.mp3';
import audio17e from '../assets/audios/pg42_audio17e.mp3';
import audio17p from '../assets/audios/pg42_audio17p.mp3';
import audio18e from '../assets/audios/pg42_audio18e.mp3';
import audio18p from '../assets/audios/pg42_audio18p.mp3';
import audio19e from '../assets/audios/pg42_audio19e.mp3';
import audio19p from '../assets/audios/pg42_audio19p.mp3';
import audio20e from '../assets/audios/pg42_audio20e.mp3';
import audio20p from '../assets/audios/pg42_audio20p.mp3';

const Pagina42 = () => {
    const audioMap = {
        'pg42_audio1e': audio1e,
        'pg42_audio1p': audio1p,
        'pg42_audio2e': audio2e,
        'pg42_audio2p': audio2p,
        'pg42_audio3e': audio3e,
        'pg42_audio3p': audio3p,
        'pg42_audio4e': audio4e,
        'pg42_audio4p': audio4p,
        'pg42_audio5e': audio5e,
        'pg42_audio5p': audio5p,
        'pg42_audio6e': audio6e,
        'pg42_audio6p': audio6p,
        'pg42_audio7e': audio7e,
        'pg42_audio7p': audio7p,
        'pg42_audio8e': audio8e,
        'pg42_audio8p': audio8p,
        'pg42_audio9e': audio9e,
        'pg42_audio9p': audio9p,
        'pg42_audio10e': audio10e,
        'pg42_audio10p': audio10p,
        'pg42_audio11e': audio11e,
        'pg42_audio11p': audio11p,
        'pg42_audio12e': audio12e,
        'pg42_audio12p': audio12p,
        'pg42_audio13e': audio13e,
        'pg42_audio13p': audio13p,
        'pg42_audio14e': audio14e,
        'pg42_audio14p': audio14p,
        'pg42_audio15e': audio15e,
        'pg42_audio15p': audio15p,
        'pg42_audio16e': audio16e,
        'pg42_audio16p': audio16p,
        'pg42_audio17e': audio17e,
        'pg42_audio17p': audio17p,
        'pg42_audio18e': audio18e,
        'pg42_audio18p': audio18p,
        'pg42_audio19e': audio19e,
        'pg42_audio19p': audio19p,
        'pg42_audio20e': audio20e,
        'pg42_audio20p': audio20p,
    };

    const currentAudio = useRef(null);

    const playHeaderAudio = (audioFile) => {
        const audio = new Audio(audioFile);
        audio.play();
    };

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
            <div className={styles['page42__container']}>
                <header className={styles['page42__header']}>
                    <h1 className={styles['page42__header-title']} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                        Introductions
                        <span>
                            <img
                                src={eng_audio_icon}
                                alt="English Audio"
                                style={{ width: '1.8rem', height: '1.8rem', cursor: 'pointer' }}
                                onClick={() => playHeaderAudio(global_intro_e)}
                            />
                            <img
                                src={ptbr_audio_icon}
                                alt="Portuguese Audio"
                                style={{ width: '1.8rem', height: '1.8rem', marginLeft: '0.3rem', cursor: 'pointer' }}
                                onClick={() => playHeaderAudio(global_intro_p)}
                            />
                        </span>
                    </h1>
                </header>
                <main className={styles['page42__main']}>
                    <div className={styles['page42__people-container']}>
                        {/* Person 1 */}
                        <div className={styles['page42__person-wrapper']}>
                            <div className={styles['page42__person--1']}>
                                <img className={styles['page42__person-image--1']} src={pagina42_imagem1} alt="" />
                                <p>
                                    Name: I’m Eric Porto.
                                    <img
                                        src={eng_audio_icon}
                                        alt="English audio"
                                        className={styles['page42__audio-icon']}
                                        onClick={() => playAudio('pg42_audio1e')}
                                    />
                                    <img
                                        src={ptbr_audio_icon}
                                        alt="Portuguese audio"
                                        className={styles['page42__audio-icon']}
                                        onClick={() => playAudio('pg42_audio1p')}
                                    />
                                    <br />
                                    Age: I’m 32 (thirty-two) years old.
                                    <img
                                        src={eng_audio_icon}
                                        alt="English audio"
                                        className={styles['page42__audio-icon']}
                                        onClick={() => playAudio('pg42_audio2e')}
                                    />
                                    <img
                                        src={ptbr_audio_icon}
                                        alt="Portuguese audio"
                                        className={styles['page42__audio-icon']}
                                        onClick={() => playAudio('pg42_audio2p')}
                                    />
                                    <br />
                                    Nationality: I’m Brazilian.
                                    <img
                                        src={eng_audio_icon}
                                        alt="English audio"
                                        className={styles['page42__audio-icon']}
                                        onClick={() => playAudio('pg42_audio3e')}
                                    />
                                    <img
                                        src={ptbr_audio_icon}
                                        alt="Portuguese audio"
                                        className={styles['page42__audio-icon']}
                                        onClick={() => playAudio('pg42_audio3p')}
                                    />
                                    <br />
                                    City: I’m from Paraty.
                                    <img
                                        src={eng_audio_icon}
                                        alt="English audio"
                                        className={styles['page42__audio-icon']}
                                        onClick={() => playAudio('pg42_audio4e')}
                                    />
                                    <img
                                        src={ptbr_audio_icon}
                                        alt="Portuguese audio"
                                        className={styles['page42__audio-icon']}
                                        onClick={() => playAudio('pg42_audio4p')}
                                    />
                                    <br />
                                </p>
                            </div>
                            <hr className={styles['page42__separator']} />
                        </div>

                        {/* Person 2 */}
                        <div className={styles['page42__person-wrapper']}>
                            <div className={styles['page42__person--2']}>
                                <p>
                                    Name: This is my friend Marilia Alves.
                                    <img
                                        src={eng_audio_icon}
                                        alt="English audio"
                                        className={styles['page42__audio-icon']}
                                        onClick={() => playAudio('pg42_audio5e')}
                                    />
                                    <img
                                        src={ptbr_audio_icon}
                                        alt="Portuguese audio"
                                        className={styles['page42__audio-icon']}
                                        onClick={() => playAudio('pg42_audio5p')}
                                    />
                                    <br />
                                    Age: She’s 31 (thirty-one) years old.
                                    <img
                                        src={eng_audio_icon}
                                        alt="English audio"
                                        className={styles['page42__audio-icon']}
                                        onClick={() => playAudio('pg42_audio6e')}
                                    />
                                    <img
                                        src={ptbr_audio_icon}
                                        alt="Portuguese audio"
                                        className={styles['page42__audio-icon']}
                                        onClick={() => playAudio('pg42_audio6p')}
                                    />
                                    <br />
                                    Nationality: She is Brazilian.
                                    <img
                                        src={eng_audio_icon}
                                        alt="English audio"
                                        className={styles['page42__audio-icon']}
                                        onClick={() => playAudio('pg42_audio7e')}
                                    />
                                    <img
                                        src={ptbr_audio_icon}
                                        alt="Portuguese audio"
                                        className={styles['page42__audio-icon']}
                                        onClick={() => playAudio('pg42_audio7p')}
                                    />
                                    <br />
                                    City: She’s from Paraty.
                                    <img
                                        src={eng_audio_icon}
                                        alt="English audio"
                                        className={styles['page42__audio-icon']}
                                        onClick={() => playAudio('pg42_audio8e')}
                                    />
                                    <img
                                        src={ptbr_audio_icon}
                                        alt="Portuguese audio"
                                        className={styles['page42__audio-icon']}
                                        onClick={() => playAudio('pg42_audio8p')}
                                    />
                                    <br />
                                </p>
                                <img className={styles['page42__person-image--2']} src={pagina42_imagem2} alt="" />
                            </div>
                            <hr className={styles['page42__separator']} />
                        </div>

                        {/* Person 3 */}
                        <div className={styles['page42__person-wrapper']}>
                            <div className={styles['page42__person--3']}>
                                <img className={styles['page42__person-image--3']} src={pagina42_imagem3} alt="" />
                                <p>
                                    Name: This is Deborah Sena.
                                    <img
                                        src={eng_audio_icon}
                                        alt="English audio"
                                        className={styles['page42__audio-icon']}
                                        onClick={() => playAudio('pg42_audio9e')}
                                    />
                                    <img
                                        src={ptbr_audio_icon}
                                        alt="Portuguese audio"
                                        className={styles['page42__audio-icon']}
                                        onClick={() => playAudio('pg42_audio9p')}
                                    />
                                    <br />
                                    Age: She is 36 (thirty-six) years old.
                                    <img
                                        src={eng_audio_icon}
                                        alt="English audio"
                                        className={styles['page42__audio-icon']}
                                        onClick={() => playAudio('pg42_audio10e')}
                                    />
                                    <img
                                        src={ptbr_audio_icon}
                                        alt="Portuguese audio"
                                        className={styles['page42__audio-icon']}
                                        onClick={() => playAudio('pg42_audio10p')}
                                    />
                                    <br />
                                    Nationality: Brazilian and Portuguese.
                                    <img
                                        src={eng_audio_icon}
                                        alt="English audio"
                                        className={styles['page42__audio-icon']}
                                        onClick={() => playAudio('pg42_audio11e')}
                                    />
                                    <img
                                        src={ptbr_audio_icon}
                                        alt="Portuguese audio"
                                        className={styles['page42__audio-icon']}
                                        onClick={() => playAudio('pg42_audio11p')}
                                    />
                                    <br />
                                    City: She’s originally from Angra dos Reis but lives in Calgary - Canada.
                                    <img
                                        src={eng_audio_icon}
                                        alt="English audio"
                                        className={styles['page42__audio-icon']}
                                        onClick={() => playAudio('pg42_audio12e')}
                                    />
                                    <img
                                        src={ptbr_audio_icon}
                                        alt="Portuguese audio"
                                        className={styles['page42__audio-icon']}
                                        onClick={() => playAudio('pg42_audio12p')}
                                    />
                                    <br />
                                </p>
                            </div>
                            <hr className={styles['page42__separator']} />
                        </div>

                        {/* Person 4 */}
                        <div className={styles['page42__person-wrapper']}>
                            <div className={styles['page42__person--4']}>
                                <p>
                                    Name: Mei Lazari.
                                    <img
                                        src={eng_audio_icon}
                                        alt="English audio"
                                        className={styles['page42__audio-icon']}
                                        onClick={() => playAudio('pg42_audio13e')}
                                    />
                                    <img
                                        src={ptbr_audio_icon}
                                        alt="Portuguese audio"
                                        className={styles['page42__audio-icon']}
                                        onClick={() => playAudio('pg42_audio13p')}
                                    />
                                    <br />
                                    Age: He’s 36 (thirty-six) years old.
                                    <img
                                        src={eng_audio_icon}
                                        alt="English audio"
                                        className={styles['page42__audio-icon']}
                                        onClick={() => playAudio('pg42_audio14e')}
                                    />
                                    <img
                                        src={ptbr_audio_icon}
                                        alt="Portuguese audio"
                                        className={styles['page42__audio-icon']}
                                        onClick={() => playAudio('pg42_audio14p')}
                                    />
                                    <br />
                                    Nationality: He’s Brazilian.
                                    <img
                                        src={eng_audio_icon}
                                        alt="English audio"
                                        className={styles['page42__audio-icon']}
                                        onClick={() => playAudio('pg42_audio15e')}
                                    />
                                    <img
                                        src={ptbr_audio_icon}
                                        alt="Portuguese audio"
                                        className={styles['page42__audio-icon']}
                                        onClick={() => playAudio('pg42_audio15p')}
                                    />
                                    <br />
                                    City: He is from Ariquemes.
                                    <img
                                        src={eng_audio_icon}
                                        alt="English audio"
                                        className={styles['page42__audio-icon']}
                                        onClick={() => playAudio('pg42_audio16e')}
                                    />
                                    <img
                                        src={ptbr_audio_icon}
                                        alt="Portuguese audio"
                                        className={styles['page42__audio-icon']}
                                        onClick={() => playAudio('pg42_audio16p')}
                                    />
                                    <br />
                                </p>
                                <img className={styles['page42__person-image--4']} src={pagina42_imagem4} alt="" />
                            </div>
                            <hr className={styles['page42__separator']} />
                        </div>


                        {/* Person 5 */}
                        <div className={styles['page42__person-wrapper']}>
                            <div className={styles['page42__person--5']}>
                                <img className={styles['page42__person-image--5']} src={pagina42_imagem5} alt="" />
                                <p>
                                    Name: This is Cheryl Daves.
                                    <img
                                        src={eng_audio_icon}
                                        alt="English audio"
                                        className={styles['page42__audio-icon']}
                                        onClick={() => playAudio('pg42_audio17e')}
                                    />
                                    <img
                                        src={ptbr_audio_icon}
                                        alt="Portuguese audio"
                                        className={styles['page42__audio-icon']}
                                        onClick={() => playAudio('pg42_audio17p')}
                                    />
                                    <br />
                                    Age: She’s 37 (thirty-seven) years old.
                                    <img
                                        src={eng_audio_icon}
                                        alt="English audio"
                                        className={styles['page42__audio-icon']}
                                        onClick={() => playAudio('pg42_audio18e')}
                                    />
                                    <img
                                        src={ptbr_audio_icon}
                                        alt="Portuguese audio"
                                        className={styles['page42__audio-icon']}
                                        onClick={() => playAudio('pg42_audio18p')}
                                    />
                                    <br />
                                    Nationality: Cheryl is Canadian.
                                    <img
                                        src={eng_audio_icon}
                                        alt="English audio"
                                        className={styles['page42__audio-icon']}
                                        onClick={() => playAudio('pg42_audio19e')}
                                    />
                                    <img
                                        src={ptbr_audio_icon}
                                        alt="Portuguese audio"
                                        className={styles['page42__audio-icon']}
                                        onClick={() => playAudio('pg42_audio19p')}
                                    />
                                    <br />
                                    City: She’s from Calgary.
                                    <img
                                        src={eng_audio_icon}
                                        alt="English audio"
                                        className={styles['page42__audio-icon']}
                                        onClick={() => playAudio('pg42_audio20e')}
                                    />
                                    <img
                                        src={ptbr_audio_icon}
                                        alt="Portuguese audio"
                                        className={styles['page42__audio-icon']}
                                        onClick={() => playAudio('pg42_audio20p')}
                                    />
                                    <br />
                                </p>
                            </div>
                            <hr className={styles['page42__separator']} />
                        </div>

                    </div>
                    <img className={styles['page42__image--1']} src={pagina42_imagem6} alt="" />
                </main>
                <aside className={styles['page42__aside']}>
                    <div className={styles['page42__aside-container']}>
                        <div className={styles['page42__aside-notes--1']}>
                            <img className={styles['page42__aside-image-notes']} src={pg42IconNotes} alt="" />
                            <p>Word Bank</p>
                        </div>
                        <div className={styles['page42__aside-notes--2']}>
                            <p className={styles['page42__aside-notes--2-bold']}>
                                Name <br />
                                Age <br />
                                Nationality <br />
                                City <br />
                                Country
                            </p>
                            <p>
                                Nome <br />
                                Idade <br />
                                Nacionalidade <br />
                                Cidade <br />
                                País
                            </p>
                        </div>
                    </div>
                </aside>

            </div>

        </div>
    );
};

export default Pagina42;
