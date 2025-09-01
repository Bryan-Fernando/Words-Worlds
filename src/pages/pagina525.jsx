import React, { useEffect } from 'react';
import styles from './pagina525.module.css';

import pagina525imagem1 from '../assets/images/dialoguespagina22_imagem1.gif';

const Pagina525 = ({ onValidar }) => {
  useEffect(() => { if (onValidar) onValidar(true); }, [onValidar]);

  return (
    <div className={styles.page__container}>
      <header className={styles.page__header}>
        <h1 className={styles.page__title}>Dialogues</h1>
        <h2 className={styles.page__subtitle}>Real-life Conversation</h2>
      </header>

      <img
        src={pagina525imagem1}
        alt="Friends chatting about astrology"
        className={styles.hero}
      />

      <main className={styles.dialogue}>
        <p className={styles.lineA}>
          <strong className={styles.nameA}>Samantha:</strong> Hey, Claudia! Have you ever looked
          into astrology and signs of the zodiac?
        </p>

        <p className={styles.lineB}>
          <strong className={styles.nameB}>Claudia:</strong> Oh, definitely! I find it fascinating
          how our personalities are supposedly influenced by the stars. What's your zodiac sign?
        </p>

        <p className={styles.lineA}>
          <strong className={styles.nameA}>Samantha:</strong> I'm a Leo! How about you?
        </p>

        <p className={styles.lineB}>
          <strong className={styles.nameB}>Claudia:</strong> I'm a Gemini. They say Geminis are
          supposed to be outgoing and adaptable, which I think fits me pretty well. And Leos, like
          you, are known for being confident and charismatic, right?
        </p>

        <p className={styles.lineA}>
          <strong className={styles.nameA}>Samantha:</strong> Yeah, that's what they say! Though
          I'm not sure how much stock I put into it. But it's fun to read about anyway. What about
          compatibility between signs? Ever checked that out?
        </p>

        <p className={styles.lineB}>
          <strong className={styles.nameB}>Claudia:</strong> Absolutely! They say Geminis and Leos
          can get along really well because we're both fire signs. Apparently, our energies
          complement each other.
        </p>

        <p className={styles.lineA}>
          <strong className={styles.nameA}>Samantha:</strong> Interesting! I've heard that too. But
          then again, I've also read that Leos can clash with other strong personalities. I guess it
          depends on more than just our signs.
        </p>

        <p className={styles.lineB}>
          <strong className={styles.nameB}>Claudia:</strong> True, there's always more to
          relationships than just astrology. But it's fun to see if the descriptions match up with
          reality sometimes. Do you think there's any truth to it?
        </p>

        <p className={styles.lineA}>
          <strong className={styles.nameA}>Samantha:</strong> Well, I think there might be
          something to it, at least in terms of broad personality traits. But I don't base my whole
          life around it, that's for sure.
        </p>

        <p className={styles.lineB}>
          <strong className={styles.nameB}>Claudia:</strong> Same here. It's just a fun topic to
          explore. Plus, who doesn't love a good horoscope now and then?
        </p>

        <p className={styles.lineA}>
          <strong className={styles.nameA}>Samantha:</strong> Exactly! It's all in good fun. So,
          what does your horoscope say for today?
        </p>

        <p className={styles.lineB}>
          <strong className={styles.nameB}>Claudia:</strong> Let me check... “A busy day ahead for
          Geminis, filled with opportunities for communication and networking.” Sounds like it's
          going to be an interesting day!
        </p>

        <p className={styles.lineA}>
          <strong className={styles.nameA}>Samantha:</strong> Well, I hope it's a great one for
          you, Gemini! Let's see what the stars have in store for this Leo today.
        </p>
      </main>
    </div>
  );
};

export default Pagina525;
