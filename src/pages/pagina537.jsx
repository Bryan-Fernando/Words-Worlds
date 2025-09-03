import React, { useEffect } from 'react';
import styles from './pagina537.module.css';

const Pagina537 = ({ onValidar }) => {
  useEffect(() => { onValidar?.(true); }, [onValidar]);

  return (
    <div className={styles.page__container}>
      <header className={styles.page__header}>
        <h1 className={styles.page__title}>Real-life Dialogues</h1>
      </header>

      <h2 className={styles.sectionLabel}>Checking In At Hotel</h2>

      <figure className={styles.heroWrap}>
        <img
          src="" /* sua imagem aqui */
          alt="Guest talking to a front-desk clerk at a hotel"
          className={styles.hero}
        />
      </figure>

      <main className={styles.blocks}>

        {/* 1 */}
        <section className={styles.box}>
          <h3 className={styles.boxTitle}>Arrival at the Hotel</h3>
          <p className={styles.lineA}>
            <strong className={styles.nameA}>Guest:</strong> Hi, we have a reservation under the name Smith.
          </p>
          <p className={styles.lineB}>
            <strong className={styles.nameB}>Front Desk Clerk:</strong> Welcome, Mr. and Mrs. Smith. I see your reservation right here. Could I have your identification, please?
          </p>
          <p className={styles.lineA}>
            <strong className={styles.nameA}>Guest:</strong> Sure, here’s my ID.
          </p>
        </section>

        {/* 2 */}
        <section className={styles.box}>
          <h3 className={styles.boxTitle}>Confirming Reservation Details</h3>
          <p className={styles.lineA}>
            <strong className={styles.nameA}>Front Desk Clerk:</strong> Thank you. Just to confirm, you have a deluxe room with a king-size bed for two nights, is that correct?
          </p>
          <p className={styles.lineB}>
            <strong className={styles.nameB}>Guest:</strong> Yes, that’s right.
          </p>
        </section>

        {/* 3 */}
        <section className={styles.box}>
          <h3 className={styles.boxTitle}>Providing Information</h3>
          <p className={styles.lineA}>
            <strong className={styles.nameA}>Front Desk Clerk:</strong> Great. Can you please fill out this registration form with your contact details?
          </p>
          <p className={styles.lineB}>
            <strong className={styles.nameB}>Guest:</strong> Of course, here you go.
          </p>
        </section>

        {/* 4 */}
        <section className={styles.box}>
          <h3 className={styles.boxTitle}>Asking about Amenities</h3>
          <p className={styles.lineA}>
            <strong className={styles.nameA}>Front Desk Clerk:</strong> Here’s your room key. Our hotel offers free Wi-Fi, a fitness center, and breakfast included. Is there anything else you’d like to know?
          </p>
          <p className={styles.lineB}>
            <strong className={styles.nameB}>Guest:</strong> Do you have a swimming pool?
          </p>
          <p className={styles.lineA}>
            <strong className={styles.nameA}>Front Desk Clerk:</strong> Yes, we do. The pool is open from 9 AM to 8 PM.
          </p>
        </section>

        {/* 5 */}
        <section className={styles.box}>
          <h3 className={styles.boxTitle}>Getting Directions</h3>
          <p className={styles.lineA}>
            <strong className={styles.nameA}>Guest:</strong> How do I get to my room from here?
          </p>
          <p className={styles.lineB}>
            <strong className={styles.nameB}>Front Desk Clerk:</strong> Take the elevator to the third floor, and your room is on the right side of the corridor.
          </p>
        </section>

      </main>
    </div>
  );
};

export default Pagina537;
