import React, { useState, useEffect, useRef } from 'react';

import { useNavigate } from 'react-router-dom';

import styles from './pagina36.module.css';

import campainha from '../assets/icons/campainha.png';
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import pagina36_imagem1 from '../assets/images/pagina36_imagem1.webp';
import pagina36_imagem2 from '../assets/images/pagina36_imagem2.webp';

import bell from '../assets/audios/bell.mp3';
import global_learning_le_p from '../assets/audios/global_learning_le_p.mp3';
import global_learning_le_e from '../assets/audios/global_learning_le_e.mp3';
import global_put_tw_p from '../assets/audios/global_put_tw_p.mp3';
import global_put_tw_e from '../assets/audios/global_put_tw_e.mp3';
import negativaAudio from '../assets/audios/negativa.mp3';
import afirmativaAudio from '../assets/audios/afirmativa.mp3';
import sujeitoAudio from '../assets/audios/sujeito.mp3';
import verbo_auxiliarAudio from '../assets/audios/verbo_auxiliar.mp3';
import adverbioAudio from '../assets/audios/adverbio.mp3';
import verboAudio from '../assets/audios/verbo.mp3';
import objeto_complemento_audio from '../assets/audios/objeto_complemento.mp3';


const Pagina36 = () => {
    const [respostas, setRespostas] = useState({});
    const [frasesEmbaralhadas, setFrasesEmbaralhadas] = useState({});
    const [palavrasClicadas, setPalavrasClicadas] = useState({});
    const currentAudioRef = useRef(null);
    const navigate = useNavigate();

    const respostasCorretas = [
        ['There is', 'a bird', 'in the nest'],
        ["There aren't", 'any clouds', 'in the sky'],
        ['There are', 'three books', 'on the shelf'],
        ["There aren't", 'many people', 'at the party'],
        ['There is', 'a pencil', 'on the table'],
        ['There is', 'a couch', 'in the living room'],
        ["There isn't", 'any milk', 'in the fridge'],
        ["There isn't", 'a grocery store', 'in this neighborhood'],
    ];

    const shuffleArray = (array) => {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    };

    useEffect(() => {
        const novasFrasesEmbaralhadas = {};
        respostasCorretas.forEach((frase, fraseIndex) => {
            novasFrasesEmbaralhadas[fraseIndex] = shuffleArray(frase);
        });
        setFrasesEmbaralhadas(novasFrasesEmbaralhadas);
    }, []);

    const handleWordClick = (fraseIndex, word) => {
        setRespostas((prev) => {
            const palavrasAtuais = prev[fraseIndex] || [];

            const novaPalavra =
                palavrasAtuais.length === 0
                    ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                    : word.charAt(0).toLowerCase() + word.slice(1);

            if (palavrasAtuais.includes(word)) return prev;

            return {
                ...prev,
                [fraseIndex]: [...palavrasAtuais, novaPalavra],
            };
        });

        setPalavrasClicadas((prev) => ({
            ...prev,
            [`${fraseIndex}-${word.toLowerCase()}`]: true,
        }));
    };

    const handleChipClick = (fraseIndex, word) => {
        setRespostas((prev) => {
            const palavrasAtuais = prev[fraseIndex] || [];
            return {
                ...prev,
                [fraseIndex]: palavrasAtuais.filter((palavra) => palavra !== word),
            };
        });

        setPalavrasClicadas((prev) => {
            const updated = { ...prev };
            delete updated[`${fraseIndex}-${word.toLowerCase()}`];
            return updated;
        });
    };

    const verificarRespostas = () => {
        const resultado = respostasCorretas.map((resposta, index) => {
            const respostaUsuario = respostas[index] || [];
            return JSON.stringify(resposta) === JSON.stringify(respostaUsuario);
        });

        navigate('/pagina37', { state: { respostasUsuario: respostas, resultado } });
    };



    const playAudio = (audioFile) => {
        if (currentAudioRef.current) {
            currentAudioRef.current.pause();
            currentAudioRef.current.currentTime = 0;
        }

        const audio = new Audio(audioFile);
        currentAudioRef.current = audio;
        audio.play();
    };

    return (
        <div className={styles["page36__container"]}>
            <header className={styles["page36__header"]}>
                <h1 className={styles["page36__page--title"]}>
                    Learning Language Exercises
                    <img src={eng_audio_icon} alt="English Audio" className={styles["page36__icon"]} onClick={() => playAudio(global_learning_le_e)} />
                    <img src={ptbr_audio_icon} alt="Portuguese Audio" className={styles["page36__icon"]} onClick={() => playAudio(global_learning_le_p)} />
                </h1>
                <h2 className={styles["page36__question--text"]}>
                    Put the words in the correct order.
                    <img src={eng_audio_icon} alt="English Audio" className={styles["page36__icon"]} onClick={() => playAudio(global_put_tw_e)} />
                    <img src={ptbr_audio_icon} alt="Portuguese Audio" className={styles["page36__icon"]} onClick={() => playAudio(global_put_tw_p)} />
                </h2>
            </header>

            <div className={styles["page36__main--aside--container"]}>
                <main className={styles["page36__main--container"]}>
                    <div className={styles["page36__frases"]}>
                        {respostasCorretas.map((_, fraseIndex) => (
                            <div key={fraseIndex} className={styles["page36__frase--container"]}>
                                <div className={styles["page36__frase"]}>
                                    {frasesEmbaralhadas[fraseIndex] &&
                                        frasesEmbaralhadas[fraseIndex].map((word, wordIndex) => (
                                            <div
                                                key={wordIndex}
                                                className={`${styles["page36__word"]} ${palavrasClicadas[`${fraseIndex}-${word.toLowerCase()}`] ? styles["page36__word--disabled"] : ''}`}
                                                onClick={() => handleWordClick(fraseIndex, word)}
                                            >
                                                {word}
                                            </div>
                                        ))}
                                </div>

                                <div className={styles["page36__input--frase"]}>
                                    {respostas[fraseIndex] &&
                                        respostas[fraseIndex].map((palavra, index) => (
                                            <div
                                                key={index}
                                                className={styles["page36__chip"]}
                                                onClick={() => handleChipClick(fraseIndex, palavra)}
                                            >
                                                {index === 0
                                                    ? palavra.charAt(0).toUpperCase() + palavra.slice(1)
                                                    : palavra}
                                            </div>
                                        ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className={styles["page36__check--button"]} onClick={verificarRespostas}>
                        Check
                    </button>
                    <aside className={styles["page36__new-aside"]}>
                            <div className={styles["page36__new-aside-notes1"]}>
                                <img className={styles["page36__aside-img"]} onClick={() => playAudio(bell)} src={campainha} alt="" />
                                <p>NOTE: RING THE BELL AND READ CAREFULLY - PLEASE!</p>
                            </div>
                            <div className={styles["page36__new-aside-notes2"]}>
                                <p style={{ fontSize: "2rem" }}>
                                  <li> Embora a tradução de: </li>
                                  <li> <span style={{ fontWeight: "bold"}}>"There is"</span>  seja <span style={{ fontWeight: "bold"}}>"há"</span> ou <span style={{ fontWeight: "bold"}}>"existe"</span> - Singular.</li>
                                  <li> <span style={{ fontWeight: "bold"}}>"There are"</span> seja <span style={{ fontWeight: "bold"}}>"há" </span>ou <span style={{ fontWeight: "bold"}}>"existem"</span> - Plural </li>            
                                  <li>No português no dia a dia é mais comum usar <span style={{ fontWeight: "bold"}}>"Tem".</span></li>
                                  <li>(Especialmente na linguagem falada)</li>
                                </p>
                            </div>
                        </aside>
                </main>

                <aside className={styles["page36__aside--container"]}>
                    <div className={styles["page36__tabela--afirmativa--container"]}>
                        <div className={styles["page36__table--header--afirmativa"]} onClick={() => playAudio(afirmativaAudio)} style={{ cursor: 'pointer' }}>
                            AFIRMATIVA
                        </div>
                        <table className={styles["page36__styled--table--afirmativa"]}>
                            <thead>
                                <tr>
                                    <th onClick={() => playAudio(sujeitoAudio)} style={{ cursor: 'pointer' }}>Sujeito</th>
                                    <th onClick={() => playAudio(verbo_auxiliarAudio)} style={{ cursor: 'pointer' }}>Verbo Auxiliar</th>
                                    <th onClick={() => playAudio(adverbioAudio)} style={{ cursor: 'pointer' }}>Adverb</th>
                                    <th onClick={() => playAudio(verboAudio)} style={{ cursor: 'pointer' }}>Verbo(s)</th>
                                    <th onClick={() => playAudio(objeto_complemento_audio)} style={{ cursor: 'pointer' }}>Objeto Complemento</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                    <div className={styles["page36__tabela--negativa--container"]}>
                        <div className={styles["page36__table--header--negativa"]} onClick={() => playAudio(negativaAudio)} style={{ cursor: 'pointer' }}>
                            NEGATIVA
                        </div>
                        <table className={styles["page36__styled--table--negativa"]}>
                            <thead>
                                <tr>
                                    <th onClick={() => playAudio(sujeitoAudio)} style={{ cursor: 'pointer' }}>Sujeito</th>
                                    <th onClick={() => playAudio(verbo_auxiliarAudio)} style={{ cursor: 'pointer' }}>Verbo Auxiliar</th>
                                    <th onClick={() => playAudio(adverbioAudio)} style={{ cursor: 'pointer' }}>
                                        <span style={{ color: 'red' }}>Not</span> <br /> Adverb
                                    </th>
                                    <th onClick={() => playAudio(verboAudio)} style={{ cursor: 'pointer' }}>Verbo(s)</th>
                                    <th onClick={() => playAudio(objeto_complemento_audio)} style={{ cursor: 'pointer' }}>Objeto Complemento</th>
                                </tr>
                            </thead>
                        </table>
                    </div>

                    <div className={styles["page36__imagens--container"]}>
                        <img src={pagina36_imagem1} alt="Pássaro" className={styles["page36__imagem"]} />
                        <img src={pagina36_imagem2} alt="Lápis" className={styles["page36__imagem"]} />
                    </div>
                </aside>
            </div>
        </div>

    );
};

export default Pagina36;
