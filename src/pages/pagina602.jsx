import React, { useEffect } from "react";
import styles from "./pagina602.module.css";

const Pagina602 = ({ onValidar }) => {
  useEffect(() => { onValidar?.(true); }, [onValidar]);

  return (
    <div className={styles.page602__container}>
      <header>
        <h1 className={styles.page602__title}>Study Note</h1>
      </header>

      <main className={styles.page602__main}>
        {/* ===== Comprimento ===== */}
        <section className={styles.page602__section}>
          <div className={styles.page602__infoCard}>
            <h3 className={styles.page602__label}>Comprimento:</h3>
            <p><strong>Sistema Métrico:</strong> Metro (m)</p>
            <p><strong>Sistema Imperial:</strong> Polegada (pol), Pé (pé)</p>
          </div>

          <div className={styles.page602__tableWrap}>
            <table className={styles.page602__table}>
              <thead>
                <tr>
                  <th>Métrico (Metro)</th>
                  <th>Imperial (Polegada)</th>
                  <th>Imperial (Pé)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1 metro (m)</td>
                  <td>39,37 polegadas (pol)</td>
                  <td>3,28 pés (pé)</td>
                </tr>
                <tr>
                  <td>1 polegada (pol)</td>
                  <td>0,0254 metros (m)</td>
                  <td>0,0833 pés (pé)</td>
                </tr>
                <tr>
                  <td>1 pé (pé)</td>
                  <td>0,3048 metros (m)</td>
                  <td>12 polegadas (pol)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ===== Massa (Peso) ===== */}
        <section className={styles.page602__section}>
          <div className={styles.page602__infoCard}>
            <h3 className={styles.page602__label}>Massa (Peso):</h3>
            <p><strong>Sistema Métrico:</strong> Grama (g), Quilograma (kg)</p>
            <p><strong>Sistema Imperial:</strong> Onça (oz), Libra (lb)</p>
          </div>

          <div className={styles.page602__tableWrap}>
            <table className={styles.page602__table}>
              <thead>
                <tr>
                  <th>Métrico (Quilograma)</th>
                  <th>Métrico (Grama)</th>
                  <th>Imperial (Libra)</th>
                  <th>Imperial (Onça)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1 quilograma (kg)</td>
                  <td>1000 gramas (g)</td>
                  <td>2,205 libras (lb)</td>
                  <td>35,27 onças (oz)</td>
                </tr>
                <tr>
                  <td>1 grama (g)</td>
                  <td>0,001 quilogramas (kg)</td>
                  <td>0,0022 libras (lb)</td>
                  <td>0,0353 onças (oz)</td>
                </tr>
                <tr>
                  <td>1 libra (lb)</td>
                  <td>0,4536 quilogramas (kg)</td>
                  <td>16 onças (oz)</td>
                  <td>N/A</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ===== Temperatura ===== */}
        <section className={styles.page602__section}>
          <div className={styles.page602__infoCard}>
            <h3 className={styles.page602__label}>Temperatura:</h3>
            <p><strong>Sistema Métrico:</strong> Celsius (°C)</p>
            <p><strong>Sistema Imperial:</strong> Fahrenheit (°F)</p>
          </div>

          <div className={styles.page602__formulaRow}>
            <span className={styles.page602__infoDot}>i</span>
            <span className={styles.page602__formulaText}>
              Fórmula de conversão: Celsius para Fahrenheit:
            </span>
            <span className={styles.page602__pill}>°F = (°C × 9/5) + 32</span>
          </div>

          <div className={styles.page602__tableWrap}>
            <table className={styles.page602__table}>
              <thead>
                <tr>
                  <th>Celsius (°C)</th>
                  <th>Fahrenheit (°F)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>0°C</td><td>32°F</td></tr>
                <tr><td>10°C</td><td>50°F</td></tr>
                <tr><td>20°C</td><td>68°F</td></tr>
                <tr><td>30°C</td><td>86°F</td></tr>
                <tr><td>40°C</td><td>104°F</td></tr>
              </tbody>
            </table>
          </div>

          <div className={styles.page602__bottomFormula}>
            <span>
              Para converter temperaturas de Fahrenheit (°F) para Celsius (°C), use a seguinte fórmula:
            </span>
            <span className={styles.page602__pill}>C = (5/9) × (F − 32)</span>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Pagina602;
