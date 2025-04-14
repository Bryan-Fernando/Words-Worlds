import React from 'react';

import styles from './pagina105.module.css';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import pagina105_imagem1 from '../assets/images/pagina105_imagem1.webp';

import pg104_audio1e from '../assets/audios/pg104_audio1e.mp3';
import pg104_audio1p from '../assets/audios/pg104_audio1p.mp3';
import pg105_audio1 from '../assets/audios/pg105_audio1.mp3';
import pg105_audio2 from '../assets/audios/pg105_audio2.mp3';
import pg105_audio3 from '../assets/audios/pg105_audio3.mp3';
import pg105_audio4 from '../assets/audios/pg105_audio4.mp3';
import pg105_audio5 from '../assets/audios/pg105_audio5.mp3';

const audioMap = {
    pg105_audio1,
    pg104_audio1e,
    pg104_audio1p,
    pg105_audio2,
    pg105_audio3,
    pg105_audio4,
    pg105_audio5
};

const playAudio = (audioKey) => {
    if (audioMap[audioKey]) {
        const audio = new Audio(audioMap[audioKey]);
        audio.play().catch((error) => console.error("Erro ao reproduzir o áudio:", error));
    } else {
        console.warn(`Áudio não encontrado para: ${audioKey}`);
    }
};

const Pagina105 = () => {
    return (
        <div className={styles["page105__container"]}>
    <main className={styles["page105__main"]}>

        <header className={styles["page105__header"]}>
            <h1 className={styles["page105__h1"]}>
                Useful Expressions
                <img
                    src={eng_audio_icon}
                    alt="English audio"
                    className={styles["page105__header--icon"]}
                    onClick={() => playAudio("pg104_audio1e")}
                />
                <img
                    src={ptbr_audio_icon}
                    alt="Portuguese audio"
                    className={styles["page105__header--icon"]}
                    onClick={() => playAudio("pg104_audio1p")}
                />
            </h1>
        </header>

        <div className={styles["page105__container--questoes"]}>
            <div className={styles["page105__questions"]}>
                {[
                    ["Can you say that again, please?", "(Você pode dizer isso de novo, por favor?)", "pg105_audio1"],
                    ["Could you speak more slowly, please?", "(Você poderia falar mais devagar, por favor?)", "pg105_audio2"],
                    ["Sorry, I don’t understand.", "(Desculpe, não entendo.)", "pg105_audio3"],
                    ["I have a question.", "(Eu tenho uma pergunta / Eu tenho uma dúvida.)", "pg105_audio4"],
                    ["Please speak slowly.", "(Por favor fale devagar.)", "pg105_audio5"]
                ].map((sentence, index) => (
                    <div key={index} className={styles["page105__question"]}>
                        <p className={styles["page105__text--red"]}>
                            <em>{sentence[0]}</em>
                            <img
                                src={eng_audio_icon}
                                alt="Audio Icon"
                                className={styles["page105__header--icon"]}
                                onClick={() => playAudio(sentence[2])}
                            />
                        </p>
                        <p className={styles["page105__text--black"]}><strong>{sentence[1]}</strong></p>
                    </div>
                ))}
            </div>

            <div className={styles["page105__container--imagem"]}>
                <img className={styles["page105__imagem"]} src={pagina105_imagem1} alt="Learning" />
            </div>
        </div>
    </main>

    <aside className={styles["page105__aside"]}>
        <div className={styles["page105__aside--container"]}>
            <div className={styles["page105__aside--notes1"]}>
                <p><strong>Word Bank</strong></p>
            </div>
            <div className={styles["page105__aside--notes2"]}>
                <div className={styles["page105__aside--notes3"]}>
                    {[
                        ["Nice to meet you", "(Prazer em conhecê-lo/la)"],
                        ["Nice meeting you too", "(Foi um prazer conhecê-lo/la também)"],
                        ["It’s a pleasure to meet you", "(É um prazer conhecê-lo/la)"],
                        ["Glad to meet you", "(Contente em conhecê-lo/la)"]
                    ].map((text, index) => (
                        <div key={index}>
                            <p className={styles["page105__aside--notes2--vermelho"]}>{text[0]}</p>
                            <p className={styles["page105__aside--notes2--preto"]}>{text[1]}</p>
                        </div>
                    ))}
                </div>

                <div>
                    {[
                        ["I’m happy to meet you", "(Estou feliz por conhecê-lo/la)"],
                        ["Pleased to meet you", "(Satisfação em conhecê-lo/la)"],
                        ["My pleasure", "(O prazer é meu.)"],
                        ["Very pleased", "(Muito prazer.)"]
                    ].map((text, index) => (
                        <div key={index + 4}>
                            <p className={styles["page105__aside--notes2--vermelho"]}>{text[0]}</p>
                            <p className={styles["page105__aside--notes2--preto"]}>{text[1]}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </aside>
</div>

    );
};

export default Pagina105;
