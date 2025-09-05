import React from 'react';
import styles from './pagina565.module.css';

/* Imagens — substitua pelos caminhos corretos do seu projeto */
// import imgCoffee from '../assets/img/dialogues/office-coffee.jpg';
// import imgJog from '../assets/img/dialogues/park-jog.jpg';
// import imgDriving from '../assets/img/dialogues/woman-driving.jpg';

const Pagina565 = () => {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Real Life Dialogue</h1>

      {/* 1) Weekend */}
      <section className={styles.pair}>
        <figure className={styles.media}>
          <img src={'' /* imgCoffee */} alt="Colleagues chatting by the coffee station" />
        </figure>

        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Weekend</h3>

          <p className={styles.lineA}>
            <strong className={styles.nameA}>Sarah:</strong> What do you usually do on weekends?
          </p>
          <p className={styles.lineB}>
            <strong className={styles.nameB}>John:</strong> I usually play soccer with my friends or
            go hiking in the mountains. How about you?
          </p>
          <p className={styles.lineA}>
            <strong className={styles.nameA}>Sarah:</strong> I often read books or watch movies at home.
          </p>
        </div>
      </section>

      {/* 2) Emily's Sister */}
      <section className={styles.pair}>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Emily’s Sister</h3>

          <p className={styles.lineA}>
            <strong className={styles.nameA}>Tom:</strong> Where does your sister work?
          </p>
          <p className={styles.lineB}>
            <strong className={styles.nameB}>Emily:</strong> She works at a hospital as a nurse. She loves
            helping people.
          </p>
          <p className={styles.lineA}>
            <strong className={styles.nameA}>Tom:</strong> That’s great! What does she usually do after work?
          </p>
          <p className={styles.lineB}>
            <strong className={styles.nameB}>Emily:</strong> She often goes for a run in the park or cooks
            dinner for the family.
          </p>
        </div>

        <figure className={styles.media}>
          <img src={'' /* imgJog */} alt="Two people jogging in the park" />
        </figure>
      </section>

      {/* 3) Getting to Work */}
      <section className={styles.pair}>
        <figure className={styles.media}>
          <img src={'' /* imgDriving */} alt="Woman driving a car and smiling" />
        </figure>

        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Getting to Work</h3>

          <p className={styles.lineA}>
            <strong className={styles.nameA}>Mark:</strong> How do you get to work every day?
          </p>
          <p className={styles.lineB}>
            <strong className={styles.nameB}>Lisa:</strong> I drive to work because it’s faster than
            taking the bus.
          </p>
          <p className={styles.lineA}>
            <strong className={styles.nameA}>Mark:</strong> Do you enjoy driving?
          </p>
          <p className={styles.lineB}>
            <strong className={styles.nameB}>Lisa:</strong> Yes, I love it! I listen to music and relax
            while driving.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Pagina565;
