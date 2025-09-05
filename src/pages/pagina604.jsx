import React, { useEffect } from "react";
import styles from "./pagina604.module.css";

const rows = [
  ["Well-known", "Bem conhecido"],
  ["High-pitched", "Agudo"],
  ["Blue-eyed", "De olhos azuis"],
  ["Short-lived", "De curta duração"],
  ["Open-minded", "De mente aberta"],
  ["Hardworking", "Trabalhador"],
  ["Easy-going", "De fácil convivência"],
  ["Heavy-handed", "Pesado, desajeitado"],
  ["Cold-hearted", "De coração frio"],
  ["Deep-seated", "Profundo, arraigado"],
  ["Self-confident", "Autoconfiante"],
  ["Well-behaved", "Bem-comportado"],
  ["Fast-paced", "Rápido, acelerado"],
  ["High-tech", "De alta tecnologia"],
  ["Low-key", "Discreto, sem alarde"],
  ["Old-fashioned", "Antiquado"],
  ["Red-hot", "Ardente, quente"],
  ["Straightforward", "Direto, franco"],
  ["Two-faced", "Falso, dissimulado"],
  ["Wide-ranging", "Amplo, abrangente"],
  ["Culturally diverse", "Diversificado culturalmente"],
  ["Densely populated", "Densamente povoado"],
  ["Fun-loving", "Amante da diversão"],
  ["Highly educated", "Altamente educado"],
  ["Open-paced", "Ritmo aberto"],
  ["Well-planned", "Bem planejado"],
  ["World-famous", "Mundialmente famoso"],
];

const Pagina604 = ({ onValidar }) => {
  useEffect(() => { onValidar?.(true); }, [onValidar]);

  return (
    <div className={styles.page604__container}>
      <header>
        <h1 className={styles.page604__title}>Study Note</h1>
      </header>

      <main className={styles.page604__main}>
        <div className={styles.page604__tableWrap}>
          <table className={styles.page604__table}>
            <thead>
              <tr>
                <th className={styles.page604__thLeft}>Compound Adjective</th>
                <th>Adjetivos Compostos</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([en, pt], i) => (
                <tr key={i}>
                  <td className={styles.page604__en}>{en}</td>
                  <td>{pt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Pagina604;
