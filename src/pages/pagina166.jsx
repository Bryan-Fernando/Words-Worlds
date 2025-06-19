import React from 'react';
import styles from './pagina166.module.css';

import pagina166_imagem1 from '../assets/images/pagina166_imagem1.webp';
import pagina166_imagem2 from '../assets/images/pagina166_imagem2.webp';

const Pagina166 = () => {
    return (
        <div className={styles["page166__container"]}>
            <h1 className={styles["page166__title"]}>Examples</h1>

            <section className={styles["page166__content"]}>
                {/* Bloco de Exemplos */}
                <div className={styles["page166__examples"]}>
                    <div className={styles["page166__example-box"]}>
                        <p><span className={styles["page166__text-red"]}>A: Do I have to work on Monday ?</span></p>
                        <p><strong>B:</strong> Yes, you do / No, you don’t</p>
                    </div>

                    <div className={styles["page166__example-box"]}>
                        <p><span className={styles["page166__text-red"]}>A: Does Tom play soccer ?</span></p>
                        <p><strong>B:</strong> Yes, he does / No, he doesn’t</p>
                    </div>

                    <div className={styles["page166__example-box"]}>
                        <p><span className={styles["page166__text-red"]}>A: Does Ane travel very often ?</span></p>
                        <p><strong>B:</strong> Yes, she does / No, she doesn’t</p>
                    </div>

                    <div className={styles["page166__example-box"]}>
                        <p><span className={styles["page166__text-red"]}>A: Does it rain a lot?</span></p>
                        <p><strong>B:</strong> Yes, it does / No, it doesn’t</p>
                    </div>
                </div>



                {/* Imagem Direita */}
                <div className={styles["page166__image-right"]}>
                    <img src={pagina166_imagem1} alt="Imagem 1" />
                </div>
            </section>

            {/* Imagem Esquerda Inferior */}
            <section className={styles["page166__image-bottom"]}>
                <img src={pagina166_imagem2} alt="Imagem 2" />
            </section>

            {/* Nota */}
            <section className={styles["page166__note"]}>
                <div className={styles["page166__note-header"]}>Nota</div>
                <div className={styles["page166__note-content"]}>
                    <p>
                        Para respostas curtas, tanto afirmativas quanto negativas, usamos os verbos auxiliares
                        <span className={styles["page166__text-red"]}> do</span>,
                        <span className={styles["page166__text-red"]}> don’t</span>,
                        <span className={styles["page166__text-red"]}> does</span> e
                        <span className={styles["page166__text-red"]}> doesn’t</span>. Esses verbos representam o verbo da pergunta.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Pagina166;
