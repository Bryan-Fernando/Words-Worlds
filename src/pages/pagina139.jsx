import React, { useState, useRef } from 'react';

import styles from './pagina108.module.css';

import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';
import white_play_icon from '../assets/icons/white_play_icon.png';

import global_grammar from '../assets/audios/global_grammar.mp3';
import global_simple_present from '../assets/audios/global_simple_present.mp3';
import global_simple_present_main from '../assets/audios/global_simple_present_main.mp3';
import afirmativaAudio from '../assets/audios/interrogativa_a.mp3';
import sujeitoAudio from '../assets/audios/sujeito.mp3';
import verbo_auxiliarAudio from '../assets/audios/verbo_auxiliar.mp3';
import adverbioAudio from '../assets/audios/adverbio.mp3';
import verboAudio from '../assets/audios/verbo.mp3';
import objeto_complemento_audio from '../assets/audios/objeto_complemento.mp3';
import traducaoAudio from '../assets/audios/traducao.mp3';

import pg108_audio5 from '../assets/audios/pg108_audio5.mp3';
import pg108_audio6 from '../assets/audios/pg108_audio6.mp3';
import pg108_audio7 from '../assets/audios/pg108_audio7.mp3';

import pg108_trad5 from '../assets/audios/pg108_trad5.mp3';
import pg108_trad6 from '../assets/audios/pg108_trad6.mp3';
import pg108_trad7 from '../assets/audios/pg108_trad7.mp3';

