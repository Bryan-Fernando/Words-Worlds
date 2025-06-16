import React from 'react';
import styles from './pagina143.module.css';

import pagina143_imagem1 from '../assets/images/pagina143_imagem1.webp';
import pagina143_imagem2 from '../assets/images/pagina143_imagem2.webp';
import pagina143_imagem3 from '../assets/images/pagina143_imagem3.webp';
import pagina143_imagem4 from '../assets/images/pagina143_imagem4.webp';
import pagina143_imagem5 from '../assets/images/pagina143_imagem5.webp';

const Pagina143 = () => {
    return (
        <div className={styles["page143"]}>
            <h1 className={styles["page143__title"]}>Dialogues</h1>

            {/* Section A */}
            <section className={styles["page143__section"]}>
                <h2 className={styles["page143__subtitle"]}>a. Actions Happening Now</h2>

                <div className={styles["page143__dialogue"]}>
                    <div className={styles["page143__dialogue__text"]}>
                        <p><strong>1. Anna:</strong> Hey, what are you doing?</p>
                        <p><span className={styles["page143__dialogue--person2"]}><strong>John:</strong> I am watching a movie.</span></p>
                        <p><strong>Anna:</strong> Oh, cool! What movie are you watching?</p>
                        <p><span className={styles["page143__dialogue--person2"]}><strong>John:</strong> It’s a new action film.</span></p>
                    </div>
                    <img src={pagina143_imagem1} alt="Imagem 1" className={styles["page143__image"]} />
                </div>

                <div className={styles["page143__dialogue"]}>
                    <div className={styles["page143__dialogue__text"]}>
                        <p><strong>2. Lily:</strong> Hey, what are you doing right now?</p>
                        <p><span className={styles["page143__dialogue--person2"]}><strong>Tom:</strong> I am studying for my math exam.</span></p>
                        <p><strong>Lily:</strong> Oh, sorry to bother you!</p>
                        <p><span className={styles["page143__dialogue--person2"]}><strong>Tom:</strong> No problem! I am just taking a short break.</span></p>
                    </div>
                    <img src={pagina143_imagem2} alt="Imagem 2" className={styles["page143__image"]} />
                </div>

            </section>

            {/* Section B */}
            <section className={styles["page143__section"]}>
                <h2 className={styles["page143__subtitle"]}>b. Temporary Actions</h2>

                <div className={styles["page143__dialogue"]}>
                    <div className={styles["page143__dialogue__text"]}>
                        <p><strong>1. Emma:</strong> Why is Tom staying at a hotel?</p>
                        <p><span className={styles["page143__dialogue--person2"]}><strong>Mike:</strong> He is renovating his apartment.</span></p>
                    </div>
                    <img src={pagina143_imagem3} alt="Imagem 3" className={styles["page143__image"]} />
                </div>

                <div className={styles["page143__dialogue"]}>
                    <div className={styles["page143__dialogue__text"]}>
                        <p><strong>2. Emma:</strong> Why is David living with his sister?</p>
                        <p><span className={styles["page143__dialogue--person2"]}><strong>Jake:</strong> He is waiting for his new apartment to be ready.</span></p>
                        <p><strong>Emma:</strong> Oh, that makes sense!</p>
                        <p><span className={styles["page143__dialogue--person2"]}><strong>Jake:</strong> Yeah, he is just staying there for a few weeks.</span></p>
                    </div>
                </div>
            </section>

            {/* Section C */}
            <section className={styles["page143__section"]}>
                <h2 className={styles["page143__subtitle"]}>c. Future Plans ( Arrangements )</h2>

                <div className={styles["page143__dialogue"]}>
                    <div className={styles["page143__dialogue__text"]}>
                        <p><strong>1. Sarah:</strong> What are you doing this weekend?</p>
                        <p><span className={styles["page143__dialogue--person2"]}><strong>Mark:</strong> I am visiting my grandparents.</span></p>
                        <p><strong>Sarah:</strong> That sounds nice!</p>
                    </div>
                    <img src={pagina143_imagem4} alt="Imagem 4" className={styles["page143__image"]} />
                </div>

                <div className={styles["page143__dialogue"]}>
                    <div className={styles["page143__dialogue__text"]}>
                        <p><strong>2. Sophia:</strong> What are you doing this weekend?</p>
                        <p><span className={styles["page143__dialogue--person2"]}><strong>James:</strong> I am going to a concert with my friends.</span></p>
                        <p><strong>Sophia:</strong> That sounds fun! Who is performing?</p>
                        <p><span className={styles["page143__dialogue--person2"]}><strong>James:</strong> A new band called “The Soundwaves.”</span></p>
                        
                    </div>
                    <img src={pagina143_imagem5} alt="Imagem 5" className={styles["page143__image"]} />
                </div>

            </section>
        </div>
    );
};

export default Pagina143;
