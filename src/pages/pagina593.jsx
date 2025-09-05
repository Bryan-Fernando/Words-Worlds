import React, { useEffect } from "react";
import styles from "./pagina593.module.css";

const Pagina593 = ({ onValidar }) => {
  useEffect(() => { if (onValidar) onValidar(true); }, [onValidar]);

  return (
    <div className={styles.page593__container}>
      <header className={styles.page593__header}>
        <h1 className={styles.page593__title}>Real Life Dialogue</h1>
      </header>

      <main className={styles.page593__main}>
        {/* ===== Grid 3x2 ===== */}
        <section className={styles.page593__grid}>
          {/* 1 */}
          <article className={styles.page593__card}>
            <div className={styles.page593__img} />
            <div className={styles.page593__dialogue}>
              <p><span className={styles.page593__tag}>A:</span> <span>What is he?</span></p>
              <p><span className={`${styles.page593__tag} ${styles.isB}`}>B:</span> <span className={styles.isB}>He is a college professor.</span></p>
            </div>
          </article>

          {/* 2 */}
          <article className={styles.page593__card}>
            <div className={styles.page593__img} />
            <div className={styles.page593__dialogue}>
              <p><span className={styles.page593__tag}>A:</span> <span>Who is he?</span></p>
              <p><span className={`${styles.page593__tag} ${styles.isB}`}>B:</span> <span className={styles.isB}>He is Valério rancher.</span></p>
            </div>
          </article>

          {/* 3 */}
          <article className={styles.page593__card}>
            <div className={styles.page593__img} />
            <div className={styles.page593__dialogue}>
              <p><span className={styles.page593__tag}>A:</span> <span>What are they?</span></p>
              <p><span className={`${styles.page593__tag} ${styles.isB}`}>B:</span> <span className={styles.isB}>They’re firefighters.</span></p>
            </div>
          </article>

          {/* 4 */}
          <article className={styles.page593__card}>
            <div className={styles.page593__img} />
            <div className={styles.page593__dialogue}>
              <p><span className={styles.page593__tag}>A:</span> <span>What is she?</span></p>
              <p>
                <span className={`${styles.page593__tag} ${styles.isB}`}>B:</span>
                <span className={styles.isB}>
                  She’s a gynecologist obstetrician, college professor and researcher.
                </span>
              </p>
              <p><span className={styles.page593__tag}>A:</span> <span>Wow!</span></p>
            </div>
          </article>

          {/* 5 */}
          <article className={styles.page593__card}>
            <div className={styles.page593__img} />
            <div className={styles.page593__dialogue}>
              <p><span className={styles.page593__tag}>A:</span> <span>Who is she?</span></p>
              <p><span className={`${styles.page593__tag} ${styles.isB}`}>B:</span> <span className={styles.isB}>She is a nurse.</span></p>
              <p><span className={styles.page593__tag}>A:</span> <span>Is she single?</span></p>
              <p><span className={`${styles.page593__tag} ${styles.isB}`}>B:</span> <span className={styles.isB}>No, she’s engaged.</span></p>
            </div>
          </article>

          {/* 6 */}
          <article className={styles.page593__card}>
            <div className={styles.page593__img} />
            <div className={styles.page593__dialogue}>
              <p><span className={styles.page593__tag}>A:</span> <span>Who is he?</span></p>
              <p><span className={`${styles.page593__tag} ${styles.isB}`}>B:</span> <span className={styles.isB}>He is my friend Gustavo.</span></p>
              <p><span className={styles.page593__tag}>A:</span> <span>Oh cool! Is he a pilot?</span></p>
              <p><span className={`${styles.page593__tag} ${styles.isB}`}>B:</span> <span className={styles.isB}>Yes, he is.</span></p>
              <p><span className={styles.page593__tag}>A:</span> <span>Is he single?</span></p>
              <p><span className={`${styles.page593__tag} ${styles.isB}`}>B:</span> <span className={styles.isB}>Not sure.</span></p>
            </div>
          </article>
        </section>

        {/* ===== Word Bank ===== */}
        <section className={styles.page593__wordbank}>
          <div className={styles.page593__wbHeader}>Word Bank</div>
          <div className={styles.page593__wbGrid}>
            <div className={styles.page593__wbCol}>
              <p><strong>single</strong><br/>solteiro(a)</p>
              <p><strong>married</strong><br/>casado(a)</p>
              <p><strong>divorced</strong><br/>divorciado(a)</p>
            </div>
            <div className={styles.page593__wbCol}>
              <p><strong>engaged</strong><br/>noivo(a)</p>
              <p><strong>in a committed relationship</strong><br/>em um relacionamento sério</p>
              <p><strong>separated</strong><br/>separado(a)</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Pagina593;
