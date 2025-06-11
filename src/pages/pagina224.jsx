import React from 'react';
import styles from './pagina224.module.css';

const Pagina224 = () => {
  const dialoguesFirstSet = [
    {
      id: 1,
      question: "Where can she swim?",
      answer: "She can swim at the pool"
    },
    {
      id: 2,
      question: "When can they play basketball?",
      answer: "They can play basketball after school"
    },
    {
      id: 3,
      question: "How can he fix the computer?",
      answer: "He can fix the computer by restarting it"
    },
    {
      id: 4,
      question: "Why can't we go to the park?",
      answer: "We can't go to the park, because it's raining"
    },
    {
      id: 5,
      question: "Who can swim?",
      answer: "My sister and I can swim"
    }
  ];

  const dialoguesSecondSet = [
    {
      id: 1,
      question: "What can you do?",
      answer: "I can cook well"
    },
    {
      id: 2,
      question: "How often can they go to the gym?",
      answer: "They can go to the gym three times a week"
    },
    {
      id: 3,
      question: "Who can fix the broken chair?",
      answer: "Sarah can fix the broken chair"
    },
    {
      id: 4,
      question: "When can we have the meeting?",
      answer: "We can have the meeting tomorrow morning"
    },
    {
      id: 5,
      question: "Can she speak English fluently?",
      answer: "No, she can't speak English fluently"
    },
    {
      id: 6,
      question: "Why can't he attend the party?",
      answer: "He can't attend the party because he has to work"
    },
    {
      id: 7,
      question: "Can they swim in the lake?",
      answer: "No, they can't swim in the lake.\nIt's too cold"
    },
    {
      id: 8,
      question: "How many languages can you speak?",
      answer: "I can speak two languages fluently"
    }
  ];

  return (
    <div className={styles.pg224Container}>
      <div className={styles.pg224Header}>
        <h1 className={styles.pg224Title}>Dialogues</h1>
        <h2 className={styles.pg224Subtitle}>Real - Life - Conversation Listening Pronunciation Practice</h2>
      </div>

      <div className={styles.pg224Section}>
        <div className={styles.pg224Content}>
          {/* Primeira parte dos diálogos */}
          <div className={styles.pg224Column}>
            <div className={styles.pg224ImageWrapper}>
              <div className={styles.pg224ImagePlaceholder}></div>
              <div className={styles.pg224DialogueContent}>
                <h3 className={styles.pg224DialogueTitle}>Dialogue {dialoguesFirstSet[0].id}</h3>
                <p className={styles.pg224Question}>{dialoguesFirstSet[0].question}</p>
                <p className={styles.pg224Answer}>{dialoguesFirstSet[0].answer}</p>
              </div>
            </div>
            <div className={styles.pg224DialogueContent}>
              <h3 className={styles.pg224DialogueTitle}>Dialogue {dialoguesFirstSet[3].id}</h3>
              <p className={styles.pg224Question}>{dialoguesFirstSet[3].question}</p>
              <p className={styles.pg224Answer}>{dialoguesFirstSet[3].answer}</p>
            </div>
          </div>

          <div className={styles.pg224Column}>
            <div className={styles.pg224ImageWrapper}>
              <div className={styles.pg224ImagePlaceholder}></div>
              <div className={styles.pg224DialogueContent}>
                <h3 className={styles.pg224DialogueTitle}>Dialogue {dialoguesFirstSet[1].id}</h3>
                <p className={styles.pg224Question}>{dialoguesFirstSet[1].question}</p>
                <p className={styles.pg224Answer}>{dialoguesFirstSet[1].answer}</p>
              </div>
            </div>
            <div className={styles.pg224DialogueContent}>
              <h3 className={styles.pg224DialogueTitle}>Dialogue {dialoguesFirstSet[4].id}</h3>
              <p className={styles.pg224Question}>{dialoguesFirstSet[4].question}</p>
              <p className={styles.pg224Answer}>{dialoguesFirstSet[4].answer}</p>
            </div>
          </div>

          <div className={styles.pg224Column}>
            <div className={styles.pg224ImageWrapper}>
              <div className={styles.pg224ImagePlaceholder}></div>
              <div className={styles.pg224DialogueContent}>
                <h3 className={styles.pg224DialogueTitle}>Dialogue {dialoguesFirstSet[2].id}</h3>
                <p className={styles.pg224Question}>{dialoguesFirstSet[2].question}</p>
                <p className={styles.pg224Answer}>{dialoguesFirstSet[2].answer}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Segunda parte dos diálogos */}
      <div className={styles.pg224Section}>
        <div className={styles.pg224Content}>
          <div className={styles.pg224Column}>
            <div className={styles.pg224ImageWrapper}>
              <div className={styles.pg224ImagePlaceholder}></div>
              <div className={styles.pg224DialogueContent}>
                <h3 className={styles.pg224DialogueTitle}>Dialogue {dialoguesSecondSet[0].id}</h3>
                <p className={styles.pg224Question}>{dialoguesSecondSet[0].question}</p>
                <p className={styles.pg224Answer}>{dialoguesSecondSet[0].answer}</p>
              </div>
            </div>
            <div className={styles.pg224DialogueContent}>
              <h3 className={styles.pg224DialogueTitle}>Dialogue {dialoguesSecondSet[2].id}</h3>
              <p className={styles.pg224Question}>{dialoguesSecondSet[2].question}</p>
              <p className={styles.pg224Answer}>{dialoguesSecondSet[2].answer}</p>
            </div>
            <div className={styles.pg224DialogueContent}>
              <h3 className={styles.pg224DialogueTitle}>Dialogue {dialoguesSecondSet[4].id}</h3>
              <p className={styles.pg224Question}>{dialoguesSecondSet[4].question}</p>
              <p className={styles.pg224Answer}>{dialoguesSecondSet[4].answer}</p>
            </div>
            <div className={styles.pg224DialogueContent}>
              <h3 className={styles.pg224DialogueTitle}>Dialogue {dialoguesSecondSet[6].id}</h3>
              <p className={styles.pg224Question}>{dialoguesSecondSet[6].question}</p>
              <p className={styles.pg224Answer}>{dialoguesSecondSet[6].answer}</p>
            </div>
          </div>

          <div className={styles.pg224Column}>
            <div className={styles.pg224ImageWrapper}>
              <div className={styles.pg224ImagePlaceholder}></div>
              <div className={styles.pg224DialogueContent}>
                <h3 className={styles.pg224DialogueTitle}>Dialogue {dialoguesSecondSet[1].id}</h3>
                <p className={styles.pg224Question}>{dialoguesSecondSet[1].question}</p>
                <p className={styles.pg224Answer}>{dialoguesSecondSet[1].answer}</p>
              </div>
            </div>
            <div className={styles.pg224DialogueContent}>
              <h3 className={styles.pg224DialogueTitle}>Dialogue {dialoguesSecondSet[3].id}</h3>
              <p className={styles.pg224Question}>{dialoguesSecondSet[3].question}</p>
              <p className={styles.pg224Answer}>{dialoguesSecondSet[3].answer}</p>
            </div>
            <div className={styles.pg224DialogueContent}>
              <h3 className={styles.pg224DialogueTitle}>Dialogue {dialoguesSecondSet[5].id}</h3>
              <p className={styles.pg224Question}>{dialoguesSecondSet[5].question}</p>
              <p className={styles.pg224Answer}>{dialoguesSecondSet[5].answer}</p>
            </div>
            <div className={styles.pg224DialogueContent}>
              <h3 className={styles.pg224DialogueTitle}>Dialogue {dialoguesSecondSet[7].id}</h3>
              <p className={styles.pg224Question}>{dialoguesSecondSet[7].question}</p>
              <p className={styles.pg224Answer}>{dialoguesSecondSet[7].answer}</p>
            </div>
          </div>

          <div className={styles.pg224Column}>
            {/* Adicionar placeholder para a terceira imagem da segunda seção */}
            <div className={styles.pg224ImageWrapper}>
              <div className={styles.pg224ImagePlaceholder}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagina224;