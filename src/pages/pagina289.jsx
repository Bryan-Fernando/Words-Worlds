import React from "react";
import styles from "./pagina289.module.css";

const Pagina289 = () => {
  return (
    <div className={styles.pageContainer}>
        <header className={styles.header}>
          <h1 className={styles.grammarTitle}>Grammar - Should</h1>
          <h2 className={styles.subtitle}>Usado para</h2>
        </header>
        <main className={styles.mainContent}>
          <ul className={styles.usageList}>
            <li>Dar conselhos ou sugestões</li>
            <li>Expressar obrigação ou dever (menos forte do que "must")</li>
            <li>Expressar expectativas</li>
            <li>Expressar crítica ou arrependimento</li>
          </ul>
          <div className={styles.noteBox}>
            <div className={styles.noteTitle}>Nota</div>
            <div className={styles.noteContent}>Não necessariamente na ordem acima</div>
          </div>
        </main>
      </div>
  );
};

export default Pagina289;
