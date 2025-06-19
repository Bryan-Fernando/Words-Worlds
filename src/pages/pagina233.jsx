import React from 'react';
import styles from './pagina233.module.css';

import img1 from '../assets/images/pagina233_imagem1.webp';
import img2 from '../assets/images/pagina233_imagem2.webp';

const Pagina233 = () => {
  return (
    <div className={styles['page233__container']}>

      {/* Título */}
      <h1 className={styles['page233__title']}>Dialogues</h1>

      {/* Dialogue 8 */}
      <div className={styles['page233__block']}>
        <div className={styles['page233__text']}>
          <p><strong>8 - Dinner Reservation</strong></p>
          <p>What time is our dinner reservation?</p>
          <p className={styles['page233__red']}>At 7:00 p.m.</p>
          <p>Perfect! I’m starving.</p>
          <p className={styles['page233__red']}>Me too! Let’s go.</p>
        </div>
        <img src={img1} alt="Dinner Reservation" className={styles['page233__image']} />
      </div>

      {/* Dialogue 9 */}
      <div className={styles['page233__block']}>
        <div className={styles['page233__text']}>
          <p><strong>9 - Movie Showtime</strong></p>
          <p>What time is the movie?</p>
          <p className={styles['page233__red']}>At 6:45 p.m.</p>
          <p>Cool! Let’s grab popcorn before it starts.</p>
          <p className={styles['page233__red']}>Good idea!</p>
        </div>
        <img src={img2} alt="Movie Showtime" className={styles['page233__image']} />
      </div>

      {/* Dialogue 10 */}
      <div className={styles['page233__block']}>
        <div className={styles['page233__text']}>
          <p><strong>10 - Interview</strong></p>
          <p>What time is my interview?</p>
          <p className={styles['page233__red']}>At 10:00 a.m. Don’t forget your resume!</p>
          <p>Thanks! I’m ready.</p>
          <p className={styles['page233__red']}>Good luck!</p>
        </div>
      </div>

    </div>
  );
};

export default Pagina233;
