import React from 'react';

import styles from './pagina49.module.css';

import global_grammar from '../assets/audios/global_grammar.mp3';
import pg49_audio1 from '../assets/audios/pg49_audio1.mp3';
import pg49_audio2 from '../assets/audios/pg49_audio2.mp3';
import pg49_audio3 from '../assets/audios/pg49_audio3.mp3';
import pg49_audio4 from '../assets/audios/pg49_audio4.mp3';
import pg49_audio5 from '../assets/audios/pg49_audio5.mp3';
import pg49_audio6 from '../assets/audios/pg49_audio6.mp3';
import pg49_audio7 from '../assets/audios/pg49_audio7.mp3';
import pg49_audio8 from '../assets/audios/pg49_audio8.mp3';
import pg49_audio9 from '../assets/audios/pg49_audio9.mp3';
import pg49_audio10 from '../assets/audios/pg49_audio10.mp3';
import pg49_audio11 from '../assets/audios/pg49_audio11.mp3';
import pg49_audio12 from '../assets/audios/pg49_audio12.mp3';
import pg49_audio13 from '../assets/audios/pg49_audio13.mp3';
import pg49_audio14 from '../assets/audios/pg49_audio14.mp3';
import pg49_audio15 from '../assets/audios/pg49_audio15.mp3';
import pg49_audio16 from '../assets/audios/pg49_audio16.mp3';
import pg49_audio17 from '../assets/audios/pg49_audio17.mp3';
import pg49_audio18 from '../assets/audios/pg49_audio18.mp3';
import pg49_audio19 from '../assets/audios/pg49_audio19.mp3';
import pg49_audio20 from '../assets/audios/pg49_audio20.mp3';
import pg49_audio21 from '../assets/audios/pg49_audio21.mp3';
import pg49_audio22 from '../assets/audios/pg49_audio22.mp3';
import pg49_audio23 from '../assets/audios/pg49_audio23.mp3';
import pg49_audio24 from '../assets/audios/pg49_audio24.mp3';
import pg49_audio25 from '../assets/audios/pg49_audio25.mp3';
import pg49_audio26 from '../assets/audios/pg49_audio26.mp3';

const audioMap = {
    'global_grammar': global_grammar,
    'pg49_audio1': pg49_audio1,
    'pg49_audio2': pg49_audio2,
    'pg49_audio3': pg49_audio3,
    'pg49_audio4': pg49_audio4,
    'pg49_audio5': pg49_audio5,
    'pg49_audio6': pg49_audio6,
    'pg49_audio7': pg49_audio7,
    'pg49_audio8': pg49_audio8,
    'pg49_audio9': pg49_audio9,
    'pg49_audio10': pg49_audio10,
    'pg49_audio11': pg49_audio11,
    'pg49_audio12': pg49_audio12,
    'pg49_audio13': pg49_audio13,
    'pg49_audio14': pg49_audio14,
    'pg49_audio15': pg49_audio15,
    'pg49_audio16': pg49_audio16,
    'pg49_audio17': pg49_audio17,
    'pg49_audio18': pg49_audio18,
    'pg49_audio19': pg49_audio19,
    'pg49_audio20': pg49_audio20,
    'pg49_audio21': pg49_audio21,
    'pg49_audio22': pg49_audio22,
    'pg49_audio23': pg49_audio23,
    'pg49_audio24': pg49_audio24,
    'pg49_audio25': pg49_audio25,
    'pg49_audio26': pg49_audio26,
};

const playAudio = (audioKey) => {
    const audio = new Audio(audioMap[audioKey]);
    audio.play();
};

