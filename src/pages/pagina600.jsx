import React, { useEffect } from "react";
import styles from "./pagina600.module.css";

const Pagina600 = ({ onValidar }) => {
  useEffect(() => { onValidar?.(true); }, [onValidar]);

  return (
    <div className={styles.page600__container}>
      <header>
        <h1 className={styles.page600__title}>Study Note</h1>
      </header>

      <main className={styles.page600__main}>
        {/* ===== Length ===== */}
        <section className={styles.page600__section}>
          <div className={styles.page600__infoCard}>
            <h3 className={styles.page600__label}>Length</h3>
            <p><strong>Metric System:</strong> Meter</p>
            <p><strong>Imperial System:</strong> Inch (in), Foot (ft).</p>
          </div>

          <div className={styles.page600__tableWrap}>
            <table className={styles.page600__table}>
              <thead>
                <tr>
                  <th>Metric (Meter)</th>
                  <th>Imperial (Inch)</th>
                  <th>Imperial (Foot)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1 meter (m)</td>
                  <td>39.37 inches (in)</td>
                  <td>3.28 feet (ft)</td>
                </tr>
                <tr>
                  <td>1 inch (in)</td>
                  <td>0.0254 meters (m)</td>
                  <td>0.0833 feet (ft)</td>
                </tr>
                <tr>
                  <td>1 foot (ft)</td>
                  <td>0.3048 meters (m)</td>
                  <td>12 inches (in)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ===== Mass (Weight) ===== */}
        <section className={styles.page600__section}>
          <div className={styles.page600__infoCard}>
            <h3 className={styles.page600__label}>Mass (Weight):</h3>
            <p><strong>Metric System:</strong> Gram (g), Kilogram (kg)</p>
            <p><strong>Imperial System:</strong> Ounce (oz), Pound (lb)</p>
          </div>

          <div className={styles.page600__tableWrap}>
            <table className={styles.page600__table}>
              <thead>
                <tr>
                  <th>Metric (Kilogram)</th>
                  <th>Metric (Gram)</th>
                  <th>Imperial (Pound)</th>
                  <th>Imperial (Ounce)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1 kilogram (kg)</td>
                  <td>1000 grams (g)</td>
                  <td>2.205 pounds (lb)</td>
                  <td>35.27 ounces (oz)</td>
                </tr>
                <tr>
                  <td>1 gram (g)</td>
                  <td>0.001 kilograms (kg)</td>
                  <td>0.0022 pounds (lb)</td>
                  <td>0.0353 ounces (oz)</td>
                </tr>
                <tr>
                  <td>1 pound (lb)</td>
                  <td>0.4536 kilograms (kg)</td>
                  <td>16 ounces (oz)</td>
                  <td>N/A</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ===== Temperature ===== */}
        <section className={styles.page600__section}>
          <div className={styles.page600__infoCard}>
            <h3 className={styles.page600__label}>Temperature:</h3>
            <p><strong>Metric System:</strong> Celsius (°C)</p>
            <p><strong>Imperial System:</strong> Fahrenheit (°F)</p>
          </div>

          <div className={styles.page600__formulaRow}>
            <span className={styles.page600__infoDot}>i</span>
            <span className={styles.page600__formulaText}>
              Conversion formula: Celsius to Fahrenheit:
            </span>
            <span className={styles.page600__pill}>°F = (°C × 9/5) + 32</span>
          </div>

          <div className={styles.page600__tableWrap}>
            <table className={styles.page600__table}>
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

          <div className={styles.page600__bottomFormula}>
            <span>Converting temperatures from Fahrenheit (°F) to Celsius (°C), use the following formula:</span>
            <span className={styles.page600__pill}>C = (5/9) × (F − 32)</span>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Pagina600;
