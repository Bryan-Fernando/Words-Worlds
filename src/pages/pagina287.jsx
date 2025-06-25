import React from 'react';
import styles from './pagina287.module.css';

const Pagina287 = () => {
    return (
        <div className={styles["page287__container"]}>
            <h1 className={styles["page287__title"]}>
                Uso de <span className={styles["page287__red"]}>at</span> para Falar e Perguntar as Horas
            </h1>

            {/* Nota inicial */}
            <div className={styles["page287__note-block"]}>
                <p>● Quando estamos <span className={styles["page287__italic-red"]}>apenas perguntando ou dizendo as horas</span>, <strong>não</strong> usamos <span className={styles["page287__red"]}>at</span>.</p>
                <p>● Quando falamos de um horário específico <strong>para um evento ou compromisso</strong>, usamos <span className={styles["page287__red"]}>at</span>.</p>
            </div>

            {/* Bloco 1 */}
            <div className={styles["page287__box"]}>
                <div className={styles["page287__box-column"]}>
                    <p><strong>1. Perguntando / Dizendo as Horas Atuais - Não usar <span className={styles["page287__red"]}>at</span></strong></p>
                    <p className={styles["page287__red"]}><em>What time is it?</em></p>
                    <p className={styles["page287__italic-blue"]}><em>It is 3 o’clock.</em></p>
                    <p className={styles["page287__red"]}><em>It is half past ten.</em></p>
                    <p className={`${styles["page287__error-text"]} ${styles["page287__red"]}`}><em>Errado: It is at 3 o’clock.</em></p>
                </div>
                <div className={styles["page287__box-column"]}>
                    <br />
                    <p>→ Que horas são?</p>
                    <p>→ São 3 horas.</p>
                    <p>→ São 10 e meia.</p>
                    <p>→ São às 3 horas</p>
                </div>
            </div>

            {/* Bloco 2 */}
            <div className={styles["page287__box"]}>
                <div className={styles["page287__box-column"]}>
                    <p><strong>2. Horários de Compromissos / Eventos - Usar <span className={styles["page287__red"]}>at</span></strong></p>
                    <p className={styles["page287__red"]}><em>What time does the <span className={styles["page287__link"]}>movie</span> start?</em></p>
                    <p className={styles["page287__italic-blue"]}><em>It starts at 7:00.</em></p>
                    <p className={styles["page287__red"]}><em>The meeting is at 2:30.</em></p>
                    <p className={styles["page287__red"]}><em>The train arrives at noon.</em></p>
                </div>
                <div className={styles["page287__box-column"]}>
                    <br />
                    <p>→ Que horas começa o filme?</p>
                    <p>→ Começa às 7:00.</p>
                    <p>→ A reunião é às 2:30.</p>
                    <p>→ O trem chega ao meio-dia.</p>
                </div>
            </div>

            {/* Tabela Resumo */}
            <div>
                <div className={styles["page287__summary-title"]}>Resumo</div>
                <table className={styles["page287__table"]}>
                    <thead>
                        <tr>
                            <th>Situação</th>
                            <th>Usa at?</th>
                            <th>Exemplo (inglês)</th>
                            <th>Tradução</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Perguntar / Dizer a hora atual</td>
                            <td><span className={styles["page287__red"]}>Não</span></td>
                            <td>It is 5 o’clock</td>
                            <td>São 5 horas <span className={styles["page287__italic-red"]}>(sem at)</span></td>
                        </tr>
                        <tr>
                            <td>Horário de evento</td>
                            <td><span className={styles["page287__italic-blue"]}>Sim</span></td>
                            <td>At 8:00</td>
                            <td>Às 8 horas <span className={styles["page287__italic-blue"]}>(Com at)</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Pagina287;
