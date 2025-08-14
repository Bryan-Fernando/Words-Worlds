import React, { useRef } from 'react';

import styles from './pagina45.module.css';

import pagina45_imagem1 from '../assets/images/pagina45_imagem1.webp';
import pagina45_imagem2 from '../assets/images/pagina45_imagem2.webp';

import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';

import global_grammar from '../assets/audios/global_grammar.mp3';
import global_posse_ae from '../assets/audios/global_posse_ae.mp3';
import global_posse_ap from '../assets/audios/global_posse_ap.mp3';
import my_audio from '../assets/audios/my_audio.mp3';
import his_audio from '../assets/audios/his_audio.mp3';
import her_audio from '../assets/audios/her_audio.mp3';
import its_audio from '../assets/audios/its_audio.mp3';
import our_audio from '../assets/audios/our_audio.mp3';
import your_audio from '../assets/audios/your_audio.mp3';
import their_audio from '../assets/audios/their_audio.mp3';
import audio1_1e from '../assets/audios/pg45_audio1_1e.mp3';
import audio1_2e from '../assets/audios/pg45_audio1_2e.mp3';
import audio2_1e from '../assets/audios/pg45_audio2_1e.mp3';
import audio2_2e from '../assets/audios/pg45_audio2_2e.mp3';
import audio1p from '../assets/audios/pg45_audio1p.mp3';
import audio2p from '../assets/audios/pg45_audio2p.mp3';

