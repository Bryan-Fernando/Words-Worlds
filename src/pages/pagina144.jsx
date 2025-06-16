import React from 'react';
import styles from './pagina144.module.css';

import pagina144_imagem1 from '../assets/images/pagina144_imagem1.webp';

const Pagina144 = () => {
    return (
        <div className={styles["page144"]}>
            <h1 className={styles["page144__title"]}>Dialogues</h1>

            <section className={styles["page144__section"]}>
                <h2 className={styles["page144__subtitle"]}>
                    4. Something Happening Around Now (Not Exactly Right Now)
                </h2>

                <div className={styles["page144__dialogue"]}>
                    <div className={styles["page144__dialogue__text"]}>
                        <p><strong>Anna:</strong> I am reading a great book these days.</p>
                        <p>
                            <span className={styles["page144__dialogue--person2"]}>
                                <strong>Mike:</strong> Really? What's it about?
                            </span>
                        </p>
                        <p><strong>Anna:</strong> It's a mystery novel. I am really enjoying it!</p>
                        <p>
                            <span className={styles["page144__dialogue--person2"]}>
                                <strong>Mike:</strong> Sounds interesting!
                            </span>
                        </p>
                    </div>
                    <img
                        src={pagina144_imagem1}
                        alt="Person reading a book"
                        className={styles["page144__image"]}
                    />
                </div>
            </section>
        </div>
    );
};

export default Pagina144;
