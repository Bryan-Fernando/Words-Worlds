import React from 'react';
import styles from './pagina227.module.css';

import gif1 from '../assets/images/gif1.gif';
import gif2 from '../assets/images/gif2.gif';
import gif3 from '../assets/images/gif3.gif';

const sections = [
    {
        gif: gif1,
        text: "The present continuous tense is used for actions happening right now. For example: 'She is eating lunch.'"
    },
    {
        gif: gif2,
        text: "It is also used for future plans. For example: 'They are going to the cinema tonight.'"
    },
    {
        gif: gif3,
        text: "We form it with the verb 'to be' + verb + -ing. Example: 'I am studying English.'"
    }
];

const Pagina227 = () => {
    return (
        <div className={styles.page227__container}>
            <h1 className={styles.page227__title}>Understanding the Present Continuous</h1>
            <div className={styles.page227__content}>
                {sections.map((section, index) => (
                    <div key={index} className={styles.page227__section}>
                        <img src={section.gif} alt={`Illustration ${index + 1}`} className={styles.page227__gif} />
                        <p className={styles.page227__text}>{section.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Pagina227;
