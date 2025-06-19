import React from 'react';
import styles from './pagina78.module.css';

const Page78 = () => {
  return (
    <div className={styles["page78__container"]}>
      <header className={styles["page78__header"]}>
        <h1 className={styles["page78__title"]}>
          Regras para <span className={styles["page78__highlight-red"]}>"He, She, It"</span>
        </h1>
      </header>

      {/* Bloco 1 */}
      <div className={styles["page78__block"]}>
        <p>Adicionamos <span className={styles["page78__highlight-red"]}>"s"</span> à maioria dos verbos quando usamos <span className={styles["page78__highlight-blue"]}>"he"</span>, <span className={styles["page78__highlight-blue"]}>"she"</span> ou <span className={styles["page78__highlight-blue"]}>"it"</span>.</p>
        <p className={styles["page78__ex"]}><strong>Ex:</strong></p>
        <p>
          <span className={styles["page78__highlight-blue"]}>work</span> - <span className={styles["page78__highlight-red"]}>works</span> ;  
          <span className={styles["page78__highlight-blue"]}> read</span> - <span className={styles["page78__highlight-red"]}>reads</span> ;  
          <span className={styles["page78__highlight-blue"]}> eat</span> - <span className={styles["page78__highlight-red"]}>eats</span>
        </p>
      </div>

      {/* Bloco 2 */}
      <div className={styles["page78__block"]}>
        <p>Quando um verbo termina em <span className={styles["page78__highlight-red"]}>sh, ch, x, z, ss</span> ou <span className={styles["page78__highlight-red"]}>o</span>, adicionamos <span className={styles["page78__highlight-red"]}>-es</span> para formar a 3ª pessoa do singular (he, she, it).</p>
        <p className={styles["page78__ex"]}><strong>Ex:</strong></p>
        <p>
          <span className={styles["page78__highlight-blue"]}>wash</span> - <span className={styles["page78__highlight-red"]}>washes</span> ;  
          <span className={styles["page78__highlight-blue"]}> watch</span> - <span className={styles["page78__highlight-red"]}>watches</span> ;  
          <span className={styles["page78__highlight-blue"]}> fix</span> - <span className={styles["page78__highlight-red"]}>fixes</span> ;  
          <span className={styles["page78__highlight-blue"]}> buzz</span> - <span className={styles["page78__highlight-red"]}>buzzes</span> ;  
          <span className={styles["page78__highlight-blue"]}> kiss</span> - <span className={styles["page78__highlight-red"]}>kisses</span> ;  
          <span className={styles["page78__highlight-blue"]}> go</span> - <span className={styles["page78__highlight-red"]}>goes</span> ;  
          <span className={styles["page78__highlight-blue"]}> do</span> - <span className={styles["page78__highlight-red"]}>does</span>
        </p>
        <p className={styles["page78__note"]}>
          Na pronúncia, esses verbos ganham uma sílaba extra, com exceção de “go” e “do”, que continuam sendo palavras de uma sílaba apenas.
        </p>
      </div>

      {/* Bloco 3 */}
      <div className={styles["page78__block"]}>
        <p>Adicionamos apenas <span className={styles["page78__highlight-red"]}>"s"</span> aos verbos que terminam em vogal + <span className={styles["page78__highlight-red"]}>"y"</span>.</p>
        <p className={styles["page78__ex"]}><strong>Ex:</strong></p>
        <p>
          <span className={styles["page78__highlight-blue"]}>play</span> - <span className={styles["page78__highlight-red"]}>plays</span> ;  
          <span className={styles["page78__highlight-blue"]}> enjoy</span> - <span className={styles["page78__highlight-red"]}>enjoys</span>
        </p>
      </div>

      {/* Bloco 4 */}
      <div className={styles["page78__block"]}>
        <p>Se o verbo termina em <span className={styles["page78__highlight-red"]}>consoante</span> + <span className={styles["page78__highlight-red"]}>"y"</span>, trocamos o <span className={styles["page78__highlight-red"]}>"y"</span> por <span className={styles["page78__highlight-red"]}>"i"</span> e adicionamos <span className={styles["page78__highlight-red"]}>"es"</span>.</p>
        <p className={styles["page78__ex"]}><strong>Ex:</strong></p>
        <p>
          <span className={styles["page78__highlight-blue"]}>study</span> - <span className={styles["page78__highlight-red"]}>studies</span> ;  
          <span className={styles["page78__highlight-blue"]}> carry</span> - <span className={styles["page78__highlight-red"]}>carries</span> ;  
          <span className={styles["page78__highlight-blue"]}> try</span> - <span className={styles["page78__highlight-red"]}>tries</span> ;  
          <span className={styles["page78__highlight-blue"]}> dry</span> - <span className={styles["page78__highlight-red"]}>dries</span> ;  
          <span className={styles["page78__highlight-blue"]}> cry</span> - <span className={styles["page78__highlight-red"]}>cries</span>
        </p>
      </div>
    </div>
  );
};

export default Page78;
