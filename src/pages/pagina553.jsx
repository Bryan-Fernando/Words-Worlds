import React, { useEffect } from 'react';
import styles from './pagina553.module.css';

const Pagina553 = ({ onValidar }) => {
  useEffect(() => { onValidar?.(true); }, [onValidar]);

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Real-life Dialogues</h1>

      <figure className={styles.heroWrap}>
        <img
          src="" /* sua imagem aqui */
          alt="Coworkers discussing changes at the office"
          className={styles.hero}
        />
      </figure>

      <div className={styles.dialog}>
        <p className={styles.line}>
          <strong className={styles.nameA}>Alex:</strong>{' '}
          Hey, did you hear that Jenny quit her job?
        </p>

        <p className={styles.line}>
          <strong className={styles.nameB}>Sarah:</strong>{' '}
          What? No way! <span className={styles.hlRed}>How come she quit?</span>
        </p>

        <p className={styles.line}>
          <strong className={styles.nameA}>Alex:</strong>{' '}
          Apparently, she wasn't happy with the new management policies.
        </p>

        <p className={styles.line}>
          <strong className={styles.nameB}>Sarah:</strong>{' '}
          But she always loved working there.{' '}
          <span className={styles.hlBlue}>Why did they change</span> things?
        </p>

        <p className={styles.line}>
          <strong className={styles.nameA}>Alex:</strong>{' '}
          I guess they wanted to cut costs, but it's still surprising.
        </p>

        <p className={styles.line}>
          <strong className={styles.nameB}>Sarah:</strong>{' '}
          <span className={styles.hlRed}>How come they didn't consider</span>{' '}
          the impact on employee satisfaction?
        </p>

        <p className={styles.line}>
          <strong className={styles.nameA}>Alex:</strong>{' '}
          I have no idea. Maybe they thought it wouldn't matter much.
        </p>

        <p className={styles.line}>
          <strong className={styles.nameB}>Sarah:</strong>{' '}
          Well, it does matter!{' '}
          <span className={styles.hlBlue}>Why didn't they realize</span> that happy
          employees are more productive?
        </p>

        <p className={styles.line}>
          <strong className={styles.nameA}>Alex:</strong>{' '}
          I completely agree. It's baffling how some companies make decisions.
        </p>

        <p className={styles.line}>
          <strong className={styles.nameB}>Sarah:</strong>{' '}
          Yeah, and <span className={styles.hlBlue}>why didn't they communicate</span>{' '}
          these changes properly?
        </p>

        <p className={styles.line}>
          <strong className={styles.nameA}>Alex:</strong>{' '}
          Good question. Lack of communication seems to be a common issue.
        </p>

        <p className={styles.line}>
          <strong className={styles.nameB}>Sarah:</strong>{' '}
          <span className={styles.hlRed}>How come they don't learn</span> from the
          mistakes of others?
        </p>

        <p className={styles.line}>
          <strong className={styles.nameA}>Alex:</strong>{' '}
          I wish I knew. Sometimes, it feels like common sense is not that common.
        </p>

        <p className={styles.line}>
          <strong className={styles.nameB}>Sarah:</strong>{' '}
          True. <span className={styles.hlBlue}>Why do people in power often overlook</span>{' '}
          the obvious?
        </p>

        <p className={styles.line}>
          <strong className={styles.nameA}>Alex:</strong>{' '}
          That's a million-dollar question. If only they'd listen to their employees.
        </p>

        <p className={styles.line}>
          <strong className={styles.nameB}>Sarah:</strong>{' '}
          <span className={styles.hlBlue}>Why do we always end up discussing</span> the
          flaws in management?
        </p>

        <p className={styles.line}>
          <strong className={styles.nameA}>Alex:</strong>{' '}
          It's a mystery. But hey, at least we can learn from their mistakes.
        </p>

        <p className={styles.line}>
          <strong className={styles.nameB}>Sarah:</strong>{' '}
          <span className={styles.hlBlue}>Why isn't common sense as common</span> in the
          business world?
        </p>

        <p className={styles.line}>
          <strong className={styles.nameA}>Alex:</strong>{' '}
          I guess we'll never know.
        </p>
      </div>
    </div>
  );
};

export default Pagina553;
