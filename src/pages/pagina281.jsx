import React from 'react';
import styles from './pagina281.module.css';

import img1 from '../assets/images/pagina281_imagem1.webp';
import img2 from '../assets/images/pagina281_imagem2.webp';

const Pagina281 = () => {
  return (
    <div className={styles["page281__container"]}>
      {/* Header */}
      <h1 className={styles["page281__title"]}>Dialogues</h1>

      {/* 1 - Formal */}
      <div className={styles["page281__block"]}>
        <div className={styles["page281__text"]}>
          <p><strong>1 - Formal</strong></p>
          <p>Excuse me, do you have the time?</p>
          <p className={styles["page281__red"]}>Yes, it’s 10:15.</p>
          <p>Thank you!</p>
          <p className={styles["page281__red"]}>You’re welcome.</p>
        </div>
        <img src={img1} alt="Formal Dialogue" className={styles["page281__image"]} />
      </div>

      {/* 2 - Casual */}
      <div className={styles["page281__block"]}>
        <div className={styles["page281__text"]}>
          <p><strong>2 - Casual</strong></p>
          <p>Hey, what time is it?</p>
          <p className={styles["page281__red"]}>It’s 3:45.</p>
          <p>Oh, almost four! Thanks.</p>
          <p className={styles["page281__red"]}>No problem!</p>
        </div>
      </div>

      {/* 3 - On the Phone */}
      <div className={styles["page281__block"]}>
        <div className={styles["page281__text"]}>
          <p><strong>3 - On the Phone</strong></p>
          <p>Hi, do you know what time it is?</p>
          <p className={styles["page281__red"]}>Yeah, it’s 7:30.</p>
          <p>Oh! I’m late. Thanks!</p>
          <p className={styles["page281__red"]}>Hurry up!</p>
        </div>
        <img src={img2} alt="On the Phone Dialogue" className={styles["page281__image"]} />
      </div>

      {/* 4 - Asking in a Shop */}
      <div className={styles["page281__block"]}>
        <div className={styles["page281__text"]}>
          <p><strong>4 - Asking in a Shop</strong></p>
          <p>Excuse me, could you tell me the time, please?</p>
          <p className={styles["page281__red"]}>Sure! It’s 5:20.</p>
          <p>Thanks a lot!</p>
          <p className={styles["page281__red"]}>Anytime!</p>
        </div>
      </div>

    </div>
  );
};

export default Pagina281;