const Pagina49 = () => {
    return (
        <div>
            <div className={styles["page49__container"]}>
                <header className={styles["page49__header"]}>
                    <h1 className={styles["page49__header--h1"]} onClick={() => playAudio('global_grammar')}>
                        Grammar
                    </h1>
                    <div className={styles["page49__header--h2-h3"]}>
                        <h2 className={styles["page49__header--h2"]} onClick={() => playAudio('pg49_audio1')}>
                            Demonstrative Pronouns
                        </h2>
                        <h3 className={styles["page49__header--h3"]} onClick={() => playAudio('pg49_audio2')}>
                            Pronomes Demonstrativos
                        </h3>
                    </div>
                </header>
                <main className={styles["page49__main"]}>
                    <div className={styles["page49__main--div1"]}>
                        <p onClick={() => playAudio('pg49_audio3')}>
                            <span style={{ color: '#A61C28' }}>This</span> <br />
                            Este, esta, isto
                        </p>
                        <p onClick={() => playAudio('pg49_audio4')}>
                            <span style={{ color: '#A61C28' }}>That</span> <br />
                            Aquele, aquela, aquilo
                        </p>
                        <p onClick={() => playAudio('pg49_audio5')}>
                            <span style={{ color: '#A61C28' }}>These</span> <br />
                            Estes, estas
                        </p>
                        <p onClick={() => playAudio('pg49_audio6')}>
                            <span style={{ color: '#A61C28' }}>Those</span> <br />
                            Aqueles, aquelas
                        </p>
                    </div>
                    <div>
                        <p className={styles["page49__exemplo"]}>Exemplos:</p>
                        <div className={styles["page49__container--divs"]}>
                            <div className={styles["page49__main--div2"]}>
                                <ul className={styles["page49__listas"]}>
                                    <li className={styles["page49__item"]} onClick={() => playAudio('pg49_audio7')}>
                                        <span className={styles["page49__text--red"]}>This is <span className={styles["page49__underline"]}>my</span> cat.</span>
                                    </li>
                                    <li className={styles["page49__item"]}>
                                        <span>Esta é <span className={styles["page49__underline"]}>minha</span> gata.</span>
                                    </li>
                                    <li className={styles["page49__item"]} onClick={() => playAudio('pg49_audio9')}>
                                        <span className={styles["page49__text--red"]}>These are <span className={styles["page49__underline"]}>his</span> friends.</span>
                                    </li>
                                    <li className={styles["page49__item"]}>
                                        <span>Estes são os amigos <span className={styles["page49__underline"]}>dele</span>.</span>
                                    </li>
                                    <li className={styles["page49__item"]} onClick={() => playAudio('pg49_audio11')}>
                                        <span className={styles["page49__text--red"]}>Those are <span className={styles["page49__underline"]}>my</span> parents.</span>
                                    </li>
                                    <li className={styles["page49__item"]}>
                                        <span>Aqueles são <span className={styles["page49__underline"]}>meus</span> pais.</span>
                                    </li>
                                    <li className={styles["page49__item"]} onClick={() => playAudio('pg49_audio13')}>
                                        <span className={styles["page49__text--red"]}>Those are <span className={styles["page49__underline"]}>your</span> shoes.</span>
                                    </li>
                                    <li className={styles["page49__item"]}>
                                        <span>Aqueles são <span className={styles["page49__underline"]}>seus</span> sapatos.</span>
                                    </li>
                                    <li className={styles["page49__item"]} onClick={() => playAudio('pg49_audio15')}>
                                        <span className={styles["page49__text--red"]}>This is <span className={styles["page49__underline"]}>our</span> school.</span>
                                    </li>
                                    <li className={styles["page49__item"]}>
                                        <span>Este é <span className={styles["page49__underline"]}>nosso</span> colégio.</span>
                                    </li>
                                </ul>
                            </div>
                            <div className={styles["page49__main--div3"]}>
                                <ul className={styles["page49__listas"]}>
                                    <li className={styles["page49__item"]} onClick={() => playAudio('pg49_audio17')}>
                                        <span className={styles["page49__text--red"]}>Those are <span className={styles["page49__underline"]}>his</span> sunglasses.</span>
                                    </li>
                                    <li className={styles["page49__item"]}>
                                        <span>Aqueles são os óculos de sol <span className={styles["page49__underline"]}>dele</span>.</span>
                                    </li>
                                    <li className={styles["page49__item"]} onClick={() => playAudio('pg49_audio19')}>
                                        <span className={styles["page49__text--red"]}>These are <span className={styles["page49__underline"]}>their</span> favorite flowers.</span>
                                    </li>
                                    <li className={styles["page49__item"]}>
                                        <span>Estas são as flores favoritas <span className={styles["page49__underline"]}>deles</span>.</span>
                                    </li>
                                    <li className={styles["page49__item"]} onClick={() => playAudio('pg49_audio21')}>
                                        <span className={styles["page49__text--red"]}>That is <span className={styles["page49__underline"]}>her</span> laptop.</span>
                                    </li>
                                    <li className={styles["page49__item"]}>
                                        <span>Aquele é o laptop <span className={styles["page49__underline"]}>dela</span>.</span>
                                    </li>
                                    <li className={styles["page49__item"]} onClick={() => playAudio('pg49_audio23')}>
                                        <span className={styles["page49__text--red"]}>Those are <span className={styles["page49__underline"]}>our</span> classmates.</span>
                                    </li>
                                    <li className={styles["page49__item"]}>
                                        <span>Aqueles são <span className={styles["page49__underline"]}>nossos</span> colegas de classe.</span>
                                    </li>
                                    <li className={styles["page49__item"]} onClick={() => playAudio('pg49_audio25')}>
                                        <span className={styles["page49__text--red"]}>That is not <span className={styles["page49__underline"]}>your</span> umbrella.</span>
                                    </li>
                                    <li className={styles["page49__item"]}>
                                        <span>Aquele não é <span className={styles["page49__underline"]}>seu</span> guarda-chuva.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </main>
            </div>

        </div>
    );
};

export default Pagina49;
