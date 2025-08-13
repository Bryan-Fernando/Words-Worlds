import React, { useRef } from "react";
import styles from "./pagina226.module.css";

import eng_audio_icon from "../assets/icons/eng_audio_icon.webp";
import ptbr_audio_icon from "../assets/icons/ptbr_audio_icon.webp";

import audio1e from "../assets/audios/pg226_audio1e.mp3";
import audio1p from "../assets/audios/pg226_audio1p.mp3";
import audio2e from "../assets/audios/pg226_audio2e.mp3";
import audio2p from "../assets/audios/pg226_audio2p.mp3";
import audio3e from "../assets/audios/pg226_audio3e.mp3";
import audio3p from "../assets/audios/pg226_audio3p.mp3";
import audio4e from "../assets/audios/pg226_audio4e.mp3";
import audio4p from "../assets/audios/pg226_audio4p.mp3";
import audio5e from "../assets/audios/pg226_audio5e.mp3";
import audio5p from "../assets/audios/pg226_audio5p.mp3";
import audio6e from "../assets/audios/pg226_audio6e.mp3";
import audio6p from "../assets/audios/pg226_audio6p.mp3";
import audio7e from "../assets/audios/pg226_audio7e.mp3";
import audio7p from "../assets/audios/pg226_audio7p.mp3";
import audio8e from "../assets/audios/pg226_audio8e.mp3";
import audio8p from "../assets/audios/pg226_audio8p.mp3";
import audio9e from "../assets/audios/pg226_audio9e.mp3";
import audio9p from "../assets/audios/pg226_audio9p.mp3";
import audio10e from "../assets/audios/pg226_audio10e.mp3";
import audio10p from "../assets/audios/pg226_audio10p.mp3";
import audio11e from "../assets/audios/pg226_audio11e.mp3";
import audio11p from "../assets/audios/pg226_audio11p.mp3";
import audio12e from "../assets/audios/pg226_audio12e.mp3";
import audio12p from "../assets/audios/pg226_audio12p.mp3";
import audio13e from "../assets/audios/pg226_audio13e.mp3";
import audio13p from "../assets/audios/pg226_audio13p.mp3";
import audio14e from "../assets/audios/pg226_audio14e.mp3";
import audio14p from "../assets/audios/pg226_audio14p.mp3";
import audio15e from "../assets/audios/pg226_audio15e.mp3";
import audio15p from "../assets/audios/pg226_audio15p.mp3";
import audio16e from "../assets/audios/pg226_audio16e.mp3";
import audio16p from "../assets/audios/pg226_audio16p.mp3";
import audio17e from "../assets/audios/pg226_audio17e.mp3";
import audio17p from "../assets/audios/pg226_audio17p.mp3";
import audio18e from "../assets/audios/pg226_audio18e.mp3";
import audio18p from "../assets/audios/pg226_audio18p.mp3";
import audio19e from "../assets/audios/pg226_audio19e.mp3";
import audio19p from "../assets/audios/pg226_audio19p.mp3";
import audio20e from "../assets/audios/pg226_audio20e.mp3";
import audio20p from "../assets/audios/pg226_audio20p.mp3";
import audio21e from "../assets/audios/pg226_audio21e.mp3";
import audio21p from "../assets/audios/pg226_audio21p.mp3";
import audio22e from "../assets/audios/pg226_audio22e.mp3";
import audio22p from "../assets/audios/pg226_audio22p.mp3";
import audio23e from "../assets/audios/pg226_audio23e.mp3";
import audio23p from "../assets/audios/pg226_audio23p.mp3";

const Pagina226 = () => {
  const currentAudio = useRef(null);

  const playAudio = (audio) => {
    if (currentAudio.current) {
      currentAudio.current.pause();
      currentAudio.current.currentTime = 0;
    }
    const newAudio = new Audio(audio);
    currentAudio.current = newAudio;
    newAudio.play();
  };

  const renderAudioIcons = (audioE, audioP) => (
    <>
      <img
        src={eng_audio_icon}
        alt="EN"
        className={styles.page226__audio_icon}
        onClick={() => playAudio(audioE)}
      />
      <img
        src={ptbr_audio_icon}
        alt="PT"
        className={styles.page226__audio_icon}
        onClick={() => playAudio(audioP)}
      />
    </>
  );

  const dialogues = [
    {
      id: 6,
      title: "Dialogue 6",
      lines: [
        { speaker: "A", text: "Can I eat in the classroom?", audio: [audio2e, audio2p] },
        { speaker: "B", text: "No, you can't.", audio: [audio3e, audio3p] },
        { speaker: "A", text: "Why?", audio: [audio4e, audio4p] },
        { speaker: "B", text: "Because it's against the school rules.", audio: [audio5e, audio5p] },
      ],
    },
    {
      id: 7,
      title: "Dialogue 7",
      lines: [
        { speaker: "A", text: "Can you pass me the salt, please?", audio: [audio6e, audio6p] },
        { speaker: "B", text: "Sure, here you go.", audio: [audio7e, audio7p] },
        { speaker: "A", text: "Thanks! Can you also give me the pepper?", audio: [audio8e, audio8p] },
        { speaker: "B", text: "Of course!", audio: [audio9e, audio9p] },
      ],
    },
    {
      id: 8,
      title: "Dialogue 8",
      lines: [
        { speaker: "A", text: "Can you speak Spanish?", audio: [audio10e, audio10p] },
        { speaker: "B", text: "No, I can't, but I can speak a little French.", audio: [audio11e, audio11p] },
        { speaker: "A", text: "That's cool!", audio: [audio12e, audio12p] },
      ],
    },
    {
      id: 9,
      title: "Dialogue 9",
      lines: [
        { speaker: "A", text: "Can you give me a ride to the airport tomorrow?", audio: [audio13e, audio13p] },
        { speaker: "B", text: "I'm sorry, I can't. I have to work in the morning.", audio: [audio14e, audio14p] },
        { speaker: "A", text: "Oh, that's too bad. Can anyone else help me?", audio: [audio15e, audio15p] },
        { speaker: "B", text: "You can ask Sara. She can give you a ride.", audio: [audio16e, audio16p] },
      ],
    },
    {
      id: 10,
      title: "Dialogue 10",
      lines: [
        { speaker: "A", text: "Can you play the guitar?", audio: [audio17e, audio17p] },
        { speaker: "B", text: "Yes, I can! I started playing when I was 10 years old.", audio: [audio18e, audio18p] },
        { speaker: "A", text: "Wow!", audio: [audio19e, audio19p] },
      ],
    },
    {
      id: 11,
      title: "Dialogue 11",
      lines: [
        { speaker: "A", text: "What time can we meet tomorrow?", audio: [audio20e, audio20p] },
        { speaker: "B", text: "We can meet at 10:00 a.m.", audio: [audio21e, audio21p] },
        { speaker: "A", text: "Where can we go?", audio: [audio22e, audio22p] },
        { speaker: "B", text: "We can go to the museum. It's free on Sundays!", audio: [audio23e, audio23p] },
      ],
    },
  ];


  return (
    <div className={styles.pg226Container}>
      <header className={styles.pg226Header}>
        <h1 className={styles.pg226Title}>Dialogues</h1>
        <div className={styles.pg226SubtitleContainer}>
          <h2 className={styles.pg226Subtitle}>
            Real-Life - Conversation Listening Pronunciation Practice
            {renderAudioIcons(audio1e, audio1p)}
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
                    {line.text}{" "}
                    {renderAudioIcons(line.audio[0], line.audio[1])}
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
