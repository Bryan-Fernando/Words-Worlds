import React, { useEffect } from "react";
import styles from "./pagina611.module.css";

const Pagina611 = ({ onValidar }) => {
  useEffect(() => { onValidar?.(true); }, [onValidar]);

  return (
    <div className={styles.page611__container}>
      <header>
        <h1 className={styles.page611__title}>Real Life Dialogue</h1>
      </header>

      <main className={styles.page611__grid}>
        {/* My Home */}
        <section className={styles.page611__card}>
          <div className={styles.page611__chip}>My Home</div>
          <div className={styles.page611__content}>
            <div className={styles.page611__img} />
            <div className={styles.page611__dialogue}>
              <p><span className={styles.page611__speaker}>Mark:</span> <span>Mom, can you show me our home?</span></p>
              <p><span className={styles.page611__speaker}>Mom:</span> <span className={styles.isSecond}>Sure, Mark. This is the living room with our cozy sofa.</span></p>
              <p><span className={styles.page611__speaker}>Mark:</span> <span>I like it. What’s in the kitchen?</span></p>
              <p><span className={styles.page611__speaker}>Mom:</span> <span className={styles.isSecond}>We have a big fridge and a stove to cook delicious meals.</span></p>
              <p><span className={styles.page611__speaker}>Mark:</span> <span>Can I see my bedroom?</span></p>
              <p><span className={styles.page611__speaker}>Mom:</span> <span className={styles.isSecond}>Of course, Mark. It’s upstairs, and you have a comfy bed there.</span></p>
            </div>
          </div>
        </section>

        {/* Numbers and Counting */}
        <section className={styles.page611__card}>
          <div className={styles.page611__chip}>Numbers and Counting</div>
          <div className={styles.page611__content}>
            <div className={styles.page611__img} />
            <div className={styles.page611__dialogue}>
              <p><span className={styles.page611__speaker}>Teacher:</span> <span>Okay, class, let’s count apples. How many do you see?</span></p>
              <p><span className={styles.page611__speaker}>Emma:</span> <span className={styles.isSecond}>I see two apples, Teacher!</span></p>
              <p><span className={styles.page611__speaker}>Teacher:</span> <span>That’s correct, Emma. Now, count the bananas on the table.</span></p>
              <p><span className={styles.page611__speaker}>Emma:</span> <span className={styles.isSecond}>There are five bananas, Teacher!</span></p>
              <p><span className={styles.page611__speaker}>Teacher:</span> <span>Well done, Jake!</span></p>
            </div>
          </div>
        </section>

        {/* Transportation */}
        <section className={styles.page611__card}>
          <div className={styles.page611__chip}>Transportation</div>
          <div className={styles.page611__content}>
            <div className={styles.page611__img} />
            <div className={styles.page611__dialogue}>
              <p><span className={styles.page611__speaker}>Sarah:</span> <span>Dad, how are we going to the park today?</span></p>
              <p><span className={styles.page611__speaker}>Dad:</span> <span className={styles.isSecond}>We’ll take the car, Sarah. It’s faster and more comfortable.</span></p>
              <p><span className={styles.page611__speaker}>Sarah:</span> <span>Can we also ride our bikes someday?</span></p>
              <p><span className={styles.page611__speaker}>Dad:</span> <span className={styles.isSecond}>Sure, we can do that next weekend.</span></p>
            </div>
          </div>
        </section>

        {/* Clothing */}
        <section className={styles.page611__card}>
          <div className={styles.page611__chip}>Clothing</div>
          <div className={styles.page611__content}>
            <div className={styles.page611__img} />
            <div className={styles.page611__dialogue}>
              <p><span className={styles.page611__speaker}>Lisa:</span> <span>Mom, what should I wear to the party?</span></p>
              <p><span className={styles.page611__speaker}>Mom:</span> <span className={styles.isSecond}>How about that pretty dress you like?</span></p>
              <p><span className={styles.page611__speaker}>Lisa:</span> <span>And what shoes go with it?</span></p>
              <p><span className={styles.page611__speaker}>Mom:</span> <span className={styles.isSecond}>Your shiny black shoes will look great.</span></p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Pagina611;
