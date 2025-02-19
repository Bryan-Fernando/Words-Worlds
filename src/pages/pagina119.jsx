import React, { useState } from 'react';

import styles from './pagina119.module.css';

import pagina112_imagem1 from '../assets/images/pagina112_imagem1.webp';

const Pagina119 = () => {
    const [inputValues, setInputValues] = useState(
        Array(6).fill(Array(6).fill(''))
    );

    const handleInputChange = (rowIndex, colIndex, e) => {
        const newValue = e.target.value;
        const updatedValues = inputValues.map((row, i) =>
            row.map((value, j) => (i === rowIndex && j === colIndex ? newValue : value))
        );
        setInputValues(updatedValues);
    };

    return (
        <div>
            <div className={styles["page119__container"]}>
                <header className={styles["page119__header"]}>
                    <h1 className={styles["page119__header--h1"]}>Real-life Conversation</h1>
                    <div className={styles["page119__header--divider"]}>
                        <div className={styles["page119__header--icon"]}></div>
                        <h2
                            className={styles["page119__subtitle"]}
                            onClick={() => playAudio('global_audio_tellingTTe')}
                            style={{ cursor: 'pointer' }}
                        >
                            1. Present Simple Tense
                        </h2>
                        <p
                            className={styles["page119__subtext"]}
                            onClick={() => playAudio('global_audio_tellingTTp')}
                            style={{ cursor: 'pointer' }}
                        >
                            Presente Simples
                        </p>
                    </div>
                </header>
                <main className={styles["page119__main"]}>
                    <div className={styles["page119__frame--text"]}>
                        <p>
                            Story/Dialogue Idea: “A day in My Life“<br />
                            Characters: John and Sarah<br />
                            Setting: A café, talking about daily routines
                        </p>
                    </div>
                    <div className={styles["page119__container--text"]}>
                        <h3>Dialogue:</h3>
                        <p>John: Hi, Sarah! How are you?</p>
                        <p className={styles["page119__text--red"]}>Sarah: I’m great, John! How about you?</p>
                        <p>John: I’m good too. So, what’s your typical day like?</p>
                        <p className={styles["page119__text--red"]}>
                            Sarah: Well, I usually wake up at 6:30 in the morning. I make coffee and eat breakfast. Then, I leave <br />
                            for work at 8 a.m.
                        </p>
                        <p>John: Do you walk to work?</p>
                        <p className={styles["page119__text--red"]}>
                            Sarah: No, I take the bus. It’s faster. I work from 9 a.m. to 5 p.m. After work, I sometimes go to the <br />
                            gym or watch TV at home. What about you?
                        </p>
                        <p>
                            John: My routine is similar. I wake up at 7 a.m., have breakfast, and drive to work. I work until 6 p.m. <br />
                            In the evenings, I like to cook dinner and read a book before going to bed.
                        </p>
                    </div>
                    <div className={styles["page119__frame--text--gray"]}>
                        <p>
                            <span className={styles["page119__title--bold"]}>Focus:</span> Routine actions, habits, and frequency adverbs like “usually“ and “sometimes“
                        </p>
                    </div>
                    <div className={styles["page119__container--image"]}>
                        <img className={styles["page119__image"]} src={pagina112_imagem1} alt="" />
                    </div>
                </main>
            </div>
        </div>
    );
};
export default Pagina119;
