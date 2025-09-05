import React, { useState, useRef } from 'react';
import styles from './pagina274.module.css';

import correctIcon from '../assets/icons/correct_icon.webp';
import wrongIcon from '../assets/icons/wrong_icon.webp';
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import audioEng1 from '../assets/audios/pg274_audio1e.mp3';
import audioEng2 from '../assets/audios/pg274_audio2e.mp3';
import audioEng3 from '../assets/audios/pg274_audio3e.mp3';
import audioEng4 from '../assets/audios/pg274_audio4e.mp3';
import audioEng5 from '../assets/audios/pg274_audio5e.mp3';
import audioEng6 from '../assets/audios/pg274_audio6e.mp3';

import audioPt1 from '../assets/audios/pg274_audio1p.mp3';
import audioPt2 from '../assets/audios/pg274_audio2p.mp3';
import audioPt3 from '../assets/audios/pg274_audio3p.mp3';
import audioPt4 from '../assets/audios/pg274_audio4p.mp3';
import audioPt5 from '../assets/audios/pg274_audio5p.mp3';
import audioPt6 from '../assets/audios/pg274_audio6p.mp3';

const questions = [
  {
    textBefore: "Tom: That was the ",
    textAfter: " game ever! (exciting)",
    answer: "most exciting",
    speaker: "tom",
    audioEng: audioEng2,
    audioPt: audioPt2
  },
  {
    textBefore: "Lily: I agree! And this stadium is ",
    textAfter: " than the old one. (big)",
    answer: "bigger",
    speaker: "lily",
    audioEng: audioEng3,
    audioPt: audioPt3
  },
  {
    textBefore: "Tom: Also, the players were ",
    textAfter: " than last year. (strong)",
    answer: "stronger",
    speaker: "tom",
    audioEng: audioEng4,
    audioPt: audioPt4
  },
  {
    textBefore: "Lily: Yes, and the weather was ",
    textAfter: " too! (good)",
    answer: "better",
    speaker: "lily",
    audioEng: audioEng5,
    audioPt: audioPt5
  },
  {
    textBefore: "Tom: Definitely, it was the ",
    textAfter: " match of the season! (fun)",
    answer: "most fun",
    speaker: "tom",
    audioEng: audioEng6,
    audioPt: audioPt6
  }
];

const normalize = (str) => str.trim().replace(/\s+/g, ' ').toLowerCase();

const Pagina274 = () => {
  const [inputs, setInputs] = useState(Array(questions.length).fill(''));
  const [results, setResults] = useState(Array(questions.length).fill(null));
  const currentAudioRef = useRef(null);

  const handleInputChange = (value, index) => {
    const updated = [...inputs];
    updated[index] = value;
    setInputs(updated);
  };

  const handleCheckClick = () => {
    const evaluated = inputs.map((input, i) =>
      normalize(input) === normalize(questions[i].answer)
    );
    setResults(evaluated);
  };

  const playAudio = (audioFile) => {
    if (currentAudioRef.current) {
      currentAudioRef.current.pause();
      currentAudioRef.current.currentTime = 0;
    }
    const audio = new Audio(audioFile);
    currentAudioRef.current = audio;
    audio.play();
  };

  return (
    <div className={styles.page274__container}>
      <header className={styles.page274__header}>
        <h1>
          <span className={styles.page274__grammarRed}>Grammar</span> -{' '}
          <span className={styles.page274__grammarBold}>Adjectives</span>
        </h1>
      </header>

      <p className={styles.page274__instruction}>
        <strong>7.</strong> Complete the dialogue using the correct form of the adjectives:
        <img
          src={eng_audio_icon}
          alt="Play English Audio"
          className={styles.page274__icon}
          onClick={() => playAudio(audioEng1)}
        />
        <img
          src={ptbr_audio_icon}
          alt="Play Portuguese Audio"
          className={styles.page274__icon}
          onClick={() => playAudio(audioPt1)}
        />
      </p>

      <div className={styles.page274__dialogueBox}>
        {questions.map((q, index) => {
          const isCorrect = results[index] === true;
          const speakerClass = q.speaker === "tom" ? styles.page274__tomText : styles.page274__lilyText;
          const inputClass =
            isCorrect && q.speaker === "tom"
              ? styles.page274__inputTomCorrect
              : isCorrect && q.speaker === "lily"
              ? styles.page274__inputLilyCorrect
              : styles.page274__input;

          return (
            <div key={index} className={styles.page274__line}>
              <span className={speakerClass}>{q.textBefore}</span>
              <input
                type="text"
                value={inputs[index]}
                onChange={(e) => handleInputChange(e.target.value, index)}
                className={inputClass}
              />
              <span className={speakerClass}>{q.textAfter}</span>
              <img
                src={eng_audio_icon}
                alt="Play English Audio"
                className={styles.page274__icon}
                onClick={() => playAudio(q.audioEng)}
              />
              <img
                src={ptbr_audio_icon}
                alt="Play Portuguese Audio"
                className={styles.page274__icon}
                onClick={() => playAudio(q.audioPt)}
              />
              {results[index] !== null && (
                <img
                  src={results[index] ? correctIcon : wrongIcon}
                  alt={results[index] ? "Correct" : "Incorrect"}
                  className={styles.page274__resultIcon}
                />
              )}
            </div>
          );
        })}
      </div>

      <div className={styles.page274__checkContainer}>
        <button className={styles.page274__checkButton} onClick={handleCheckClick}>
          Check
        </button>
      </div>
    </div>
  );
};

export default Pagina274;
