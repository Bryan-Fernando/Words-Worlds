import React, { useEffect } from "react";
import styles from "./pagina617.module.css";

const Pagina617 = ({ onValidar }) => {
  useEffect(() => { onValidar?.(true); }, [onValidar]);

  return (
    <div className={styles.page617__container}>
      <header>
        <h1 className={styles.page617__title}>Real Life Dialogue</h1>
      </header>

      {/* TOP BLOCK */}
      <section className={styles.page617__columns}>
        {/* LEFT column (top) */}
        <div className={styles.page617__col}>
          <article className={styles.page617__card}>
            <div className={styles.page617__chip}>1. Food Arrival and Kids' Restlessness</div>
            <div className={styles.page617__img} />
            <div className={styles.page617__dialogue}>
              <p><span className={styles.page617__speaker}>Waiter:</span> <span>Here are your drinks and kids’ apple juices. Your appetizers will be out shortly.</span></p>
              <p><span className={styles.page617__speaker}>Kid1:</span> <span>I’m hungry!</span></p>
              <p><span className={styles.page617__speaker}>Mom:</span> <span className={styles.isSecond}>Your food will be here soon, sweetie. Can you wait a bit longer?</span></p>
            </div>
          </article>
        </div>

        {/* RIGHT column (top) */}
        <div className={styles.page617__col}>
          <article className={styles.page617__card}>
            <div className={styles.page617__chip}>2. Enjoying the Meal</div>
            <div className={styles.page617__dialogue}>
              <p><span className={styles.page617__speaker}>Dad:</span> <span>The vegetable stir-fry looks delicious.</span></p>
              <p><span className={styles.page617__speaker}>Mom:</span> <span className={styles.isSecond}>And the spinach pasta tastes amazing.</span></p>
              <p><span className={styles.page617__speaker}>Kid2:</span> <span>I like the fries!</span></p>
            </div>
          </article>

          <article className={styles.page617__card}>
            <div className={styles.page617__chip}>3. Ordering Dessert</div>
            <div className={styles.page617__dialogue}>
              <p><span className={styles.page617__speaker}>Waiter:</span> <span>Are you ready for dessert?</span></p>
              <p><span className={styles.page617__speaker}>Couple:</span> <span className={styles.isSecond}>Yes, please. We’ll have a chocolate cake to share.</span></p>
              <p><span className={styles.page617__speaker}>Kid1:</span> <span>Can I get ice cream?</span></p>
              <p><span className={styles.page617__speaker}>Mom:</span> <span className={styles.isSecond}>Sure, one scoop of vanilla ice cream for her.</span></p>
            </div>
          </article>
        </div>
      </section>

      <div className={styles.page617__divider} />

      {/* BOTTOM BLOCK */}
      <section className={styles.page617__columns}>
        {/* LEFT column (bottom) */}
        <div className={styles.page617__col}>
          <article className={styles.page617__card}>
            <div className={styles.page617__chip}>1. Asking for the Check</div>
            <div className={styles.page617__img} />
            <div className={styles.page617__dialogue}>
              <p><span className={styles.page617__speaker}>Dad:</span> <span>Could we have the check, please?</span></p>
              <p><span className={styles.page617__speaker}>Waiter:</span> <span className={styles.isSecond}>Of course. I’ll bring it right over.</span></p>
            </div>
          </article>
        </div>

        {/* RIGHT column (bottom) */}
        <div className={styles.page617__col}>
          <article className={styles.page617__card}>
            <div className={styles.page617__chip}>2. Settling the Bill</div>
            <div className={styles.page617__dialogue}>
              <p><span className={styles.page617__speaker}>Waiter:</span> <span>Here’s your bill. You can pay at the front counter whenever you’re ready.</span></p>
              <p><span className={styles.page617__speaker}>Mom:</span> <span className={styles.isSecond}>Thank you.</span></p>
            </div>
          </article>

          <article className={styles.page617__card}>
            <div className={styles.page617__chip}>3. Leaving the Restaurant</div>
            <div className={styles.page617__dialogue}>
              <p><span className={styles.page617__speaker}>Dad:</span> <span>That was a great meal.</span></p>
              <p><span className={styles.page617__speaker}>Mom:</span> <span className={styles.isSecond}>The kids enjoyed it too. Let’s go pay the bill and head out.</span></p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Pagina617;
