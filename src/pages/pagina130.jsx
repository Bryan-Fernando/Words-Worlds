import React from 'react';
import styles from './pagina130.module.css';

const Pagina130 = () => {
  return (
    <div className={styles["page130"]}>
      <header className={styles["page130__header"]}>
        <h1 className={styles["page130__header--h1"]}>
          Grammar: <span className={styles["page130__header--highlight"]}>Present Continuous or Progressive Form</span>
        </h1>
        <h2 className={styles["page130__header--h2"]}>Gerúndio</h2>
      </header>

      <div className={styles["page130__table--header"]}>Interrogative Form (+, -, ?)</div>
      <table className={styles["page130__styled--table"]}>
        <thead>
          <tr>
            <th>Palavras interrogativas</th>
            <th>Verbo <br /> Auxiliar</th>
            <th>Sujeito</th>
            <th><span style={{ color: 'red' }}>'Not'</span> <br /> Advérbio</th>
            <th>Verbo(s)</th>
            <th>Objeto <br /> Complemento</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>Am</td>
            <td>I</td>
            <td style={{ color: 'red' }}>(not)</td>
            <td>go<span style={{ color: 'red' }}>ing</span></td>
            <td>to the movies with you?</td>
          </tr>
        </tbody>
      </table>

      <section className={styles["page130__examples"]}>
        <div className={styles["page130__examples--block"]}>
          <p className={styles["page130__examples--title"]}>Interrogative - Affirmative:</p>
          <ul>
            <li>Are you studying now?</li>
            <li>Is she cooking dinner?</li>
            <li>Am I speaking too fast?</li>
          </ul>
        </div>

        <div className={styles["page130__examples--block"]}>
          <p className={styles["page130__examples--title"]}>Interrogative - Negative:</p>
          <ul>
            <li><span className={styles["page130__examples--highlight"]}>Aren’t</span> you studying for the test?</li>
            <li><span className={styles["page130__examples--highlight"]}>Isn’t</span> she cooking dinner?</li>
            <li><span className={styles["page130__examples--highlight"]}>Ain’t</span> I speaking too fast?</li>
          </ul>
        </div>
      </section>

      <aside className={styles["page130__aside"]}>
        <div className={styles["page130__aside--container"]}>
          <div className={styles["page130__aside--note1"]}>
            <p>Nota:</p>
          </div>
          <div className={styles["page130__aside--note2"]}>
            <p>Em português, o gerúndio é a forma do verbo terminada em <strong>“ando“, “endo“, “indo“.</strong></p>
          </div>
        </div>
      </aside>

      <section className={styles["page130__translations"]}>
        <div>
          <p>Speak - Speak<span style={{ color: '#A61C28' }}>ing</span></p>
          <p>Eat - Eat<span style={{ color: '#A61C28' }}>ing</span></p>
          <p>Leave - Leav<span style={{ color: '#A61C28' }}>ing</span></p>
        </div>
        <div>
          <p>Falar - Fal<span style={{ color: '#0A3282' }}>ando</span></p>
          <p>Comer - Com<span style={{ color: '#0A3282' }}>endo</span></p>
          <p>Partir / Sair - Part<span style={{ color: '#0A3282' }}>indo</span> / Sa<span style={{ color: '#0A3282' }}>indo</span></p>
        </div>
      </section>
    </div>
  );
};

export default Pagina130;
