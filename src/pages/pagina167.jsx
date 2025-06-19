import React from 'react';
import styles from './pagina167.module.css';

import pagina167_imagem from '../assets/images/pagina167_imagem1.webp';

const Pagina167 = () => {
  return (
    <div className={styles["page167__container"]}>
      <h1 className={styles["page167__title"]}>Examples</h1>

      <div className={styles["page167__examples"]}>
        <div className={styles["page167__example-box"]}>
          <p>
            <span className={styles["page167__text-red"]}>A: Do we have to go to São Paulo ?</span>
          </p>
          <p><strong>B:</strong> Yes, we do / No, we don’t</p>
        </div>

        <div className={styles["page167__example-box"]}>
          <p>
            <span className={styles["page167__text-red"]}>
              A: Do you speak Spanish ? <span className={styles["page167__text-blue"]}>( Singular )</span>
            </span>
          </p>
          <p><strong>B:</strong> Yes, I do / No, I don’t</p>
        </div>

        <div className={styles["page167__example-box"]}>
          <p>
            <span className={styles["page167__text-red"]}>
              A: Do y’all play in a rock band ? <span className={styles["page167__text-blue"]}>( Plural )</span>
            </span>
          </p>
          <p><strong>B:</strong> Yes, we do / No, we don’t</p>
        </div>

        <div className={styles["page167__example-box"]}>
          <p>
            <span className={styles["page167__text-red"]}>A: Do they go to the park very often ?</span>
          </p>
          <p><strong>B:</strong> Yes, they do / No, they don’t</p>
        </div>
      </div>

      <img src={pagina167_imagem} alt="Imagem Exemplo" className={styles["page167__image"]} />

      <section className={styles["page167__note"]}>
        <div className={styles["page167__note-header"]}>
          Nota
        </div>
        <div className={styles["page167__note-content"]}>
          Para respostas curtas, tanto afirmativas quanto negativas, usamos os verbos auxiliares <span>do</span>, <span>don’t</span>, <span>does</span> e <span>doesn’t</span>. Esses verbos representam o verbo da pergunta.
        </div>
      </section>
    </div>
  );
};

export default Pagina167;
