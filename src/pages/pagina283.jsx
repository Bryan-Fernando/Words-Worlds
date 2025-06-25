import React from 'react';
import styles from './pagina283.module.css';

import img1 from '../assets/images/pagina283_imagem1.webp';
import img2 from '../assets/images/pagina283_imagem2.webp';
import img3 from '../assets/images/pagina283_imagem3.webp';

const Pagina283 = () => {
  return (
    <div className={styles["page283__container"]}>
      {/* Título */}
      <h1 className={styles["page283__title"]}>Dialogues</h1>

      {/* 4 - Asking About an Event */}
      <div className={styles["page283__block"]}>
        <div className={styles["page283__text"]}>
          <p><strong>4 - Asking About an Event</strong></p>
          <p>Do you know what time the concert starts?</p>
          <p className={styles["page283__red"]}>At 8:00 p.m., but doors open at 7.</p>
          <p>Cool! Let’s go early.</p>
          <p className={styles["page283__red"]}>Sounds good!</p>
        </div>
        <img src={img1} alt="Event" className={styles["page283__image"]} />
      </div>

      {/* 5 - Asking About a Class Schedule */}
      <div className={styles["page283__block"]}>
        <div className={styles["page283__text"]}>
          <p><strong>5 - Asking About a Class Schedule</strong></p>
          <p>What time does the class start?</p>
          <p className={styles["page283__red"]}>At 9:00 a.m. sharp.</p>
          <p>Thanks! I’ll be there on time.</p>
          <p className={styles["page283__red"]}>Don’t be late!</p>
        </div>
        <img src={img2} alt="Class Schedule" className={styles["page283__image"]} />
      </div>

      {/* 6 - Train Departure */}
      <div className={styles["page283__block"]}>
        <div className={styles["page283__text"]}>
          <p><strong>6 - Train Departure</strong></p>
          <p>What time does our train leave?</p>
          <p className={styles["page283__red"]}>At 3:15 p.m.</p>
          <p>We should get to the station early.</p>
          <p className={styles["page283__red"]}>Yeah, at least 30 minutes before.</p>
        </div>
        <img src={img3} alt="Train Departure" className={styles["page283__image"]} />
      </div>

      {/* 7 - Asking About an Appointment */}
      <div className={styles["page283__block"]}>
        <div className={styles["page283__text"]}>
          <p><strong>7 - Asking About an Appointment</strong></p>
          <p>What time is my doctor’s appointment?</p>
          <p className={styles["page283__red"]}>It’s at 2:30 p.m.</p>
          <p>Thanks for reminding me!</p>
          <p className={styles["page283__red"]}>No problem!</p>
        </div>
      </div>
    </div>
  );
};

export default Pagina283;
