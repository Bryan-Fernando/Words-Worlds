import React, { useRef } from 'react';

import styles from './pagina46.module.css';

import pagina46_imagem1 from '../assets/images/pagina46_imagem1.webp';

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
import audio1_1e from '../assets/audios/pg46_audio1_1e.mp3';
import audio1_2e from '../assets/audios/pg46_audio1_2e.mp3';
import audio2_1e from '../assets/audios/pg46_audio2_1e.mp3';
import audio2_2e from '../assets/audios/pg46_audio2_2e.mp3';
import audio1p from '../assets/audios/pg46_audio1p.mp3';
import audio2p from '../assets/audios/pg46_audio2p.mp3';

const Pagina46 = () => {
    const audioMap = {
        'my_audio': my_audio,
        'his_audio': his_audio,
        'her_audio': her_audio,
        'its_audio': its_audio,
        'our_audio': our_audio,
        'your_audio': your_audio,
        'their_audio': their_audio,
        'pg46_audio1_1e': audio1_1e,
        'pg46_audio1_2e': audio1_2e,
        'pg46_audio2_1e': audio2_1e,
        'pg46_audio2_2e': audio2_2e,
        'pg46_audio1p': audio1p,
        'pg46_audio2p': audio2p,
    };


    const currentAudio = useRef(null);

    const globalAudioMap = {
        'global_grammar': global_grammar,
        'global_posse_ae': global_posse_ae,
        'global_posse_ap': global_posse_ap
    };

    const playGlobalAudio = (audioKey) => {
        const audio = new Audio(globalAudioMap[audioKey]);
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
            <div className={styles['page46__container']}>
                <header className={styles['page46__header']}>
                    <h1 className={styles['page46__header-h1']} onClick={() => playGlobalAudio('global_grammar')}>
                        Grammar
                    </h1>
                    <div className={styles['page46__header-h2-h3']}>
                        <h2 className={styles['page46__header-h2']} onClick={() => playGlobalAudio('global_posse_ae')}>
                            Possessive Adjectives
                        </h2>
                        <h3 className={styles['page46__header-h3']} onClick={() => playGlobalAudio('global_posse_ap')}>
                            Pronomes possessivos
                        </h3>
                    </div>
                </header>
                <main className={styles['page46__main']}>
                    <div>
                        <table className={styles['page46__table']}>
                            <thead>
                                <tr>
                                    <th onClick={() => playAudio('my_audio')}>My</th>
                                    <td>meu(s), minha(s)</td>
                                </tr>
                                <tr>
                                    <th onClick={() => playAudio('his_audio')}>His</th>
                                    <td>dele (seu/s/sua/s)</td>
                                </tr>
                                <tr>
                                    <th onClick={() => playAudio('her_audio')}>Her</th>
                                    <td>dela (seu/s/sua/s)</td>
                                </tr>
                                <tr>
                                    <th onClick={() => playAudio('its_audio')}>Its</th>
                                    <td>seu(s), sua(s) - coisas/animais/plantas</td>
                                </tr>
                                <tr>
                                    <th onClick={() => playAudio('our_audio')}>Our</th>
                                    <td>nosso(s), nossa(s)</td>
                                </tr>
                                <tr>
                                    <th onClick={() => playAudio('your_audio')}>Your</th>
                                    <td>seu(s), sua(s), teu(s), tua(s)</td>
                                </tr>
                                <tr>
                                    <th onClick={() => playAudio('your_audio')}>Your</th>
                                    <td>seus, suas, teus, tuas (de vocês)</td>
                                </tr>
                                <tr>
                                    <th onClick={() => playAudio('their_audio')}>Their</th>
                                    <td>deles, delas, seus, suas</td>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </main>
                <aside className={styles['page46__aside']}>
                    <div className={styles['page46__example']}>
                        <p><strong>Exemplo:</strong></p>
                        <div className={styles['page46__example-img']}>
                            <div className={styles['page46__aside-texto-1']}>
                                <div className={styles['page46__icon-2']}>2</div>
                                <p>
                                    <span onClick={() => playAudio('pg46_audio1_1e')} style={{ cursor: 'pointer' }}>
                                        Emily: Yes, I’m proud of our progress.
                                    </span>
                                    <br />
                                    <span onClick={() => playAudio('pg46_audio1_2e')} style={{ cursor: 'pointer' }}>
                                        <strong>Our</strong> hard work is paying off.
                                    </span>
                                </p>
                            </div>
                            <div className={styles['page46__aside-texto-2']}>
                                <div className={styles['page46__icon-1']}>1</div>
                                <p>
                                    <span onClick={() => playAudio('pg46_audio2_1e')} style={{ cursor: 'pointer' }}>
                                        Alex: This project is going really well.
                                    </span>
                                    <br />
                                    <span onClick={() => playAudio('pg46_audio2_2e')} style={{ cursor: 'pointer' }}>
                                        <strong>Our</strong> team has put in a lot of effort.
                                    </span>
                                </p>
                            </div>
                            <img className={styles['page46__aside-img-1']} src={pagina46_imagem1} alt="" />
                        </div>
                    </div>
                    <div className={styles['page46__translation']}>
                        <p><strong>Tradução:</strong></p>
                        <div
                            className={styles['page46__aside-traducao-1']}
                            onClick={() => playAudio('pg46_audio1p')}
                            style={{ cursor: 'pointer' }}
                        >
                            <div className={styles['page46__icon-1-2']}>1</div>
                            <p>Alex: Este projeto está indo muito bem. <strong>Nossa</strong> equipe tem se esforçado muito.</p>
                        </div>
                        <div
                            className={styles['page46__aside-traducao-2']}
                            onClick={() => playAudio('pg46_audio2p')}
                            style={{ cursor: 'pointer' }}
                        >
                            <div className={styles['page46__icon-2-2']}>2</div>
                            <p>Emily: Sim, estou orgulhosa do nosso progresso. <strong>Nosso</strong> trabalho duro está valendo a pena.</p>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default Pagina46;
