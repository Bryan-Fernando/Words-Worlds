import React, { useState } from 'react';

import styles from './pagina129.module.css';

const Pagina129 = () => {
    const [inputValues, setInputValues] = useState(
        Array(6).fill(Array(6).fill(''))
    );

    return (
        <div>
            <div className={styles.pg91Container}>
                <header className={styles.pg91Header}>
                    <h1 className={styles.pg91HeaderH1}>Grammar</h1>
                    <div>
                        <h2 className={styles.pg91HeaderH2}>Telling the time</h2>
                        <p>Dizendo as horas</p>
                    </div>
                </header>
                <main className={styles.pg91Main}>
                    <div></div>
                </main>
            </div>
        </div>
    );
};
export default Pagina129;
