import React from "react";
import styles from "./pagina226.module.css";

const Pagina226 = () => {
  const dialogues = [
    {
      id: 6,
      title: "Dialogue 6",
      lines: [
        { speaker: "A", text: "Can I eat in the classroom?" },
        { speaker: "B", text: "No, you can't." },
        { speaker: "A", text: "Why?" },
        { speaker: "B", text: "Because it's against the school rules." },
      ],
    },
    {
      id: 7,
      title: "Dialogue 7",
      lines: [
        { speaker: "A", text: "Can you pass me the salt, please?" },
        { speaker: "B", text: "Sure, here you go." },
        { speaker: "A", text: "Thanks! Can you also give me the pepper?" },
        { speaker: "B", text: "Of course!" },
      ],
    },
    {
      id: 8,
      title: "Dialogue 8",
      lines: [
        { speaker: "A", text: "Can you speak Spanish?" },
        { speaker: "B", text: "No, I can't, but I can speak a little French." },
        { speaker: "A", text: "That's cool!" },
      ],
    },
    {
      id: 9,
      title: "Dialogue 9",
      lines: [
        {
          speaker: "A",
          text: "Can you give me a ride to the airport tomorrow?",
        },
        {
          speaker: "B",
          text: "I'm sorry, I can't. I have to work in the morning.",
        },
        { speaker: "A", text: "Oh, that's too bad. Can anyone else help me?" },
        { speaker: "B", text: "You can ask Sara. She can give you a ride." },
      ],
    },
    {
      id: 10,
      title: "Dialogue 10",
      lines: [
        { speaker: "A", text: "Can you play the guitar?" },
        {
          speaker: "B",
          text: "Yes, I can! I started playing when I was 10 years old.",
        },
        { speaker: "A", text: "Wow!" },
      ],
    },
    {
      id: 11,
      title: "Dialogue 11",
      lines: [
        { speaker: "A", text: "What time can we meet tomorrow?" },
        { speaker: "B", text: "We can meet at 10:00 a.m." },
        { speaker: "A", text: "Where can we go?" },
        {
          speaker: "B",
          text: "We can go to the museum. It's free on Sundays!",
        },
      ],
    },
  ];

  return (
    <div className={styles.pg226Container}>
      <header className={styles.pg226Header}>
        <h1 className={styles.pg226Title}>Dialogues</h1>
        <div className={styles.pg226SubtitleContainer}>
          <h2 className={styles.pg226Subtitle}>
            Real-Life - Conversation Listening Pronunciation Practice 🎧
          </h2>
        </div>
      </header>

      <main className={styles.pg226DialoguesContainer}>
        {dialogues.map((dialogue) => (
          <div key={dialogue.id} className={styles.pg226DialogueBox}>
            <h3 className={styles.pg226DialogueTitle}>{dialogue.title}</h3>
            <div className={styles.pg226DialogueContent}>
              {dialogue.lines.map((line, index) => (
                <div key={index} className={styles.pg226DialogueLine}>
                  <span
                    className={
                      line.speaker === "A"
                        ? styles.pg226SpeakerA
                        : styles.pg226SpeakerB
                    }
                  >
                    {line.speaker}:
                  </span>
                  <span
                    className={
                      line.speaker === "A"
                        ? styles.pg226TextA
                        : styles.pg226TextB
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

export default Pagina226;
