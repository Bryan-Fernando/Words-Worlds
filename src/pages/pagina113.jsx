import React, { useState } from 'react';

import styles from './pagina113.module.css';

import pagina113_imagem1 from '../assets/images/pagina113_imagem1.webp';
import pagina113_imagem2 from '../assets/images/pagina113_imagem2.webp';
import pagina113_imagem3 from '../assets/images/pagina113_imagem3.webp';
import pagina113_imagem4 from '../assets/images/pagina113_imagem4.webp';
import pagina113_imagem5 from '../assets/images/pagina113_imagem5.webp';
import pagina113_imagem6 from '../assets/images/pagina113_imagem6.webp';
import pagina113_imagem7 from '../assets/images/pagina113_imagem7.webp';
import pagina113_imagem8 from '../assets/images/pagina113_imagem8.webp';
import pagina113_imagem9 from '../assets/images/pagina113_imagem9.webp';

import global_grammar from '../assets/audios/global_grammar.mp3';
import pg113_audio1 from '../assets/audios/pg113_audio1.mp3';
import pg113_audio2 from '../assets/audios/pg113_audio2.mp3';
import pg113_audio3 from '../assets/audios/pg113_audio3.mp3';
import pg113_audio4 from '../assets/audios/pg113_audio4.mp3';

const Pagina113 = () => {

    const playAudio = (audioSrc) => {
        const audio = new Audio(audioSrc);
        audio.play();
    };


    return (
        <div>
            <div className={styles["page113__container"]}>
    <header className={styles["page113__header"]}>
        <h1 className={styles["page113__header-h1"]} onClick={() => playAudio(global_grammar)} style={{ cursor: 'pointer' }}>
            Grammar
        </h1>
        <div>
            <h2 className={styles["page113__header-h2"]} onClick={() => playAudio(pg113_audio1)} style={{ cursor: 'pointer' }}>
                Clothing Materials
            </h2>
            <p>Materiais de Roupas</p>
        </div>
    </header>
    
    <main className={styles["page113__main"]}>
        <div className={styles["page113__container-images-1"]}>
            <div className={styles["page113__flex"]}>
                <div className={styles["page113__flex-images"]}>
                    <div><img className={styles["page113__image-wide"]} src={pagina113_imagem1} alt="" /></div>
                    <div><img className={styles["page113__image-normal"]} src={pagina113_imagem2} alt="" /></div>
                </div>
                <div className={styles["page113__text-container"]}>
                    <p className={styles["page113__paragraph--red"]} onClick={() => playAudio(pg113_audio2)} style={{ cursor: 'pointer' }}>
                        wool
                    </p>
                    <p>lã</p>
                </div>
            </div>
            <div className={styles["page113__flex"]}>
                <div className={styles["page113__flex-images"]}>
                    <div><img className={styles["page113__image-wide"]} src={pagina113_imagem3} alt="" /></div>
                    <div><img className={styles["page113__image-normal"]} src={pagina113_imagem4} alt="" /></div>
                </div>
                <div className={styles["page113__text-container"]}>
                    <p className={styles["page113__paragraph--red"]} onClick={() => playAudio(pg113_audio3)} style={{ cursor: 'pointer' }}>
                        cotton
                    </p>
                    <p>algodão</p>
                </div>
            </div>
            <div className={styles["page113__flex"]}>
                <div className={styles["page113__flex-images"]}>
                    <div><img className={styles["page113__image-wide"]} src={pagina113_imagem5} alt="" /></div>
                    <div><img className={styles["page113__image-normal"]} src={pagina113_imagem6} alt="" /></div>
                </div>
                <div className={styles["page113__text-container"]}>
                    <p className={styles["page113__paragraph--red"]} onClick={() => playAudio(pg113_audio4)} style={{ cursor: 'pointer' }}>
                        leather
                    </p>
                    <p>couro</p>
                </div>
            </div>
        </div>

        <div className={styles["page113__container-images-2"]}>
            <div className={styles["page113__flex-b"]}>
                <div className={styles["page113__flex-images"]}>
                    <div><img className={styles["page113__image-large"]} src={pagina113_imagem7} alt="" /></div>
                </div>
                <div className={styles["page113__text-container"]}>
                    <p className={styles["page113__paragraph--red"]} onClick={() => playAudio(pg113_audio2)} style={{ cursor: 'pointer' }}>
                        denim
                    </p>
                    <p>jeans</p>
                </div>
            </div>
            <div className={styles["page113__flex-b"]}>
                <div className={styles["page113__flex-images"]}>
                    <div><img className={styles["page113__image-large"]} src={pagina113_imagem8} alt="" /></div>
                </div>
                <div className={styles["page113__text-container"]}>
                    <p className={styles["page113__paragraph--red"]} onClick={() => playAudio(pg113_audio3)} style={{ cursor: 'pointer' }}>
                        fur
                    </p>
                    <p>pele</p>
                </div>
            </div>
            <div className={styles["page113__flex-b"]}>
                <div className={styles["page113__flex-images"]}>
                    <div><img className={styles["page113__image-large"]} src={pagina113_imagem9} alt="" /></div>
                </div>
                <div className={styles["page113__text-container"]}>
                    <p className={styles["page113__paragraph--red"]} onClick={() => playAudio(pg113_audio4)} style={{ cursor: 'pointer' }}>
                        nylon
                    </p>
                    <p>nylon</p>
                </div>
            </div>
        </div>
    </main>
</div>

        </div>
    );
};
export default Pagina113;
