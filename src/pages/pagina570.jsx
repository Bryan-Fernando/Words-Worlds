import React, { useEffect } from "react";
import styles from "./pagina570.module.css";

const Pagina570 = ({ onValidar }) => {
  useEffect(() => {
    if (onValidar) onValidar(true);
  }, [onValidar]);

  return (
    <div className={styles.page570__container}>
      <header className={styles.page570__header}>
        <h1 className={styles.page570__title}>Real Life Dialogue</h1>
      </header>

      <main className={styles.page570__main}>
        <section className={styles.page570__card}>
          {/* Imagem (placeholder) */}
          <figure className={styles.page570__imageWrapper}>
            <div className={styles.page570__imagePlaceholder} />
          </figure>

          {/* Diálogo */}
          <div className={styles.page570__dialogue}>
            <p>
              <span className={`${styles.page570__speaker} ${styles["is-bia"]}`}>Bia:</span>
              <span className={styles.page570__line}>
                Hey, how <strong>was</strong> your weekend?
              </span>
            </p>
            <p>
              <span className={`${styles.page570__speaker} ${styles["is-talita"]}`}>Talita:</span>
              <span className={`${styles.page570__line} ${styles["is-talita"]}`}>
                It <strong>was</strong> great, thanks! What about yours?
              </span>
            </p>
            <p>
              <span className={`${styles.page570__speaker} ${styles["is-bia"]}`}>Bia:</span>
              <span className={styles.page570__line}>
                It <strong>was</strong> good, thanks for asking. What <strong>did</strong> you <strong>do</strong> last weekend?
              </span>
            </p>
            <p>
              <span className={`${styles.page570__speaker} ${styles["is-talita"]}`}>Talita:</span>
              <span className={`${styles.page570__line} ${styles["is-talita"]}`}>
                Last weekend, I <strong>went</strong> hiking with some friends. We <strong>found</strong> this beautiful trail and <strong>spent</strong> the whole day exploring nature.
              </span>
            </p>
            <p>
              <span className={`${styles.page570__speaker} ${styles["is-bia"]}`}>Bia:</span>
              <span className={styles.page570__line}>
                That sounds fun! <strong>Did</strong> you <strong>see</strong> anything interesting?
              </span>
            </p>
            <p>
              <span className={`${styles.page570__speaker} ${styles["is-talita"]}`}>Talita:</span>
              <span className={`${styles.page570__line} ${styles["is-talita"]}`}>
                Yeah, we <strong>stumbled</strong> upon a hidden waterfall. It <strong>was</strong> so serene and peaceful.
              </span>
            </p>
            <p>
              <span className={`${styles.page570__speaker} ${styles["is-bia"]}`}>Bia:</span>
              <span className={styles.page570__line}>
                Nice! I just <strong>stayed</strong> home and <strong>caught up</strong> on some reading. <strong>Did</strong> you <strong>do</strong> anything else on your hike?
              </span>
            </p>
            <p>
              <span className={`${styles.page570__speaker} ${styles["is-talita"]}`}>Talita:</span>
              <span className={`${styles.page570__line} ${styles["is-talita"]}`}>
                Well, after the hike, we <strong>had</strong> a barbecue. It <strong>was</strong> a perfect way to end the day.
              </span>
            </p>
            <p>
              <span className={`${styles.page570__speaker} ${styles["is-bia"]}`}>Bia:</span>
              <span className={styles.page570__line}>
                That sounds like a fantastic weekend. We should plan something together next time!
              </span>
            </p>
          </div>
        </section>

        {/* Nota */}
        <section className={styles.page570__note}>
          <p>
            <strong>Nota 🎧</strong><br />
            <span>Enfatizando o <span className={styles.page570__highlight}>Simple Past Be</span> e <span className={styles.page570__highlight}>Main Verbs</span></span>
          </p>
        </section>
      </main>
    </div>
  );
};

export default Pagina570;
