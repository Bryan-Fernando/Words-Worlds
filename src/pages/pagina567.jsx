import React from 'react';
import styles from './pagina567.module.css';

// Imagens — substitua pelos caminhos corretos do seu projeto
// import bannerTalk from '../assets/img/dialogues/bench-talk.jpg';

const Pagina567 = () => {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Real Life Dialogue</h1>

      {/* Dias da semana */}
      <div className={styles.weekRow}>
        {[
          {en:'Monday', pt:'Segunda-feira', abbr:'Mon'},
          {en:'Tuesday', pt:'Terça-feira', abbr:'Tue'},
          {en:'Wednesday', pt:'Quarta-feira', abbr:'Wed'},
          {en:'Thursday', pt:'Quinta-feira', abbr:'Thu'},
          {en:'Friday', pt:'Sexta-feira', abbr:'Fri'},
          {en:'Saturday', pt:'Sábado', abbr:'Sat'},
          {en:'Sunday', pt:'Domingo', abbr:'Sun'},
        ].map((d)=>(
          <div className={styles.dayPill} key={d.en}>
            <div className={styles.dayEn}>{d.en}</div>
            <div className={styles.dayPt}>{d.pt}</div>
            <div className={styles.dayAbbr}>({d.abbr})</div>
          </div>
        ))}
      </div>

      {/* Períodos do dia */}
      <div className={styles.timesRow}>
        <div className={styles.timeItem}>
          <span className={styles.timeEn}>Morning</span>
          <span className={styles.timePt}>Manhã</span>
        </div>
        <div className={styles.timeItem}>
          <span className={styles.timeEn}>Afternoon</span>
          <span className={styles.timePt}>Tarde</span>
        </div>
        <div className={styles.timeItem}>
          <span className={styles.timeEn}>Evening/Night</span>
          <span className={styles.timePt}>Noite</span>
        </div>
      </div>

      {/* Imagem grande */}
      <figure className={styles.hero}>
        <img src={'' /* bannerTalk */} alt="Two friends chatting on a bench" />
      </figure>

      {/* Diálogo */}
      <section className={styles.dialogue}>
        <p><strong className={styles.joe}>Joe:</strong> Hey, Sue! What do you <span className={styles.hl}>usually</span> do on Mondays?</p>
        <p>
          <strong className={styles.sue}>Sue:</strong> Well, I <span className={styles.hl}>always</span> check my email in the morning to catch up on work stuff. 
          Then, I <span className={styles.hl}>often</span> watch videos online to unwind in the evening. How about you?
        </p>
        <p>
          <strong className={styles.joe}>Joe:</strong> Mondays are my grocery shopping days. I never miss going to the store after work. 
          It’s less crowded.
        </p>
        <p>
          <strong className={styles.sue}>Sue:</strong> That sounds convenient. Do you <span className={styles.hl}>sometimes</span> eat out after shopping?
        </p>
        <p>
          <strong className={styles.joe}>Joe:</strong> Yeah, <span className={styles.hl}>sometimes</span> I do. Especially if I’m too tired to cook. 
          But I <span className={styles.hl}>always</span> try to make it home before it gets too late.
        </p>

        <p className={styles.sceneNote}>(On a different day…)</p>

        <p><strong className={styles.sue}>Sue:</strong> Hey, Joe! What are you up to on Thursdays?</p>
        <p>
          <strong className={styles.joe}>Joe:</strong> Thursdays are game nights for me. I <span className={styles.hl}>always</span> invite friends over for some gaming fun.
        </p>
        <p>
          <strong className={styles.sue}>Sue:</strong> That sounds like a <span className={styles.hl}>blast</span>! 
          I <span className={styles.hl}>sometimes</span> join in if I’m free. Otherwise, I’m <span className={styles.hl}>usually</span> reading the news online 
          or catching up on my favorite shows.
        </p>
        <p>
          <strong className={styles.joe}>Joe:</strong> Yeah, I’ve noticed you’re pretty busy during the week. 
          It’s nice to have some <span className={styles.hl}>downtime activities</span>, though.
        </p>
      </section>

      {/* Word Bank */}
      <section className={styles.wordBank}>
        <h3 className={styles.bankTitle}>Word Bank</h3>
        <div className={styles.bankGrid}>
          <div className={styles.bankItem}>
            <div className={styles.en}>To unwind</div>
            <div className={styles.pt}>Descontrair/Relaxar</div>
          </div>
          <div className={styles.bankItem}>
            <div className={styles.en}>Leisure activities</div>
            <div className={styles.pt}>Atividades de lazer</div>
          </div>
          <div className={styles.bankItem}>
            <div className={styles.en}>Downtime activities</div>
            <div className={styles.pt}>Atividades de tempo livre</div>
          </div>
          <div className={styles.bankItem}>
            <div className={styles.en}>Blast</div>
            <div className={styles.pt}>Divertido/incrível</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pagina567;
