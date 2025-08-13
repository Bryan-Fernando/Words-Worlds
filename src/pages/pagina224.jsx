import React, { useRef } from 'react';
import styles from './pagina224.module.css';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';

import audio1e from '../assets/audios/pg224_audio1e.mp3';
import audio1p from '../assets/audios/pg224_audio1p.mp3';
import audio2e from '../assets/audios/pg224_audio2e.mp3';
import audio2p from '../assets/audios/pg224_audio2p.mp3';
import audio3e from '../assets/audios/pg224_audio3e.mp3';
import audio3p from '../assets/audios/pg224_audio3p.mp3';
import audio4e from '../assets/audios/pg224_audio4e.mp3';
import audio4p from '../assets/audios/pg224_audio4p.mp3';
import audio5e from '../assets/audios/pg224_audio5e.mp3';
import audio5p from '../assets/audios/pg224_audio5p.mp3';
import audio6e from '../assets/audios/pg224_audio6e.mp3';
import audio6p from '../assets/audios/pg224_audio6p.mp3';
import audio7e from '../assets/audios/pg224_audio7e.mp3';
import audio7p from '../assets/audios/pg224_audio7p.mp3';
import audio8e from '../assets/audios/pg224_audio8e.mp3';
import audio8p from '../assets/audios/pg224_audio8p.mp3';
import audio9e from '../assets/audios/pg224_audio9e.mp3';
import audio9p from '../assets/audios/pg224_audio9p.mp3';
import audio10e from '../assets/audios/pg224_audio10e.mp3';
import audio10p from '../assets/audios/pg224_audio10p.mp3';
import audio11e from '../assets/audios/pg224_audio11e.mp3';
import audio11p from '../assets/audios/pg224_audio11p.mp3';
import audio12e from '../assets/audios/pg224_audio12e.mp3';
import audio12p from '../assets/audios/pg224_audio12p.mp3';
import audio13e from '../assets/audios/pg224_audio13e.mp3';
import audio13p from '../assets/audios/pg224_audio13p.mp3';
import audio14e from '../assets/audios/pg224_audio14e.mp3';
import audio14p from '../assets/audios/pg224_audio14p.mp3';
import audio15e from '../assets/audios/pg224_audio15e.mp3';
import audio15p from '../assets/audios/pg224_audio15p.mp3';
import audio16e from '../assets/audios/pg224_audio16e.mp3';
import audio16p from '../assets/audios/pg224_audio16p.mp3';
import audio17e from '../assets/audios/pg224_audio17e.mp3';
import audio17p from '../assets/audios/pg224_audio17p.mp3';
import audio18e from '../assets/audios/pg224_audio18e.mp3';
import audio18p from '../assets/audios/pg224_audio18p.mp3';
import audio19e from '../assets/audios/pg224_audio19e.mp3';
import audio19p from '../assets/audios/pg224_audio19p.mp3';
import audio20e from '../assets/audios/pg224_audio20e.mp3';
import audio20p from '../assets/audios/pg224_audio20p.mp3';
import audio21e from '../assets/audios/pg224_audio21e.mp3';
import audio21p from '../assets/audios/pg224_audio21p.mp3';
import audio22e from '../assets/audios/pg224_audio22e.mp3';
import audio22p from '../assets/audios/pg224_audio22p.mp3';
import audio23e from '../assets/audios/pg224_audio23e.mp3';
import audio23p from '../assets/audios/pg224_audio23p.mp3';
import audio24e from '../assets/audios/pg224_audio24e.mp3';
import audio24p from '../assets/audios/pg224_audio24p.mp3';
import audio25e from '../assets/audios/pg224_audio25e.mp3';
import audio25p from '../assets/audios/pg224_audio25p.mp3';
import audio26e from '../assets/audios/pg224_audio26e.mp3';
import audio26p from '../assets/audios/pg224_audio26p.mp3';
import audio27e from '../assets/audios/pg224_audio27e.mp3';
import audio27p from '../assets/audios/pg224_audio27p.mp3';

