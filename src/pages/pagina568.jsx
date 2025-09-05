import React from 'react';
import styles from './pagina568.module.css';

// Substitua pelos caminhos corretos das imagens do seu projeto
// import imgFamily from '../assets/img/dialogues/family-coffee.jpg';
// import imgChapel from '../assets/img/dialogues/chapel-lake.jpg';

const Pagina568 = () => {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Real Life Dialogue</h1>

      {/* Cartão do texto + imagem ao lado */}
      <section className={styles.storyCard}>
        <div className={styles.storyText}>
          <h3 className={styles.storyHeading}>My Parents' Wedding</h3>
          <p>
            My parents, Sarah and John, were both born in the small town of Brookville.
            Mom was born there in 1958, and Dad followed suit in 1955. The wedding
            ceremony was held at a charming chapel near the town square. Mom was 22
            years old, and Dad was 25 at the time of their wedding. It was a beautiful
            ceremony, filled with joy and surrounded by family and friends.
          </p>
        </div>

        <figure className={styles.sideImage}>
          <img src={'' /* imgFamily */} alt="Family smiling and talking" />
        </figure>
      </section>

      {/* Imagem grande inferior */}
      <figure className={styles.bottomImage}>
        <img src={'' /* imgChapel */} alt="Chapel by a lake" />
      </figure>
    </div>
  );
};

export default Pagina568;
