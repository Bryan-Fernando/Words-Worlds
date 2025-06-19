import React from 'react';
import styles from './pagina66.module.css';

const Pagina66 = () => {
    return (
        <div className={styles["page66__container"]}>
            <header className={styles["page66__header"]}>
                <h1 className={styles["page66__grammar-title"]}>Grammar:</h1>
                <h2 className={styles["page66__header--en"]}>
                    Common Main Verbs (Base Form) – English & Portuguese
                </h2>
                <h3 className={styles["page66__header--pt"]}>
                    Verbos Principais Comuns (Forma Base) – Inglês e Português
                </h3>
                <h4 className={styles["page66__infinitive"]}>Infinitivo</h4>
            </header>

            <main className={styles["page66__main"]}>

                {/* Bloco A-B-C */}
                <div className={styles["page66__labels"]}>
                    <span className={styles["page66__label--leftA"]}>A</span>
                    <span className={styles["page66__label--centerB"]}>B</span>
                    <span className={styles["page66__label--rightC"]}>C</span>
                </div>
                <section className={styles["page66__block"]}>
                    <div className={styles["page66__columns--3"]}>
                        {/* Coluna A */}
                        <div className={styles["page66__column"]}>
                            <div className={styles["page66__row"]}><span className={styles["page66__english"]}>to ask</span><span>perguntar / fazer perguntas</span></div>
                            <div className={styles["page66__row"]}><span className={styles["page66__english"]}>to answer</span><span>responder</span></div>
                            <div className={styles["page66__row"]}><span className={styles["page66__english"]}>to arrive</span><span>chegar</span></div>
                        </div>
                        {/* Coluna B */}
                        <div className={styles["page66__column"]}>
                            <div className={styles["page66__row"]}><span className={styles["page66__english"]}>to buy</span><span>comprar</span></div>
                            <div className={styles["page66__row"]}><span className={styles["page66__english"]}>to bring</span><span>trazer</span></div>
                            <div className={styles["page66__row"]}><span className={styles["page66__english"]}>to begin</span><span>começar</span></div>
                            <div className={styles["page66__row"]}>
                                <div className={styles["page66__to-be-en"]}>to be</div>
                                <div className={styles["page66__to-be-pt"]}>ser / estar / ter somente para idade</div>
                            </div>
                        </div>
                        {/* Coluna C */}
                        <div className={styles["page66__column"]}>
                            <div className={styles["page66__row"]}>
                                <span className={styles["page66__english"]}>to call</span>
                                <div><span>chamar</span><br /><span className={styles["page66__highlight--red"]}>ligar / telefonar para</span></div>
                            </div>
                            <div className={styles["page66__row"]}><span className={styles["page66__english"]}>to come</span><span>vir</span></div>
                            <div className={styles["page66__row"]}><span className={styles["page66__english"]}>to cook</span><span>cozinhar</span></div>
                        </div>
                    </div>
                </section>

                {/* Bloco D-E-F-G */}
                <div className={styles["page66__labels"]}>
                    <span className={styles["page66__label--leftD"]}>D</span>
                    <span className={styles["page66__label--centerE"]}>E</span>
                    <span className={styles["page66__label--centerF"]}>F</span>
                    <span className={styles["page66__label--rightG"]}>G</span>
                </div>
                <section className={styles["page66__block"]}>
                    <div className={styles["page66__columns--4"]}>
                        <div className={styles["page66__column"]}>
                            <div className={styles["page66__row"]}><span className={styles["page66__english"]}>to dance</span><span>dançar</span></div>
                            <div className={styles["page66__row"]}><span className={styles["page66__english"]}>to do</span><span>fazer</span></div>
                            <div className={styles["page66__row"]}><span className={styles["page66__english"]}>to drink</span><span>beber</span></div>
                        </div>
                        <div className={styles["page66__column"]}>
                            <div className={styles["page66__row"]}><span className={styles["page66__english"]}>to eat</span><span>comer</span></div>
                            <div className={styles["page66__row"]}><span className={styles["page66__english"]}>to enjoy</span><span>aproveitar / gostar muito / apreciar / curtir</span></div>
                        </div>
                        <div className={styles["page66__column"]}>
                            <div className={styles["page66__row"]}><span className={styles["page66__english"]}>to find</span><span>encontrar / achar</span></div>
                            <div className={styles["page66__row"]}><span className={styles["page66__english"]}>to finish</span><span>terminar / acabar</span></div>
                        </div>
                        <div className={styles["page66__column"]}>
                            <div className={styles["page66__row"]}><span className={styles["page66__english"]}>to go</span><span>ir</span></div>
                            <div className={styles["page66__row"]}><span className={styles["page66__english"]}>to give</span><span>dar</span></div>
                            <div className={styles["page66__row"]}><span className={styles["page66__english"]}>to get</span><span>obter / conseguir / ter – <span style={{ color: '#A61C28'}}>( etc )</span></span></div>
                        </div>
                    </div>
                </section>

                {/* Bloco H-L-M-N */}
                <div className={styles["page66__labels"]}>
                    <span className={styles["page66__label--leftH"]}>H</span>
                    <span className={styles["page66__label--centerL"]}>L</span>
                    <span className={styles["page66__label--centerM"]}>M</span>
                    <span className={styles["page66__label--rightN"]}>N</span>
                </div>
                <section className={styles["page66__block"]}>
                    <div className={styles["page66__columns--4"]}>
                        <div className={styles["page66__column"]}>
                            <div className={styles["page66__row"]}><span className={styles["page66__english"]}>to have</span><span>ter / possuir</span></div>
                            <div className={styles["page66__row"]}><span className={styles["page66__english"]}>to help</span><span>ajudar / socorrer</span></div>
                            <div className={styles["page66__row"]}><span className={styles["page66__english"]}>to hear</span><span>ouvir</span></div>
                        </div>
                        <div className={styles["page66__column"]}>
                            <div className={styles["page66__row"]}><span className={styles["page66__english"]}>to like</span><span>gostar</span></div>
                            <div className={styles["page66__row"]}><span className={styles["page66__english"]}>to live</span><span>viver</span></div>
                            <div className={styles["page66__row"]}><span className={styles["page66__english"]}>to look</span><span>olhar</span></div>
                        </div>
                        <div className={styles["page66__column"]}>
                            <div className={styles["page66__row"]}><span className={styles["page66__english"]}>to make</span><span>fazer</span></div>
                            <div className={styles["page66__row"]}><span className={styles["page66__english"]}>to meet</span><span>encontrar / conhecer</span></div>
                        </div>
                        <div className={styles["page66__column"]}>
                            <div className={styles["page66__row"]}><span className={styles["page66__english"]}>to need</span><span>precisar / necessitar</span></div>
                        </div>
                    </div>
                </section>

            </main>
        </div>
    );
};

export default Pagina66;
