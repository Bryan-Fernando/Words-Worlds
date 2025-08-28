import React, { useState, useRef } from 'react';

import styles from './pagina106.module.css';

import campainha from '../assets/icons/campainha.png';
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';
import white_play_icon from '../assets/icons/white_play_icon.png';

import global_grammar from '../assets/audios/global_grammar.mp3';
import global_simple_present_main from '../assets/audios/global_simple_present_main.mp3';
import afirmativaAudio from '../assets/audios/afirmativa.mp3';
import sujeitoAudio from '../assets/audios/sujeito.mp3';
import verbo_auxiliarAudio from '../assets/audios/verbo_auxiliar.mp3';
import adverbioAudio from '../assets/audios/adverbio.mp3';
import verboAudio from '../assets/audios/verbo.mp3';
import objeto_complemento_audio from '../assets/audios/objeto_complemento.mp3';
import traducaoAudio from '../assets/audios/traducao.mp3';

import pg106_audio4 from '../assets/audios/pg106_audio4.mp3';
import pg106_trad4 from '../assets/audios/pg106_trad4.mp3';
import bell from '../assets/audios/bell.mp3';

const Pagina106 = () => {
  const [inputValues, setInputValues] = useState(
    Array(3).fill(Array(6).fill(''))
  );

  const currentAudioRef = useRef(null);

  const playAudio = (audioFile) => {
    if (currentAudioRef.current) {
      currentAudioRef.current.pause();
      currentAudioRef.current.currentTime = 0;
    }

    const audio = new Audio(audioFile);
    currentAudioRef.current = audio;
    audio.play();
  };

  const handleInputChange = (rowIndex, colIndex, e) => {
    const newValue = e.target.value;
    const updatedValues = inputValues.map((row, i) =>
      row.map((value, j) => (i === rowIndex && j === colIndex ? newValue : value))
    );
    setInputValues(updatedValues);
  };

  return (
    <div>
      <div className={styles["page106__container"]}>
        <header className={styles["page106__header"]}>
          <h1 className={styles["page106__audio-text"]}>
            Grammar
            <img
              src={eng_audio_icon}
              alt="English Audio"
              className={styles["page106__icon"]}
              onClick={() => playAudio(global_grammar)}
            />
          </h1>
          <h2 className={styles["page106__audio-text"]}>
            Simple Present - Main verbs
            <img
              src={eng_audio_icon}
              alt="English Audio"
              className={styles["page106__icon"]}
              onClick={() => playAudio(global_simple_present_main)}
            />
            <br />
            <span style={{ color: 'black', fontSize: '3rem', position: 'relative', bottom: '1rem' }}>
              Presente simples - Verbos principais
            </span>
          </h2>
        </header>

        <main className={styles["page106__main"]}>
          <div>
            <div
              className={styles["page106__table--header"]}
              onClick={() => playAudio(afirmativaAudio)}
              style={{ cursor: 'pointer' }}
            >
              <img
                src={white_play_icon}
                alt="White Icon"
                className={styles["page106__icon-left"]}
              />
              AFFIRMATIVE
            </div>

            <table className={styles["page106__styled--table"]}>
              <colgroup>
                <col className={styles["page106__sujeito"]} />
                <col className={styles["page106__verbo--auxiliar"]} />
                <col className={styles["page106__adverbio"]} />
                <col className={styles["page106__verbo"]} />
                <col className={styles["page106__objetivo--complemento"]} />
                <col className={styles["page106__traducao"]} />
              </colgroup>
              <thead>
                <tr>
                  <th onClick={() => playAudio(sujeitoAudio)} style={{ cursor: 'pointer' }}>Subject</th>
                  <th onClick={() => playAudio(verbo_auxiliarAudio)} style={{ cursor: 'pointer' }}>Auxiliary <br /> Verb</th>
                  <th onClick={() => playAudio(adverbioAudio)} style={{ cursor: 'pointer' }}>Adverb</th>
                  <th onClick={() => playAudio(verboAudio)} style={{ cursor: 'pointer' }}>Verb(s)</th>
                  <th onClick={() => playAudio(objeto_complemento_audio)} style={{ cursor: 'pointer' }}>Object <br /> Complement</th>
                  <th onClick={() => playAudio(traducaoAudio)} style={{ cursor: 'pointer' }}>Translation</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { subject: "It", verb: "works", complement: "now", audio: pg106_audio4, translation: "Funciona agora", tradAudio: pg106_trad4 },
                ].map((row, index) => (
                  <tr key={index}>
                    <td className={styles["page106__sujeito"]} style={{ textAlign: 'center' }}>
                      {row.subject}
                    </td>
                    <td className={styles["page106__verbo--auxiliar"]}></td>
                    <td className={styles["page106__adverbio"]}></td>
                    <td className={styles["page106__verbo"]} style={{ color: '#A61C28' }}>
                      {row.verb}
                    </td>
                    <td className={styles["page106__objetivo--complemento"]}>
                      {row.complement}
                      <img
                        src={eng_audio_icon}
                        alt="Play English sentence"
                        className={styles["page106__icon"]}
                        onClick={() => playAudio(row.audio)}
                      />
                    </td>
                    <td className={styles["page106__traducao"]}>
                      {row.translation}
                      <img
                        src={ptbr_audio_icon}
                        alt="Reproduzir tradução em português"
                        className={styles["page106__icon"]}
                        onClick={() => playAudio(row.tradAudio)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <table className={styles["page106__styled--table"]}>
              <colgroup>
                <col className={styles["page106__sujeito"]} />
                <col className={styles["page106__verbo--auxiliar"]} />
                <col className={styles["page106__adverbio"]} />
                <col className={styles["page106__verbo"]} />
                <col className={styles["page106__objetivo--complemento"]} />
                <col className={styles["page106__traducao"]} />
              </colgroup>
              <thead>
                <tr>
                  <th onClick={() => playAudio(sujeitoAudio)} style={{ cursor: 'pointer' }}>Subject</th>
                  <th onClick={() => playAudio(verbo_auxiliarAudio)} style={{ cursor: 'pointer' }}>Auxiliary <br /> Verb</th>
                  <th onClick={() => playAudio(adverbioAudio)} style={{ cursor: 'pointer' }}>Adverb</th>
                  <th onClick={() => playAudio(verboAudio)} style={{ cursor: 'pointer' }}>Verb(s)</th>
                  <th onClick={() => playAudio(objeto_complemento_audio)} style={{ cursor: 'pointer' }}>Object <br /> Complement</th>
                  <th onClick={() => playAudio(traducaoAudio)} style={{ cursor: 'pointer' }}>Translation</th>
                </tr>
              </thead>
              <tbody>
                {inputValues.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((value, colIndex) => (
                      <td key={colIndex}>
                        <textarea
                          id={`input-${rowIndex}-${colIndex}`}
                          className={styles["page106__input--cell"]}
                          value={value}
                          rows="1"
                          onChange={(e) => handleInputChange(rowIndex, colIndex, e)}
                          style={{
                            resize: 'none',
                            overflowWrap: 'break-word',
                            wordWrap: 'break-word',
                          }}
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>

        <aside className={styles["page106__aside"]}>
          <div className={styles["page106__aside--notes1--a"]}>
            <p>Word Bank</p>
          </div>
          <div className={styles["page106__aside--notes2--a"]}>
            <p>To work <br /> Trabalhar/Funcionar.</p>
          </div>
        </aside>

        <aside className={styles["page106__aside"]}>
          <div className={styles["page106__aside--notes1--b"]}>
            <img
              className={styles["page106__aside--img--notes--b"]}
              src={campainha}
              alt="RING"
              onClick={() => playAudio(bell)}
            />
            <p>NOTE:</p>
          </div>
          <div className={styles["page106__aside--notes2--b"]}>
            <p>
              Acrescentar “s” somente nos verbos com os pronomes he / she / it.<br />
              USO: Para falar de ações cotidianas, hábitos, verdades, fatos, características; descrever ações em geral.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Pagina106;
