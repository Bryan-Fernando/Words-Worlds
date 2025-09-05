import React, { useEffect } from "react";
import styles from "./pagina581.module.css";

const Pagina581 = ({ onValidar }) => {
  useEffect(() => { if (onValidar) onValidar(true); }, [onValidar]);

  return (
    <div className={styles.page581__container}>
      <header className={styles.page581__header}>
        <h1 className={styles.page581__title}>Real-life Dialogues</h1>
      </header>

      <main className={styles.page581__main}>
        {/* ================= Topo: 2 mini-cards ================= */}
        <section className={styles.page581__miniGrid}>
          {/* Mini 1 - Greetings */}
          <div className={styles.page581__miniCard}>
            <figure className={styles.page581__miniImageWrapper}>
              <div className={styles.page581__miniImage} />
            </figure>

            <div className={styles.page581__miniContent}>
              <h3 className={styles.page581__miniTitle}>1. Greetings</h3>

              <div className={styles.page581__dialogue}>
                <p>
                  <span className={styles.page581__label}>a</span>
                  <span className={styles.page581__line}>Hi!</span>
                </p>
                <p>
                  <span className={styles.page581__label}>b</span>
                  <span className={`${styles.page581__line} ${styles["is-b"]}`}>
                    Hello! How are you?
                  </span>
                </p>
                <p>
                  <span className={styles.page581__label}>a</span>
                  <span className={styles.page581__line}>
                    I’m good, thank you. <br /> And you?
                  </span>
                </p>
                <p>
                  <span className={styles.page581__label}>b</span>
                  <span className={`${styles.page581__line} ${styles["is-b"]}`}>
                    I’m doing well, thanks.
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Mini 2 - Introducing */}
          <div className={styles.page581__miniCard}>
            <figure className={styles.page581__miniImageWrapper}>
              <div className={styles.page581__miniImage} />
            </figure>

            <div className={styles.page581__miniContent}>
              <h3 className={styles.page581__miniTitle}>2. Introducing</h3>

              <div className={styles.page581__dialogue}>
                <p>
                  <span className={styles.page581__label}>a</span>
                  <span className={styles.page581__line}>Hi, I’m Thomas</span>
                </p>
                <p>
                  <span className={styles.page581__label}>b</span>
                  <span className={`${styles.page581__line} ${styles["is-b"]}`}>
                    Nice to meet you, <br /> I’m Elizabeth.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className={styles.page581__divider} />

        {/* ================= Card grande bilíngue ================= */}
        <section className={styles.page581__bigCard}>
          <div className={styles.page581__bigDialogue}>
            <div className={styles.page581__row}>
              <span className={`${styles.page581__name} ${styles["is-mark"]}`}>Mark:</span>
              <div className={styles.page581__speech}>
                <span className={styles.page581__line}>Hello! My name is Mark.</span>
                <span className={styles.page581__pt}>Olá! Meu nome é Mark</span>
              </div>
            </div>

            <div className={styles.page581__row}>
              <span className={`${styles.page581__name} ${styles["is-emma"]}`}>Emma:</span>
              <div className={styles.page581__speech}>
                <span className={styles.page581__line}>
                  Hi, Mark. I’m Emma. Where are you from?
                </span>
                <span className={styles.page581__pt}>
                  Oi, Mark. Sou Emma. De onde você é.
                </span>
              </div>
            </div>

            <div className={styles.page581__row}>
              <span className={`${styles.page581__name} ${styles["is-mark"]}`}>Mark:</span>
              <div className={styles.page581__speech}>
                <span className={styles.page581__line}>
                  I’m from Calgary, Canada. How about you?
                </span>
                <span className={styles.page581__pt}>
                  Sou de Calgary, Canadá. E você?
                </span>
              </div>
            </div>

            <div className={styles.page581__row}>
              <span className={`${styles.page581__name} ${styles["is-emma"]}`}>Emma:</span>
              <div className={styles.page581__speech}>
                <span className={styles.page581__line}>
                  I’m Brazilian, from Rio de Janeiro, Brazil.
                </span>
                <span className={styles.page581__pt}>
                  Sou brasileira do Rio de Janeiro, Brasil.
                </span>
              </div>
            </div>

            <div className={styles.page581__row}>
              <span className={`${styles.page581__name} ${styles["is-mark"]}`}>Mark:</span>
              <div className={styles.page581__speech}>
                <span className={styles.page581__line}>
                  Wow! The most beautiful city in the world.
                </span>
                <span className={styles.page581__pt}>
                  Uau! A cidade mais linda do mundo.
                </span>
              </div>
            </div>
          </div>

          <figure className={styles.page581__bigImageWrapper}>
            <div className={styles.page581__bigImage} />
          </figure>
        </section>

        {/* ================= Word Bank ================= */}
        <section className={styles.page581__wordbank}>
          <div className={styles.page581__wbHeader}>Word Bank</div>

          <div className={styles.page581__wbGrid}>
            <div className={styles.page581__wbItem}>
              <div className={styles.page581__wbEn}>Nice to meet you.</div>
              <div className={styles.page581__wbPt}>Prazer em conhecê-lo/la.</div>
            </div>

            <div className={styles.page581__wbItem}>
              <div className={styles.page581__wbEn}>Glad to meet you.</div>
              <div className={styles.page581__wbPt}>Contentes em conhecê-lo/la.</div>
            </div>

            <div className={styles.page581__wbItem}>
              <div className={styles.page581__wbEn}>My pleasure.</div>
              <div className={styles.page581__wbPt}>O prazer é meu.</div>
            </div>

            <div className={styles.page581__wbItem}>
              <div className={styles.page581__wbEn}>Nice meeting you too.</div>
              <div className={styles.page581__wbPt}>Prazer conhecê-lo/la também.</div>
            </div>

            <div className={styles.page581__wbItem}>
              <div className={styles.page581__wbEn}>I’m happy to meet you.</div>
              <div className={styles.page581__wbPt}>Estou feliz por conhecê-lo/la.</div>
            </div>

            <div className={styles.page581__wbItem}>
              <div className={styles.page581__wbEn}>Very pleased.</div>
              <div className={styles.page581__wbPt}>Muito prazer.</div>
            </div>

            <div className={styles.page581__wbItem}>
              <div className={styles.page581__wbEn}>It’s a pleasure to meet you.</div>
              <div className={styles.page581__wbPt}>É um prazer em conhecê-lo/la.</div>
            </div>

            <div className={styles.page581__wbItem}>
              <div className={styles.page581__wbEn}>Pleased to meet you.</div>
              <div className={styles.page581__wbPt}>Satisfação em conhecê-lo/la.</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Pagina581;
