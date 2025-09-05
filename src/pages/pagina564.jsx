import React, { useEffect } from 'react';
import styles from './pagina564.module.css';

/* Imagens – troque pelos caminhos corretos no seu projeto */
// import imgTop from '../assets/img/dialogues/music-office.jpg';
// import imgPiano from '../assets/img/dialogues/piano-player.jpg';
// import imgTrumpet from '../assets/img/dialogues/trumpet-player.jpg';

const Pagina564 = ({ onValidar }) => {
  useEffect(() => { onValidar?.(true); }, [onValidar]);

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Real-life Dialogues</h1>

      {/* Bloco topo: imagem + diálogo */}
      <section className={styles.topGrid}>
        <figure className={styles.topImage}>
          <img src={'' /* imgTop */} alt="People chatting at the office" />
        </figure>

        <div className={styles.dialogue}>
          <p className={styles.lineA}><strong className={styles.nameA}>Ana:</strong> Do you like classical music?</p>
          <p className={styles.lineB}><strong className={styles.nameB}>João:</strong> Yes, I do. And you?</p>

          <p className={styles.lineA}>
            <strong className={styles.nameA}>Ana:</strong> I like it <span className={styles.hl}>too</span>. I usually listen to Mozart and Beethoven.
          </p>
          <p className={styles.lineB}>
            <strong className={styles.nameB}>João:</strong> That’s cool! I <span className={styles.hl}>also</span> enjoy classical music. But besides that, I appreciate jazz.
          </p>

          <p className={styles.lineA}>
            <strong className={styles.nameA}>Ana:</strong> Oh, interesting! I <span className={styles.hl}>also</span> appreciate jazz. Who are your favorite artists?
          </p>
          <p className={styles.lineB}>
            <strong className={styles.nameB}>João:</strong> I really like Mike Davidson and John Colt.
          </p>

          <p className={styles.lineA}>
            <strong className={styles.nameA}>Ana:</strong> Ah, I <span className={styles.hl}>too</span> like Miles Davis! <span className={styles.hl}>Also</span>, I’m a fan of Mina Slides.
          </p>
          <p className={styles.lineB}>
            <strong className={styles.nameB}>João:</strong> Cool! I <span className={styles.hl}>too</span> admire Mina Slides. It seems we have similar musical tastes.
          </p>

          <p className={styles.lineA}>
            <strong className={styles.nameA}>Ana:</strong> Yes, it’s nice to find someone with similar interests <span className={styles.hl}>as well</span>.
          </p>
        </div>
      </section>

      {/* Imagens inferiores */}
      <section className={styles.gallery}>
        <figure className={styles.galleryItem}>
          <img src={'' /* imgPiano */} alt="Woman playing the piano" />
        </figure>
        <figure className={styles.galleryItem}>
          <img src={'' /* imgTrumpet */} alt="Man playing the trumpet" />
        </figure>
      </section>

      {/* Nota */}
      <footer className={styles.noteWrap}>
        <div className={styles.noteHead}>NOTE: Listening Comprehension and Pronunciation</div>
        <div className={styles.noteBody}>
          Now, take a moment to focus on the dialogues(s). Pay attention to the way the
          speakers express themselves, and try to practice mimicking their pronunciation.
        </div>
      </footer>
    </div>
  );
};

export default Pagina564;
