import React from 'react';
import styles from './pagina225.module.css';

const Pagina225 = () => {
  const dialogues = [
    {
      id: 1,
      title: "Dialogue 1",
      lines: [
        { speaker: "A", text: "Can I go to the washroom?" },
        { speaker: "B", text: "Yes,you can." },
        { speaker: "A", text: "Thank you!" },
      ],
    },
    {
      id: 2,
      title: "Dialogue 2",
      lines: [
        { speaker: "A", text: "When can we meet?" },
        { speaker: "B", text: "We can meet at 5:00 p.m. tomorrow" },
        { speaker: "A", text: "Where can we go?" },
        { speaker: "B", text: "We can go to the park or coffee shop" },
      ],
    },
    {
      id: 3,
      title: "Dialogue 3",
      lines: [
        { speaker: "A", text: "Can you help me with this problem?" },
        { speaker: "B", text: "What's the problem?" },
        { speaker: "A", text: "I don't understand this math question.\nCan you explain it to me?" },
        { speaker: "B", text: "Yes, I can. Let me show you" },
      ],
    },
    {
      id: 4,
      title: "Dialogue 4",
      lines: [
        { speaker: "A", text: "Can I borrow your book?" },
        { speaker: "B", text: "Sure! Which book do you want?" },
        { speaker: "A", text: "Can I borrow this one?" },
        { speaker: "B", text: "Yes, you can. But bring it back tomorrow" },
      ],
    },
    {
      id: 5,
      title: "Dialogue 5",
      lines: [
        { speaker: "A", text: "How can I get to the library from here?" },
        { speaker: "B", text: "You can walk straight for two blocks, and then, turn left" },
        { speaker: "A", text: "Can I take the bus instead?" },
        { speaker: "B", text: "Yes, you can. The bus stop is just around the corner" },
      ],
    },
  ];

  return (
    <div className={styles.pg225Container}>
      <header className={styles.pg225Header}>
        <h1 className={styles.pg225Title}>Dialogues</h1>
        <div className={styles.pg225SubtitleContainer}>
          <h2 className={styles.pg225Subtitle}>
            Real - Life - Conversation Listening Pronunciation Practice 🎧
          </h2>
        </div>
      </header>

      <main className={styles.pg225DialoguesContainer}>
        {dialogues.map((dialogue) => (
          <div key={dialogue.id} className={styles.pg225DialogueBox}>
            <h3 className={styles.pg225DialogueTitle}>{dialogue.title}</h3>
            <div className={styles.pg225DialogueContent}>
              {dialogue.lines.map((line, index) => (
                <div key={index} className={styles.pg225DialogueLine}>
                  <span
                    className={
                      line.speaker === "A"
                        ? styles.pg225SpeakerA
                        : styles.pg225SpeakerB
                    }
                  >
                    {line.speaker}:
                  </span>
                  <span
                    className={
                      line.speaker === "A"
                        ? styles.pg225TextA
                        : styles.pg225TextB
                    }
                  >
                    {line.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Pagina225;