const Pagina139 = () => {
  const [inputValues, setInputValues] = useState(
    Array(3).fill(Array(6).fill(''))
  );
  const currentAudioRef = useRef(null);

  const playAudio = (audioFile) => {
    if (audioFile) {
      const audio = new Audio(audioFile);
      audio.play().catch((error) => console.error("Erro ao reproduzir áudio:", error));
    } else {
      console.warn("Áudio não encontrado.");
    }
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
      <div className={styles["page108__container"]}>
        <header className={styles["page108__header"]}>
          <h1 className={styles["page108__audio-text"]}>
            Grammar
            <img
              src={eng_audio_icon}
              alt="English Audio"
              className={styles["page108__icon"]}
              onClick={() => playAudio(global_grammar)}
            />
          </h1>

          <h2 className={styles['page108__audio-text']}>
            Simple Present - Main verbs
            <img
              src={eng_audio_icon}
              alt="English Audio"
              className={styles['page108__icon']}
              onClick={() => playAudio(global_simple_present_main)}
            />
          </h2>

          <h2
            className={styles["page108__audio-text"]}
            style={{ color: 'black' }}
          >
            Simple Present (Presente Simples)
            <img
              src={eng_audio_icon}
              alt="English Audio"
              className={styles["page108__icon"]}
              onClick={() => playAudio(global_simple_present)}
            />
          </h2>
        </header>

        <main className={styles["page108__main"]}>
          <div>
            <div
              className={styles["page108__table--header"]}
              onClick={() => playAudio(afirmativaAudio)}
              style={{ cursor: 'pointer' }}
            >
              <img
                src={white_play_icon}
                alt="White Icon"
                className={styles["page108__icon-left"]}
              />
              AFFIRMATIVE INTERROGATIVE
            </div>

            <table className={styles["page108__styled--table"]}>
              <colgroup>
                <col className={styles["page108__subject"]} />
                <col className={styles["page108__auxiliary--verb"]} />
                <col className={styles["page108__adverb"]} />
                <col className={styles["page108__verb"]} />
                <col className={styles["page108__object--complement"]} />
                <col className={styles["page108__translation"]} />
              </colgroup>
              <thead>
                <tr>
                  <th onClick={() => playAudio(verbo_auxiliarAudio)} style={{ cursor: 'pointer' }}>
                    Auxiliary <br /> Verb
                  </th>
                  <th onClick={() => playAudio(sujeitoAudio)} style={{ cursor: 'pointer' }}>
                    Subject
                  </th>
                  <th onClick={() => playAudio(adverbioAudio)} style={{ cursor: 'pointer' }}>
                    Adverb
                  </th>
                  <th onClick={() => playAudio(verboAudio)} style={{ cursor: 'pointer' }}>
                    Verb(s)
                  </th>
                  <th onClick={() => playAudio(objeto_complemento_audio)} style={{ cursor: 'pointer' }}>
                    Object <br /> Complement
                  </th>
                  <th onClick={() => playAudio(traducaoAudio)} style={{ cursor: 'pointer' }}>
                    Translation
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    sujeito: "Do",
                    verboAux: "we",
                    adverbio: "",
                    verbo: "work",
                    complemento: "on weekdays?",
                    audio: pg108_audio5,
                    tradAudio: pg108_trad5,
                    traducao: "Nós trabalhamos em dias úteis?"
                  },
                  {
                    sujeito: "Do",
                    verboAux: "you",
                    adverbio: "",
                    verbo: "work",
                    complemento: "on weekdays?",
                    audio: pg108_audio6,
                    tradAudio: pg108_trad6,
                    traducao: "Você trabalha nos fins de semana?"
                  },
                  {
                    sujeito: "Do",
                    verboAux: "they",
                    adverbio: "",
                    verbo: "work",
                    complemento: "on weekends?",
                    audio: pg108_audio7,
                    tradAudio: pg108_trad7,
                    traducao: "Eles trabalham nos fins de semana?"
                  },
                ].map((linha, index) => (
                  <tr key={index}>
                    <td className={styles["page108__subject"]}>{linha.sujeito}</td>
                    <td className={styles["page108__auxiliary--verb"]}>{linha.verboAux}</td>
                    <td className={styles["page108__adverb"]}>{linha.adverbio}</td>
                    <td className={styles["page108__verb"]}>{linha.verbo}</td>
                    <td className={styles["page108__object--complement"]}>
                      {linha.complemento}
                      <img
                        src={eng_audio_icon}
                        alt="Play English sentence"
                        className={styles["page108__icon"]}
                        onClick={() => playAudio(linha.audio)}
                      />
                    </td>
                    <td className={styles["page108__translation"]}>
                      {linha.traducao}
                      {linha.tradAudio && (
                        <img
                          src={ptbr_audio_icon}
                          alt="Reproduzir tradução em português"
                          className={styles["page108__icon"]}
                          onClick={() => playAudio(linha.tradAudio)}
                        />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <table className={styles["page108__styled--table"]}>
              <colgroup>
                <col className={styles["page108__subject"]} />
                <col className={styles["page108__auxiliary--verb"]} />
                <col className={styles["page108__adverb"]} />
                <col className={styles["page108__verb"]} />
                <col className={styles["page108__object--complement"]} />
                <col className={styles["page108__translation"]} />
              </colgroup>
              <thead>
                <tr>
                  <th onClick={() => playAudio(verbo_auxiliarAudio)} style={{ cursor: 'pointer' }}>
                    Auxiliary <br /> Verb
                  </th>
                  <th onClick={() => playAudio(sujeitoAudio)} style={{ cursor: 'pointer' }}>Subject</th>
                  <th onClick={() => playAudio(adverbioAudio)} style={{ cursor: 'pointer' }}>Adverb</th>
                  <th onClick={() => playAudio(verboAudio)} style={{ cursor: 'pointer' }}>Verb(s)</th>
                  <th onClick={() => playAudio(objeto_complemento_audio)} style={{ cursor: 'pointer' }}>
                    Object <br /> Complement
                  </th>
                  <th onClick={() => playAudio(traducaoAudio)} style={{ cursor: 'pointer' }}>Translation</th>
                </tr>
              </thead>
              <tbody>
                {inputValues.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((value, colIndex) => (
                      <td key={colIndex}>
                        <textarea
                          className={styles["page108__input--cell"]}
                          value={value}
                          onChange={(e) => handleInputChange(rowIndex, colIndex, e)}
                          rows="1"
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
      </div>
    </div>
  );
};

export default Pagina139;
