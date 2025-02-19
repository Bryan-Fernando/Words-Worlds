import React, { useRef } from 'react';

import styles from './pagina50.module.css';

import iconeE from '../assets/icons/eng_audio_icon.webp'; 
import iconeP from '../assets/icons/ptbr_audio_icon.webp'; 

import pagina50_imagem1 from '../assets/images/pagina50_imagem1.webp';
import pagina50_imagem3 from '../assets/images/pagina50_imagem3.webp';
import pagina50_imagem5 from '../assets/images/pagina50_imagem5.webp';
import pagina50_imagem7 from '../assets/images/pagina50_imagem7.webp';
import pagina50_imagem2 from '../assets/images/pagina50_imagem2.webp';
import pagina50_imagem4 from '../assets/images/pagina50_imagem4.webp';
import pagina50_imagem6 from '../assets/images/pagina50_imagem6.webp';
import pagina50_imagem8 from '../assets/images/pagina50_imagem8.webp';

import pg50_audio1e from '../assets/audios/pg50_audio1e.mp3';
import pg50_audio1p from '../assets/audios/pg50_audio1p.mp3';
import pg50_audio2H from '../assets/audios/pg50_audio2H.mp3';
import audio1 from '../assets/audios/pg50_audio1.mp3';
import audio2 from '../assets/audios/pg50_audio2.mp3';
import audio3 from '../assets/audios/pg50_audio3.mp3';
import audio4 from '../assets/audios/pg50_audio4.mp3';
import audio5 from '../assets/audios/pg50_audio5.mp3';
import audio6 from '../assets/audios/pg50_audio6.mp3';
import audio7 from '../assets/audios/pg50_audio7.mp3';
import audio8 from '../assets/audios/pg50_audio8.mp3';
import pg50_audio2p from '../assets/audios/pg50_audio2p.mp3';
import pg50_audio3p from '../assets/audios/pg50_audio3p.mp3';
import pg50_audio4p from '../assets/audios/pg50_audio4p.mp3';
import pg50_audio5p from '../assets/audios/pg50_audio5p.mp3';
import pg50_audio6p from '../assets/audios/pg50_audio6p.mp3';
import pg50_audio7p from '../assets/audios/pg50_audio7p.mp3';
import pg50_audio8p from '../assets/audios/pg50_audio8p.mp3';
import pg50_audio9p from '../assets/audios/pg50_audio9p.mp3';

