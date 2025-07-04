import React from 'react';
import styles from './pagina282.module.css';

import img1 from '../assets/images/pagina177_imagem4.webp';
import img2 from '../assets/images/pagina177_imagem3.webp';

const Pagina282 = () => {
  return (
    <div className={styles["page282__container"]}>
      {/* Header */}
      <h1 className={styles["page282__title"]}>Dialogues</h1>

      {/* 1 - Asking About a Meeting Time */}
      <div className={styles["page282__block"]}>
        <div className={styles["page282__text"]}>
          <p><strong>1 - Asking About a Meeting Time</strong></p>
          <p>What time is the meeting?</p>
          <p className={styles["page282__red"]}>It’s at 10:30 a.m.</p>
          <p>Got it. Thanks!</p>
          <p className={styles["page282__red"]}>No problem!</p>
        </div>
        <img src={img1} alt="Meeting Time Dialogue" className={styles["page282__image"]} />
      </div>

      {/* 2 - Game */}
      <div className={styles["page282__block2"]} >
        <div className={styles["page282__text"]}>
          <p><strong>2 - Game</strong></p>
          <p>What time does the game start?</p>
          <p className={styles["page282__red"]}>At 7:45 p.m.</p>
          <p>Great! I won’t be late.</p>
          <p className={styles["page282__red"]}>See you there!</p>
        </div>
      </div>

      {/* 3 - Asking About a Flight Time */}
      <div className={styles["page282__block3"]}>
        <div className={styles["page282__text"]}>
          <p><strong>3 - Asking About a Flight Time</strong></p>
          <p>What time is our flight?</p>
          <p className={styles["page282__red"]}>It’s at 6:20 a.m.</p>
          <p>So early! We should leave by 4.</p>
          <p className={styles["page282__red"]}>Yep, don’t oversleep!</p>
        </div>
        <img src={img2} alt="Flight Time Dialogue" className={styles["page282__image"]} />
      </div>

    </div>
  );
};

export default Pagina282;
