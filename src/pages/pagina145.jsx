import React, { useRef } from 'react';
import styles from './pagina145.module.css';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';

const Pagina145 = () => {
    const currentAudioRef = useRef(null);

    const playAudio = (audioKey) => {
        if (currentAudioRef.current) {
            currentAudioRef.current.pause();
            currentAudioRef.current.currentTime = 0;
        }
        const audio = new Audio(audioMap[audioKey]);
        currentAudioRef.current = audio;
        audio.play();
    };

    const renderEngIcon = (audioKey) => (
        <img
            src={eng_audio_icon}
            alt="English Audio"
            className={styles["page145__icon"]}
            onClick={() => playAudio(audioKey)}
        />
    );

    return (
        <div className={styles["page145"]}>
            <h1 className={styles["page145__title"]}>
                Usos do Present Continuous <span className={styles["page145__title--highlight"]}>- Gerúndio</span>
            </h1>

            {/* Seção 1 */}
            <section className={styles["page145__section"]}>
                <h2 className={styles["page145__subtitle"]}>
                    <span className={styles["page145__highlight"]}>
                        <strong>1. Actions happening now</strong> {renderEngIcon('pg145_audio2')} –
                    </span> 
                    <span className={styles["page145__subtitle--translation"]}> Ações que estão acontecendo agora:</span>
                </h2>
                <ul className={styles["page145__list"]}>
                    <li>
                        <span className={styles["page145__example--english"]}>
                            She <span className={styles["page145__highlight"]}>is talking</span> on the phone
                            {renderEngIcon('pg145_audio3')}
                        </span> – “Ela <strong>está falando</strong> ao telefone.”
                    </li>
                    <li>
                        <span className={styles["page145__example--english"]}>
                            We <span className={styles["page145__highlight"]}>are waiting</span> for the bus.
                            {renderEngIcon('pg145_audio4')}
                        </span> – “Nós <strong>estamos esperando</strong> o ônibus.”
                    </li>
                </ul>
            </section>

            {/* Seção 2 */}
            <section className={styles["page145__section"]}>
                <h2 className={styles["page145__subtitle"]}>
                    <span className={styles["page145__highlight"]}>
                        <strong>2. Temporary actions</strong> {renderEngIcon('pg145_audio5')} –
                    </span>
                    <span className={styles["page145__subtitle--translation"]}> Ações temporárias:</span>
                </h2>
                <ul className={styles["page145__list"]}>
                    <li>
                        <span className={styles["page145__example--english"]}>
                            I <span className={styles["page145__highlight"]}>am staying</span> at my friend’s house this week.
                            {renderEngIcon('pg145_audio6')}
                        </span> → “Eu <strong>estou ficando</strong> na casa do meu amigo esta semana.”
                    </li>
                </ul>
            </section>

            {/* Seção 3 */}
            <section className={styles["page145__section"]}>
                <h2 className={styles["page145__subtitle"]}>
                    <span className={styles["page145__highlight"]}>
                        <strong>3. Future plans (arrangements)</strong> {renderEngIcon('pg145_audio7')} –
                    </span>
                    <span className={styles["page145__subtitle--translation"]}> Planos futuros (com horário definido):</span>
                </h2>
                <ul className={styles["page145__list"]}>
                    <li>
                        <span className={styles["page145__example--english"]}>
                            They <span className={styles["page145__highlight"]}>are traveling</span> to Spain next month.
                            {renderEngIcon('pg145_audio8')}
                        </span> – “Eles <strong>estão viajando</strong> para a Espanha no próximo mês.”
                    </li>
                </ul>
            </section>

            {/* Seção 4 */}
            <section className={styles["page145__section"]}>
                <h2 className={styles["page145__subtitle"]}>
                    <span className={styles["page145__highlight"]}>
                        <strong>4. Changing situations</strong> {renderEngIcon('pg145_audio9')} –
                    </span>
                    <span className={styles["page145__subtitle--translation"]}> Mudanças de estado:</span>
                </h2>
                <ul className={styles["page145__list"]}>
                    <li>
                        <span className={styles["page145__example--english"]}>
                            The climate <span className={styles["page145__highlight"]}>is getting</span> warmer.
                            {renderEngIcon('pg145_audio10')}
                        </span> – “O clima <strong>está ficando</strong> mais quente.”
                    </li>
                    <li>
                        <span className={styles["page145__example--english"]}>
                            My English <span className={styles["page145__highlight"]}>is improving</span> every day.
                            {renderEngIcon('pg145_audio11')}
                        </span> – “Meu inglês <strong>está melhorando</strong> a cada dia.”
                    </li>
                </ul>
            </section>
        </div>
    );
};

export default Pagina145;
