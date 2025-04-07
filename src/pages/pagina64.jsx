import React from "react";

import styles from "./pagina64.module.css";

import eng_audio_icon from "../assets/icons/eng_audio_icon.webp";
import ptbr_audio_icon from "../assets/icons/ptbr_audio_icon.webp";

import imagemUnica from "../assets/images/pagina64_imagem1.webp";
import segundaImagem from "../assets/images/pagina64_imagem2.webp";
import terceiraImagem from "../assets/images/pagina64_imagem3.webp";
import quartaImagem from "../assets/images/pagina64_imagem4.webp";
import quintaImagem from "../assets/images/pagina64_imagem5.webp";
import sextaImagem from "../assets/images/pagina64_imagem6.webp";
import setimaImagem from "../assets/images/pagina64_imagem7.webp";

import pg64_audio1e from "../assets/audios/pg64_audio1e.mp3";
import pg64_audio1p from "../assets/audios/pg64_audio1p.mp3";
import pg64_audio2p from "../assets/audios/pg64_audio2p.mp3";
import pg64_audio3p from "../assets/audios/pg64_audio3p.mp3";
import pg64_audio4p from "../assets/audios/pg64_audio4p.mp3";
import pg64_audio5p from "../assets/audios/pg64_audio5p.mp3";
import pg64_audio2_1e from "../assets/audios/pg64_audio2_1e.mp3";
import pg64_audio2_2e from "../assets/audios/pg64_audio2_2e.mp3";
import pg64_audio2_3e from "../assets/audios/pg64_audio2_3e.mp3";
import pg64_audio2_4e from "../assets/audios/pg64_audio2_4e.mp3";
import pg64_audio2_5e from "../assets/audios/pg64_audio2_5e.mp3";
import pg64_audio2_6e from "../assets/audios/pg64_audio2_6e.mp3";
import pg64_audio3_1e from "../assets/audios/pg64_audio3_1e.mp3";
import pg64_audio3_2e from "../assets/audios/pg64_audio3_2e.mp3";
import pg64_audio3_3e from "../assets/audios/pg64_audio3_3e.mp3";
import pg64_audio3_4e from "../assets/audios/pg64_audio3_4e.mp3";
import pg64_audio3_5e from "../assets/audios/pg64_audio3_5e.mp3";
import pg64_audio4_1e from "../assets/audios/pg64_audio4_1e.mp3";
import pg64_audio4_2e from "../assets/audios/pg64_audio4_2e.mp3";
import pg64_audio4_3e from "../assets/audios/pg64_audio4_3e.mp3";
import pg64_audio4_4e from "../assets/audios/pg64_audio4_4e.mp3";
import pg64_audio5_1e from "../assets/audios/pg64_audio5_1e.mp3";
import pg64_audio5_2e from "../assets/audios/pg64_audio5_2e.mp3";

