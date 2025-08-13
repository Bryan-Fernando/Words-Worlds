import React, { useRef } from 'react';
import styles from './pagina223.module.css';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import audio1e from '../assets/audios/pg223_audio1e.mp3';
import audio1p from '../assets/audios/pg223_audio1p.mp3';
import audio2e from '../assets/audios/pg223_audio2e.mp3';
import audio2p from '../assets/audios/pg223_audio2p.mp3';
import audio3e from '../assets/audios/pg223_audio3e.mp3';
import audio3p from '../assets/audios/pg223_audio3p.mp3';
import audio4e from '../assets/audios/pg223_audio4e.mp3';
import audio4p from '../assets/audios/pg223_audio4p.mp3';
import audio5e from '../assets/audios/pg223_audio5e.mp3';
import audio5p from '../assets/audios/pg223_audio5p.mp3';
import audio6e from '../assets/audios/pg223_audio6e.mp3';
import audio6p from '../assets/audios/pg223_audio6p.mp3';
import audio7e from '../assets/audios/pg223_audio7e.mp3';
import audio7p from '../assets/audios/pg223_audio7p.mp3';
import audio8e from '../assets/audios/pg223_audio8e.mp3';
import audio8p from '../assets/audios/pg223_audio8p.mp3';
import audio9e from '../assets/audios/pg223_audio9e.mp3';
import audio9p from '../assets/audios/pg223_audio9p.mp3';
import audio10e from '../assets/audios/pg223_audio10e.mp3';
import audio10p from '../assets/audios/pg223_audio10p.mp3';
import audio11e from '../assets/audios/pg223_audio11e.mp3';
import audio11p from '../assets/audios/pg223_audio11p.mp3';
import audio12e from '../assets/audios/pg223_audio12e.mp3';
import audio12p from '../assets/audios/pg223_audio12p.mp3';
import audio13e from '../assets/audios/pg223_audio13e.mp3';
import audio13p from '../assets/audios/pg223_audio13p.mp3';
import audio14e from '../assets/audios/pg223_audio14e.mp3';
import audio14p from '../assets/audios/pg223_audio14p.mp3';
import audio15e from '../assets/audios/pg223_audio15e.mp3';
import audio15p from '../assets/audios/pg223_audio15p.mp3';
import audio16e from '../assets/audios/pg223_audio16e.mp3';
import audio16p from '../assets/audios/pg223_audio16p.mp3';
import audio17e from '../assets/audios/pg223_audio17e.mp3';
import audio17p from '../assets/audios/pg223_audio17p.mp3';
import audio18e from '../assets/audios/pg223_audio18e.mp3';
import audio18p from '../assets/audios/pg223_audio18p.mp3';
import audio19e from '../assets/audios/pg223_audio19e.mp3';
import audio19p from '../assets/audios/pg223_audio19p.mp3';
import audio20e from '../assets/audios/pg223_audio20e.mp3';
import audio20p from '../assets/audios/pg223_audio20p.mp3';
import audio21e from '../assets/audios/pg223_audio21e.mp3';
import audio21p from '../assets/audios/pg223_audio21p.mp3';