const Pagina50 = () => {
    const audioMap = {
        pg50_audio1e,
        pg50_audio1p,
        pg50_audio2H,
        pg50_audio1: audio1,
        pg50_audio2: audio2,
        pg50_audio3: audio3,
        pg50_audio4: audio4,
        pg50_audio5: audio5,
        pg50_audio6: audio6,
        pg50_audio7: audio7,
        pg50_audio8: audio8,
        pg50_audio2p,
        pg50_audio3p,
        pg50_audio4p,
        pg50_audio5p,
        pg50_audio6p,
        pg50_audio7p,
        pg50_audio8p,
        pg50_audio9p
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
            <div className={styles.pg50Container}>
                <header className={styles.pg50Header}>
                    <div className={styles.pg50HeaderContainer}>
                        <h1 className={styles.pg50HeaderH1}>
                            Grammar - Demonstrative Pronouns
                            <img
                                src={iconeE}
                                alt="English Audio"
                                className={styles.pg50Icon}
                                onClick={() => playAudio('pg50_audio1e')}
                            />
                            <img
                                src={iconeP}
                                alt="Portuguese Audio"
                                className={styles.pg50Icon}
                                onClick={() => playAudio('pg50_audio1p')}
                            />
                        </h1>
                    </div>
                    <div className={styles.pg50HeaderH2H3}>
                        <h2
                            className={styles.pg50HeaderH2}>
                            This = Este / Esta / Esse / Essa
                        </h2>
                    </div>
                </header>

                <main className={styles.pg50Main}>
    <div className={styles.pg50Container1}>
        <div>
            <div className={styles.pg50Div1Container1}>
                <img src={pagina50_imagem1} alt="Imagem 1" className={styles.pg50Img} />
            </div>
            <p className={styles.pg50ParagrafoDiv}>
                <strong style={{ fontSize: '3rem' }}>Mother</strong> <br />
                This is my mother, Susan. She is a teacher
                <img
                    src={iconeE}
                    alt="English Audio"
                    className={styles.pg50Icon}
                    onClick={() => playAudio('pg50_audio1')}
                />
                <img
                    src={iconeP}
                    alt="Portuguese Audio"
                    className={styles.pg50Icon}
                    onClick={() => playAudio('pg50_audio2p')}
                />
            </p>
        </div>
        <div>
            <div className={styles.pg50Div2Container1}>
                <img src={pagina50_imagem3} alt="Imagem 3" className={styles.pg50Img} />
            </div>
            <p className={styles.pg50ParagrafoDiv}>
                <strong style={{ fontSize: '3rem' }}>Sister</strong> <br />
                This is my sister, Emily. She is a student.
                <img
                    src={iconeE}
                    alt="English Audio"
                    className={styles.pg50Icon}
                    onClick={() => playAudio('pg50_audio2')}
                />
                <img
                    src={iconeP}
                    alt="Portuguese Audio"
                    className={styles.pg50Icon}
                    onClick={() => playAudio('pg50_audio3p')}
                />
            </p>
        </div>
        <div>
            <div className={styles.pg50Div3Container1}>
                <img src={pagina50_imagem5} alt="Imagem 5" className={styles.pg50Img} />
            </div>
            <p className={styles.pg50ParagrafoDiv}>
                <strong style={{ fontSize: '3rem' }}>Grandmother</strong> <br />
                This is my grandmother, Mary. She loves gardening.
                <img
                    src={iconeE}
                    alt="English Audio"
                    className={styles.pg50Icon}
                    onClick={() => playAudio('pg50_audio3')}
                />
                <img
                    src={iconeP}
                    alt="Portuguese Audio"
                    className={styles.pg50Icon}
                    onClick={() => playAudio('pg50_audio4p')}
                />
            </p>
        </div>
        <div>
            <div className={styles.pg50Div4Container1}>
                <img src={pagina50_imagem7} alt="Imagem 7" className={styles.pg50Img} />
            </div>
            <p className={styles.pg50ParagrafoDiv}>
                <strong style={{ fontSize: '3rem' }}>Aunt</strong> <br />
                This is my aunt, Linda. She is a talented artist.
                <img
                    src={iconeE}
                    alt="English Audio"
                    className={styles.pg50Icon}
                    onClick={() => playAudio('pg50_audio4')}
                />
                <img
                    src={iconeP}
                    alt="Portuguese Audio"
                    className={styles.pg50Icon}
                    onClick={() => playAudio('pg50_audio5p')}
                />
            </p>
        </div>
    </div>
    
    <div className={styles.pg50Container2}>
        <div>
            <div className={styles.pg50Div1Container2}>
                <img src={pagina50_imagem2} alt="Imagem 2" className={styles.pg50Img} />
            </div>
            <p className={styles.pg50ParagrafoDiv}>
                <strong style={{ fontSize: '3rem' }}>Father</strong> <br />
                This is my father, John. He is an engineer.
                <img
                    src={iconeE}
                    alt="English Audio"
                    className={styles.pg50Icon}
                    onClick={() => playAudio('pg50_audio5')}
                />
                <img
                    src={iconeP}
                    alt="Portuguese Audio"
                    className={styles.pg50Icon}
                    onClick={() => playAudio('pg50_audio6p')}
                />
            </p>
        </div>
        <div>
            <div className={styles.pg50Div2Container2}>
                <img src={pagina50_imagem4} alt="Imagem 4" className={styles.pg50Img} />
            </div>
            <p className={styles.pg50ParagrafoDiv}>
                <strong style={{ fontSize: '3rem' }}>Brother</strong> <br />
                This is my brother, Michael. He is a doctor.
                <img
                    src={iconeE}
                    alt="English Audio"
                    className={styles.pg50Icon}
                    onClick={() => playAudio('pg50_audio6')}
                />
                <img
                    src={iconeP}
                    alt="Portuguese Audio"
                    className={styles.pg50Icon}
                    onClick={() => playAudio('pg50_audio7p')}
                />
            </p>
        </div>
        <div>
            <div className={styles.pg50Div3Container2}>
                <img src={pagina50_imagem6} alt="Imagem 6" className={styles.pg50Img} />
            </div>
            <p className={styles.pg50ParagrafoDiv}>
                <strong style={{ fontSize: '3rem' }}>Grandfather</strong> <br />
                This is my grandfather, Robert. He enjoys fishing.
                <img
                    src={iconeE}
                    alt="English Audio"
                    className={styles.pg50Icon}
                    onClick={() => playAudio('pg50_audio7')}
                />
                <img
                    src={iconeP}
                    alt="Portuguese Audio"
                    className={styles.pg50Icon}
                    onClick={() => playAudio('pg50_audio8p')}
                />
            </p>
        </div>
        <div>
            <div className={styles.pg50Div4Container2}>
                <img src={pagina50_imagem8} alt="Imagem 8" className={styles.pg50Img} />
            </div>
            <p className={styles.pg50ParagrafoDiv}>
                <strong style={{ fontSize: '3rem' }}>Uncle</strong> <br />
                This is my uncle, Peter. He loves to travel.
                <img
                    src={iconeE}
                    alt="English Audio"
                    className={styles.pg50Icon}
                    onClick={() => playAudio('pg50_audio8')}
                />
                <img
                    src={iconeP}
                    alt="Portuguese Audio"
                    className={styles.pg50Icon}
                    onClick={() => playAudio('pg50_audio9p')}
                />
            </p>
        </div>
    </div>
</main>

            </div>
        </div>
    );
};

export default Pagina50;
