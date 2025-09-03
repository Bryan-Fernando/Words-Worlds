import React, { useEffect } from 'react';
import styles from './pagina546.module.css';

const Pagina546 = ({ onValidar }) => {
  useEffect(() => { onValidar?.(true); }, [onValidar]);

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Real-life Dialogues</h1>

      {/* ROW 1 - imagem esquerda / diálogo direita */}
      <section className={`${styles.row} ${styles.row1}`}>
        <figure className={styles.media}>
          <img
            src="" /* imagem 1 */
            alt="Two friends looking at a phone and smiling"
          />
        </figure>

        <div className={styles.dialogCard}>
          <div className={styles.dialog}>
            <p><strong>Sarah:</strong> Hi, Amy! Do you like getting new phones?</p>
            <p><strong>Amy:</strong> Hi, Sarah! Yes, I do. Right now, I'm thinking about buying the new iPhone.</p>
            <p><strong>Sarah:</strong> Cool! Which one do you want?</p>
            <p><strong>Amy:</strong> I want the iPhone 13. It has a great camera.</p>
            <p><strong>Sarah:</strong> Nice! When are you buying it?</p>
            <p><strong>Amy:</strong> I usually buy new phones when they come out, but this time, I'm waiting a bit.</p>
            <p><strong>Sarah:</strong> Makes sense. How much does it cost?</p>
            <p><strong>Amy:</strong> It's a bit expensive, but I've saved up for it.</p>
            <p><strong>Sarah:</strong> Where do you usually buy your phones?</p>
            <p><strong>Amy:</strong> I usually buy them from the Apple Store, but I'm thinking of looking for deals elsewhere.</p>
            <p><strong>Sarah:</strong> That's smart. Does it support the latest technology?</p>
            <p><strong>Amy:</strong> Yes, it supports 5G, and the processor is superfast.</p>
            <p><strong>Sarah:</strong> Sounds great! I hope you like it.</p>
            <p><strong>Amy:</strong> Me too! I'm really excited to try out all its features.</p>
            <p><strong>Sarah:</strong> Good luck with your new phone, Amy!</p>
            <p><strong>Amy:</strong> Thanks, Sarah! I'll let you know how it goes.</p>
          </div>
        </div>
      </section>

      {/* ROW 2 - diálogo esquerda / imagem direita */}
      <section className={`${styles.row} ${styles.row2}`}>
        <div className={styles.dialogCard}>
          <div className={styles.dialog}>
            <p><strong>Lisa:</strong> Hey, Tom! Any plans for vacations this year?</p>
            <p>
              <strong>Tom:</strong> Yes, <span className={styles.emph}>I am planning</span> a trip to Portugal next month.
              Have you ever been there?
            </p>
            <p>
              <strong>Lisa:</strong> No, I haven't. <span className={styles.emph}>How are you feeling</span> about the upcoming trip?
            </p>
            <p>
              <strong>Tom:</strong> <span className={styles.emph}>I am really excited!</span> I've heard the beaches are
              stunning, and the food is supposed to be incredible.
            </p>
            <p>
              <strong>Lisa:</strong> Portugal sounds amazing! <span className={styles.emph}>I am thinking</span> of visiting
              Spain. Any recommendations?
            </p>
            <p>
              <strong>Tom:</strong> Oh, Spain is fantastic! Barcelona is known for its architecture, and
              <span className={styles.emph}> you are going to love</span> the paella.
            </p>
            <p>
              <strong>Lisa:</strong> <span className={styles.emph}>I am already looking forward</span> to trying it.
              The food there is supposed to be so diverse.
            </p>
            <p>
              <strong>Tom:</strong> Absolutely, Spanish cuisine is one of my favorites.
              <span className={styles.emph}> I am already imagining</span> the delicious dishes.
            </p>
            <p>
              <strong>Lisa:</strong> Well, have an incredible time in Portugal!
              <span className={styles.emph}> I am hoping</span> to plan my trip soon.
            </p>
            <p><strong>Tom:</strong> Thank you! Let's exchange stories about our travels when we're both back.</p>
            <p><strong>Lisa:</strong> Definitely! Enjoy every moment of your trip!</p>
          </div>
        </div>

        <figure className={styles.media}>
          <img
            src="" /* imagem 2 */
            alt="Couple planning a trip with a map and camera"
          />
        </figure>
      </section>

      {/* NOTA */}
      <section className={styles.noteWrap}>
        <div className={styles.noteHeader}>NOTA</div>
        <div className={styles.noteBody}>
          Também podemos usar o gerúndio (Present Continuous) para enfatizar planos
          futuros e antecipações.
        </div>
      </section>
    </div>
  );
};

export default Pagina546;
