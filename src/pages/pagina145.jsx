import React from 'react';
import styles from './pagina145.module.css';

const Pagina145 = () => {
    return (
        <div className={styles["page145"]}>
            <h1 className={styles["page145__title"]}>
                Usos do Present Continuous <span className={styles["page145__title--highlight"]}>- Gerúndio</span>
            </h1>

            {/* Seção 1 */}
            <section className={styles["page145__section"]}>
                <h2 className={styles["page145__subtitle"]}>
                <span className={styles["page145__highlight"]}><strong>1. Actions happening now - </strong> </span><span className={styles["page145__subtitle--translation"]}>Ações que estão acontecendo agora:</span>
                </h2>
                <ul className={styles["page145__list"]}>
                    <li>
                        <span className={styles["page145__example--english"]}>
                            She <span className={styles["page145__highlight"]}>is talking</span> on the phone
                        </span> – “Ela <strong>está falando</strong> ao telefone.”
                    </li>
                    <li>
                        <span className={styles["page145__example--english"]}>
                            We <span className={styles["page145__highlight"]}>are waiting</span> for the bus.
                        </span> – “Nós <strong>estamos esperando</strong> o ônibus.”
                    </li>
                </ul>
            </section>

            {/* Seção 2 */}
            <section className={styles["page145__section"]}>
                <h2 className={styles["page145__subtitle"]}>
                <span className={styles["page145__highlight"]}><strong>2. Temporary actions - </strong></span>  <span className={styles["page145__subtitle--translation"]}>Ações temporárias:</span> - <span className={styles["page145__subtitle--translation"]}>Ações temporárias:</span>
                </h2>
                <ul className={styles["page145__list"]}>
                    <li>
                        <span className={styles["page145__example--english"]}>
                            "I <span className={styles["page145__highlight"]}>am staying</span> at my friend’s house this week."
                        </span> → “Eu <strong>estou ficando</strong> na casa do meu amigo esta semana.”
                    </li>
                </ul>
            </section>

            {/* Seção 3 */}
            <section className={styles["page145__section"]}>
                <h2 className={styles["page145__subtitle"]}>
                <span className={styles["page145__highlight"]}><strong>3. Future plans (arrangements) - </strong></span> <span className={styles["page145__subtitle--translation"]}>Planos futuros (com horário definido):</span>
                </h2>
                <ul className={styles["page145__list"]}>
                    <li>
                        <span className={styles["page145__example--english"]}>
                            They <span className={styles["page145__highlight"]}>are traveling</span> to Spain next month.
                        </span> – “Eles <strong>estão viajando</strong> para a Espanha no próximo mês.”
                    </li>
                </ul>
            </section>

            {/* Seção 4 */}
            <section className={styles["page145__section"]}>
                <h2 className={styles["page145__subtitle"]}>
                <span className={styles["page145__highlight"]}><strong>4. Changing situations - </strong></span><span className={styles["page145__subtitle--translation"]}>Mudanças de estado:</span>
                </h2>
                <ul className={styles["page145__list"]}>
                    <li>
                        <span className={styles["page145__example--english"]}>
                            The climate <span className={styles["page145__highlight"]}>is getting</span> warmer.
                        </span> – “O clima <strong>está ficando</strong> mais quente.”
                    </li>
                    <li>
                        <span className={styles["page145__example--english"]}>
                            My English <span className={styles["page145__highlight"]}>is improving</span> every day.
                        </span> – “Meu inglês <strong>está melhorando</strong> a cada dia.”
                    </li>
                </ul>
            </section>
        </div>
    );
};

export default Pagina145;
