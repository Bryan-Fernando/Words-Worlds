import React from 'react';
import styles from './pagina168.module.css';

const Pagina168 = () => {
  return (
    <div className={styles["page168__container"]}>

      {/* Nota */}
      <section className={styles["page168__note"]}>
        <div className={styles["page168__note-header"]}>Nota:</div>
        <div className={styles["page168__note-content"]}>
          <p>
            <span className={styles["page168__text-red"]}>
              Em inglês, não usamos preposições como “de” ou “que” entre dois verbos, como ocorre em português.
            </span>
          </p>
          <p>
            Em português, é comum usar preposições como <span className={styles["page168__text-red"]}>"de"</span> e 
            <span className={styles["page168__text-red"]}> "que" </span> entre dois verbos.
          </p>

          <p><strong>Exemplos:</strong></p>
          <ul className={styles["page168__examples-list"]}>
            <li><span className={styles["page168__text-red"]}>I have to go to the bank.</span> ( Eu tenho que ir ao banco. )</li>
            <li><span className={styles["page168__text-red"]}>She needs to buy a new phone.</span> ( Ela precisa de comprar um celular novo. )</li>
            <li><span className={styles["page168__text-red"]}>He has to go to the bank.</span> ( Ele tem que ir ao banco. )</li>
            <li><span className={styles["page168__text-red"]}>I need to study.</span> ( Eu preciso de estudar. )</li>
            <li><span className={styles["page168__text-red"]}>She has to travel.</span> ( Ela tem que viajar. )</li>
            <li><span className={styles["page168__text-red"]}>We like to go out.</span> ( Nós gostamos de sair. )</li>
          </ul>

          <p>
            Mas em inglês isso não acontece. No lugar dessas preposições, usamos <span className={styles["page168__text-red"]}>“to”</span> entre os verbos — e <span className={styles["page168__text-red"]}>“to”</span> não é uma preposição nesse caso, mas parte da forma do infinitivo em inglês: to go ( ir ), to go out ( sair ), to buy ( comprar ), to study ( estudar ), to travel ( viajar ).
          </p>
        </div>
      </section>

      {/* Resumo */}
      <section className={styles["page168__summary-table-container"]}>
        <div className={styles["page168__summary-title"]}>Resumo</div>
        <table className={styles["page168__summary-table"]}>
          <thead>
            <tr>
              <th>Verbo Base</th>
              <th>3ª Pessoa</th>
              <th>Nº de sílabas</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Try</td>
              <td>Tries</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Cry</td>
              <td>Cries</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Dry</td>
              <td>Dries</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Study</td>
              <td>Studies</td>
              <td>2</td>
            </tr>
            <tr>
              <td>Carry</td>
              <td>Carries</td>
              <td>2</td>
            </tr>
          </tbody>
        </table>
      </section>

    </div>
  );
};

export default Pagina168;
