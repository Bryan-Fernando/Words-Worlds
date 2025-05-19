import React from 'react';
import styles from './pagina213.module.css';

const Pagina213 = () => {
  const tableData = [
    {
      aux: "Can't",
      subject: ["we", "Nós"],
      neg: "não",
      verb: ["go", "podemos ir"],
      complement: ["to the beach this weekend?", "à praia neste fim de semana?"]
    },
    {
      aux: "Can't",
      subject: ["you (sg.)", "Você"],
      neg: ["não", "não"],
      verb: ["come", "pode vir", "consegue vir"],
      complement: ["to the party?", "à festa?", "à festa?"]
    },
    {
      aux: "Can't",
      subject: ["y'all (pl.)", "Vocês"],
      neg: ["não", "não"],
      verb: ["wait", "podem esperar", "conseguem esperar"],
      complement: ["a little longer?", "mais um pouco?", "mais um pouco?"]
    },
    {
      aux: "Can't",
      subject: ["they", "Eles/Elas"],
      neg: ["não", "não"],
      verb: ["see", "podem ver", "conseguem ver"],
      complement: ["the problem?", "o problema?", "o problema?"]
    }
  ];

  return (
    <div className={styles.pg213Container}>
      <div className={styles.pg213Header}>
        <h1 className={styles.pg213Title}>Grammar</h1>
          <div className={styles.pg213SubtitleContainer}>
          <h2 className={styles.pg213MainSubtitle}>
            <span>Can</span> - Modal Verb
          </h2>
          <h3 className={styles.pg213SecondarySubtitle}>
            <span>Can</span> - Verbo Modal
          </h3>
        </div>
      </div>

      <div className={styles.pg213TableContainer}>
        <div className={styles.pg213TitleContainer}>
          <h3 className={styles.pg213TableTitle}>Negative Interrogative Form</h3>
        </div>
        <div className={styles.pg213ContentContainer}>
          <div className={styles.pg213HeaderRow}>
            <div>Aux. Verb</div>
            <div>Subject</div>
            <div className={styles.pg213NotAdv}>Not Adv</div>
            <div>Verb (BF)</div>
            <div>Object Complement</div>
          </div>
          <div className={styles.pg213TableContent}>
            {tableData.map((row, index) => (
              <div key={index} className={styles.pg213TableRow}>
                <div className={styles.pg213Cell}>
                  <span className={styles.pg213Red}>{row.aux}</span>
                </div>
                <div className={styles.pg213Cell}>
                  <span className={styles.pg213Red}>{row.subject[0]}</span>
                  <span className={styles.pg213Black}>{row.subject[1]}</span>
                </div>
                <div className={styles.pg213Cell}>
                  {Array.isArray(row.neg) ? (
                    <>
                      {row.neg.map((n, i) => (
                        <span key={i} className={styles.pg213Blue}>{n}</span>
                      ))}
                    </>
                  ) : (
                    <span className={styles.pg213Blue}>{row.neg}</span>
                  )}
                </div>
                <div className={styles.pg213Cell}>
                  <span className={styles.pg213Red}>{row.verb[0]}</span>
                  {Array.isArray(row.verb) && row.verb.slice(1).map((v, i) => (
                    <span key={i} className={styles.pg213Black}>{v}</span>
                  ))}
                </div>
                <div className={styles.pg213Cell}>
                  <span className={styles.pg213Red}>{row.complement[0]}</span>
                  {Array.isArray(row.complement) && row.complement.slice(1).map((c, i) => (
                    <span key={i} className={styles.pg213Black}>{c}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.pg213Note}>
        <div className={styles.pg213Note}>
          <div className={styles.pg213NoteHeader}>
            <h4 className={styles.pg213NoteTitle}>Nota:</h4>
          </div>
          <div className={styles.pg213NoteContent}>
            <ul>
              <li>Conforme a tabela acima, não se esqueça de que o verbo auxiliar troca de posição com o sujeito nas perguntas.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagina213;