import React, { useEffect } from "react";
import styles from "./pagina618.module.css";

const Pagina618 = ({ onValidar }) => {
  useEffect(() => { onValidar?.(true); }, [onValidar]);

  return (
    <div className={styles.page618__container}>
      <header>
        <h1 className={styles.page618__title}>Real Life Dialogue</h1>
      </header>

      <section className={styles.page618__card}>
        <div className={styles.page618__chip}>At the Park</div>

        {/* Espaço reservado para a imagem */}
        <div className={styles.page618__img} />

        <div className={styles.page618__dialogue}>
          <p><span className={styles.page618__speaker}>Lisa:</span> <span>Hi there! Do you like going to the park?</span></p>
          <p><span className={styles.page618__speaker}>Anthony:</span> <span className={styles.isSecond}>Yes, I do. I enjoy spending time outdoors. How about you?</span></p>

          <p><span className={styles.page618__speaker}>Lisa:</span> <span>I also like the park. What activities do you usually do there?</span></p>
          <p><span className={styles.page618__speaker}>Anthony:</span> <span className={styles.isSecond}>Well, I often walk my dog, play frisbee with friends, and have picnics. How about you?</span></p>

          <p><span className={styles.page618__speaker}>Lisa:</span> <span>I usually read books under the shade of a tree and sometimes feed the ducks in the pond.</span></p>
          <p><span className={styles.page618__speaker}>Lisa:</span> <span>That sounds relaxing. Do you come here every day?</span></p>

          <p><span className={styles.page618__speaker}>Anthony:</span> <span className={styles.isSecond}>No, I come here three times a week. How about you?</span></p>
          <p><span className={styles.page618__speaker}>Lisa:</span> <span>I visit the park on weekends when I have more free time.</span></p>

          <p><span className={styles.page618__speaker}>Anthony:</span> <span className={styles.isSecond}>Nice. The weather is great today, isn’t it?</span></p>
          <p><span className={styles.page618__speaker}>Lisa:</span> <span>Yes, it’s sunny and warm. Perfect for outdoor activities.</span></p>

          <p><span className={styles.page618__speaker}>Anthony:</span> <span className={styles.isSecond}>Do you often bring snacks with you?</span></p>
          <p><span className={styles.page618__speaker}>Lisa:</span> <span>Yes, I usually bring a sandwich and some fruits. What about you?</span></p>

          <p><span className={styles.page618__speaker}>Anthony:</span> <span className={styles.isSecond}>I sometimes bring a bottle of water and a snack, but I also like buying ice cream from the park’s vendor.</span></p>

          <p><span className={styles.page618__speaker}>Lisa:</span> <span>Ice cream sounds delicious. Well, I have to go now. It was nice chatting with you.</span></p>
          <p><span className={styles.page618__speaker}>Anthony:</span> <span className={styles.isSecond}>You too! Have a great day at the park!</span></p>
        </div>
      </section>
    </div>
  );
};

export default Pagina618;