const Pagina45 = () => {
    const audioMap = {
        my_audio,
        his_audio,
        her_audio,
        its_audio,
        our_audio,
        your_audio,
        their_audio,
        pg45_audio1_1e: audio1_1e,
        pg45_audio1_2e: audio1_2e,
        pg45_audio2_1e: audio2_1e,
        pg45_audio2_2e: audio2_2e,
        pg45_audio1p: audio1p,
        pg45_audio2p: audio2p,
    };

    const globalAudioMap = {
        global_grammar,
        global_posse_ae,
        global_posse_ap,
    };

    const playGlobalAudio = (audioKey) => {
        const audio = new Audio(globalAudioMap[audioKey]);
        audio.play();
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
            <div className={styles['page45__container']}>
                <header className={styles['page45__header']}>
                    <h1 className={styles['page45__header-h1']}>
                        Grammar
                        <img
                            src={eng_audio_icon}
                            alt="English audio"
                            className={styles['page45__audio-icon']}
                            onClick={() => playGlobalAudio('global_grammar')}
                        />
                    </h1>

                    <div className={styles['page45__header-h2-h3']}>
                        <h2 className={styles['page45__header-h2']}>
                            Possessive Adjectives
                            <img
                                src={eng_audio_icon}
                                alt="English audio"
                                className={styles['page45__audio-icon']}
                                onClick={() => playGlobalAudio('global_posse_ae')}
                            />
                        </h2>

                        <h3 className={styles['page45__header-h3']}>
                            Pronomes possessivos
                            <img
                                src={ptbr_audio_icon}
                                alt="Portuguese audio"
                                className={styles['page45__audio-icon']}
                                onClick={() => playGlobalAudio('global_posse_ap')}
                            />
                        </h3>
                    </div>
                </header>

                <main className={styles['page45__main']}>
                    <div className={styles['page45__table-container']}>
                        <table className={styles['page45__table']}>
                            <thead>
                                <tr>
                                    <th>
                                        My
                                        <img
                                            src={eng_audio_icon}
                                            alt="English audio"
                                            className={styles['page45__audio-icon']}
                                            onClick={() => playAudio('my_audio')}
                                        />
                                    </th>
                                    <td>meu(s), minha(s)</td>
                                </tr>
                                <tr>
                                    <th>
                                        His
                                        <img
                                            src={eng_audio_icon}
                                            alt="English audio"
                                            className={styles['page45__audio-icon']}
                                            onClick={() => playAudio('his_audio')}
                                        />
                                    </th>
                                    <td>dele (seu/s/sua/s)</td>
                                </tr>
                                <tr>
                                    <th>
                                        Her
                                        <img
                                            src={eng_audio_icon}
                                            alt="English audio"
                                            className={styles['page45__audio-icon']}
                                            onClick={() => playAudio('her_audio')}
                                        />
                                    </th>
                                    <td>dela (seu/s/sua/s)</td>
                                </tr>
                                <tr>
                                    <th>
                                        Its
                                        <img
                                            src={eng_audio_icon}
                                            alt="English audio"
                                            className={styles['page45__audio-icon']}
                                            onClick={() => playAudio('its_audio')}
                                        />
                                    </th>
                                    <td>seu(s), sua(s) - coisas/animais/plantas</td>
                                </tr>
                                <tr>
                                    <th>
                                        Our
                                        <img
                                            src={eng_audio_icon}
                                            alt="English audio"
                                            className={styles['page45__audio-icon']}
                                            onClick={() => playAudio('our_audio')}
                                        />
                                    </th>
                                    <td>nosso(s), nossa(s)</td>
                                </tr>
                                <tr>
                                    <th>
                                        Your
                                        <img
                                            src={eng_audio_icon}
                                            alt="English audio"
                                            className={styles['page45__audio-icon']}
                                            onClick={() => playAudio('your_audio')}
                                        />
                                    </th>
                                    <td>seu(s), sua(s), teu(s), tua(s)</td>
                                </tr>
                                <tr>
                                    <th>
                                        Your
                                        <img
                                            src={eng_audio_icon}
                                            alt="English audio"
                                            className={styles['page45__audio-icon']}
                                            onClick={() => playAudio('your_audio')}
                                        />
                                    </th>
                                    <td>seus, suas, teus, tuas (de vocês)</td>
                                </tr>
                                <tr>
                                    <th>
                                        Their
                                        <img
                                            src={eng_audio_icon}
                                            alt="English audio"
                                            className={styles['page45__audio-icon']}
                                            onClick={() => playAudio('their_audio')}
                                        />
                                    </th>
                                    <td>deles, delas, seus, suas</td>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </main>

                <aside className={styles['page45__aside']}>
                    <div className={styles['page45__example']}>
                        <p><strong>Exemplo:</strong></p>
                        <div className={styles['page45__example-img']}>
                            <div className={styles['page45__aside-texto-1']}>
                                <p>
                                    Laura: I know, it's hard to concentrate with <br /> all that noise.
                                    <img
                                        src={eng_audio_icon}
                                        alt="English audio"
                                        className={styles['page45__audio-icon']}
                                        onClick={() => playAudio('pg45_audio2_1e')}
                                    />
                                    I'll talk to them about it.
                                    <img
                                        src={eng_audio_icon}
                                        alt="English audio"
                                        className={styles['page45__audio-icon']}
                                        onClick={() => playAudio('pg45_audio2_2e')}
                                    />
                                </p>
                            </div>

                            <div className={styles['page45__aside-texto-2']}>
                                <p>
                                    Mark: The neighbors are having a party.
                                    <img
                                        src={eng_audio_icon}
                                        alt="English audio"
                                        className={styles['page45__audio-icon']}
                                        onClick={() => playAudio('pg45_audio1_1e')}
                                    />
                                    <br />
                                    <strong>Their</strong> music is so loud!
                                    <img
                                        src={eng_audio_icon}
                                        alt="English audio"
                                        className={styles['page45__audio-icon']}
                                        onClick={() => playAudio('pg45_audio1_2e')}
                                    />
                                </p>
                            </div>

                            <img className={styles['page45__aside-img-1']} src={pagina45_imagem1} alt="" />
                            <img className={styles['page45__aside-img-2']} src={pagina45_imagem2} alt="" />
                        </div>
                    </div>

                    <div className={styles['page45__translation']}>
                        <p><strong>Tradução:</strong></p>

                        <div className={styles['page45__aside-traducao-1']}>
                            <p>
                                Mark: Os vizinhos estão dando uma festa. A música <strong>deles</strong> está tão alta!
                                <img
                                    src={ptbr_audio_icon}
                                    alt="Portuguese audio"
                                    className={styles['page45__audio-icon']}
                                    onClick={() => playAudio('pg45_audio1p')}
                                />
                            </p>
                        </div>

                        <div className={styles['page45__aside-traducao-2']}>
                            <p>
                                Laura: Eu sei, é difícil se concentrar com tanto barulho. Vou falar com eles sobre isso.
                                <img
                                    src={ptbr_audio_icon}
                                    alt="Portuguese audio"
                                    className={styles['page45__audio-icon']}
                                    onClick={() => playAudio('pg45_audio2p')}
                                />
                            </p>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default Pagina45;
