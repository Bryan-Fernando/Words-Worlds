import React, { useEffect } from 'react';
import styles from './pagina563.module.css';

/* Imagens — substitua pelos caminhos corretos do seu projeto */
// import imgWho from '../assets/img/relative/rl-who.jpg';
// import imgWhich from '../assets/img/relative/rl-which.jpg';
// import imgThat from '../assets/img/relative/rl-that.jpg';
// import imgWhose from '../assets/img/relative/rl-whose.jpg';
// import imgWhere from '../assets/img/relative/rl-where.jpg';
// import imgWhen from '../assets/img/relative/rl-when.jpg';
// import imgWhy from '../assets/img/relative/rl-why.jpg';

const Pagina563 = ({ onValidar }) => {
  useEffect(() => { onValidar?.(true); }, [onValidar]);

  const rows = [
    {
      tag: 'Who:',
      a: 'Have you met the new employee?',
      b: <>Yes, I spoke to the person <span className={styles.em}>who</span> joined yesterday.</>,
      img: '', // imgWho
      alt: 'Two colleagues talking in a lounge',
    },
    {
      tag: 'Which:',
      a: 'Where is the book I lent you?',
      b: <>I left it on the table, <span className={styles.em}>which</span> is in the living room.</>,
      img: '', // imgWhich
      alt: 'People chatting in a cozy room',
    },
    {
      tag: 'That:',
      a: "I'm looking for the pen you borrowed.",
      b: <>Oh, I returned the pen <span className={styles.em}>that</span> I borrowed yesterday.</>,
      img: '', // imgThat
      alt: 'Friends at a café',
    },
    {
      tag: 'Whose:',
      a: 'Do you know whose car is blocking the driveway?',
      b: <>Yes, it’s my neighbor’s car <span className={styles.em}>whose</span> son is visiting.</>,
      img: '', // imgWhose
      alt: 'Group chatting on steps',
    },
    {
      tag: 'Where:',
      a: 'What’s the place where you had your vacation?',
      b: <>We went to a beautiful island <span className={styles.em}>where</span> the beaches were pristine.</>,
      img: '', // imgWhere
      alt: 'Friends with laptops outside',
    },
    {
      tag: 'When:',
      a: 'I remember the day you mentioned.',
      b: <>Yes, it was the day <span className={styles.em}>when</span> we celebrated our anniversary.</>,
      img: '', // imgWhen
      alt: 'Two people in an interview',
    },
    {
      tag: 'Why:',
      a: 'Can you explain the reason the project was delayed?',
      b: <>There were several issues, which is <span className={styles.em}>why</span> we couldn’t meet the deadline.</>,
      img: '', // imgWhy
      alt: 'Two people in a meeting',
    },
  ];

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Real-life Dialogues</h1>

      <section className={styles.rows}>
        {rows.map((r, i) => (
          <div key={i} className={styles.row}>
            <div className={styles.left}>
              <div className={styles.tag}>{r.tag}</div>

              <p className={styles.lineA}>
                <strong className={styles.nameA}>A:</strong> {r.a}
              </p>

              <p className={styles.lineB}>
                <strong className={styles.nameB}>B:</strong> <em>{r.b}</em>
              </p>
            </div>

            <figure className={styles.right}>
              <img src={r.img || ''} alt={r.alt} />
            </figure>
          </div>
        ))}
      </section>

      <footer className={styles.noteWrap}>
        <div className={styles.noteHead}>NOTE: Listening Comprehension and Pronunciation</div>
        <div className={styles.noteBody}>
          Now, take a moment to focus on the dialogues(s). Pay attention to the way the
          speakers express themselves, and try to practice mimicking their pronunciation.
        </div>
      </footer>
    </div>
  );
};

export default Pagina563;