const Pagina223 = () => {
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

  const firstImages = [
    { id: 1, title: "Swimming Image" },
    { id: 2, title: "Spanish Class" },
    { id: 3, title: "Guitar Player" }
  ];

  const dialoguesFirstSet = [
    {
      id: 1,
      title: "Dialogue 1",
      question: "Can you swim?",
      answer: "Yes, I can swim",
      audioQuestion: [audio2e, audio2p],
      audioAnswer: [audio3e, audio3p]
    },
    {
      id: 2,
      title: "Dialogue 2",
      question: "Can you speak Spanish?",
      answer: "No, I can't speak Spanish",
      audioQuestion: [audio4e, audio4p],
      audioAnswer: [audio5e, audio5p]
    },
    {
      id: 3,
      title: "Dialogue 3",
      question: "Can you play the guitar?",
      answer: "Yes, I can play the guitar",
      audioQuestion: [audio6e, audio6p],
      audioAnswer: [audio7e, audio7p]
    },
    {
      id: 4,
      title: "Dialogue 4",
      question: "Can you cook?",
      answer: "No, I can't cook",
      audioQuestion: [audio8e, audio8p],
      audioAnswer: [audio9e, audio9p]
    },
    {
      id: 5,
      title: "Dialogue 5",
      question: "Can you ride a bike?",
      answer: "Yes, I can ride a bike.",
      audioQuestion: [audio10e, audio10p],
      audioAnswer: [audio11e, audio11p]
    }
  ];

  const secondImages = [
    { id: 4, title: "Basketball Game" },
    { id: 5, title: "Children Playing" },
    { id: 6, title: "Computer Repair" }
  ];

  const dialoguesSecondSet = [
    {
      id: 6,
      title: "Dialogue 6",
      question: "Can she speak French?",
      answer: "No, she can't speak French",
      audioQuestion: [audio12e, audio12p],
      audioAnswer: [audio13e, audio13p]
    },
    {
      id: 7,
      title: "Dialogue 7",
      question: "Can they play basketball?",
      answer: "Yes, they can play basketball",
      audioQuestion: [audio14e, audio14p],
      audioAnswer: [audio15e, audio15p]
    },
    {
      id: 8,
      title: "Dialogue 8",
      question: "Can he fix the computer?",
      answer: "Yes, he can fix the computer",
      audioQuestion: [audio16e, audio16p],
      audioAnswer: [audio17e, audio17p]
    },
    {
      id: 9,
      title: "Dialogue 9",
      question: "Can we go to the park?",
      answer: "No, we can't go to the park",
      audioQuestion: [audio18e, audio18p],
      audioAnswer: [audio19e, audio19p]
    },
    {
      id: 10,
      title: "Dialogue 10",
      question: "Can you and your brother swim?",
      answer: "Yes, we can swim",
      audioQuestion: [audio20e, audio20p],
      audioAnswer: [audio21e, audio21p]
    }
  ];

  return (
    <div className={styles.pg223Container}>
      <header className={styles.pg223Header}>
        <h1 className={styles.pg223Title}>Dialogues</h1>
        <h2 className={styles.pg223Subtitle}>
          Real - Life - Conversation Listening Pronunciation Practice
          <img
            src={eng_audio_icon}
            alt="EN"
            className={styles.page223__audio_icon}
            onClick={() => playAudio(audio1e)}
          />
          <img
            src={ptbr_audio_icon}
            alt="PT"
            className={styles.page223__audio_icon}
            onClick={() => playAudio(audio1p)}
          />
        </h2>
      </header>

      <div className={styles.pg223Content}>
        <div className={styles.pg223Section}>
          <div className={styles.pg223ImagesContainer}>
            {firstImages.map((image) => (
              <div key={image.id} className={styles.pg223ImagePlaceholder}></div>
            ))}
          </div>

          <div className={styles.pg223DialoguesContainer}>
            {dialoguesFirstSet.map((dialogue) => (
              <div key={dialogue.id} className={styles.pg223DialogueItem}>
                <div className={styles.pg223DialogueTitle}>{dialogue.title}</div>
                <div className={styles.pg223Question}>
                  {dialogue.question}
                  <img
                    src={eng_audio_icon}
                    alt="EN"
                    className={styles.page223__audio_icon}
                    onClick={() => playAudio(dialogue.audioQuestion[0])}
                  />
                  <img
                    src={ptbr_audio_icon}
                    alt="PT"
                    className={styles.page223__audio_icon}
                    onClick={() => playAudio(dialogue.audioQuestion[1])}
                  />
                </div>
                <div className={styles.pg223Answer}>
                  {dialogue.answer}
                  <img
                    src={eng_audio_icon}
                    alt="EN"
                    className={styles.page223__audio_icon}
                    onClick={() => playAudio(dialogue.audioAnswer[0])}
                  />
                  <img
                    src={ptbr_audio_icon}
                    alt="PT"
                    className={styles.page223__audio_icon}
                    onClick={() => playAudio(dialogue.audioAnswer[1])}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.pg223Section}>
          <div className={styles.pg223ImagesContainer}>
            {secondImages.map((image) => (
              <div key={image.id} className={styles.pg223ImagePlaceholder}></div>
            ))}
          </div>

          <div className={styles.pg223DialoguesContainer}>
            {dialoguesSecondSet.map((dialogue) => (
              <div key={dialogue.id} className={styles.pg223DialogueItem}>
                <div className={styles.pg223DialogueTitle}>{dialogue.title}</div>
                <div className={styles.pg223Question}>
                  {dialogue.question}
                  <img
                    src={eng_audio_icon}
                    alt="EN"
                    className={styles.page223__audio_icon}
                    onClick={() => playAudio(dialogue.audioQuestion[0])}
                  />
                  <img
                    src={ptbr_audio_icon}
                    alt="PT"
                    className={styles.page223__audio_icon}
                    onClick={() => playAudio(dialogue.audioQuestion[1])}
                  />
                </div>
                <div className={styles.pg223Answer}>
                  {dialogue.answer}
                  <img
                    src={eng_audio_icon}
                    alt="EN"
                    className={styles.page223__audio_icon}
                    onClick={() => playAudio(dialogue.audioAnswer[0])}
                  />
                  <img
                    src={ptbr_audio_icon}
                    alt="PT"
                    className={styles.page223__audio_icon}
                    onClick={() => playAudio(dialogue.audioAnswer[1])}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagina223;
