import React, { useState } from 'react';

import styles from './pagina118.module.css';

const Pagina51 = () => {
    const [inputValuesTable1, setInputValuesTable1] = useState(
        Array(3).fill(Array(6).fill(''))
    );
    const [inputValuesTable2, setInputValuesTable2] = useState(
        Array(3).fill(Array(6).fill(''))
    );
    const [inputValuesTable3, setInputValuesTable3] = useState(
        Array(3).fill(Array(6).fill(''))
    );

    const handleInputChange = (rowIndex, colIndex, e, tableSetter) => {
        const newValue = e.target.value;
        tableSetter((prevValues) =>
            prevValues.map((row, i) =>
                row.map((value, j) => (i === rowIndex && j === colIndex ? newValue : value))
            )
        );
    };

    return (
        <div>
            <div className={styles["page118__container"]}>
                <header className={styles["page118__header"]}>
                    <h1>Grammar</h1>
                </header>
                <main className={styles["page118__main"]}>
                    <div>
                        <div className={styles["page118__table-header"]}>INTERROGATIVE</div>
                        <table className={styles["page118__styled-table"]}>
                            <thead>
                                <tr>
                                    <th>Palavras interrogativas</th>
                                    <th>Verbo <br /> Auxiliar</th>
                                    <th>Sujeito<br /> </th>
                                    <th><span style={{ color: 'red' }}> 'Not'</span> <br /> Advérbio</th>
                                    <th>Verbo(s)</th>
                                    <th>Objeto <br /> Complemento</th>
                                </tr>
                            </thead>
                            <tbody>
                                {inputValuesTable1.map((row, rowIndex) => (
                                    <tr key={rowIndex}>
                                        {row.map((value, colIndex) => (
                                            <td key={colIndex}>
                                                <textarea
                                                    className={styles["page118__input-cell"]}
                                                    value={value}
                                                    rows="1"
                                                    onChange={(e) =>
                                                        handleInputChange(rowIndex, colIndex, e, setInputValuesTable1)
                                                    }
                                                    style={{
                                                        resize: 'none',
                                                        overflowWrap: 'break-word',
                                                        wordWrap: 'break-word',
                                                    }}
                                                />
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <div className={styles["page118__table-header"]}>AFFIRMATIVE</div>
                        <table className={styles["page118__styled-table"]}>
                            <thead>
                                <tr>
                                    <th>Introdução</th>
                                    <th>Sujeito</th>
                                    <th>Verbo <br /> Auxiliar</th>
                                    <th>Advérbio</th>
                                    <th>Verbo(s)</th>
                                    <th>Objeto <br /> Complemento</th>
                                </tr>
                            </thead>
                            <tbody>
                                {inputValuesTable2.map((row, rowIndex) => (
                                    <tr key={rowIndex}>
                                        {row.map((value, colIndex) => (
                                            <td key={colIndex}>
                                                <textarea
                                                    className={styles["page118__input-cell"]}
                                                    value={value}
                                                    rows="1"
                                                    onChange={(e) =>
                                                        handleInputChange(rowIndex, colIndex, e, setInputValuesTable2)
                                                    }
                                                    style={{
                                                        resize: 'none',
                                                        overflowWrap: 'break-word',
                                                        wordWrap: 'break-word',
                                                    }}
                                                />
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <div className={styles["page118__table-header"]}>NEGATIVE</div>
                        <table className={styles["page118__styled-table"]}>
                            <thead>
                                <tr>
                                    <th>Introdução</th>
                                    <th>Sujeito</th>
                                    <th>Verbo <br /> Auxiliar</th>
                                    <th><span style={{ color: 'red' }}> 'Not'</span> <br />Advérbio</th>
                                    <th>Verbo(s)</th>
                                    <th>Objeto <br /> Complemento</th>
                                </tr>
                            </thead>
                            <tbody>
                                {inputValuesTable3.map((row, rowIndex) => (
                                    <tr key={rowIndex}>
                                        {row.map((value, colIndex) => (
                                            <td key={colIndex}>
                                                <textarea
                                                    className={styles["page118__input-cell"]}
                                                    value={value}
                                                    rows="1"
                                                    onChange={(e) =>
                                                        handleInputChange(rowIndex, colIndex, e, setInputValuesTable3)
                                                    }
                                                    style={{
                                                        resize: 'none',
                                                        overflowWrap: 'break-word',
                                                        wordWrap: 'break-word',
                                                    }}
                                                />
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Pagina51;
