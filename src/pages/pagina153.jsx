import React from 'react';
import styles from './pagina153.module.css';

const Pagina153 = () => {
    return (
        <div className={styles["page153__container"]}>
            <h1 className={styles["page153__title"]}>
                Grammar <br />
                <span className={styles["page153__title--highlight"]}>
                    Simple Present ( Be and Common Main Verbs )
                </span>
            </h1>

            {/* Tabela 1 */}
            <section>
                <div className={styles["page153__table-header"]}>Negative Form</div>
                <table className={styles["page153__table"]}>
                    <thead>
                        <tr>
                            <th>Subject</th>
                            <th>Aux <br /> Verb</th>
                            <th className={styles["page153__not-label"]}>( Not )</th>
                            <th>Verb (s)</th>
                            <th>Object <br /> Complement</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>We</td>
                            <td><span className={styles["page153__text-red"]}>don’t</span></td>
                            <td></td>
                            <td>live</td>
                            <td>in São Paulo</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            {/* Tabela 2 */}
            <section>
                <div className={styles["page153__table-header"]}>Negative Form</div>
                <table className={styles["page153__table"]}>
                    <thead>
                        <tr>
                            <th>Subject</th>
                            <th>Aux <br /> Verb</th>
                            <th className={styles["page153__not-label"]}>( Not )</th>
                            <th>Verb (s)</th>
                            <th>Object <br /> Complement</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Lucas and I</td>
                            <td>aren’t</td>
                            <td></td>
                            <td></td>
                            <td>in Brazil</td>
                        </tr>
                        <tr>
                            <td>Lucas and I</td>
                            <td><span className={styles["page153__verb-cell"]}>don’t</span></td>
                            <td></td>
                            <td>live</td>
                            <td>in Brazil</td>
                        </tr>
                        <tr>
                            <td>You</td>
                            <td><span className={styles["page153__verb-cell"]}>don’t</span></td>
                            <td></td>
                            <td>work</td>
                            <td>on Monday</td>
                        </tr>
                        <tr>
                            <td>You, Lucas and Bianca</td>
                            <td><span className={styles["page153__verb-cell"]}>don’t</span></td>
                            <td></td>
                            <td>need</td>
                            <td>a new phone</td>
                        </tr>
                        <tr>
                            <td>Isa, Talita and Eric</td>
                            <td><span className={styles["page153__verb-cell"]}>don’t</span></td>
                            <td></td>
                            <td>drive</td>
                            <td>to work</td>
                        </tr>
                        <tr>
                            <td>Banks</td>
                            <td><span className={styles["page153__verb-cell"]}>don’t</span></td>
                            <td></td>
                            <td>open</td>
                            <td>at 8:00 a.m</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            {/* Tabela 3 */}
            <section>
                <div className={styles["page153__table-header"]}>Negative Form</div>
                <table className={styles["page153__table"]}>
                    <thead>
                        <tr>
                            <th>Subject</th>
                            <th>Aux <br /> Verb</th>
                            <th className={styles["page153__not-label"]}>( Not )</th>
                            <th>Verb (s)</th>
                            <th>Object <br /> Complement</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>We</td>
                            <td><span className={styles["page153__text-red"]}>aren’t</span></td> {/* apenas vermelho texto simples */}
                            <td></td>
                            <td></td>
                            <td>in Brazil</td>
                        </tr>
                        <tr>
                            <td>We</td>
                            <td><span className={styles["page153__verb-cell"]}>don’t</span></td>
                            <td></td>
                            <td>live</td>
                            <td>in Brazil</td>
                        </tr>
                        <tr>
                            <td>You</td>
                            <td><span className={styles["page153__verb-cell"]}>don’t</span></td>
                            <td></td>
                            <td>work</td>
                            <td>on Monday</td>
                        </tr>
                        <tr>
                            <td>You</td>
                            <td><span className={styles["page153__verb-cell"]}>don’t</span></td>
                            <td></td>
                            <td>need</td>
                            <td>a new phone</td>
                        </tr>
                        <tr>
                            <td>Y’all</td>
                            <td><span className={styles["page153__verb-cell"]}>don’t</span></td>
                            <td></td>
                            <td>drive</td>
                            <td>to work</td>
                        </tr>
                        <tr>
                            <td>They</td>
                            <td><span className={styles["page153__verb-cell"]}>don’t</span></td>
                            <td></td>
                            <td>open</td>
                            <td>at 8:00 a.m</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            {/* Nota */}
            <section className={styles["page153__note"]}>
                <div className={styles["page153__note-header"]}>Nota:</div>
                <div className={styles["page153__note-content"]}>
                    <p>
                        <span className={styles["page153__note-red"]}>&ldquo;Don’t&rdquo;</span> é a forma contraída de <span className={styles["page153__note-red"]}>&ldquo;do not&rdquo;</span>
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Pagina153;
