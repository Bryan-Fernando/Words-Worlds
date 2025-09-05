import React, { useEffect } from "react";
import styles from "./pagina594.module.css";

const Pagina594 = ({ onValidar }) => {
  useEffect(() => { onValidar?.(true); }, [onValidar]);

  return (
    <div className={styles.page594__container}>
      <header className={styles.page594__header}>
        <h1 className={styles.page594__title}>Conversation</h1>
      </header>

      <main className={styles.page594__main}>
        {/* Hero (placeholder – sem import) */}
        <section className={styles.page594__hero}>
          <div className={styles.page594__heroImage} />
        </section>

        {/* Diálogo */}
        <section className={styles.page594__dialogueCard}>
          <div className={styles.page594__dialogue}>
            <p>
              <span className={styles.page594__speaker}>Olga:</span>
              <span className={styles.page594__line}>
                Hey! Welcome to my new studio apartment downtown! Come on in, I’m so excited to show you around.
              </span>
            </p>

            <p>
              <span className={`${styles.page594__speaker} ${styles.isSecond}`}>Clara:</span>
              <span className={`${styles.page594__line} ${styles.isSecond}`}>
                Wow, it’s so cozy in here! I love what you’ve done with the space.
              </span>
            </p>

            <p>
              <span className={styles.page594__speaker}>Olga:</span>
              <span className={styles.page594__line}>
                Thanks! Yeah, it’s not huge, but I’ve tried to make the most of it. So, here’s the living room area.
                I’ve got a comfy couch over there, perfect for lounging and watching TV.
              </span>
            </p>

            <p>
              <span className={`${styles.page594__speaker} ${styles.isSecond}`}>Clara:</span>
              <span className={`${styles.page594__line} ${styles.isSecond}`}>
                It’s perfect! And look at that cute coffee table, it really ties the room together.
              </span>
            </p>

            <p>
              <span className={styles.page594__speaker}>Olga:</span>
              <span className={styles.page594__line}>
                Thanks! And over here is the kitchenette slash bedroom area. I know, it’s a bit unconventional, but it
                works for me. Check out the mini-fridge and microwave, and I even managed to fit in a small stove.
              </span>
            </p>

            <p>
              <span className={`${styles.page594__speaker} ${styles.isSecond}`}>Clara:</span>
              <span className={`${styles.page594__line} ${styles.isSecond}`}>
                That’s so clever! It’s like having everything you need in one compact space.
              </span>
            </p>

            <p>
              <span className={styles.page594__speaker}>Olga:</span>
              <span className={styles.page594__line}>
                Exactly! And I’ve got a little dining table here too, for meals or as a workspace when I’m working from home.
              </span>
            </p>

            <p>
              <span className={`${styles.page594__speaker} ${styles.isSecond}`}>Clara:</span>
              <span className={`${styles.page594__line} ${styles.isSecond}`}>
                It’s all so well organized. And I see you’ve got a cozy bed tucked away in the corner.
              </span>
            </p>

            <p>
              <span className={styles.page594__speaker}>Olga:</span>
              <span className={styles.page594__line}>
                Yep, I didn’t want to sacrifice comfort, even in a small space. Oh, and check out the smart TV mounted
                on the wall. It’s been a game-changer for movie nights.
              </span>
            </p>

            <p>
              <span className={`${styles.page594__speaker} ${styles.isSecond}`}>Clara:</span>
              <span className={`${styles.page594__line} ${styles.isSecond}`}>
                That’s awesome! You’ve really thought of everything. I’m so happy for you and this adorable little place.
              </span>
            </p>

            <p>
              <span className={styles.page594__speaker}>Olga:</span>
              <span className={styles.page594__line}>
                Thanks! It’s been a fun project getting it all set up. I can’t wait to host you for a movie night or
                dinner sometime soon.
              </span>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Pagina594;