const Pagina64 = () => {

  const audioMap = {
    pg64_audio1e: pg64_audio1e,
    pg64_audio1p: pg64_audio1p,
    pg64_audio2p: pg64_audio2p,
    pg64_audio3p: pg64_audio3p,
    pg64_audio4p: pg64_audio4p,
    pg64_audio5p: pg64_audio5p,
    pg64_audio2_1e: pg64_audio2_1e,
    pg64_audio2_2e: pg64_audio2_2e,
    pg64_audio2_3e: pg64_audio2_3e,
    pg64_audio2_4e: pg64_audio2_4e,
    pg64_audio2_5e: pg64_audio2_5e,
    pg64_audio2_6e: pg64_audio2_6e,
    pg64_audio3_1e: pg64_audio3_1e,
    pg64_audio3_2e: pg64_audio3_2e,
    pg64_audio3_3e: pg64_audio3_3e,
    pg64_audio3_4e: pg64_audio3_4e,
    pg64_audio3_5e: pg64_audio3_5e,
    pg64_audio4_1e: pg64_audio4_1e,
    pg64_audio4_2e: pg64_audio4_2e,
    pg64_audio4_3e: pg64_audio4_3e,
    pg64_audio4_4e: pg64_audio4_4e,
    pg64_audio5_1e: pg64_audio5_1e,
    pg64_audio5_2e: pg64_audio5_2e,
  };

  const playAudio = (audioKey) => {
    const audioSrc = audioMap[audioKey];
    if (audioSrc) {
      const audio = new Audio(audioSrc);
      audio.play();
    } else {
      console.warn(`Áudio não encontrado para a chave: ${audioKey}`);
    }
  };



  return (
    <div className={styles["page64__container"]}>
      <header className={styles["page64__header"]}>
        <h1 className={styles["page64__title"]}>
          Reading and Comprehension
          <img
            src={eng_audio_icon}
            alt="English audio"
            className={styles["page64__audio-icon"]}
            onClick={() => playAudio('pg64_audio1e')}
          />
          <img
            src={ptbr_audio_icon}
            alt="Portuguese audio"
            className={styles["page64__audio-icon"]}
            onClick={() => playAudio('pg64_audio1p')}
          />
        </h1>
      </header>

      <div className={styles["page64__background-container"]}>
        <img
          src={imagemUnica}
          alt="Background"
          className={styles["page64__background-image"]}
        />
      </div>

      <div className={styles["page64__main"]}>

        <div
          className={`${styles["page64__image-wrapper"]} ${styles["page64__image--my-family"]}`}
        >
          <div className={styles["page64__image-container"]}>
            <img
              src={segundaImagem}
              alt="Imagem 2"
              className={styles["page64__image"]}
            />
          </div>
          <div
            className={`${styles["page64__text-box"]} ${styles["page64__text--my-family"]}`}
          >
            <p>
              <span onClick={() => playAudio("pg64_audio2_1e")}><strong>My Family.</strong></span> <br />
              <span onClick={() => playAudio("pg64_audio2_2e")}>Hi! I'm Indira Alves França. </span>
              <span onClick={() => playAudio("pg64_audio2_3e")}>I'm an educator/pedagogue.</span>
              <span onClick={() => playAudio("pg64_audio2_4e")}>I am from Paraty – Brazil. </span>
              <span onClick={() => playAudio("pg64_audio2_5e")}>I'm Brazilian. </span>
              <span onClick={() => playAudio("pg64_audio2_6e")}>I'm 37 years old.</span>
              <img
                src={ptbr_audio_icon}
                alt="Play Portuguese Audio"
                className={styles["page64__audio-icon"]}
                onClick={() => playAudio('pg64_audio2p')}
              />
            </p>

          </div>
        </div>

        <div
          className={`${styles["page64__image-wrapper"]} ${styles["page64__image--married"]}`}
        >
          <div className={styles["page64__image-container"]}>
            <img
              src={terceiraImagem}
              alt="Imagem 3"
              className={styles["page64__image"]}
            />
          </div>
          <div
            className={`${styles["page64__text-box"]} ${styles["page64__text--married"]}`}
          >
            <p onClick={() => playAudio("pg64_audio3")} style={{ cursor: "pointer" }}>
              <span onClick={() => playAudio("pg64_audio3_1e")}>I am married to Sergio França. </span>
              <span onClick={() => playAudio("pg64_audio3_2e")}>He is a journalist. </span>
              <span onClick={() => playAudio("pg64_audio3_3e")}>He is also Brazilian, from Paraty. </span>
              <span onClick={() => playAudio("pg64_audio3_4e")}>He is 39 years old. </span>
              <span onClick={() => playAudio("pg64_audio3_5e")}>We are a married couple.</span>
              <img
                src={ptbr_audio_icon}
                alt="Play Portuguese Audio"
                className={styles["page64__audio-icon"]}
                onClick={() => playAudio('pg64_audio3p')}
              />
            </p>

          </div>
        </div>

        <div
          className={`${styles["page64__image-wrapper"]} ${styles["page64__image--children"]}`}
        >
          <div className={styles["page64__image-container"]}>
            <img
              src={quartaImagem}
              alt="Imagem 4"
              className={styles["page64__image"]}
            />
          </div>
          <div className={styles["page64__text-wrapper"]}>
            <div
              className={`${styles["page64__text-box"]} ${styles["page64__text--children"]}`}
            >
              <p onClick={() => playAudio("pg64_audio4")} style={{ cursor: "pointer" }}>
                <span onClick={() => playAudio("pg64_audio4_1e")}>We have two children. </span>
                <span onClick={() => playAudio("pg64_audio4_2e")}>Our son, Eduardo is 10 (ten) years old. </span>
                <span onClick={() => playAudio("pg64_audio4_3e")}>Our daughter, Alice is 9 (nine) years old. </span>
                <span onClick={() => playAudio("pg64_audio4_4e")}>They're both in elementary school.</span>
                <img
                  src={ptbr_audio_icon}
                  alt="Play Portuguese Audio"
                  className={styles["page64__audio-icon"]}
                  onClick={() => playAudio('pg64_audio4p')}
                />
              </p>

            </div>
          </div>
        </div>

        <div
          className={`${styles["page64__image-wrapper"]} ${styles["page64__image--sister"]}`}
        >
          <div className={styles["page64__image-container"]}>
            <img
              src={quintaImagem}
              alt="Imagem 5"
              className={styles["page64__image"]}
            />
          </div>

          <div className={styles["page64__text-wrapper"]}>
            <div
              className={`${styles["page64__text-box"]} ${styles["page64__text--sister"]}`}
            >
              <p onClick={() => playAudio("pg64_audio5")} style={{ cursor: "pointer" }}>
                <span onClick={() => playAudio("pg64_audio5_1e")}>My sister Marilia Alves is single. </span>
                <span onClick={() => playAudio("pg64_audio5_2e")}>Currently in the Bahamas, on vacation.</span>
                <img
                  src={ptbr_audio_icon}
                  alt="Play Portuguese Audio"
                  className={styles["page64__audio-icon"]}
                  onClick={() => playAudio('pg64_audio5p')}
                />
              </p>

            </div>
          </div>
        </div>

        <div
          className={`${styles["page64__image-wrapper"]} ${styles["page64__image--vacation1"]}`}
        >
          <div className={styles["page64__image-container"]}>
            <img
              src={sextaImagem}
              alt="Imagem 6"
              className={styles["page64__image"]}
            />
          </div>
        </div>

        <div
          className={`${styles["page64__image-wrapper"]} ${styles["page64__image--vacation2"]}`}
        >
          <div className={styles["page64__image-container"]}>
            <img
              src={setimaImagem}
              alt="Imagem 7"
              className={styles["page64__image"]}
            />
          </div>
        </div>
      </div>
    </div>
  );

};

export default Pagina64;
