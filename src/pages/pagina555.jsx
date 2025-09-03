import React, { useEffect } from 'react';
import styles from './pagina555.module.css';

const Pagina555 = ({ onValidar }) => {
  useEffect(() => { onValidar?.(true); }, [onValidar]);

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Real-life Dialogues</h1>
      <h2 className={styles.subtitle}>Part 2 / 2</h2>

      <figure className={styles.heroWrap}>
        <img
          src="" /* sua imagem aqui */
          alt="Friends chatting and laughing on the street"
          className={styles.hero}
        />
      </figure>

      <main className={styles.dialog}>
        <p className={styles.lineA}>
          <strong className={styles.nameA}>Ana:</strong>{' '}
          Oh, how could I forget? That road trip was a blast. By the time we reached
          our destination, we had already shared so many laughs and created lifelong memories.
        </p>

        <p className={styles.lineB}>
          <strong className={styles.nameB}>Chris:</strong>{' '}
          Right? It's one of those experiences that shaped our friendship. By the way,
          have you ever revisited any of the places we went to during that trip?
        </p>

        <p className={styles.lineA}>
          <strong className={styles.nameA}>Ana:</strong>{' '}
          Surprisingly, yes! A couple of years ago, I found myself in the same town.
          By the time I walked through those familiar streets, I had a flood of memories
          from our road trip.
        </p>

        <p className={styles.lineB}>
          <strong className={styles.nameB}>Chris:</strong>{' '}
          That's incredible. Our road trip was like a chapter in the book of our friendship.
          By the way, have you ever considered organizing a reunion for our college group?
        </p>

        <p className={styles.lineA}>
          <strong className={styles.nameA}>Ana:</strong>{' '}
          Funny you mention that. By the time we last spoke on the phone, I had already
          started planning a reunion. It's been a while since we all got together, and I
          thought it would be a great opportunity to reconnect.
        </p>

        <p className={styles.lineB}>
          <strong className={styles.nameB}>Chris:</strong>{' '}
          That's a fantastic idea! Count me in. It's amazing how time flies, and by the time
          we meet again, who knows what other adventures we'll have to share.
        </p>

        <p className={styles.lineA}>
          <strong className={styles.nameA}>Ana:</strong>{' '}
          Definitely. Life is a series of moments, and by the time we catch up again,
          I'm sure we'll have even more stories to tell.
        </p>
      </main>
    </div>
  );
};

export default Pagina555;
