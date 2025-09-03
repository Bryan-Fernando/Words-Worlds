import React, { useEffect } from 'react';
import styles from './pagina552.module.css';

const Pagina552 = ({ onValidar }) => {
  useEffect(() => { onValidar?.(true); }, [onValidar]);

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Real-life Dialogues</h1>

      <figure className={styles.heroWrap}>
        <img
          src="" /* sua imagem aqui */
          alt="Conversation about job search in an office"
          className={styles.hero}
        />
      </figure>

      <h3 className={styles.sectionTitle}>Job Search Tips</h3>

      <div className={styles.dialog}>
        <p className={styles.lineA}>
          <strong className={styles.nameA}>Sarah:</strong>{' '}
          Hey Alex, how's the job search going?
        </p>

        <p className={styles.lineB}>
          <strong className={styles.nameB}>Alex:</strong>{' '}
          It's been a bit challenging. I'm trying to figure out how to highlight my skills on my resume.
        </p>

        <p className={styles.lineA}>
          <strong className={styles.nameA}>Sarah:</strong>{' '}
          Yeah, it can be tricky. Have you thought about mentioning specific tasks you were able to{' '}
          <span className={styles.under}>accomplish</span> during your internships?
        </p>

        <p className={styles.lineB}>
          <strong className={styles.nameB}>Alex:</strong>{' '}
          That's a good idea! I guess I'm just not sure if{' '}
          <span className={styles.under}>I can fit</span> everything on one page.
        </p>

        <p className={styles.lineA}>
          <strong className={styles.nameA}>Sarah:</strong>{' '}
          You know, <span className={styles.under}>you could prioritize</span> the most relevant experiences.
          Recruiters appreciate clarity.
        </p>

        <p className={styles.lineB}>
          <strong className={styles.nameB}>Alex:</strong>{' '}
          True. I also wonder if <span className={styles.under}>I could improve</span> my chances by networking more.
        </p>

        <p className={styles.lineA}>
          <strong className={styles.nameA}>Sarah:</strong>{' '}
          Absolutely! Networking can open up opportunities{' '}
          <span className={styles.under}>you might not be able to access</span> otherwise.
        </p>

        <p className={styles.lineB}>
          <strong className={styles.nameB}>Alex:</strong>{' '}
          I was thinking of attending some industry events. Do you think I{' '}
          <span className={styles.under}>could meet</span> potential employers there?
        </p>

        <p className={styles.lineA}>
          <strong className={styles.nameA}>Sarah:</strong>{' '}
          Definitely! <span className={styles.under}>You could make connections</span> that might lead to job offers.
          Plus, it's a great way to practice your elevator pitch.
        </p>

        <p className={styles.lineB}>
          <strong className={styles.nameB}>Alex:</strong>{' '}
          Speaking of which, do you think you{' '}
          <span className={styles.under}>could help me refine mine?</span>
        </p>

        <p className={styles.lineA}>
          <strong className={styles.nameA}>Sarah:</strong>{' '}
          Of course! <span className={styles.under}>We could schedule a mock interview</span>, and{' '}
          <span className={styles.under}>I can provide</span> some feedback.
        </p>

        <p className={styles.lineB}>
          <strong className={styles.nameB}>Alex:</strong>{' '}
          That sounds like a great idea. I really appreciate your support during this process.
        </p>

        <p className={styles.lineA}>
          <strong className={styles.nameA}>Sarah:</strong>{' '}
          No problem at all! We're in this together, and{' '}
          <span className={styles.under}>we both can land</span> awesome jobs with a bit of effort and strategy.
        </p>
      </div>
    </div>
  );
};

export default Pagina552;
