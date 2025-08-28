import React, { useState, useRef } from 'react';

import styles from './pagina107.module.css';

import campainha from '../assets/icons/campainha.png';
import eng_audio_icon from '../assets/icons/eng_audio_icon.webp';
import ptbr_audio_icon from '../assets/icons/ptbr_audio_icon.webp';
import white_play_icon from '../assets/icons/white_play_icon.png';

import negativaAudio from '../assets/audios/negativa.mp3';
import sujeitoAudio from '../assets/audios/sujeito.mp3';
import global_grammar from '../assets/audios/global_grammar.mp3';
import global_simple_present from '../assets/audios/global_simple_present.mp3';
import global_simple_present_main from '../assets/audios/global_simple_present_main.mp3';
import verbo_auxiliarAudio from '../assets/audios/verbo_auxiliar.mp3';
import adverbioAudio from '../assets/audios/adverbio.mp3';
import verboAudio from '../assets/audios/verbo.mp3';
import objeto_complemento_audio from '../assets/audios/objeto_complemento.mp3';
import traducaoAudio from '../assets/audios/traducao.mp3';

import pg107_audio2 from '../assets/audios/pg107_audio2.mp3';
import pg107_audio3 from '../assets/audios/pg107_audio3.mp3';
import pg107_trad2 from '../assets/audios/pg107_trad2.mp3';
import pg107_trad3 from '../assets/audios/pg107_trad3.mp3';

import bell from '../assets/audios/bell.mp3';

const Pagina107 = () => {
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
      <div className={styles['page107__container']}>
        <header className={styles['page107__header']}>
          <h1 className={styles['page107__audio-text']}>
            Grammar
            <img
              src={eng_audio_icon}
              alt="English Audio"
              className={styles['page107__icon']}
              onClick={() => playAudio(global_grammar)}
            />
          </h1>

          <h2 className={styles['page107__audio-text']}>
            Simple Present - Main verbs
            <img
              src={eng_audio_icon}
              alt="English Audio"
              className={styles['page107__icon']}
              onClick={() => playAudio(global_simple_present_main)}
            />
          </h2>

          <h2 className={styles['page107__audio-text']} style={{ color: 'black' }}>
            Simple Present (Presente Simples)
            <img
              src={eng_audio_icon}
              alt="English Audio"
              className={styles['page107__icon']}
              onClick={() => playAudio(global_simple_present)}
            />
          </h2>
        </header>

        <main className={styles['page107__main']}>
          <div>
            <div
              className={styles['page107__table--header']}
              onClick={() => playAudio(negativaAudio)}
              style={{ cursor: 'pointer' }}
            >
              <img
                src={white_play_icon}
                alt="White Icon"
                className={styles['page107__icon-left']}
              />
              NEGATIVE
            </div>

            {/* Tabela de exemplo com ícones SOMENTE no conteúdo */}
            <table className={styles['page107__styled--table']}>
              <colgroup>
                <col className={styles['page107__subject']} />
                <col className={styles['page107__auxiliary--verb']} />
                <col className={styles['page107__adverb']} />
                <col className={styles['page107__verb']} />
                <col className={styles['page107__object--complement']} />
                <col className={styles['page107__translation']} />
              </colgroup>
              <thead>
                <tr>
                  <th onClick={() => playAudio(sujeitoAudio)} style={{ cursor: 'pointer' }}>
                    Subject
                  </th>
                  <th onClick={() => playAudio(verbo_auxiliarAudio)} style={{ cursor: 'pointer' }}>
                    Auxiliary <br /> Verb
                  </th>
                  <th onClick={() => playAudio(adverbioAudio)} style={{ cursor: 'pointer' }}>
                    <span style={{ color: 'red' }}>'Not'</span> <br /> Adverb
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
                    subject: 'He',
                    aux: 'does',
                    adv: 'not',
                    verb: 'work',
                    obj: 'every day',
                    trad: 'Ele não trabalha todos os dias',
                    audio: pg107_audio2,
                    tradAudio: pg107_trad2,
                  },
                  {
                    subject: 'She',
                    aux: "doesn't",
                    adv: '',
                    verb: 'work',
                    obj: 'at home',
                    trad: 'Ela não trabalha em casa',
                    audio: pg107_audio3,
                    tradAudio: pg107_trad3,
                  },
                ].map((row, index) => (
                  <tr key={index}>
                    <td className={styles['page107__subject']}>{row.subject}</td>
                    <td className={styles['page107__auxiliary--verb']}>{row.aux}</td>
                    <td className={styles['page107__adverb']}>{row.adv}</td>
                    <td className={styles['page107__verb']}>{row.verb}</td>
                    <td className={styles['page107__object--complement']}>
                      {row.obj}
                      <img
                        src={eng_audio_icon}
                        alt="Play English sentence"
                        className={styles['page107__icon']}
                        onClick={() => playAudio(row.audio)}
                      />
                    </td>
                    <td className={styles['page107__translation']}>
                      {row.trad}
                      <img
                        src={ptbr_audio_icon}
                        alt="Reproduzir tradução em português"
                        className={styles['page107__icon']}
                        onClick={() => playAudio(row.tradAudio)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Tabela de entrada (cabeçalhos clicáveis, sem ícones neles) */}
            <table className={styles['page107__styled--table']}>
              <colgroup>
                <col className={styles['page107__subject']} />
                <col className={styles['page107__auxiliary--verb']} />
                <col className={styles['page107__adverb']} />
                <col className={styles['page107__verb']} />
                <col className={styles['page107__object--complement']} />
                <col className={styles['page107__translation']} />
              </colgroup>
              <thead>
                <tr>
                  <th onClick={() => playAudio(sujeitoAudio)} style={{ cursor: 'pointer' }}>
                    Subject
                  </th>
                  <th onClick={() => playAudio(verbo_auxiliarAudio)} style={{ cursor: 'pointer' }}>
                    Auxiliary <br /> Verb
                  </th>
                  <th onClick={() => playAudio(adverbioAudio)} style={{ cursor: 'pointer' }}>
                    'Not' <br /> Adverb
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
                {inputValues.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((value, colIndex) => (
                      <td key={colIndex}>
                        <textarea
                          id={`input-${rowIndex}-${colIndex}`}
                          className={styles['page107__input--cell']}
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

        {/* Asides */}
        <aside className={styles['page107__aside']}>
          <div className={styles['page107__aside--notes1--a']}>
            <p>Word Bank</p>
          </div>
          <div className={styles['page107__aside--notes2--a']}>
            <p>
              Dessa forma.
              <br />
              Hard <br />
              Muito.
            </p>
          </div>
        </aside>

        <aside className={styles['page107__aside']}>
          <div className={styles['page107__aside--notes1--b']}>
            <img
              className={styles['page107__aside--img--notes--b']}
              src={campainha}
              alt="RING"
              onClick={() => playAudio(bell)}
            />
            <p>NOTE</p>
          </div>
          <div className={styles['page107__aside--notes2--b']}>
            <p>
              Don’t = Do not <br />
              Doesn’t = Does not
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Pagina107;
