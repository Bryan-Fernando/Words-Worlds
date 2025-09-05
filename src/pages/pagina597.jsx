import React, { useEffect } from "react";
import styles from "./pagina597.module.css";

const Pagina597 = ({ onValidar }) => {
  useEffect(() => { onValidar?.(true); }, [onValidar]);

  return (
    <div className={styles.page597__container}>
      <header className={styles.page597__header}>
        <h1 className={styles.page597__title}>Conversation</h1>
      </header>

      <main className={styles.page597__main}>
        <section className={styles.page597__content}>
          {/* Coluna esquerda: título + diálogo */}
          <div className={styles.page597__left}>
            <h3 className={styles.page597__topic}>Sections in a Mall</h3>

            <div className={styles.page597__dialogue}>
              <p>
                <span className={styles.page597__speaker}>Jane:</span>
                <span className={styles.page597__line}>
                  Hey, have you been to the new mall that just opened up?
                </span>
              </p>

              <p>
                <span className={`${styles.page597__speaker} ${styles.isSecond}`}>Thomas:</span>
                <span className={`${styles.page597__line} ${styles.isSecond}`}>
                  No, not yet! Is it any good?
                </span>
              </p>

              <p>
                <span className={styles.page597__speaker}>Jane:</span>
                <span className={styles.page597__line}>
                  It’s amazing! There’s so much to do there besides just shopping. They’ve got all sorts of
                  stores, from high-end fashion boutiques to unique little specialty shops.
                </span>
              </p>

              <p>
                <span className={`${styles.page597__speaker} ${styles.isSecond}`}>Thomas:</span>
                <span className={`${styles.page597__line} ${styles.isSecond}`}>
                  Nice! What kind of specialty shops are we talking about?
                </span>
              </p>

              <p>
                <span className={styles.page597__speaker}>Jane:</span>
                <span className={styles.page597__line}>
                  Oh, you name it! There’s a comic book store, a{" "}
                  <em>shop dedicated entirely to artisanal chocolates</em>, a vintage vinyl record shop – it’s a
                  paradise for anyone with eclectic interests.
                </span>
              </p>

              <p>
                <span className={`${styles.page597__speaker} ${styles.isSecond}`}>Thomas:</span>
                <span className={`${styles.page597__line} ${styles.isSecond}`}>
                  Wow, sounds like they’ve got something for everyone. What about the food court?
                </span>
              </p>

              <p>
                <span className={styles.page597__speaker}>Jane:</span>
                <span className={styles.page597__line}>
                  Oh, the food court is incredible! It’s not your typical mall fare either. They’ve got everything
                  from gourmet burgers to sushi, and even some vegan options for those who are health-conscious.
                </span>
              </p>

              <p>
                <span className={`${styles.page597__speaker} ${styles.isSecond}`}>Thomas:</span>
                <span className={`${styles.page597__line} ${styles.isSecond}`}>
                  That’s awesome! So, it’s not just a place for shopping, but also for spending time and
                  enjoying different experiences.
                </span>
              </p>

              <p>
                <span className={styles.page597__speaker}>Jane:</span>
                <span className={styles.page597__line}>
                  Exactly! They’ve designed it to be a social hub where you can hang out with friends, grab a bite
                  to eat, catch a movie at the cinema, or just people-watch while sipping on some coffee.
                </span>
              </p>

              <p>
                <span className={`${styles.page597__speaker} ${styles.isSecond}`}>Thomas:</span>
                <span className={`${styles.page597__line} ${styles.isSecond}`}>
                  Sounds like my kind of place. Let’s definitely plan a trip there soon!
                </span>
              </p>

              <p>
                <span className={styles.page597__speaker}>Jane:</span>
                <span className={styles.page597__line}>
                  Absolutely! I can’t wait to show you around. It’s seriously the coolest mall I’ve ever been to.
                </span>
              </p>
            </div>
          </div>

          {/* Coluna direita: 3 imagens (placeholders) */}
          <aside className={styles.page597__right}>
            <div className={styles.page597__photo} />
            <div className={styles.page597__photo} />
            <div className={styles.page597__photo} />
          </aside>
        </section>

        {/* Word Bank */}
        <section className={styles.page597__wordbank}>
          <div className={styles.page597__wbHeader}>Word Bank</div>
          <div className={styles.page597__wbBody}>
            <p>Community gathering</p>
            <p>
              <strong>Mall fare</strong> = typical types of food and dining options found in shopping malls.
            </p>
            <p>
              This often includes fast food chains, snack bars, and casual dining restaurants.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Pagina597;