const Pagina224 = () => {
  const currentAudio = React.useRef(null);

  const playAudio = (audio) => {
    if (currentAudio.current) {
      currentAudio.current.pause();
      currentAudio.current.currentTime = 0;
    }
    const newAudio = new Audio(audio);
    currentAudio.current = newAudio;
    newAudio.play();
  };

  const renderAudioIcons = (engAudio, ptAudio) => (
    <>
      <img
        src={eng_audio_icon}
        alt="EN"
        className={styles.page224__audio_icon}
        onClick={() => playAudio(engAudio)}
      />
      <img
        src={ptbr_audio_icon}
        alt="PT"
        className={styles.page224__audio_icon}
        onClick={() => playAudio(ptAudio)}
      />
    </>
  );

    return (
    <div className={styles.pg224Container}>
      <div className={styles.pg224Header}>
        <h1 className={styles.pg224Title}>Dialogues</h1>
        <h2 className={styles.pg224Subtitle}>
          Real - Life - Conversation Listening Pronunciation Practice
          {renderAudioIcons(audio1e, audio1p)}
        </h2>
      </div>

      <div className={styles.pg224Section}>
        <div className={styles.pg224Content}>
          <div className={styles.pg224Column}>
            <div className={styles.pg224ImageWrapper}>
              <div className={styles.pg224ImagePlaceholder}></div>
              <div className={styles.pg224DialogueContent}>
                <h3 className={styles.pg224DialogueTitle}>Dialogue 1</h3>
                <p className={styles.pg224Question}>Where can she swim? {renderAudioIcons(audio2e, audio2p)}</p>
                <p className={styles.pg224Answer}>She can swim at the pool {renderAudioIcons(audio3e, audio3p)}</p>
              </div>
            </div>
            <div className={styles.pg224DialogueContent}>
              <h3 className={styles.pg224DialogueTitle}>Dialogue 4</h3>
              <p className={styles.pg224Question}>Why can't we go to the park? {renderAudioIcons(audio8e, audio8p)}</p>
              <p className={styles.pg224Answer}>We can't go to the park, because it's raining {renderAudioIcons(audio9e, audio9p)}</p>
            </div>
          </div>

          <div className={styles.pg224Column}>
            <div className={styles.pg224ImageWrapper}>
              <div className={styles.pg224ImagePlaceholder}></div>
              <div className={styles.pg224DialogueContent}>
                <h3 className={styles.pg224DialogueTitle}>Dialogue 2</h3>
                <p className={styles.pg224Question}>When can they play basketball? {renderAudioIcons(audio4e, audio4p)}</p>
                <p className={styles.pg224Answer}>They can play basketball after school {renderAudioIcons(audio5e, audio5p)}</p>
              </div>
            </div>
            <div className={styles.pg224DialogueContent}>
              <h3 className={styles.pg224DialogueTitle}>Dialogue 5</h3>
              <p className={styles.pg224Question}>Who can swim? {renderAudioIcons(audio10e, audio10p)}</p>
              <p className={styles.pg224Answer}>My sister and I can swim {renderAudioIcons(audio11e, audio11p)}</p>
            </div>
          </div>

          <div className={styles.pg224Column}>
            <div className={styles.pg224ImageWrapper}>
              <div className={styles.pg224ImagePlaceholder}></div>
              <div className={styles.pg224DialogueContent}>
                <h3 className={styles.pg224DialogueTitle}>Dialogue 3</h3>
                <p className={styles.pg224Question}>How can he fix the computer? {renderAudioIcons(audio6e, audio6p)}</p>
                <p className={styles.pg224Answer}>He can fix the computer by restarting it {renderAudioIcons(audio7e, audio7p)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.pg224Section}>
        <div className={styles.pg224Content}>
          <div className={styles.pg224Column}>
            <div className={styles.pg224ImageWrapper}>
              <div className={styles.pg224ImagePlaceholder}></div>
              <div className={styles.pg224DialogueContent}>
                <h3 className={styles.pg224DialogueTitle}>Dialogue 6</h3>
                <p className={styles.pg224Question}>What can you do? {renderAudioIcons(audio12e, audio12p)}</p>
                <p className={styles.pg224Answer}>I can cook well {renderAudioIcons(audio13e, audio13p)}</p>
              </div>
            </div>
            <div className={styles.pg224DialogueContent}>
              <h3 className={styles.pg224DialogueTitle}>Dialogue 8</h3>
              <p className={styles.pg224Question}>Who can fix the broken chair? {renderAudioIcons(audio16e, audio16p)}</p>
              <p className={styles.pg224Answer}>Sarah can fix the broken chair {renderAudioIcons(audio17e, audio17p)}</p>
            </div>
            <div className={styles.pg224DialogueContent}>
              <h3 className={styles.pg224DialogueTitle}>Dialogue 10</h3>
              <p className={styles.pg224Question}>Can she speak English fluently? {renderAudioIcons(audio20e, audio20p)}</p>
              <p className={styles.pg224Answer}>No, she can't speak English fluently {renderAudioIcons(audio21e, audio21p)}</p>
            </div>
            <div className={styles.pg224DialogueContent}>
              <h3 className={styles.pg224DialogueTitle}>Dialogue 12</h3>
              <p className={styles.pg224Question}>Can they swim in the lake? {renderAudioIcons(audio24e, audio24p)}</p>
              <p className={styles.pg224Answer}>No, they can't swim in the lake. It's too cold {renderAudioIcons(audio25e, audio25p)}</p>
            </div>
          </div>

          <div className={styles.pg224Column}>
            <div className={styles.pg224ImageWrapper}>
              <div className={styles.pg224ImagePlaceholder}></div>
              <div className={styles.pg224DialogueContent}>
                <h3 className={styles.pg224DialogueTitle}>Dialogue 7</h3>
                <p className={styles.pg224Question}>How often can they go to the gym? {renderAudioIcons(audio14e, audio14p)}</p>
                <p className={styles.pg224Answer}>They can go to the gym three times a week {renderAudioIcons(audio15e, audio15p)}</p>
              </div>
            </div>
            <div className={styles.pg224DialogueContent}>
              <h3 className={styles.pg224DialogueTitle}>Dialogue 9</h3>
              <p className={styles.pg224Question}>When can we have the meeting? {renderAudioIcons(audio18e, audio18p)}</p>
              <p className={styles.pg224Answer}>We can have the meeting tomorrow morning {renderAudioIcons(audio19e, audio19p)}</p>
            </div>
            <div className={styles.pg224DialogueContent}>
              <h3 className={styles.pg224DialogueTitle}>Dialogue 11</h3>
              <p className={styles.pg224Question}>Why can't he attend the party? {renderAudioIcons(audio22e, audio22p)}</p>
              <p className={styles.pg224Answer}>He can't attend the party because he has to work {renderAudioIcons(audio23e, audio23p)}</p>
            </div>
            <div className={styles.pg224DialogueContent}>
              <h3 className={styles.pg224DialogueTitle}>Dialogue 13</h3>
              <p className={styles.pg224Question}>How many languages can you speak? {renderAudioIcons(audio26e, audio26p)}</p>
              <p className={styles.pg224Answer}>I can speak two languages fluently {renderAudioIcons(audio27e, audio27p)}</p>
            </div>
          </div>

          <div className={styles.pg224Column}>
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
