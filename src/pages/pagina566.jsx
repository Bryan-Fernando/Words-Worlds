import React from 'react';
import styles from './pagina566.module.css';

/* Imagens — substitua pelos caminhos corretos do seu projeto */
// import imgBench from '../assets/img/dialogues/co-workers-bench.jpg';
// import imgCafe from '../assets/img/dialogues/classmates-cafe.jpg';

const Pagina566 = () => {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Real Life Dialogue</h1>

      {/* Between Co-workers */}
      <section className={styles.pair}>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Between Co-workers</h3>

          <p><strong className={styles.nameA}>Emma:</strong> Sophie, do you eat lunch in the cafeteria?</p>
          <p>
            <strong className={styles.nameB}>Sophie:</strong> I <span className={styles.emph}>seldom</span> eat there. 
            I prefer bringing my lunch from home. It’s quieter.
          </p>
          <p><strong className={styles.nameA}>Emma:</strong> How often do you check emails?</p>
          <p>
            <strong className={styles.nameB}>Sophie:</strong> I check them <span className={styles.emph}>constantly</span> throughout the day. 
            It’s part of my routine. And you, Emma?
          </p>
          <p>
            <strong className={styles.nameA}>Emma:</strong> I <span className={styles.emph}>usually</span> check them in the morning and then in the afternoon. 
            I don’t like being glued to my inbox.
          </p>
        </div>

        <figure className={styles.media}>
          <img src={'' /* imgBench */} alt="Two co-workers chatting on a bench by the water" />
        </figure>
      </section>

      {/* Between Classmates */}
      <section className={styles.pair}>
        <figure className={styles.media}>
          <img src={'' /* imgCafe */} alt="Classmates chatting in a café" />
        </figure>

        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Between Classmates</h3>

          <p><strong className={styles.nameA}>David:</strong> Hi, Lisa! How often do you visit the library to study?</p>
          <p>
            <strong className={styles.nameB}>Mark:</strong> I go there <span className={styles.emph}>regularly</span>, almost every day after classes. 
            It helps me concentrate better.
          </p>
          <p>
            <strong className={styles.nameA}>David:</strong> I <span className={styles.emph}>rarely</span> study there. I prefer the café or my dorm room.
          </p>
          <p>
            <strong className={styles.nameB}>Mark:</strong> Yeah, everyone has their spot. Oh, do you <span className={styles.emph}>often</span> 
            participate in the math club meetings?
          </p>
          <p>
            <strong className={styles.nameA}>David:</strong> Not really. I <span className={styles.emph}>occasionally</span> join when they have 
            interesting discussions, maybe once a month or so.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Pagina566;
