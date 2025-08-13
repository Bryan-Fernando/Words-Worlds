import React, { useRef } from 'react';
import styles from './pagina225.module.css';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import audio1e from '../assets/audios/pg225_audio1e.mp3';
import audio1p from '../assets/audios/pg225_audio1p.mp3';
import audio2e from '../assets/audios/pg225_audio2e.mp3';
import audio2p from '../assets/audios/pg225_audio2p.mp3';
import audio3e from '../assets/audios/pg225_audio3e.mp3';
import audio3p from '../assets/audios/pg225_audio3p.mp3';
import audio4e from '../assets/audios/pg225_audio4e.mp3';
import audio4p from '../assets/audios/pg225_audio4p.mp3';
import audio5e from '../assets/audios/pg225_audio5e.mp3';
import audio5p from '../assets/audios/pg225_audio5p.mp3';
import audio6e from '../assets/audios/pg225_audio6e.mp3';
import audio6p from '../assets/audios/pg225_audio6p.mp3';
import audio7e from '../assets/audios/pg225_audio7e.mp3';
import audio7p from '../assets/audios/pg225_audio7p.mp3';
import audio8e from '../assets/audios/pg225_audio8e.mp3';
import audio8p from '../assets/audios/pg225_audio8p.mp3';
import audio9e from '../assets/audios/pg225_audio9e.mp3';
import audio9p from '../assets/audios/pg225_audio9p.mp3';
import audio10e from '../assets/audios/pg225_audio10e.mp3';
import audio10p from '../assets/audios/pg225_audio10p.mp3';
import audio11e from '../assets/audios/pg225_audio11e.mp3';
import audio11p from '../assets/audios/pg225_audio11p.mp3';
import audio12e from '../assets/audios/pg225_audio12e.mp3';
import audio12p from '../assets/audios/pg225_audio12p.mp3';
import audio13e from '../assets/audios/pg225_audio13e.mp3';
import audio13p from '../assets/audios/pg225_audio13p.mp3';
import audio14e from '../assets/audios/pg225_audio14e.mp3';
import audio14p from '../assets/audios/pg225_audio14p.mp3';
import audio15e from '../assets/audios/pg225_audio15e.mp3';
import audio15p from '../assets/audios/pg225_audio15p.mp3';
import audio16e from '../assets/audios/pg225_audio16e.mp3';
import audio16p from '../assets/audios/pg225_audio16p.mp3';
import audio17e from '../assets/audios/pg225_audio17e.mp3';
import audio17p from '../assets/audios/pg225_audio17p.mp3';
import audio18e from '../assets/audios/pg225_audio18e.mp3';
import audio18p from '../assets/audios/pg225_audio18p.mp3';
import audio19e from '../assets/audios/pg225_audio19e.mp3';
import audio19p from '../assets/audios/pg225_audio19p.mp3';
import audio20e from '../assets/audios/pg225_audio20e.mp3';
import audio20p from '../assets/audios/pg225_audio20p.mp3';

const Pagina225 = () => {
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

  const renderAudioIcons = (enAudio, ptAudio) => (
    <>
      <img
        src={eng_audio_icon}
        alt="EN"
        className={styles.page225__audio_icon}
        onClick={() => playAudio(enAudio)}
      />
      <img
        src={ptbr_audio_icon}
        alt="PT"
        className={styles.page225__audio_icon}
        onClick={() => playAudio(ptAudio)}
      />
    </>
  );

  const dialogues = [
    {
      id: 1,
      title: "Dialogue 1",
      lines: [
        { speaker: "A", text: "Can I go to the washroom?", audio: [audio2e, audio2p] },
        { speaker: "B", text: "Yes,you can.", audio: [audio3e, audio3p] },
        { speaker: "A", text: "Thank you!", audio: [audio4e, audio4p] },
      ],
    },
    {
      id: 2,
      title: "Dialogue 2",
      lines: [
        { speaker: "A", text: "When can we meet?", audio: [audio5e, audio5p] },
        { speaker: "B", text: "We can meet at 5:00 p.m. tomorrow", audio: [audio6e, audio6p] },
        { speaker: "A", text: "Where can we go?", audio: [audio7e, audio7p] },
        { speaker: "B", text: "We can go to the park or coffee shop", audio: [audio8e, audio8p] },
      ],
    },
    {
      id: 3,
      title: "Dialogue 3",
      lines: [
        { speaker: "A", text: "Can you help me with this problem?", audio: [audio9e, audio9p] },
        { speaker: "B", text: "What's the problem?", audio: [audio10e, audio10p] },
        { speaker: "A", text: "I don't understand this math question.\nCan you explain it to me?", audio: [audio11e, audio11p] },
        { speaker: "B", text: "Yes, I can. Let me show you", audio: [audio12e, audio12p] },
      ],
    },
    {
      id: 4,
      title: "Dialogue 4",
      lines: [
        { speaker: "A", text: "Can I borrow your book?", audio: [audio13e, audio13p] },
        { speaker: "B", text: "Sure! Which book do you want?", audio: [audio14e, audio14p] },
        { speaker: "A", text: "Can I borrow this one?", audio: [audio15e, audio15p] },
        { speaker: "B", text: "Yes, you can. But bring it back tomorrow", audio: [audio16e, audio16p] }, // Reuso se faltarem
      ],
    },
    {
      id: 5,
      title: "Dialogue 5",
      lines: [
        { speaker: "A", text: "How can I get to the library from here?", audio: [audio17e, audio17p] },
        { speaker: "B", text: "You can walk straight for two blocks, and then, turn left", audio: [audio18e, audio18p] },
        { speaker: "A", text: "Can I take the bus instead?", audio: [audio19e, audio19p] },
        { speaker: "B", text: "Yes, you can. The bus stop is just around the corner", audio: [audio20e, audio20p] },
      ],
    },
  ];

  return (
    <div className={styles.pg225Container}>
      <header className={styles.pg225Header}>
        <h1 className={styles.pg225Title}>Dialogues</h1>
        <div className={styles.pg225SubtitleContainer}>
          <h2 className={styles.pg225Subtitle}>
            Real - Life - Conversation Listening Pronunciation Practice
            {renderAudioIcons(audio1e, audio1p)}
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
                    {line.text} {renderAudioIcons(line.audio[0], line.audio[1])}
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
