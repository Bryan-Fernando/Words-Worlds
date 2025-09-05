import React, { useEffect } from "react";
import styles from "./pagina621.module.css";

const Pagina621 = ({ onValidar }) => {
  useEffect(() => { onValidar?.(true); }, [onValidar]);

  return (
    <div className={styles.page621__container}>
      <header>
        <h1 className={styles.page621__title}>DIALOGUES</h1>
      </header>

      {/* Talking About Past */}
      <section className={styles.page621__section}>
        <div className={styles.page621__box}>
          <div className={styles.page621__boxTitle}>Talking About Past</div>

          <div className={styles.page621__dialogue}>
            <p><span className={styles.page621__speaker}>A:</span><span>Have you ever been to the U.S.?</span></p>
            <p><span className={styles.page621__speaker}>B:</span><span className={styles.isSecond}>Yes, I went to New York last year. It was amazing!</span></p>
            <p><span className={styles.page621__speaker}>A:</span><span>That’s great! What did you like the most?</span></p>
            <p><span className={styles.page621__speaker}>B:</span><span className={styles.isSecond}>I loved the museums and Central Park. Have you traveled abroad?</span></p>
            <p><span className={styles.page621__speaker}>A:</span><span>Not yet, but I’m planning to visit Europe next summer.</span></p>
          </div>
        </div>

        {/* Placeholder da imagem */}
        <div className={styles.page621__img} />
      </section>

      {/* Job Interview */}
      <section className={styles.page621__section}>
        <div className={styles.page621__box}>
          <div className={styles.page621__boxTitle}>Job Interview</div>

          <div className={styles.page621__dialogue}>
            <p><span className={styles.page621__speaker}>Interviewer:</span><span>Tell me about your experience in the marketing field.</span></p>
            <p><span className={styles.page621__speaker}>Candidate:</span><span className={styles.isSecond}>I’ve worked in marketing for five years, focusing on digital campaigns.</span></p>

            <p><span className={styles.page621__speaker}>Interviewer:</span><span>What would you say is your greatest strength?</span></p>
            <p><span className={styles.page621__speaker}>Candidate:</span><span className={styles.isSecond}>I’m very creative, and I always find new ways to engage our audience.</span></p>

            <p><span className={styles.page621__speaker}>Interviewer:</span><span>That’s impressive. How do you handle working under pressure?</span></p>
            <p><span className={styles.page621__speaker}>Candidate:</span><span className={styles.isSecond}>I stay calm and prioritize my tasks to meet deadlines effectively.</span></p>
          </div>
        </div>

        {/* Placeholder da imagem */}
        <div className={styles.page621__img} />
      </section>
    </div>
  );
};

export default Pagina621;
